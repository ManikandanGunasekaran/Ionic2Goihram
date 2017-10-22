import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {

    
    let myHeaders: Headers = new Headers
    myHeaders.append("Accept", 'application/json');
    myHeaders.append('Content-type', 'application/json');
    myHeaders.append('Cache-Control', 'no-cache');
    myHeaders.append('Access-Control-Allow-Origin','*');
    myHeaders.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    myHeaders.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token, X-Request-Token, X-Request-AppId');
    let opt = new RequestOptions({
      headers: myHeaders
    })

    this.http.get('https://tracker-rest-service.herokuapp.com/',opt).map(res => res.json()).subscribe(data => {
     console.log( data);
  });
  }

  ionViewDidLoad() {
     console.log('ionViewDidLoad FriendsPage');
  }

}
