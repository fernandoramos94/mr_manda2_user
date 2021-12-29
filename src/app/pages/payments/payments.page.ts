import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, NavController } from '@ionic/angular';
import * as  moment from 'moment';
import { CartService } from 'src/app/services/cart.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

declare const MercadoPago;
declare const paypal;

@Component({
    selector: 'app-payments',
    templateUrl: './payments.page.html',
    styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
    havePayment: boolean;
    haveStripe: boolean;
    havePayPal: boolean;
    haveCOD: boolean;
    havePayTM: boolean;
    haveInstamojo: boolean;
    havepayStack: boolean;
    haveflutterwave: boolean;
    instamojo = {
        key: '',
        token: '',
        code: ''
    };
    instaENV: any;
    paystack = {
        pk: '',
        sk: '',
        code: ''
    };
    flutterwave = {
        pk: '',
        code: ''
    };

    haveRazor: boolean;
    razorKey: any;

    storeFCM: any;

    scheduleData: any = {
        status: false,
        time: null,
    };

    card = {
        card_number: '',
        year: '',
        month: '',
        name: '',
        identification: '',
        email: '',
        type: ''
    }
    getCard: any = [];
    cardForm: any;

    showScheduleButton = false;

    constructor(
        private router: Router,
        public api: ApisService,
        public util: UtilService,
        private navCtrl: NavController,
        public cart: CartService,
        private iab: InAppBrowser,
        public modalController: ModalController
    ) {
        const param = {
            id: this.cart.cartStoreInfo.uid
        };
        this.api.post('users/getById', param).then(async (data: any) => {
            if (data && data.status === 200 && data.data && data.data.length) {
                this.storeFCM = data.data[0].fcm_token;
            }
        }, error => {
        });

        const param_user = {
            id: localStorage.getItem('uid')
        };

        this.api.post('users/getById', param_user).then(async (data: any) => {
            if (data && data.status === 200 && data.data && data.data.length) {
                let ccc = data.data[0];
                this.card.name = ccc.first_name + ' ' + ccc.last_name;
                this.card.email = ccc.email
            }
        }, error => {
        });
        this.getPayments();
        this.cards();

    }

    async ionViewDidEnter() {
        const orderSend = await this.jsonOrder();

        const statusPay = false;

        paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'blue',
            layout: 'vertical',
            label: 'paypal',
            
          },
          createOrder: (data, actions) => {
            return actions.order.create(orderSend);
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((orderData) => {
              this.makeOrder('paypal', 'fromApp');
            });
          },
          onError: function(err) {
            this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
          }
        }).render('#paypalButton');
    }

    cards(){
        let dataSend = {
            user_id : localStorage.getItem('uid')
        }
        fetch("https://api.mrmandados.xyz/cards.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataSend),
        }).then(res => res.json())
        .then(res => {
            console.log(res);
            this.getCard = res;
        })
        .catch( err => console.error(err));
    }

    cardHide(card) {
        let hideNum = [];
          for(let i = 0; i < card.length; i++){
          if(i < card.length-4){
            hideNum.push("*");
          }else{
            hideNum.push(card[i]);
          }
        }
        return hideNum.join("");
    }

    auto(data){
        this.util.show();
        
        this.card.type = data.type;
        this.merchand();
        setTimeout(() => {
            (document.getElementById("form-checkout__cardNumber") as HTMLInputElement).value = data.number;
            setTimeout(() => {
                (document.getElementById("form-checkout__cardNumber") as HTMLInputElement).dispatchEvent(new KeyboardEvent('keyup',  {'key':'y'}));
            }, 50);
            this.card.card_number = data.number;
            this.card.month = data.month;
            this.card.year = data.year;
            this.util.hide();
        }, 600);
        

        
    }

    async merchand() {
        const mp = new MercadoPago('APP_USR-4f97bee7-8daa-4581-af99-1645e17b1ad2');
        if(this.cardForm){
            this.cardForm.unmount();
        }
        setTimeout(() => {
            
            this.cardForm = mp.cardForm({
                amount: this.cart.totalPrice,
                autoMount: true,
                form: {
                    id: "form-checkout",
                    cardholderName: {
                        id: "form-checkout__cardholderName",
                        placeholder: "Nombre",
                    },
                    cardholderEmail: {
                        id: "form-checkout__cardholderEmail",
                        placeholder: "Correo",
                    },
                    cardNumber: {
                        id: "form-checkout__cardNumber",
                        placeholder: "Número de la tarjeta",
                    },
                    cardExpirationMonth: {
                        id: "form-checkout__cardExpirationMonth",
                        placeholder: "MM",
                    },
                    cardExpirationYear: {
                        id: "form-checkout__cardExpirationYear",
                        placeholder: "AA",
                    },
                    securityCode: {
                        id: "form-checkout__securityCode",
                        placeholder: "CVV",
                    },
                    installments: {
                        id: "form-checkout__installments",
                        placeholder: "Cuotas",
                    },
                    identificationType: {
                        id: "form-checkout__identificationType",
                        placeholder: "Tipo de documento",
                    },
                    identificationNumber: {
                        id: "form-checkout__identificationNumber",
                        placeholder: "Identificación",
                    },
                    issuer: {
                        id: "form-checkout__issuer",
                        placeholder: "Banco emisor",
                    },
                },
                callbacks: {
                    onFormMounted: error => {
                        if (error) return console.warn("Form Mounted handling error: ", error);
                        console.log("Form mounted");
                    },
                    onFormUnmounted: function(error) {
                        if (error) return console.log('Form Unmounted handling error ', error)
                        console.log('Form unmounted')
                    },
                    onCardTokenReceived: (error, token) => {
                        if (error){
                            alert(JSON.stringify(error));
                            this.util.showToast(error[0].message, 'danger', 'bottom');
                        }
                    },
                    onSubmit: event => {
                        event.preventDefault();
                        this.util.show();
                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = this.cardForm.getCardFormData();

                        var data = {
                            token,
                            issuer_id,
                            payment_method_id,
                            transaction_amount: Number(amount),
                            installments: Number(installments),
                            description: "Pago desde la aplicacion",
                            payer: {
                                email,
                                identification: {
                                    type: identificationType,
                                    number: identificationNumber,
                                },
                            }
                        };

                        var placeholder = {
                            card_number: this.card.card_number,
                            year: this.card.year,
                            month: this.card.month,
                            user_id: localStorage.getItem('uid')
                        }

                        var data_send = {
                            mp: data,
                            card: placeholder
                        }
    
                        fetch("https://api.mrmandados.xyz/mercadopago.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data_send),
                        }).then(res => res.json())
                        .then(res => {
                            if(res.status == 'approved'){
                                this.makeOrder('mercadopago', 'fromApp');
                            }else{
                                alert(JSON.stringify(res))
                                this.errorMp(res);
                            }
                        })
                        .catch( err => {
                            console.log(err);
                        });
                    },
                    onFetching: (resource) => {
                        const progressBar = document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");
    
                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }, 500);
    }

    async errorMp(res){
        await this.util.findMessageByStatusDetail(res.status_detail, (msg) => {
            this.util.hide();
            this.util.showToast(msg ? msg : 'Algo salio mal', 'danger', 'bottom');
        });
    }

    async ngOnInit() {
        try {
            const scheduleDataResponse = JSON.parse(localStorage.getItem('scheduleData'));

            if (!!scheduleDataResponse.time) {
                this.scheduleData.time = scheduleDataResponse.time;
            }
        } catch (error) {
        }
    }
    ionViewWillLeave(){
        this.cardForm.unmount();
    }

    async filterItem() {

        const items = this.cart.cart.map((data) => {
            return {
                name: data.name,
                quantity: data.quantiy,
                description: data.name,
                unit_amount: {
                    currency_code: "MXN",
                    value: data.price
                }
            }
        });
        return items;
    }

    async jsonOrder() {
        return {
            payer: {
                "email_address": this.util.userInfo.email,
                "name": {
                    "given_name": this.util.userInfo.first_name,
                    "surname": this.util.userInfo.last_name
                },
                "phone": {
                    "phone_number": {
                        "national_number": this.util.userInfo.mobile
                    }
                },
                "address": {
                    "address_line_1": this.cart.deliveryAddress.address,
                    "address_line_2": this.cart.deliveryAddress.address,
                    "admin_area_2": "",
                    "admin_area_1": "",
                    "postal_code": "",
                    "country_code": "MX"
                }
            },
            purchase_units: [
                {
                    "amount": {
                        "currency_code": "MXN",
                        "value": this.cart.grandTotal,
                        "breakdown": {
                            "item_total": {
                                "currency_code": "MXN",
                                "value": this.cart.grandTotal
                            },
                            "discount": {
                                "value": this.cart.discount,
                                "currency_code": "MXN"
                            }
                        }
                    },
                    "items": await this.filterItem()
                }
            ]
        };
    }

    hasSchedule(): boolean {
        return this.scheduleData.time !== null;
    }

    getPayments() {
        this.util.show();
        this.api.get('payments').then((data: any) => {
            this.util.hide();
            if (data && data.status === 200 && data.data) {
                const info = data.data.filter(x => x.status === '1');
                if (info && info.length > 0) {
                    this.havePayment = true;
                    const stripe = info.filter(x => x.id === '1');
                    this.haveStripe = stripe && stripe.length > 0 ? true : false;
                    const cod = info.filter(x => x.id === '2');
                    this.haveCOD = cod && cod.length > 0 ? true : false;
                    const payPal = info.filter(x => x.id === '3');
                    this.havePayPal = payPal && payPal.length > 0 ? true : false;
                    const razor = info.filter(x => x.id === '4');
                    this.haveRazor = razor && razor.length > 0 ? true : false;
                    const paytm = info.filter(x => x.id === '5');
                    this.havePayTM = paytm && paytm.length > 0 ? true : false;
                    const insta = info.filter(x => x.id === '6');
                    this.haveInstamojo = insta && insta.length > 0 ? true : false;
                    const paystack = info.filter(x => x.id === '7');
                    this.havepayStack = paystack && paystack.length > 0 ? true : false;
                    const flutterwave = info.filter(x => x.id === '8');
                    this.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;
                    if (this.haveStripe) {
                        if (stripe) {
                            const creds = JSON.parse(stripe[0].creds);
                            if (stripe[0].env === '1') {
                                this.util.stripe = creds.live;
                            } else {
                                this.util.stripe = creds.test;
                            }
                            this.util.stripeCode = creds && creds.code ? creds.code : 'MXN';
                        }
                    }
                    if (this.haveInstamojo) {
                        const datas = info.filter(x => x.id === '6');
                        this.instaENV = datas[0].env;
                        if (insta) {
                            const instaPay = JSON.parse(datas[0].creds);
                            this.instamojo = instaPay;
                        }
                    }
                    if (this.haveRazor) {
                        const razorPay = info.filter(x => x.id === '4');
                        const env = razorPay[0].env;
                        if (razorPay) {
                            const keys = JSON.parse(razorPay[0].creds);
                            this.razorKey = env === '0' ? keys.test : keys.live;
                        }
                    }
                    if (this.havepayStack) {
                        const keys = JSON.parse(paystack[0].creds);
                        this.paystack = keys;
                    }

                    if (this.haveflutterwave) {
                        const keys = JSON.parse(flutterwave[0].creds);
                        this.flutterwave = keys;
                    }
                } else {
                    this.havePayment = false;
                    this.util.showToast(this.util.translate('No Payment Found'), 'danger', 'bottom');
                }
            } else {
                this.havePayment = false;
                this.util.showToast(this.util.translate('No Payment Found'), 'danger', 'bottom');
            }
        }, error => {
            this.util.hide();
            this.havePayment = false;
            this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
        });
    }

    async makeOrder(method, key) {
        const param = {
            address: JSON.stringify(this.cart.deliveryAddress),
            applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
            coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
            pay_method: method,
            did: '',
            delivery_charge: this.cart.deliveryPrice,
            discount: this.cart.discount,
            grand_total: this.cart.grandTotal,
            orders: JSON.stringify(this.cart.cart),
            paid: key,
            restId: this.cart.cartStoreInfo.uid,
            serviceTax: this.cart.orderTax,
            status: 'creada',
            time: moment().format('YYYY-MM-DD HH:mm:ss'),
            total: this.cart.totalPrice,
            uid: localStorage.getItem('uid'),
            notes: this.cart.orderNotes,
            schedule: this.hasSchedule() ? this.scheduleData.time : '',
        };

        this.api.post('orders/save', param).then((data: any) => {
            this.util.hide();
            this.cart.orderNotes = '';
            this.api.sendNotification('Nueva orden!', 'Nueva orden recibida', this.storeFCM);
            this.util.publishNewOrder();
            this.cart.clearCart();

            const newProps: any = {};

            if (this.hasSchedule()) {
                newProps.schedule = true;
            }

            this.navCtrl.navigateRoot(['/success'], newProps);
        }, error => {
            this.util.hide();
            this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
        });
    }

    getName() {
        return this.util.userInfo && this.util.userInfo.first_name ?
            this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'mr manda2';
    }

    getEmail() {
        return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@mrmandados.com';
    }

    async createOrder() {

        const param = {
            address: JSON.stringify(this.cart.deliveryAddress),
            applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
            coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
            pay_method: 'cod',
            did: '',
            delivery_charge: this.cart.deliveryPrice,
            discount: this.cart.discount,
            grand_total: this.cart.grandTotal,
            orders: JSON.stringify(this.cart.cart),
            paid: 'none',
            restId: this.cart.cartStoreInfo.uid,
            serviceTax: this.cart.orderTax,
            status: 'creada',
            time: moment().format('YYYY-MM-DD HH:mm:ss'),
            total: this.cart.totalPrice,
            uid: localStorage.getItem('uid'),
            notes: this.cart.orderNotes
        };

        this.util.show();
        this.api.post('orders/save', param).then((data: any) => {
            this.util.hide();
            this.cart.orderNotes = '';
            if (this.storeFCM && this.storeFCM !== '') {

                this.api.sendNotification('Nueva orden recibida', 'Nueva orden!', this.storeFCM).subscribe((data) => {
                }, error => {

                });


                this.util.publishNewOrder();
                this.cart.clearCart();
                this.navCtrl.navigateRoot(['/success']);
            }
        }, error => {
            this.util.hide();
            this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
        });
    }

    back(){
        this.util.back();
    }

    selectCard(type){
        this.card.type = type;
        this.card.card_number = '';
        this.card.year = '';
        this.card.month = '';
        this.merchand();
    }

}
