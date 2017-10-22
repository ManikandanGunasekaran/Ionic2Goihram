import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    email: any;
    password: any;
    loading: Loading;
    constructor(public navCtrl: NavController,
         public navParams: NavParams,
         public angfire: AngularFireAuth,
         public loadingCtrl: LoadingController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    loginFacebook() {
        this.angfire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((res) => {
                console.log(res)
                this.navCtrl.push(HomePage);
            });
    }

    UserSignUp() {
        this.navCtrl.push(SignupPage);
    }
    startLoader(){
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    }
    UserSignIn() {
        this.startLoader();
        this.angfire.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(auth => {
                this.loading.dismiss().then( () => {
                    console.log("" + auth);
                    this.navCtrl.push(HomePage);
                });
            })
            .catch(err => {
                this.loading.dismiss().then( () => {
                    console.log("" + err);
                });
            });
    }

}
