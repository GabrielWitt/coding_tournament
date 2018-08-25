import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AlertsProvider } from '../../providers/alerts';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  map: any;
  Alerts = [];
  markers=[];

  constructor(
    public navCtrl: NavController, 
    private geolocation: Geolocation,
    public alertsProv:AlertsProvider
  ) {
  }

  ionViewDidLoad() {
    this.loadAlerts();
  }

  loadAlerts(){
    this.alertsProv.getAllAlerts().then(answ => {
      this.Alerts = answ;
      console.log(this.Alerts)
      this.getPosition();
    })
  }
  
  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  addMarker(gps_location,alert_type,index){
    let cords = gps_location.split(",")
    console.log(cords,alert_type)
    let myLatLng = {lat: cords[0], lng: cords[1]}; 
    this.markers[index+1] = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: alert_type
    });
   
    let content = "<h4>"+alert_type+"</h4>";         
   
    this.addInfoWindow(this.markers[index+1], content);
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.markers[0] = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Mi ubicación'
      });
      mapEle.classList.add('show-map');
      for(var i=0;i<this.Alerts.length;i++){
        this.addMarker(this.Alerts[i].gps_location,this.Alerts[i].alert_type,i)
      }
    });
  }
}
