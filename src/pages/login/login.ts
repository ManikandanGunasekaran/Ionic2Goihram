import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';


// import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loading: Loading;
    loginForm: any;
    userEmail: any;
    LocAvail: any;
    rootPage: any;
    billList: Observable<any[]>;
    constructor(public navCtrl: NavController,
        public diagnostic: Diagnostic,
        public navParams: NavParams,
        public angfire: AngularFireAuth,
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        private storage: Storage,
        private alertCtrl: AlertController,
        private locationTracker:LocationTrackerProvider
       
    ) {
        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', [Validators.required]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        this.LocAvail = '';
       
    }

    UserSignUp() {
        this.navCtrl.push(SignupPage);
    }
    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }
    showError() {
        this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: 'Failed',
            subTitle: 'User Not Registered',
            buttons: ['Ok']
        });
        alert.present();
    }
    UserSignIn() {
        this.storage.clear();
        this.userEmail = this.loginForm.controls.email.value;
  
        this.storage.set('userEmail', this.userEmail);
        
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .then(auth => {
              console.log(auth);
              // const userId = 9;
              //   this.locationTracker.getUserDetails(userId).subscribe(data => {
              //       console.log(data);
              //       this.storage.set('userDetails', data.data);
              //       this.loading.dismiss();
              //   }); 
            })
            
            .catch(err => {
                this.loading.dismiss().then( () => {
                    console.log("" + err);
                    this.showError();
                });
            });

            
    }

    checkLocation() {
        // this.platform.ready().then((readySource) => {

        this.diagnostic.isLocationEnabled().then(
            (isAvailable) => {
                console.log('Is available? ' + isAvailable);
                // alert('Is available? ' + isAvailable);
                this.LocAvail = isAvailable;
                // return Diagnostic.switchToLocationSettings();
            }).catch((e) => {
            console.log(e);
            // alert(JSON.stringify(e));
            this.LocAvail = 'error';
        });


        // });
    }

}