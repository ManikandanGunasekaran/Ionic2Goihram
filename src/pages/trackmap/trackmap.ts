import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google:any;
@IonicPage()
@Component({
  selector: 'page-trackmap',
  templateUrl: 'trackmap.html',
})
export class TrackmapPage implements OnInit {
  map: any;
  markers = [];
  startpoint = new google.maps.LatLng(13.038039, 80.21597);
  endpoint = new google.maps.LatLng(13.138039, 80.31597);
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackmapPage');
  }

  ngOnInit() {
    this.initMap();
    }
    //current location
    public initMap() {
    
    let divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
    center: this.startpoint,
    zoom: 15,
    disableDefaultUI: true,
    draggable: false,
    zoomControl: true
    });
    
    this.createMapMarker(this.startpoint);
    }
    
    //marker for current location
    public createMapMarker(place:any):void {
    var marker = new google.maps.Marker({
      map: this.map,
      position: place,
      animation: google.maps.Animation.DROP
    });
    let content ="<h3>Mani</h3><h5>Chennai</h5>";
    this.addInfoWindow(marker, content);
    this.markers.push(marker);
    }
    
    addInfoWindow(marker, content){
      let infoWindow = new google.maps.InfoWindow({
        content:content
      });
      google.maps.event.addListener(marker, 'click',() => {
        infoWindow.open(this.map,marker);
      });
    }

    //getting directions
    public calculateAndDisplayRoute() {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      
      directionsDisplay.setMap(this.map);
  
      directionsService.route({
        origin: this.startpoint,
        destination: this.endpoint,
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {
  
        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }
  
    });
    }

}
