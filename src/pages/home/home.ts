import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

// import { LoginPage } from '../login/login';
import { TrackmapPage } from '../trackmap/trackmap';
import { FriendsPage } from '../friends/friends';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    userId: number;
    myCurrentLocation = {};
    userEmail: any;
    loading: Loading;
    getfriends: any;
    subscription: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public http: Http,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public angfire: AngularFireAuth,
        private locationTracker: LocationTrackerProvider
    ) {
      
    }
    ngOnInit() {
        console.log('home page');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ionViewDidEnter(){
         console.log('ionViewDidEnter HomePage');
          this.locationTracker.getEmail().then((data) => {
            this.showLoader();
            this.userEmail = data;
            const requestRef = firebase.database().ref('GoIhram');
            requestRef.orderByChild('EmailId')
                .equalTo(this.userEmail)
                .once('value')
                .then(snapshot => snapshot.val())
                .then((data) => {
                    console.log("firebaseGetUserId"+this.userEmail);
                    console.log("firebaseGetUserId"+data);
                    if(data===null){
                        this.loading.dismiss();
                        this.showError('Something Went Wrong, try after sometime');
                    }
                    for (var val in data) {
                        if (data.hasOwnProperty(val)) {
                            console.log(data[val]);
                            this.userId = data[val].userId;
                            console.log(this.userId);
                            this.getUserDetails();
                            // this.loading.dismiss();
                        }
                    }

                }, (error) => {
                        this.loading.dismiss().then(() => {
                            console.error("firebaseGetUserId"+error);
                            this.loading.dismiss();
                        });
                });
        });
    }
    public MoveToTrackPage() {
        this.navCtrl.push(TrackmapPage, {
            userId: this.userId
        });
    }
    public MoveToFriendsPage() {
        this.navCtrl.push(FriendsPage, {
            userId: this.userId
        });
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
    public getUserDetails() {
        console.log('getUserDetailscalled');
        // this.showLoader();
        this.subscription = this.locationTracker.getUserDetails(this.userId).subscribe(data => {
            console.log(data);
            // this.storage.set('userDetails', data.data);
            this.locationTracker.setUserDetail(data.data);
            this.loading.dismiss();
        }, onerror => {
            this.loading.dismiss();
        });
    }

    public signout() {
        this.locationTracker.clearStorage();
        this.angfire.auth.signOut();
    }
    public showError(errormsg) {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: errormsg,
            buttons: ['Ok']
        });
        alert.present();
    }

    public showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true,
            spinner: 'dots'
        });
        this.loading.present();
    }

   

}