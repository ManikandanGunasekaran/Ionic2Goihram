import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Platform, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import {Storage} from "@ionic/storage";
import { Diagnostic } from '@ionic-native/diagnostic';

@Injectable()
export class LocationTrackerProvider {

    public watch: any;
    public lat: number = 21.422510;
    public lan: number = 39.826168;
    public friends: any;
    // loading: Loading;
    constructor(public geolocation: Geolocation, 
        private platform: Platform,
        private alertCtrl: AlertController,
        private diagnostic: Diagnostic,
        private storage:Storage,
        private http: Http,
        private zone: NgZone) {
        console.log('Hello LocationTrackerProvider Provider');
    }

    public GetCurrentLocation() {
       
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

    public checkLocation() {
        this.platform.ready().then((readySource) => {
            this.diagnostic.isLocationEnabled().then(
                (isAvailable) => {
                    if (!isAvailable) {
                        this.showLocationCheck();
                    }
                    this.GetCurrentLocation();
                });
        });
    }

    public showLocationCheck() {
        let alert = this.alertCtrl.create({
            subTitle: 'To continue let your device turn on location, which uses Google Location Service',
            buttons: [{
                    text: 'Cancel',
                },
                {
                    text: 'Ok',
                    handler: () => {
                        return this.diagnostic.switchToLocationSettings();
                    }
                }
            ],

        });
        alert.present();
    }


    public getUserDetails(userId){
         let getUserDetails ='https://tracker-rest-service.herokuapp.com/user-details/read-everything';
        // let getUserDetails ='/read-everything';
         return  this.http.get(getUserDetails+'/'+userId).map(res => res.json());
    }
    //store the email address
    public setEmail(email){
        this.storage.set('email',email);
    }
 
    //get the stored email
    public getEmail(){
        return this.storage.get('email');
    }
     //store the email address
    public setUserDetail(data){
        this.storage.set('userDetails',[]);
        this.storage.set('userDetails',data);
    }
 
    //get the stored email
    public getUserDetail(){
        return this.storage.get('userDetails');
    }
 
    //clear the whole local storage
    public clearStorage(){
        this.storage.clear();
    }


}