import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newUseremail:any;
  newuserpassword:any;
  loading: Loading;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public angfire: AngularFireAuth,
     public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  createUser(){
    this.angfire.auth.createUserWithEmailAndPassword(this.newUseremail, this.newuserpassword)
    .then(() => {
      this.loading.dismiss().then( () => {
        this.navCtrl.push(LoginPage);
      });
    }, (error) => {
      this.loading.dismiss().then( () => {
        console.error(error);
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

}
