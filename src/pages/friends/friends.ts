import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  
  filteredusers: any;
  userId: number;
  FriendsTab: any;
  addFriendForm: any;
  approvedFriends= [];
  pendingFriends= [];
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
      public http: Http,public formBuilder: FormBuilder) {

    this.FriendsTab = 'FRIENDS';
    this.userId = navParams.get('userId'); 
    this.addFriendForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'mobilenumber': ['', [Validators.required]]
    });
    this.GetAllFriends();
  
  }

  SendFriendRequest(){
    console.log("send friend Request");
    this.showLoader();
    let friendMobilenumber = this.addFriendForm.controls.mobilenumber.value;
    let sendReqUrl ='/send-friend-request';
    // let sendReqUrl ='https://tracker-rest-service.herokuapp.com/friends/send-friend-request';
    this.http.post(sendReqUrl+'/'+ this.userId + '/' + friendMobilenumber, null).map(res => res.json()).subscribe(data => {
     console.log( data);
     this.loading.dismiss();
    });
  }
  GetAllFriends(){
   
    this.showLoader();
    // let sendReqUrl ='https://tracker-rest-service.herokuapp.com/friends/find-friends';
    let sendReqUrl ='/find-friends';
    this.http.get(sendReqUrl+'/'+ this.userId).map(res => res.json()).subscribe(data => {
        let FriendList = data.data;
        this.approvedFriends = [];
        this.pendingFriends = [];
        for(let friends of FriendList) {
          if(friends.status === 'CONFIRMED'){
            this.approvedFriends.push({photoURL:"",displayName:friends.id,friendId:friends.friendId,status:friends.status});
          }
          else{
            this.pendingFriends.push({photoURL:"",displayName:friends.id,friendId:friends.friendId,status:friends.status});
          }
        }
        this.loading.dismiss();
     console.log( data);
    });
    console.log('getReq');
  }
  ApproveRequest(friendId){
    this.showLoader();
    let acceptReqUrl = '/accept';
    // let acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/accept';
    this.http.post(acceptReqUrl+'/'+ this.userId + '/' + friendId, null).map(res => res.json()).subscribe(data => {
     console.log( data);
     this.loading.dismiss();
     this.GetAllFriends();
    //  this.removeItem(friendId);
    
    });
  }

  DeleteRequest(friendId){
    this.showLoader();
    let acceptReqUrl = '/accept';
    // let acceptReqUrl = 'https://tracker-rest-service.herokuapp.com/friends/accept';
    this.http.delete(acceptReqUrl+'/'+ this.userId + '/' + friendId,null).map(res => res.json()).subscribe(data => {
     console.log( data);
     
     this.GetAllFriends();
    //  this.removeItem(friendId);
     this.loading.dismiss();
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  public removeItem(item){
  
      for(let i = 0; i < this.filteredusers.length; i++) {
  
        if(this.filteredusers[i].friendId == item){
          this.filteredusers.splice(i, 1);
        }
  
      }
  
    }

}
