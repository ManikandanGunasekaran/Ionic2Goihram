import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

// import { LoginPage } from '../login/login';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    newUserForm: any;
    loading: Loading;
    userInfo: any;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public angfire: AngularFireAuth,
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        private alertCtrl: AlertController,
        private locationTracker: LocationTrackerProvider,
        public http: Http) {
        this.newUserForm = this.formBuilder.group({
            'newUserProfileName': ['', Validators.required],
            'newUserMobile': ['', [Validators.minLength(10), Validators.maxLength(13), Validators.required]],
            'newUserEmail': ['', [Validators.required,Validators.email]],
            'newUserPassword': ['', Validators.required]
        });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    
    showError(errorText,titleText) {
        let alert = this.alertCtrl.create({
            title: titleText,
            subTitle: errorText,
            buttons: ['Ok']
        });
        alert.present();
    }
    createUser() {
        //get User Info
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        
        const Email = this.newUserForm.controls.newUserEmail.value;
        const ProfileName = this.newUserForm.controls.newUserProfileName.value;
        const Mobile = this.newUserForm.controls.newUserMobile.value;
        const Password = this.newUserForm.controls.newUserPassword.value;
        this.userInfo = {
            data: {
                emailId: Email,
                firstName: ProfileName,
                id: "",
                lastName: ProfileName,
                location: {
                    lastUpdatedOn: "",
                    location: ""
                },
                mobileNumber: parseInt(Mobile)
            },
            requestUid: ""
        };


        // this.http.post('/register', this.userInfo)
        this.http.post('https://tracker-rest-service.herokuapp.com/user-details/register', this.userInfo)
            .subscribe(data => {
                console.log("Service Success"+data);
                // firebaseRegistration
                this.angfire.auth.createUserWithEmailAndPassword(Email, Password)
                    .then(() => {
                        this.loading.dismiss().then(() => {
                        	this.locationTracker.setEmail(Email);
                            this.showError('User Registered','Success');
                            // this.navCtrl.push(LoginPage);
                        });
                    }, (error) => {
                        this.loading.dismiss().then(() => {
                            console.error(error);
                            this.showError('firebase error','Failed');
                        });
                    });
                const requestRef = firebase.database().ref('GoIhram');
                requestRef.push({ EmailId: Email, userId: JSON.parse(data.text())['data'].id});
            }, error => {
                console.log("SignUp Servie Down"+error); // Error getting the data
                this.loading.dismiss();
                const errInfo = error.json();
                if(errInfo.errorInformation) {
					this.showError(errInfo.errorInformation.message,'Failed');
                } else {
	                this.showError('Service Down','Failed');
                }
            });
      
    }

}
