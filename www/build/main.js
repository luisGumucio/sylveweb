webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_info_unit__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animal_create__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnimalHome = (function () {
    function AnimalHome(navCtrl, animalProvider, navParams, loading) {
        this.navCtrl = navCtrl;
        this.animalProvider = animalProvider;
        this.navParams = navParams;
        this.loading = loading;
    }
    AnimalHome.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Cargando espere por favor...',
        });
        loader.present().then(function () {
            _this.animalProvider.getAnimal().then(function (data) {
                _this.animalList = data;
                _this.animalListOriginal = data;
                loader.dismiss();
            }).catch(function (error) {
                loader.dismiss();
                alert("Failed to load!");
            });
        });
    };
    AnimalHome.prototype.initializeItems = function () {
        this.animalList = this.animalListOriginal;
    };
    AnimalHome.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.animalList = this.animalList.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AnimalHome.prototype.informationAnimal = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__animal_info_unit__["a" /* AnimalInfoUnit */], { animal: data });
    };
    AnimalHome.prototype.goToCreateAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__animal_create__["a" /* AnimalCreate */]);
    };
    return AnimalHome;
}());
AnimalHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-home',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-home.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="false">\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list no-lines>\n\n        <ion-item-sliding *ngFor="let animal of animalList">\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                    <img src="/assets/IconoAnimal.png">\n\n                </ion-avatar>\n\n                <h2>Nombre: {{animal.nombre}}</h2>\n\n                <p>Peso: {{animal.peso}}</p>\n\n                <p>Codigo: {{animal.codigo}}</p>\n\n            </ion-item>\n\n            <ion-item-options>\n\n                <button ion-button icon-only color="primary" (click)="informationAnimal(animal)">\n\n                    <ion-icon name="md-information-circle"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only color="light">\n\n                    <ion-icon name="create"></ion-icon>\n\n                </button>\n\n                <button ion-button icon-only color="primary">\n\n                    <ion-icon name="md-trash"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__["a" /* AnimalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__["a" /* AnimalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
], AnimalHome);

var _a, _b, _c, _d;
//# sourceMappingURL=animal-home.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_animal_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goPageAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__animal_animal_home__["a" /* AnimalHome */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="gras">\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content scroll="false">\n\n    <section class="home-container">\n\n      <div class="row icon-row">\n\n        <div class="col text-center">\n\n            <img src="assets/IconoAnimal.png" style="max-width: 70%;" (click)="goPageAnimal()">\n\n            <br style="font-weight: bold;">Animal\n\n        </div>\n\n        <div class="col text-center">\n\n          <img src="assets/alimentacion.png" style="max-width: 70%;">\n\n          <br>Alimentacion\n\n        </div>       \n\n        <div class="col text-center">\n\n          <img src="assets/vacuna.png" style="max-width: 70%;">\n\n          <br>Vacuna\n\n        </div>     \n\n      </div>\n\n      <div class="row icon-row">\n\n        <div class="col text-center">\n\n          <img src="assets/clock.jpg" style="max-width: 70%;">\n\n          <br>Tratamiento\n\n        </div>\n\n        <div class="col text-center">\n\n          <img src="/assets/user.png"  style="max-width: 70%;">\n\n          <br>Usuario\n\n        </div>      \n\n        <div class="col text-center">\n\n          <img src="assets/report.png" style="max-width: 70%;">\n\n          <br>Reportes\n\n        </div>   \n\n      </div>\n\n    </section>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalInfoUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacunas_vacuna_animal_info__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnimalInfoUnit = (function () {
    function AnimalInfoUnit(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animal = this.navParams.get('animal');
        this.fabButtonOpened = false;
    }
    AnimalInfoUnit.prototype.Close = function (event, fab) {
        fab.close();
    };
    AnimalInfoUnit.prototype.openFabButton = function () {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        }
        else {
            this.fabButtonOpened = false;
        }
    };
    AnimalInfoUnit.prototype.share = function (socialNet, fab) {
        switch (socialNet) {
            case "vacuna":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */], { animal: this.animal });
                break;
            case "alimentacion":
                //this.navCtrl.push(AlimentacionInfoPage, { animal: this.animal });
                break;
            case "tratamiento":
                break;
        }
    };
    return AnimalInfoUnit;
}());
AnimalInfoUnit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-info-unit',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-info-unit.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Informacion Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Codigo</p>\n\n        <p style="float:right">{{animal.codigo}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Nombre</p>\n\n        <p style="float:right">{{animal.nombre}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Edad</p>\n\n        <p style="float:right">{{animal.edad}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Raza</p>\n\n        <p style="float:right">{{animal.raza}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Peso</p>\n\n        <p style="float:right">{{animal.peso}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Nacimiento</p>\n\n        <p style="float:right">{{animal.nacimiento}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p style="float:left; font-weight: bold">Genero</p>\n\n        <p style="float:right">{{animal.genero}}</p>\n\n    </ion-item>\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab (click)="openFabButton()">\n\n                    Historial\n\n             </button>\n\n        <ion-fab-list side="top">\n\n            <button ion-fab  (click)="share(\'vacuna\', fab)">\n\n                  <img src="assets/alimentacion.png"> \n\n              </button>\n\n              <ion-label class="las1">Vacuna</ion-label>\n\n            <button ion-fab color="secondary"  (click)="share(\'alimentacion\', fab)">\n\n                    <ion-icon name="md-finger-print"></ion-icon>\n\n                    \n\n                  </button>\n\n                  <ion-label class="las2">Alimentacion</ion-label>\n\n            <button ion-fab color="secondary" (click)="share(\'tratamiento\', fab)">\n\n                    <ion-icon name="md-finger-print"></ion-icon>\n\n                  </button>\n\n                  <ion-label class="las">Tratamiento</ion-label>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-info-unit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AnimalInfoUnit);

