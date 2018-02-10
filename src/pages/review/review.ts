import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  constructor(public navCtrl: NavController, 
  	public viewCtrl: ViewController,
  	public navParams: NavParams) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  onModelChange(e) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  saveReview(){
    this.viewCtrl.dismiss();
  }

}
