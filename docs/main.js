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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var tech_component_1 = __webpack_require__(/*! ./home/tech/tech.component */ "./src/app/home/tech/tech.component.ts");
var main_component_1 = __webpack_require__(/*! ./home/main/main.component */ "./src/app/home/main/main.component.ts");
var digit_component_1 = __webpack_require__(/*! ./home/digit/digit.component */ "./src/app/home/digit/digit.component.ts");
var currency_component_1 = __webpack_require__(/*! ./home/currency/currency.component */ "./src/app/home/currency/currency.component.ts");
var bite_component_1 = __webpack_require__(/*! ./home/bite/bite.component */ "./src/app/home/bite/bite.component.ts");
var not_found_component_1 = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var weight_component_1 = __webpack_require__(/*! ./home/weight/weight.component */ "./src/app/home/weight/weight.component.ts");
var essay_component_1 = __webpack_require__(/*! ./home/essay/essay.component */ "./src/app/home/essay/essay.component.ts");
var calculator_component_1 = __webpack_require__(/*! ./home/calculator/calculator.component */ "./src/app/home/calculator/calculator.component.ts");
var chatbot_component_1 = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
var todo_component_1 = __webpack_require__(/*! ./home/todo/todo.component */ "./src/app/home/todo/todo.component.ts");
var stock_component_1 = __webpack_require__(/*! ./home/stock/stock.component */ "./src/app/home/stock/stock.component.ts");
var routes = [
    {
        path: 'convertentries',
        component: tech_component_1.TechComponent
    },
    {
        path: 'landunits',
        component: main_component_1.MainComponent
    },
    {
        path: 'digit',
        component: digit_component_1.DigitComponent
    },
    {
        path: 'currency',
        component: currency_component_1.CurrencyComponent
    },
    {
        path: 'average',
        component: stock_component_1.StockComponent
    },
    {
        path: 'techunits',
        component: bite_component_1.BiteComponent
    },
    {
        path: 'temperature',
        loadChildren: function () { return Promise.resolve().then(function () { return __webpack_require__(/*! ./temperature/weather/weather.module */ "./src/app/temperature/weather/weather.module.ts"); }).then(function (m) { return m.WeatherModule; }); }
    },
    {
        path: 'weight',
        component: weight_component_1.WeightComponent
    },
    {
        path: 'essayWriter',
        component: essay_component_1.EssayComponent
    },
    {
        path: 'calculator',
        component: calculator_component_1.CalculatorComponent
    },
    {
        path: 'chatBot',
        component: chatbot_component_1.ChatbotComponent
    },
    {
        path: 'todoList',
        component: todo_component_1.TodoComponent
    },
    {
        path: '',
        redirectTo: '/convertentries',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { useHash: true }),
                common_1.CommonModule
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav [ngClass]=\"'parent-menu'\" id=\"navData\">\r\n  <ul>\r\n    <li>\r\n      <a routerLink=\"/convertentries\" routerLinkActive=\"active\">Text tools</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/landunits\" routerLinkActive=\"active\">Land measurements</a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink=\"/digit\" routerLinkActive=\"active\">Digits Converter</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/currency\" routerLinkActive=\"active\">currency converter</a>\r\n    </li>\r\n    <li><a routerLink=\"/techunits\" routerLinkActive=\"active\">Tech units</a></li>\r\n    <li>\r\n      <a routerLink=\"/temperature\" routerLinkActive=\"active\">Temperature</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a routerLink=\"/weight\" routerLinkActive=\"active\">Weight Convertor</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/calculator\" routerLinkActive=\"active\">Calculator</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/essayWriter\" routerLinkActive=\"active\">Essay writer</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/todoList\" routerLinkActive=\"active\">To do Notes</a>\r\n          </li>\r\n        <li>\r\n          <a routerLink=\"/chatBot\" routerLinkActive=\"active\">Contact</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/average\" routerLinkActive=\"active\">Averaging</a>\r\n            </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div [ngClass]=\"'parent-container'\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-menu ul {\n  background-color: #333;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n.parent-menu li {\n  float: left; }\n\n.parent-menu li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 15px 15px;\n  text-decoration: none; }\n\n.parent-menu li a:hover:not(.active) {\n  background-color: #111; }\n\n.parent-menu .active {\n  background-color: #4CAF50; }\n\n.parent-container {\n  padding-left: 10px; }\n\nbody {\n  margin: 0;\n  font-family: Arial; }\n\n.topnav {\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n\n.active {\n  background-color: #4CAF50;\n  color: white; }\n\n.topnav .icon {\n  display: none; }\n\n.dropdown {\n  float: left;\n  overflow: hidden; }\n\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n\n.topnav a:hover, .dropdown:hover .dropbtn {\n  background-color: #555;\n  color: white; }\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 30px; }\n\n.dfg {\n  color: wheat;\n  background-color: #333;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb1xcdW5pdHMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQjtFQUNwQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBS3RCO0VBQU0sU0FBUTtFQUFDLGtCQUFpQixFQUFBOztBQUVoQztFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDRDQUFBO0VBQ0EsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDZCxzQkFBc0I7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIFxyXG4ucGFyZW50LW1lbnUgdWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuICBcclxuLnBhcmVudC1tZW51IGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucGFyZW50LW1lbnUgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhcmVudC1tZW51IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHsgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG4ucGFyZW50LW1lbnUgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbn1cclxuXHJcbi5wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5ib2R5IHttYXJnaW46MDtmb250LWZhbWlseTpBcmlhbH1cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogU2V0IHRoZSBmaXhlZCBoZWlnaHQgb2YgdGhlIGZvb3RlciBoZXJlICovXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGZne1xyXG4gIGNvbG9yOiB3aGVhdDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.myFunction = function () {
        // var x = document.getElementById("myTopnav");
        // if (x.className === "topnav") {
        //   x.className += " responsive";
        // } else {
        //   x.className = "topnav";
        // }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var main_component_1 = __webpack_require__(/*! ./home/main/main.component */ "./src/app/home/main/main.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var toolbar_1 = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var tech_component_1 = __webpack_require__(/*! ./home/tech/tech.component */ "./src/app/home/tech/tech.component.ts");
var bite_component_1 = __webpack_require__(/*! ./home/bite/bite.component */ "./src/app/home/bite/bite.component.ts");
var digit_component_1 = __webpack_require__(/*! ./home/digit/digit.component */ "./src/app/home/digit/digit.component.ts");
var currency_component_1 = __webpack_require__(/*! ./home/currency/currency.component */ "./src/app/home/currency/currency.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_barcode_1 = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var not_found_component_1 = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var checkbox_1 = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var select_1 = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var weight_component_1 = __webpack_require__(/*! ./home/weight/weight.component */ "./src/app/home/weight/weight.component.ts");
var essay_component_1 = __webpack_require__(/*! ./home/essay/essay.component */ "./src/app/home/essay/essay.component.ts");
var calculator_component_1 = __webpack_require__(/*! ./home/calculator/calculator.component */ "./src/app/home/calculator/calculator.component.ts");
var chatbot_component_1 = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
var components_1 = __webpack_require__(/*! ./chatbot/components */ "./src/app/chatbot/components/index.ts");
var services_1 = __webpack_require__(/*! ./chatbot/services */ "./src/app/chatbot/services/index.ts");
var todo_component_1 = __webpack_require__(/*! ./home/todo/todo.component */ "./src/app/home/todo/todo.component.ts");
var search_pipe_1 = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
var stock_component_1 = __webpack_require__(/*! ./home/stock/stock.component */ "./src/app/home/stock/stock.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                tech_component_1.TechComponent,
                bite_component_1.BiteComponent,
                digit_component_1.DigitComponent,
                currency_component_1.CurrencyComponent,
                not_found_component_1.NotFoundComponent,
                weight_component_1.WeightComponent,
                essay_component_1.EssayComponent,
                calculator_component_1.CalculatorComponent,
                chatbot_component_1.ChatbotComponent,
                components_1.MessageListComponent,
                components_1.MessageFormComponent,
                components_1.MessageItemComponent,
                todo_component_1.TodoComponent,
                search_pipe_1.SearchPipe,
                stock_component_1.StockComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                ngx_barcode_1.NgxBarcodeModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                table_1.MatTableModule,
                select_1.MatSelectModule,
                checkbox_1.MatCheckboxModule
            ],
            providers: [
                services_1.DialogflowService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatform{\r\n    width: 600px;\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRmb3Jte1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div  class=\"chatform\">\r\n  <message-list [messages]=\"messages\"></message-list>\r\n  <message-form [message]=\"message\" [messages]=\"messages\"></message-form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var models_1 = __webpack_require__(/*! ./models */ "./src/app/chatbot/models/index.ts");
var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent() {
        this.message = new models_1.Message('', 'assets/images/user.png');
        this.messages = [
            new models_1.Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
        ];
    }
    ChatbotComponent.prototype.ngOnInit = function () {
    };
    ChatbotComponent = __decorate([
        core_1.Component({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.css */ "./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatbotComponent);
    return ChatbotComponent;
}());
exports.ChatbotComponent = ChatbotComponent;


/***/ }),

/***/ "./src/app/chatbot/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/chatbot/components/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./message-form/message-form.component */ "./src/app/chatbot/components/message-form/message-form.component.ts"));
__export(__webpack_require__(/*! ./message-list/message-list.component */ "./src/app/chatbot/components/message-list/message-list.component.ts"));
__export(__webpack_require__(/*! ./message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts"));


/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcontrol\">\r\n  <input type=\"text\" class=\"form-control chatinput\" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"message.content\"/>\r\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">Send</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatcontrol {\n  float: left;\n  width: 100%; }\n  .chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n  .chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtZm9ybS9EOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1mb3JtXFxtZXNzYWdlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBRmI7SUFLSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBUHBCO0lBV0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1mb3JtL21lc3NhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Y29udHJvbHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmNoYXRpbnB1dHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VuZGJ0bntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var models_1 = __webpack_require__(/*! ../../models */ "./src/app/chatbot/models/index.ts");
var services_1 = __webpack_require__(/*! ../../services */ "./src/app/chatbot/services/index.ts");
var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new models_1.Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp));
        });
        this.message = new models_1.Message('', 'assets/images/user.png');
    };
    __decorate([
        core_1.Input('message'),
        __metadata("design:type", models_1.Message)
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input('messages'),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        core_1.Component({
            selector: 'message-form',
            template: __webpack_require__(/*! ./message-form.component.html */ "./src/app/chatbot/components/message-form/message-form.component.html"),
            styles: [__webpack_require__(/*! ./message-form.component.scss */ "./src/app/chatbot/components/message-form/message-form.component.scss")]
        }),
        __metadata("design:paramtypes", [services_1.DialogflowService])
    ], MessageFormComponent);
    return MessageFormComponent;
}());
exports.MessageFormComponent = MessageFormComponent;


/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\r\n  <img [src]=\"message.avatar\" class=\"avatar\"/>\r\n  <div class=\"message\">\r\n    {{message.content}}\r\n  </div>\r\n  <div class=\"timeform\">\r\n    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">at {{message.timestamp | date : 'dd/MM/yyyy' }}</span>\r\n  </div>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n\n.timeform i {\n    margin-left: 20px; }\n\n.timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtaXRlbS9EOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1pdGVtXFxtZXNzYWdlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRmI7SUFLSSxpQkFBaUIsRUFBQTs7QUFMckI7SUFTSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1pdGVtL21lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRpbWVmb3JtIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC50aW1lc3RhbXB7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmF2YXRhcntcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var models_1 = __webpack_require__(/*! ../../models */ "./src/app/chatbot/models/index.ts");
var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('message'),
        __metadata("design:type", models_1.Message)
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        core_1.Component({
            selector: 'message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/chatbot/components/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.scss */ "./src/app/chatbot/components/message-item/message-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());
exports.MessageItemComponent = MessageItemComponent;


/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatlist\" #chatlist>\r\n  <ul class=\"list-group\">\r\n    <message-item *ngFor=\"let msg of messages\" [message]=\"msg\"></message-item>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtbGlzdC9EOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1saXN0XFxtZXNzYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0bGlzdHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var message_item_component_1 = __webpack_require__(/*! ../message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts");
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chatItems.changes.subscribe(function (elements) {
            // console.log('messsage list changed: ' + this.messages.length);
            _this.scrollToBottom();
        });
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Could not find the "chatList" element.');
        }
    };
    MessageListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('messages'),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        core_1.ViewChild('chatlist', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], MessageListComponent.prototype, "chatList", void 0);
    __decorate([
        core_1.ViewChildren(message_item_component_1.MessageItemComponent, { read: core_1.ElementRef }),
        __metadata("design:type", core_1.QueryList)
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/chatbot/components/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.scss */ "./src/app/chatbot/components/message-list/message-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;


/***/ }),

/***/ "./src/app/chatbot/models/index.ts":
/*!*****************************************!*\
  !*** ./src/app/chatbot/models/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./message */ "./src/app/chatbot/models/message.ts"));


/***/ }),

/***/ "./src/app/chatbot/models/message.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/models/message.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/app/chatbot/services/dialogflow.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chatbot/services/dialogflow.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var environment_1 = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var DialogflowService = /** @class */ (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
        this.token = environment_1.environment.token;
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        // const headers: HttpHeaders = new HttpHeaders();
        // headers.append('Authorization', `Bearer ${this.token}`);
        var headers = { 'Authorization': "Bearer " + this.token };
        return this.http.post("" + this.baseURL, data, { headers: headers }).pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    DialogflowService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DialogflowService);
    return DialogflowService;
}());
exports.DialogflowService = DialogflowService;


/***/ }),

/***/ "./src/app/chatbot/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/services/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dialogflow.service */ "./src/app/chatbot/services/dialogflow.service.ts"));


/***/ }),

/***/ "./src/app/home/bite/bite.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/bite/bite.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"terab\" (ngModelChange)=\"teraChanged($event)\" placeholder=\"Terabyte\"\r\n        formControlName=\"terab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"gigab\" (ngModelChange)=\"gigaChanged($event)\" placeholder=\"Gigabyte\"\r\n        formControlName=\"gigab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"megab\" (ngModelChange)=\"magaChanged($event)\" placeholder=\"Megabyte\"\r\n        formControlName=\"megab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"kilob\" (ngModelChange)=\"kiloChanged($event)\" placeholder=\"Kilobyte\"\r\n        formControlName=\"kilob\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"byt\" (ngModelChange)=\"bytChanged($event)\" placeholder=\"Byte\"\r\n        formControlName=\"byt\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"bit\" (ngModelChange)=\"bitChanged($event)\" placeholder=\"Bit\"\r\n        formControlName=\"bit\">\r\n    </mat-form-field>\r\n  </form>\r\n\r\n\r\n<div class=\"tbl\">\r\n  <table id=\"customers\">\r\n    <tr>\r\n      <th>name</th>\r\n      <th>weight</th>\r\n      <th>symbol</th>\r\n    </tr>\r\n    <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n      <td>{{i.name}}</td>\r\n      <td>{{i.weight}}</td>\r\n      <td>{{i.symbol}}</td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/home/bite/bite.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/bite/bite.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYml0ZS9iaXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/bite/bite.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/bite/bite.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var BiteComponent = /** @class */ (function () {
    function BiteComponent() {
        var _this = this;
        this.b = 0;
        this.h = 0;
        this.o = 0;
        this.i = 0;
        this.p = 0;
        this.ELEMENT_DATA = [
            { position: 1, name: 'bit', weight: '1 bit', symbol: 'b' },
            { position: 2, name: 'byte', weight: '8 bits', symbol: 'B' },
            { position: 3, name: 'Kilobyte', weight: '1024 bytes', symbol: 'KB' },
            { position: 4, name: 'Megabyte', weight: '1024 kilobytes', symbol: 'MB' },
            { position: 5, name: 'Gigabyte', weight: '1024 megabytes', symbol: 'GB' },
            { position: 6, name: 'Terabyte', weight: '1024 gigabytes', symbol: 'TB' },
        ];
        this.teraChanged = function (newvalue) {
            if (newvalue !== '') {
                _this.form.patchValue({ gigab: parseFloat(newvalue) * 1024 });
                _this.form.patchValue({ megab: parseFloat(newvalue) * 1048576 });
                _this.form.patchValue({ kilob: parseFloat(newvalue) * 1073741824 });
                _this.form.patchValue({ byt: parseFloat(newvalue) * 1099511627776 });
                _this.form.patchValue({ bit: parseFloat(newvalue) * 8.796093e+12 });
            }
            else {
                _this.form.patchValue({ gigab: '' });
                _this.form.patchValue({ megab: '' });
                _this.form.patchValue({ kilob: '' });
                _this.form.patchValue({ byt: '' });
                _this.form.patchValue({ bit: '' });
            }
        };
        this.gigaChanged = function (newvalue) {
            _this.b = _this.b + 1;
            if (_this.b === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ terab: parseFloat(newvalue) / 1024 });
                }
                else {
                    _this.form.patchValue({ terab: '' });
                }
                _this.b = 0;
            }
        };
        this.magaChanged = function (newvalue) {
            _this.h = _this.h + 1;
            if (_this.h === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ terab: parseFloat(newvalue) / 1048576 });
                }
                else {
                    _this.form.patchValue({ terab: '' });
                }
                _this.h = 0;
            }
        };
        this.kiloChanged = function (newvalue) {
            _this.o = _this.o + 1;
            if (_this.o === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ terab: parseFloat(newvalue) / 1073741824 });
                }
                else {
                    _this.form.patchValue({ terab: '' });
                }
                _this.o = 0;
            }
        };
        this.bytChanged = function (newvalue) {
            _this.i = _this.i + 1;
            if (_this.i === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ terab: parseFloat(newvalue) / 1099511627776 });
                }
                else {
                    _this.form.patchValue({ terab: '' });
                }
                _this.i = 0;
            }
        };
        this.bitChanged = function (newvalue) {
            _this.p = _this.p + 1;
            if (_this.p === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ terab: parseFloat(newvalue) / 8.796093e+12 });
                }
                else {
                    _this.form.patchValue({ terab: '' });
                }
                _this.p = 0;
            }
        };
    }
    BiteComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            gigab: new forms_1.FormControl(''),
            terab: new forms_1.FormControl(''),
            megab: new forms_1.FormControl(''),
            kilob: new forms_1.FormControl(''),
            byt: new forms_1.FormControl(''),
            bit: new forms_1.FormControl('')
        });
    };
    BiteComponent = __decorate([
        core_1.Component({
            selector: 'app-bite',
            template: __webpack_require__(/*! ./bite.component.html */ "./src/app/home/bite/bite.component.html"),
            styles: [__webpack_require__(/*! ./bite.component.scss */ "./src/app/home/bite/bite.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BiteComponent);
    return BiteComponent;
}());
exports.BiteComponent = BiteComponent;


/***/ }),

/***/ "./src/app/home/calculator/calculator.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/calculator/calculator.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n  \r\n  body {\r\n    background: #EAEBEC;\r\n  }\r\n  \r\n  .container {\r\n    width: 400px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .calc-body {\r\n    width: 275px;\r\n    margin: auto;\r\n    min-height: 400px;\r\n    border: solid 1px #3A4655;\r\n    box-shadow: 0 8px 50px -7px black;\r\n  }\r\n  \r\n  .calc-screen {\r\n    background: #3A4655;\r\n    width: 100%;\r\n    height: 150px;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .calc-operation {\r\n    text-align: right;\r\n    color: #727B86;\r\n    font-size: 21px;\r\n    padding-bottom: 10px;\r\n    border-bottom: dotted 1px;\r\n  }\r\n  \r\n  .calc-typed {\r\n    margin-top: 20px;\r\n    font-size: 45px;\r\n    text-align: right;\r\n    color: #fff;\r\n  }\r\n  \r\n  .calc-button-row {\r\n    width: 100%;\r\n    background: #3C4857;\r\n  }\r\n  \r\n  .button {\r\n    width: 25%;\r\n    background: #425062;\r\n    color: #fff;\r\n    padding: 20px;\r\n    display: inline-block;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    margin-right: -4px;\r\n    border-right: solid 2px #3C4857;\r\n    border-bottom: solid 2px #3C4857;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n  \r\n  .button.l {\r\n    color: #AEB3BA;\r\n    background: #404D5E;\r\n  }\r\n  \r\n  .button.c {\r\n    color: #D95D4E;\r\n    background: #404D5E;\r\n  }\r\n  \r\n  .button:hover {\r\n    background: #E0B612;\r\n    transform: rotate(5deg);\r\n  }\r\n  \r\n  .button.c:hover,\r\n  .button.l:hover {\r\n    background: #E0B612;\r\n    color: #fff;\r\n  }\r\n  \r\n  .blink-me {\r\n    color: #E0B612;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNFQUVCRUM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1ib2R5IHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzNBNDY1NTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDUwcHggLTdweCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmNhbGMtc2NyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQTQ2NTU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FsYy1vcGVyYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzcyN0I4NjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDFweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhbGMtdHlwZWQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxjLWJ1dHRvbi1yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0M0ODU3O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDI1MDYyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTRweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4ICMzQzQ4NTc7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzNDNDg1NztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLmwge1xyXG4gICAgY29sb3I6ICNBRUIzQkE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0RDVFO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLmMge1xyXG4gICAgY29sb3I6ICNEOTVENEU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0RDVFO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFMEI2MTI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi5jOmhvdmVyLFxyXG4gIC5idXR0b24ubDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBCNjEyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibGluay1tZSB7XHJcbiAgICBjb2xvcjogI0UwQjYxMjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/calculator/calculator.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/calculator/calculator.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"calc-body\">\r\n    <div class=\"calc-screen\">\r\n      <div class=\"calc-operation\" *ngFor=\"let i of total\">{{i}}\t{{previous_operator}}\r\n        \r\n      </div>\r\n      <div class=\"calc-typed\">{{ result }}<span class=\"blink-me\"></span></div>\r\n    </div>\r\n    <div class=\"calc-button-row\">\r\n      <div class=\"button c\" (click)=\"clearResult()\">C</div>\r\n      <div class=\"button l\">≠</div>\r\n      <div class=\"button l\" (click)=\"calculate('%')\">%</div>\r\n      <div class=\"button l\" (click)=\"calculate('/')\">/</div>\r\n    </div>\r\n    <div class=\"calc-button-row\">\r\n      <div class=\"button\" (click)=\"addToCalculation('7')\">7</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('8')\">8</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('9')\">9</div>\r\n      <div class=\"button l\">x</div>\r\n    </div>\r\n    <div class=\"calc-button-row\">\r\n      <div class=\"button\" (click)=\"addToCalculation('4')\">4</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('5')\">5</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('6')\">6</div>\r\n      <div class=\"button l\" (click)=\"calculate('-')\">−</div>\r\n    </div>\r\n    <div class=\"calc-button-row\">\r\n      <div class=\"button\" (click)=\"addToCalculation('1')\">1</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('2')\">2</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('3')\">3</div>\r\n      <div class=\"button l\" (click)=\"calculate('+')\">+</div>\r\n    </div>\r\n    <div class=\"calc-button-row\">\r\n      <div class=\"button\" (click)=\"addToCalculation('.')\">.</div>\r\n      <div class=\"button\" (click)=\"addToCalculation('0')\">0</div>\r\n      <div class=\"button\">\r\n        <</div>\r\n          <div class=\"button l\" (click)=\"calculate('=')\">=</div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/calculator/calculator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/calculator/calculator.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.result = '';
        this.total = [];
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.addToCalculation = function (value) {
        if (this.clear == true) {
            this.result = '';
            this.clear = false;
        }
        if (value == '.') {
            if (this.decimal == true) {
                return false;
            }
            this.decimal = true;
        }
        this.result += value;
    };
    CalculatorComponent.prototype.clearResult = function () {
        this.result = '';
        this.total = [];
        this.previous_operator = '';
    };
    CalculatorComponent.prototype.calculate = function (operator) {
        this.firstNo = this.result;
        this.total.push(this.result);
        this.result = '';
        if (this.total.length == 2) {
            var a = Number(this.total[0]);
            var b = Number(this.total[1]);
            if (this.previous_operator == '+') {
                var total = a + b;
            }
            else if (this.previous_operator == '-') {
                var total = a - b;
            }
            else if (this.previous_operator == '*') {
                var total = a * b;
            }
            else {
                var total = a / b;
            }
            var answer = total;
            this.total = [];
            this.total.push(answer);
            this.result = total.toString();
            this.clear = true;
        }
        else {
            this.clear = false;
        }
        this.decimal = false;
        this.previous_operator = operator;
        this.operatr = operator;
    };
    CalculatorComponent.prototype.getTotal = function () {
        var a = Number(this.total[0]);
        var b = Number(this.result);
        this.secondNo = b;
        if (this.previous_operator == '+') {
            var total = a + b;
        }
        else if (this.previous_operator == '-') {
            var total = a - b;
        }
        else if (this.previous_operator == '*') {
            var total = a * b;
        }
        else {
            var total = a / b;
        }
        if (isNaN(total)) {
            return false;
        }
        this.result = total.toString();
        this.total = [];
        this.clear = true;
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/home/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/home/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;


/***/ }),

/***/ "./src/app/home/currency/currency.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/currency/currency.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"dollar\" (ngModelChange)=\"dollarChanged($event)\" placeholder=\"USD - US dollar\"\r\n       [(ngModel)]=\"dollar\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"euro\" (ngModelChange)=\"euroChanged( $event)\" placeholder=\"Euro (EUR)\"\r\n       [(ngModel)]=\"euro\">\r\n  </mat-form-field>\r\n  <!-- great british pond -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"pond\" (ngModelChange)=\"pondChanged( $event)\" placeholder=\"Pound sterling (GBP) Symbol- £\"\r\n       [(ngModel)]=\"pound\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hec\" (ngModelChange)=\"yenChanged( $event)\" placeholder=\"Japanese yen (JPY)\"\r\n       [(ngModel)]=\"japanYen\">\r\n  </mat-form-field>\r\n\r\n    <!-- krone is the official currency of Denmark -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"krone\" (ngModelChange)=\"kroneChanged( $event)\" placeholder=\"Danish krone (DKK)\"\r\n       [(ngModel)]=\"denKrone\">\r\n  </mat-form-field>\r\n  <!-- The lev is the currency of Bulgaria. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"len\" (ngModelChange)=\"bulgChanged( $event)\" placeholder=\"Bulgarian lev (BGN)\"\r\n       [(ngModel)]=\"levBulgria\">\r\n  </mat-form-field>\r\n  <!-- forint (sign: Ft; code: HUF) is the currency of Hungary. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"forint\" (ngModelChange)=\"hungaryChanged( $event)\" placeholder=\"Hungarian forint (HUF)\"\r\n       [(ngModel)]=\"forintHungary\">\r\n  </mat-form-field>\r\n  <!-- The koruna (sign: Kč; code: CZK) is the currency of the Czech Republic -->\r\n  <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"Czech\" (ngModelChange)=\"czechChanged( $event)\" placeholder=\"Czech koruna (CZK)\"\r\n         [(ngModel)]=\"czechRepublc\">\r\n    </mat-form-field>\r\n\r\n    <!-- Zloty can be abbreviated to zl though PLN, the international symbol of the Polish currency, is widely used in Poland as well. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"poland\" (ngModelChange)=\"polandChanged( $event)\" placeholder=\"Polish zloty (PLN)\"\r\n       [(ngModel)]=\"poland\">\r\n  </mat-form-field>\r\n  <!-- The krona is the official currency of Sweden -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kronsym\" (ngModelChange)=\"swedenChanged( $event)\" placeholder=\"Swedish krona (SEK)\"\r\n       [(ngModel)]=\"swedan\">\r\n  </mat-form-field>\r\n  <!-- The franc is the currency and legal tender of Switzerland and Liechtenstein -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"franc\" (ngModelChange)=\"swissChanged( $event)\" placeholder=\"Swiss franc (CHF)\"\r\n       [(ngModel)]=\"swiss\">\r\n  </mat-form-field>\r\n  <!-- The króna (sign: kr; code: ISK) is the currency of Iceland. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"ice\" (ngModelChange)=\"icelndChanged( $event)\" placeholder=\"Icelandic krona (ISK)\"\r\n       [(ngModel)]=\"icelnd\">\r\n  </mat-form-field>.\r\n\r\n    <!-- The krone [ˈkruːnə] (sign: kr; code: NOK), plural kroner, is the currency of Norway -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"norwy\" (ngModelChange)=\"norwayChanged( $event)\" placeholder=\"Norwegian krone (NOK)\"\r\n       [(ngModel)]=\"norway\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"aust\" (ngModelChange)=\"ausChanged( $event)\" placeholder=\"Australian dollar (AUD)\"\r\n       [(ngModel)]=\"australian\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"canada\" (ngModelChange)=\"conadaChanged( $event)\" placeholder=\"Canadian dollar (CAD)\"\r\n       [(ngModel)]=\"canada\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kong\" (ngModelChange)=\"hongChanged( $event)\" placeholder=\"Hong Kong dollar (HKD)\"\r\n       [(ngModel)]=\"hongkong\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kor\" (ngModelChange)=\"koreanChanged( $event)\" placeholder=\"South Korean won (KRW)\"\r\n       [(ngModel)]=\"korean\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"newzlnd\" (ngModelChange)=\"newzlndChanged( $event)\" placeholder=\"New Zealand dollar (NZD)\"\r\n       [(ngModel)]=\"newzlnd\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sing\" (ngModelChange)=\"singChanged( $event)\" placeholder=\"Singapore dollar (SGD)\"\r\n       [(ngModel)]=\"singapore\">\r\n  </mat-form-field>\r\n  <!-- The rand (sign: R; code: ZAR) is the currency of South Africa.  -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"afri\" (ngModelChange)=\"africnChanged( $event)\" placeholder=\"South African rand (ZAR)\"\r\n       [(ngModel)]=\"african\">\r\n  </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"rupee\" (ngModelChange)=\"INDChanged( $event)\" placeholder=\"Indian Rupee (INR)\"\r\n         [(ngModel)]=\"indian\">\r\n    </mat-form-field>\r\n    <!-- currency of Romania -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"roman\" (ngModelChange)=\"romaniaChanged( $event)\" placeholder=\"Romanian Leu (RON)\"\r\n         [(ngModel)]=\"romaniac\">\r\n    </mat-form-field>\r\n    <!-- currency of Croatia -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"cro\" (ngModelChange)=\"crotiaChanged( $event)\" placeholder=\"Croatian Kuna(HRK)\"\r\n         [(ngModel)]=\"crotia\">\r\n    </mat-form-field>\r\n    <!-- The rand (sign: R; code: ZAR) is the currency of South Africa.  -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"russ\" (ngModelChange)=\"russianChanged( $event)\" placeholder=\"Russian Ruble (RUB)\"\r\n         [(ngModel)]=\"russian\">\r\n    </mat-form-field>\r\n\r\n\r\n<div class=\"tbl\">\r\n    <table id=\"customers\">\r\n       <tr>\r\n         <th>name</th>\r\n         <th>symbol</th>\r\n       </tr>\r\n       <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n         <td>{{i.name}}</td>\r\n         <td>{{i.symbol}}</td>\r\n       </tr>\r\n     </table>\r\n   </div>\r\n"

/***/ }),

