import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../login/login';

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
        public http: Http) {
        this.newUserForm = this.formBuilder.group({
            'newUserProfileName': ['', Validators.required],
            'newUserMobile': ['', [Validators.maxLength(13), Validators.required]],
            'newUserEmail': ['', Validators.required],
            'newUserPassword': ['', Validators.required]
        });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
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


        this.http.post('https://tracker-rest-service.herokuapp.com/user-details/register', this.userInfo)
            .subscribe(data => {
                console.log(data);
                // firebaseRegistration
                this.angfire.auth.createUserWithEmailAndPassword(Email, Password)
                    .then(() => {
                        this.loading.dismiss().then(() => {
                            this.navCtrl.push(LoginPage);
                        });
                    }, (error) => {
                        this.loading.dismiss().then(() => {
                            console.error(error);
                        });
                    });
                
            }, error => {
                console.log(error); // Error getting the data
                this.loading.dismiss();
            });
           
      
    }

}
