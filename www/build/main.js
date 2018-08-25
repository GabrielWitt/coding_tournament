webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alerts__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, geolocation, alertsProv) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertsProv = alertsProv;
        this.Alerts = [];
        this.markers = [];
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        this.loadAlerts();
    };
    MapsPage.prototype.loadAlerts = function () {
        var _this = this;
        this.alertsProv.getAllAlerts().then(function (answ) {
            console.log(answ);
            _this.Alerts = answ;
            _this.getPosition();
        });
    };
    MapsPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (response) {
            _this.loadMap(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MapsPage.prototype.loadMap = function (position) {
        var _this = this;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        // create LatLng object
        var myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 14
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            _this.markers[0] = new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                title: 'Mi ubicación',
                label: 'Mi ubicación'
            });
            for (var i = 0; i < _this.Alerts.length; i++) {
                var cords = _this.Alerts[i].gps_location.split(",");
                var newcords = new google.maps.LatLng(cords[0], cords[1]);
                var marker = new google.maps.Marker({
                    position: newcords,
                    animation: google.maps.Animation.DROP,
                    title: _this.Alerts[i].alert_type
                });
                marker.addListener('click', toggleBounce);
                marker.setMap(_this.map);
            }
            mapEle.classList.add('show-map');
            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                }
                else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        });
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Workspace\coding_tournament1\src\pages\maps\maps.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\coding_tournament1\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alerts__["a" /* AlertsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alerts__["a" /* AlertsProvider */]) === "function" && _c || Object])
    ], MapsPage);
    return MapsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert-list/alert-list.module": [
		276,
		5
	],
	"../pages/create-alert/create-alert.module": [
		274,
		0
	],
	"../pages/maps/maps.module": [
		273,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alerts__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maps_maps__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_list_alert_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_alert_create_alert__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(nav, alertsProv) {
        this.nav = nav;
        this.alertsProv = alertsProv;
        this.Alerts = [];
        this.filter = "";
        this.showNumber = 10;
        this.loadAlerts();
    }
    HomePage.prototype.loadAlerts = function () {
        var _this = this;
        this.alertsProv.getAllAlerts().then(function (answ) {
            _this.Alerts = [];
            answ.sort(function (a, b) {
                a = new Date(a.alert_date);
                b = new Date(b.alert_date);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            _this.Alerts.push(answ[0]);
            _this.Alerts.push(answ[1]);
            _this.Alerts.push(answ[2]);
            console.log(_this.Alerts);
        });
    };
    HomePage.prototype.openList = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__alert_list_alert_list__["a" /* AlertListPage */]);
    };
    HomePage.prototype.openMaps = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__maps_maps__["a" /* MapsPage */]);
    };
    HomePage.prototype.createAlert = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__create_alert_create_alert__["a" /* CreateAlertPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Workspace\coding_tournament1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        Deliktum\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n              <ion-list (click)="openList()"> \n                  <ion-list-header>\n                    Últimos Incidentes\n                  </ion-list-header>\n                  <ion-item *ngFor="let alert of Alerts index as i" style="background-color: #eeeeee;">\n                    <h2>{{alert.alert_type}}</h2>\n                    <p>{{ alert.alert_date | date:\'short\' }}</p>\n                  </ion-item>\n              </ion-list> \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>   \n              <button style="font-size: 3rem;" ion-button full (click)="openList()"><ion-icon style="margin-right: 5px;" name="list-box"></ion-icon> Lista</button>\n            </ion-col>\n          <ion-col col-6>            \n            <button style="font-size: 3rem;" ion-button full (click)="openMaps()"><ion-icon style="margin-right: 5px;" name="map"></ion-icon> Mapa</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6>   \n              <button style="font-size: 2.5rem; height: 9rem;" ion-button full (click)="createAlert()"><ion-icon style="margin-right: 5px;" name="create"></ion-icon> Reportar</button>\n            </ion-col>\n          <ion-col col-6>            \n            <button disabled style="font-size: 2rem; height: 9rem;" ion-button full><ion-icon style="margin-right: 5px;" name="podium"></ion-icon> Estadisticas</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Workspace\coding_tournament1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_alerts__["a" /* AlertsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_alerts__["a" /* AlertsProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_alerts__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alert_list_alert_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_alert_create_alert__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alert_list_alert_list__["a" /* AlertListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_alert_create_alert__["a" /* CreateAlertPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-alert/create-alert.module#CreateAlertPageModule', name: 'CreateAlertPage', segment: 'create-alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alert-list/alert-list.module#AlertListPageModule', name: 'AlertListPage', segment: 'alert-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alert_list_alert_list__["a" /* AlertListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_alert_create_alert__["a" /* CreateAlertPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_alerts__["a" /* AlertsProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Workspace\coding_tournament1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Workspace\coding_tournament1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alerts__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAlertPage = /** @class */ (function () {
    function CreateAlertPage(navCtrl, navParams, geolocation, alertsProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.alertsProv = alertsProv;
        this.newAlert = {
            alert_type: "",
            description: "",
            gps_location: "",
            alert_date: "",
        };
        this.Types = [
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
        this.getPosition();
    }
    CreateAlertPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (response) {
            _this.loadCoords(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CreateAlertPage.prototype.loadCoords = function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        this.newAlert.gps_location = latitude + "," + longitude;
    };
    CreateAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-alert',template:/*ion-inline-start:"C:\Workspace\coding_tournament1\src\pages\create-alert\create-alert.html"*/'<!--\n  Generated template for the CreateAlertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Formulario de Alerta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label>Filtro por tipo</ion-label>\n          <ion-select [(ngModel)]="newAlert.alert_type">\n            <ion-option *ngFor="let type of Types index as i" [value]="type">{{type}} </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item style="margin-bottom: 10px; border-radius: 15px;">\n          <ion-input type="text" clearInput placeholder="Descripción" [(ngModel)]="newAlert.description" name="description"></ion-input>\n        </ion-item>     \n          <ion-grid>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-item>     \n                  <ion-label>día</ion-label>\n                  <ion-select [(ngModel)]="day">\n                    <ion-option>1</ion-option>\n                    <ion-option>2</ion-option>\n                    <ion-option>3</ion-option>\n                    <ion-option>4</ion-option>\n                    <ion-option>5</ion-option>\n                    <ion-option>6</ion-option>\n                    <ion-option>7</ion-option>\n                    <ion-option>8</ion-option>\n                    <ion-option>9</ion-option>\n                    <ion-option>10</ion-option>\n                    <ion-option>11</ion-option>\n                    <ion-option>12</ion-option>\n                    <ion-option>13</ion-option>\n                    <ion-option>14</ion-option>\n                    <ion-option>15</ion-option>\n                    <ion-option>16</ion-option>\n                    <ion-option>17</ion-option>\n                    <ion-option>18</ion-option>\n                    <ion-option>19</ion-option>\n                    <ion-option>20</ion-option>\n                    <ion-option>21</ion-option>\n                    <ion-option>22</ion-option>\n                    <ion-option>23</ion-option>\n                    <ion-option>24</ion-option>\n                    <ion-option>25</ion-option>\n                    <ion-option>26</ion-option>\n                    <ion-option>27</ion-option>\n                    <ion-option>28</ion-option>\n                    <ion-option>29</ion-option>\n                    <ion-option>30</ion-option>\n                    <ion-option>31</ion-option>\n                  </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-4>\n                  <ion-item>     \n                  <ion-label>Mes</ion-label>\n                  <ion-select [(ngModel)]="month">\n                    <ion-option>Enero</ion-option>\n                    <ion-option>Febrero</ion-option>\n                    <ion-option>Marzo</ion-option>\n                    <ion-option>Abril</ion-option>\n                    <ion-option>Mayo</ion-option>\n                    <ion-option>Junio</ion-option>\n                    <ion-option>Julio</ion-option>\n                    <ion-option>Agosto</ion-option>\n                    <ion-option>Septiembre</ion-option>\n                    <ion-option>Octubre</ion-option>\n                    <ion-option>Noviembre</ion-option>\n                    <ion-option>Diciembre</ion-option>\n                  </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-4>\n                  <ion-item>     \n                  <ion-label>Año</ion-label>\n                  <ion-select [(ngModel)]="year">\n                      <ion-option>2018</ion-option>\n                      <ion-option>2017</ion-option>\n                      <ion-option>2016</ion-option>\n                      <ion-option>2015</ion-option>\n                      <ion-option>2014</ion-option>\n                      <ion-option>2013</ion-option>\n                  </ion-select>\n                  </ion-item>\n                </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-list>\n      <button disabled style="font-size: 2rem; height: 9rem;" ion-button full><ion-icon style="margin-right: 5px;" name="send"></ion-icon> Enviar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\coding_tournament1\src\pages\create-alert\create-alert.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alerts__["a" /* AlertsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alerts__["a" /* AlertsProvider */]) === "function" && _d || Object])
    ], CreateAlertPage);
    return CreateAlertPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=create-alert.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alerts__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AlertListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertListPage = /** @class */ (function () {
    function AlertListPage(nav, alertsProv) {
        this.nav = nav;
        this.alertsProv = alertsProv;
        this.Alerts = [];
        this.alertList = [];
        this.showAlertList = [];
        this.loadMore = true;
        this.Types = [
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
        this.filter = "";
        this.showNumber = 10;
        this.loadAlerts();
    }
    AlertListPage.prototype.loadAlerts = function () {
        var _this = this;
        this.alertsProv.getAllAlerts().then(function (answ) {
            //console.log(answ)
            answ.sort(function (a, b) {
                a = new Date(a.alert_date);
                b = new Date(b.alert_date);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            _this.Alerts = answ;
            _this.alertList = _this.Alerts;
            _this.showList();
        });
    };
    AlertListPage.prototype.showList = function () {
        this.showAlertList = [];
        this.loadMore = this.showNumber < this.alertList.length;
        //console.log(this.loadMore)
        if (this.loadMore) {
            for (var i = 0; i < this.showNumber; i++) {
                this.showAlertList.push(this.alertList[i]);
            }
        }
        else {
            this.showAlertList = this.alertList;
        }
    };
    AlertListPage.prototype.AddItems = function () {
        this.showNumber = this.showNumber + 10;
        this.showList();
    };
    AlertListPage.prototype.filterList = function () {
        if (this.filter != "" && this.filter != "Todos") {
            this.alertList = [];
            for (var i = 0; i < this.Alerts.length; i++) {
                if (this.Alerts[i].alert_type == this.filter)
                    this.alertList.push(this.Alerts[i]);
            }
        }
        else {
            this.alertList = this.Alerts;
        }
        this.showList();
    };
    AlertListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert-list',template:/*ion-inline-start:"C:\Workspace\coding_tournament1\src\pages\alert-list\alert-list.html"*/'<!--\n  Generated template for the AlertListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro de Incidentes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-item>\n      <ion-label>Filtro por tipo</ion-label>\n      <ion-select [(ngModel)]="filter">\n        <ion-option *ngFor="let type of Types index as i" [value]="type">{{type}} </ion-option>\n      </ion-select>\n      <div item-end>\n          <button ion-button icon-only outline (click)="filterList()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n      </div>\n    </ion-item>\n  <ion-list> \n      <ion-item *ngFor="let alert of showAlertList index as i" style="background-color: #eeeeee;">\n        <ion-avatar item-start>\n            {{i+1}} <!--img src="assets/img/avatar-ts-woody.png"-->\n        </ion-avatar>\n        <h2>{{alert.alert_type}}</h2>\n        <h3>{{alert.gps_location}}</h3>\n        <p>{{ alert.alert_date | date:\'short\' }}</p>\n      </ion-item>\n      <ion-item *ngIf="loadMore" (click)="AddItems()" style="background-color: #eeeeee;">\n          <h2>Mostrar 10 items más</h2>\n      </ion-item>\n  </ion-list> \n</ion-content>'/*ion-inline-end:"C:\Workspace\coding_tournament1\src\pages\alert-list\alert-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_alerts__["a" /* AlertsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_alerts__["a" /* AlertsProvider */]) === "function" && _b || Object])
    ], AlertListPage);
    return AlertListPage;
    var _a, _b;
}());

//# sourceMappingURL=alert-list.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsProvider = /** @class */ (function () {
    function AlertsProvider(http) {
        this.http = http;
    }
    AlertsProvider.prototype.getAllAlerts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get('http://localhost:8080/api/alerts', { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AlertsProvider.prototype.PostAlert = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/newalert', data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    AlertsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AlertsProvider);
    return AlertsProvider;
    var _a;
}());

//# sourceMappingURL=alerts.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map