/***/ "./src/app/home/currency/currency.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/currency/currency.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY3VycmVuY3kvY3VycmVuY3kuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/currency/currency.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/currency/currency.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var CurrencyComponent = /** @class */ (function () {
    // url = 'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=4efbf155fbf9ab447a05';
    // http://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=ultra
    function CurrencyComponent(http) {
        this.http = http;
        this.ELEMENT_DATA = [
            { position: 1, name: 'USD', symbol: '$' },
            { position: 2, name: 'EUR', symbol: '€' },
            { position: 3, name: 'GBP', symbol: '£' },
            { position: 4, name: 'JPY', symbol: '¥' },
            { position: 5, name: 'DKK', symbol: 'Kr.' },
            { position: 6, name: 'BGN', symbol: 'Лв.' },
            { position: 1, name: 'HUF', symbol: 'Ft' },
            { position: 2, name: 'CZK', symbol: 'Kč' },
            { position: 3, name: 'PLN', symbol: 'zł' },
            { position: 4, name: 'SEK', symbol: 'kr' },
            { position: 5, name: 'CHF', symbol: 'Fr.' },
            { position: 6, name: 'ISK', symbol: 'Íkr' },
            { position: 1, name: 'NOK', symbol: 'kr' },
            { position: 2, name: 'AUD', symbol: '$' },
            { position: 3, name: 'CAD', symbol: '$' },
            { position: 4, name: 'HKD', symbol: '$' },
            { position: 5, name: 'KRW', symbol: '₩' },
            { position: 6, name: 'NZD', symbol: '$' },
            { position: 1, name: 'SGD', symbol: '$' },
            { position: 2, name: 'ZAR', symbol: 'R' },
            { position: 3, name: 'INR', symbol: '₹' },
            { position: 4, name: 'RON', symbol: 'lei' },
            { position: 5, name: 'HRK', symbol: 'kn' },
            { position: 6, name: 'RUB', symbol: '₽' },
            { position: 6, name: 'TRY', symbol: '₺' },
            { position: 6, name: 'CNY', symbol: '元/¥' },
            { position: 6, name: 'IDR', symbol: 'Rp' },
            { position: 6, name: 'MXN', symbol: '$' },
            { position: 6, name: 'MYR', symbol: 'RM' },
            { position: 6, name: 'PHP', symbol: '₱' },
            { position: 6, name: 'THB', symbol: '฿' },
        ];
    }
    CurrencyComponent.prototype.requestDataFromMultipleSources = function () {
        var response1 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response2 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response3 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_JPY&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response4 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_DKK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response5 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_BGN&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response6 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_HUF&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response7 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_CZK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response8 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_PLN&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response9 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_SEK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response10 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_CHF&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response11 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_ISK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response12 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_NOK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response13 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response14 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_CAD&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response15 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_HKD&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response16 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_KRW&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response17 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_NZD&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response18 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_SGD&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response19 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_ZAR&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response20 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response21 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_RON&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response22 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_HRK&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        var response23 = this.http.get('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=4efbf155fbf9ab447a05');
        return (rxjs_1.forkJoin([response1, response2, response3, response4, response5, response6, response7,
            response8, response9, response10, response11, response12, response13, response14,
            response15, response16, response17, response18, response19, response20, response21,
            response22, response23]));
    };
    CurrencyComponent.prototype.ngOnInit = function () {
        // this.requestDataFromMultipleSources().subscribe(responseList => {
        //   this.responseData1 = responseList[0];
        //   this.responseData2 = responseList[1];
        //   this.responseData3 = responseList[2];
        //   this.responseData4 = responseList[3];
        //   this.responseData5 = responseList[4];
        //   this.responseData6 = responseList[5];
        //   this.responseData7 = responseList[6];
        //   this.responseData8 = responseList[7];
        //   this.responseData9 = responseList[8];
        //   this.responseData10 = responseList[9];
        //   this.responseData11 = responseList[10];
        //   this.responseData12 = responseList[11];
        //   this.responseData13 = responseList[12];
        //   this.responseData14 = responseList[13];
        //   this.responseData15 = responseList[14];
        //   this.responseData16 = responseList[15];
        //   this.responseData17 = responseList[16];
        //   this.responseData18 = responseList[17];
        //   this.responseData19 = responseList[18];
        //   this.responseData20 = responseList[19];
        //   this.responseData21 = responseList[20];
        //   this.responseData22 = responseList[21];
        //   this.responseData23 = responseList[22];
        // });
    };
    CurrencyComponent.prototype.dollarChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.euro = (parseFloat(tempValue) * this.responseData1.USD_EUR);
        this.pound = (parseFloat(tempValue) * this.responseData2.USD_GBP);
        this.japanYen = (parseFloat(tempValue) * this.responseData3.USD_JPY);
        this.denKrone = (parseFloat(tempValue) * this.responseData4.USD_DKK);
        this.levBulgria = (parseFloat(tempValue) * this.responseData5.USD_BGN);
        this.forintHungary = (parseFloat(tempValue) * this.responseData6.USD_HUF);
        this.czechRepublc = (parseFloat(tempValue) * this.responseData7.USD_CZK);
        this.poland = (parseFloat(tempValue) * this.responseData8.USD_PLN);
        this.swedan = (parseFloat(tempValue) * this.responseData9.USD_SEK);
        this.swiss = (parseFloat(tempValue) * this.responseData10.USD_CHF);
        this.icelnd = (parseFloat(tempValue) * this.responseData11.USD_ISK);
        this.norway = (parseFloat(tempValue) * this.responseData12.USD_NOK);
        this.australian = (parseFloat(tempValue) * this.responseData13.USD_AUD);
        this.canada = (parseFloat(tempValue) * this.responseData14.USD_CAD);
        this.hongkong = (parseFloat(tempValue) * this.responseData15.USD_HKD);
        this.korean = (parseFloat(tempValue) * this.responseData16.USD_KRW);
        this.newzlnd = (parseFloat(tempValue) * this.responseData17.USD_NZD);
        this.singapore = (parseFloat(tempValue) * this.responseData18.USD_SGD);
        this.african = (parseFloat(tempValue) * this.responseData19.USD_ZAR);
        this.indian = (parseFloat(tempValue) * this.responseData20.USD_INR);
        this.romaniac = (parseFloat(tempValue) * this.responseData21.USD_RON);
        this.crotia = (parseFloat(tempValue) * this.responseData22.USD_HRK);
        this.russian = (parseFloat(tempValue) * this.responseData23.USD_RUB);
    };
    CurrencyComponent.prototype.euroChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData1.USD_EUR);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.pondChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData2.USD_GBP);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.yenChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData3.USD_JPY);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.kroneChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData4.USD_DKK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.bulgChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData5.USD_BGN);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.hungaryChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData6.USD_HUF);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.czechChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData7.USD_CZK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.polandChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData8.USD_PLN);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.swedenChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData9.USD_SEK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.swissChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData10.USD_CHF);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.icelndChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData11.USD_ISK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.norwayChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData12.USD_NOK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.ausChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData13.USD_AUD);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.conadaChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData14.USD_CAD);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.hongChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData15.USD_HKD);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.koreanChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData16.USD_KRW);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.newzlndChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData17.USD_NZD);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.singChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData18.USD_SGD);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.africnChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData19.USD_ZAR);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.INDChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData20.USD_INR);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.romaniaChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData21.USD_RON);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.crotiaChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData22.USD_HRK);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent.prototype.russianChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.dollar = (parseFloat(tempValue) / this.responseData23.USD_RUB);
        this.dollarChanged(this.dollar);
    };
    CurrencyComponent = __decorate([
        core_1.Component({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/home/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/home/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CurrencyComponent);
    return CurrencyComponent;
}());
exports.CurrencyComponent = CurrencyComponent;


/***/ }),

/***/ "./src/app/home/digit/digit.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/digit/digit.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t\t<form [formGroup]=\"form\">\r\n        <h1>Base converter</h1>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"decimal\" (ngModelChange)=\"decimalChanged($event)\" placeholder=\"decimal\"\r\n              formControlName=\"decimal\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"binary\" (ngModelChange)=\"binaryChanged($event)\" placeholder=\"binary\"\r\n              formControlName=\"binary\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"octal\" (ngModelChange)=\"octalChanged($event)\" placeholder=\"octal\"\r\n              formControlName=\"octal\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"hexa\" (ngModelChange)=\"hexaChanged($event)\" placeholder=\"hexa\"\r\n              formControlName=\"hexa\">\r\n          </mat-form-field>\r\n     </form>\r\n\r\n<div class=\"tbl\">\r\n     <table id=\"customers\">\r\n        <tr>\r\n          <th>name</th>\r\n          <th>weight</th>\r\n          <th>symbol</th>\r\n        </tr>\r\n        <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n          <td>{{i.name}}</td>\r\n          <td>{{i.weight}}</td>\r\n          <td>{{i.symbol}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>"

/***/ }),

/***/ "./src/app/home/digit/digit.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/digit/digit.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGlnaXQvZGlnaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/digit/digit.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/digit/digit.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var DigitComponent = /** @class */ (function () {
    function DigitComponent() {
        var _this = this;
        this.b = 0;
        this.h = 0;
        this.o = 0;
        this.ELEMENT_DATA = [
            { position: 1, name: 'binary', weight: '0,1', symbol: '2' },
            { position: 2, name: 'octal', weight: '0,1,2,3,4,5,6,7', symbol: '8' },
            { position: 3, name: 'decimal', weight: '0,1,2,3,4,5,6,7,8,9', symbol: '10' },
            { position: 4, name: 'Hexadecimal', weight: '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F', symbol: '16' },
        ];
        this.decimalChanged = function (newvalue) {
            if (newvalue !== '') {
                _this.form.patchValue({ binary: parseInt(newvalue, 10).toString(2) });
                _this.form.patchValue({ octal: parseInt(newvalue, 10).toString(8) });
                _this.form.patchValue({ hexa: parseInt(newvalue, 10).toString(16) });
            }
            else {
                _this.form.patchValue({ binary: '' });
                _this.form.patchValue({ octal: '' });
                _this.form.patchValue({ hexa: '' });
            }
        };
        this.binaryChanged = function (newvalue) {
            _this.b = _this.b + 1;
            if (_this.b === 1) {
                if (newvalue !== '') {
                    _this.form.patchValue({ decimal: parseInt(newvalue, 2).toString(10) });
                }
                else {
                    _this.form.patchValue({ decimal: '' });
                }
                _this.b = 0;
            }
        };
        this.octalChanged = function (newvalue) {
            this.o = this.o + 1;
            if (this.o === 1) {
                if (newvalue !== '') {
                    this.form.patchValue({ decimal: parseInt(newvalue, 8).toString(10) });
                }
                else {
                    this.form.patchValue({ decimal: '' });
                }
                this.o = 0;
            }
        };
        this.hexaChanged = function (newvalue) {
            this.h = this.h + 1;
            if (this.h === 1) {
                if (newvalue !== '') {
                    this.form.patchValue({ decimal: parseInt(newvalue, 16).toString(10) });
                }
                else {
                    this.form.patchValue({ decimal: '' });
                }
                this.h = 0;
            }
        };
    }
    DigitComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            decimal: new forms_1.FormControl(''),
            binary: new forms_1.FormControl(''),
            octal: new forms_1.FormControl(''),
            hexa: new forms_1.FormControl('')
        });
    };
    DigitComponent = __decorate([
        core_1.Component({
            selector: 'app-digit',
            template: __webpack_require__(/*! ./digit.component.html */ "./src/app/home/digit/digit.component.html"),
            styles: [__webpack_require__(/*! ./digit.component.scss */ "./src/app/home/digit/digit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DigitComponent);
    return DigitComponent;
}());
exports.DigitComponent = DigitComponent;


/***/ }),

/***/ "./src/app/home/essay/essay.component.css":
/*!************************************************!*\
  !*** ./src/app/home/essay/essay.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXNzYXkvZXNzYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/essay/essay.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/essay/essay.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-head\">\r\n  <div>\r\n    <span>  Directions</span>\r\n      Read the question below. You have 30 minutes to\r\n      plan, write, and revise your essay. Typically an\r\n      effective response will contain a minimum of 300\r\n      words\r\n  </div>\r\n  <div>\r\n     <span> Question</span>\r\n      Question: Do you agree or disagree with the following\r\n      statement? Always telling the truth is the most important\r\n      consideration in any relationship between people. Use\r\n      specific reasons and examples to support your answer\r\n  </div>\r\n  <div>\r\n    <div>\r\n      <button>Cut</button>\r\n      <button>Paste</button>\r\n      <button>Undo</button>\r\n<span>Word count</span>\r\n<span>5</span>\r\n<button>hide</button>\r\n    </div>\r\n    <div></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/essay/essay.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/essay/essay.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var EssayComponent = /** @class */ (function () {
    function EssayComponent() {
    }
    EssayComponent.prototype.ngOnInit = function () {
    };
    EssayComponent = __decorate([
        core_1.Component({
            selector: 'app-essay',
            template: __webpack_require__(/*! ./essay.component.html */ "./src/app/home/essay/essay.component.html"),
            styles: [__webpack_require__(/*! ./essay.component.css */ "./src/app/home/essay/essay.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EssayComponent);
    return EssayComponent;
}());
exports.EssayComponent = EssayComponent;


/***/ }),

/***/ "./src/app/home/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"km\" (ngModelChange)=\"kmChanged($event)\" \r\n    placeholder=\"kilometer\" [(ngModel)]=\"kiloMeter\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput  type=\"text\" name=\"m\" (ngModelChange)=\"mtrChanged($event)\" \r\n    placeholder=\"meter\" [(ngModel)]=\"meter\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"cm\" (ngModelChange)=\"cmChanged($event)\" \r\n    placeholder=\"centi meter\" [(ngModel)]=\"centiMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"mm\" (ngModelChange)=\"mmChanged($event)\" \r\n    placeholder=\"mili meter\" [(ngModel)]=\"miliMetr\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"dm\" (ngModelChange)=\"decaChanged($event)\" \r\n    placeholder=\"Decimetre\"  [(ngModel)]=\"decaMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"um\" (ngModelChange)=\"microChanged($event)\" \r\n    placeholder=\"micro meter\"  [(ngModel)]=\"microMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"nm\" (ngModelChange)=\"nanoChanged($event)\" \r\n    placeholder=\"nano meter\"  [(ngModel)]=\"nanoMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"mile\" (ngModelChange)=\"mileChanged($event)\" \r\n    placeholder=\"mile\"  [(ngModel)]=\"mile\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"yd\" (ngModelChange)=\"yardChanged($event)\" \r\n    placeholder=\"yard\"  [(ngModel)]=\"yard\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"foot\" (ngModelChange)=\"footChanged($event)\" \r\n    placeholder=\"foot\"  [(ngModel)]=\"foot\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"inch\" (ngModelChange)=\"inchChanged($event)\" \r\n    placeholder=\"inch\"  [(ngModel)]=\"inch\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"gj\"  \r\n    placeholder=\"Guz\"  [(ngModel)]=\"gajj\">\r\n  </mat-form-field>\r\n\r\n\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sq.km\" (ngModelChange)=\"sqkmChanged($event)\" \r\n    placeholder=\"sq. km\"  [(ngModel)]=\"sqkilometer\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqm\" (ngModelChange)=\"sqmChanged($event)\" \r\n    placeholder=\"square meter\"  [(ngModel)]=\"sqmetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqmile\" (ngModelChange)=\"sqmileChanged($event)\" \r\n    placeholder=\"square mile\"  [(ngModel)]=\"sqmile\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqyd\" (ngModelChange)=\"sqydChanged($event)\" \r\n    placeholder=\"Gaj or Sqaure Yard \"  [(ngModel)]=\"sqyard\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"cm\" (ngModelChange)=\"sqfootChanged($event)\" \r\n    placeholder=\"square foot\"  [(ngModel)]=\"sqft\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqinch\" (ngModelChange)=\"sqinchChanged($event)\" \r\n    placeholder=\"square inch\"  [(ngModel)]=\"sqinch\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"acre\" (ngModelChange)=\"acreChanged($event)\" \r\n    placeholder=\"acres\"  [(ngModel)]=\"acre\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hec\" (ngModelChange)=\"hectareChanged($event)\" \r\n    placeholder=\"hectare\"  [(ngModel)]=\"hectare\">\r\n  </mat-form-field>\r\n\r\n\r\n<div class=\"tbl\">\r\n    <table id=\"customers\">\r\n       <tr>\r\n         <th>name</th>\r\n         <th>weight</th>\r\n         <th>symbol</th>\r\n       </tr>\r\n       <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n         <td>{{i.name}}</td>\r\n         <td>{{i.weight}}</td>\r\n         <td>{{i.symbol}}</td>\r\n       </tr>\r\n     </table>\r\n   </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/main/main.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divide {\n  float: left;\n  width: 50%;\n  margin: 10px;\n  border: 2px solid #73AD21; }\n\n.divideSection {\n  width: 50%;\n  margin: 10px;\n  clear: left;\n  border: 2px solid #73AD21; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL0Q6XFxwcm9cXHVuaXRzL3NyY1xcYXBwXFxob21lXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGl2aWRle1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3M0FEMjE7XHJcbn1cclxuXHJcbi5kaXZpZGVTZWN0aW9ue1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNsZWFyOiBsZWZ0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3M0FEMjE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/main/main.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.ELEMENT_DATA = [
            { position: 1, name: 'square kilometer', weight: '1000000 sq. m', symbol: 'sq. km' },
            { position: 2, name: 'square meter', weight: '1.19 sq. yd', symbol: 'sq. m' },
            { position: 3, name: 'square mile', weight: '6.941', symbol: 'sq. mile' },
            { position: 4, name: 'square yard', weight: '9.0122', symbol: 'sq. yard' },
            { position: 5, name: 'square foot', weight: '10.811', symbol: 'sq. foot' },
            { position: 6, name: 'square inch', weight: '12.0107', symbol: 'sq. inch' },
            { position: 7, name: 'acre', weight: '14.0067', symbol: 'acre' },
            { position: 8, name: 'hectare', weight: '11959.9 sq. yd', symbol: 'hectare' },
            { position: 9, name: 'kilometer', weight: '1000m', symbol: 'km' },
            { position: 10, name: 'meter', weight: '100cm', symbol: 'm' },
            { position: 2, name: 'centimeter', weight: '10mm', symbol: 'cm' },
            { position: 3, name: 'millimeter', weight: '.01dm', symbol: 'mm' },
            { position: 4, name: 'decameter', weight: '100mm', symbol: 'dm' },
            { position: 5, name: 'micrometer', weight: '0.001mm', symbol: 'um' },
            { position: 6, name: 'nanometer', weight: '0.001um', symbol: 'nm' },
            { position: 7, name: 'mile', weight: '0.621371km', symbol: 'mile' },
            { position: 8, name: 'yard', weight: '3ft', symbol: 'yard' },
            { position: 7, name: 'foot', weight: '30.48cm', symbol: 'foot' },
            { position: 8, name: 'inch', weight: '2.54cm', symbol: 'inch' },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.kmChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.meter = (parseFloat(tempValue) * 1000);
        this.centiMetr = (parseFloat(tempValue) * 100000);
        this.miliMetr = (parseFloat(tempValue) * 1e+6);
        this.microMetr = (parseFloat(tempValue) * 1e+9);
        this.decaMetr = (parseFloat(tempValue) * 10000);
        this.nanoMetr = (parseFloat(tempValue) * 1e+12);
        this.mile = (parseFloat(tempValue) * 0.621371); // or divide length by 1.609
        this.yard = (parseFloat(tempValue) * 1093.613);
        this.foot = (parseFloat(tempValue) * 3280.84);
        this.inch = (parseFloat(tempValue) * 39370.079);
    };
    MainComponent.prototype.mtrChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 1000);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.cmChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 100000);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.mmChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / (1e+6));
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.decaChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 10000);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.microChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / (1e+9));
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.nanoChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / (1e+12));
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.mileChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) * 1.609);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.yardChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 1093.613);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.inchChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 39370.079);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.footChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.kiloMeter = (parseFloat(tempValue) / 3280.84);
        this.kmChanged(this.kiloMeter);
    };
    MainComponent.prototype.sqkmChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqmetr = (parseFloat(tempValue) * (1e+6));
        this.sqmile = (parseFloat(tempValue) / 2.59);
        this.sqyard = (parseFloat(tempValue) * (1.19e+6));
        this.sqft = (parseFloat(tempValue) * (1.076e+7));
        this.sqinch = (parseFloat(tempValue) * (1.55e+9));
        this.acre = (parseFloat(tempValue) * (247.105));
        this.hectare = (parseFloat(tempValue) * 100);
    };
    MainComponent.prototype.sqmChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (1e+6));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent.prototype.sqmileChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) * (2.59));
        this.sqkmChanged(this.sqkilometer);
    };
    // it is also called gaj
    MainComponent.prototype.sqydChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (1.19e+6));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent.prototype.sqinchChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (1.55e+9));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent.prototype.acreChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (247.105));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent.prototype.hectareChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (100));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent.prototype.sqfootChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.sqkilometer = (parseFloat(tempValue) / (1.076e+7));
        this.sqkmChanged(this.sqkilometer);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/home/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/home/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/home/stock/stock.component.css":
