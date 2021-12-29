   //
import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { Platform, AlertController, NavController, MenuController } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { UtilService } from 'src/app/services/util.service';
import { LocationService } from 'src/app/services/location.service';
declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  lat: any;
  lng: any;
  constructor(
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    public geolocation: Geolocation,
    private router: Router,
    public util: UtilService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuController: MenuController,
    private diagnostic: Diagnostic,
    private locationService :LocationService
  ) { }

  ngOnInit() {
  }

  async getLocation() {
    const data = await this.locationService.getLocationCoordinates();
    

    if(data){
        this.getAddress(data.lat, data.lng);
    }
      //this.checkPermissions();
      //alert(this.platform.is("android"))
    // this.platform.ready().then(() => {
    //   if (this.platform.is('android')) {
    //     this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
    //       result => console.log('Has permission?', result.hasPermission),
    //       err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
    //     );
    //     this.grantRequest();
    //   } else if (this.platform.is('ios')) {
    //     this.grantRequest();
    //   } else {
    //     this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
    //       if (resp) {
    //       // console.log('resp', resp);
    //         this.lat = resp.coords.latitude;
    //         this.lng = resp.coords.longitude;
    //         this.getAddress(this.lat, this.lng);
    //       }
    //     }).catch(error => {
    //     // console.log(error);
    //       this.grantRequest();
    //     });
    //   }
    // });
  }

  async checkPermissions() {
    const hasPermission = await this.locationService.checkGPSPermission();
    if (hasPermission) {
            const canUseGPS = await this.locationService.askToTurnOnGPS();
            this.postGPSPermission(canUseGPS);
    }
    else {
        const permission = await this.locationService.requestGPSPermission();
        if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
                const canUseGPS = await this.locationService.askToTurnOnGPS();
                this.postGPSPermission(canUseGPS);
        }
        else {

            this.util.errorToast('User denied location permission');
        }
    }
}

async postGPSPermission(canUseGPS: boolean){
    if (canUseGPS) {
        //this.watchPosition();
    }
    else {
        //
    }
}

  askPermission() {
    this.getLocation();
  }

  grantRequest() {
    this.diagnostic.isLocationEnabled().then((data) => {
      if (data) {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
          if (resp) {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.getAddress(resp.coords.latitude, resp.coords.longitude);
          }
        }).catch(error => {
          this.diagnostic.switchToSettings();
        });
      } else {
        this.diagnostic.switchToSettings();
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
          if (resp) {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.getAddress(resp.coords.latitude, resp.coords.longitude);
          }
        }).catch(error => {
          this.diagnostic.switchToSettings();
        });
      }
    }, error => {
      if (this.platform.is('ios')) {
        this.iOSAlert();
      } else {
        this.presentAlertConfirm();
      }
    }).catch(error => {
      if (this.platform.is('ios')) {
        this.iOSAlert();
      } else {
        this.presentAlertConfirm();
      }
    });

  }

  getAddress(lat, lng) {

    const geocoder = new google.maps.Geocoder();
    const location = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ 'location': location }, (results, status) => {
      if (results && results.length) {
        this.lat = lat;
        this.lng = lng;
        localStorage.setItem('location', 'true');
        localStorage.setItem('lat', this.lat);
        localStorage.setItem('address', results[0].formatted_address);
        localStorage.setItem('lng', this.lng);
        this.util.cityAddress = results[0].formatted_address;
        this.util.publishLocation();
        this.navCtrl.navigateRoot(['']);
      } else {
        this.util.errorToast('Something went wrong please try again later');
      }
    });
  }

  async iOSAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
          // console.log('Confirm Okay');
            this.diagnostic.switchToSettings();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
          // console.log('Confirm Okay');
            this.askPermission();
          }
        }
      ]
    });

    await alert.present();
  }
  async customLocation() {
    this.router.navigate(['pick-location']);
  }

  ionViewWillEnter() {
  // console.log('disbaled');
    this.menuController.enable(false);
  }
  ionViewWillLeave() {
  // console.log('enabled');
    this.menuController.enable(true);
  }
}
