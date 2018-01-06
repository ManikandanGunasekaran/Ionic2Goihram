import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { Diagnostic } from '@ionic-native/diagnostic';

import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

import{ LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(public platform: Platform, statusBar: StatusBar, public angfire: AngularFireAuth,
     public diagnostic: Diagnostic,
     public alertCtrl: AlertController,
     private locationTracker:LocationTrackerProvider,
   splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkLocation();
      this.locationTracker.GetCurrentLocation();
      this.ValidateUser();
    });
  }

  ValidateUser(){
  this.angfire.auth.onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = LoginPage;
      } else { 
        this.rootPage = HomePage;
      }
    });
  }

  checkLocation() {
    this.platform.ready().then((readySource) => {
      this.diagnostic.isLocationEnabled().then(
          (isAvailable) => {
              console.log('Is available? ' + isAvailable);
              if(!isAvailable){
                this.showLocationCheck();
              }
              this.locationTracker.GetCurrentLocation();
          });
    });
  }

  showLocationCheck() {
      let alert = this.alertCtrl.create({
          subTitle: 'To continue let your device turn on location, which uses Google Location Service',
          buttons: [
              {
                text: 'Cancel',
              },
              {
                text: 'Ok',
                handler: () => {
                  return this.diagnostic.switchToLocationSettings();
                }
              }
            ],

      });
      alert.present();
  }
}