/*!************************************************!*\
  !*** ./src/app/home/stock/stock.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RvY2svc3RvY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/stock/stock.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/stock/stock.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stock works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/stock/stock.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/stock/stock.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var StockComponent = /** @class */ (function () {
    function StockComponent() {
    }
    StockComponent.prototype.ngOnInit = function () {
    };
    StockComponent = __decorate([
        core_1.Component({
            selector: 'app-stock',
            template: __webpack_require__(/*! ./stock.component.html */ "./src/app/home/stock/stock.component.html"),
            styles: [__webpack_require__(/*! ./stock.component.css */ "./src/app/home/stock/stock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StockComponent);
    return StockComponent;
}());
exports.StockComponent = StockComponent;


/***/ }),

/***/ "./src/app/home/tech/tech.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/tech/tech.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"back\">\r\n  <h2> Random number generator</h2>\r\n  <span>Amount of numbers to be generated </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavx\" [(ngModel)]=\"entries\">\r\n  </mat-form-field>\r\n  <span>Numbers from: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavdvfx\" [(ngModel)]=\"noFrom\">\r\n  </mat-form-field>\r\n  <span>Numbers to: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavdvfx\" [(ngModel)]=\"noTo\" (blur)=\"randomNo()\">\r\n  </mat-form-field>\r\n  <span>Output: </span>\r\n  <input type=\"text\" id=\"myInput\" [(ngModel)]=\"noOutput\" disabled>\r\n  <div class=\"tooltip\">\r\n    <button (click)=\"copyData()\" (mouseout)=\"outFunc()\">\r\n      <span class=\"tooltiptext\" id=\"myTooltip\">Copy to clipboard</span>\r\n      Copy text\r\n      </button>\r\n</div>\r\n\r\n</div>\r\n\r\n<div id=\"top\">\r\n  <h2> Random string generator</h2>\r\n  <span> Allowed chars: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexazdvx\" [(ngModel)]=\"textEntriesString\">\r\n  </mat-form-field>\r\n  <span>Number of strings: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexafsvx\" [(ngModel)]=\"noofSTr\">\r\n  </mat-form-field>\r\n  <span>Length: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexavvx\" [(ngModel)]=\"lenStr\" (blur)=\"generateText()\">\r\n  </mat-form-field>\r\n  <span> Output:</span>\r\n  <input type=\"text\" id=\"myInput\" [(ngModel)]=\"finalStr\" disabled>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Shuffle letters</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"1\" [(ngModel)]=\"shuffledata\" (blur)=\"shufflWords()\">\r\n  </mat-form-field>\r\n  <span> Output: </span>\r\n  <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"finalShuffling\" disabled>\r\n</div>\r\n\r\n<div>\r\n  <h2>Compress text online encrypt/decrypt</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"2\" [(ngModel)]=\"myString\">\r\n  </mat-form-field>\r\n  <span>Convert: </span>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n      <mat-select placeholder=\"Select\">\r\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n          {{food.viewValue}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  <br>\r\n  <span>Output: </span>\r\n</div>\r\n\r\n<div>\r\n  <h2>Text statistics generator</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"3\" [(ngModel)]=\"textData\" (blur)=\"WordsStatistics()\">\r\n  </mat-form-field>\r\n  <span>Output: </span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalObj\"></textarea>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Remove line breaks online</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput name=\"\" id=\"\" cols=\"30\" rows=\"5\" id=\"\" [(ngModel)]=\"someText\" (blur)=\"removeLinebreaks()\"></textarea>\r\n    </mat-form-field>\r\n  <span>Output:</span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"updatedText\"></textarea>\r\n</div>\r\n\r\n<div>\r\n  <h2>Replace text online</h2>\r\n  <span>Input data: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"phrase\" name=\"phrase\">\r\n  </mat-form-field>\r\n  <span>Find text: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"findPhrase\" name=\"ph\">\r\n  </mat-form-field>\r\n  <span>Replace with: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"replacePhrase\" name=\"phr\">\r\n  </mat-form-field>\r\n  <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"finalPhrase\" disabled>\r\n  <button (click)=\"replaceText()\">Replace</button>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Count characters</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"exampleString\" name=\"sfd\" (blur)=\"countChars()\">\r\n  </mat-form-field>\r\n  <span>Output:</span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalop\"></textarea>\r\n\r\n</div>\r\n  <!-- c: 1\r\nd: 3\r\nf: 1\r\ns: 1 -->\r\n<div>\r\n  <h2>Count text entries</h2>\r\n  <div>\r\n    <span>Input: </span>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" [(ngModel)]=\"sampEntries\" name=\"\" id=\"\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <span>Find text: </span>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" [(ngModel)]=\"texttofind\" (blur)=\"textEntries()\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <span>Output:</span>\r\n    <br>\r\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalValue\"></textarea>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <h2>Barcode generator</h2>\r\n  <span>Input data: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <textarea matInput name=\"\" id=\"\" cols=\"30\" rows=\"5\" id=\"\" placeholder=\"bc-value\" [(ngModel)]=\"value\"></textarea>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n    <mat-select placeholder=\"bc-element-type\" [(ngModel)]=\"elementType\">\r\n      <mat-option *ngFor=\"let food of foods2\" [value]=\"food.value\">\r\n        {{food.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n    <mat-select placeholder=\"bc-format\" [(ngModel)]=\"format\">\r\n      <mat-option *ngFor=\"let code of codeList\" [value]=\"code\">\r\n        {{code}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-line-color\" [(ngModel)]=\"lineColor\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-width\" [(ngModel)]=\"width\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-height\" [(ngModel)]=\"height\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-font-options\" [(ngModel)]=\"fontOptions\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-font\" [(ngModel)]=\"font\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-align\" [(ngModel)]=\"textAlign\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-position\" [(ngModel)]=\"textPosition\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-margin\" [(ngModel)]=\"textMargin\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-font-size\" [(ngModel)]=\"fontSize\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-background\" [(ngModel)]=\"background\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-margin\" [(ngModel)]=\"margin\">\r\n  </mat-form-field>\r\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"displayValue\">bc-display-value</mat-checkbox>\r\n\r\n  <br>\r\n  <span>Output:</span>\r\n  <div fxLayout=\"column\">\r\n    <ngx-barcode *ngFor=\"let bcValue of values\" [bc-element-type]=\"elementType\" [bc-value]=\"bcValue\"\r\n      [bc-format]=\"format\" [bc-line-color]=\"lineColor\" [bc-width]=\"width\" [bc-height]=\"height\"\r\n      [bc-display-value]=\"displayValue\" [bc-font-options]=\"fontOptions\" [bc-font]=\"font\" [bc-text-align]=\"textAlign\"\r\n      [bc-text-position]=\"textPosition\" [bc-text-margin]=\"textMargin\" [bc-font-size]=\"fontSize\"\r\n      [bc-background]=\"background\" [bc-margin]=\"margin\" [bc-margin-top]=\"marginTop\" [bc-margin-bottom]=\"marginBottom\"\r\n      [bc-margin-left]=\"marginLeft\" [bc-margin-right]=\"marginRight\"></ngx-barcode>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/tech/tech.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/tech/tech.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-family: verdana;\n  font-size: 20px; }\n\n.back {\n  background-color: aliceblue; }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 140px;\n  background-color: #555;\n  color: red;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 1;\n  transition: opacity 0.3s; }\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible; }\n\n.example-margin {\n  margin: 0 10px; }\n\nbutton {\n  background-image: linear-gradient(#337ab7 0px, #265a88 100%);\n  background-repeat: repeat-x;\n  border-color: #245580;\n  color: white;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZWNoL0Q6XFxwcm9cXHVuaXRzL3NyY1xcYXBwXFxob21lXFx0ZWNoXFx0ZWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQW9CO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBUztFQUNULGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzREFBc0QsRUFBQTs7QUFHeEQ7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsNERBQStFO0VBQy9FLDJCQUEyQjtFQUMzQixxQkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVjaC90ZWNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5zcGFue1xyXG4gIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5iYWNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbn1cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGNvbG9yOnJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDE1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbmJ1dHRvbnsgIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoNTEsIDEyMiwgMTgzKSAwcHgsIHJnYigzOCwgOTAsIDEzNikgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDM2LCA4NSwgMTI4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/tech/tech.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/tech/tech.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var crypto = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var TechComponent = /** @class */ (function () {
    function TechComponent() {
        this.foods = [
            { value: 'compress', viewValue: 'compress' },
            { value: 'decompress', viewValue: 'decompress' },
        ];
        this.foods2 = [
            { value: 'svg', viewValue: 'svg' },
            { value: 'img', viewValue: 'img' },
            { value: 'canvas', viewValue: 'canvas' },
        ];
        this.sampEntries = '';
        this.finalStr = '';
        this.noOutput = '';
        this.elementType = 'svg';
        this.value = 'someValue12340987';
        this.format = 'CODE128';
        this.lineColor = '#000000';
        this.width = 2;
        this.height = 100;
        this.displayValue = true;
        this.fontOptions = '';
        this.font = 'monospace';
        this.textAlign = 'center';
        this.textPosition = 'bottom';
        this.textMargin = 2;
        this.fontSize = 20;
        this.background = '#ffffff';
        this.margin = 10;
        this.marginTop = 10;
        this.marginBottom = 10;
        this.marginLeft = 10;
        this.marginRight = 10;
        this.codeList = [
            '', 'CODE128',
            'CODE128A', 'CODE128B', 'CODE128C',
            'UPC', 'EAN8', 'EAN5', 'EAN2',
            'CODE39',
            'ITF14',
            'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
            'pharmacode',
            'codabar'
        ];
    }
    Object.defineProperty(TechComponent.prototype, "values", {
        get: function () {
            return this.value.split('\n');
        },
        enumerable: true,
        configurable: true
    });
    TechComponent.prototype.ngOnInit = function () {
    };
    TechComponent.prototype.copyData = function () {
        var copyText = document.getElementById('myInput');
        copyText.select();
        document.execCommand('copy');
        var tooltip = document.getElementById('myTooltip');
        tooltip.innerHTML = 'Copied: ' + copyText.value;
    };
    TechComponent.prototype.outFunc = function () {
        var tooltip = document.getElementById('myTooltip');
        tooltip.innerHTML = 'Copy to clipboard';
    };
    TechComponent.prototype.removeLinebreaks = function () {
        this.updatedText = this.someText.replace(/(\r\n\t|\n|\r\t)/gm, ' ');
    };
    TechComponent.prototype.replaceText = function () {
        this.finalPhrase = this.phrase.split(this.findPhrase).join(this.replacePhrase);
    };
    TechComponent.prototype.WordsStatistics = function () {
        var uniqueWords = this.textData.split(/\s+/).sort().filter(function (v, i, o) { return v !== o[i - 1]; });
        var text = this.textData, chars = text.length, words = text.split(/\b\S+\b/g).length - 1, lines = text.split('\n').length, sentences = text.split('.').length;
        var uniqueChars = this.textData.split('').filter(function (item, i, ar) { return ar.indexOf(item) === i; }).join('');
        this.finalObj = 'chars: ' + chars + ',' + ' words: ' + words + ',' + ' lines: ' + lines + ',' + ' sentences: ' + sentences + ','
            + ' unique chars: ' + uniqueChars;
    };
    // <!-- Array
    // (
    //     [0] => xsx
    // )
    // Length: 3 characters
    // Length witout white-space: 3 characters
    // Lines: 1
    // Words: 1
    // Sentences: 1
    // Unique words: 1
    // Unique words(%): 100%
    // Length of shortest word: 3 characters
    // Length of longest word: 3 characters
    // Avg. word length: 3
    // Avg. words per line: 1
    // Avg. words per sentence: 1
    TechComponent.prototype.countChars = function () {
        var stringBase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var countObject = {};
        function characterCount(word, character) {
            var count = 0;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === character) {
                    count++;
                }
            }
            return count;
        }
        for (var i = 0, l = stringBase.length; i < l; i++) {
            var currentChar = stringBase[i];
            countObject[currentChar] = characterCount(this.exampleString, currentChar);
        }
        this.finalop = JSON.stringify(countObject);
    };
    TechComponent.prototype.textEntries = function () {
        function find_occurences(str, char_to_count) {
            return str.split(char_to_count).length - 1;
        }
        this.finalValue = find_occurences(this.sampEntries, this.texttofind);
        // or
        // function count(string,char) {
        //   var re = new RegExp(char,"gi");
        //   return string.match(re).length;
        //  }
        //  var str34 = 'I will practice survival skills';
    };
    TechComponent.prototype.shufflWords = function () {
        function shuffelWord(word) {
            word = word.split('');
            // Remove the first and the last letter
            var first = word.shift();
            var last = word.pop();
            // Shuffle the remaining letters
            for (var i = word.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _a = [word[j], word[i]], word[i] = _a[0], word[j] = _a[1];
            }
            // Append and return
            return first + word.join('') + last;
            var _a;
        }
        this.finalShuffling = shuffelWord(this.shuffledata);
    };
    TechComponent.prototype.generateText = function () {
        var text = '';
        for (var j = 0; j < this.noofSTr; j++) {
            text = '';
            for (var i = 0; i < this.lenStr; i++) {
                text += this.textEntriesString.charAt(Math.floor(Math.random() * this.textEntriesString.length));
            }
            this.finalStr = this.finalStr + text + ',';
        }
    };
    TechComponent.prototype.randomNo = function () {
        for (var i = 0; i < this.entries; i++) {
            var c = Math.round((Math.random()) * (parseInt(this.noTo, 10) - parseInt(this.noFrom, 10) + 1) +
                parseInt(this.noFrom, 10));
            // if(arr.indexOf(c) === -1) arr.push(r);
            this.noOutput = this.noOutput + c + ',';
        }
    };
    TechComponent.prototype.convertData = function () {
        var myString = 'https://www.titanesmedellin.com/';
        var myPassword = 'myPassword';
        // PROCESS
        var encrypted = crypto.AES.encrypt(myString, myPassword);
        // var decrypted = crypto.AES.decrypt(encrypted, myPassword);
        // var encrypted = crypto.AES.encrypt("Message", "Secret Passphrase");
        // U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
        var decrypted = crypto.AES.decrypt(encrypted, 'Secret Passphrase');
        console.log(encrypted.toString());
        console.log(decrypted.toString());
        console.log(decrypted.toString(crypto.enc.Utf8, 'vg'));
    };
    //   project for testing-
    // generate sample text file & text generator
    // input field- 1mb
    // output - generate .txt file havinf content of 1 mb
    TechComponent.prototype.demo = function () {
        function generate_random_data1(size) {
            var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
            var len = chars.length;
            var random_data = [];
            while (size--) {
                random_data.push(chars[Math.random() * len || 0]);
            }
            return random_data.join('');
        }
        var blob = new Blob([generate_random_data1(parseInt('10', 10) * 1024 * 1024)], { type: 'text/plain' });
        file_saver_1.saveAs(blob, 'log.txt');
    };
    TechComponent = __decorate([
        core_1.Component({
            selector: 'app-tech',
            template: __webpack_require__(/*! ./tech.component.html */ "./src/app/home/tech/tech.component.html"),
            styles: [__webpack_require__(/*! ./tech.component.scss */ "./src/app/home/tech/tech.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TechComponent);
    return TechComponent;
}());
exports.TechComponent = TechComponent;


/***/ }),

/***/ "./src/app/home/todo/todo.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/todo/todo.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n    background: #faedbe;\r\n}\r\n\r\n.head{\r\n    display: flex;\r\n}\r\n\r\n.scroll{\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n    width: 30%;\r\n}\r\n\r\n.textbox{\r\n    font-size: x-large;\r\n    border-width: 0px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: #eee;\r\n    width: 70%;\r\n}\r\n\r\n.rightbox{\r\n    background-color: #eee;\r\n    width: 70%;\r\n}\r\n\r\n.btn {\r\n    background-color: #f7fcfd; /* Blue background */\r\n    border: none; /* Remove borders */\r\n    padding: 12px 16px; /* Some padding */\r\n    font-size: 16px; /* Set a font size */\r\n    cursor: pointer; /* Mouse pointer on hover */\r\n  }\r\n\r\n/* Darker background on mouse-over */\r\n\r\n.btn:hover {\r\n    background-color: RoyalBlue;\r\n    opacity: 0.8;  \r\n  }\r\n\r\ninput[type=text] {  \r\n      padding: 12px 40px;  \r\n    border-radius: 10px;\r\n      display: inline-block;  \r\n      border: 1px solid #ccc;  \r\n      box-sizing: border-box;  \r\n  }\r\n\r\n.fontuser { \r\n      position: relative; \r\n  }\r\n\r\n.fontuser i{ \r\n      position: absolute; \r\n      left: 15px; \r\n      top: 13px; \r\n      color: gray; \r\n  }\r\n\r\n.aligndate {\r\ndisplay: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBR0E7SUFDSSx5QkFBeUIsRUFBRSxvQkFBb0I7SUFDL0MsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsZUFBZSxFQUFFLG9CQUFvQjtJQUNyQyxlQUFlLEVBQUUsMkJBQTJCO0VBQzlDOztBQUVBLG9DQUFvQzs7QUFDcEM7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztBQUdBO01BQ0ksa0JBQWtCO0lBQ3BCLG1CQUFtQjtNQUNqQixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLHNCQUFzQjtFQUMxQjs7QUFHQTtNQUNJLGtCQUFrQjtFQUN0Qjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsU0FBUztNQUNULFdBQVc7RUFDZjs7QUFFRjtBQUNBLGFBQWE7SUFDVCx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFlZGJlO1xyXG59XHJcblxyXG4uaGVhZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNjcm9sbHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnRleHRib3h7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnJpZ2h0Ym94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2ZjZmQ7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogU2V0IGEgZm9udCBzaXplICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4gIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUm95YWxCbHVlO1xyXG4gICAgb3BhY2l0eTogMC44OyAgXHJcbiAgfVxyXG5cclxuXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSB7ICBcclxuICAgICAgcGFkZGluZzogMTJweCA0MHB4OyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgIFxyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXHJcbiAgfSAgXHJcbiAgICBcclxuXHJcbiAgLmZvbnR1c2VyIHsgXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgfSBcclxuICAgIFxyXG4gIC5mb250dXNlciBpeyBcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgbGVmdDogMTVweDsgXHJcbiAgICAgIHRvcDogMTNweDsgXHJcbiAgICAgIGNvbG9yOiBncmF5OyBcclxuICB9IFxyXG5cclxuLmFsaWduZGF0ZSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/todo/todo.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/todo/todo.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\" id=\"responsive\">\r\n  <div>\r\n      <button class=\"btn\" (click)=\"addNote()\"><i class=\"fa fa-plus\"></i>Add </button>\r\n      <button class=\"btn\" (click)=\"editNote()\"><i class=\"fa fa-edit\"></i> Edit</button>\r\n      <button class=\"btn\" (click)=\"deleteNote()\"><i class=\"fa fa-remove\"></i>Remove </button>\r\n      <button class=\"btn\" (click)=\"saveNote()\"><i class=\"fa fa-save\"></i> Save</button>\r\n  </div>\r\n  <div class=\"container\">\r\n      <div class=\"fontuser\">\r\n          <input type=\"text\" [(ngModel)]=\"searchNotes\" placeholder=\"Search\">\r\n          <i class=\"fa fa-search\"></i>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"head\">\r\n  \r\n  <div class=\"scroll\">\r\n      <div *ngFor=\"let j= index;let item of taskList|search:'title,content':searchNotes\"\r\n          [ngClass]=\"{'active': selectedNote == item}\" (click)=\"selectedNote = item\">\r\n          <h1 id=\"textValue\">{{item.content}}</h1>\r\n          <span style=\"font-weight: 600;\">{{item.currentTime}}</span>\r\n          <span>{{' ' + item.title}}</span>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"rightbox\">\r\n      <span class=\"aligndate\">{{selectedNote.modifiedTime}}</span> <br>\r\n     <textarea class=\"textbox\" type=\"text\" [ngModel]=\"selectedNote.content\" (ngModelChange)=\"selectedNote.content = $event\" *ngIf=\"selectedNote\" [disabled]=\"enableDisableSpan\" #inputToFocus> </textarea>\r\n\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div>\r\n    <h1>To do</h1>\r\n    <div class=\"addItem\">\r\n        <input [(ngModel)]=\"newItem\" placeholder=\"AddItem\" class=\"addText\">\r\n        <button (click)=\"pushItem()\">Add</button>\r\n    </div>\r\n    <ul>\r\n        <li *ngFor=\"let i of items;let ind=index\">\r\n            {{i}}\r\n            <span (click)=\"removeItem(ind)\">remove</span>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/home/todo/todo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/todo/todo.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        var _this = this;
        this.searchNotes = '';
        this.taskList = [];
        this.enableDisableSpan = true;
        this.primaryValue = 3;
        this.styleOne = false;
        this.getDateStringServ = function (timestamp) {
            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            var plus0 = function (num) { return ("0" + num.toString()).slice(-2); };
            var d = new Date(timestamp);
            var year = d.getFullYear();
            var date = plus0(d.getDate());
            var hour = +plus0(d.getHours());
            var minute = plus0(d.getMinutes());
            var time = (hour > 12) ? (hour - 12 + ':' + minute + ' PM') : (hour + ':' + minute + ' AM');
            return monthNames[d.getMonth()] + " " + date + ", " + year + " at " + time;
        };
        this.items = ["Angular", "React"];
        this.newItem = "";
        this.pushItem = function () {
            if (_this.newItem != "") {
                _this.items.push(_this.newItem);
                _this.newItem = "";
            }
        };
        this.removeItem = function (index) {
            _this.items.splice(index, 1);
        };
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.taskList = [{
                id: 0,
                content: 'Blog post',
                title: 'demo1',
                modifiedTime: this.getDateStringServ(new Date().getTime()),
                currentTime: this.getDateStringServ(new Date().getTime()).split('at')[1]
            },
            {
                id: 1,
                content: 'Hello world',
                title: 'demo2',
                modifiedTime: this.getDateStringServ(new Date().getTime()),
                currentTime: this.getDateStringServ(new Date().getTime()).split('at')[1]
            },
            {
                id: 2,
                content: 'This is example Note',
                title: 'demo3',
                modifiedTime: this.getDateStringServ(new Date().getTime()),
                currentTime: this.getDateStringServ(new Date().getTime()).split('at')[1]
            }];
        this.selectedNote = this.taskList[0];
    };
    TodoComponent.prototype.addNote = function () {
        this.enableDisableSpan = false;
        var id = this.primaryValue + 1;
        var data = { id: id, content: '', title: "demo" + id,
            modifiedTime: this.getDateStringServ(new Date().getTime()),
            currentTime: this.getDateStringServ(new Date().getTime()).split('at')[1]
        };
        this.taskList.push(data);
        this.selectedNote = data;
        this.primaryValue++;
        this.inputElement.nativeElement.focus();
    };
    TodoComponent.prototype.editNote = function () {
        this.enableDisableSpan = false;
    };
    TodoComponent.prototype.deleteNote = function () {
        this.taskList.splice(this.selectedNote.id, 1);
    };
    TodoComponent.prototype.saveNote = function () {
        var _this = this;
        this.taskList.forEach(function (element) {
            if (element.id === _this.selectedNote.id) {
                element.modifiedTime = _this.getDateStringServ(new Date().getTime());
            }
        });
        localStorage.setItem('data', JSON.stringify(this.taskList));
    };
    __decorate([
        core_1.ViewChild('inputToFocus'),
        __metadata("design:type", core_1.ElementRef)
    ], TodoComponent.prototype, "inputElement", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/home/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/home/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;


/***/ }),

/***/ "./src/app/home/weight/weight.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/weight/weight.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VpZ2h0L3dlaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/weight/weight.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/weight/weight.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  weight conversion\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/weight/weight.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/weight/weight.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var WeightComponent = /** @class */ (function () {
    function WeightComponent() {
    }
    WeightComponent.prototype.ngOnInit = function () {
    };
    WeightComponent = __decorate([
        core_1.Component({
            selector: 'app-weight',
            template: __webpack_require__(/*! ./weight.component.html */ "./src/app/home/weight/weight.component.html"),
            styles: [__webpack_require__(/*! ./weight.component.css */ "./src/app/home/weight/weight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeightComponent);
    return WeightComponent;
}());
exports.WeightComponent = WeightComponent;


/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\r\n  <div class=\"notfound\">\r\n    <div class=\"notfound-404\">\r\n      <h1>404</h1>\r\n    </div>\r\n    <h2>Oops! This Page Could Not Be Found</h2>\r\n    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>\r\n    <a routerLink=\"/convertentries\" routerLinkActive=\"active\">Go To Homepage</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\n#notfound {\n  position: relative;\n  height: 100vh; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 767px;\n  width: 100%;\n  line-height: 1.4;\n  padding: 0px 15px; }\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 150px;\n  line-height: 150px;\n  margin-bottom: 25px; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 186px;\n  font-weight: 900;\n  margin: 0px;\n  text-transform: uppercase;\n  background: url('text.png');\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: cover;\n  background-position: center; }\n\n.notfound h2 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0; }\n\n.notfound p {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  text-transform: uppercase; }\n\n.notfound a {\n  font-family: 'Titillium Web', sans-serif;\n  display: inline-block;\n  text-transform: uppercase;\n  color: #fff;\n  text-decoration: none;\n  border: none;\n  background: #5c91fe;\n  padding: 10px 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 1px;\n  margin-top: 15px;\n  transition: 0.2s all; }\n\n.notfound a:hover {\n  opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0Q6XFxwcm9cXHVuaXRzL3NyY1xcYXBwXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVZLHNCQUFzQixFQUFBOztBQUdoQztFQUNFLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBR0EsZ0NBQWdDLEVBQUE7O0FBRzFDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwyQkFBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIHtcclxuICAgIG1heC13aWR0aDogNzY3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4NnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy90ZXh0LnBuZycpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM1YzkxZmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term) {
            return value;
        }
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) {
            return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
        }); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ "./src/app/temperature/temperature.component.css":
/*!*******************************************************!*\
  !*** ./src/app/temperature/temperature.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temp{\r\n    margin-top: 15px;\r\n}\r\n.root__container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: 0.5fr auto;\r\n    position: relative;\r\n  }\r\n/*\r\n  ================\r\n      Header\r\n  ================\r\n  */\r\n/*\r\n      Slide Menu\r\n  = = = = = = = = =\r\n  */\r\n.side-menu__container {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n    z-index: 25;\r\n  }\r\n.side-menu__container-active {\r\n    pointer-events: auto;\r\n  }\r\n.side-menu__container::before {\r\n    content: '';\r\n    cursor: pointer;\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #0c1066;\r\n    opacity: 0;\r\n    transition: opacity 300ms linear;\r\n    will-change: opacity;\r\n  }\r\n.side-menu__container-active::before {\r\n    opacity: 0.3;\r\n  }\r\n.slide-menu {\r\n    box-sizing: border-box;\r\n    transform: translateX(-103%);\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    height: 100%;\r\n    width: 90%;\r\n    max-width: 26rem;\r\n    background-color: white;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 2fr 4fr 1fr;\r\n    grid-gap: 1rem;\r\n    transition: transform 300ms linear;\r\n    will-change: transform;\r\n  }\r\n.slide-menu-active {\r\n    transform: none;\r\n  }\r\n.menu-header {\r\n    background: linear-gradient(to right, #00FF9B, #5f84fb);\r\n    display: grid;\r\n    grid-template-rows: 1fr 4fr;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-areas: \"greeting greeting\" \"image details\";\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    align-content: center;\r\n    color: white;\r\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);\r\n  }\r\n.greeting__text {\r\n    grid-area: greeting;\r\n    font-size: 1.25rem;\r\n    letter-spacing: 0.15rem;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n  }\r\n.account-details {\r\n    grid-area: details;\r\n    display: flex;\r\n    flex-flow: column;\r\n    margin-left: 1rem;\r\n    align-self: center;\r\n  }\r\n.name__text {\r\n    font-size: 1.15rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n.email__text {\r\n    font-size: 0.9rem;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n.menu-body {\r\n    display: grid;\r\n    width: 100%;\r\n  }\r\n.profile-image__container {\r\n    grid-area: image;\r\n    margin-right: 0.5rem;\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    align-self: center;\r\n    margin-left: 2rem;\r\n  }\r\n.profile__image {\r\n    max-width: 4rem;\r\n  }\r\n/*Header*/\r\n.main__header {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 0.25fr;\r\n    grid-template-rows: 1fr;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    height: 4rem;\r\n    margin: 0;\r\n    align-items: center;\r\n    transition: background-color 500ms linear;\r\n    -webkit-animation: fadein 1s ease-in-out 0ms 1;\r\n            animation: fadein 1s ease-in-out 0ms 1;\r\n  }\r\n.main__header-dark {\r\n    background-color: #2B244D;\r\n    color: white;\r\n  }\r\n.toggle-button__container {\r\n    cursor: pointer;\r\n    position: relative;\r\n    margin: 0 0.5rem;\r\n  }\r\n.mode-toggle__input {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n  }\r\n.mode-toggle__bg {\r\n    height: 1rem;\r\n    width: 2rem;\r\n    border-radius: 0.5rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: inline-block;\r\n    transition: background-color 300ms linear;\r\n  }\r\n.mode-toggle__circle {\r\n    height: 1.30rem;\r\n    width: 1.30rem;\r\n    background-color: #2B244D;\r\n    position: absolute;\r\n    top: -0.2rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\r\n    transition: left 300ms linear;\r\n    left: 0.1rem;\r\n  }\r\n.mode-toggle__circle-checked {\r\n    background-color: white;\r\n    left: 1.75rem;\r\n  }\r\n.mode-toggle__bg-checked {\r\n    background-color: #FF0070;\r\n  }\r\n.mode-toggle__text {\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n/*Content*/\r\n.left__section {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    max-width: 5rem;\r\n  }\r\n.date__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    display: inline;\r\n    margin: 0.5rem 0;\r\n  }\r\n/*SVGs*/\r\n.hamburger__icon {\r\n    position: relative;\r\n    z-index: 35;\r\n    height: 1rem;\r\n    padding: 0.5rem 1.5rem;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n  }\r\n.logo__icon {\r\n    height: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n.logo__text {\r\n    fill: #2B244D;\r\n  }\r\n.logo__text-dark {\r\n    fill: #ffff;\r\n  }\r\n.hamburger__icon__fill {\r\n    fill: #2B244D;\r\n  }\r\n.hamburger__icon__fill-dark {\r\n    fill: #ffff;\r\n  }\r\n/*\r\n  ================\r\n      Body\r\n  ================\r\n  */\r\n.main-container__bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -2;\r\n    opacity: 0;\r\n    background: white;\r\n    transition: opacity 300ms linear;\r\n  }\r\n.main-container__bg-dark {\r\n    opacity: 1;\r\n    background: linear-gradient(to bottom, #B290FF, #2E1D65);\r\n    transition: opacity 300ms linear;\r\n  }\r\n/*\r\n  ================-\r\n      Footer\r\n  ================\r\n  */\r\n.main__footer {\r\n    background: transparent;\r\n    position: absolute;\r\n    bottom: 1rem;\r\n    left: 1.5rem;\r\n    z-index: 100;\r\n  }\r\n.copyright__text {\r\n    letter-spacing: 0.1rem;\r\n    color: white;\r\n  }\r\n@media only screen and (max-width: 300px) {\r\n    .slide-menu {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvdGVtcGVyYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7QUFFQTs7OztHQUlDO0FBRUQ7OztHQUdDO0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix3REFBd0Q7SUFDeEQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDhDQUE4QztFQUNoRDtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBLFNBQVM7QUFDVDtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHlDQUF5QztFQUMzQztBQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7QUFFQSxVQUFVO0FBQ1Y7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFFQSxPQUFPO0FBQ1A7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBOzs7O0dBSUM7QUFFRDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0NBQWdDO0VBQ2xDO0FBRUE7SUFDRSxVQUFVO0lBQ1Ysd0RBQXdEO0lBQ3hELGdDQUFnQztFQUNsQztBQUVBOzs7O0dBSUM7QUFDRDtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZW1wZXJhdHVyZS90ZW1wZXJhdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5yb290X19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICAgICBIZWFkZXJcclxuICA9PT09PT09PT09PT09PT09XHJcbiAgKi9cclxuICBcclxuICAvKlxyXG4gICAgICBTbGlkZSBNZW51XHJcbiAgPSA9ID0gPSA9ID0gPSA9ID1cclxuICAqL1xyXG4gIC5zaWRlLW1lbnVfX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyNTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudV9fY29udGFpbmVyLWFjdGl2ZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudV9fY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzEwNjY7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGUtbWVudV9fY29udGFpbmVyLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLW1lbnUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAzJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA0ZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlLW1lbnUtYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwRkY5QiwgIzVmODRmYik7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJncmVldGluZyBncmVldGluZ1wiIFwiaW1hZ2UgZGV0YWlsc1wiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmdyZWV0aW5nX190ZXh0IHtcclxuICAgIGdyaWQtYXJlYTogZ3JlZXRpbmc7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvdW50LWRldGFpbHMge1xyXG4gICAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmVtYWlsX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWltYWdlX19jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlX19pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qSGVhZGVyKi9cclxuICAubWFpbl9faGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjI1ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMXMgZWFzZS1pbi1vdXQgMG1zIDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluX19oZWFkZXItZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlLWJ1dHRvbl9fY29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RlLXRvZ2dsZV9faW5wdXQge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubW9kZS10b2dnbGVfX2JnIHtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RlLXRvZ2dsZV9fY2lyY2xlIHtcclxuICAgIGhlaWdodDogMS4zMHJlbTtcclxuICAgIHdpZHRoOiAxLjMwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMjQ0RDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTAuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAzMDBtcyBsaW5lYXI7XHJcbiAgICBsZWZ0OiAwLjFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RlLXRvZ2dsZV9fY2lyY2xlLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBsZWZ0OiAxLjc1cmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kZS10b2dnbGVfX2JnLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDA3MDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGUtdG9nZ2xlX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIH1cclxuICBcclxuICAvKkNvbnRlbnQqL1xyXG4gIC5sZWZ0X19zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIG1heC13aWR0aDogNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVfX3RleHQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAvKlNWR3MqL1xyXG4gIC5oYW1idXJnZXJfX2ljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMzU7XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubG9nb19faWNvbiB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ29fX3RleHQge1xyXG4gICAgZmlsbDogIzJCMjQ0RDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ29fX3RleHQtZGFyayB7XHJcbiAgICBmaWxsOiAjZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhhbWJ1cmdlcl9faWNvbl9fZmlsbCB7XHJcbiAgICBmaWxsOiAjMkIyNDREO1xyXG4gIH1cclxuICBcclxuICAuaGFtYnVyZ2VyX19pY29uX19maWxsLWRhcmsge1xyXG4gICAgZmlsbDogI2ZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICAgICBCb2R5XHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICovXHJcbiAgXHJcbiAgLm1haW4tY29udGFpbmVyX19iZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250YWluZXJfX2JnLWRhcmsge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMjkwRkYsICMyRTFENjUpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgPT09PT09PT09PT09PT09PS1cclxuICAgICAgRm9vdGVyXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICovXHJcbiAgLm1haW5fX2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvcHlyaWdodF9fdGV4dCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuc2xpZGUtbWVudSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/temperature/temperature.component.html":
/*!********************************************************!*\
  !*** ./src/app/temperature/temperature.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-menu__container\" [ngClass]=\"{'side-menu__container-active': showMenu}\" (click)=\"toggleMenu()\">\r\n  <nav class=\"slide-menu\" [ngClass]=\"{'slide-menu-active': showMenu}\" (click)=\"$event.stopImmediatePropagation();\">\r\n    <section class=\"menu-header\">\r\n      <span class=\"greeting__text\">Welcome Back</span>\r\n      <div class=\"profile-image__container\">\r\n        <img src=\"../assets/profile.jpg\" alt=\"profile-image\"\r\n             class=\"profile__image\">\r\n      </div>\r\n      <div class=\"account-details\">\r\n        <span class=\"name__text\">Sunny Gupta</span>\r\n        <span class=\"email__text\">apexmansunny@gmail.com</span>\r\n      </div>\r\n    </section>\r\n    <section class=\"menu-body\">\r\n\r\n    </section>\r\n    <section class=\"menu-footer\">\r\n\r\n    </section>\r\n  </nav>\r\n</aside>\r\n\r\n<div class=\"root__container\">\r\n  <header [ngClass]=\"{'main__header-dark': darkModeActive}\" class=\"main__header\">\r\n\r\n    <div class=\"left__section\">\r\n      <svg (click)=\"toggleMenu()\" class=\"hamburger__icon\" id=\"Menu_Burger_Icon\" data-name=\"Menu Burger Icon\"\r\n           viewBox=\"31.5 30 49.9 32\">\r\n        <defs>\r\n          <style>.hamburger__icon__fill {\r\n            fill: #594e78\r\n          }</style>\r\n        </defs>\r\n        <rect id=\"Rectangle_9\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 9\" rx=\"2\"\r\n              transform=\"translate(31.5 58)\"/>\r\n        <rect id=\"Rectangle_10\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 10\" rx=\"2\"\r\n              transform=\"translate(31.5 44)\"/>\r\n        <rect id=\"Rectangle_11\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 11\" rx=\"2\"\r\n              transform=\"translate(31.5 30)\"/>\r\n      </svg>\r\n\r\n      <svg class=\"logo__icon\" viewBox=\"150.3 22.2 413.7 42.8\">\r\n        <path fill=\"#00ff9b\" d=\"M150.3 65V22.2L193 65z\" data-name=\"Path 1\"/>\r\n        <path fill=\"#003eff\" d=\"M193.1 65h-42.8L193 22.2z\" data-name=\"Path 2\"/>\r\n        <text [ngClass]=\"{'logo__text-dark': darkModeActive}\" class=\"logo__text\" fill=\"#432c85\"\r\n              font-family=\"SegoeUI-Semibold,Segoe UI\" font-size=\"30\" font-weight=\"600\"\r\n              letter-spacing=\".1em\" transform=\"translate(237 56)\">\r\n          <tspan x=\"0\" y=\"0\">weather forecast</tspan>\r\n        </text>\r\n      </svg>\r\n\r\n    </div>\r\n\r\n    <h3 class=\"date__text\">Today</h3>\r\n\r\n\r\n    <div class=\"mode-toggle__container\">\r\n      <span class=\"mode-toggle__text\">Light</span>\r\n\r\n      <label class=\"toggle-button__container\">\r\n        <input (click)=\"modeToggleSwitch()\" type=\"checkbox\" class=\"mode-toggle__input\"/>\r\n        <span [ngClass]=\"{'mode-toggle__bg-checked': darkModeActive}\" class=\"mode-toggle__bg\"></span>\r\n        <span [ngClass]=\"{'mode-toggle__circle-checked': darkModeActive}\" class=\"mode-toggle__circle\"></span>\r\n      </label>\r\n\r\n\r\n      <span class=\"mode-toggle__text\">Dark</span>\r\n    </div>\r\n\r\n  </header>\r\n\r\n  <!-- Main Content -->\r\n\r\n  <main class=\"main__container\">\r\n    <div class=\"main-container__bg\" [ngClass]=\"{'main-container__bg-dark': darkModeActive}\"></div>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n  <!-- Footer -->\r\n\r\n  <footer class=\"main__footer\">\r\n    <small class=\"copyright__text\">weather</small>\r\n  </footer>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/temperature/temperature.component.ts":
/*!******************************************************!*\
  !*** ./src/app/temperature/temperature.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ui_service_1 = __webpack_require__(/*! ./weather/services/ui.service */ "./src/app/temperature/weather/services/ui.service.ts");
var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(ui) {
        this.ui = ui;
        this.showMenu = false;
    }
    TemperatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (value) {
            _this.darkModeActive = value;
        });
    };
    TemperatureComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    TemperatureComponent.prototype.modeToggleSwitch = function () {
        this.ui.darkModeState.next(!this.darkModeActive);
    };
    TemperatureComponent = __decorate([
        core_1.Component({
            selector: 'app-temperature',
            template: __webpack_require__(/*! ./temperature.component.html */ "./src/app/temperature/temperature.component.html"),
            styles: [__webpack_require__(/*! ./temperature.component.css */ "./src/app/temperature/temperature.component.css")]
        }),
        __metadata("design:paramtypes", [ui_service_1.UiService])
    ], TemperatureComponent);
    return TemperatureComponent;
}());
exports.TemperatureComponent = TemperatureComponent;


