webpackJsonp([6],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackmapPage = (function () {
    function TrackmapPage(navCtrl, navParams, loadingCtrl, geolocation, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.markers = [];
        this.endpoint = new google.maps.LatLng(13.138039, 80.31597);
        this.myCurrentLocation = {};
    }
    TrackmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackmapPage');
    };
    TrackmapPage.prototype.ngOnInit = function () {
        this.selectedFriend = '';
        this.userId = this.navParams.get('userId');
        this.getCurrentLoc = this.navParams.get('currentLoc');
        this.initMap();
    };
    //current location
    TrackmapPage.prototype.initMap = function () {
        this.startpoint = new google.maps.LatLng(this.getCurrentLoc.lat, this.getCurrentLoc.lan);
        this.updateMyLocation();
        var mapOptions = {
            center: this.startpoint,
            zoom: 15,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.createMapMarker(this.startpoint);
    };
    TrackmapPage.prototype.updateMyLocation = function () {
        var mylocation = JSON.stringify(this.myCurrentLocation);
        //   let url = '/add-location';
        var url = 'https://tracker-rest-service.herokuapp.com/locations/add-location';
        this.http.post(url + '/' + this.userId + '/' + mylocation + '', null).subscribe(function (data) {
            console.log(data);
        });
    };
    //marker for current location
    TrackmapPage.prototype.createMapMarker = function (place) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            position: place,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', function () {
            _this.selectedFriend = 'Mani';
            // infoWindow.open(this.map, marker);
        });
        // let content = "<h3>Mani</h3><h5>Chennai</h5>";
        // this.addInfoWindow(marker, content);
        this.markers.push(marker);
    };
    // addInfoWindow(marker, content) {
    //     let infoWindow = new google.maps.InfoWindow({
    //         content: content
    //     });
    //     google.maps.event.addListener(marker, 'click', () => {
    //         this.selectedFriend = 'Mani';
    //         // infoWindow.open(this.map, marker);
    //     });
    // }
    //getting directions
    TrackmapPage.prototype.calculateAndDisplayRoute = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsService.route({
            origin: this.startpoint,
            destination: this.endpoint,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    return TrackmapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], TrackmapPage.prototype, "mapElement", void 0);
TrackmapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trackmap',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\trackmap\trackmap.html"*/'<!--\n\n  Generated template for the TrackmapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar  align-title="center">\n\n    <ion-title text-align="center">\n\n      Track Friends\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n  <ion-card cardTheme>\n\n      <ion-item>\n\n              <span *ngIf="!selectedFriend" class="card-title">Select Friend to Track...</span>\n\n            <span *ngIf="selectedFriend" class="card-title">{{selectedFriend}}</span>\n\n          \n\n          <p *ngIf="selectedFriend">11 N. Way St, Madison, WI 53703</p>\n\n          <button *ngIf="selectedFriend" (click)="calculateAndDisplayRoute()" ion-button icon-right clear item-end>\n\n              <ion-icon name="navigate"></ion-icon>\n\n              Start\n\n            </button>\n\n            <!-- <ion-avatar item-right>\n\n                <img src="assets/images/defaultProfilePicture.jpg">\n\n              </ion-avatar> -->\n\n        </ion-item>\n\n  </ion-card>\n\n  <!-- <div padding-top>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="calculateAndDisplayRoute()">\n\n            <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>Find Friends</button>\n\n    </ion-buttons>\n\n  </div> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\trackmap\trackmap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], TrackmapPage);

