import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';


import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(private platform: Platform, statusBar: StatusBar, private angfire: AngularFireAuth,
        private locationTracker: LocationTrackerProvider,
        splashScreen: SplashScreen) {
        this.platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            // this.locationTracker.GetCurrentLocation();
            this.ValidateUser();
        });
    }

    ValidateUser() {
        this.angfire.auth.onAuthStateChanged(user => {
            if (!user) {
                // this.locationTracker.checkLocation();
                this.rootPage = LoginPage;
            } else {
                this.locationTracker.setEmail(user.email);
                this.rootPage = HomePage;
            }
        });
    }

    
}