/***/ }),

/***/ "./src/app/temperature/weather/pages/add/add.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/temperature/weather/pages/add/add.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBlcmF0dXJlL3dlYXRoZXIvcGFnZXMvYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/temperature/weather/pages/add/add.component.html":
/*!******************************************************************!*\
  !*** ./src/app/temperature/weather/pages/add/add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"text\" [(ngModel)]=\"cityName\" name=\"city\">\r\n<button (click)=\"details()\">get details</button> -->\r\n<h3>Conversion of Temperature - Celsius to Fahrenheit and vice-versa</h3>\r\n\r\n<div class=\"example-full-width\">  \r\n  <input matInput type=\"text\" name=\"celsius\" (ngModelChange)=\"celsiusChanged($event)\" placeholder=\"Celsius (°C)\t\"\r\n     [(ngModel)]=\"cels\"> \r\n</div>\r\n<div class=\"example-full-width\">\r\n  <input matInput type=\"text\" name=\"fahrenheit\" (ngModelChange)=\"fahrChanged( $event)\" placeholder=\"Fahrenheit (°F)\t\"\r\n     [(ngModel)]=\"fahr\">\r\n</div>"

/***/ }),

/***/ "./src/app/temperature/weather/pages/add/add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/temperature/weather/pages/add/add.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AddComponent = /** @class */ (function () {
    function AddComponent(router) {
        this.router = router;
        this.cels = 0;
        this.fahr = 32;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.details = function () {
        // sessionStorage.setItem("df",this.cityName);
        this.router.navigate(['']);
    };
    AddComponent.prototype.celsiusChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.fahr = ((parseFloat(tempValue) * 9) / 5) + 32;
    };
    AddComponent.prototype.fahrChanged = function (newvalue) {
        var tempValue = newvalue === '' ? '0' : newvalue;
        this.cels = ((parseFloat(tempValue) - 32) * 5) / 9;
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/temperature/weather/pages/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/temperature/weather/pages/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "./src/app/temperature/weather/pages/details/details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/temperature/weather/pages/details/details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-page__wrapper-dark {\r\n    background: linear-gradient(#FC7DB8, #495CFC);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .background-gradient__circle {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n    height: 120%;\r\n  }\r\n  \r\n  .main-weather__card-dark {\r\n    background-color: white;\r\n    height: 85%;\r\n    width: 60%;\r\n    border-radius: 1rem;\r\n    position: relative;\r\n    z-index: 3;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 0.5fr 1.25fr;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .card-header__container-dark {\r\n    width: 100%;\r\n    max-height: 20rem;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .back__button {\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 2.25rem;\r\n    width: 5rem;\r\n    cursor: pointer;\r\n    z-index: 3;\r\n  }\r\n  \r\n  .city__illustration {\r\n    width: 100%;\r\n    border-radius: 1rem 1rem 0 0;\r\n    position: relative;\r\n  }\r\n  \r\n  .header-content__wrapper {\r\n    position: absolute;\r\n    z-index: 2;\r\n    color: white;\r\n    top: 0;\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .temperature__text {\r\n    font-size: 6rem;\r\n    letter-spacing: 0.75rem;\r\n  }\r\n  \r\n  .city-name__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-bottom: 25%;\r\n  }\r\n  \r\n  .city-name__underline {\r\n    background: transparent;\r\n    border-radius: 5px;\r\n    height: 5px;\r\n    box-shadow: 0 3rem 0 0 #ffffff;\r\n  }\r\n  \r\n  .city-name__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.3rem;\r\n    font-size: 1.75rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  .today-weather__container {\r\n    align-self: center;\r\n    justify-self: center;\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-rows: 3fr 1fr;\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n    grid-gap: 2rem;\r\n  }\r\n  \r\n  .temp-state__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: column;\r\n  }\r\n  \r\n  .weather-state__text {\r\n    letter-spacing: 0.5rem;\r\n    font-size: 1.15rem;\r\n    text-transform: uppercase;\r\n    margin-top: 0.25rem;\r\n  }\r\n  \r\n  .hum-wind__container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -4rem;\r\n  }\r\n  \r\n  .hum-wind__separator {\r\n    margin: 0 2rem;\r\n    width: 2px;\r\n    height: 2.5rem;\r\n    background-color: white;\r\n  }\r\n  \r\n  .hum__text, .wind__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .hum__container, .wind__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  /*\r\n  ================\r\n       BODY\r\n  ================\r\n  */\r\n  \r\n  .body-content__wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1.75fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    box-sizing: border-box;\r\n    grid-column-gap: 1rem;\r\n    width: 100%;\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .forecast__container {\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    align-self: center;\r\n    justify-self: center;\r\n  }\r\n  \r\n  .twitter-feed__container {\r\n    margin-top: 1rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  .twitter-feed__text {\r\n    color: #0c1066;\r\n    font-size: 1.25rem;\r\n  }\r\n  \r\n  .twitter__icon {\r\n    width: 1.5rem;\r\n  }\r\n  \r\n  .twitter-feed-tag__text {\r\n    font-size: 0.85rem;\r\n    color: #5f84fb;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .twitter-feed__header {\r\n    display: grid;\r\n    grid-template-rows: 2rem;\r\n    grid-template-columns: 0.5fr 1.5fr 1fr;\r\n    align-items: center;\r\n    justify-items: center;\r\n    width: 100%;\r\n  }\r\n  \r\n  .day-weather__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    margin: 2rem 1.5rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .day-name__text {\r\n    font-size: 1.5rem;\r\n    color: #39437a;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  .forecast-condition__icon {\r\n    height: 4rem;\r\n  }\r\n  \r\n  .day-temp__text {\r\n    font-size: 1.85rem;\r\n    color: #0c1066;\r\n    letter-spacing: 0.25rem;\r\n    margin: 0.75rem 0;\r\n    text-align: center;\r\n    padding-left: 0.35rem;\r\n  }\r\n  \r\n  .day-state__text {\r\n  \r\n    font-size: 0.65rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    color: #2B244D;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvd2VhdGhlci9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixNQUFNO0lBQ04sYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7Ozs7R0FJQzs7RUFFRDtJQUNFLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBlcmF0dXJlL3dlYXRoZXIvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1wYWdlX193cmFwcGVyLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGQzdEQjgsICM0OTVDRkMpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2tncm91bmQtZ3JhZGllbnRfX2NpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTIwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4td2VhdGhlcl9fY2FyZC1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDEuMjVmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyX19jb250YWluZXItZGFyayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2tfX2J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJyZW07XHJcbiAgICBsZWZ0OiAyLjI1cmVtO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuICBcclxuICAuY2l0eV9faWxsdXN0cmF0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50X193cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wZXJhdHVyZV9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpdHktbmFtZV9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX191bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNpdHktbmFtZV9fdGV4dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAudG9kYXktd2VhdGhlcl9fY29udGFpbmVyIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXAtc3RhdGVfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLndlYXRoZXItc3RhdGVfX3RleHQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaHVtLXdpbmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmh1bS13aW5kX19zZXBhcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmh1bV9fdGV4dCwgLndpbmRfX3RleHQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5odW1fX2NvbnRhaW5lciwgLndpbmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICAgICAgQk9EWVxyXG4gID09PT09PT09PT09PT09PT1cclxuICAqL1xyXG4gIFxyXG4gIC5ib2R5LWNvbnRlbnRfX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNzVmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmVjYXN0X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlci1mZWVkX19jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlci1mZWVkX190ZXh0IHtcclxuICAgIGNvbG9yOiAjMGMxMDY2O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlcl9faWNvbiB7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlci1mZWVkLXRhZ19fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogIzVmODRmYjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAudHdpdHRlci1mZWVkX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZGF5LXdlYXRoZXJfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDJyZW0gMS41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZGF5LW5hbWVfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzM5NDM3YTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmVjYXN0LWNvbmRpdGlvbl9faWNvbiB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXktdGVtcF9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuODVyZW07XHJcbiAgICBjb2xvcjogIzBjMTA2NjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXktc3RhdGVfX3RleHQge1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICBjb2xvcjogIzJCMjQ0RDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/temperature/weather/pages/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/temperature/weather/pages/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details-page__wrapper-dark\">\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"0\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#ff8b8b\"/>\r\n        <stop offset=\"1\" stop-color=\"#6676ff\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"664\" cy=\"664\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4572 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\">\r\n    <defs>\r\n      <style>.a {\r\n        fill: #2b244d;\r\n      }\r\n\r\n      .b {\r\n        fill: rgba(0, 0, 0, 0);\r\n      }\r\n\r\n      .b, .c {\r\n        stroke: #fff;\r\n        stroke-width: 2px;\r\n      }\r\n\r\n      .c {\r\n        fill: none;\r\n      }\r\n\r\n      .d {\r\n        fill: #fff;\r\n        font-size: 15px;\r\n        font-family: SegoeUI, Segoe UI;\r\n        letter-spacing: 0.4em;\r\n      }</style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"/>\r\n      <line class=\"b\" x1=\"80\" transform=\"translate(123.5 190.5)\"/>\r\n      <line class=\"b\" y1=\"26\" x2=\"26\" transform=\"translate(123.5 164.5)\"/>\r\n      <line class=\"c\" x1=\"26\" y1=\"27\" transform=\"translate(123.5 190.5)\"/>\r\n      <text class=\"d\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n\r\n  <section class=\"main-weather__card-dark\">\r\n    <section class=\"card-header__container-dark\" [ngSwitch]=\"true\">\r\n\r\n      <svg *ngSwitchCase=\"city === 'paris'\" class=\"city__illustration\" viewBox=\"0 0 3000 1000\">\r\n        <linearGradient id=\"a\" x1=\"1487\" x2=\"1487\" y1=\"-11.5\" y2=\"998.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331464\"/>\r\n          <stop offset=\"1\" stop-color=\"#2e3192\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#a)\" d=\"M-25.5-11.5h3025v1010h-3025z\"/>\r\n        <path d=\"M2999-11V998H-25V-11h3024m1-1H-26V999h3026V-12z\"/>\r\n        <linearGradient id=\"b\" x1=\"1648.1\" x2=\"2243.41\" y1=\"50.5\" y2=\"50.5\"\r\n                        gradientTransform=\"matrix(-.2999 0 0 1 2380.73 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#fff9b3\" stop-opacity=\".4\"/>\r\n          <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#b)\"\r\n              d=\"M1885.28 24.93C1852.53 21.38 1708 3 1708 3v95l177.59-70.04c1.39-.55 1.15-2.87-.31-3.03z\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2358.41 893.69c0 21.87-5.62 42.42-15.5 60.3h-218.65a124.25 124.25 0 0 1-15.5-60.3c0-68.94 55.88-124.83 124.82-124.83s124.83 55.89 124.83 124.83z\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2412.95 893.69c0 21.15-3.66 41.45-10.38 60.3H2064.6a179.07 179.07 0 0 1-10.39-60.3c0-99.07 80.3-179.38 179.37-179.38s179.38 80.31 179.38 179.38z\"\r\n              opacity=\".08\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2440.23 893.69a206.6 206.6 0 0 1-8.94 60.3h-395.41a206.64 206.64 0 0 1-8.94-60.3c0-114.13 92.52-206.65 206.64-206.65s206.65 92.52 206.65 206.65z\"\r\n              opacity=\".08\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2486.7 893.69c0 20.78-2.5 40.97-7.22 60.3h-491.8a253.86 253.86 0 0 1-7.22-60.3c0-139.8 113.33-253.12 253.12-253.12s253.12 113.32 253.12 253.12z\"\r\n              opacity=\".08\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2538.55 893.69c0 20.64-2.05 40.8-5.96 60.3h-598.01a306.09 306.09 0 0 1-5.97-60.3c0-168.43 136.54-304.97 304.97-304.97s304.97 136.54 304.97 304.97z\"\r\n              opacity=\".08\"/>\r\n        <circle cx=\"2154.07\" cy=\"897.53\" r=\"9.22\" fill=\"#EFEFEF\"/>\r\n        <circle cx=\"2224.36\" cy=\"906.75\" r=\"13.83\" fill=\"#EFEFEF\"/>\r\n        <circle cx=\"2299.26\" cy=\"867.57\" r=\"9.22\" fill=\"#EFEFEF\"/>\r\n        <circle cx=\"2182.88\" cy=\"838.38\" r=\"19.59\" fill=\"#EFEFEF\"/>\r\n        <path fill=\"#3D3F5B\"\r\n              d=\"M1886.97 87.07a2.88 2.88 0 0 1-2.88-2.88V22.73a2.88 2.88 0 0 1 5.76 0V84.2c0 1.59-1.3 2.88-2.88 2.88z\"/>\r\n        <linearGradient id=\"c\" x1=\"1880.25\" x2=\"1893.69\" y1=\"53.46\" y2=\"53.46\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#c)\"\r\n              d=\"M1886.97 16a6.73 6.73 0 0 0-6.72 6.73V84.2a6.72 6.72 0 1 0 13.44 0V22.73c0-3.71-3-6.72-6.72-6.72z\"/>\r\n        <linearGradient id=\"d\" x1=\"1845.49\" x2=\"1928.84\" y1=\"242.05\" y2=\"242.05\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#d)\"\r\n              d=\"M1928.84 426.8h-22.09v.2l-38.98-.4v.2h-22.28c18.78-96.9 21.71-223.76 22.08-275.69V76.7a19.65 19.65 0 0 1 19.6-19.6c5.38 0 10.28 2.21 13.83 5.76a19.54 19.54 0 0 1 5.75 13.84v50.7s-.1 7.83-.01 21.36v.25l.01 1.7c.36 51.69 3.26 178.95 22.09 276.09z\"/>\r\n        <linearGradient id=\"e\" x1=\"1784.25\" x2=\"2002.37\" y1=\"523.22\" y2=\"523.22\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#e)\"\r\n              d=\"M1946.15 614.43l-36.64-85.21c-.6-1.41-2-2.33-3.53-2.33h-36.1a3.84 3.84 0 0 0-3.68 2.73l-25.67 84.81h-56.28l63.02-181.68 78.45-.74 76.65 182.42h-56.22z\"/>\r\n        <linearGradient id=\"f\" x1=\"1762.33\" x2=\"2022.36\" y1=\"640.16\" y2=\"640.16\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#f)\"\r\n              d=\"M1762.33 644.88v-9.43c0-4.18 3.4-7.58 7.58-7.58h244.87c4.2 0 7.58 3.4 7.58 7.58v9.43a7.58 7.58 0 0 1-7.58 7.58h-244.87a7.58 7.58 0 0 1-7.58-7.58z\"/>\r\n        <linearGradient id=\"g\" x1=\"1688.56\" x2=\"2098.4\" y1=\"785.34\" y2=\"785.34\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#g)\"\r\n              d=\"M2031.39 905.94c0-1.5-.04-2.92-.1-4.38-.04-1.38-.1-2.8-.1-4.4 0-95.98-51.4-153.29-137.5-153.29-87.48 0-139.83 56.22-140.19 150.47-1.79 1.27-7.28 3.22-10.68 4.43-6.43 2.3-11.63 4.14-14.07 6.82h-40.19l81.52-240.84h244.56l83.76 240.86-67.01.33z\"/>\r\n        <linearGradient id=\"h\" x1=\"1816.49\" x2=\"1957.45\" y1=\"482.11\" y2=\"482.11\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#h)\" d=\"M1821.67 487.3a5.2 5.2 0 0 1 0-10.38h130.6a5.2 5.2 0 0 1 0 10.37h-130.6z\"/>\r\n        <linearGradient id=\"i\" x1=\"1823.02\" x2=\"1951.69\" y1=\"431.71\" y2=\"431.71\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#i)\" d=\"M1828.2 436.9a5.2 5.2 0 0 1 0-10.37h118.3a5.2 5.2 0 0 1 0 10.37h-118.3z\"/>\r\n        <linearGradient id=\"j\" x1=\"1738.52\" x2=\"2046.18\" y1=\"621\" y2=\"621\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#j)\"\r\n              d=\"M1742.36 628c-2.12 0-3.84-3.14-3.84-7s1.72-7 3.84-7h299.98c2.12 0 3.84 3.14 3.84 7s-1.73 7-3.84 7h-299.98z\"/>\r\n        <linearGradient id=\"k\" x1=\"1738.52\" x2=\"2046.18\" y1=\"658.73\" y2=\"658.73\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#k)\"\r\n              d=\"M1742.36 665c-2.12 0-3.84-2.81-3.84-6.27 0-3.46 1.72-6.27 3.84-6.27h299.98c2.12 0 3.84 2.81 3.84 6.27 0 3.46-1.73 6.27-3.84 6.27h-299.98z\"/>\r\n        <linearGradient id=\"l\" x1=\"1853.36\" x2=\"1920.58\" y1=\"117.03\" y2=\"117.03\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#l)\" d=\"M1859.9 123.56a6.54 6.54 0 0 1 0-13.06h54.15a6.54 6.54 0 0 1 0 13.06h-54.16z\"/>\r\n        <linearGradient id=\"m\" x1=\"1723.83\" x2=\"1723.83\" y1=\"895.01\" y2=\"924.2\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#331495\"/>\r\n          <stop offset=\"1\" stop-color=\"#02001d\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#m)\" d=\"M1769.54 924.2h-91.42a14.6 14.6 0 0 1 0-29.2h91.42a14.6 14.6 0 0 1 0 29.2z\"/>\r\n        <path fill=\"#0A0324\" d=\"M2112.54 924.2h-91.42a14.6 14.6 0 0 1 0-29.2h91.42a14.6 14.6 0 0 1 0 29.2z\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M1640.72 248.28l.02-.74a9.54 9.54 0 0 0-5.7-8.7 9.52 9.52 0 0 0-3.8-18.23H1616a28.83 28.83 0 0 0-8.05-9.06 28.76 28.76 0 0 0-42.29-23.82 28.76 28.76 0 0 0-45.64 21.2 28.75 28.75 0 0 0-33.2 16.5h-41.55c-2.62 0-5 1.07-6.72 2.8a9.48 9.48 0 0 0 .4 13.81l-.4.39a9.5 9.5 0 0 0-2.68 5.24h-18.74c-2.62 0-5 1.07-6.72 2.8a9.48 9.48 0 0 0-2.8 6.71 9.54 9.54 0 0 0 9.52 9.52h220.26c2.62 0 5-1.07 6.72-2.8a9.48 9.48 0 0 0-3.4-15.62zm380.02 132.29v-.26a3.4 3.4 0 0 0-2.02-3.1 3.39 3.39 0 0 0-1.37-6.5h-5.43a10.3 10.3 0 0 0-2.87-3.24 10.26 10.26 0 0 0-15.09-8.5 10.26 10.26 0 0 0-16.28 7.56 10.26 10.26 0 0 0-11.84 5.9H1951a3.38 3.38 0 0 0-3.4 3.39c0 1 .45 1.9 1.15 2.53l-.15.14c-.5.5-.84 1.14-.95 1.87h-6.69a3.38 3.38 0 0 0-3.4 3.4 3.4 3.4 0 0 0 3.4 3.39h78.58a3.38 3.38 0 0 0 3.4-3.4 3.4 3.4 0 0 0-2.21-3.18zm427-291.38v-.16c0-.83-.83-1.55-2.02-1.87.38-.1.74-.25 1.03-.43.62-.37 1-.88 1-1.44 0-1.12-1.53-2.04-3.4-2.04h-5.43a8.8 8.8 0 0 0-2.87-1.95c-.29-3.26-4.76-5.84-10.25-5.84-1.75 0-3.4.26-4.84.73a15.16 15.16 0 0 0-6.05-1.2c-5.42 0-9.86 2.54-10.23 5.75-.78-.12-1.6-.18-2.43-.18-4.22 0-7.84 1.53-9.41 3.72H2378c-.93 0-1.78.23-2.4.6-.61.37-1 .88-1 1.45 0 .6.45 1.15 1.15 1.52l-.14.08c-.5.3-.85.7-.96 1.13h-6.69c-.93 0-1.78.23-2.4.6-.6.37-.99.88-.99 1.44 0 1.13 1.53 2.04 3.4 2.04h78.57a4.7 4.7 0 0 0 2.4-.6c.62-.37 1-.88 1-1.44 0-.87-.92-1.62-2.21-1.91zM1143.59 361.66l.01-.4a5.22 5.22 0 0 0-3.12-4.77 5.22 5.22 0 0 0-2.08-9.98h-8.34a15.78 15.78 0 0 0-4.4-4.96 15.74 15.74 0 0 0-23.15-13.03 15.74 15.74 0 0 0-24.98 11.6 15.74 15.74 0 0 0-18.17 9.03h-22.75a5.18 5.18 0 0 0-5.2 5.21 5.2 5.2 0 0 0 1.74 3.89l-.22.2a5.2 5.2 0 0 0-1.47 2.88h-10.25a5.18 5.18 0 0 0-5.21 5.2 5.22 5.22 0 0 0 5.2 5.21h120.57a5.18 5.18 0 0 0 5.2-5.2 5.23 5.23 0 0 0-3.38-4.88z\"\r\n              opacity=\".1\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M628.77 275.6h-185a12.86 12.86 0 0 1-12.82-12.83c0-7.05 5.77-12.82 12.82-12.82h185c7.05 0 12.82 5.77 12.82 12.82 0 7.05-5.77 12.82-12.82 12.82z\"\r\n              opacity=\".03\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M919.4 345.01H721.8a6.54 6.54 0 0 1-6.53-6.52 6.54 6.54 0 0 1 6.53-6.52h197.6a6.54 6.54 0 0 1 6.52 6.52 6.54 6.54 0 0 1-6.53 6.52z\"\r\n              opacity=\".1\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M1274.29 431.04h-51.05c-5.61 0-10.2 4.59-10.2 10.2 0 5.6 4.59 10.19 10.2 10.19h51.05c5.6 0 10.2-4.59 10.2-10.2 0-5.6-4.6-10.19-10.2-10.19zm-408.55 3.95H664.22a7.27 7.27 0 0 1-7.26-7.25 7.27 7.27 0 0 1 7.26-7.26h201.52a7.27 7.27 0 0 1 7.25 7.26 7.27 7.27 0 0 1-7.25 7.25z\"\r\n              opacity=\".05\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2822.73 136h-203.5a6.26 6.26 0 0 1 0-12.52h203.5a6.26 6.26 0 1 1 0 12.52zm-630.5 63.2H2005.3a14.5 14.5 0 0 1-14.47-14.47 14.5 14.5 0 0 1 14.47-14.46h186.93a14.5 14.5 0 0 1 14.47 14.46 14.5 14.5 0 0 1-14.47 14.47z\"\r\n              opacity=\".1\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M464.45 88H89.17a6.71 6.71 0 0 1 0-13.42h375.28a6.71 6.71 0 0 1 0 13.42zM245.1 375H45.44c-4.29 0-7.8-3.5-7.8-7.8v-5.6c0-4.28 3.51-7.8 7.8-7.8h199.67c4.28 0 7.8 3.52 7.8 7.8v5.6c0 4.3-3.52 7.8-7.8 7.8z\"\r\n              opacity=\".07\"/>\r\n        <path fill=\"#FFF\"\r\n              d=\"M2419.99 419.46H2190.5a13.01 13.01 0 0 1-12.97-12.97 13 13 0 0 1 12.97-12.97h229.48c7.13 0 12.97 5.84 12.97 12.97 0 7.13-5.84 12.97-12.97 12.97zm129.55-68.09h-55.7a6.74 6.74 0 0 0-6.72 6.73c0 3.7 3.02 6.72 6.72 6.72h55.7c3.7 0 6.72-3.03 6.72-6.72 0-3.7-3.03-6.73-6.72-6.73zm309.98 149.96h-195.36a14.52 14.52 0 0 1-14.47-14.47c0-7.96 6.51-14.48 14.47-14.48h195.36c7.97 0 14.48 6.52 14.48 14.48 0 7.96-6.51 14.47-14.48 14.47z\"\r\n              opacity=\".1\"/>\r\n        <linearGradient id=\"n\" x1=\"1490.5\" x2=\"1490.5\" y1=\"922.5\" y2=\"999.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#070028\"/>\r\n          <stop offset=\"1\" stop-color=\"#2e3192\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#n)\" stroke=\"#000\" stroke-miterlimit=\"10\" d=\"M-18.5 922.5h3018v77h-3018z\"/>\r\n        <circle cx=\"1174\" cy=\"193\" r=\"2.83\" fill=\"#FFF\"/>\r\n        <circle cx=\"900\" cy=\"158\" r=\"5.45\" fill=\"#FFF\" opacity=\".59\"/>\r\n        <circle cx=\"545\" cy=\"38\" r=\"9\" fill=\"#FFF\" opacity=\".59\"/>\r\n        <circle cx=\"82\" cy=\"158\" r=\"4.24\" fill=\"#FFF\"/>\r\n        <circle cx=\"2805\" cy=\"60\" r=\"6\" fill=\"#FFF\" opacity=\".57\"/>\r\n        <circle cx=\"2838\" cy=\"69\" r=\"2\" fill=\"#FFF\"/>\r\n        <circle cx=\"2869\" cy=\"246\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\r\n        <circle cx=\"2457\" cy=\"189\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\r\n        <circle cx=\"2796\" cy=\"372\" r=\"5\" fill=\"#FFF\" opacity=\".8\"/>\r\n        <circle cx=\"341\" cy=\"189\" r=\"6\" fill=\"#FFF\"/>\r\n        <circle cx=\"1653\" cy=\"338\" r=\"6\" fill=\"#FFF\"/>\r\n        <circle cx=\"1488\" cy=\"81\" r=\"6\" fill=\"#FFF\"/>\r\n        <path\r\n          d=\"M2301.55 722.92c1.92-1.66 3.35-8.26 3.35-8.26s-6.2 3.1-6.2 5.68c0 2.58 1.04 4.12 2.85 2.58zm2.32-2.58s4.12 0 9.28-1.04 8.77 1.55 9.8.52-15.47-4.64-19.08-.52\"/>\r\n        <path\r\n          d=\"M2298.7 720.34s-8.76 3.6-11.34 3.1-7.74-2.07.51-2.07c8.26 0 9.4-.38 11.41-2.51m-.07 45.8c1.15-2.33 2-11.66 2-11.66s-3.7 4.37-3.7 8.02.62 5.83 1.7 3.64zm1.39-3.64s2.45 0 5.53-1.46 5.23 2.19 5.84.73-9.22-6.56-11.38-.73\"/>\r\n        <path\r\n          d=\"M2297.52 761.02s-5.23 5.1-6.77 4.37c-1.53-.73-4.6-2.91.31-2.91 4.92 0 5.6-.55 6.8-3.56m-70.11-4c-1.24-1.66-2.15-8.26-2.15-8.26s3.97 3.1 3.97 5.68c0 2.58-.67 4.12-1.82 2.58zm-1.49-2.58s-2.65 0-5.95-1.04-5.62 1.55-6.28.52c-.66-1.03 9.92-4.64 12.23-.52\"/>\r\n        <path\r\n          d=\"M2229.57 752.34s5.61 3.6 7.27 3.1 4.95-2.07-.33-2.07-6.03-.38-7.31-2.51m-123.45-48.94c-1.24-1.66-2.15-8.26-2.15-8.26s3.97 3.1 3.97 5.68c0 2.58-.67 4.12-1.82 2.58z\"/>\r\n        <path d=\"M2117 698.34s-2.59 0-5.82-1.17c-3.24-1.16-5.5 1.75-6.15.59-.65-1.17 9.7-5.23 11.97-.59\"/>\r\n        <path d=\"M2104.67 697.76s-6.17 2.56-6.69 4.21c-.52 1.65-1.13 5.25 1.89.9 3.01-4.34 3.74-4.72 6.23-4.57\"/>\r\n        <linearGradient id=\"o\" x1=\"1888.51\" x2=\"2127\" y1=\"55.5\" y2=\"55.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#fff9b3\" stop-opacity=\".7\"/>\r\n          <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#o)\"\r\n              d=\"M1890.16 24.28C1933.92 19.94 2127-2.5 2127-2.5v116l-237.25-85.52c-1.86-.67-1.54-3.5.41-3.7z\"/>\r\n        <path fill=\"#1F1D2B\"\r\n              d=\"M783.56 119.74H629.7a7.46 7.46 0 0 1-7.45-7.45 7.47 7.47 0 0 1 7.45-7.44h153.85c4.1 0 7.44 3.35 7.44 7.44 0 4.1-3.35 7.45-7.44 7.45z\"/>\r\n        <path fill=\"#1F1D2B\"\r\n              d=\"M781.45 111.56H631.71a7.46 7.46 0 0 1-7.45-7.44c0-4.1 3.35-7.45 7.45-7.45h149.74c4.1 0 7.44 3.35 7.44 7.45a7.46 7.46 0 0 1-7.44 7.44z\"\r\n              opacity=\".43\"/>\r\n        <path fill=\"#1F1D2B\"\r\n              d=\"M789.47 112.03H624.53a5.5 5.5 0 0 1-5.48-5.49 5.5 5.5 0 0 1 5.49-5.48h164.93a5.5 5.5 0 0 1 5.48 5.48 5.5 5.5 0 0 1-5.49 5.49z\"\r\n              opacity=\".86\"/>\r\n        <path fill=\"#1F1D2B\"\r\n              d=\"M723.45 146.24l-15.85-31.41a7.46 7.46 0 0 1 3.3-10 7.46 7.46 0 0 1 9.99 3.3l15.85 31.4a7.46 7.46 0 0 1-3.3 10 7.46 7.46 0 0 1-10-3.3z\"\r\n              opacity=\".76\"/>\r\n        <path fill=\"#1F1D2B\"\r\n              d=\"M709.86 93.81l26.61-23a7.46 7.46 0 0 1 10.5.76 7.46 7.46 0 0 1-.76 10.5l-26.62 23a7.46 7.46 0 0 1-10.5-.76 7.46 7.46 0 0 1 .77-10.5zm58.78 6.75l28.88-25.08L789 117z\"/>\r\n        <radialGradient id=\"p\" cx=\"797\" cy=\"76\" r=\"4\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#c81464\"/>\r\n          <stop offset=\"1\" stop-color=\"#933100\" stop-opacity=\"0\"/>\r\n        </radialGradient>\r\n        <path fill=\"url(#p)\" d=\"M797 80c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\"/>\r\n        <g opacity=\".35\">\r\n          <radialGradient id=\"q\" cx=\"796.58\" cy=\"80\" r=\"4\" gradientTransform=\"translate(291.91 27.37) scale(.6328)\"\r\n                          gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#fff\"/>\r\n            <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\r\n          </radialGradient>\r\n          <path fill=\"url(#q)\" d=\"M796 80.53a2.53 2.53 0 1 1 0-5.05 2.53 2.53 0 0 1 0 5.05z\"/>\r\n        </g>\r\n        <path fill=\"#FFF\"\r\n              d=\"M1118.5 120h-182a3.51 3.51 0 0 1-3.5-3.5v-8a3.5 3.5 0 0 1 3.5-3.5h182a3.5 3.5 0 0 1 3.5 3.5v8c0 1.92-1.58 3.5-3.5 3.5zm-178 111h-98a3.5 3.5 0 0 1 0-7h98a3.5 3.5 0 0 1 0 7zm-74-115h-36a3.5 3.5 0 0 1 0-7h36a3.5 3.5 0 0 1 0 7zm112-62h-62a3.5 3.5 0 0 1 0-7h62a3.5 3.5 0 0 1 0 7zm198 51h-26a3.5 3.5 0 0 1 0-7h26a3.5 3.5 0 0 1 0 7z\"\r\n              opacity=\".03\"/>\r\n        <g opacity=\".3\">\r\n          <path fill=\"#FFF\"\r\n                d=\"M1469.93 422.7a10.83 10.83 0 0 1-12.27-9.08 10.83 10.83 0 0 1 9.08-12.27 10.83 10.83 0 0 1 12.28 9.08 10.83 10.83 0 0 1-9.1 12.27z\"\r\n                opacity=\".25\"/>\r\n          <path fill=\"#FFF\"\r\n                d=\"M1469.5 419.88a7.96 7.96 0 0 1-9.01-6.68 7.96 7.96 0 0 1 6.67-9.02 7.96 7.96 0 0 1 9.03 6.68 7.96 7.96 0 0 1-6.68 9.02z\"\r\n                opacity=\".22\"/>\r\n          <linearGradient id=\"r\" x1=\"1180.32\" x2=\"1180.32\" y1=\"1190.26\" y2=\"912.26\"\r\n                          gradientTransform=\"matrix(.4432 -.5986 .8097 .5995 -18.4 404.93)\"\r\n                          gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#c4c7ff\" stop-opacity=\".5\"/>\r\n            <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#r)\"\r\n                d=\"M1467.83 412.71a3.88 3.88 0 0 1-5.43.81l-221.97-164.34 5.76-7.78 220.43 163.2a5.8 5.8 0 0 1 1.21 8.11z\"\r\n                opacity=\".81\"/>\r\n          <path fill=\"#FFF\"\r\n                d=\"M1469.02 416.6a4.64 4.64 0 0 1-5.26-3.9 4.64 4.64 0 0 1 3.9-5.25 4.64 4.64 0 0 1 5.25 3.9 4.64 4.64 0 0 1-3.9 5.25z\"\r\n                opacity=\".35\"/>\r\n        </g>\r\n      </svg>\r\n\r\n      <svg *ngSwitchCase=\"city === 'doha'\" class=\"city__illustration\" viewBox=\"0 0 3000 1000\">\r\n        <g opacity=\".8\">\r\n          <linearGradient id=\"a\" x1=\"2091.51\" x2=\"908.49\" y1=\"-524.52\" y2=\"1524.52\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#0051af\"/>\r\n            <stop offset=\".26\" stop-color=\"#008daf\"/>\r\n            <stop offset=\"1\" stop-color=\"#1b2c32\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#a)\" d=\"M0 0h3000v1000H0z\"/>\r\n        </g>\r\n        <path fill=\"#1C1549\" d=\"M0 748h2253v18H0z\"/>\r\n        <g opacity=\".51\">\r\n          <linearGradient id=\"b\" x1=\"3002\" x2=\"0\" y1=\"500\" y2=\"500\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#7f21b9\"/>\r\n            <stop offset=\"1\" stop-color=\"#1b2c32\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#b)\" d=\"M0 0h3002v1000H0z\"/>\r\n        </g>\r\n        <linearGradient id=\"c\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#c)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\r\n        <linearGradient id=\"d\" x1=\"1779\" x2=\"1779\" y1=\"510\" y2=\"902\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#d)\" d=\"M2171 902h-784c0-216.5 175.5-392 392-392s392 175.5 392 392z\" opacity=\".02\"/>\r\n        <linearGradient id=\"e\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#e)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\r\n        <linearGradient id=\"f\" x1=\"1779\" x2=\"1779\" y1=\"485.5\" y2=\"926.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#f)\" d=\"M2220 926.5h-882c0-243.56 197.44-441 441-441s441 197.44 441 441z\" opacity=\".02\"/>\r\n        <path fill=\"#1C1549\" d=\"M912 747H793l35-190 24-110z\" opacity=\".5\"/>\r\n        <path fill=\"#1C1549\" d=\"M96 444h100v307H96z\"/>\r\n        <path fill=\"#16133F\" d=\"M846 747H718V420c70.7 0 128 57.3 128 128v199z\"/>\r\n        <path fill=\"#1C1549\" d=\"M169 393h-52l-21 54h100zm-5-24l-39 1-1 23h40z\"/>\r\n        <path fill=\"#16133F\" d=\"M1112 581h-104l-24 167h128z\"/>\r\n        <path fill=\"#16133F\" d=\"M1112 500l-82 48-4 35 86-2z\"/>\r\n        <path fill=\"#16133F\" d=\"M1112 482l-32-6-2 44 34-20z\"/>\r\n        <path fill=\"#1C1549\" d=\"M756 747H628V420c70.7 0 128 57.3 128 128v199z\"/>\r\n        <path fill=\"#16133F\"\r\n              d=\"M1305.65 527c-.06 57.58 7.25 130.85 29.35 221h-163c22.1-90.15 29.41-163.42 29.35-221-.08-75.02-12.66-123.43-21.32-147.89-4.35-12.29-7.71-18.53-8.01-19.07l-.02-.04h163l-.02.04c-.3.54-3.66 6.78-8.01 19.07-8.66 24.46-21.24 72.87-21.32 147.89z\"\r\n              opacity=\".9\"/>\r\n        <path fill=\"#1C1549\" d=\"M228 485h119v263H228z\" opacity=\".8\"/>\r\n        <path fill=\"#1C1549\" d=\"M167 574.52h51v171.86h-51z\" opacity=\".5\"/>\r\n        <path fill=\"#1C1549\"\r\n              d=\"M512.33 747H382V408.17c0-35.85 29.32-65.17 65.17-65.17 35.84 0 65.16 29.32 65.16 65.17V747z\"/>\r\n        <path fill=\"#1C1549\" d=\"M450 351h-6l3-79z\"/>\r\n        <path fill=\"#1C1549\" d=\"M347 694h32v52.38h-32zm272 54H500l35-190h84z\" opacity=\".5\"/>\r\n        <path fill=\"#1C1549\" d=\"M0 690h37v58H0z\" opacity=\".4\"/>\r\n        <path fill=\"#1C1549\" d=\"M39 616h54v131H39zm54 0H63v-52h30z\" opacity=\".7\"/>\r\n        <path fill=\"#16133F\" d=\"M1430 524h108v224h-108zm17-25h75v25h-75zm63 0h-53v-23.5a26.5 26.5 0 0 1 53 0V499z\"\r\n              opacity=\".9\"/>\r\n        <path fill=\"#16133F\" d=\"M903.97 463.05h104.07V748H903.97z\" opacity=\".8\"/>\r\n        <ellipse cx=\"956\" cy=\"462.43\" fill=\"#16133F\" opacity=\".8\" rx=\"52.03\" ry=\"77.43\"/>\r\n        <path fill=\"#1C1549\" d=\"M1349 574h53v174h-53zm53 0h-53v-39l15 12z\" opacity=\".8\"/>\r\n        <path fill=\"#1C1549\" d=\"M1119 431h68v317h-68z\" opacity=\".7\"/>\r\n        <path fill=\"#1C1549\" d=\"M379 694h-17v-69l1 23zm-25-69h8v69h-8z\" opacity=\".5\"/>\r\n        <g opacity=\".51\">\r\n          <linearGradient id=\"g\" x1=\"1501\" x2=\"1501\" y1=\"998\" y2=\"-2\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#d72c32\"/>\r\n            <stop offset=\"1\" stop-color=\"#649eb9\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#g)\" d=\"M0-2h3002V998H0z\"/>\r\n        </g>\r\n        <linearGradient id=\"h\" x1=\"1500.31\" x2=\"1500.31\" y1=\"766\" y2=\"1008.78\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#5d224b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#h)\" d=\"M-2 771.86s2998.22-23.03 3002.22 22.22S3002 1000 3002 1000l-3004 8.78V771.86z\"/>\r\n        <linearGradient id=\"i\" x1=\"1963\" x2=\"1963\" y1=\"891\" y2=\"557\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#i)\" d=\"M1937 557h52v334h-52z\"/>\r\n        <linearGradient id=\"j\" x1=\"2137\" x2=\"2137\" y1=\"891\" y2=\"593\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#j)\" d=\"M2111 593h52v298h-52z\"/>\r\n        <linearGradient id=\"k\" x1=\"2594.5\" x2=\"2594.5\" y1=\"848\" y2=\"706\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#k)\" d=\"M2191 706h807v142h-807z\"/>\r\n        <linearGradient id=\"l\" x1=\"2614\" x2=\"2614\" y1=\"706\" y2=\"564\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#l)\" d=\"M2234 564h760v142h-760z\" opacity=\".9\"/>\r\n        <linearGradient id=\"m\" x1=\"2705\" x2=\"2705\" y1=\"706\" y2=\"564\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#m)\" d=\"M2415 564h580v142h-580z\" opacity=\".6\"/>\r\n        <linearGradient id=\"n\" x1=\"2568.5\" x2=\"2568.5\" y1=\"706\" y2=\"564\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#n)\" d=\"M2681 564h321v142h-321z\" opacity=\".9\"/>\r\n        <linearGradient id=\"o\" x1=\"2739.5\" x2=\"2739.5\" y1=\"848\" y2=\"706\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#o)\" d=\"M2339 422h663v142h-663z\" opacity=\".8\"/>\r\n        <linearGradient id=\"p\" x1=\"2585\" x2=\"2585\" y1=\"848\" y2=\"706\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#p)\" d=\"M2648 422h354v142h-354z\"/>\r\n        <linearGradient id=\"q\" x1=\"2862\" x2=\"2862\" y1=\"990\" y2=\"848\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#q)\" d=\"M2415 280h266v142h-266z\" opacity=\".8\"/>\r\n        <linearGradient id=\"r\" x1=\"2730\" x2=\"2410\" y1=\"919\" y2=\"919\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#r)\" d=\"M2680 280h320v142h-320z\" opacity=\".9\"/>\r\n        <linearGradient id=\"s\" x1=\"2774\" x2=\"2774\" y1=\"1177\" y2=\"990\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#s)\" d=\"M2548 101l176-8v187h-176z\" opacity=\".8\"/>\r\n        <linearGradient id=\"t\" x1=\"2949\" x2=\"2949\" y1=\"1177\" y2=\"990\" gradientTransform=\"matrix(1 0 0 -1 -139 1270)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#t)\" d=\"M2896 105l-172-12v187h169z\"/>\r\n        <linearGradient id=\"u\" x1=\"2615.5\" x2=\"2615.5\" y1=\"569\" y2=\"427\" gradientTransform=\"translate(190 274)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#u)\" d=\"M2609 701h393v142h-393z\"/>\r\n        <linearGradient id=\"v\" x1=\"2927\" x2=\"2927\" y1=\"569\" y2=\"427\" gradientTransform=\"rotate(180 2705 635)\"\r\n                        gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#v)\" d=\"M2361 701h244v142h-244z\"/>\r\n        <path fill=\"#16133F\" d=\"M1184.03 391.11l-8.01-19.07c.3.54 3.66 6.78 8.01 19.07z\"/>\r\n        <g opacity=\".65\">\r\n          <path fill=\"#16133F\"\r\n                d=\"M1240.8 832.14v43.37s33.73 41.17 66 47.56l181.12-3.55s12.46-20.58 117.32-59.62c0 0-129.06 22.71-151.06 18.45-22-4.26-114.39 4.97-142.99-2.84l-37.4-40.43-32.99-2.94z\"/>\r\n          <path fill=\"#16133F\"\r\n                d=\"M1584.71 868.6l19.14-22.72 13.97-2.74-13.67 23.01zm-77.53 6.97l-.2-41.96H1306.8l.57 5.52 192.28.35 1.76 36.82zm-266.38-66.16h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4z\"/>\r\n          <path fill=\"#16133F\"\r\n                d=\"M1306.8 809.41h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm7.34 0h4.4v27.13h-4.4zm7.33 0h4.4v27.13h-4.4zm-46.2 28.6h2.2v41.06h-2.2zm-22-1.47h2.2v41.06h-2.2zm36.67 1.47h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm14.66 0h2.2v41.06h-2.2zm14.67 0h2.2v41.06h-2.2zm17.6 0h2.2v41.06h-2.2z\"/>\r\n          <path fill=\"#16133F\"\r\n                d=\"M1240.8 821.88v-13.93h128.32v4.4zm-1.1 12.71s190.63 21.1 276.63 9.04c0 0-3.25-5.7-9.8-4.6-6.55 1.09-178.43-26.19-266.83-4.44zm49.5 18.09h215.58v5.87H1289.2z\"/>\r\n          <path fill=\"#16133F\"\r\n                d=\"M1240.8 808.43s-13.93-7.08-20.53-10.02c-6.6-2.93 0 0 0 0s0-1.46 2.93-1.46-.73.73 19.8 11l-2.2.48z\"/>\r\n          <linearGradient id=\"w\" x1=\"1211.4\" x2=\"1211.4\" y1=\"827.01\" y2=\"786\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#w)\"\r\n                d=\"M1212.5 786s-10.2 16.81-14.41 29.65c0 0 1.65 3.3 3.11 6.96s-1.46 2.2 1.47 3.67 0 0 4.4.73h11s-4.32-12.2 6.64-29.93L1212.49 786z\"/>\r\n        </g>\r\n        <linearGradient id=\"x\" x1=\"1774\" x2=\"1774\" y1=\"645\" y2=\"745\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#64001c\"/>\r\n          <stop offset=\"1\" stop-color=\"#df6b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#x)\" d=\"M1874 745h-200c0-55.23 44.77-100 100-100s100 44.77 100 100z\" opacity=\".36\"/>\r\n        <linearGradient id=\"y\" x1=\"1779\" x2=\"1779\" y1=\"606\" y2=\"806\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#y)\" d=\"M1979 806h-400c0-110.46 89.54-200 200-200s200 89.54 200 200z\" opacity=\".02\"/>\r\n        <linearGradient id=\"z\" x1=\"1779\" x2=\"1779\" y1=\"579\" y2=\"833\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#z)\" d=\"M2033 833h-508c0-140.28 113.72-254 254-254s254 113.72 254 254z\" opacity=\".02\"/>\r\n        <linearGradient id=\"A\" x1=\"1779\" x2=\"1779\" y1=\"537.5\" y2=\"874.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#A)\" d=\"M2116 874.5h-674c0-186.13 150.88-337 337-337s337 150.88 337 337z\" opacity=\".02\"/>\r\n        <linearGradient id=\"B\" x1=\"1779\" x2=\"1779\" y1=\"562.5\" y2=\"849.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#B)\" d=\"M2066 849.5h-574c0-158.51 128.49-287 287-287s287 128.49 287 287z\" opacity=\".02\"/>\r\n        <linearGradient id=\"C\" x1=\"1779\" x2=\"1779\" y1=\"606\" y2=\"806\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#C)\" d=\"M1979 806h-400c0-110.46 89.54-200 200-200s200 89.54 200 200z\" opacity=\".02\"/>\r\n        <linearGradient id=\"D\" x1=\"1779\" x2=\"1779\" y1=\"637.5\" y2=\"774.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#D)\" d=\"M1916 774.5h-274c0-75.67 61.34-137 137-137s137 61.34 137 137z\" opacity=\".02\"/>\r\n        <linearGradient id=\"E\" x1=\"1779\" x2=\"1779\" y1=\"620\" y2=\"792\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"red\"/>\r\n          <stop offset=\"1\" stop-color=\"#846b00\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#E)\" d=\"M1951 792h-344c0-95 77-172 172-172s172 77 172 172z\" opacity=\".02\"/>\r\n        <linearGradient id=\"F\" x1=\"1957\" x2=\"1963\" y1=\"532\" y2=\"532\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#F)\" d=\"M1957 507h6v50h-6z\"/>\r\n        <linearGradient id=\"G\" x1=\"2133\" x2=\"2139\" y1=\"568\" y2=\"568\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#G)\" d=\"M2133 543h6v50h-6z\"/>\r\n        <linearGradient id=\"H\" x1=\"1923\" x2=\"1993\" y1=\"503.67\" y2=\"503.67\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#H)\" d=\"M1923 507s41-15 70 0h-70z\"/>\r\n        <linearGradient id=\"I\" x1=\"2100\" x2=\"2170\" y1=\"539.67\" y2=\"539.67\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#I)\" d=\"M2100 543s41-15 70 0h-70z\"/>\r\n        <linearGradient id=\"J\" x1=\"1989\" x2=\"3002\" y1=\"864.5\" y2=\"864.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#J)\" d=\"M1989 838h1013v53H1989z\"/>\r\n        <linearGradient id=\"K\" x1=\"1854\" x2=\"1937\" y1=\"878.5\" y2=\"878.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#K)\" d=\"M1854 866h83v25h-83z\"/>\r\n        <linearGradient id=\"L\" x1=\"1896\" x2=\"1937\" y1=\"860\" y2=\"860\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#L)\" d=\"M1896 854h41v12h-41z\"/>\r\n        <linearGradient id=\"M\" x1=\"1922\" x2=\"1937\" y1=\"848\" y2=\"848\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#25004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#M)\" d=\"M1922 842h15v12h-15z\"/>\r\n        <linearGradient id=\"N\" x1=\"2882\" x2=\"2882\" y1=\"334\" y2=\"325\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#N)\" d=\"M2875 334s12.53-3 14-9v9h-14z\"/>\r\n        <linearGradient id=\"O\" x1=\"2837.94\" x2=\"2837.94\" y1=\"334\" y2=\"325\"\r\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#O)\" d=\"M2889 334h16s-14.32-3-16-9\"/>\r\n        <linearGradient id=\"P\" x1=\"2875\" x2=\"2905\" y1=\"348\" y2=\"348\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#P)\" d=\"M2875 334h30v28h-30z\"/>\r\n        <linearGradient id=\"Q\" x1=\"2772\" x2=\"2772\" y1=\"332\" y2=\"323\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#Q)\" d=\"M2765 332s12.53-3 14-9v9h-14z\"/>\r\n        <linearGradient id=\"R\" x1=\"2968.56\" x2=\"2968.56\" y1=\"332\" y2=\"323\"\r\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#R)\" d=\"M2779 332h16s-14.32-3-16-9\"/>\r\n        <linearGradient id=\"S\" x1=\"2765\" x2=\"2795\" y1=\"346\" y2=\"346\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#S)\" d=\"M2765 332h30v28h-30z\"/>\r\n        <linearGradient id=\"T\" x1=\"2757\" x2=\"2757\" y1=\"484\" y2=\"475\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#T)\" d=\"M2750 484s12.53-3 14-9v9h-14z\"/>\r\n        <linearGradient id=\"U\" x1=\"2986.38\" x2=\"2986.38\" y1=\"484\" y2=\"475\"\r\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#U)\" d=\"M2764 484h16s-14.32-3-16-9\"/>\r\n        <linearGradient id=\"V\" x1=\"2750\" x2=\"2780\" y1=\"498\" y2=\"498\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#V)\" d=\"M2750 484h30v28h-30z\"/>\r\n        <linearGradient id=\"W\" x1=\"2943\" x2=\"2943\" y1=\"484\" y2=\"475\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#W)\" d=\"M2936 484s12.53-3 14-9v9h-14z\"/>\r\n        <linearGradient id=\"X\" x1=\"2765.5\" x2=\"2765.5\" y1=\"484\" y2=\"475\"\r\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#X)\" d=\"M2950 484h16s-14.32-3-16-9\"/>\r\n        <linearGradient id=\"Y\" x1=\"2936\" x2=\"2966\" y1=\"498\" y2=\"498\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#Y)\" d=\"M2936 484h30v28h-30z\"/>\r\n        <linearGradient id=\"Z\" x1=\"2852\" x2=\"2852\" y1=\"483\" y2=\"474\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#Z)\" d=\"M2845 483s12.53-3 14-9v9h-14z\"/>\r\n        <linearGradient id=\"aa\" x1=\"2873.56\" x2=\"2873.56\" y1=\"483\" y2=\"474\"\r\n                        gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aa)\" d=\"M2859 483h16s-14.32-3-16-9\"/>\r\n        <linearGradient id=\"ab\" x1=\"2845\" x2=\"2875\" y1=\"497\" y2=\"497\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ab)\" d=\"M2845 483h30v28h-30z\"/>\r\n        <g opacity=\".8\">\r\n          <linearGradient id=\"ac\" x1=\"2582.13\" x2=\"2582.13\" y1=\"341\" y2=\"332\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#ac)\" d=\"M2577 341s9.19-3 10.27-9v9H2577z\"/>\r\n          <linearGradient id=\"ad\" x1=\"3198.78\" x2=\"3198.78\" y1=\"341\" y2=\"332\"\r\n                          gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#ad)\" d=\"M2587.27 341H2599s-10.5-3-11.73-9\"/>\r\n          <linearGradient id=\"ae\" x1=\"2577\" x2=\"2599\" y1=\"355\" y2=\"355\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#ae)\" d=\"M2577 341h22v28h-22z\"/>\r\n        </g>\r\n        <g opacity=\".8\">\r\n          <linearGradient id=\"af\" x1=\"2484.13\" x2=\"2484.13\" y1=\"338\" y2=\"329\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#af)\" d=\"M2479 338s9.19-3 10.27-9v9H2479z\"/>\r\n          <linearGradient id=\"ag\" x1=\"3315.15\" x2=\"3315.15\" y1=\"338\" y2=\"329\"\r\n                          gradientTransform=\"matrix(-.8421 0 0 1 5286.84 0)\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#ag)\" d=\"M2489.27 338H2501s-10.5-3-11.73-9\"/>\r\n          <linearGradient id=\"ah\" x1=\"2479\" x2=\"2501\" y1=\"352\" y2=\"352\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n            <stop offset=\"1\" stop-color=\"#040050\"/>\r\n          </linearGradient>\r\n          <path fill=\"url(#ah)\" d=\"M2479 338h22v28h-22z\"/>\r\n        </g>\r\n        <linearGradient id=\"ai\" x1=\"2644.25\" x2=\"2644.25\" y1=\"280\" y2=\"223.56\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ai)\" d=\"M2579.5 280s53.5-127 129.5 0h-129.5z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aj\" x1=\"2816.25\" x2=\"2816.25\" y1=\"280\" y2=\"230\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aj)\" d=\"M2761.5 280s52.16-112.5 109.5 0h-109.5z\"/>\r\n        <linearGradient id=\"ak\" x1=\"2401.5\" x2=\"2401.5\" y1=\"471.84\" y2=\"446.16\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ak)\" d=\"M2420 471.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\r\n        <linearGradient id=\"al\" x1=\"2278.5\" x2=\"2278.5\" y1=\"660.84\" y2=\"606\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#al)\" d=\"M2297 660.84h-37V624.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\r\n        <linearGradient id=\"am\" x1=\"2495.5\" x2=\"2495.5\" y1=\"471.84\" y2=\"446.16\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#am)\" d=\"M2514 471.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\r\n        <linearGradient id=\"an\" x1=\"2590.5\" x2=\"2590.5\" y1=\"470.84\" y2=\"445.16\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#an)\" d=\"M2609 470.84h-37v-7.18a18.5 18.5 0 0 1 37 0v7.18z\"/>\r\n        <linearGradient id=\"ao\" x1=\"2278.5\" x2=\"2278.5\" y1=\"648\" y2=\"642\"\r\n                        gradientTransform=\"matrix(1 0 0 -1.1667 0 1404)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ao)\" d=\"M2260 648h37v7h-37z\"/>\r\n        <linearGradient id=\"ap\" x1=\"2359.5\" x2=\"2359.5\" y1=\"659.84\" y2=\"605\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ap)\" d=\"M2378 659.84h-37V623.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\r\n        <linearGradient id=\"aq\" x1=\"2359.5\" x2=\"2359.5\" y1=\"648.86\" y2=\"642.86\"\r\n                        gradientTransform=\"matrix(1 0 0 -1.1667 0 1404)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aq)\" d=\"M2341 647h37v7h-37z\"/>\r\n        <linearGradient id=\"ar\" x1=\"2415\" x2=\"2684\" y1=\"602.5\" y2=\"602.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ar)\" d=\"M2415 600h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"as\" x1=\"2415\" x2=\"2684\" y1=\"612.5\" y2=\"612.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#as)\" d=\"M2415 610h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"at\" x1=\"2415\" x2=\"2684\" y1=\"622.5\" y2=\"622.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#at)\" d=\"M2415 620h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"au\" x1=\"2415\" x2=\"2684\" y1=\"632.5\" y2=\"632.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#au)\" d=\"M2415 630h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"av\" x1=\"2415\" x2=\"2684\" y1=\"642.5\" y2=\"642.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#av)\" d=\"M2415 640h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aw\" x1=\"2415\" x2=\"2684\" y1=\"652.5\" y2=\"652.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aw)\" d=\"M2415 650h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"ax\" x1=\"2415\" x2=\"2684\" y1=\"662.5\" y2=\"662.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ax)\" d=\"M2415 660h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"ay\" x1=\"2361\" x2=\"2605\" y1=\"730.5\" y2=\"730.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ay)\" d=\"M2361 728h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"az\" x1=\"2361\" x2=\"2605\" y1=\"740.5\" y2=\"740.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#az)\" d=\"M2361 738h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aA\" x1=\"2361\" x2=\"2605\" y1=\"750.5\" y2=\"750.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aA)\" d=\"M2361 748h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aB\" x1=\"2361\" x2=\"2605\" y1=\"760.5\" y2=\"760.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aB)\" d=\"M2361 758h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aC\" x1=\"2361\" x2=\"2605\" y1=\"770.5\" y2=\"770.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aC)\" d=\"M2361 768h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aD\" x1=\"2361\" x2=\"2605\" y1=\"780.5\" y2=\"780.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aD)\" d=\"M2361 778h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aE\" x1=\"2361\" x2=\"2605\" y1=\"790.5\" y2=\"790.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aE)\" d=\"M2361 788h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aF\" x1=\"2361\" x2=\"2605\" y1=\"800.5\" y2=\"800.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aF)\" d=\"M2361 798h244v5h-244z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aG\" x1=\"2415\" x2=\"2684\" y1=\"672.5\" y2=\"672.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aG)\" d=\"M2415 670h269v5h-269z\" opacity=\".6\"/>\r\n        <linearGradient id=\"aH\" x1=\"2496\" x2=\"2496\" y1=\"529\" y2=\"495\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aH)\" d=\"M2383 495h226v34h-226z\" opacity=\".2\"/>\r\n        <linearGradient id=\"aI\" x1=\"2498\" x2=\"2498\" y1=\"547.5\" y2=\"513.5\"\r\n                        gradientTransform=\"matrix(1 0 0 -.2353 0 665.82)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aI)\" d=\"M2385 537h226v8h-226z\" opacity=\".2\"/>\r\n        <linearGradient id=\"aJ\" x1=\"2283\" x2=\"2283\" y1=\"755\" y2=\"728\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aJ)\" d=\"M2222 728h122v27h-122z\" opacity=\".5\"/>\r\n        <linearGradient id=\"aK\" x1=\"2283\" x2=\"2283\" y1=\"790\" y2=\"763\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aK)\" d=\"M2222 763h122v27h-122z\" opacity=\".5\"/>\r\n        <linearGradient id=\"aL\" x1=\"2283\" x2=\"2283\" y1=\"825\" y2=\"798\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aL)\" d=\"M2222 798h122v27h-122z\" opacity=\".5\"/>\r\n        <linearGradient id=\"aM\" x1=\"2768.5\" x2=\"2768.5\" y1=\"649\" y2=\"597\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040031\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aM)\"\r\n              d=\"M2800 649h-63v-25.75a26.25 26.25 0 0 1 26.25-26.25h11a25.75 25.75 0 0 1 25.75 25.75V649z\"\r\n              opacity=\".9\"/>\r\n        <linearGradient id=\"aN\" x1=\"2801.5\" x2=\"2801.5\" y1=\"496\" y2=\"416.8\"\r\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aN)\" d=\"M2738 649v-45h-11v45z\"/>\r\n        <linearGradient id=\"aO\" x1=\"2801.5\" x2=\"2801.5\" y1=\"1014.4\" y2=\"935.2\"\r\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aO)\" d=\"M2810 649v-45h-11v45z\"/>\r\n        <linearGradient id=\"aP\" x1=\"2768.5\" x2=\"2768.5\" y1=\"949.6\" y2=\"870.4\"\r\n                        gradientTransform=\"matrix(1 0 0 -.1389 0 728.89)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aP)\" d=\"M2801 597h-65a11 11 0 0 0-11 11h87a11 11 0 0 0-11-11z\"/>\r\n        <linearGradient id=\"aQ\" x1=\"2769\" x2=\"2724.36\" y1=\"606.5\" y2=\"606.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aQ)\" d=\"M2725 614.5s-4-9.5 8-11.5 31 7 33 0 3-7 3-7v21l-44-2.5z\"/>\r\n        <linearGradient id=\"aR\" x1=\"2715\" x2=\"2670.59\" y1=\"606.5\" y2=\"606.5\"\r\n                        gradientTransform=\"matrix(-1 0 0 1 5483.36 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aR)\" d=\"M2812 617s4.36-12-7.64-14-31 7-33 0-3-7-3-7l.64 21h43z\"/>\r\n        <linearGradient id=\"aS\" x1=\"2921.5\" x2=\"2921.5\" y1=\"653\" y2=\"601\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040031\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aS)\"\r\n              d=\"M2953 653h-63v-25.75a26.25 26.25 0 0 1 26.25-26.25h11a25.75 25.75 0 0 1 25.75 25.75V653z\"\r\n              opacity=\".9\"/>\r\n        <linearGradient id=\"aT\" x1=\"2805.5\" x2=\"2805.5\" y1=\"1597.6\" y2=\"1518.4\"\r\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aT)\" d=\"M2891 653v-45h-11v45z\"/>\r\n        <linearGradient id=\"aU\" x1=\"2805.5\" x2=\"2805.5\" y1=\"2116\" y2=\"2036.8\"\r\n                        gradientTransform=\"matrix(0 1 .1389 0 2669.11 -2175)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aU)\" d=\"M2963 653v-45h-11v45z\"/>\r\n        <linearGradient id=\"aV\" x1=\"2921.5\" x2=\"2921.5\" y1=\"920.8\" y2=\"841.6\"\r\n                        gradientTransform=\"matrix(1 0 0 -.1389 0 728.89)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aV)\" d=\"M2954 601h-65a11 11 0 0 0-11 11h87a11 11 0 0 0-11-11z\"/>\r\n        <linearGradient id=\"aW\" x1=\"2922\" x2=\"2877.36\" y1=\"610.5\" y2=\"610.5\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aW)\" d=\"M2878 618.5s-4-9.5 8-11.5 31 7 33 0 3-7 3-7v21l-44-2.5z\"/>\r\n        <linearGradient id=\"aX\" x1=\"2562\" x2=\"2517.59\" y1=\"610.5\" y2=\"610.5\"\r\n                        gradientTransform=\"matrix(-1 0 0 1 5483.36 0)\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aX)\" d=\"M2965 621s4.36-12-7.64-14-31 7-33 0-3-7-3-7l.64 21h43z\"/>\r\n        <linearGradient id=\"aY\" x1=\"2705.56\" x2=\"2659.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aY)\" d=\"M2700 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\r\n        <linearGradient id=\"aZ\" x1=\"2810.56\" x2=\"2764.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#aZ)\" d=\"M2805 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\r\n        <linearGradient id=\"ba\" x1=\"2912.56\" x2=\"2866.92\" y1=\"786.22\" y2=\"759.87\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"url(#ba)\" d=\"M2907 795.84h-37V759.5a18.5 18.5 0 0 1 37 0v36.34z\"/>\r\n        <linearGradient id=\"bb\" x1=\"1266.1\" x2=\"1136.9\" y1=\"952.01\" y2=\"877.42\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"none\" stroke=\"url(#bb)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\r\n              stroke-width=\"2\" d=\"M1284 919s-64-6.67-94-4.29-35-3.33-41-4.29-30 0-30 0\" opacity=\".13\"/>\r\n        <linearGradient id=\"bc\" x1=\"1257.46\" x2=\"1105.54\" y1=\"969.67\" y2=\"881.95\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"none\" stroke=\"url(#bc)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\r\n              stroke-width=\"2\" d=\"M1285 919.98s-3-.5-8 2.91c-5 3.4-115 5.84-135 14.11 0 0-46 0-64-5.35\" opacity=\".07\"/>\r\n        <linearGradient id=\"bd\" x1=\"1266.13\" x2=\"1211.87\" y1=\"929.16\" y2=\"897.84\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"none\" stroke=\"url(#bd)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\r\n              stroke-width=\"2\" d=\"M1272 917s-56-6-66-7\" opacity=\".13\"/>\r\n        <linearGradient id=\"be\" x1=\"1245.24\" x2=\"1149.76\" y1=\"950.56\" y2=\"895.44\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#28004b\"/>\r\n          <stop offset=\"1\" stop-color=\"#040050\"/>\r\n        </linearGradient>\r\n        <path fill=\"none\" stroke=\"url(#be)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\r\n              stroke-width=\"2\" d=\"M1260 923c-13-1-24-1-43 6s-34 2-43 0-27-6-39-6\" opacity=\".13\"/>\r\n      </svg>\r\n\r\n      <svg *ngSwitchDefault viewBox=\"4302 163 1218 406\">\r\n        <defs>\r\n          <style>.aa {\r\n            opacity: 0.6;\r\n          }</style>\r\n          <linearGradient id=\"aa\" x1=\"0.5\" x2=\"0.5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n            <stop offset=\"0\" stop-color=\"#000075\"/>\r\n            <stop offset=\"1\" stop-color=\"#ff8c8c\"/>\r\n          </linearGradient>\r\n        </defs>\r\n        <path class=\"aa\" fill=\"url(#aa)\"\r\n              d=\"M20,0H1198a20,20,0,0,1,20,20V406a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V20A20,20,0,0,1,20,0Z\"\r\n              transform=\"translate(4302 163)\"/>\r\n      </svg>\r\n\r\n      <div class=\"header-content__wrapper\">\r\n\r\n        <div class=\"today-weather__container\">\r\n          <!--{{today}}-->\r\n          <div class=\"temp-state__container\">\r\n            <span class=\"temperature__text\">{{temp}}°</span>\r\n            <span class=\"weather-state__text\">{{state}}</span>\r\n          </div>\r\n          <div class=\"hum-wind__container\">\r\n            <div class=\"hum__container\">\r\n              <span class=\"hum__text\">humidity</span>\r\n              <span class=\"hum-value__text\">{{hum}} %</span>\r\n            </div>\r\n\r\n            <div class=\"hum-wind__separator\">&nbsp;</div>\r\n\r\n            <div class=\"wind__container\">\r\n              <span class=\"wind__text\">wind</span>\r\n              <span class=\"wind-value__text\">{{wind}} K/M</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"city-name__container\">\r\n          <div class=\"city-name__underline\">\r\n            <span class=\"city-name__text\">{{city}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n\r\n    <main class=\"body-content__wrapper\">\r\n      <section class=\"twitter-feed__container\">\r\n        <div class=\"twitter-feed__header\">\r\n          <svg class=\"twitter__icon\" viewBox=\"4332 625.812 30 24.375\">\r\n            <defs>\r\n              <style>.twitter-icon-fill {\r\n                fill: #03a9f4;\r\n              }</style>\r\n            </defs>\r\n            <path class=\"twitter-icon-fill\"\r\n                  d=\"M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z\"\r\n                  transform=\"translate(4332 577.812)\"/>\r\n          </svg>\r\n          <span class=\"twitter-feed__text\">Twitter Feed</span>\r\n          <span class=\"twitter-feed-tag__text\">#{{city}}</span>\r\n        </div>\r\n        <div class=\"twitter-feed__body\">\r\n          <!--TODO: retrieve tweets from twitter API-->\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"forecast__container\">\r\n\r\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\r\n          <span class=\"day-name__text\">{{day1Name}}</span>\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Clouds'\"\r\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n              <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\"/>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Rain' || day1State === 'Drizzle'\"\r\n               viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n              <g data-name=\"Water Drops\">\r\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Storm'\"\r\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1529 490.4)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 467.8)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                      transform=\"translate(1618.9 476.8)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1631.8 450)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1687.1 477.5)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1709.6 507.3)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                      transform=\"translate(1639.6 500.1)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 507.3)\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\"/>\r\n            </g>\r\n          </svg>\r\n\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day1State === 'Sunny' || day1State === 'Clear'\"\r\n               viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n          </svg>\r\n\r\n          <span class=\"day-temp__text\">{{day1Temp}}°</span>\r\n          <span class=\"day-state__text\">{{day1State}}</span>\r\n        </div>\r\n\r\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\r\n          <span class=\"day-name__text\">{{day2Name}}</span>\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Clouds'\"\r\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n              <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\"/>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Rain' || day2State === 'Drizzle'\"\r\n               viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n              <g data-name=\"Water Drops\">\r\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Storm'\"\r\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1529 490.4)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 467.8)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                      transform=\"translate(1618.9 476.8)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1631.8 450)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1687.1 477.5)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1709.6 507.3)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                      transform=\"translate(1639.6 500.1)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 507.3)\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\"/>\r\n            </g>\r\n          </svg>\r\n\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day2State === 'Sunny' || day2State === 'Clear'\"\r\n               viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n          </svg>\r\n          <span class=\"day-temp__text\">{{day2Temp}}°</span>\r\n          <span class=\"day-state__text\">{{day2State}}</span>\r\n        </div>\r\n\r\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\r\n          <span class=\"day-name__text\">{{day3Name}}</span>\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Clouds'\"\r\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n              <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\"/>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Rain' || day3State === 'Drizzle'\"\r\n               viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n              <g data-name=\"Water Drops\">\r\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Storm'\"\r\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1529 490.4)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 467.8)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                      transform=\"translate(1618.9 476.8)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1631.8 450)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1687.1 477.5)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1709.6 507.3)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                      transform=\"translate(1639.6 500.1)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 507.3)\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\"/>\r\n            </g>\r\n          </svg>\r\n\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day3State === 'Sunny' || day3State === 'Clear'\"\r\n               viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n          </svg>\r\n\r\n          <span class=\"day-temp__text\">{{day3Temp}}°</span>\r\n          <span class=\"day-state__text\">{{day3State}}</span>\r\n        </div>\r\n\r\n\r\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\r\n          <span class=\"day-name__text\">{{day4Name}}</span>\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Clouds'\"\r\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n              <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\"/>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Rain' || day4State === 'Drizzle'\"\r\n               viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n              <g data-name=\"Water Drops\">\r\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Storm'\"\r\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1529 490.4)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 467.8)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                      transform=\"translate(1618.9 476.8)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1631.8 450)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1687.1 477.5)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1709.6 507.3)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                      transform=\"translate(1639.6 500.1)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 507.3)\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\"/>\r\n            </g>\r\n          </svg>\r\n\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day4State === 'Sunny' || day4State === 'Clear'\"\r\n               viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n          </svg>\r\n\r\n          <span class=\"day-temp__text\">{{day4Temp}}°</span>\r\n          <span class=\"day-state__text\">{{day4State}}</span>\r\n        </div>\r\n\r\n        <div class=\"day-weather__container\" [ngSwitch]=\"true\">\r\n          <span class=\"day-name__text\">{{day5Name}}</span>\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Clouds'\"\r\n               viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n            <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n              <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n              <path fill=\"#ffde17\"\r\n                    d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                    data-name=\"Subtraction 1\"/>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Rain' || day5State === 'Drizzle'\"\r\n               viewBox=\"3170 -843.1 163.5 242.7\">\r\n            <g data-name=\"Rain Icon\">\r\n              <g data-name=\"Water Drops\">\r\n                <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Storm'\"\r\n               viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n            <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1529 490.4)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 467.8)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                      transform=\"translate(1618.9 476.8)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1631.8 450)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1687.1 477.5)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1709.6 507.3)\"/>\r\n              <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                      transform=\"translate(1639.6 500.1)\"/>\r\n              <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                       transform=\"translate(1569.6 507.3)\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                    d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n              <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                    data-name=\"Path 60\"/>\r\n            </g>\r\n          </svg>\r\n\r\n\r\n          <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day5State === 'Sunny' || day5State === 'Clear'\"\r\n               viewBox=\"2050 -845 262 262\">\r\n            <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n          </svg>\r\n\r\n          <span class=\"day-temp__text\">{{day5Temp}}°</span>\r\n          <span class=\"day-state__text\">{{day5State}}</span>\r\n        </div>\r\n      </section>\r\n\r\n\r\n    </main>\r\n\r\n  </section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/temperature/weather/pages/details/details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/temperature/weather/pages/details/details.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var weather_service_1 = __webpack_require__(/*! ../../services/weather.service */ "./src/app/temperature/weather/services/weather.service.ts");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activeRouter, weather) {
        this.activeRouter = activeRouter;
        this.weather = weather;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var todayNumberInWeek = new Date().getDay();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today = days[todayNumberInWeek];
        this.activeRouter.paramMap.subscribe(function (route) {
            _this.city = route.params.city;
            _this.weather.getWeatherState(_this.city).subscribe(function (state) { return _this.state = state; });
            _this.weather.getCurrentTemp(_this.city).subscribe(function (temperature) { return _this.temp = temperature; });
            _this.weather.getCurrentHum(_this.city).subscribe(function (humidity) { return _this.hum = humidity; });
            _this.weather.getCurrentWind(_this.city).subscribe(function (windspeed) { return _this.wind = windspeed; });
            _this.weather.getForecast(_this.city).subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var date = new Date(data[i].dt_txt).getDay();
                    if (((date === todayNumberInWeek + 1) || (todayNumberInWeek === 6 && date === 0)) && !_this.day1Name) {
                        _this.day1Name = days[date];
                        _this.day1State = data[i].weather[0].main;
                        _this.day1Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day1Name && !_this.day2Name && days[date] !== _this.day1Name) {
                        _this.day2Name = days[date];
                        _this.day2State = data[i].weather[0].main;
                        _this.day2Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day2Name && !_this.day3Name && days[date] !== _this.day2Name) {
                        _this.day3Name = days[date];
                        _this.day3State = data[i].weather[0].main;
                        _this.day3Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day3Name && !_this.day4Name && days[date] !== _this.day3Name) {
                        _this.day4Name = days[date];
                        _this.day4State = data[i].weather[0].main;
                        _this.day4Temp = Math.round(data[i].main.temp);
                    }
                    else if (!!_this.day4Name && !_this.day5Name && days[date] !== _this.day4Name) {
                        _this.day5Name = days[date];
                        _this.day5State = data[i].weather[0].main;
                        _this.day5Temp = Math.round(data[i].main.temp);
                    }
                }
            });
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/temperature/weather/pages/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/temperature/weather/pages/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, weather_service_1.WeatherService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/temperature/weather/pages/home/home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/temperature/weather/pages/home/home.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Home Layout*/\r\n.main__container {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(auto-fill, 1fr);\r\n    align-items: center;\r\n    justify-items: center;\r\n    height: 100%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvd2VhdGhlci9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlbXBlcmF0dXJlL3dlYXRoZXIvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkhvbWUgTGF5b3V0Ki9cclxuLm1haW5fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/temperature/weather/pages/home/home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/temperature/weather/pages/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__container\">\r\n\r\n  <app-weather-card></app-weather-card>\r\n  <app-add-card></app-add-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/temperature/weather/pages/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/temperature/weather/pages/home/home.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/temperature/weather/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/temperature/weather/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/temperature/weather/services/ui.service.ts":
/*!************************************************************!*\
  !*** ./src/app/temperature/weather/services/ui.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var UiService = /** @class */ (function () {
    function UiService() {
        // TODO: if the user is signed in get the default value from Firebase
        this.darkModeState = new rxjs_1.BehaviorSubject(false);
    }
    UiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UiService);
    return UiService;
}());
exports.UiService = UiService;