//# sourceMappingURL=trackmap.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userId = navParams.get('userId');
        this.Name = "Mani";
        this.Email = "a@b.com";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card itemStyle>\n        \n             <ion-item itemStyle>\n               <ion-avatar>\n                 <img [src]="profilePicture">\n               </ion-avatar>\n             </ion-item>\n        \n             <ion-card-content>\n        \n               <ion-list no-lines>\n                  <ion-item itemStyle>\n                    <h2>{{Name}}</h2>\n                  </ion-item>\n                 <ion-item itemStyle>\n                   <ion-label floating>{{Email}}</ion-label>\n                   <!-- <ion-input type="email"></ion-input> -->\n                 </ion-item>\n        \n               </ion-list>\n        \n             </ion-card-content>\n        \n           </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, angfire, loadingCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angfire = angfire;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.newUserForm = this.formBuilder.group({
            'newUserProfileName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'newUserMobile': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(13), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            'newUserEmail': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'newUserPassword': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.createUser = function () {
        var _this = this;
        //get User Info
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        var Email = this.newUserForm.controls.newUserEmail.value;
        var ProfileName = this.newUserForm.controls.newUserProfileName.value;
        var Mobile = this.newUserForm.controls.newUserMobile.value;
        var Password = this.newUserForm.controls.newUserPassword.value;
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
            .subscribe(function (data) {
            console.log(data);
            // firebaseRegistration
            _this.angfire.auth.createUserWithEmailAndPassword(Email, Password)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    console.error(error);
                });
            });
        }, function (error) {
            console.log(error); // Error getting the data
            _this.loading.dismiss();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>New Account</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-list>\n\n          <form [formGroup]="newUserForm" (submit)="createUser()"> \n\n\n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>ProfileName</ion-label>\n\n              <ion-input formControlName="newUserProfileName" type="text"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>Mobile</ion-label>\n\n              <ion-input type="number" formControlName="newUserMobile"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="email" formControlName="newUserEmail"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input type="password" formControlName="newUserPassword"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item class=\'itemStyle\'> -->\n\n            <div padding>\n\n            <button ion-button type="submit" [disabled]="!newUserForm.valid">Create Account</button>\n\n          </div>\n\n            <!-- </ion-item> -->\n\n          </form>  \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-friend/add-friend.module": [
		324,
		5
	],
	"../pages/friends/friends.module": [
		325,
		4
	],
	"../pages/login/login.module": [
		326,
		3
	],
	"../pages/profile/profile.module": [
		327,
		2
	],
	"../pages/signup/signup.module": [
		328,
		1
	],
	"../pages/trackmap/trackmap.module": [
		329,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trackmap_trackmap__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friends_friends__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.myCurrentLocation = {};
    }
    HomePage.prototype.ngOnInit = function () {
        this.userId = this.navParams.get('userId');
        this.postMyLocationInfo();
    };
    HomePage.prototype.postMyLocationInfo = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.myCurrentLocation = {
                lat: position.coords.latitude,
                lan: position.coords.longitude
            };
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.MoveToTrackPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trackmap_trackmap__["a" /* TrackmapPage */], { userId: this.userId, currentLoc: this.myCurrentLocation });
    };
    HomePage.prototype.MoveToFriendsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__friends_friends__["a" /* FriendsPage */], { userId: this.userId });
    };
    HomePage.prototype.MoveToProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], { userId: this.userId });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title >\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n  <ion-list inset no-lines>\n\n    <button ion-item  style="background-color: black; color:white;" (click)="MoveToTrackPage()">\n\n      <ion-icon style="color:white" padding-right ios="ios-bicycle" md="md-bicycle"></ion-icon> Track </button> \n\n    <button ion-item  style="background-color: black; color:white;" (click)="MoveToFriendsPage()">\n\n      <ion-icon padding-right ios="ios-contacts" md="md-contacts"></ion-icon> Friends </button> \n\n    <!-- <button ion-item  style="background-color: black; color:white;" (click)="MoveToProfilePage()">\n\n      <ion-icon style="color:white" padding-right ios="ios-contact" md="md-contact"></ion-icon> Profile </button>  -->\n\n    <button ion-item  style="background-color: black; color:white;" ><ion-icon padding-right ios="ios-create" md="md-create">\n\n      </ion-icon> Review </button> \n\n    <button ion-item  style="background-color: black; color:white;"><ion-icon padding-right ios="ios-lock" md="md-lock">\n\n      </ion-icon> SignOut </button> \n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFriendPage = (function () {
    function AddFriendPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.addFriendForm = this.formBuilder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'mobilenumber': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    AddFriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFriendPage');
    };
    AddFriendPage.prototype.SendFriendRequest = function () {
        console.log("send friend Request");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */]);
    };
    return AddFriendPage;
}());
AddFriendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-friend',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\add-friend\add-friend.html"*/'<!--\n\n  Generated template for the AddFriendPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Friend</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="addFriendForm" (submit)="SendFriendRequest()"> \n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-list>\n\n   \n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>Name</ion-label>\n\n              <ion-input type="text" formControlName="name"></ion-input>\n\n            </ion-item>\n\n   \n\n            <ion-item class=\'itemStyle\'>\n\n              <ion-label floating>Mobile Number</ion-label>\n\n              <ion-input type="text" formControlName="mobilenumber"></ion-input>\n\n            </ion-item>\n\n   \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col padding>\n\n          <button ion-button [disabled]="!addFriendForm.valid" class="login-button">Send Request</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      </form>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\add-friend\add-friend.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AddFriendPage);

