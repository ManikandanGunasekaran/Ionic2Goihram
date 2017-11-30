import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  
  addFriendForm: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.addFriendForm = this.formBuilder.group({
        'name': ['', Validators.required],
        'mobilenumber': ['', [Validators.required]]
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFriendPage');
  }
  SendFriendRequest(){
    console.log("send friend Request");
  }
}