//# sourceMappingURL=animal-info-unit.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacunaAnimalInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vacuna_animal_register__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VacunaAnimalInfo = (function () {
    function VacunaAnimalInfo(navCtrl, navParams, vacunaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vacunaProvider = vacunaProvider;
        this.animal = this.navParams.get('animal');
    }
    VacunaAnimalInfo.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.vacunaProvider.getVacunaByAnimal(this.animal.codigo).then(function (data) {
            _this.animalVacunas = data;
        });
    };
    VacunaAnimalInfo.prototype.goToRegisterAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__vacuna_animal_register__["a" /* VacunaAnimal */], { animal: this.animal });
    };
    return VacunaAnimalInfo;
}());
VacunaAnimalInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vacuna-animal-info',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\vacunas\vacuna-animal-info.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Informacion Vacuna</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content scroll="false">\n\n    <ion-row>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>Codigo</strong>\n\n        </ion-col>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>alimentacion</strong>\n\n        </ion-col>\n\n        <ion-col style="background: blue; color: white">\n\n            <strong>Dosis</strong>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let vacunas of animalVacunas">\n\n        <ion-col>\n\n            <strong>{{vacunas.codigo}}</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n            <strong>{{vacunas.nombre}}</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n            <strong>{{vacunas.dosis}}</strong>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="reds" (click)="goToRegisterAnimal()">\n\n            <ion-icon name="md-add-circle"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\vacunas\vacuna-animal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_animal_provider__["a" /* AnimalProvider */]])
], VacunaAnimalInfo);

//# sourceMappingURL=vacuna-animal-info.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacunaAnimal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_animal_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AnimalPage } from '../animal/animal';

