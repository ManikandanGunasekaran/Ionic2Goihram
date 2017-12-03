import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Diagnostic } from '@ionic-native/diagnostic';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loading: Loading;
    loginForm: any;
    userEmail: any;
    constructor(public navCtrl: NavController,
        public diagnostic: Diagnostic,
         public navParams: NavParams,
         public angfire: AngularFireAuth,
         public loadingCtrl: LoadingController,
         public formBuilder: FormBuilder,
         public http: Http,
         private alertCtrl: AlertController
        ) {
            this.loginForm = this.formBuilder.group({
                'email': ['', Validators.required],
                'password': ['', [Validators.required]]
              });
        }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        this.checkLocation();
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
                this.movetoHomepage();
            })
            .catch(err => {
                this.loading.dismiss().then( () => {
                    console.log("" + err);
                    this.showError();
                });
            });
    }
    movetoHomepage(){
        let getUserDetail ='https://tracker-rest-service.herokuapp.com/user-details/read-by-email';
        // let getUserDetail = '/read-by-email';
        this.http.get(getUserDetail+'/'+ this.userEmail +'/').map(res => res.json()).subscribe(data => {
            console.log( data);
            this.loading.dismiss();
            this.navCtrl.push(HomePage, {  userId:data.data.id
            });
   
        });
    }
    checkLocation()
    {
        // this.platform.ready().then((readySource) => {
        
        this.diagnostic.isLocationEnabled().then(
        (isAvailable) => {
        console.log('Is available? ' + isAvailable);
        alert('Is available? ' + isAvailable);
        // return Diagnostic.switchToLocationSettings();
        }).catch( (e) => {
        console.log(e);
        alert(JSON.stringify(e));
        });
        
        
        // });
    }

}
