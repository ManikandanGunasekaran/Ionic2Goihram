import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  map: any;
  markers = [];
  startpoint = new google.maps.LatLng(13.038039, 80.21597);
  endpoint = new google.maps.LatLng(13.138039, 80.31597);
  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
  this.initMap();
  }
  //current location
  private initMap() {
  
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
  private createMapMarker(place:any):void {
  var marker = new google.maps.Marker({
  map: this.map,
  position: place
  });
  this.markers.push(marker);
  }

  //getting directions
  calculateAndDisplayRoute() {
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
