(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**Approved**/"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<!--Approved-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//Approved


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _home_task_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/task/task.component */ "./src/app/home/task/task.component.ts");
/* harmony import */ var _home_bill_bill_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/bill/bill.component */ "./src/app/home/bill/bill.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _home_task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"],
                _home_bill_bill_component__WEBPACK_IMPORTED_MODULE_17__["BillComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_13__["appRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"].forRoot()
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                ,
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        //User is authenticated if there exist a userToken
        if (localStorage.getItem('userToken') != null) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());

//Approved
/***
 * We need this guard so we can secure our home component
 * when the user is not logged in. A user should only be
 * authorized to access /home when he/she is logged in.
 *
 */


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    //intercept is a function
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //if the user is not authenticated
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        //if the user is authenticated
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) { }
            }, function (error) {
                if (error.status === 401)
                    _this.router.navigateByUrl('/login');
            }));
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

/**
 * A token only has a limited amount of useful life, to extend
 * the useful life of a auth token, we use interceptors.

//Line 29 => .pipe to line 33 code updated
                 //.do(
                // succ => { },
                // err => {
                //     if (err.status === 401)
                //         this.router.navigateByUrl('/login');
                // }
                // );
 */
//Approved


/***/ }),

/***/ "./src/app/home/bill/bill.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/bill/bill.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/bill/bill.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/bill/bill.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Bills</h1> -->\r\n<div class=\"row\" *ngIf=\"billBucket\">\r\n  <ul>\r\n    <li *ngFor=\"let bill of billBucket\">\r\n      {{bill.Description}}\r\n      <p>Due: {{ bill.DueDate | date: 'longDate'}} &nbsp;\r\n        <input type=\"checkbox\" id=\"paid\" (change)=\"onPut(bill.BillId, bill)\" [(ngModel)]=\"bill.Paid\">\r\n        <label for=\"paid\">Paid</label>\r\n      </p>\r\n      <br> Amount: {{bill.AmountOwed | currency: 'USD'}} &nbsp;\r\n      <input type=\"checkbox\" id=\"auto\" (change)=\"onPut(bill.BillId, bill)\" [(ngModel)]=\"bill.Automatic\">\r\n      <label for=\"auto\">Automatic</label>\r\n      <br> \r\n      <button class=\"btn btn-success\" (click)=\"onDetail(bill.BillId)\" name=\"details\">Details</button>\r\n      <form id=\"detail{{bill.BillId}}\" #putBill=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"onPut(bill.BillId, bill)\" style=\"display:none\">\r\n        <div>\r\n          <input type=\"text\" name=\"putCompany\" [(ngModel)]=\"bill.BillHolder\" required>\r\n        </div>\r\n        <div>\r\n          <input type=\"date\" name=\"putDate\" [(ngModel)]=\"bill.DueDate\" required>\r\n        </div>\r\n        <div>\r\n          <input type=\"text\" name=\"putAmount\" [(ngModel)]=\"bill.AmountOwed\" required>\r\n        </div>\r\n        <div>\r\n          <input type=\"text\" name=\"putDescription\" [(ngModel)]=\"bill.Description\">\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-success btn-submit\" id=\"saveButton\" (click)=\"onPut(bill.BillId, bill)\">Save Changes</button>\r\n          <button class=\"btn btn-success\" id=\"cancelButton\" (click)=\"onDetail(bill.BillId)\">Cancel</button>\r\n          <button class=\"btn btn-success\" id=\"deleteButton\" (click)=\"onDelete(bill.BillId)\">Delete</button>\r\n        </div>\r\n      </form>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<form class=\"col s12 white\" name=\"form?\">\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <label for=\"billHolder\">Company: </label>\r\n      <input type=\"text\" name=\"billHolder\" [(ngModel)]=\"billHolder\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <input type=\"date\" name=\"dueDate\" [(ngModel)]=\"dueDate\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <label for=\"amountOwed\">Amount Owed: </label>\r\n      <input type=\"text\" name=\"amountOwed\" [(ngModel)]=\"amountOwed\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <label for=\"description\">Description: </label>\r\n      <input type=\"text\" name=\"description\" [(ngModel)]=\"description\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <button class=\"btn btn-success btn-submit\" type=\"submit\" (click)=\"onPost()\">Post</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/home/bill/bill.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/bill/bill.component.ts ***!
  \*********************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillComponent = /** @class */ (function () {
    function BillComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isPostError = false;
        this.billHolder = "";
        this.description = "";
    }
    BillComponent.prototype.ngOnInit = function () {
        this.getBillItems();
    };
    BillComponent.prototype.getBillItems = function () {
        var _this = this;
        this.userService.getAllBillItems().subscribe(function (data) {
            _this.billBucket = data;
        });
    };
    BillComponent.prototype.onPost = function () {
        var _this = this;
        var newBill = {
            BillId: 0,
            UserId: 0,
            BillHolder: this.billHolder,
            DueDate: this.dueDate,
            AmountOwed: this.amountOwed,
            Description: this.description
        };
        this.userService.postBillItem(newBill).subscribe(function (data) {
            _this.getBillItems();
        }, function (err) {
            console.log(err);
            _this.isPostError = true;
        });
    };
    BillComponent.prototype.onDetail = function (id) {
        var x = document.getElementById('detail' + id);
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    BillComponent.prototype.onPut = function (id, bill) {
        var _this = this;
        this.userService.putBillItem(id, bill).subscribe(function (data) {
            _this.getBillItems();
        }, function (err) {
            console.log(err);
            _this.isPostError = true;
        });
    };
    BillComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.userService.deleteBillItem(id).subscribe(function (data) {
            _this.getBillItems();
        }, function (err) {
            console.log(err);
            _this.isPostError = true;
        });
    };
    BillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.component.html */ "./src/app/home/bill/bill.component.html"),
            styles: [__webpack_require__(/*! ./bill.component.css */ "./src/app/home/bill/bill.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**Approved**/\r\nimg.two{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\nh5 {\r\n    font-family: \"Avant Garde\", Avantgarde, \"Century Gothic\", CenturyGothic, \"AppleGothic\", sans-serif;\r\n    font-size: 42px;\r\n    text-shadow: 0 1px 0 #ccc, \r\n               0 2px 0 #c9c9c9,\r\n               0 3px 0 #bbb,\r\n               0 4px 0 #b9b9b9,\r\n               0 5px 0 #aaa,\r\n               0 6px 1px rgba(0,0,0,.1),\r\n               0 0 5px rgba(0,0,0,.1),\r\n               0 1px 3px rgba(0,0,0,.3),\r\n               0 3px 5px rgba(0,0,0,.2),\r\n               0 5px 10px rgba(0,0,0,.25),\r\n               0 10px 10px rgba(0,0,0,.2),\r\n               0 20px 20px rgba(0,0,0,.15);\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper black\">\r\n    <a href=\"home\" class=\"brand-logo center\">\r\n      <i class=\"material-icons\">note_add</i>Notify</a>\r\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n      <li>\r\n        <a (click)=\"Logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"col s12 m6\">\r\n  <!-- <div class=\"card blue\"> -->\r\n  <div class=\"card teal card-image\">\r\n    <img class=\"two\" src=\"https://materializecss.com/images/sample-1.jpg\">\r\n    <div class=\"card-content white-text\" *ngIf=\"userClaims\">\r\n        <h5><span>Welcome, {{userClaims.Email}}!</span></h5>\r\n      <!-- <div class=\"row\" *ngIf=\"userClaims\">\r\n        <h5>\r\n          <span>Welcome, {{userClaims.Email}}!</span>\r\n        </h5>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"card-tabs\">\r\n      <ul class=\"tabs tabs-fixed-width tabs-transparent\">\r\n        <!--When Tasks is triggered, it should use the /tasks route.\r\n          The /tasks route is defined in routes.ts file which is imported\r\n          in the app.module file. The active is just for css on tasks tab -->\r\n        <li class=\"tab\">\r\n          <a routerLink='/tasks' routerLinkActive='active'>TASKS</a>\r\n        </li>\r\n        <li class=\"tab\">\r\n          <a routerLink='/bills' routerLinkActive='active'>BILLS</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"card-content blue lighten-5\">\r\n      <div>\r\n        <router-outlet></router-outlet>\r\n        <!--The stuff from each route mentioned above gets displayed here-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    //Inject Router here because we're using
    //router.navigate on line 27
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserInfo().subscribe(function (data) {
            _this.userClaims = data;
        });
    };
    //Remove the userToken to log out
    HomeComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/task/task.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/task/task.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/task/task.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/task/task.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--For the cards-->\r\n<div class=\"row\" *ngIf=\"taskBucket\">\r\n  <div *ngFor=\"let task of taskBucket\" class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"col s12 m6 l3\">\r\n        <div class=\"card blue-grey darken-1\">\r\n          <div class=\"card-content white-text\">\r\n            <span class=\"card-title\"> {{task.TaskTitle | uppercase}}</span>\r\n            <hr>\r\n            <p>{{task.TaskDescription}}</p>\r\n            <br> {{ task.DueDateTime | date:'longDate' }}\r\n          </div>\r\n          <div class=\"card-panel hoverable card-action\">\r\n            \r\n            <a id=\"putButton\" (click)=\"OnPut(task.TaskId, task)\">\r\n              <i class=\"material-icons prefix\">edit</i> \r\n            </a>\r\n\r\n            <a id=\"deleteButton\" (click)=\"OnDelete(task.TaskId)\">\r\n              <i class=\"material-icons prefix\">delete</i>\r\n            </a>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br> <hr> <br>\r\n\r\n<form #postForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmitPost(Title.value,Description.value,DueDate.value)\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <i class=\"material-icons prefix\">subject</i>\r\n        <input type=\"text\" #Title ngModel name=\"Title\" placeholder=\"Title\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <i class=\"material-icons prefix\">description</i>\r\n        <input type=\"text\" #Description ngModel name=\"Description\" placeholder=\"Description\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <i class=\"material-icons prefix\">date_range</i>\r\n        <input type=\"date\" #DueDate ngModel name=\"DueDate\" placeholder=\"DueDate\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <button [disabled]=\"!postForm.valid\" class=\"btn-floating btn-large cyan pulse\" type=\"submit\">\r\n            <i class=\"material-icons\">add_circle</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n<div>\r\n  <br><br>\r\n  <hr>\r\n  <span>&copy; 2018 Notify</span>\r\n  <a href=\"https://mail.google.com\" target=\"_blank\">\r\n    <i class=\"material-icons prefix\">email</i> \r\n  </a>\r\n  <br>\r\n \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/task/task.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/task/task.component.ts ***!
  \*********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = /** @class */ (function () {
    function TaskComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isDeleteError = false;
        this.isPutError = false;
        this.isPostError = false;
    }
    //We don't have to put it in here
    TaskComponent.prototype.ngOnInit = function () {
        this.getTaskItems();
    };
    TaskComponent.prototype.getTaskItems = function () {
        var _this = this;
        this.userService.getAllTaskItems().subscribe(function (data) {
            _this.taskBucket = data;
        });
    };
    TaskComponent.prototype.OnDelete = function (id) {
        var _this = this;
        this.userService.deleteTaskItem(id).subscribe(function (data) {
            _this.getTaskItems();
            console.log("Deleted " + id);
        }, function (err) {
            console.log(err);
            _this.isDeleteError = true;
        });
    };
    TaskComponent.prototype.OnPut = function (id, task) {
        var _this = this;
        this.userService.putTaskItem(id, task).subscribe(function (data) {
            _this.getTaskItems();
            console.log("Updated " + id);
        }, function (err) {
            console.log(err);
            _this.isDeleteError = true;
        });
    };
    TaskComponent.prototype.OnSubmitPost = function (Title, Description, DueDate) {
        var _this = this;
        var postedTask = {
            TaskId: 0,
            UserId: 0,
            TaskTitle: Title,
            TaskDescription: Description,
            DueDateTime: DueDate,
            NotifyDateTime: DueDate,
            CreatedDate: DueDate,
            ModifiedDate: DueDate,
            HasDueDate: true,
            HasNotifyDate: false,
            IsCompleted: false
        };
        this.userService.postTaskItem(postedTask).subscribe(function (data) {
            _this.getTaskItems();
            console.log("Posted" + Title);
        }, function (err) {
            console.log(err);
            _this.isPostError = true;
        });
    };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/home/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/home/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _home_task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/task/task.component */ "./src/app/home/task/task.component.ts");
/* harmony import */ var _home_bill_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/bill/bill.component */ "./src/app/home/bill/bill.component.ts");







