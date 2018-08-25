import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts';
import { MapsPage } from '../maps/maps';
import { AlertListPage } from '../alert-list/alert-list';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  Alerts = [];
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
      this.Alerts = [];
      answ.sort(function(a, b) {
        a = new Date(a.alert_date);
        b = new Date(b.alert_date);
        return a>b ? -1 : a<b ? 1 : 0;
      });
      this.Alerts.push(answ[0]);
      this.Alerts.push(answ[1]);
      this.Alerts.push(answ[2]);
      console.log(this.Alerts)
    })
  }

  openList(){
    this.nav.push(AlertListPage);
  }

  openMaps(){
    this.nav.push(MapsPage);
  }
}