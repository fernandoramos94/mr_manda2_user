import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-schedule-order',
    templateUrl: './schedule-order.page.html',
    styleUrls: ['./schedule-order.page.scss'],
})
export class ScheduleOrderPage implements OnInit {
    defaultTime: number = 90;

    days: Array<any> = [];
    options: Array<any> = [
        {
            name: '8am - 9am',
            value: 8,
        },
        {
            name: '9am - 10am',
            value: 9,
        },
        {
            name: '10am - 11am',
            value: 10,
        },
        {
            name: '11am - 12pm',
            value: 11,
        },
        {
            name: '12pm - 1pm',
            value: 12,
        },
        {
            name: '1pm - 2pm',
            value: 13,
        },
        {
            name: '2pm - 3pm',
            value: 14,
        },
        {
            name: '3pm - 4pm',
            value: 15,
        },
        {
            name: '4pm - 5pm',
            value: 16,
        },
        {
            name: '5pm - 6pm',
            value: 17,
        },
        {
            name: '6pm - 7pm',
            value: 18,
        },
        {
            name: '7pm - 8pm',
            value: 19,
        },
        {
            name: '8pm - 9pm',
            value: 20,
        },
    ];

    day: any = null;
    time: any = null;
    getHourDisp: any = [];

    constructor(
        public modalController: ModalController,
        public cart: CartService,
    ) {
        moment.locale('es');

        for (let a = 0; a < 7; a++) {
            const date = new Date();

            date.setDate(date.getDate() + a);

            const mo = moment(date);

            this.days.push({
                index: a,
                day: a === 0 ? 'Hoy' : mo.format('ddd'),
                month: mo.format('MMM DD'),
                value: mo,
            });
        }

        this.day = this.days[0];
    }

    async ngOnInit() {
    }

    selectItem(item: any) {
        this.day = item;
        this.time = null;
    }

    async ionViewDidEnter(){
        
    }

    filterHours() {
        let dat =  this.options.filter((item: any, index: number): boolean => {
            const validations: Array<boolean> = [];
            const today = new Date();
            const date = new Date(this.day.value.toDate());

            if (this.day.index === 0) {
                date.setHours(item.value);
                today.setMinutes(today.getMinutes() + this.defaultTime);
                validations.push(date >= today);
            }
            return !validations.includes(false);
        });
        console.log(dat);
        return dat;
    }

    async closeModal(useCurrent: boolean = false) {
        const newProps: any = {
            time: null,
        };

        if (useCurrent && this.day !== null) {
            const newDate = new Date(this.day.value.toDate());

            if (this.time.value === null) {
                newDate.setMinutes(newDate.getMinutes() + this.defaultTime);
            } else {
                newDate.setHours(this.time.value);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
            }

            newProps.time = moment(newDate).format('YYYY-MM-DD HH:mm:ss') || null;
        }

        this.modalController.dismiss(newProps);
    }
}