var VacunaAnimal = (function () {
    function VacunaAnimal(navCtrl, todoService, alertCtrl, formBuilder, localNotifications, navParams) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.localNotifications = localNotifications;
        this.navParams = navParams;
        this.todo = {};
        this.animal = this.navParams.get('animal');
        if (this.animal != null) {
            this.formVacuna = formBuilder.group({
                'codigoAnimal': [this.animal.codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'codigoVacuna': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'cantidad': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'via': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'observaciones': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
        }
        else {
            this.formVacuna = formBuilder.group({
                'codigoAnimal': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'codigoVacuna': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'cantidad': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'via': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'observaciones': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
        }
    }
    VacunaAnimal.prototype.createVacuna = function (vacunaModel) {
        var _this = this;
        vacunaModel.value.keyAlimentacion = "vacuna";
        var vacuna;
        this.todoService.getVacunaByRegisters(vacunaModel.value.codigoVacuna).then(function (data) {
            vacuna = data[0];
            if (vacuna.cantidad >= 1) {
                _this.localNotifications.schedule({
                    id: 1,
                    title: 'Local ILocalNotification Example',
                    text: 'Multi ILocalNotification 2',
                });
            }
            vacuna.cantidad = vacuna.cantidad - vacunaModel.value.cantidad;
            //this.todoService.createTodo(vacunaModel.value);
            _this.todoService.updateTodo(vacuna);
            //this.navCtrl.push(AnimalPage)
        });
    };
    return VacunaAnimal;
}());
VacunaAnimal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vacuna-animal-register',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\vacunas\vacuna-animal-register.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Registro Vacuna</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content scroll="false">\n\n\n\n    <form [formGroup]="formVacuna" (ngSubmit)="createVacuna(formVacuna)" novalidate>\n\n        <ion-item>\n\n            <ion-label>Codigo Animal</ion-label>\n\n            <ion-input type="text" formControlName="codigoAnimal" name="codigo" aria-placeholder="codigo"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Codigo vacuna</ion-label>\n\n            <ion-input type="text" formControlName="codigoVacuna" name="codigo" aria-placeholder="codigo"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>cantidad</ion-label>\n\n            <ion-input type="text" formControlName="cantidad" name="codigo"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n                <ion-label>Via</ion-label>\n\n                <ion-input type="text" formControlName="via" name="codigo"></ion-input>\n\n            </ion-item>\n\n        <ion-item>\n\n            <ion-label>Observaciones</ion-label>\n\n            <ion-input type="text" formControlName="observaciones" name="codigo"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button block [disabled]="!formVacuna.valid">\n\n        Registrar Vacuna</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\vacunas\vacuna-animal-register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_animal_provider__["a" /* AnimalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], VacunaAnimal);

//# sourceMappingURL=vacuna-animal-register.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_animal_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animal_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnimalCreate = (function () {
    function AnimalCreate(navCtrl, navParams, animalProvider, formBuilder, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.image = null;
        this.udpateValidator = false;
        this.animal = this.navParams.get('animal');
        if (this.animal != null) {
            this.formAnimal = formBuilder.group({
                'codigo': [this.animal.codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'nombre': [this.animal.nombre, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'peso': [this.animal.peso, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'raza': [this.animal.raza, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'description': [this.animal.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'nacimiento': [this.animal.nacimiento, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'genero': [this.animal.genero, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
        }
        else {
            this.formAnimal = formBuilder.group({
                'codigo': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'nombre': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'peso': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'raza': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'description': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'nacimiento': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'genero': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
        }
        this.udpateValidator = this.navParams.get('update');
    }
    AnimalCreate.prototype.createAnimal = function (animalModel) {
        var _this = this;
        if (this.udpateValidator) {
            console.log("udpate animal", animalModel.value);
            animalModel.value._id = this.animal._id;
            animalModel.value._rev = this.animal._rev;
            animalModel.value.indexKey = this.animal.indexKey;
            this.animalProvider.updateTodo(animalModel.value);
        }
        else {
            var loader_1 = this.loading.create({
                content: 'Validando espere por favor!..',
            });
            loader_1.present().then(function () {
                _this.animalProvider.findAnimalByID(animalModel.value.codigo).then(function (data) {
                    var res = Object.keys(data)
                        .map(function (k) {
                        // generate the array element 
                        return [+k, data[k]];
                    });
                    if (res.length != 0) {
                        alert("El codigo del animal ya existe intente con otro codigo por favor!");
                        loader_1.dismiss();
                    }
                    else {
                        console.log('create a new animal', animalModel.value);
                        animalModel.value.indexKey = "animal";
                        var mydate = new Date(animalModel.value.nacimiento);
                        animalModel.value.edad = _this.calculate_age(mydate.getMonth(), mydate.getDay(), mydate.getFullYear());
                        _this.animalProvider.createAnimal(animalModel.value);
                        _this.formAnimal.reset();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__animal_home__["a" /* AnimalHome */]);
                        loader_1.dismiss();
                    }
                });
            });
        }
    };
    AnimalCreate.prototype.calculate_age = function (birth_month, birth_day, birth_year) {
        var today_date = new Date();
        var today_year = today_date.getFullYear();
        var today_month = today_date.getMonth();
        var today_day = today_date.getDate();
        var age = today_year - birth_year;
        if (today_month < (birth_month - 1)) {
            age--;
        }
        if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
            age--;
        }
        return age;
    };
    return AnimalCreate;
}());
AnimalCreate = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal-create',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-create.html"*/'<ion-header>\n\n    <ion-navbar color="gras">\n\n        <ion-title>Crear Animal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="false" style="text-align: center;">\n\n    <form [formGroup]="formAnimal" (ngSubmit)="createAnimal(formAnimal)" novalidate>\n\n        <ion-item>\n\n            <ion-label color="primary">Codigo</ion-label>\n\n            <ion-input type="text" formControlName="codigo" name="codigo"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label color="primary">Nombre</ion-label>\n\n            <ion-input type="text" formControlName="nombre" name="codigo"></ion-input>\n\n        </ion-item>\n\n        <div style="width:100%; text-align: left; background-color: #519548; font-size: 1.7rem; font-weight: 600; padding-left: 4%;">\n\n            <label>Origen</label>\n\n        </div>\n\n        <ion-item>\n\n            <ion-label color="primary">Nacimiento</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" formControlName="nacimiento"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Peso</ion-label>\n\n            <ion-input type="number" formControlName="peso" name="23"></ion-input>\n\n        </ion-item>\n\n        <div style="width:100%; text-align: left; background-color: #519548; font-size: 1.7rem; font-weight: 600; padding-left: 4%;">\n\n            <label>Genero</label>\n\n        </div>\n\n        <ion-item>\n\n            <ion-label color="primary">Genero</ion-label>\n\n            <ion-select formControlName="genero">\n\n                <ion-option value="Macho">Macho</ion-option>\n\n                <ion-option value="Hembra">Hembra</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Raza</ion-label>\n\n            <ion-select formControlName="raza">\n\n                <ion-option value="brangus">brangus</ion-option>\n\n                <ion-option value="holstein">holstein</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label color="primary">Description</ion-label>\n\n            <ion-textarea formControlName="description" name="description"></ion-textarea>\n\n        </ion-item>\n\n        <button ion-button color="gras" block [disabled]="!formAnimal.valid">\n\n            crear</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\animal\animal-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_animal_provider__["a" /* AnimalProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], AnimalCreate);

//# sourceMappingURL=animal-create.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_animal_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_create__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_animal_animal_info_unit__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tratamiento_tratamiento_animal_info__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_vacunas_vacuna_animal_info__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_vacunas_vacuna_animal_register__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//database

//import { VacunaProvider } from '../providers/vacuna-provider';
//pages






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_home__["a" /* AnimalHome */],
            __WEBPACK_IMPORTED_MODULE_16__pages_animal_animal_info_unit__["a" /* AnimalInfoUnit */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tratamiento_tratamiento_animal_info__["a" /* TratamientoAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_18__pages_vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_create__["a" /* AnimalCreate */],
            __WEBPACK_IMPORTED_MODULE_19__pages_vacunas_vacuna_animal_register__["a" /* VacunaAnimal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_animal_animal_home__["a" /* AnimalHome */],
            __WEBPACK_IMPORTED_MODULE_16__pages_animal_animal_info_unit__["a" /* AnimalInfoUnit */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tratamiento_tratamiento_animal_info__["a" /* TratamientoAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_18__pages_vacunas_vacuna_animal_info__["a" /* VacunaAnimalInfo */],
            __WEBPACK_IMPORTED_MODULE_15__pages_animal_animal_create__["a" /* AnimalCreate */],
            __WEBPACK_IMPORTED_MODULE_19__pages_vacunas_vacuna_animal_register__["a" /* VacunaAnimal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_nfc__["b" /* Ndef */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__["a" /* LocalNotifications */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_13__providers_animal_provider__["a" /* AnimalProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamientoAnimalInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TratamientoAnimalInfo = (function () {
    function TratamientoAnimalInfo(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return TratamientoAnimalInfo;
}());
TratamientoAnimalInfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tratamiento-animal-info',template:/*ion-inline-start:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\tratamiento\tratamiento-animal-info.html"*/''/*ion-inline-end:"C:\Users\unknow\Documents\New folder\sylveweb\src\pages\tratamiento\tratamiento-animal-info.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], TratamientoAnimalInfo);

//# sourceMappingURL=tratamiento-animal-info.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb_find__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalProvider = (function () {
    function AnimalProvider() {
        __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */].plugin(__WEBPACK_IMPORTED_MODULE_2_pouchdb_find__["a" /* default */]);
        this.db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */]('sylve');
        /*   this.db.createIndex({
             index: { fields: ["animal"] }
           });
       */
        this.remote = 'http://172.20.10.7:5984/sylve';
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.db.sync(this.remote, options);
    }
    AnimalProvider.prototype.getAnimal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: 'animal' },
                fields: ['_id', "nombre", "codigo", "edad",
                    "peso", "raza", "description", "nacimiento", "genero", "_rev",
                    "indexKey"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAnimales = function () {
        this.db.find({
            selector: { indexKey: 'animal' },
            fields: ['_id'],
        }).then(function (result) {
            var _this = this;
            this.data = [];
            result.docs.map(function (row) {
                _this.data.push(row.doc);
            });
            this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                _this.handleChange(change);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.getTodos1 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: 'animal' },
                fields: ['_id', "nombre", "codigo", "edad",
                    "peso", "raza", "description", "nacimiento", "genero", "_rev",
                    "indexKey"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAlimentacionByAnimal = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "alimentacion", codigo: code },
                fields: ['_id', "codigo", "nombre",
                    "cantidad", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByAnimal = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "vacuna", codigoAnimal: code, keyVacuna: "vacunaRegister" },
                fields: ["codigoAnimal", "nombre",
                    "dosis"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getAnimalById = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: "animal", codigo: code },
                fields: ["codigo", "nombre", "edad", "peso", "raza", "description", "genero",
                    "nacimiento", "_id", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByRegister = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: code },
                fields: ['_id', "idVacuna", "nombre",
                    "fechaVencimiento", "precio", "cantidad",
                    "peso", "_rev"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getVacunaByRegisters = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyAlimentacion: "vacunaRegister", idVacuna: code },
                fields: ['_id', "idVacuna", "nombre",
                    "fechaVencimiento", "fechaElaboracion",
                    "precio", "cantidad",
                    "peso", "_rev", "keyAlimentacion"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getTratamientos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { keyTratamiento: "tratamiento" },
                fields: ['_id', "nombre", "fechaInicio",
                    "fechaFin", "codigo",
                    "estado", "_rev", "keyTratamiento"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.getTodos = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.createAnimal = function (todo) {
        this.db.post(todo);
    };
    AnimalProvider.prototype.createIndex = function () {
        this.db.createIndex({
            index: { fields: ["animal"] }
        });
    };
    AnimalProvider.prototype.updateTodo = function (todo) {
        this.db.put(todo).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.deleteTodo = function (todo) {
        this.db.remove(todo).catch(function (err) {
            console.log(err);
        });
    };
    AnimalProvider.prototype.findAnimal = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { animal_key: { $gte: "animal" } }
            }).then(function (result) {
                _this.data = [];
                result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.findAnimalByID = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.find({
                selector: { indexKey: "animal", codigo: code },
                fields: ["codigo"],
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                result.docs.map(function (row) {
                    _this.data.push(row);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AnimalProvider.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    return AnimalProvider;
}());
AnimalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AnimalProvider);

//# sourceMappingURL=animal-provider.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map