import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation) {
  }
  ngOnInit() {
    this.userId = this.navParams.get('userId'); 
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
  
}
