import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
// import { Loading, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';

@Injectable()
export class LocationTrackerProvider {

    public watch: any;
    public lat: number = 21.422510;
    public lan: number = 39.826168;
    public friends: any;
    // loading: Loading;
    constructor(public geolocation: Geolocation, 
        public http: Http,
        // public loadingCtrl: LoadingController,
         public zone: NgZone) {
        console.log('Hello LocationTrackerProvider Provider');
    }

    public GetCurrentLocation() {
        // this.geolocation.getCurrentPosition().then((position) => {

        //          // this.zone.run(() => {
        //      	this.lat = position.coords.latitude;
        //      	this.lan = position.coords.longitude;

        //     // });
        //     // return this.myCurrentLocation;

        // }, (err) => {

        //   console.log(err);

        // });
        let options = {
            frequency: 3000,
            enableHighAccuracy: true
        };

        this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe(
            (position: Geoposition) => {
                this.zone.run(() => {
                    this.lat = position.coords.latitude;
                    this.lan = position.coords.longitude;
                });
            });

    }

    public getUserDetails(userId){
         let getUserDetails ='https://tracker-rest-service.herokuapp.com/user-details/read-everything';
        // let getUserDetails ='/read-everything';
         return  this.http.get(getUserDetails+'/'+userId).map(res => res.json());
     }


}