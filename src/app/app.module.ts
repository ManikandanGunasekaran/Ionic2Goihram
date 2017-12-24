import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { IonicStorageModule } from '@ionic/storage';
import { enableProdMode } from '@angular/core';
import { GoogleMaps } from '@ionic-native/google-maps';

import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TrackmapPage } from '../pages/trackmap/trackmap';
import { FriendsPage } from '../pages/friends/friends';
import { SignupPage } from '../pages/signup/signup';



  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAf3d756aYVu8t_SYwrU1LKm2r0dSX75GA",
    authDomain: "ihram-b2956.firebaseapp.com",
    databaseURL: "https://ihram-b2956.firebaseio.com",
    projectId: "ihram-b2956",
    storageBucket: "ihram-b2956.appspot.com",
    messagingSenderId: "1016164384053"
  };
  
  enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TrackmapPage,
    FriendsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TrackmapPage,
    FriendsPage,
    SignupPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider
  ]
})
export class AppModule {}
