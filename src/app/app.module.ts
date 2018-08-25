import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { AlertsProvider } from '../providers/alerts';
import { AlertListPage } from '../pages/alert-list/alert-list';
import { CreateAlertPage } from '../pages/create-alert/create-alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage,
    AlertListPage,
    CreateAlertPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapsPage,
    AlertListPage,
    CreateAlertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertsProvider,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}