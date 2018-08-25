import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertsProvider } from '../providers/alerts';
import { MapsPage } from '../pages/maps/maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage
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
    MapsPage
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