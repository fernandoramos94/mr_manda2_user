//
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var google;
declare const $: any;

@Component({
    selector: 'app-add-new-address',
    templateUrl: './add-new-address.page.html',
    styleUrls: ['./add-new-address.page.scss'],
})
export class AddNewAddressPage implements OnInit {
    @ViewChild('map', { static: true }) mapEle: ElementRef;
    @ViewChild('autocompletesearch', { static: true }) autoCompleteS: ElementRef;
    map: any;
    marker: any;
    lat: any;
    lng: any;
    address: any;
    house: any = '';
    landmark: any = '';
    title: any = 'home';
    id: any;
    from: any;
    pincode: any;
    autocompleteItems1: any = [];
    GoogleAutocomplete;
    constructor(
        private platform: Platform,
        private androidPermissions: AndroidPermissions,
        public geolocation: Geolocation,
        private navCtrl: NavController,
        public api: ApisService,
        public util: UtilService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.queryParams.subscribe(data => {
            if (data && data.from) {
                this.from = 'edit';
                const info = JSON.parse(data.data);
                this.address = info.address;
                this.house = info.house;
                this.id = info.id;
                this.landmark = info.landmark;
                this.lat = info.lat;
                this.lng = info.lng;
                this.loadmap(this.lat, this.lng, this.mapEle);
            } else {
                this.from = 'new';
                this.getLocation();
            }
        });
        //this.GoogleAutocomplete = new google.maps.places.AutocompleteService();


    }

    async ngOnInit() {

    }


    ionViewWillEnter() {
        const options = {
            fields: ["geometry", "icon", "name"],
            strictBounds: false
        };
        let input = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
        let autocomplete = new google.maps.places.Autocomplete(input, options);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            let place = autocomplete.getPlace();
            const location = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.addMarker(location);
            this.map.setCenter(location)
        });
    }

    getLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
                    result => console.log('Has permission?', result.hasPermission),
                    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
                );
                this.grantRequest();
            } else if (this.platform.is('ios')) {
                this.grantRequest();
            } else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                        this.getAddress(this.lat, this.lng);
                    }
                });
            }
        });
    }

    async onSearchChange(event) {
        this.GoogleAutocomplete.getPlacePredictions({ input: this.address }, (predictions, status) => {
            if (predictions && predictions.length > 0) {
                this.autocompleteItems1 = predictions;
            }
        });
    }

    grantRequest() {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
            if (resp) {
                this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
                this.getAddress(resp.coords.latitude, resp.coords.longitude);
            }
        });
    }

    loadmap(lat, lng, mapElement) {
        const location = new google.maps.LatLng(lat, lng);
        const style = [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];

        const mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
        };
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        const mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
        this.map.mapTypes.set('Foodfire5', mapType);
        this.map.setMapTypeId('Foodfire5');
        this.addMarker(location);
    }

    getAddress(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'location': location }, (results, status) => {
            this.address = results[0].formatted_address;
            this.lat = lat;
            this.lng = lng;
        });
    }

    addMarker(location) {

        if (this.marker != undefined) {
            this.marker.setMap(null);
        }

        const icons = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icons,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(this.marker, 'dragend', () => {
            this.getDragAddress(this.marker);
        });

    }

    getDragAddress(event) {

        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(event.position.lat(), event.position.lng());
        geocoder.geocode({ 'location': location }, (results, status) => {
            this.address = results[0].formatted_address;
            this.lat = event.position.lat();
            this.lng = event.position.lng();
        });
    }


    addAddress() {
        if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.translate('Todos los campos son requerido'));
            return false;
        }

        this.util.show();
        const param = {
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark,

        };
        this.api.post('address/save', param).then((data: any) => {
            this.util.hide();
            if (data && data.status === 200) {
                this.util.publishAddress('');
                this.navCtrl.back();
                this.util.showToast('Direccion agregada', 'success', 'bottom');
            } else {
                this.util.errorToast('Algo ha ido mal');
            }
        }, error => {
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
        });
    }

    updateAddress() {
        if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast('Todos los campos son requeridos');
            return false;
        }
        this.util.show();
        const param = {
            id: this.id,
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark

        };
        this.api.post('address/editList', param).then((data: any) => {
            this.util.hide();
            if (data && data.status === 200) {
                this.util.publishAddress('');
                this.navCtrl.back();
                this.util.showToast('Dirección actualizada', 'success', 'bottom');
            } else {
                this.util.errorToast('Algo ha ido mal');
            }
        }, error => {
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
        });
    }
}