/***/ }),

/***/ "./src/app/temperature/weather/services/weather.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/temperature/weather/services/weather.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getCityWeatherByName = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSub = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (data) {
            dataSub.next(data['weather']);
        }, function (err) {
            console.log(err);
        });
        return dataSub;
    };
    WeatherService.prototype.getCitiesWeathersByNames = function (cities, metric) {
        var _this = this;
        if (metric === void 0) { metric = 'metric'; }
        var citiesSubject = new rxjs_1.Subject();
        cities.forEach(function (city) {
            citiesSubject.next(_this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1"));
        });
        return citiesSubject;
    };
    WeatherService.prototype.getWeatherState = function (city) {
        var dataSubject = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (data) {
            dataSubject.next(data['weather'][0].main);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Number(weather.main.temp)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentHum = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            dataSubject.next(weather.main.humidity);
        });
        return dataSubject;
    };
    WeatherService.prototype.getCurrentWind = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            dataSubject.next(Math.round(Math.round(weather.wind.speed)));
        });
        return dataSubject;
    };
    WeatherService.prototype.getMaxTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        var max;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            max = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (max < value.main.temp) {
                    max = value.main.temp;
                }
            });
            dataSubject.next(Math.round(max));
        });
        return dataSubject;
    };
    WeatherService.prototype.getMinTemp = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        var min;
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            min = weather.list[0].main.temp;
            weather.list.forEach(function (value) {
                if (min > value.main.temp) {
                    min = value.main.temp;
                }
            });
            dataSubject.next(Math.round(min));
        });
        return dataSubject;
    };
    WeatherService.prototype.getForecast = function (city, metric) {
        if (metric === void 0) { metric = 'metric'; }
        var dataSubject = new rxjs_1.Subject();
        this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + metric + "&APPID=a76796cf2f7d56fe96d003e0c54f6da1")
            .subscribe(function (weather) {
            dataSubject.next(weather.list);
        });
        return dataSubject;
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;


