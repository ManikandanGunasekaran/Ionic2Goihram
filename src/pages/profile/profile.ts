import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Name: any;
  Email: any;
  userId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get('userId'); 
    this.Name = "Mani";
    this.Email = "a@b.com";
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
