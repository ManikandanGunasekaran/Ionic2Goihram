import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TrackmapPage } from '../trackmap/trackmap';
import { FriendsPage } from '../friends/friends';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  userId: number;
  myCurrentLocation = {};
  loading: Loading;
  userEmail: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: Http,
    public geolocation: Geolocation) {
  }
  ngOnInit() {
    this.userEmail = this.navParams.get('userEmail'); 
    this.GetUserId();
    this.postMyLocationInfo();
  }
  postMyLocationInfo(){
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.geolocation.getCurrentPosition().then((position) => {
            this.myCurrentLocation = {
                lat:position.coords.latitude,
                lan:position.coords.longitude
            };
            this.loading.dismiss();
   });
  }
  public MoveToTrackPage(){
      this.navCtrl.push(TrackmapPage, {userId: this.userId,currentLoc: this.myCurrentLocation});
  }
  public MoveToFriendsPage(){
      this.navCtrl.push(FriendsPage, {userId: this.userId});
  }
  public GetUserId(){
        let getUserDetail ='https://tracker-rest-service.herokuapp.com/user-details/read-by-email';
        // let getUserDetail = '/read-by-email';
        this.http.get(getUserDetail+'/'+ this.userEmail +'/').map(res => res.json()).subscribe(data => {
            console.log( data);
            this.userId = data.data.id;
            this.loading.dismiss();
        });
  }
  
}
