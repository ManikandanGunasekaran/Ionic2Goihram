import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
// import { Loading, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import {Storage} from "@ionic/storage";

@Injectable()
export class LocationTrackerProvider {

    public watch: any;
    public lat: number = 21.422510;
    public lan: number = 39.826168;
    public friends: any;
    // loading: Loading;
    constructor(public geolocation: Geolocation, 
        private storage:Storage,
        private http: Http,
        // public loadingCtrl: LoadingController,
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