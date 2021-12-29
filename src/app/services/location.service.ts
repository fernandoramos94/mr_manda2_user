import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor(private androidPermissions: AndroidPermissions, private locationAccuracy: LocationAccuracy, private gelocation: Geolocation) { }

    async checkGPSPermission(): Promise<boolean> {
        return await new Promise((resolve, reject) => {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
                result => {
                    if (result.hasPermission) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                err => { alert(err); }
            );
        })
    };

    async requestGPSPermission(): Promise<string> {
        return await new Promise((resolve, reject) => {
            this.locationAccuracy.canRequest().then((canRequest: boolean) => {
                if (canRequest) {
                    resolve('CAN_REQUEST');
                } else {
                    // Show 'GPS Permission Request' dialogue
                    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                        .then(
                            (result) => {
                                if (result.hasPermission) {
                                    resolve('GOT_PERMISSION');
                                } else {
                                    resolve('DENIED_PERMISSION');
                                }
                            },
                            error => {
                                // Show alert if user click on 'No Thanks'
                                alert('requestPermission Error requesting location permissions ' + error);
                            }
                        );
                }
            });
        })
    }
    async askToTurnOnGPS(): Promise<boolean> {
        return await new Promise((resolve, reject) => {
            this.locationAccuracy.canRequest().then((canRequest: boolean) => {
                if (canRequest) {
                    // the accuracy option will be ignored by iOS
                    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                        () => {
                            resolve(true);
                        },
                        error => { resolve(false); });
                }
                else { resolve(false); }
            });
        })
    }

    async getLocationCoordinates():Promise<any>{
        return await new Promise((resolve, reject) => {
            this.gelocation.getCurrentPosition().then((resp:any)=>{
                var geo = {
                    lat : resp.coords.latitude,
                    lng: resp.coords.longitude
                }
                resolve(geo);
            }).catch((error)=>{
                resolve(false);
            });
        })
    }
}