var appRoutes = [
    //The home component requires authentication
    //canActicate is implemented in auth.guard.ts file
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'tasks', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{ path: '', component: _home_task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"] }]
    },
    {
        path: 'bills', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{ path: '', component: _home_bill_bill_component__WEBPACK_IMPORTED_MODULE_6__["BillComponent"] }]
    },
    //These routes do not need authentication
    {
        //When signup url is used it will load two components: UserComponent and SignUpComponent
        //UserComponent is the parent and SignUp is the child component
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].rootUrl;
    }
    UserService.prototype.registerUser = function (user) {
        var body = {
            Email: user.Email,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword
        };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' }); //original
        return this.http.post(this.rootUrl + '/api/Account/Register', body, { headers: reqHeader });
    };
    //This is similar to what we did in PostMan
    //This function returns an absorver
    UserService.prototype.userAuthentication = function (userEmail, password) {
        var data = "username=" + userEmail + "&password=" + password + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
    };
    //Making API http get request
    UserService.prototype.getUserInfo = function () {
        return this.http.get(this.rootUrl + '/api/Account/UserInfo');
    };
    /**********************TaskItem**********************/
    //GET api/TaskItem
    UserService.prototype.getAllTaskItems = function () {
        return this.http.get(this.rootUrl + '/api/TaskItem');
    };
    //GET api/TaskItem/{id}
    UserService.prototype.getOneTaskItem = function (id) {
        return this.http.get(this.rootUrl + '/api/TaskItem/' + id);
    };
    //PUT api/TaskItem/{id}
    UserService.prototype.putTaskItem = function (id, postedTask) {
        return this.http.put(this.rootUrl + '/api/TaskItem/' + id, postedTask);
    };
    //POST api/TaskItem
    UserService.prototype.postTaskItem = function (postedTask) {
        return this.http.post(this.rootUrl + '/api/TaskItem', postedTask);
    };
    //DELETE api/TaskItem/{id}
    UserService.prototype.deleteTaskItem = function (id) {
        return this.http.delete(this.rootUrl + '/api/TaskItem/' + id);
    };
    /**********************BillItem**********************/
    //GET api/BillItem
    UserService.prototype.getAllBillItems = function () {
        return this.http.get(this.rootUrl + '/api/BillItem');
    };
    //GET api/BillItem/{id}
    UserService.prototype.getBillItem = function (id) {
        return this.http.get(this.rootUrl + ("/api/BillItem/" + id));
    };
    //PUT api/BillItem/{id}
    UserService.prototype.putBillItem = function (id, putBill) {
        return this.http.put(this.rootUrl + ("/api/BillItem/" + id), putBill);
    };
    //POST api/BillItem
    UserService.prototype.postBillItem = function (postBill) {
        return this.http.post(this.rootUrl + '/api/BillItem', postBill);
    };
    //DELETE api/BillItem/{id}
    UserService.prototype.deleteBillItem = function (id) {
        return this.http.delete(this.rootUrl + ("/api/BillItem/" + id));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root' //Didn't have this
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());

