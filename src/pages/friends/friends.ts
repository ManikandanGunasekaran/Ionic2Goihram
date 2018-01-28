import { Component } from '@angular/core';
import { NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';


@Component({
    selector: 'page-friends',
    templateUrl: 'friends.html',
})
export class FriendsPage {

    filteredusers: any;
    userId: number;
    FriendsTab: any;
    addFriendForm: any;
    approvedFriends = [];
    pendingFriends = [];
    loading: Loading;
    userDetails: any;
    constructor(public navParams: NavParams, private loadingCtrl: LoadingController,
        private http: Http,
        private alertCtrl: AlertController,
        private locationTracker: LocationTrackerProvider,
        private formBuilder: FormBuilder) {

        this.FriendsTab = 'FRIENDS';
        this.userId = navParams.get('userId');
        this.addFriendForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'mobilenumber': ['', [Validators.required]]
        });
        // this.GetAllFriends();
        this.locationTracker.getUserDetail().then((data) => {
            this.userDetails = data;
            this.updateFriendList(this.userDetails.friendsStatus);
        });

    }

    SendFriendRequest() {
        this.showLoader();
        let friendMobilenumber = this.addFriendForm.controls.mobilenumber.value;
        // let sendReqUrl ='/send-friend-request';
        let sendReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/send-friend-request';
        this.http.post(sendReqUrl + '/' + this.userId + '/' + friendMobilenumber, null).map(res => res.json())
            .subscribe(data => {
                this.showError('Request Sent successfully', 'Success');
                this.loading.dismiss();
            }, error => {
                let errorData = error.json();
                if (errorData.errorInformation.developerMessage) {
                    this.showError(errorData.errorInformation.developerMessage, 'Error');
                }
                this.loading.dismiss();
            });
        this.addFriendForm.controls.name.setValue('');
        this.addFriendForm.controls.mobilenumber.setValue('');
    }
    GetAllFriends() {

        this.showLoader();
        let sendReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/find-friends';
        // let sendReqUrl ='/find-friends';
        this.http.get(sendReqUrl + '/' + this.userId).map(res => res.json()).subscribe(data => {
            let FriendList = data.data;
            this.approvedFriends = [];
            this.pendingFriends = [];

            let ReadAllUrl = 'https://tracker-rest-service.herokuapp.com/user-details/read-all-friends';
            // let ReadAllUrl ='/read-all-friends';
            this.http.get(ReadAllUrl + '/' + this.userId).map(res => res.json()).subscribe(resdata => {
                let FriendNameList = resdata.data;
                this.loading.dismiss();
                for (let friends of FriendList) {
                    let displayName = friends.id;
                    for (let friendsName of FriendNameList) {
                        if (friendsName.id === friends.friendId) {
                            displayName = friendsName.firstName;
                        }
                    }
                    if (friends.status === 'CONFIRMED') {
                        this.approvedFriends.push({
                            photoURL: "",
                            displayName: displayName,
                            friendId: friends.friendId,
                            status: friends.status
                        });
                    } else {
                        this.pendingFriends.push({
                            photoURL: "",
                            displayName: displayName,
                            friendId: friends.friendId,
                            status: friends.status
                        });
                    }
                }
            });

        });
    }

    ApproveRequest(friendId) {
        this.showLoader();
        // let acceptReqUrl = '/accept';
        let acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/accept';
        this.http.post(acceptReqUrl + '/' + this.userId + '/' + friendId, null).map(res => res.json()).subscribe(data => {
            this.loading.dismiss();
            // this.GetAllFriends();
            //  this.removeItem(friendId);
            this.filteredusers = this.pendingFriends;
            this.removeItem(friendId, 'Approve');

        });
    }

    DeleteRequest(friendId) {
        this.showLoader();
        // let acceptReqUrl = '/find-friend';
        let acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/find-friend';
        this.http.delete(acceptReqUrl + '/' + this.userId + '/' + friendId, null).map(res => res.json()).subscribe(data => {
            // this.GetAllFriends();
            this.filteredusers = this.approvedFriends;
            this.removeItem(friendId, '');
            this.loading.dismiss();
        });
    }

    GetFreindName() {
        let sendReqUrl = '/read-all-friends';
        this.http.get(sendReqUrl + '/' + this.userId).map(res => res.json()).subscribe(data => {
            return data.data;
        });
    }

    updateFriendList(FrindsSts) {
        for (let friends of FrindsSts) {
            let displayName = friends.id;
            const FriendNameList = this.userDetails.friends;
            for (let friendsName of FriendNameList) {
                if (friendsName.id === friends.friendId) {
                    displayName = friendsName.firstName;
                }
            }
            if (friends.status === 'CONFIRMED') {
                this.approvedFriends.push({
                    photoURL: "",
                    displayName: displayName,
                    friendId: friends.friendId,
                    status: friends.status
                });
            } else {
                this.pendingFriends.push({
                    photoURL: "",
                    displayName: displayName,
                    friendId: friends.friendId,
                    status: friends.status
                });
            }
        }
    }

    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true,
            spinner: 'dots'
        });
        this.loading.present();
    }
    showError(errormsg, title) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: errormsg,
            buttons: ['Ok']
        });
        alert.present();
    }

    public removeItem(item, status) {
        for (let i = 0; i < this.filteredusers.length; i++) {
            if (this.filteredusers[i].friendId == item) {
                if (status === 'Approve') {
                    this.approvedFriends.push(this.filteredusers[i]);
                }
                this.filteredusers.splice(i, 1);
            }
        }
    }
}