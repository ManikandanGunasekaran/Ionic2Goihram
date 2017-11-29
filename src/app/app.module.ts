import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TrackmapPage } from '../pages/trackmap/trackmap';
import { FriendsPage } from '../pages/friends/friends';
import { SignupPage } from '../pages/signup/signup';
import { AddFriendPage } from '../pages/add-friend/add-friend';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAf3d756aYVu8t_SYwrU1LKm2r0dSX75GA",
    authDomain: "ihram-b2956.firebaseapp.com",
    databaseURL: "https://ihram-b2956.firebaseio.com",
    projectId: "ihram-b2956",
    storageBucket: "ihram-b2956.appspot.com",
    messagingSenderId: "1016164384053"
  };
  
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TrackmapPage,
    FriendsPage,
    SignupPage,
    AddFriendPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TrackmapPage,
    FriendsPage,
    SignupPage,
    AddFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