/***/ }),

/***/ "./src/app/temperature/weather/ui/add-card/add-card.component.css":
/*!************************************************************************!*\
  !*** ./src/app/temperature/weather/ui/add-card/add-card.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add__card {\r\n    background-color: #ffffff;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    width: 19rem;\r\n    height: 30rem;\r\n    justify-items: center;\r\n    cursor: pointer;\r\n    border-radius: 1.75rem;\r\n    -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\r\n            animation: fadein 1.25s ease-in-out 0ms 1;\r\n    color: #443282;\r\n  }\r\n  \r\n  .add__card-dark {\r\n    background: linear-gradient(to bottom, #711B86, #00057A);\r\n    color: white;\r\n  }\r\n  \r\n  .card__title {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n  \r\n  .city__illustration {\r\n    width: 20rem;\r\n  }\r\n  \r\n  .body__container {\r\n    align-self: end;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-flow: column;\r\n  }\r\n  \r\n  .add__icon {\r\n    width: 10rem;\r\n    margin-bottom: 1.15rem;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvd2VhdGhlci91aS9hZGQtY2FyZC9hZGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usd0RBQXdEO0lBQ3hELFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBlcmF0dXJlL3dlYXRoZXIvdWkvYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfX2NhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHdpZHRoOiAxOXJlbTtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDE7XHJcbiAgICBjb2xvcjogIzQ0MzI4MjtcclxuICB9XHJcbiAgXHJcbiAgLmFkZF9fY2FyZC1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MTFCODYsICMwMDA1N0EpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZF9fdGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXR5X19pbGx1c3RyYXRpb24ge1xyXG4gICAgd2lkdGg6IDIwcmVtO1xyXG4gIH1cclxuICBcclxuICAuYm9keV9fY29udGFpbmVyIHtcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRfX2ljb24ge1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4xNXJlbTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/temperature/weather/ui/add-card/add-card.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/temperature/weather/ui/add-card/add-card.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add__card\" routerLink=\"/temperature/add\" [ngClass]=\"{'add__card-dark': darkMode}\">\r\n  <div class=\"header__container\">\r\n    <span class=\"card__title\">Add city</span>\r\n  </div>\r\n  <div class=\"body__container\">\r\n    <svg class=\"add__icon\" id=\"Plus_Icon\" data-name=\"Plus Icon\" viewBox=\"1454.4 326.4 209.1 209.1\">\r\n      <defs>\r\n        <style>\r\n          .cls-299 {\r\n            fill: #7effcc\r\n          }\r\n        </style>\r\n        <filter id=\"Ellipse_7\" width=\"209.1\" height=\"209.1\" x=\"1454.4\" y=\"326.4\" filterUnits=\"userSpaceOnUse\">\r\n          <feOffset dy=\"3\"/>\r\n          <feGaussianBlur result=\"blur\" stdDeviation=\"3\"/>\r\n          <feFlood flood-color=\"#333\" flood-opacity=\".1\"/>\r\n          <feComposite in2=\"blur\" operator=\"in\"/>\r\n          <feComposite in=\"SourceGraphic\"/>\r\n        </filter>\r\n      </defs>\r\n      <g filter=\"url(#Ellipse_7)\">\r\n        <circle id=\"Ellipse_7-2\" cx=\"95.6\" cy=\"95.6\" r=\"95.6\" fill=\"#f5f8ff\" data-name=\"Ellipse 7\"\r\n                transform=\"translate(1463.4 332.4)\"/>\r\n      </g>\r\n      <rect id=\"Rectangle_3\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 3\" rx=\"5\"\r\n            transform=\"translate(1552.6 358.1)\"/>\r\n      <rect id=\"Rectangle_4\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 4\" rx=\"5\"\r\n            transform=\"rotate(90 603.6 1026.8)\"/>\r\n    </svg>\r\n    <svg class=\"city__illustration\" id=\"City_Illustration\" data-name=\"City Illustration\"\r\n         viewBox=\"1367.8 616.6 403.6 331.4\">\r\n      <defs>\r\n        <style>\r\n          .cls-1 {\r\n            fill: #a1ffd9\r\n          }\r\n\r\n          .cls-2 {\r\n            fill: #f5f5f5\r\n          }\r\n\r\n          .cls-3 {\r\n            fill: #c4d1fe\r\n          }\r\n\r\n          .cls-6 {\r\n            fill: #bffee6\r\n          }\r\n\r\n          .cls-7 {\r\n            fill: #31feae\r\n          }\r\n\r\n          .cls-11 {\r\n            fill: #7d9cff\r\n          }\r\n\r\n          .cls-14 {\r\n            fill: #5f84fb\r\n          }\r\n\r\n          .cls-17, .cls-19 {\r\n            fill: none\r\n          }\r\n\r\n          .cls-17 {\r\n            stroke: #fff;\r\n            stroke-width: 2px\r\n          }\r\n\r\n          .cls-18 {\r\n            fill: #606cb9\r\n          }\r\n\r\n          .cls-19 {\r\n            stroke: #a1ffd9;\r\n            stroke-width: 3px\r\n          }\r\n        </style>\r\n      </defs>\r\n      <path id=\"City_grass\" d=\"M1488.3 646.3v-30H1892v30z\" class=\"cls-1\" data-name=\"City grass\"\r\n            transform=\"translate(-120.5 301.7)\"/>\r\n      <g id=\"Buidings\">\r\n        <g id=\"Buiding_Shadow\" data-name=\"Buiding Shadow\">\r\n          <path id=\"Path_23\" d=\"M1488.3 777.8V616.3h26.6v161.5z\" class=\"cls-2\" data-name=\"Path 23\"\r\n                transform=\"translate(-120.5 48.4)\"/>\r\n          <path id=\"Path_29\" d=\"M1488.3 788.9V616.3h26.6V789z\" class=\"cls-2\" data-name=\"Path 29\"\r\n                transform=\"translate(-30.5 5.3)\"/>\r\n          <path id=\"Path_21\" d=\"M1488.3 783.8V616.3h96.8v167.5z\" class=\"cls-2\" data-name=\"Path 21\"\r\n                transform=\"translate(176.5 45.4)\"/>\r\n          <path id=\"Path_30\" d=\"M1488.3 735V616.3h34.3V735z\" class=\"cls-2\" data-name=\"Path 30\"\r\n                transform=\"translate(128.5 48.2)\"/>\r\n          <path id=\"Path_31\" d=\"M1488.3 811V616.3h34.3V811z\" class=\"cls-2\" data-name=\"Path 31\"\r\n                transform=\"translate(28.5 5.2)\"/>\r\n        </g>\r\n        <g id=\"Core\">\r\n          <path id=\"Path_8\" d=\"M1488.3 771.2V616.3h59.7v154.9z\" class=\"cls-3\" data-name=\"Path 8\"\r\n                transform=\"translate(-112 54)\"/>\r\n          <path id=\"Path_9\" d=\"M1488.3 825V616.2h96.8V825z\" class=\"cls-1\" data-name=\"Path 9\"\r\n                transform=\"translate(-43.5 .3)\"/>\r\n          <path id=\"Path_10\" fill=\"#7affcb\" d=\"M1488.3 660.7v-44.4h96.8v44.4z\" data-name=\"Path 10\"\r\n                transform=\"translate(62.5 164.4)\"/>\r\n          <path id=\"Path_11\" d=\"M1488.3 771.2V616.3h96.8v154.9z\" class=\"cls-3\" data-name=\"Path 11\"\r\n                transform=\"translate(168.5 54)\"/>\r\n        </g>\r\n      </g>\r\n      <path id=\"City_water\" fill=\"#8091ff\" d=\"M1488.3 692.6v-76.3H1892v76.3z\" data-name=\"City water\"\r\n            transform=\"translate(-120.5 217.2)\"/>\r\n      <g id=\"Windows\" transform=\"translate(8 40)\">\r\n        <path id=\"Path_13\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-6\" data-name=\"Path 13\"\r\n              transform=\"translate(-43.2 -19.8)\"/>\r\n        <path id=\"Path_14\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" class=\"cls-7\" data-name=\"Path 14\"\r\n              transform=\"translate(-43.2 2.2)\"/>\r\n        <path id=\"Path_25\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 25\"\r\n              transform=\"translate(168.2 110.2)\"/>\r\n        <path id=\"Path_26\" d=\"M1488.3 628.5v-12.2h83.7v12.2z\" class=\"cls-7\" data-name=\"Path 26\"\r\n              transform=\"translate(169.2 132.2)\"/>\r\n        <path id=\"Path_18\" fill=\"#a1feda\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 18\"\r\n              transform=\"translate(-108.2 26.2)\"/>\r\n        <path id=\"Path_20\" fill=\"#3564fb\" d=\"M1488.3 628.5v-12.2h36.6v12.2z\" data-name=\"Path 20\"\r\n              transform=\"translate(-108.2 146.2)\"/>\r\n        <path id=\"Path_19\" fill=\"#a2b8ff\" d=\"M1488.3 665.4v-49h36.6v49z\" data-name=\"Path 19\"\r\n              transform=\"translate(-108.2 54.3)\"/>\r\n        <path id=\"Path_15\" d=\"M1488.3 651v-34.7h36.6V651z\" class=\"cls-11\" data-name=\"Path 15\"\r\n              transform=\"translate(-3.2 47.2)\"/>\r\n        <path id=\"Path_16\" fill=\"#3b5dca\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 16\"\r\n              transform=\"translate(-46.2 46.2)\"/>\r\n        <path id=\"Path_17\" fill=\"#597ff7\" d=\"M1488.3 651v-34.7h36.6V651z\" data-name=\"Path 17\"\r\n              transform=\"translate(-12.2 117.2)\"/>\r\n        <path id=\"Path_27\" d=\"M1488.3 641.2v-24.9h62.9v24.9z\" class=\"cls-6\" data-name=\"Path 27\"\r\n              transform=\"translate(169.1 28.2)\"/>\r\n        <path id=\"Path_28\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 28\"\r\n              transform=\"translate(194.4 56)\"/>\r\n        <path id=\"Path_46\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 46\"\r\n              transform=\"translate(194.4 82)\"/>\r\n        <path id=\"Path_47\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-14\" data-name=\"Path 47\"\r\n              transform=\"translate(169.4 82)\"/>\r\n        <path id=\"Path_48\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-7\" data-name=\"Path 48\"\r\n              transform=\"translate(169.4 56)\"/>\r\n        <path id=\"Path_44\" d=\"M1488.3 634.3v-18h17.5v18z\" class=\"cls-11\" data-name=\"Path 44\"\r\n              transform=\"translate(232.4 56)\"/>\r\n        <path id=\"Path_45\" fill=\"#aebff7\" d=\"M1488.3 634.3v-18h17.5v18z\" data-name=\"Path 45\"\r\n              transform=\"translate(232.4 84)\"/>\r\n      </g>\r\n      <path id=\"Bridge\" fill=\"#ccc8ff\"\r\n            d=\"M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z\"\r\n            transform=\"translate(8 40)\"/>\r\n      <g id=\"Water_Turbulence\" data-name=\"Water Turbulence\" transform=\"translate(8 40)\">\r\n        <g id=\"Group_4\" data-name=\"Group 4\">\r\n          <path id=\"Path_42\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                transform=\"translate(11.8 2)\"/>\r\n          <path id=\"Path_43\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n        </g>\r\n        <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(74 -14)\">\r\n          <path id=\"Path_42-2\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                transform=\"translate(11.8 2)\"/>\r\n          <path id=\"Path_43-2\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n        </g>\r\n        <g id=\"Group_8\" data-name=\"Group 8\" transform=\"translate(85 17)\">\r\n          <path id=\"Path_42-3\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                transform=\"translate(11.8 2)\"/>\r\n          <path id=\"Path_43-3\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n        </g>\r\n        <g id=\"Group_17\" data-name=\"Group 17\" transform=\"translate(315 14)\">\r\n          <path id=\"Path_42-4\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                transform=\"translate(11.8 2)\"/>\r\n          <path id=\"Path_43-4\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n        </g>\r\n        <g id=\"Group_18\" data-name=\"Group 18\" transform=\"translate(245 -17)\">\r\n          <path id=\"Path_42-5\" d=\"M1386.3 831.3s18.2 3.5 21.8-5.2\" class=\"cls-17\" data-name=\"Path 42\"\r\n                transform=\"translate(11.8 2)\"/>\r\n          <path id=\"Path_43-5\" d=\"M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9\" class=\"cls-17\"\r\n                data-name=\"Path 43\" transform=\"translate(32.1 2)\"/>\r\n        </g>\r\n      </g>\r\n      <g id=\"Fence\" transform=\"translate(8 40)\">\r\n        <g id=\"Poles\">\r\n          <rect id=\"Rectangle_13\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 13\" rx=\"2\"\r\n                transform=\"translate(1375 858)\"/>\r\n          <rect id=\"Rectangle_18\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 18\" rx=\"2\"\r\n                transform=\"translate(1450 858)\"/>\r\n          <rect id=\"Rectangle_21\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 21\" rx=\"2\"\r\n                transform=\"translate(1525 858)\"/>\r\n          <rect id=\"Rectangle_14\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 14\" rx=\"2\"\r\n                transform=\"translate(1400 858)\"/>\r\n          <rect id=\"Rectangle_17\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 17\" rx=\"2\"\r\n                transform=\"translate(1475 858)\"/>\r\n          <rect id=\"Rectangle_20\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 20\" rx=\"2\"\r\n                transform=\"translate(1550 858)\"/>\r\n          <rect id=\"Rectangle_15\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 15\" rx=\"2\"\r\n                transform=\"translate(1425 858)\"/>\r\n          <rect id=\"Rectangle_16\" width=\"5\" height=\"25\" class=\"cls-18\" data-name=\"Rectangle 16\" rx=\"2\"\r\n                transform=\"translate(1500 858)\"/>\r\n        </g>\r\n        <g id=\"Ropes\">\r\n          <path id=\"Path_45-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 45\"\r\n                transform=\"translate(0 4)\"/>\r\n          <path id=\"Path_46-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 46\"\r\n                transform=\"translate(25 5)\"/>\r\n          <path id=\"Path_47-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 47\"\r\n                transform=\"translate(50 3)\"/>\r\n          <path id=\"Path_48-2\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 48\"\r\n                transform=\"translate(75 5)\"/>\r\n          <path id=\"Path_49\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 49\"\r\n                transform=\"translate(101 3)\"/>\r\n          <path id=\"Path_50\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 50\"\r\n                transform=\"translate(125 7)\"/>\r\n          <path id=\"Path_51\" d=\"M1377.5 858c.4-1 14.2 17 25.4 0\" class=\"cls-19\" data-name=\"Path 51\"\r\n                transform=\"translate(150 5)\"/>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/temperature/weather/ui/add-card/add-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/temperature/weather/ui/add-card/add-card.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ui_service_1 = __webpack_require__(/*! ../../services/ui.service */ "./src/app/temperature/weather/services/ui.service.ts");