//# sourceMappingURL=add-friend.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_trackmap_trackmap__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_friend_add_friend__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Initialize Firebase
var config = {
    apiKey: "AIzaSyAf3d756aYVu8t_SYwrU1LKm2r0dSX75GA",
    authDomain: "ihram-b2956.firebaseapp.com",
    databaseURL: "https://ihram-b2956.firebaseio.com",
    projectId: "ihram-b2956",
    storageBucket: "ihram-b2956.appspot.com",
    messagingSenderId: "1016164384053"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_trackmap_trackmap__["a" /* TrackmapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_friend_add_friend__["a" /* AddFriendPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-friend/add-friend.module#AddFriendPageModule', name: 'AddFriendPage', segment: 'add-friend', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trackmap/trackmap.module#TrackmapPageModule', name: 'TrackmapPage', segment: 'trackmap', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_trackmap_trackmap__["a" /* TrackmapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_friend_add_friend__["a" /* AddFriendPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams, loadingCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.approvedFriends = [];
        this.pendingFriends = [];
        this.Friends = 'FRIENDS';
        this.userId = navParams.get('userId');
        this.addFriendForm = this.formBuilder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'mobilenumber': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.GetAllFriends();
    }
    FriendsPage.prototype.SendFriendRequest = function () {
        var _this = this;
        console.log("send friend Request");
        this.showLoader();
        var friendMobilenumber = this.addFriendForm.controls.mobilenumber.value;
        // let sendReqUrl ='/send-friend-request';
        var sendReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/send-friend-request';
        this.http.post(sendReqUrl + '/' + this.userId + '/' + friendMobilenumber, null).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.loading.dismiss();
        });
    };
    FriendsPage.prototype.GetAllFriends = function () {
        var _this = this;
        this.showLoader();
        var sendReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/find-friends';
        // let sendReqUrl ='/find-friends';
        this.http.get(sendReqUrl + '/' + this.userId).map(function (res) { return res.json(); }).subscribe(function (data) {
            var FriendList = data.data;
            for (var _i = 0, FriendList_1 = FriendList; _i < FriendList_1.length; _i++) {
                var friends = FriendList_1[_i];
                if (friends.status === 'CONFIRMED') {
                    _this.approvedFriends.push({ photoURL: "", displayName: friends.id, friendId: friends.friendId });
                }
                else {
                    _this.pendingFriends.push({ photoURL: "", displayName: friends.id, friendId: friends.friendId });
                }
            }
            _this.loading.dismiss();
            console.log(data);
        });
        console.log('getReq');
    };
    FriendsPage.prototype.ApproveRequest = function (friendId) {
        var _this = this;
        this.showLoader();
        // let acceptReqUrl = '/accept';
        var acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/accept';
        this.http.post(acceptReqUrl + '/' + this.userId + '/' + friendId, null).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.GetAllFriends();
            _this.removeItem(friendId);
            _this.loading.dismiss();
        });
    };
    FriendsPage.prototype.DeleteRequest = function (friendId) {
        var _this = this;
        this.showLoader();
        // let acceptReqUrl = '/accept';
        var acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/accept';
        this.http.delete(acceptReqUrl + '/' + this.userId + '/' + friendId, null).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.GetAllFriends();
            _this.removeItem(friendId);
            _this.loading.dismiss();
        });
    };
    FriendsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    };
    FriendsPage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.filteredusers.length; i++) {
            if (this.filteredusers[i].friendId == item) {
                this.filteredusers.splice(i, 1);
            }
        }
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\friends\friends.html"*/'<!--\n\n  Generated template for the FriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar  align-title="center">\n\n  <ion-title text-align="center">\n\n    Friends\n\n  </ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div padding>\n\n       \n\n        <ion-segment [(ngModel)]="Friends">\n\n            <ion-segment-button value="FRIENDS">\n\n              FRIENDS\n\n              </ion-segment-button>\n\n          <ion-segment-button value="PENDING">\n\n              PENDING \n\n          </ion-segment-button>\n\n          <ion-segment-button value="SEND">\n\n              REQUESTS\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n        \n\n      </div>\n\n      <div [ngSwitch]="Friends">\n\n          <ion-list *ngSwitchCase="\'FRIENDS\'">\n\n              <ion-item-sliding *ngFor="let key of approvedFriends">\n\n                  <ion-item style="background-color: black">\n\n                    <ion-avatar item-left>\n\n                      <img src="assets/images/defaultProfilePicture.jpg">\n\n                    </ion-avatar>\n\n                    <h2 style="color:white">{{key.friendId}}</h2>\n\n                  </ion-item>\n\n                  <ion-item-options>\n\n                    <button danger (click)="DeleteRequest(key.displayName)">\n\n                      <ion-icon name="trash"></ion-icon> Delete</button>\n\n                  </ion-item-options>\n\n                </ion-item-sliding>\n\n          </ion-list>\n\n        \n\n          <ion-list *ngSwitchCase="\'PENDING\'">\n\n              <ion-item-sliding *ngFor="let key of pendingFriends">\n\n                  <ion-item style="background-color: black">\n\n                    <ion-avatar item-left>\n\n                      <img src="assets/images/defaultProfilePicture.jpg">\n\n                    </ion-avatar>\n\n                    <h2 style="color:white">{{key.friendId}}</h2>\n\n                  </ion-item>\n\n                  <ion-item-options>\n\n                    <button danger (click)="DeleteRequest(key.displayName)">\n\n                      <ion-icon name="trash"></ion-icon> Reject</button>\n\n                      <button danger (click)="ApproveRequest(key.friendId);">\n\n                          <ion-icon name="trash"></ion-icon> Approve</button>\n\n                  </ion-item-options>\n\n                </ion-item-sliding>\n\n          </ion-list>\n\n\n\n          <ion-list *ngSwitchCase="\'SEND\'">\n\n              <form [formGroup]="addFriendForm" (submit)="SendFriendRequest()"> \n\n                  <ion-row>\n\n                      <ion-col>\n\n                        <ion-list>\n\n                 \n\n                          <ion-item class=\'itemStyle\'>\n\n                            <ion-label floating>Name</ion-label>\n\n                            <ion-input type="text" formControlName="name"></ion-input>\n\n                          </ion-item>\n\n                 \n\n                          <ion-item class=\'itemStyle\'>\n\n                            <ion-label floating>Mobile Number</ion-label>\n\n                            <ion-input type="text" formControlName="mobilenumber"></ion-input>\n\n                          </ion-item>\n\n                 \n\n                        </ion-list>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                      <ion-col padding>\n\n                        <button ion-button [disabled]="!addFriendForm.valid" class="login-button">Send Request</button>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    </form>\n\n          </ion-list>\n\n        </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, diagnostic, navParams, angfire, loadingCtrl, formBuilder, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.navParams = navParams;
        this.angfire = angfire;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loginForm = this.formBuilder.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.checkLocation();
    };
    LoginPage.prototype.UserSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function () {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Failed',
            subTitle: 'User Not Registered',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.UserSignIn = function () {
        var _this = this;
        this.userEmail = this.loginForm.controls.email.value;
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .then(function (auth) {
            _this.movetoHomepage();
        })
            .catch(function (err) {
            _this.loading.dismiss().then(function () {
                console.log("" + err);
                _this.showError();
            });
        });
    };
    LoginPage.prototype.movetoHomepage = function () {
        var _this = this;
        var getUserDetail = 'https://tracker-rest-service.herokuapp.com/user-details/read-by-email';
        // let getUserDetail = '/read-by-email';
        this.http.get(getUserDetail + '/' + this.userEmail + '/').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], { userId: data.data.id
            });
        });
    };
    LoginPage.prototype.checkLocation = function () {
        // this.platform.ready().then((readySource) => {
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            console.log('Is available? ' + isAvailable);
            alert('Is available? ' + isAvailable);
            // return Diagnostic.switchToLocationSettings();
        }).catch(function (e) {
            console.log(e);
            alert(JSON.stringify(e));
        });
        // });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content fullscreen>\n\n   <div  padding id="cloud-layer">\n\n\n\n   </div>\n\n    <div >\n\n      <form [formGroup]="loginForm" (submit)="UserSignIn()"> \n\n           <ion-row>\n\n             <ion-col>\n\n               <ion-list inset>\n\n               \n\n                 <ion-item>\n\n                   <ion-label>Username</ion-label>\n\n                   <ion-input type="text" formControlName="email"></ion-input>\n\n                 </ion-item>\n\n        \n\n                 <ion-item>\n\n                   <ion-label>Password</ion-label>\n\n                   <ion-input type="password" formControlName="password"></ion-input>\n\n                 </ion-item>\n\n               </ion-list>\n\n             </ion-col>\n\n           </ion-row>\n\n           <ion-row>\n\n             <ion-col>\n\n               <!-- <button ion-button class="login-button" (click)="UserSignIn()">Sign In</button> -->\n\n               <!-- <button ion-button type="submit" class="login-button" [disabled]="!loginForm.valid"></button> -->\n\n               \n\n    <button ion-button icon-right outline class="login-button" color="light" [disabled]="!loginForm.valid">Sign In <ion-icon name="arrow-forward"></ion-icon></button>\n\n               </ion-col>\n\n           </ion-row>\n\n      </form>  \n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button class="register-btn" block clear (click)="UserSignUp()">Create New Account</button>\n\n        </ion-col>\n\n      </ion-row>\n\n         </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map