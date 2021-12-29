//
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController, PopoverController, IonContent, ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { VariationsPage } from '../variations/variations.page';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
    @ViewChild('content', { static: true }) content: IonContent;


    id: any;
    name: any;
    descritions: any;
    cover: any = '';
    address: any;
    ratting: any;
    time: any;
    totalRatting: any;
    dishPrice: any;
    cusine: any[] = [];
    foods: any[] = [];
    dummyFoods: any[] = [];
    categories: any[] = [];
    dummy = Array(5);
    veg: boolean;
    deliveryAddress: any = '';
    closeTime: any = '';
    openTime: any = '';

    searchByProduct: string = '';
    filteredProducts: Array<any> = [];

    restDetail;
    caetId: any;

    noVariantCart: any[] = [];
    constructor(
        private route: ActivatedRoute,
        public api: ApisService,
        public util: UtilService,
        private navCtrl: NavController,
        private alertController: AlertController,
        private router: Router,
        private popoverController: PopoverController,
        private modalCtrl: ModalController,
        public cart: CartService,
        private chMod: ChangeDetectorRef
    ) {
        this.route.queryParams.subscribe(data => {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }

    ngOnInit() {
    }

    changeFilters(): any {
        const raw = this.foods;
        const value = this.searchByProduct.trim().toLowerCase();

        const newData = raw.filter((item: any): boolean => {

            let validation: boolean = false;
            try {
                validation = (
                    !!(new RegExp(value, 'g')).exec(item.name)
                );
            } catch (error) {
            }

            return validation;
        });


        this.filteredProducts = value !== '' ? newData : raw;

    }


    getVenueDetails() {

        const body = {
            id: this.id
        };

        this.api.post('stores/getByUid', body).then((datas: any) => {
            if (datas && datas.status === 200 && datas.data.length > 0) {
                const data = datas.data[0];
                if (data) {
                    this.cart.cartStoreInfo = data;
                    this.name = data.name;
                    this.descritions = data.descriptions;
                    this.cover = data.cover;
                    this.address = data.address;
                    this.ratting = data.rating ? data.rating : 0;
                    this.totalRatting = data.total_rating ? data.total_rating : 0;
                    this.dishPrice = data.dish;
                    this.time = data.time;
                    if (data.cusine && data.cusine !== '') {
                        this.cusine = JSON.parse(data.cusine);
                    } else {
                        this.cusine = [];
                    }
                    this.chMod.detectChanges();
                    this.getCates();
                } else {
                    this.util.errorToast('Restaurant not found');
                    this.navCtrl.back();
                }
            } else {
                this.dummy = [];
            }
        }, error => {
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.util.errorToast('Algo ha ido mal');
        });
    }

    getCates() {
        const param = {
            id: this.id
        };
        this.api.post('categories/getByRestId', param).then((data: any) => {
            if (data && data.status === 200 && data.data.length) {
                data.data = data.data.filter(x => x.status === '1');
                this.categories = data.data;
                this.caetId = this.categories[0].id;
                this.getFoodByCid();
            } else {
                this.dummy = [];
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }

    getFoodByCid() {
        const param = {
            id: this.id,
            cid: this.caetId
        };
        this.dummy = Array(5);
        this.foods = [];
        this.api.post('products/getFoodByCid', param).then((data: any) => {
            this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                data.data = data.data.filter(x => x.status === '1');
                data.data.forEach(element => {
                    if (element.variations && element.variations !== '' && typeof element.variations === 'string') {
                        element.variations = JSON.parse(element.variations);
                    } else {
                        element.variations = [];
                    }
                    if (this.cart.itemId.includes(element.id)) {
                        const index = this.cart.cart.filter(x => x.id === element.id);
                        if (index && index.length) {
                            element['quantiy'] = index[0].quantiy;
                            element['selectedItem'] = index[0].selectedItem;
                        } else {
                            element['quantiy'] = 0;
                            element['selectedItem'] = [];
                        }
                    } else {
                        element['quantiy'] = 0;
                        element['selectedItem'] = [];
                    }
                });
                this.foods = data.data;
                this.filteredProducts = this.foods;
                this.dummyFoods = data.data;
                this.chMod.detectChanges();
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }

    segmentChanged() {
        this.getFoodByCid();
    }

    getFoods() {

    }

    back() {
        this.navCtrl.back();
    }

    getCusine(cusine) {
        return cusine.join('-');
    }
    add(index) {
        const uid = localStorage.getItem('uid');
        if (uid && uid != null && uid !== 'null') {
            if (this.cart.cart.length === 0) {
                if (this.foods[index].variations && this.foods[index].variations.length) {
                    this.openVariations(index);
                } else {
                    this.foods[index].quantiy = 1;
                    this.cart.addItem(this.foods[index]);
                }
            } else {
                const restIds = this.cart.cart.filter(x => x.restId === this.id);
                if (restIds && restIds.length > 0) {
                    if (this.foods[index].variations && this.foods[index].variations.length) {
                        this.openVariations(index);
                    } else {
                        this.foods[index].quantiy = 1;
                        this.cart.addItem(this.foods[index]);
                    }
                } else {
                    this.dummy = [];
                    this.presentAlertConfirm();
                }
            }
            this.chMod.detectChanges();
        } else {
            this.router.navigate(['/login']);
        }
    }

    getQuanity(id) {
        const data = this.cart.cart.filter(x => x.id === id);
        return data[0].quantiy;
    }

    statusChange() {
        const value = this.veg === true ? '1' : '0';
        this.changeStatus(value);
    }

    changeStatus(value) {
        this.foods = this.dummyFoods.filter(x => x.veg === value);
        this.chMod.detectChanges();
    }

    addQ(index) {
        if (this.foods[index].variations && this.foods[index].variations.length) {
            if (this.foods[index].quantiy !== 0) {
            }
            this.openVariations(index);
        } else {
            this.foods[index].quantiy = this.foods[index].quantiy + 1;
            this.cart.addQuantity(this.foods[index].quantiy, this.foods[index].id);
            this.chMod.detectChanges();
        }
    }

    removeQ(index) {
        if (this.foods[index].quantiy !== 0) {
            if (this.foods[index].quantiy >= 1 && !this.foods[index].variations.length) {
                this.foods[index].quantiy = this.foods[index].quantiy - 1;
                if (this.foods[index].quantiy === 0) {
                    this.foods[index].quantiy = 0;
                    this.cart.removeItem(this.foods[index].id);
                } else {
                    this.cart.addQuantity(this.foods[index].quantiy, this.foods[index].id);
                }
                this.chMod.detectChanges();
            } else {
                this.openVariations(index);
            }
        } else {
            this.foods[index].quantiy = 0;
            this.cart.removeItem(this.foods[index].id);
            this.chMod.detectChanges();
        }
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: this.util.translate('Warning'),
            message: this.util.translate(`Ya tienes artículos en el carrito con un restaurante diferente`),
            buttons: [
                {
                    text: this.util.translate('Cancelar'),
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: this.util.translate('Vaciar carrito'),
                    handler: () => {
                        this.cart.clearCart();
                    }
                }
            ]
        });

        await alert.present();
    }

    async openVariations(index) {
        const modal = await this.modalCtrl.create({
            component: VariationsPage,
            cssClass: 'custom_modal2',
            componentProps: {
                name: this.name,
                food: this.foods[index]
            }
        });
        modal.onDidDismiss().then((data) => {
            let isValid = false;
            if (data.role === 'new') {
                this.foods[index].quantiy = 1;
                const carts = {
                    item: data.data,
                    total: 1
                };
                this.foods[index].selectedItem.push(carts);
                this.cart.addVariations(this.foods[index], carts, data.role);
                isValid = true;
            } else if (data.role === 'sameChoice') {
                this.foods[index].selectedItem = data.data;
                this.foods[index].quantiy = this.foods[index].selectedItem.length;
                if (this.foods[index].quantiy === 0) {
                    this.foods[index].quantiy = 0;
                    this.cart.removeItem(this.foods[index].id);
                } else {
                    this.cart.addVariations(this.foods[index], 'carts', data.role);
                    isValid = true;
                }
            } else if (data.role === 'newCustom') {
                const carts = {
                    item: data.data,
                    total: 1
                };
                this.foods[index].selectedItem.push(carts);
                this.foods[index].quantiy = this.foods[index].quantiy + 1;
                this.cart.addVariations(this.foods[index], carts, data.role);
                isValid = true;
            } else if (data.role === 'remove') {
                this.foods[index].quantiy = 0;
                this.foods[index].selectedItem = [];
                isValid = true;
            } else if (data.role === 'dismissed') {

                this.foods[index].quantiy = 1;
                const carts = {
                    item: data.data,
                    total: 1
                };
                this.foods[index].selectedItem.push(carts);
                this.cart.addVariations(this.foods[index], carts, 'new');
                isValid = true;
            }
            if (isValid) {
                this.cart.calcuate();
            }
        });
        return await modal.present();
    }


    viewCart() {
        this.navCtrl.navigateRoot(['tabs/tab3']);
    }

    async presentPopover(ev: any) {
        if (this.categories.length <= 0) {
            return false;
        }
        const popover = await this.popoverController.create({
            component: MenuComponent,
            event: ev,
            componentProps: { data: this.categories, id: this.caetId },
            mode: 'ios',
        });
        popover.onDidDismiss().then(data => {
            if (data && data.data) {
                this.caetId = data.data.id;
                document.getElementById(this.caetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }
        });
        await popover.present();

    }

    openDetails() {
        const navData: NavigationExtras = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['rest-details'], navData);
    }



    category() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('categories/getByRestId', param).then((data: any) => {
            if (data && data.status === 200 && data.data.length) {
                this.categories = data.data;
                this.caetId = this.categories[0].id;
                this.getFoodByCid();
            } else {
                this.dummy = [];
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }

    onSearchChange(event) {
        if (event.detail.value) {
        } else {
            this.category();
        }
    }
}
