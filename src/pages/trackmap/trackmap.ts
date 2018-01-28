import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavParams, Loading, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

declare var google: any;
@Component({
    selector: 'page-trackmap',
    templateUrl: 'trackmap.html',
})
export class TrackmapPage implements OnInit, OnDestroy  {
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    markers = [];
    loading: Loading;
    userId: any;
    selectedFriend: string;
    trackCase = false;
    friendCase = false;
    friendCount = 0;
    startpoint: any;
    endpoint = new google.maps.LatLng(13.138039, 80.31597);
    userDetails: any;
    enableDirection = false;
    scheduleInterval: any;

    constructor(private navParams: NavParams,
        private loadingCtrl: LoadingController,
        private http: Http,
        private locationTracker: LocationTrackerProvider
    ) {

    }

    ionViewDidEnter() {
        this.locationTracker.getUserDetail().then((data) => {
            this.userId = this.navParams.get('userId');
            this.userDetails = data;
        });
    }

    ngOnInit() {
        this.selectedFriend = '';
        this.trackCase = false;
        this.friendCase = false;
        this.userId = this.navParams.get('userId');
        this.locationTracker.GetCurrentLocation();
        this.initMap();
    }
    ngOnDestroy() {
        this.myStopFunction();
    }

    myStopFunction() {
        clearInterval(this.scheduleInterval);
    }

    updateMyLocation() {
        this.enableDirection = false;
        this.selectedFriend = '';
        this.trackCase = false;
        this.friendCase = false;
        let mylocation = {
            lat: this.locationTracker.lat,
            lan: this.locationTracker.lan
        }
        // let url = '/add-location';
        let url = 'https://tracker-rest-service.herokuapp.com/locations/add-location';
        this.http.post(url + '/' + this.userId, mylocation).subscribe(data => {});
    }

    GetMyFriendLocation() {
        this.myStopFunction();
        this.enableDirection = false;
        this.trackCase = false;
        this.friendCase = true;
        this.selectedFriend = '';
        const frindsLoc = this.userDetails.friendsLocations;
        this.friendCount = frindsLoc.length;
        for (let friendInfo of frindsLoc) {
            let userName = '';
            let getFriendLoc = new google.maps.LatLng(friendInfo.lat, friendInfo.lan);
            this.userDetails.friends.forEach((Fnds) => {
                if (Fnds.id == friendInfo.id) {
                    userName = Fnds.firstName;
                    return '';
                }
            });
            this.createMapMarker(getFriendLoc, userName);
        }
    }

    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }

    getFriendName(fid) {
        this.userDetails.friends.forEach((Fnds) => {
            if (Fnds.id == fid) {
                return Fnds.firstName;
            }
        })

    }
    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true,
            spinner: 'dots'
        });
        this.loading.present();
    }

    //current location
    public initMap() {
        let mapOptions = {};
        this.myStopFunction();
        this.startpoint = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lan);
        this.updateMyLocation();
        mapOptions = {
            center: this.startpoint,
            zoom: 12,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.createMapMarker(this.startpoint, this.userId);

    }
    //marker for current location
    public createMapMarker(place: any, name: string): void {
        var marker = new google.maps.Marker({
            map: this.map,
            position: place,
            icon: 'assets/images/user_marker.png',
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', () => {
            this.selectedFriend = name;
            this.endpoint = place;
            this.trackCase = true;
        });
        this.markers.push(marker);
    }

    //getting directions
    public calculateAndDisplayRoute() {
        this.myStopFunction();
        this.trackCase = false;
        this.enableDirection = true;
        this.setMapOnAll(null);
        this.startpoint = new google.maps.LatLng(this.locationTracker.lat, this.locationTracker.lan);
        this.markers = [];
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);

        directionsService.route({
            origin: this.startpoint,
            destination: this.endpoint,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, (res, status) => {

            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }

        });

        this.scheduleInterval = setInterval(() => {
            this.calculateAndDisplayRoute();
        }, 20000);
    }

}