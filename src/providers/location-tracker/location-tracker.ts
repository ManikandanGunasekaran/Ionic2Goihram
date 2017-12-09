import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Loading, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTrackerProvider {

    public watch: any;
    public lat: number = 0;
    public lan: number = 0;
    constructor(public geolocation: Geolocation, public loadingCtrl: LoadingController, public zone: NgZone) {
        console.log('Hello LocationTrackerProvider Provider');
    }

    public GetCurrentLocation() {
    	this.showLoader();
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
                    this.lng = position.coords.longitude;
                });
                this.loading.dismiss();
            });

    }

    showLoader(){
        this.loading = this.loadingCtrl.create();
        this.loading.present();
  	}	


}