import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google: any;
@IonicPage()
@Component({
    selector: 'page-trackmap',
    templateUrl: 'trackmap.html',
})
export class TrackmapPage implements OnInit {
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    markers = [];
    loading: Loading;
    startpoint: any;
    userId: any;
    selectedFriend : string;
    getCurrentLoc: any;
    endpoint = new google.maps.LatLng(13.138039, 80.31597);
    myCurrentLocation = {};

    constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController,
      public geolocation: Geolocation,
      public http: Http) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad TrackmapPage');
    }

    ngOnInit() {
        this.selectedFriend = '';
        this.userId = this.navParams.get('userId'); 
        this.getCurrentLoc = this.navParams.get('currentLoc'); 
        this.initMap();
    }
    //current location
    public initMap() {
        this.startpoint = new google.maps.LatLng(this.getCurrentLoc.lat, this.getCurrentLoc.lan);
        this.updateMyLocation();
        let mapOptions = {
        center: this.startpoint,
        zoom: 15,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.createMapMarker(this.startpoint);
    }

    updateMyLocation(){
      let mylocation = JSON.stringify(this.myCurrentLocation);
    //   let url = '/add-location';
      let url = 'https://tracker-rest-service.herokuapp.com/locations/add-location';
      this.http.post(url+'/'+ this.userId +'/'+ mylocation +'',null).subscribe(data => {
        console.log(data);
      });
    }

    //marker for current location
    public createMapMarker(place: any): void {
        var marker = new google.maps.Marker({
            map: this.map,
            position: place,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', () => {
            this.selectedFriend = 'Mani';
            // infoWindow.open(this.map, marker);
           
        });
        // let content = "<h3>Mani</h3><h5>Chennai</h5>";
        // this.addInfoWindow(marker, content);
        this.markers.push(marker);
    }

    // addInfoWindow(marker, content) {
    //     let infoWindow = new google.maps.InfoWindow({
    //         content: content
    //     });
    //     google.maps.event.addListener(marker, 'click', () => {
    //         this.selectedFriend = 'Mani';
    //         // infoWindow.open(this.map, marker);
           
    //     });
    // }

    //getting directions
    public calculateAndDisplayRoute() {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);

        directionsService.route({
            origin: this.startpoint,
            destination: this.endpoint,
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {

            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }

        });
    }

}