//Approved


/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**Approved**/"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--isLoginError is a property in sin-in.component.ts file-->\r\n<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\r\n  <i class=\"material-icons\">error</i> Incorrect email or password\r\n</div>\r\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(Email.value,Password.value)\">\r\n <div class=\"row\">\r\n   <div class=\"input-field col s12\">\r\n     <i class=\"material-icons prefix\">account_circle</i>\r\n     <input type=\"text\" #Email ngModel name=\"Email\" placeholder=\"Email\" required>\r\n   </div>\r\n </div>\r\n <div class=\"row\">\r\n    <div class=\"input-field col s12\">\r\n      <i class=\"material-icons prefix\">vpn_key</i>\r\n      <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Password\" required>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\r\n      </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n<!--Approved-->\r\n"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    //This component is using the userAuthentication method from the
    //user.service class so it need access to the UserService component.
    //Dependency injection is used here to do just that.
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoginError = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    //Request a token
    SignInComponent.prototype.OnSubmit = function (userEmail, password) {
        var _this = this;
        this.userService.userAuthentication(userEmail, password).subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            //Once the user logs in, go the the home route
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());

//Approved


/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**Approved**/"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"col s12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\" [pattern]=\"emailPattern\">\n      <label data-error=\"Invalid email!\">Email</label>\n    </div>\n    <div class=\"input-field col s6\">\n        <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\" required minlength=\"3\">\n        <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"input-field col s6\">\n          <input class=\"validate\" type=\"password\" name=\"ConfirmPassword\" #ConfirmPassword=\"ngModel\" [(ngModel)]=\"user.ConfirmPassword\" required minlength=\"3\">\n          <label [attr.data-error]=\"ConfirmPassword.errors!=null?(ConfirmPassword.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Confirm Password</label>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\n    </div>\n  </div>\n</form>\n\n<!--Approved-->"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            Email: '',
            Password: '',
            ConfirmPassword: ''
        };
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.userService.registerUser(form.value)
            .subscribe(function (data) {
            _this.resetForm(form);
            _this.toastr.success('User registration successful');
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());

//Approved


/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**Approved**/"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card grey lighten-2\">\n        <div class=\"card-tabs\">\n          <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n            <li class=\"tab\">\n              <!--When Sign In is triggered, it should use the /login route-->\n              <!--The /login route is defined in routes.ts file which is imported\n              in the app.module file\n              || The active is just for css on sign in tab-->\n\n              <a routerLink='/login' routerLinkActive='active'>Sign In</a>\n            </li>\n            <li class=\"tab\">\n              <a  routerLink='/signup' routerLinkActive='active'>Sign Up</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-content white\">\n          <div class=\"row\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Approved-->"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());

//Approved


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    rootUrl: 'http://18.218.238.212/NotifyWebApi', //Our local host: 'http://localhost:52739'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });
//Approved


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Revature\Project2-TLM_Notifiy\NotifyAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
