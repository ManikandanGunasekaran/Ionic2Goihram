import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController , AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';
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
    constructor(public navCtrl: NavController,
         public navParams: NavParams,
         public angfire: AngularFireAuth,
         public loadingCtrl: LoadingController,
         public formBuilder: FormBuilder
        //  ,
        //  private alertCtrl: AlertController
        ) {
            this.loginForm = this.formBuilder.group({
                'email': ['', Validators.required],
                'password': ['', [Validators.required]]
              });
        }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
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
    showError(text) {
        this.loading.dismiss();
     
        // let alert = this.alertCtrl.create({
        //   title: 'Fail',
        //   subTitle: text,
        //   buttons: ['OK']
        // });
        // alert.present(prompt);
    }
    UserSignIn() {
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
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
