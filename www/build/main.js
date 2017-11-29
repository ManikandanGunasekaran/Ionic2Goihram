webpackJsonp([5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFriendPage = (function () {
    function AddFriendPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddFriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFriendPage');
    };
    AddFriendPage.prototype.SendFriendRequest = function () {
        console.log("send friend Request");
    };
    return AddFriendPage;
}());
AddFriendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-friend',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\add-friend\add-friend.html"*/'<!--\n\n  Generated template for the AddFriendPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Friend</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n   \n\n            <ion-item>\n\n              <ion-label>Name</ion-label>\n\n              <ion-input type="text" [(ngModel)]="Name"></ion-input>\n\n            </ion-item>\n\n   \n\n            <ion-item>\n\n              <ion-label>Mobile Number</ion-label>\n\n              <ion-input type="text" [(ngModel)]="mobilenumber"></ion-input>\n\n            </ion-item>\n\n   \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button class="login-button" (click)="SendFriendRequest()">Send Request</button>\n\n        </ion-col>\n\n      </ion-row>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\add-friend\add-friend.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AddFriendPage);

//# sourceMappingURL=add-friend.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_friend_add_friend__ = __webpack_require__(106);
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
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */];
        myHeaders.append("Accept", 'application/json');
        myHeaders.append('Content-type', 'application/json');
        myHeaders.append('Cache-Control', 'no-cache');
        myHeaders.append('Access-Control-Allow-Origin', '*');
        // myHeaders.append('Access-Control-Allow-Credentials','true');
        myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        myHeaders.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Request-Token, X-Request-AppId');
        var opt = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders
        });
        this.filteredusers = [{
                photoURL: "",
                displayName: "Mani"
            },
            {
                photoURL: "",
                displayName: "Santhosh"
            },
            {
                photoURL: "",
                displayName: "Karthick"
            }];
        this.http.get('read/1', opt).map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.http.get('/order',opt).map(res => res.json()).subscribe(data => {
            console.log(data);
        });
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    FriendsPage.prototype.AddFriend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_friend_add_friend__["a" /* AddFriendPage */]);
    };
    FriendsPage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.filteredusers.length; i++) {
            if (this.filteredusers[i].displayName == item) {
                this.filteredusers.splice(i, 1);
            }
        }
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\friends\friends.html"*/'<!--\n\n  Generated template for the FriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar  align-title="center">\n\n  <ion-title text-align="center">\n\n    Friends\n\n  </ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div padding>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="AddFriend()">\n\n            <ion-icon name="person-add"></ion-icon>\n\n          </button>\n\n        </ion-buttons> \n\n        <ion-list no-lines>\n\n            <ion-list>\n\n              <ion-item-sliding *ngFor="let key of filteredusers">\n\n                <ion-item style="background-color: black">\n\n                  <ion-avatar item-left>\n\n                    <img src="assets/images/defaultProfilePicture.jpg">\n\n                  </ion-avatar>\n\n                  <h2 style="color:white">{{key.displayName}}</h2>\n\n                </ion-item>\n\n                <ion-item-options>\n\n                  <button danger (click)="removeItem(key.displayName)">\n\n                    <ion-icon name="trash"></ion-icon> Delete</button>\n\n                </ion-item-options>\n\n              </ion-item-sliding>\n\n            </ion-list>\n\n          </ion-list>\n\n        <!-- <ion-segment [(ngModel)]="Friends">\n\n            <ion-segment-button value="List Friends">\n\n                List Friends\n\n              </ion-segment-button>\n\n          <ion-segment-button value="Add Friends">\n\n            ADD Friends\n\n          </ion-segment-button>\n\n         \n\n        </ion-segment> -->\n\n      </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\friends\friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function TrackmapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.markers = [];
        this.startpoint = new google.maps.LatLng(13.038039, 80.21597);
        this.endpoint = new google.maps.LatLng(13.138039, 80.31597);
    }
    TrackmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackmapPage');
    };
    TrackmapPage.prototype.ngOnInit = function () {
        this.initMap();
    };
    //current location
    TrackmapPage.prototype.initMap = function () {
        var divMap = document.getElementById('map');
        this.map = new google.maps.Map(divMap, {
            center: this.startpoint,
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true
        });
        this.createMapMarker(this.startpoint);
    };
    //marker for current location
    TrackmapPage.prototype.createMapMarker = function (place) {
        var marker = new google.maps.Marker({
            map: this.map,
            position: place
        });
        this.markers.push(marker);
    };
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
TrackmapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trackmap',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\trackmap\trackmap.html"*/'<!--\n\n  Generated template for the TrackmapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar  align-title="center">\n\n    <ion-title text-align="center">\n\n      Track Friends\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div id="map"></div>\n\n  <div padding-top>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="calculateAndDisplayRoute()">\n\n            <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>Find Friends</button>\n\n    </ion-buttons>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\trackmap\trackmap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TrackmapPage);

