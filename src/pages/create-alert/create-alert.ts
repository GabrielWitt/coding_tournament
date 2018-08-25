import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AlertsProvider } from '../../providers/alerts';

/**
 * Generated class for the CreateAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-alert',
  templateUrl: 'create-alert.html',
})
export class CreateAlertPage {

  newAlert = {
    alert_type: "",
    description: "",
    gps_location: "",
    alert_date: "",
  }
  Types = [
    'Asalto',
    'Robo', 
    'Pelea', 
    'Borrachera', 
    'Venta de Drogas', 
    'Asesinato Balacera', 
    'Vandalismo',
    'Manifestación Violenta',
    'Abuso policial',
    'Abuso Infantil',
    'Violencia Escolar', 
    'Atropellamiento',
    'Persona Sospechosa',
    'Posible Ladrón',
    'Prostitución',
    'Violencia Domestica', 
    'Posible Terrorismo',
    'Pandillas Molestando',
    'Soborno a Policías',
    'Secuestro Express',
    'Otro'            
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private geolocation: Geolocation,
    public alertsProv:AlertsProvider
  ) {
    this.getPosition();
  }
  
  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadCoords(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadCoords(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    this.newAlert.gps_location = latitude+","+longitude;
  }

}
