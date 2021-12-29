   //
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert2';
declare var google: any;

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;


  id: any = '';

  dName: any = '';
  restAddress: any = '';
  dCover: any = '';
  dId: any;
  phone: any = '';
  status: any = '';
  totalOrders: any[] = [];
  grandTotal: any;
  payMethod: any;

  myLat: any;
  myLng: any;
  driverLat: any;
  driverLng: any;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    public api: ApisService,
    public util: UtilService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
    // console.log('data=>', data);
      if (data.hasOwnProperty('id')) {
        this.id = data.id;
        this.getOrder();
      }
    });

  }
  callDriver() {
    window.open('https://api.whatsapp.com/send?phone=91' + this.phone);
  }
  getOrder() {
    const param = {
      id: this.id
    };
    this.api.post('orders/getById', param).then((datas: any) => {
    // console.log(datas);
      if (datas && datas.status === 200 && datas.data.length) {
        const data = datas.data[0];
        this.totalOrders = JSON.parse(data.orders);
        this.grandTotal = data.grand_total;
        this.status = data.status;
        this.restAddress = data.str_address;
        this.payMethod = data.pay_method === 'cod' ? 'COD' : 'PAID';

        if (data && data.address) {
          const add = JSON.parse(data.address);
        // console.log(add);
          this.myLat = add.lat;
          this.myLng = add.lng;
        }

        if (data && data.did && data.did !== '0') {
          this.dId = data.did;
          this.getDriverInfo();
        }

      } else {
        this.util.back();
      }
    }, error => {
    // console.log('error in orders', error);
      this.util.errorToast('Something went wrong');
    }).catch(error => {
    // console.log('error in order', error);
      this.util.errorToast('Something went wrong');
    });

  }
  getDriverInfo() {
    const param = {
      id: this.dId
    };
    this.api.post('drivers/getById', param).then((data: any) => {
    // console.log('driver info--->>', data);
      if (data && data.status === 200 && data.data.length) {
        const info = data.data[0];
      // console.log('---->>>>>', info);
        this.dName = info.first_name + ' ' + info.last_name;
        this.dCover = info.cover;
        this.phone = info.mobile;
        this.driverLat = info.lat;
        this.driverLng = info.lng;
        this.loadMap(parseFloat(this.myLat), parseFloat(this.myLng), parseFloat(this.driverLat), parseFloat(this.driverLng));
      }
    }, error => {
    // console.log(error);
      this.util.errorToast('Something went wrong');
    }).catch((error) => {
    // console.log(error);
      this.util.errorToast('Something went wrong');
    });
  }

  changeMarkerPosition(marker, map) {
    const param = {
      id: this.dId
    };
    this.api.post('drivers/getById', param).then((data: any) => {
    // console.log('driver info--->>', data);
      if (data && data.status === 200 && data.data.length) {
        const info = data.data[0];
      // console.log('---->>>>>', info);
        this.dName = info.first_name + ' ' + info.last_name;
        this.dCover = info.cover;
        this.phone = info.mobile;
        this.driverLat = info.lat;
        this.driverLng = info.lng;
        const latlng = new google.maps.LatLng(parseFloat(this.driverLat), parseFloat(this.driverLng));
        map.setCenter(latlng);
        marker.setPosition(latlng);
      }
    }, error => {
    // console.log(error);
      this.util.errorToast('Something went wrong');
    }).catch((error) => {
    // console.log(error);
      this.util.errorToast('Something went wrong');
    });

  }

  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
    var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 100
    });

    const custPos = new google.maps.LatLng(latOri, lngOri);
    const restPos = new google.maps.LatLng(latDest, lngDest);

    const icon = {
      url: 'assets/pin.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    var marker = new google.maps.Marker({
      map: map,
      position: custPos,
      animation: google.maps.Animation.DROP,
      icon: icon,
    });

    marker.setMap(map);
   /// markerCust.setMap(map);

   // directionsDisplay.setMap(map);
    // directionsDisplay.setOptions({ suppressMarkers: true });
    directionsDisplay.setOptions({
      polylineOptions: {
        strokeWeight: 4,
        strokeOpacity: 1,
        strokeColor: 'red'
      },
      suppressMarkers: true
    });
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('output');
        // outputDiv.innerHTML = '';
        // deleteMarkers(markersArray);

        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
              // markersArray.push(new google.maps.Marker({
              //   map: map,
              //   position: results[0].geometry.location,
              //   icon: icon
              // }));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (let i = 0; i < originList.length; i++) {
          let results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (let j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });
    this.interval = setInterval(() => {
      this.changeMarkerPosition(marker, map);
    }, 1000);
  }
  ionViewDidLeave() {
  // console.log('leaae');
    clearInterval(this.interval);
  }
}
