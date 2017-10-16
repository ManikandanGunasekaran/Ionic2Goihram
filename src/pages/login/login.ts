import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginFacebook() {
    this.angfire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) =>{
     console.log(res)
     this.navCtrl.push(HomePage);}
    );
  }

 
}
