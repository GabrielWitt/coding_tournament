import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts';

/**
 * Generated class for the AlertListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert-list',
  templateUrl: 'alert-list.html',
})
export class AlertListPage {

  Alerts = [];
  alertList = [];
  showAlertList = [];
  loadMore = true;
  Types = [
    'Todos',
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
  filter = "";
  showNumber = 10;

  constructor(
    public nav: NavController,
    public alertsProv:AlertsProvider
  ) {
    this.loadAlerts();
  }

  loadAlerts(){
    this.alertsProv.getAllAlerts().then(answ => {
      //console.log(answ)
      answ.sort(function(a, b) {
        a = new Date(a.alert_date);
        b = new Date(b.alert_date);
        return a>b ? -1 : a<b ? 1 : 0;
      });
      this.Alerts = answ;
      this.alertList = this.Alerts;
      this.showList()
    })
  }

  showList(){
    this.showAlertList = [];
    this.loadMore = this.showNumber < this.alertList.length;
    //console.log(this.loadMore)
    if(this.loadMore){
      for(var i= 0;i<this.showNumber;i++){
        this.showAlertList.push(this.alertList[i])
      }
    }else{
      this.showAlertList = this.alertList;
    }
  }

  AddItems(){
    this.showNumber = this.showNumber + 10;
    this.showList()
  }


  filterList(){
    if(this.filter != "" && this.filter != "Todos"){
      this.alertList = [];
      for(var i=0;i<this.Alerts.length;i++){
      if(this.Alerts[i].alert_type == this.filter) this.alertList.push(this.Alerts[i])
      }
    }else{
      this.alertList = this.Alerts;
    }
    this.showList()
  }

}
