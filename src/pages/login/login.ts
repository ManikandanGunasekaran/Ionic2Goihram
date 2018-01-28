import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loading: Loading;
    loginForm: any;
    userEmail: any;
    rootPage: any;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public angfire: AngularFireAuth,
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        private alertCtrl: AlertController,
        private locationTracker: LocationTrackerProvider

    ) {
        this.loginForm = this.formBuilder.group({
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required]]
        });

    }

    ionViewDidLoad() {
        this.locationTracker.clearStorage();
    }

    UserSignUp() {
        this.navCtrl.push(SignupPage);
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots'
        });
        this.loading.present();
    }

    showError(error) {
        this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: 'Failed',
            subTitle: error,
            buttons: ['Ok']
        });
        alert.present();
    }
    resetPassword(): any {
        this.showLoading();
        this.userEmail = this.loginForm.controls.email.value;
        if (this.userEmail) {
            return this.angfire.auth.sendPasswordResetEmail(this.userEmail);
        } else {
            this.showError('Please Enter Email Id');
        }
    }

    UserSignIn() {
        this.userEmail = this.loginForm.controls.email.value;
        this.locationTracker.setEmail(this.userEmail);
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .then(auth => {
                this.loading.dismiss();
            })
            .catch(err => {
                this.loading.dismiss().then(() => {
                    this.showError('User Not Registered');
                });
            });

    }

}