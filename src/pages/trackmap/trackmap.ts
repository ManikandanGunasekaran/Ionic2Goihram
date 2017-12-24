import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { FriendsPage } from '../friends/friends';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

declare var google: any;
@Component({
    selector: 'page-trackmap',
    templateUrl: 'trackmap.html',
})
export class TrackmapPage implements OnInit {
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    markers = [];
    loading: Loading;
    userId: any;
    selectedFriend : string;
    getCurrentLoc: any;
    startpoint: any;
    endpoint = new google.maps.LatLng(13.138039, 80.31597);
    markerposition: any;
    task: any;
    myCurrentLocation = {};
    userDetails: any;
    FriendsPage = FriendsPage;
    enableDirection = false;

    constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController,
      public geolocation: Geolocation,
      public http: Http,
      public locationTracker:LocationTrackerProvider,
      public storage: Storage
      ) {
        this.storage.get('userDetails').then((data) => {
            console.log(data);
            this.userId = this.navParams.get('userId'); 
            this.userDetails = data;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TrackmapPage');
        // this.GetMyFriendLocation();
    }

    ngOnInit() {
        this.selectedFriend = '';
        this.userId = this.navParams.get('userId'); 
        // this.getCurrentLoc = this.navParams.get('currentLoc'); 
        // this.locationTracker.GetCurrentLocation();
        this.initMap();
    //     this.task = setInterval(function(){
    //     this.markers[0].
    // }, 3000);
    }

    
    //current location
    public initMap() {
       
        let mapOptions = {};
        this.startpoint = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lan);
        // this.updateMyLocation();
        mapOptions = {
        center: this.startpoint,
        zoom: 15,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.createMapMarker(this.startpoint, this.userId);
    
       
    }

    updateMyLocation(){
      this.enableDirection = false;
      this.selectedFriend = '';
      let mylocation = {
          lat:this.locationTracker.lat,
          lan:this.locationTracker.lan
      }
      // let url = '/add-location';
      let url = 'https://tracker-rest-service.herokuapp.com/locations/add-location';
      this.http.post(url+'/'+ this.userId, mylocation).subscribe(data => {
        console.log(data);
      });
    }

    GetMyFriendLocation(){
        this.enableDirection = false;
        this.selectedFriend = '';
        // this.showLoader();
        // // let friendLocUrl ='https://tracker-rest-service.herokuapp.com/locations/get-friends-location';
        // let friendLocUrl ='/get-friends-location';
        // this.http.get(friendLocUrl+'/'+ this.userId).map(res => res.json()).subscribe(data => {
            // this.loading.dismiss();
         const frindsLoc = this.userDetails.friendsLocations;
         for(let friendInfo of frindsLoc) {
            let userName = '';
            let getFriendLoc = new google.maps.LatLng(friendInfo.lat, friendInfo.lan);
             this.userDetails.friends.forEach((Fnds) => { 
            if(Fnds.id == friendInfo.id){
                userName = Fnds.firstName;
                return '';
            }
            }); 
            // userName = this.getFriendName(friendInfo.id);
            this.createMapMarker(getFriendLoc, userName);
          }
        // },onerror =>{ 
        //     // this.loading.dismiss();
        // });
    }
    //marker for current location
    public createMapMarker(place: any, name: string): void {
        var marker = new google.maps.Marker({
            map: this.map,
            position: place,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', () => {
            this.selectedFriend = name;
            this.endpoint = place;
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
        this.enableDirection = true;
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);

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
    getFriendName(fid){
        this.userDetails.friends.forEach((Fnds) => { 
            if(Fnds.id == fid){
                return Fnds.firstName;
            }
        }) 

    }
    showLoader(){
        this.loading = this.loadingCtrl.create();
        this.loading.present();
      }

}