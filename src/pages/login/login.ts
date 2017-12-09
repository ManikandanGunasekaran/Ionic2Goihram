import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Diagnostic } from '@ionic-native/diagnostic';

import { HomePage } from '../home/home';
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
    constructor(public navCtrl: NavController,
        public diagnostic: Diagnostic,
        public navParams: NavParams,
        public angfire: AngularFireAuth,
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        private alertCtrl: AlertController
    ) {
        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', [Validators.required]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        this.LocAvail = '';
        // this.checkLocation();
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
        this.userEmail = this.loginForm.controls.email.value;
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .then(auth => {
                this.navCtrl.push(HomePage, {  userEmail:this.loginForm.controls.email.value
                });
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