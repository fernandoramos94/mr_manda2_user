
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/services/cart.service';

import { ScheduleOrderPage } from '../schedule-order/schedule-order.page';

@Component({
    selector: 'app-choose-address',
    templateUrl: './choose-address.page.html',
    styleUrls: ['./choose-address.page.scss'],
})
export class ChooseAddressPage implements OnInit {
    id: any;
    myaddress: any[] = [];
    from: any;
    selectedAddress: any;
    dummy = Array(10);

    scheduleData: any = {
        status: false,
        time: null,
    };
    showScheduleButton = false;

    constructor(
        private router: Router,
        public api: ApisService,
        public util: UtilService,
        private navCtrl: NavController,
        private route: ActivatedRoute,
        private popoverController: PopoverController,
        private cart: CartService,
        public modalController: ModalController,
    ) {
        this.route.queryParams.subscribe(data => {
            if (data && data.from) {
                this.from = data.from;
            }
        });
        this.getAddress();
        this.util.getObservable().subscribe((data) => {
            this.getAddress();
        });
    }

    ngOnInit() {
        if (this.cart.cartStoreInfo) {
            this.api.post('users/getById', {
                id: this.cart.cartStoreInfo.uid,
            }).then(async (data: any) => {
                if (data && data.status === 200 && data.data && data.data.length) {
                    try {
                        const response = await this.api.post('stores/getByUid', { id: data.data[0].id });

                        this.showScheduleButton = [
                            'supermercado',
                        ].includes((response.data[0]?.category || '').toLowerCase());
                    } catch (error) {
                        //
                    }
                }
            }, () => { });
        }
    }

    async showModalSchedule() {
        try {
            const redirectTo: boolean = await this.selectAddress();

            if (this.showScheduleButton) {
                const modal = await this.modalController.create({
                    component: ScheduleOrderPage,
                });

                modal.onWillDismiss()
                    .then((response: any) => {
                        if (response.data.time !== null) {
                            this.scheduleData.time = response.data.time;

                            localStorage.setItem('scheduleData', JSON.stringify(this.scheduleData));
                            if (redirectTo) {
                                this.router.navigate(['payments']);
                            }
                        }
                    })
                    .catch(() => { });

                return await modal.present();
            } else {
                localStorage.setItem('scheduleData', JSON.stringify(this.scheduleData));
                if (redirectTo) {
                    this.router.navigate(['payments']);
                }
            }
        } catch (error) {
            //
        }
    }

    getAddress() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('address/getByUid', param).then((data) => {
            this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                this.myaddress = data.data;
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }


    addNew() {
        this.router.navigate(['add-new-address']);
    }

    async selectAddress(): Promise<boolean> {
        if (this.from === 'cart') {
            const selected = this.myaddress.filter(x => x.id === this.selectedAddress);
            if (selected && selected.length && this.cart.cartStoreInfo && this.cart.cartStoreInfo.lat) {
                const item = selected[0];
                const distance = await this.getDistanceFromLatLonInKm(parseFloat(this.cart.cartStoreInfo.lat), parseFloat(this.cart.cartStoreInfo.lng), parseFloat(item.lat), parseFloat(item.lng));

                const permittedDistance = parseInt(this.util.general.allowDistance);
                if (distance <= permittedDistance) {
                    this.cart.deliveryAddress = item;
                    this.cart.calcuate();
                    return true;
                } else {
                    this.util.errorToast('La distancia entre su dirección y la dirección del restaurante debe ser menor a ' + permittedDistance + ' KM');
                }
            }
        }

        return false;
    }

    async getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    async openMenu(item, events) {

        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: events,
            mode: 'ios',
        });
        popover.onDidDismiss().then(data => {
            if (data && data.data) {
                if (data.data === 'edit') {
                    const navData: NavigationExtras = {
                        queryParams: {
                            from: 'edit',
                            data: JSON.stringify(item)
                        }
                    };
                    this.router.navigate(['add-new-address'], navData);
                } else if (data.data === 'delete') {
                    Swal.fire({
                        title: this.util.translate('Are you sure?'),
                        text: this.util.translate('to delete this address'),
                        icon: 'question',
                        confirmButtonText: this.util.translate('Yes'),
                        backdrop: false,
                        background: 'white',
                        showCancelButton: true,
                        showConfirmButton: true,
                        cancelButtonText: this.util.translate('cancel')
                    }).then(data => {
                        if (data && data.value) {
                            this.util.show();
                            const param = {
                                id: item.id
                            };
                            this.api.post('address/deleteList', param).then(info => {
                                this.util.hide();
                                this.getAddress();
                            }, error => {
                                this.util.hide();
                                this.util.errorToast('Algo ha ido mal');
                            }).catch((error) => {
                                this.util.hide();
                                this.util.errorToast('Algo ha ido mal');
                            });
                        }
                    });

                }
            }
        });
        await popover.present();
    }
}