//# sourceMappingURL=trackmap.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(53);
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
        var Email = this.newUserForm.controls.newUserEmail.value;
        var ProfileName = this.newUserForm.controls.newUserProfileName.value;
        var Mobile = this.newUserForm.controls.newUserMobile.value;
        var Password = this.newUserForm.controls.newUserPassword.value;
        this.userInfo = [{ data: { email: Email,
                    firstName: ProfileName,
                    id: "",
                    lastName: ProfileName,
                    location: "",
                    mobileNumber: Mobile
                }
            }
        ];
        this.http.get('/read/' + Mobile + '').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            //firebaseRegistration
            // this.angfire.auth.createUserWithEmailAndPassword(Email, Password)
            // .then(() => {
            //   this.loading.dismiss().then( () => {
            //     this.navCtrl.push(LoginPage);
            //   });
            // }, (error) => {
            //   this.loading.dismiss().then( () => {
            //     console.error(error);
            //   });
            // });
            // this.loading = this.loadingCtrl.create();
            // this.loading.present();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>New Account</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n          <form [formGroup]="newUserForm" (submit)="createUser()"> \n\n\n\n            <ion-item>\n\n              <ion-label floating>ProfileName</ion-label>\n\n              <ion-input formControlName="newUserProfileName" type="text"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Mobile</ion-label>\n\n              <ion-input type="number" formControlName="newUserMobile"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="text" formControlName="newUserEmail"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Password</ion-label>\n\n              <ion-input type="password" formControlName="newUserPassword"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n            <button ion-button type="submit" [disabled]="!newUserForm.valid">Create Account</button>\n\n            </ion-item>\n\n          </form>  \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-friend/add-friend.module": [
		322,
		4
	],
	"../pages/friends/friends.module": [
		323,
		3
	],
	"../pages/login/login.module": [
		324,
		2
	],
	"../pages/signup/signup.module": [
		325,
		1
	],
	"../pages/trackmap/trackmap.module": [
		326,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trackmap_trackmap__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(107);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.MoveToTrackPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__trackmap_trackmap__["a" /* TrackmapPage */]);
    };
    HomePage.prototype.MoveToFriendsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title >\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n  <ion-list inset no-lines>\n\n    <button ion-item  style="background-color: black; color:white;" (click)="MoveToTrackPage()">\n\n      <ion-icon style="color:white" padding-right ios="ios-bicycle" md="md-bicycle"></ion-icon> Track </button> \n\n    <button ion-item  style="background-color: black; color:white;" (click)="MoveToFriendsPage()">\n\n      <ion-icon padding-right ios="ios-contacts" md="md-contacts"></ion-icon> Friends </button> \n\n    <button ion-item  style="background-color: black; color:white;" ><ion-icon padding-right ios="ios-create" md="md-create">\n\n      </ion-icon> Review </button> \n\n    <button ion-item  style="background-color: black; color:white;"><ion-icon padding-right ios="ios-lock" md="md-lock">\n\n      </ion-icon> SignOut </button> \n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_trackmap_trackmap__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_friends_friends__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_friend_add_friend__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_trackmap_trackmap__["a" /* TrackmapPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_friend_add_friend__["a" /* AddFriendPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-friend/add-friend.module#AddFriendPageModule', name: 'AddFriendPage', segment: 'add-friend', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trackmap/trackmap.module#TrackmapPageModule', name: 'TrackmapPage', segment: 'trackmap', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_trackmap_trackmap__["a" /* TrackmapPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_friends_friends__["a" /* FriendsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_friend_add_friend__["a" /* AddFriendPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(109);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, angfire, loadingCtrl, facebook, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angfire = angfire;
        this.loadingCtrl = loadingCtrl;
        this.facebook = facebook;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginFacebook = function () {
        // if (this.platform.is('cordova')) {
        this.facebook.login(['email']).then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
                // this.userProfile = success;
            })
                .catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
        }).catch(function (error) { console.log(error); });
        //www root code
        // this.angfire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        //     .then((res) => {
        //         console.log(res)
        //         this.navCtrl.push(HomePage);
        //     });
        // }
        // else{
        //     console.log("cordova not supported");
        // }
    };
    LoginPage.prototype.UserSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        // alert.present(prompt);
    };
    LoginPage.prototype.UserSignIn = function () {
        var _this = this;
        this.showLoading();
        this.angfire.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (auth) {
            _this.loading.dismiss().then(function () {
                console.log("" + auth);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
        })
            .catch(function (err) {
            _this.loading.dismiss().then(function () {
                console.log("" + err);
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content fullscreen>\n\n   <div  padding id="cloud-layer">\n\n\n\n   </div>\n\n    <div >\n\n        \n\n           <ion-row>\n\n             <ion-col>\n\n               <ion-list inset>\n\n        \n\n                 <ion-item>\n\n                   <ion-label>Username</ion-label>\n\n                   <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n                 </ion-item>\n\n        \n\n                 <ion-item>\n\n                   <ion-label>Password</ion-label>\n\n                   <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n                 </ion-item>\n\n        \n\n               </ion-list>\n\n             </ion-col>\n\n           </ion-row>\n\n        \n\n           <ion-row>\n\n             <ion-col>\n\n               <button ion-button class="login-button" (click)="UserSignIn()">Sign In</button>\n\n               <button ion-button class="register-btn" block clear (click)="UserSignUp()">Create New Account</button>\n\n               <!-- <button ion-button class="login-button" (click)="loginFacebook()">\n\n                  <ion-icon name="logo-facebook"></ion-icon> - Facebook</button> -->\n\n                <!-- <button ion-button class="login-button" (click)="UserSignUp()">Sign Up</button> -->\n\n               </ion-col>\n\n           </ion-row>\n\n        \n\n         </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ionic2GoIhram\Ionic2Goihram\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map