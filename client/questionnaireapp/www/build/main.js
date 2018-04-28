webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(269);
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
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n  \n</ion-tabs>\n`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_Henrisco82_Documents_Thesis_FProject_client_questionnaireapp_src_app_shared_sdk_models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_C_Users_Henrisco82_Documents_Thesis_FProject_client_questionnaireapp_src_app_services_auth_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2_C_Users_Henrisco82_Documents_Thesis_FProject_client_questionnaireapp_src_app_shared_sdk_models__["c" /* User */]();
    }
    RegisterPage.prototype.onRegisterSubmit = function () {
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            sex: this.sex,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            password: this.password
        };
        this.authService.registerUser(user).then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\register\register.html"*/`<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h2>User Registration</h2>\n\n  \n\n    <form (ngSubmit)="onRegisterSubmit()">\n\n    <ion-list>\n\n         <ion-item>\n\n            <ion-label floating>First Name</ion-label>\n\n            <ion-input [(ngModel)]="firstname" type="text" value="" name="firstname"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Last Name</ion-label>\n\n            <ion-input [(ngModel)]="lastname" type="text" value="" name="lastname"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input [(ngModel)]="username" type="text" value="" name="username"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input [(ngModel)]="email" type="email" value="" name= "email"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Sex</ion-label>\n\n               <ion-select [(ngModel)]="sex" name="sex">\n\n                     <ion-option name="male"> Male </ion-option>\n\n                     <ion-option name="female"> Female </ion-option>\n\n               </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Date Of Birth</ion-label>\n\n            <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="dateOfBirth" name="dateOfBirth"></ion-datetime>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input [(ngModel)]="password"  type="password" value="" name="password"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Confrim Password</ion-label>\n\n            <ion-input [(ngModel)]="confirmPassword"  type="password" value="" name="confirmpassword"></ion-input>\n\n          </ion-item>\n\n\n\n        \n\n      </ion-list>\n\n      \n\n     \n\n      <button ion-button full type="submit">Register</button>\n\n      </form>\n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_C_Users_Henrisco82_Documents_Thesis_FProject_client_questionnaireapp_src_app_services_auth_service__["a" /* AuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(userapi) {
        this.userapi = userapi;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models__["c" /* User */]();
        this.sessiontoken = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models__["b" /* SDKToken */]();
        this.rememberMe = true;
    }
    /*
       clear(): void{
           super.clear();
           this.clearFromSession();
       }
    
    
       saveToSession(): void{
           this.rememberMe = false;
           this.persist('id', super.getAccessTokenId());
           this.persist('userId', super.getCurrentUserId);
           this.persist('user', super.getCurrentUserData());
       }
    
       loadFromSession(): void {
           this.sessiontoken.id = sessionStorage.getItem('id');
           this.sessiontoken.userId = sessionStorage.getItem('userId');
           this.sessiontoken.user = sessionStorage.getItem('user');
           if(this.sessiontoken.id && this.sessiontoken.user && this.sessiontoken.userId){
               super.setUser(this.sessiontoken);
           }
       }
    
       clearFromSession(): void{
           Object.keys(this.sessiontoken).forEach(prop => sessionStorage.removeItem(prop));
           this.sessiontoken = new SDKToken();
       }
    
       persist(prop: string, value: any): void {
           if(this.rememberMe){
               super.persist(prop, value);
           }else{
               sessionStorage.setItem(prop, JSON.stringify(value));
           }
       }
    */
    AuthService.prototype.getUsers = function () {
        return this.userapi.find();
    };
    AuthService.prototype.registerUser = function (user) {
        var _this = this;
        var result;
        return new Promise(function (ressolve, reject) {
            _this.userapi.create(user).subscribe(function (success) {
                result = success;
                console.log(result);
                alert('registration successful');
            }, function (error) {
                console.log('create', error);
                alert('Registration Failed' + error.message);
                reject(error);
            });
        });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var _this = this;
        var result;
        return new Promise(function (ressolve, reject) {
            _this.userapi.login(user).subscribe(function (success) {
                result = success;
                console.log(result);
                //alert('login successful');
            }, function (error) {
                console.log('create', error);
                alert('login Failed' + error.message);
                reject(error);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
        //export class AuthService extends LoopBackAuth {
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_sdk_services__["d" /* UserApi */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendQuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services_core_auth_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendQuestionnairePage = (function () {
    function SendQuestionnairePage(navCtrl, userapi, usermodelapi, questionnaireapi, questionnaireresponseapi, loopbackauth) {
        this.navCtrl = navCtrl;
        this.userapi = userapi;
        this.usermodelapi = usermodelapi;
        this.questionnaireapi = questionnaireapi;
        this.questionnaireresponseapi = questionnaireresponseapi;
        this.loopbackauth = loopbackauth;
        this.authored = new Date();
    }
    SendQuestionnairePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userapi.find().subscribe(function (data) {
            _this.patients = data;
            // console.log(this.patients);
        }, function (error) {
            console.log(error);
        });
        this.questionnaireapi.find().subscribe(function (data) {
            _this.questionnaires = data;
            // console.log(this.questionnaires);
        }, function (error) {
            console.log(error);
        });
    };
    SendQuestionnairePage.prototype.onLogoutClick = function () {
        var _this = this;
        this.userapi.logout().subscribe(function (data) {
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    SendQuestionnairePage.prototype.send = function () {
        var _this = this;
        // find the patient using his id 
        var message;
        this.userapi.findById(this.thepatient).subscribe(function (data) {
            _this.source = data;
            console.log(_this.source);
            // find the questionnaire using the questionnaire id
            _this.questionnaireapi.findById(_this.thequestion).subscribe(function (data) {
                _this.thequestionnaire = data;
                //this.thequestionnaire = Object(this.thequestionnaire)
                console.log(_this.thequestionnaire);
                // find the user using the user id
                _this.userapi.findById(_this.loopbackauth.getCurrentUserId()).subscribe(function (data) {
                    _this.author = data;
                    console.log(_this.author);
                    // send the data to the questionnaire response model
                    _this.questionnaireresponseapi.create({
                        identifier: "string",
                        questionnaire: _this.thequestionnaire,
                        status: "todo",
                        author: _this.author,
                        source: _this.source,
                        authored: _this.authored.getDate(),
                        item: {}
                    }).subscribe(function (data) {
                        _this.qresponse = data;
                        message = "Dear " + _this.source.lastname + ",<br/> Please login to the questionnaire app and fill the questionnaire";
                        _this.usermodelapi.sendEmail(_this.thequestionnaire.title, message, _this.source.email).subscribe(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.log(error);
                        });
                        alert('The Questionnaire has been sent');
                        console.log(_this.qresponse);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    SendQuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sendquestionnaire',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\sendquestionnaire\sendquestionnaire.html"*/`<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n          Questionnaire\n\n          <div style="float: right;">\n\n            <a (click)="onLogoutClick()">logout</a>\n\n          </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h2>Send Questions to Patients</h2>\n\n  \n\n    <form>\n\n    <ion-list>\n\n         \n\n          <ion-item >\n\n            <ion-label floating>Select Patients</ion-label>\n\n               <ion-select  name="thepatient"  [(ngModel)]="thepatient">\n\n                     <ion-option value="{{patient.id}}" *ngFor="let patient of patients" >\n\n                      {{ patient.firstname }}\n\n                      {{ patient.lastname }}\n\n                     </ion-option>\n\n               </ion-select>\n\n          </ion-item>\n\n         \n\n          <ion-item>\n\n            <ion-label floating>Select Questionnaire</ion-label>\n\n               <ion-select  [(ngModel)]="thequestion"  name="thequestion" >\n\n                <ion-option value="{{questionnaire.id}}" *ngFor="let questionnaire of questionnaires" >\n\n                  {{ questionnaire.title }}\n\n                 </ion-option>\n\n               </ion-select>\n\n          </ion-item>\n\n\n\n\n\n      </ion-list>\n\n      \n\n     \n\n      <button ion-button full type="submit" (click)="send()">Send Questionnaire</button>\n\n      </form>\n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\sendquestionnaire\sendquestionnaire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services__["d" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services__["e" /* UserModelApi */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services__["a" /* QuestionnaireApi */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services__["b" /* QuestionnaireResponseApi */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services_core_auth_service__["a" /* LoopBackAuth */]])
    ], SendQuestionnairePage);
    return SendQuestionnairePage;
}());

//# sourceMappingURL=sendquestionnaire.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sendquestionnaire_sendquestionnaire__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_questions_questions__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sdk_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sdk_services_core_auth_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Router } from '@angular/router';










var LoginComponent = (function () {
    function LoginComponent(navCtrl, authService, userapi, loopbackauth, rolemappingapi) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.userapi = userapi;
        this.loopbackauth = loopbackauth;
        this.rolemappingapi = rolemappingapi;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.user = new __WEBPACK_IMPORTED_MODULE_6__shared_sdk_models__["c" /* User */]();
    }
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(user);
        /*this.authService.registerUser(user).then((data) => {
           console.log(data);
        }, (error) => {
            console.log(error);
        });*/
        this.authService.authenticateUser(user).then(function (data) {
            //  this.navCtrl.push(SendQuestionnairePage);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_questions_questions__["a" /* QuestionsPage */]);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.rolemappingapi.find().subscribe(function (data) {
            _this.role = data;
        }, function (error) {
            console.log(error);
        });
        this.userapi.login({ username: this.username, password: this.password })
            .subscribe(function (token) {
            _this.loopbackauth.setUser(token);
            _this.loopbackauth.setToken(token);
            if (_this.role[0].principalId == _this.loopbackauth.getCurrentUserId()) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_sendquestionnaire_sendquestionnaire__["a" /* SendQuestionnairePage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_questions_questions__["a" /* QuestionsPage */]);
            }
        }, function (err) {
            alert(err && err.message ? err.message : 'login failed!');
            _this.password = '';
        });
    };
    LoginComponent.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_register_register__["a" /* RegisterPage */]);
    };
    LoginComponent.prototype.RememberMe = function () {
        this.loopbackauth.setRememberMe(true);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\app\components\login\login.html"*/`<form (ngSubmit)="login()">\n\n<ion-list>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input [(ngModel)]="username" type="text" value="" name="username"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input [(ngModel)]="password"  type="password" value="" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n   \n\n    \n\n  </ion-list>\n\n  \n\n  <button ion-button full type="submit">Log In</button>\n\n  <ion-label>Remember Me   <ion-checkbox style="float:right" (ionChange)="RememberMe()"></ion-checkbox> </ion-label>\n\n  \n\n\n\n</form>\n\n\n\n\n\n\n\n<button ion-button full (click)="register()" >Register</button>`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\app\components\login\login.html"*/,
            selector: 'login'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_sdk_services__["d" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_9__shared_sdk_services_core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_7__shared_sdk_services__["c" /* RoleMappingApi */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(362);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(363);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["e"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_User__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_RoleMapping__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_Questionnaire__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_QuestionnaireResponse__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_UserModel__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__models_index__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_index__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lb_config__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_22__lb_config__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/




















/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__["a" /* JSONSearchParams */],
                __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_RoleMapping__["a" /* RoleMappingApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_Questionnaire__["a" /* QuestionnaireApi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_QuestionnaireResponse__["a" /* QuestionnaireResponseApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_UserModel__["a" /* UserModelApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__["a" /* StorageBrowser */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__["a" /* SocketDriver */], useClass: __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__["a" /* SocketBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());

//# sourceMappingURL=BaseModels.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* tslint:disable */
var User = (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMapping; });
/* tslint:disable */
var RoleMapping = (function () {
    function RoleMapping(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `RoleMapping`.
     */
    RoleMapping.getModelName = function () {
        return "RoleMapping";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of RoleMapping for dynamic purposes.
    **/
    RoleMapping.factory = function (data) {
        return new RoleMapping(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    RoleMapping.getModelDefinition = function () {
        return {
            name: 'RoleMapping',
            plural: 'RoleMappings',
            path: 'RoleMappings',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "principalType": {
                    name: 'principalType',
                    type: 'string'
                },
                "principalId": {
                    name: 'principalId',
                    type: 'string'
                },
                "roleId": {
                    name: 'roleId',
                    type: 'any'
                },
            },
            relations: {
                role: {
                    name: 'role',
                    type: 'any',
                    model: '',
                    relationType: 'belongsTo',
                    keyFrom: 'roleId',
                    keyTo: 'id'
                },
            }
        };
    };
    return RoleMapping;
}());

//# sourceMappingURL=RoleMapping.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Questionnaire; });
/* tslint:disable */
var Questionnaire = (function () {
    function Questionnaire(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Questionnaire`.
     */
    Questionnaire.getModelName = function () {
        return "Questionnaire";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Questionnaire for dynamic purposes.
    **/
    Questionnaire.factory = function (data) {
        return new Questionnaire(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Questionnaire.getModelDefinition = function () {
        return {
            name: 'Questionnaire',
            plural: 'Questionnaires',
            path: 'Questionnaires',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "title": {
                    name: 'title',
                    type: 'string'
                },
                "status": {
                    name: 'status',
                    type: 'string'
                },
                "date": {
                    name: 'date',
                    type: 'Date'
                },
                "publisher": {
                    name: 'publisher',
                    type: 'string'
                },
                "description": {
                    name: 'description',
                    type: 'string'
                },
                "item": {
                    name: 'item',
                    type: 'Array&lt;any&gt;'
                },
                "EnableWhen": {
                    name: 'EnableWhen',
                    type: 'Array&lt;any&gt;'
                },
                "option": {
                    name: 'option',
                    type: 'Array&lt;any&gt;'
                },
                "subjectType": {
                    name: 'subjectType',
                    type: 'Array&lt;any&gt;'
                },
                "required": {
                    name: 'required',
                    type: 'string'
                },
                "repeat": {
                    name: 'repeat',
                    type: 'string'
                },
                "readOnly": {
                    name: 'readOnly',
                    type: 'string'
                },
                "validations": {
                    name: 'validations',
                    type: 'Array&lt;any&gt;'
                },
                "relations": {
                    name: 'relations',
                    type: 'any'
                },
                "acls": {
                    name: 'acls',
                    type: 'Array&lt;any&gt;'
                },
                "methods": {
                    name: 'methods',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Questionnaire;
}());

//# sourceMappingURL=Questionnaire.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireResponse; });
/* tslint:disable */
var QuestionnaireResponse = (function () {
    function QuestionnaireResponse(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `QuestionnaireResponse`.
     */
    QuestionnaireResponse.getModelName = function () {
        return "QuestionnaireResponse";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of QuestionnaireResponse for dynamic purposes.
    **/
    QuestionnaireResponse.factory = function (data) {
        return new QuestionnaireResponse(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    QuestionnaireResponse.getModelDefinition = function () {
        return {
            name: 'QuestionnaireResponse',
            plural: 'QuestionnaireResponses',
            path: 'QuestionnaireResponses',
            idName: 'id',
            properties: {
                "identifier": {
                    name: 'identifier',
                    type: 'string'
                },
                "questionnaire": {
                    name: 'questionnaire',
                    type: 'any'
                },
                "status": {
                    name: 'status',
                    type: 'string'
                },
                "author": {
                    name: 'author',
                    type: 'any'
                },
                "source": {
                    name: 'source',
                    type: 'any'
                },
                "authored": {
                    name: 'authored',
                    type: 'Date'
                },
                "items": {
                    name: 'items',
                    type: 'Array&lt;any&gt;'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return QuestionnaireResponse;
}());

//# sourceMappingURL=QuestionnaireResponse.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
/* tslint:disable */
var UserModel = (function () {
    function UserModel(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `UserModel`.
     */
    UserModel.getModelName = function () {
        return "UserModel";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of UserModel for dynamic purposes.
    **/
    UserModel.factory = function (data) {
        return new UserModel(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    UserModel.getModelDefinition = function () {
        return {
            name: 'UserModel',
            plural: 'UserModels',
            path: 'UserModels',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return UserModel;
}());

//# sourceMappingURL=UserModel.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + value + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CookieBrowser);
    return CookieBrowser;
}());

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], StorageBrowser);
    return StorageBrowser;
}());

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());

//# sourceMappingURL=socket.driver.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__io_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().share();
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_2__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());

//# sourceMappingURL=real.time.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());

//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .map(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMappingApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `RoleMapping` model.
 *
 * **Details**
 *
 * Map principals to roles
 */
var RoleMappingApi = (function (_super) {
    __extends(RoleMappingApi, _super);
    function RoleMappingApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation role.
     *
     * @param {any} id RoleMapping id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `RoleMapping` object.)
     * </em>
     */
    RoleMappingApi.prototype.getRole = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/RoleMappings/:id/role";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `RoleMapping` object.)
     * </em>
     */
    RoleMappingApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/RoleMappings";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id RoleMapping id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `RoleMapping` object.)
     * </em>
     */
    RoleMappingApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/RoleMappings/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `RoleMapping`.
     */
    RoleMappingApi.prototype.getModelName = function () {
        return "RoleMapping";
    };
    RoleMappingApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], RoleMappingApi);
    return RoleMappingApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=RoleMapping.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Questionnaire` model.
 */
var QuestionnaireApi = (function (_super) {
    __extends(QuestionnaireApi, _super);
    function QuestionnaireApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Questionnaire` object.)
     * </em>
     */
    QuestionnaireApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Questionnaires";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Questionnaire id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Questionnaire` object.)
     * </em>
     */
    QuestionnaireApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Questionnaires/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Questionnaire`.
     */
    QuestionnaireApi.prototype.getModelName = function () {
        return "Questionnaire";
    };
    QuestionnaireApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], QuestionnaireApi);
    return QuestionnaireApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Questionnaire.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireResponseApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `QuestionnaireResponse` model.
 */
var QuestionnaireResponseApi = (function (_super) {
    __extends(QuestionnaireResponseApi, _super);
    function QuestionnaireResponseApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `QuestionnaireResponse` object.)
     * </em>
     */
    QuestionnaireResponseApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/QuestionnaireResponses";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id QuestionnaireResponse id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `QuestionnaireResponse` object.)
     * </em>
     */
    QuestionnaireResponseApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/QuestionnaireResponses/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `QuestionnaireResponse`.
     */
    QuestionnaireResponseApi.prototype.getModelName = function () {
        return "QuestionnaireResponse";
    };
    QuestionnaireResponseApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], QuestionnaireResponseApi);
    return QuestionnaireResponseApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=QuestionnaireResponse.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModelApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `UserModel` model.
 */
var UserModelApi = (function (_super) {
    __extends(UserModelApi, _super);
    function UserModelApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserModel` object.)
     * </em>
     */
    UserModelApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UserModels";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id UserModel id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UserModel` object.)
     * </em>
     */
    UserModelApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UserModels/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `msg` – `{string}` -
     *
     *  - `msg2` – `{string}` -
     *
     *  - `to` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{string}` -
     */
    UserModelApi.prototype.sendEmail = function (msg, msg2, to, customHeaders) {
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UserModels/send-email";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof msg !== 'undefined' && msg !== null)
            _urlParams.msg = msg;
        if (typeof msg2 !== 'undefined' && msg2 !== null)
            _urlParams.msg2 = msg2;
        if (typeof to !== 'undefined' && to !== null)
            _urlParams.to = to;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `UserModel`.
     */
    UserModelApi.prototype.getModelName = function () {
        return "UserModel";
    };
    UserModelApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
    ], UserModelApi);
    return UserModelApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=UserModel.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\about\about.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About  \n    </ion-title>\n   \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\contact\contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to the Questionnaireapp!</h2>\n\n  <login></login>\n    \n</ion-content>\n`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_RoleMapping__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Questionnaire__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_QuestionnaireResponse__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_UserModel__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */






var SDKModels = (function () {
    function SDKModels() {
        this.models = {
            User: __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */],
            RoleMapping: __WEBPACK_IMPORTED_MODULE_2__models_RoleMapping__["a" /* RoleMapping */],
            Questionnaire: __WEBPACK_IMPORTED_MODULE_3__models_Questionnaire__["a" /* Questionnaire */],
            QuestionnaireResponse: __WEBPACK_IMPORTED_MODULE_4__models_QuestionnaireResponse__["a" /* QuestionnaireResponse */],
            UserModel: __WEBPACK_IMPORTED_MODULE_5__models_UserModel__["a" /* UserModel */],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SDKModels);
    return SDKModels;
}());

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services_core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionsPage = (function () {
    // questionnaire: any = this.questionnaires[]
    function QuestionsPage(navCtrl, userapi, questionnaireapi, questionnaireresponseapi, loopbackauth) {
        this.navCtrl = navCtrl;
        this.userapi = userapi;
        this.questionnaireapi = questionnaireapi;
        this.questionnaireresponseapi = questionnaireresponseapi;
        this.loopbackauth = loopbackauth;
        this.type = [];
        this.answer = [];
        this.items = [];
        this.item = {};
        this.authored = new Date();
        this.choices = [];
        this.choice = [];
    }
    QuestionsPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.answer);
        this.questionnaireresponseapi.findOne({ where: { 'source.id': this.loopbackauth.getCurrentUserId() } }).subscribe(function (data) {
            _this.questionnaire = data;
            _this.questionnaireapi.findById(_this.questionnaire.questionnaire.id).subscribe(function (data) {
                _this.questionnaires = data;
                console.log(_this.questionnaires);
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
        //console.log(this.questions);
        // find user(doctor) and user(patient)
        this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsPage.prototype.updateAnswer = function (index, ansindex, value, checked) {
        if (!Array.isArray(this.answer[index])) {
            this.answer[index] = [];
        }
        if (checked) {
            this.answer[index][ansindex] = value;
        }
        else {
            this.answer[index].splice(ansindex, 1);
        }
    };
    QuestionsPage.prototype.submitResponse = function () {
        //  console.log(this.loopbackauth.getCurrentUserId())
        var _this = this;
        this.questionnaireresponseapi.findOne({ where: { 'source.id': this.loopbackauth.getCurrentUserId() } }).subscribe(function (data) {
            _this.thequestionnaireResponse = data;
            _this.thequestionnaireResponse.status = "completed";
            for (var count = 0; count < _this.answer.length; ++count) {
                _this.item.linkedId = count + 1;
                _this.item.text = _this.questionnaires.item[count].text;
                _this.item.answer = _this.answer[count];
                _this.items.push(_this.item);
                _this.item = {};
            }
            console.log(_this.items);
            _this.thequestionnaireResponse.item = _this.items;
            _this.questionnaireresponseapi.updateAttributes(_this.thequestionnaireResponse.id, _this.thequestionnaireResponse).subscribe(function (data) {
                console.log(data);
                alert("Your Response has been submitted! Thank you");
            }, function (error) {
                console.log(error);
            });
            console.log(_this.thequestionnaireResponse);
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsPage.prototype.onLogoutClick = function () {
        var _this = this;
        this.userapi.logout().subscribe(function (data) {
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'questions',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\questions\questions.html"*/`<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n          Questionnaire\n\n          <div style="float: right;">\n\n            <a (click)="onLogoutClick()">logout</a>\n\n          </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h2>Questionnaire</h2>\n\n    <div *ngIf="questionnaires"> \n\n          <form (ngSubmit)="submitResponse()" >\n\n           <!-- <div *ngFor="let item of questionnaires; let i = index;" >  -->\n\n                 <div *ngIf="questionnaires"> \n\n                  <div *ngFor="let item of questionnaires.item;  let i = index;" > \n\n                       <ion-label> {{ item.prefix }} &nbsp; {{ item.text }} </ion-label>  \n\n                           <div *ngIf="item.Questiontype == \'boolean\'" >\n\n                            <ion-list radio-group [(ngModel)]="answer[i]" name="answer" value="boolean">\n\n                                <ion-item *ngFor="let option of item.options; ">\n\n                                    <ion-label>{{option.value}}</ion-label>\n\n                                  <ion-radio  value="{{option.value}}"></ion-radio>\n\n                                </ion-item>\n\n                          </ion-list>\n\n                           </div>\n\n                           <div *ngIf="item.Questiontype == \'choice\'; " >\n\n                            <ion-list>\n\n                              <ion-item *ngFor="let option of item.options; let j=index; ">\n\n                                <ion-label>{{option.value}}</ion-label>\n\n                            <!--   <ion-checkbox [(ngModel)]="option.checked" name="option.checked" [checked]="option.checked" (click)=\'onCheckboxChange(option, item, $event)\' ></ion-checkbox> -->\n\n                            <ion-checkbox name="option.checked" [(ngModel)]="option.checked" (ionChange)="updateAnswer(i,j,option.value,option.checked)"></ion-checkbox>\n\n                              </ion-item>\n\n                          </ion-list>\n\n                           </div>\n\n                           <div *ngIf="item.Questiontype == \'string\'; " >\n\n                               <ion-item>\n\n                                <ion-input type="text" [(ngModel)]="answer[i]" name="answer"> </ion-input>\n\n                              </ion-item>\n\n                           </div>\n\n                          </div>\n\n                    </div>\n\n\n\n               <!--  </div>  -->\n\n                <button ion-button full type="submit" >Submit Response </button>  \n\n         </form>\n\n  </div>\n\n\n\n\n\n\n\n  <div *ngIf="!questionnaires">\n\n          <p> There is currently no questionnaire for you to fill </p>\n\n  </div>\n\n\n\n\n\n  \n\n\n\n\n\n  \n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services__["d" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services__["a" /* QuestionnaireApi */],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_sdk_services__["b" /* QuestionnaireResponseApi */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services_core_auth_service__["a" /* LoopBackAuth */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(283);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_index__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sendquestionnaire_sendquestionnaire__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_questionnaire_questionnaire__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_questions_questions__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routes__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sendquestionnaire_sendquestionnaire__["a" /* SendQuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_sdk_index__["b" /* SDKBrowserModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sendquestionnaire_sendquestionnaire__["a" /* SendQuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(128);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["a" /* LoopBackConfig */].setBaseURL('http://127.0.0.1:3000');
            __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["a" /* LoopBackConfig */].setApiVersion('api');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n\n`/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(url, options);
    };
    return SocketBrowser;
}());

//# sourceMappingURL=socket.browser.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONSearchParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
var JSONSearchParams = (function () {
    function JSONSearchParams() {
    }
    JSONSearchParams.prototype.setJSON = function (obj) {
        this._usp = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */](this._JSON2URL(obj, false));
    };
    JSONSearchParams.prototype.getURLSearchParams = function () {
        return this._usp;
    };
    JSONSearchParams.prototype._JSON2URL = function (obj, parent) {
        var parts = [];
        for (var key in obj)
            parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    };
    JSONSearchParams.prototype._parseParam = function (key, value, parent) {
        var processedKey = parent ? parent + '[' + key + ']' : key;
        if (value && ((typeof value) === 'object' || Array.isArray(value))) {
            return this._JSON2URL(value, processedKey);
        }
        return processedKey + '=' + value;
    };
    JSONSearchParams = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], JSONSearchParams);
    return JSONSearchParams;
}());

//# sourceMappingURL=search.params.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* tslint:disable */

var IO = (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());

//# sourceMappingURL=io.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(46);
/* tslint:disable */

var FireLoop = (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());

//# sourceMappingURL=FireLoop.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge__);
/* tslint:disable */




/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());

//# sourceMappingURL=FireLoopRef.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__real_time__ = __webpack_require__(259);
/* unused harmony namespace reexport */
/* tslint:disable */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(260);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoleMapping__ = __webpack_require__(263);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__RoleMapping__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Questionnaire__ = __webpack_require__(264);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Questionnaire__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__QuestionnaireResponse__ = __webpack_require__(265);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__QuestionnaireResponse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserModel__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SDKModels__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__(238);
/* unused harmony namespace reexport */
/* tslint:disable */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ErrorHandler);
    return ErrorHandler;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().share(),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().share(),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().share(),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().share()
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], SocketConnection);
    return SocketConnection;
}());

//# sourceMappingURL=socket.connections.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services_core_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_sdk_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionnairePage = (function () {
    // questionnaire: any = this.questionnaires[]
    function QuestionnairePage(navCtrl, userapi, questionnaireapi, questionnaireresponseapi, loopbackauth, _fb) {
        this.navCtrl = navCtrl;
        this.userapi = userapi;
        this.questionnaireapi = questionnaireapi;
        this.questionnaireresponseapi = questionnaireresponseapi;
        this.loopbackauth = loopbackauth;
        this._fb = _fb;
        this.text = [];
        this.type = [];
        this.items = [];
        this.item = {};
        this.authored = new Date();
        this.checkedList = [];
        this.choices = [];
        this.choice = [];
    }
    QuestionnairePage.prototype.ngOnInit = function () {
        var _this = this;
        this.ansForm = this._fb.group({
            value: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            checked: false
        });
        this.questionnaireresponseapi.findOne({ where: { 'source.id': this.loopbackauth.getCurrentUserId() } }).subscribe(function (data) {
            _this.questionnaire = data;
            _this.questionnaireapi.findById(_this.questionnaire.questionnaire.id).subscribe(function (data) {
                _this.questionnaires = data;
                // this.questionnaires = this.questionnaires.item;
                // console.log(this.FindOptions(this.questionnaires.item)) ;
                console.log(_this.questionnaires);
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
        //console.log(this.questions);
        // find user(doctor) and user(patient)
        this.userapi.findById(this.loopbackauth.getCurrentUserId()).subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionnairePage.prototype.FindOptions = function (items, event) {
        var _this = this;
        var index = 0;
        if (event.target.checked) {
            items.forEach(function (item) {
                _this.checkedList = items[index].options.value;
                console.log(_this.options);
                index = index + 1;
            });
        }
    };
    QuestionnairePage.prototype.onCheckboxChange = function (items, event) {
        var _this = this;
        var index = 0;
        if (event.target.checked) {
            items.forEach(function (item) {
                _this.checkedList.push(items[index].options.value);
                console.log(_this.options);
                index = index + 1;
            });
        }
        console.log(this.checkedList);
    };
    QuestionnairePage.prototype.clickQuestionSelectBox = function (questionKey) {
        var foundAt = this.choices.indexOf(questionKey);
        if (foundAt >= 0) {
            this.choices.splice(foundAt, 1);
        }
        else {
            this.choice.push(questionKey);
        }
        console.log(this.choice);
        console.log(this.choices);
    };
    QuestionnairePage.prototype.submitResponse = function (text, choices) {
        //  console.log(this.loopbackauth.getCurrentUserId())
        var _this = this;
        // this.text.push(this.choice);
        this.questionnaireresponseapi.findOne({ where: { 'source.id': this.loopbackauth.getCurrentUserId() } }).subscribe(function (data) {
            _this.thequestionnaireResponse = data;
            _this.thequestionnaireResponse.status = "completed";
            for (var count = 0; count < _this.text.length; ++count) {
                _this.item.linkedId = count + 1;
                _this.item.answer = _this.text[count];
                _this.items.push(_this.item);
                _this.item = {};
            }
            console.log(_this.items);
            _this.thequestionnaireResponse.item = _this.items;
            _this.questionnaireresponseapi.updateAttributes(_this.thequestionnaireResponse.id, _this.thequestionnaireResponse).subscribe(function (data) {
                console.log(data);
                _this.answers = data;
                alert("Your Response has been submitted! Thank you");
            }, function (error) {
                console.log(error);
            });
            console.log(_this.thequestionnaireResponse);
        }, function (error) {
            console.log(error);
        });
    };
    QuestionnairePage.prototype.onLogoutClick = function () {
        var _this = this;
        this.userapi.logout().subscribe(function (data) {
            _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    QuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'questionnaire',template:/*ion-inline-start:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\questionnaire\questionnaire.html"*/`<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n          Questionnaire\n\n          <div style="float: right;">\n\n            <a (click)="onLogoutClick()" href="#">logout</a>\n\n          </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h2>Questionnaire</h2>\n\n    <div *ngIf="questionnaires"> \n\n          <form [formGroup]="answerForm" novalidate (ngSubmit)="submitResponse(answerForm)" >\n\n           <!-- <div *ngFor="let item of questionnaires; let i = index;" >  -->\n\n                 <div *ngIf="questionnaires"> \n\n                  <div *ngFor="let item of questionnaires.item;  let i = index;" > \n\n                       <ion-label> {{ item.prefix }} &nbsp; {{ item.text }} </ion-label>  \n\n                           <div *ngIf="item.Questiontype == \'boolean\'" >\n\n                            <ion-list radio-group >\n\n                                <ion-item *ngFor="let option of item.options; ">\n\n                                    <ion-label>{{option.value}}</ion-label>\n\n                                  <ion-radio  value="{{option.value}}" formControlValue="value"></ion-radio>\n\n                                </ion-item>\n\n                          </ion-list>\n\n                           </div>\n\n                           <div *ngIf="item.Questiontype == \'choice\'; " >\n\n                            <ion-list>\n\n                              <ion-item *ngFor="let option of item.options;">\n\n                                <ion-label>{{option.value}}</ion-label>\n\n                              <ion-checkbox [(ngModel)]="option.checked" name="option.checked" [checked]="option.checked"></ion-checkbox>\n\n                              </ion-item>\n\n                          </ion-list>\n\n                           </div>\n\n                           <div *ngIf="item.Questiontype == \'string\'; " >\n\n                               <ion-item>\n\n                                <ion-input type="text" [(ngModel)]="text[i]" name="text"> </ion-input>\n\n                              </ion-item>\n\n                           </div>\n\n                          </div>\n\n                    </div>\n\n\n\n               <!--  </div>  -->\n\n                <button ion-button full type="submit" >Submit Response </button>  \n\n         </form>\n\n  </div>\n\n\n\n\n\n\n\n  <div *ngIf="!questionnaires">\n\n          <p> There is currently no questionnaire for you to fill </p>\n\n  </div>\n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\Henrisco82\Documents\Thesis\FProject\client\questionnaireapp\src\pages\questionnaire\questionnaire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_sdk_services__["d" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_sdk_services__["a" /* QuestionnaireApi */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_sdk_services__["b" /* QuestionnaireResponseApi */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_sdk_services_core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_routes__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register_routes__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sendquestionnaire_sendquestionnaire_routes__ = __webpack_require__(397);




var appRoutes = __WEBPACK_IMPORTED_MODULE_1__components_login_login_routes__["a" /* LoginRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__pages_register_register_routes__["a" /* RegisterRoutes */], __WEBPACK_IMPORTED_MODULE_3__pages_sendquestionnaire_sendquestionnaire_routes__["a" /* SendQuestionnaireRoutes */], [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */] }
]);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__(133);

var LoginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=login.routes.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_register_register__ = __webpack_require__(130);

var RegisterRoutes = [
    { path: 'Register', component: __WEBPACK_IMPORTED_MODULE_0__pages_register_register__["a" /* RegisterPage */] }
];
//# sourceMappingURL=register.routes.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendQuestionnaireRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_sendquestionnaire_sendquestionnaire__ = __webpack_require__(132);

var SendQuestionnaireRoutes = [
    { path: 'sendquestionnaire', component: __WEBPACK_IMPORTED_MODULE_0__pages_sendquestionnaire_sendquestionnaire__["a" /* SendQuestionnairePage */] }
];
//# sourceMappingURL=sendquestionnaire.routes.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RoleMapping__ = __webpack_require__(240);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Questionnaire__ = __webpack_require__(241);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__QuestionnaireResponse__ = __webpack_require__(242);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserModel__ = __webpack_require__(243);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BaseModels__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__BaseModels__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FireLoopRef__ = __webpack_require__(357);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__FireLoopRef__["a"]; });
/* tslint:disable */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lb_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */











/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = (function () {
    function BaseLoopBackApi(http, connection, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            // Authenticate request
            this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var filter = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    filter = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            /**
            CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
            if (urlParams.where) {
              headers.append('where', JSON.stringify(urlParams.where));
              delete urlParams.where;
            }
            **/
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            this.searchParams.setJSON(urlParams);
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
                headers: headers,
                method: method,
                url: "" + url + filter,
                search: Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                body: body ? JSON.stringify(body) : undefined,
                withCredentials: __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            }));
            return this.http.request(request)
                .map(function (res) { return (res.text() != "" ? res.json() : {}); })
                .catch(function (e) { return _this.errorHandler.handleError(e); });
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */],
            __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());

//# sourceMappingURL=base.service.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map