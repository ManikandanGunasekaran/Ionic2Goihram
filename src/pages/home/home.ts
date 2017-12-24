import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { Storage } from '@ionic/storage';

// import { LoginPage } from '../login/login';
import { TrackmapPage } from '../trackmap/trackmap';
import { FriendsPage } from '../friends/friends';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  userId: number;
  myCurrentLocation = {};
  userEmail: any;
  loading: Loading;
  getfriends: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public angfire: AngularFireAuth,
    private locationTracker:LocationTrackerProvider,
    public storage: Storage
    ) {
      this.storage.get('userEmail').then((data) => {
      this.showLoader();
      this.userEmail = data;
      const requestRef = firebase.database().ref('GoIhram');
        requestRef.orderByChild('EmailId')
          .equalTo(this.userEmail)
          .once('value')
          .then(snapshot => snapshot.val())
          .then((data) => {
            console.log(data);
             for (var val in data) {
                if (data.hasOwnProperty(val)) {
                   console.log(data[val]);
                   this.userId  = data[val].userId;
                   this.getUserDetails();
                   // this.loading.dismiss();
                }
             }

          });
    });
     
  }
  ngOnInit() {
    this.locationTracker.GetCurrentLocation();
  }
  
  public MoveToTrackPage(){
      this.navCtrl.push(TrackmapPage, {userId: this.userId});
  }
  public MoveToFriendsPage(){
      this.navCtrl.push(FriendsPage, {userId: this.userId});
  }
  // public GetUserId(){
  //   this.showLoader();
  //       let getUserDetail ='https://tracker-rest-service.herokuapp.com/user-details/read-by-email';
  //       // let getUserDetail = '/read-by-email';
  //       this.http.get(getUserDetail+'/'+ this.userEmail +'/').map(res => res.json()).subscribe(data => {
  //           console.log( data);
  //           this.loading.dismiss();
  //           this.userId = data.data.id;
  //       },onerror =>{ 
  //         this.loading.dismiss();
  //           this.showError();

  //       });
  // }
  public getUserDetails(){
    // this.showLoader();
        this.locationTracker.getUserDetails(this.userId).subscribe(data => {
            console.log(data);
            this.storage.set('userDetails', data.data);
            this.loading.dismiss();
        },onerror =>{ 
          this.loading.dismiss();
        });
  }

  public signout(){
    this.storage.clear();
    this.angfire.auth.signOut();
  }
  public showError() {
        let alert = this.alertCtrl.create({
            title: 'GoIhram Service Down',
            subTitle: 'User Not Registered',
            buttons: ['Ok']
        });
        alert.present();
    }

  public showLoader(){
        this.loading = this.loadingCtrl.create();
        this.loading.present();
      }
  
}
