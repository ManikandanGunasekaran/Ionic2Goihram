import { Component, OnDestroy } from '@angular/core';
import { NavController, AlertController, Loading, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

import { TrackmapPage } from '../trackmap/trackmap';
import { FriendsPage } from '../friends/friends';
import { ReviewPage } from '../review/review';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnDestroy  {
    userId: number;
    myCurrentLocation = {};
    userEmail: any;
    loading: Loading;
    getfriends: any;
    subscription: any;

    constructor(private navCtrl: NavController,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private modalCtrl: ModalController,
        private angfire: AngularFireAuth,
        private locationTracker: LocationTrackerProvider
    ) {
      
    }
   
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    openModal() {
       
        let myModal = this.modalCtrl.create(ReviewPage,"",{enableBackdropDismiss:false});
        myModal.present();
    }

    ionViewDidEnter(){
          this.locationTracker.getEmail().then((data) => {
            this.showLoader();
            this.userEmail = data;
            const requestRef = firebase.database().ref('GoIhram');
            requestRef.orderByChild('EmailId')
                .equalTo(this.userEmail)
                .once('value')
                .then(snapshot => snapshot.val())
                .then((data) => {
                    if(data===null){
                        this.loading.dismiss();
                        this.showError('Something Went Wrong, try after sometime');
                    }
                    for (var val in data) {
                        if (data.hasOwnProperty(val)) {
                            this.userId = data[val].userId;
                            this.getUserDetails();
                        }
                    }

                }, (error) => {
                    this.loading.dismiss();
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
   
    public getUserDetails() {
       
        this.subscription = this.locationTracker.getUserDetails(this.userId).subscribe(data => {
            this.locationTracker.setUserDetail(data.data);
            this.loading.dismiss().then(() => {
                this.locationTracker.checkLocation();
            });
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