var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(ui) {
        this.ui = ui;
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
    };
    AddCardComponent = __decorate([
        core_1.Component({
            selector: 'app-add-card',
            template: __webpack_require__(/*! ./add-card.component.html */ "./src/app/temperature/weather/ui/add-card/add-card.component.html"),
            styles: [__webpack_require__(/*! ./add-card.component.css */ "./src/app/temperature/weather/ui/add-card/add-card.component.css")]
        }),
        __metadata("design:paramtypes", [ui_service_1.UiService])
    ], AddCardComponent);
    return AddCardComponent;
}());
exports.AddCardComponent = AddCardComponent;


/***/ }),

/***/ "./src/app/temperature/weather/ui/weather-card/weather-card.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/temperature/weather/ui/weather-card/weather-card.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n====================\r\nWeather Card Styling\r\n====================\r\n*/\r\n.weather__card {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    justify-items: center;\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    width: 19rem;\r\n    height: 30rem;\r\n    cursor: pointer;\r\n    background-color: white;\r\n    border-radius: 1.75rem;\r\n    -webkit-animation: fadein 1.25s ease-in-out 0ms 1;\r\n            animation: fadein 1.25s ease-in-out 0ms 1;\r\n  }\r\n.weather__card-dark {\r\n    background: linear-gradient(to bottom, #711B86, #00057A);\r\n    color: white;\r\n  }\r\n.city-name__text {\r\n    text-transform: uppercase;\r\n    font-size: 1.4rem;\r\n    letter-spacing: 0.1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n.temperature__text {\r\n    align-self: end;\r\n    width: 100%;\r\n    font-size: 4rem;\r\n    font-weight: 100;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n.temperature-metric__text {\r\n    text-align: start;\r\n    font-size: 3rem;\r\n  }\r\n.min-max__container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    align-items: center;\r\n  }\r\n.min__container, .max__container {\r\n    margin: 1rem 3rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n  }\r\n.min-arrow__icon, .max-arrow__icon {\r\n    height: 1.25rem;\r\n    margin: auto;\r\n  }\r\n.max-arrow__icon {\r\n    margin-bottom: -0.05rem;\r\n  }\r\n.weather-condition__text {\r\n    display: block;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    text-align: center;\r\n  }\r\n.max__text {\r\n    color: #FF0070;\r\n  }\r\n.min__text {\r\n    color: #00FF9B;\r\n  }\r\n.max__text, .min__text {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n  }\r\n.max-temperature__text, .min-temperature__text {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n  }\r\n.weather-icon__container {\r\n    width: 10rem;\r\n    margin-bottom: 2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n.weather-icon__container > svg {\r\n    width: 10rem;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvd2VhdGhlci91aS93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQztBQUNEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaURBQXlDO1lBQXpDLHlDQUF5QztFQUMzQztBQUVBO0lBQ0Usd0RBQXdEO0lBQ3hELFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdGVtcGVyYXR1cmUvd2VhdGhlci91aS93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PVxyXG5XZWF0aGVyIENhcmQgU3R5bGluZ1xyXG49PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4ud2VhdGhlcl9fY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgd2lkdGg6IDE5cmVtO1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDEuMjVzIGVhc2UtaW4tb3V0IDBtcyAxO1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlcl9fY2FyZC1kYXJrIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MTFCODYsICMwMDA1N0EpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX190ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAudGVtcGVyYXR1cmVfX3RleHQge1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXBlcmF0dXJlLW1ldHJpY19fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1pbi1tYXhfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWluX19jb250YWluZXIsIC5tYXhfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDFyZW0gM3JlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLm1pbi1hcnJvd19faWNvbiwgLm1heC1hcnJvd19faWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtYXJyb3dfX2ljb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWF0aGVyLWNvbmRpdGlvbl9fdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWF4X190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkYwMDcwO1xyXG4gIH1cclxuICBcclxuICAubWluX190ZXh0IHtcclxuICAgIGNvbG9yOiAjMDBGRjlCO1xyXG4gIH1cclxuICBcclxuICAubWF4X190ZXh0LCAubWluX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1heC10ZW1wZXJhdHVyZV9fdGV4dCwgLm1pbi10ZW1wZXJhdHVyZV9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWF0aGVyLWljb25fX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlci1pY29uX19jb250YWluZXIgPiBzdmcge1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gIH1cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/temperature/weather/ui/weather-card/weather-card.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/temperature/weather/ui/weather-card/weather-card.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"display:flex\">\r\n<div *ngFor=\"let i of tempCity;let j=index\">\r\n<section class=\"weather__card\" (click)=\"openDetails(i)\" [ngClass]=\"{'weather__card-dark': darkMode}\">\r\n  <span class=\"city-name__text\">{{i}}</span>\r\n  <div class=\"weather-icon__container\" [ngSwitch]=\"true\">\r\n    <svg *ngSwitchCase=\"condition[j] === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n      <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n        <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n        <path fill=\"#ffde17\"\r\n              d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n              data-name=\"Subtraction 1\"/>\r\n      </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"condition[j] === 'Rain' || condition[j] === 'Drizzle'\" viewBox=\"3170 -843.1 163.5 242.7\">\r\n      <g data-name=\"Rain Icon\">\r\n        <g data-name=\"Water Drops\">\r\n          <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n          <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"condition[j] === 'Storm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n      <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1529 490.4)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1569.6 467.8)\"/>\r\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                transform=\"translate(1618.9 476.8)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1631.8 450)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1687.1 477.5)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1709.6 507.3)\"/>\r\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                transform=\"translate(1639.6 500.1)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1569.6 507.3)\"/>\r\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n              d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n              data-name=\"Path 60\"/>\r\n      </g>\r\n    </svg>\r\n\r\n\r\n    <svg *ngSwitchCase=\"condition[j] === 'Sunny' || condition[j] === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n      <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n    </svg>\r\n\r\n  </div>\r\n  <div class=\"temperature-text__container\">\r\n    <span class=\"temperature__text\">{{ currentTemp[j] }}</span>\r\n    <span class=\"temperature-metric__text\">°</span>\r\n    <span class=\"weather-condition[j]__text\">{{ condition[j]}}</span>\r\n  </div>\r\n  <section class=\"min-max__container\">\r\n    <div class=\"min__container\">\r\n      <svg class=\"min-arrow__icon\" viewBox=\"188.5 807 21 21\">\r\n        <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" data-name=\"Min Arrow\"/>\r\n      </svg>\r\n\r\n      <span class=\"min-temperature__text\">{{ minTemp[j] }}</span>\r\n      <span class=\"min__text\">Min</span>\r\n    </div>\r\n    <div class=\"max__container\">\r\n      <svg class=\"max-arrow__icon\" viewBox=\"449.5 820 21 21\">\r\n        <path fill=\"red\" d=\"M449.5 830.5h21L460 820z\" data-name=\"Max Arrow\"/>\r\n      </svg>\r\n      <span class=\"max-temperature__text\">{{ maxTemp[j] }}</span>\r\n      <span class=\"max__text\">Max</span>\r\n    </div>\r\n  </section>\r\n</section>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/temperature/weather/ui/weather-card/weather-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/temperature/weather/ui/weather-card/weather-card.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ui_service_1 = __webpack_require__(/*! ../../services/ui.service */ "./src/app/temperature/weather/services/ui.service.ts");
var weather_service_1 = __webpack_require__(/*! ../../services/weather.service */ "./src/app/temperature/weather/services/weather.service.ts");
var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent(weather, router, ui) {
        this.weather = weather;
        this.router = router;
        this.ui = ui;
        this.condition = [];
        this.currentTemp = [];
        this.maxTemp = [];
        this.minTemp = [];
        this.tempCity = ['Paris', 'India'];
    }
    WeatherCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
        this.minTemp = [];
        for (var i = 0; i < this.tempCity.length; i++) {
            this.weather.getWeatherState(this.tempCity[i])
                .subscribe(function (data) {
                _this.condition.push(data);
            });
            this.weather.getCurrentTemp(this.tempCity[i]).subscribe(function (data) {
                _this.currentTemp.push(data);
            });
            this.weather.getMinTemp(this.tempCity[i]).subscribe(function (data) {
                _this.minTemp.push(data);
            });
            this.weather.getMaxTemp(this.tempCity[i]).subscribe(function (data) {
                _this.maxTemp.push(data);
            });
        }
    };
    WeatherCardComponent.prototype.openDetails = function (i) {
        this.router.navigateByUrl('/temperature/details/' + i);
    };
    WeatherCardComponent = __decorate([
        core_1.Component({
            selector: 'app-weather-card',
            template: __webpack_require__(/*! ./weather-card.component.html */ "./src/app/temperature/weather/ui/weather-card/weather-card.component.html"),
            styles: [__webpack_require__(/*! ./weather-card.component.css */ "./src/app/temperature/weather/ui/weather-card/weather-card.component.css")]
        }),
        __metadata("design:paramtypes", [weather_service_1.WeatherService,
            router_1.Router,
            ui_service_1.UiService])
    ], WeatherCardComponent);
    return WeatherCardComponent;
}());
exports.WeatherCardComponent = WeatherCardComponent;


