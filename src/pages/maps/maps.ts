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
      console.log(answ)
      this.Alerts = answ;
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
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.markers[0] = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Mi ubicación',
        label: 'Mi ubicación'
      });      
      for(var i=0;i<this.Alerts.length;i++){
        let cords = this.Alerts[i].gps_location.split(",")
        let newcords = new google.maps.LatLng(cords[0], cords[1]); 
        var marker = new google.maps.Marker({
          position: newcords,
          animation: google.maps.Animation.DROP,
          title: this.Alerts[i].alert_type
        });  
        marker.addListener('click', toggleBounce);
        marker.setMap(this.map);
      }
      mapEle.classList.add('show-map');

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    });
  }
}
