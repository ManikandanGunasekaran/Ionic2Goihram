import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TrackmapPage } from '../trackmap/trackmap';
import { FriendsPage } from '../friends/friends';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }
  public MoveToTrackPage(){
      this.navCtrl.push(TrackmapPage);
  }
  public MoveToFriendsPage(){
      this.navCtrl.push(FriendsPage);
  }
}