/***/ }),

/***/ "./src/app/temperature/weather/weather.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/temperature/weather/weather.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var home_component_1 = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/temperature/weather/pages/home/home.component.ts");
var add_component_1 = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/temperature/weather/pages/add/add.component.ts");
var weather_card_component_1 = __webpack_require__(/*! ./ui/weather-card/weather-card.component */ "./src/app/temperature/weather/ui/weather-card/weather-card.component.ts");
var details_component_1 = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/temperature/weather/pages/details/details.component.ts");
var temperature_component_1 = __webpack_require__(/*! ../temperature.component */ "./src/app/temperature/temperature.component.ts");
var add_card_component_1 = __webpack_require__(/*! ./ui/add-card/add-card.component */ "./src/app/temperature/weather/ui/add-card/add-card.component.ts");
var weather_service_1 = __webpack_require__(/*! ./services/weather.service */ "./src/app/temperature/weather/services/weather.service.ts");
var ui_service_1 = __webpack_require__(/*! ./services/ui.service */ "./src/app/temperature/weather/services/ui.service.ts");
var routes = [
    { path: '', component: temperature_component_1.TemperatureComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'details/:city', component: details_component_1.DetailsComponent },
            { path: 'add', component: add_component_1.AddComponent },
        ],
    },
];
var WeatherModule = /** @class */ (function () {
    function WeatherModule() {
    }
    WeatherModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                weather_card_component_1.WeatherCardComponent,
                add_component_1.AddComponent,
                details_component_1.DetailsComponent,
                home_component_1.HomeComponent,
                add_card_component_1.AddCardComponent,
                temperature_component_1.TemperatureComponent
            ],
            providers: [
                weather_service_1.WeatherService,
                ui_service_1.UiService
            ],
            exports: [router_1.RouterModule],
        })
    ], WeatherModule);
    return WeatherModule;
}());
exports.WeatherModule = WeatherModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    token: 'dbefbbc488684f0da9b9fb162b463975'
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\pro\units\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map