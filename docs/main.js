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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tech_tech_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tech/tech.component */ "./src/app/tech/tech.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _digit_digit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digit/digit.component */ "./src/app/digit/digit.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
/* harmony import */ var _bite_bite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bite/bite.component */ "./src/app/bite/bite.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./temperature/temperature.component */ "./src/app/temperature/temperature.component.ts");
/* harmony import */ var _weight_weight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weight/weight.component */ "./src/app/weight/weight.component.ts");
/* harmony import */ var _essay_essay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./essay/essay.component */ "./src/app/essay/essay.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'convertentries',
        component: _tech_tech_component__WEBPACK_IMPORTED_MODULE_3__["TechComponent"]
    },
    {
        path: 'landunits',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    },
    {
        path: 'digit',
        component: _digit_digit_component__WEBPACK_IMPORTED_MODULE_5__["DigitComponent"]
    },
    {
        path: 'currency',
        component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyComponent"]
    },
    {
        path: 'techunits',
        component: _bite_bite_component__WEBPACK_IMPORTED_MODULE_7__["BiteComponent"]
    },
    {
        path: 'temperature',
        component: _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_9__["TemperatureComponent"]
    },
    {
        path: 'weight',
        component: _weight_weight_component__WEBPACK_IMPORTED_MODULE_10__["WeightComponent"]
    },
    {
        path: 'essayWriter',
        component: _essay_essay_component__WEBPACK_IMPORTED_MODULE_11__["EssayComponent"]
    },
    {
        path: 'calculator',
        component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorComponent"]
    },
    {
        path: 'chatBot',
        component: _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_13__["ChatbotComponent"]
    },
    {
        path: 'todoList',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_14__["TodoComponent"]
    },
    {
        path: '',
        redirectTo: '/convertentries',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav [ngClass]=\"'parent-menu'\" id=\"navData\">\r\n  <ul>\r\n    <li>\r\n      <a routerLink=\"/convertentries\" routerLinkActive=\"active\">Text tools</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/landunits\" routerLinkActive=\"active\">Land measurements</a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink=\"/digit\" routerLinkActive=\"active\">Digits Converter</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/currency\" routerLinkActive=\"active\">currency converter</a>\r\n    </li>\r\n    <li><a routerLink=\"/techunits\" routerLinkActive=\"active\">Tech units</a></li>\r\n    <li>\r\n      <a routerLink=\"/temperature\" routerLinkActive=\"active\">Temperature</a>\r\n\t</li>\r\n\t<li>\r\n\t\t<a routerLink=\"/weight\" routerLinkActive=\"active\">Weight Convertor</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/calculator\" routerLinkActive=\"active\">Calculator</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/essayWriter\" routerLinkActive=\"active\">Essay writer</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/todoList\" routerLinkActive=\"active\">To do Notes</a>\r\n          </li>\r\n        <li>\r\n          <a routerLink=\"/chatBot\" routerLinkActive=\"active\">Contact</a>\r\n          </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div [ngClass]=\"'parent-container'\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- <footer class=\"footer\">\r\n  <div class=\"dfg\">\r\n    <span>For any suggestions-</span>\r\n    <p>Email me: softwaredeveloper321@protonmail.com</p>\r\n  </div>\r\n</footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-menu ul {\n  background-color: #333;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n.parent-menu li {\n  float: left; }\n\n.parent-menu li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 15px 15px;\n  text-decoration: none; }\n\n.parent-menu li a:hover:not(.active) {\n  background-color: #111; }\n\n.parent-menu .active {\n  background-color: #4CAF50; }\n\n.parent-container {\n  padding-left: 10px; }\n\nbody {\n  margin: 0;\n  font-family: Arial; }\n\n.topnav {\n  overflow: hidden;\n  background-color: #333; }\n\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n\n.active {\n  background-color: #4CAF50;\n  color: white; }\n\n.topnav .icon {\n  display: none; }\n\n.dropdown {\n  float: left;\n  overflow: hidden; }\n\n.dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n\n.topnav a:hover, .dropdown:hover .dropbtn {\n  background-color: #555;\n  color: white; }\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n  color: black; }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 30px; }\n\n.dfg {\n  color: wheat;\n  background-color: #333;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHByb1xcdW5pdHMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQjtFQUNwQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBS3RCO0VBQU0sU0FBUTtFQUFDLGtCQUFpQixFQUFBOztBQUVoQztFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDRDQUFBO0VBQ0EsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDZCxzQkFBc0I7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIFxyXG4ucGFyZW50LW1lbnUgdWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuICBcclxuLnBhcmVudC1tZW51IGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucGFyZW50LW1lbnUgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhcmVudC1tZW51IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHsgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG4ucGFyZW50LW1lbnUgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbn1cclxuXHJcbi5wYXJlbnQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5ib2R5IHttYXJnaW46MDtmb250LWZhbWlseTpBcmlhbH1cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgZm9udC1zaXplOiAxN3B4OyAgICBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogU2V0IHRoZSBmaXhlZCBoZWlnaHQgb2YgdGhlIGZvb3RlciBoZXJlICovXHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGZne1xyXG4gIGNvbG9yOiB3aGVhdDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _tech_tech_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tech/tech.component */ "./src/app/tech/tech.component.ts");
/* harmony import */ var _bite_bite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bite/bite.component */ "./src/app/bite/bite.component.ts");
/* harmony import */ var _digit_digit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./digit/digit.component */ "./src/app/digit/digit.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./temperature/temperature.component */ "./src/app/temperature/temperature.component.ts");
/* harmony import */ var _weight_weight_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./weight/weight.component */ "./src/app/weight/weight.component.ts");
/* harmony import */ var _essay_essay_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./essay/essay.component */ "./src/app/essay/essay.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _chatbot_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chatbot/components */ "./src/app/chatbot/components/index.ts");
/* harmony import */ var _chatbot_services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chatbot/services */ "./src/app/chatbot/services/index.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _tech_tech_component__WEBPACK_IMPORTED_MODULE_9__["TechComponent"],
                _bite_bite_component__WEBPACK_IMPORTED_MODULE_10__["BiteComponent"],
                _digit_digit_component__WEBPACK_IMPORTED_MODULE_11__["DigitComponent"],
                _currency_currency_component__WEBPACK_IMPORTED_MODULE_12__["CurrencyComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_19__["TemperatureComponent"],
                _weight_weight_component__WEBPACK_IMPORTED_MODULE_20__["WeightComponent"],
                _essay_essay_component__WEBPACK_IMPORTED_MODULE_21__["EssayComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_22__["CalculatorComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_23__["ChatbotComponent"],
                _chatbot_components__WEBPACK_IMPORTED_MODULE_24__["MessageListComponent"],
                _chatbot_components__WEBPACK_IMPORTED_MODULE_24__["MessageFormComponent"],
                _chatbot_components__WEBPACK_IMPORTED_MODULE_24__["MessageItemComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_26__["TodoComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchPipe"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_14__["NgxBarcodeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]
            ],
            providers: [
                _chatbot_services__WEBPACK_IMPORTED_MODULE_25__["DialogflowService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bite/bite.component.html":
/*!******************************************!*\
  !*** ./src/app/bite/bite.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"terab\" (ngModelChange)=\"teraChanged($event)\" placeholder=\"Terabyte\"\r\n        formControlName=\"terab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"gigab\" (ngModelChange)=\"gigaChanged($event)\" placeholder=\"Gigabyte\"\r\n        formControlName=\"gigab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"megab\" (ngModelChange)=\"magaChanged($event)\" placeholder=\"Megabyte\"\r\n        formControlName=\"megab\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"kilob\" (ngModelChange)=\"kiloChanged($event)\" placeholder=\"Kilobyte\"\r\n        formControlName=\"kilob\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"byt\" (ngModelChange)=\"bytChanged($event)\" placeholder=\"Byte\"\r\n        formControlName=\"byt\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"bit\" (ngModelChange)=\"bitChanged($event)\" placeholder=\"Bit\"\r\n        formControlName=\"bit\">\r\n    </mat-form-field>\r\n  </form>\r\n\r\n\r\n<div class=\"tbl\">\r\n  <table id=\"customers\">\r\n    <tr>\r\n      <th>name</th>\r\n      <th>weight</th>\r\n      <th>symbol</th>\r\n    </tr>\r\n    <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n      <td>{{i.name}}</td>\r\n      <td>{{i.weight}}</td>\r\n      <td>{{i.symbol}}</td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/bite/bite.component.scss":
/*!******************************************!*\
  !*** ./src/app/bite/bite.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpdGUvYml0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bite/bite.component.ts":
/*!****************************************!*\
  !*** ./src/app/bite/bite.component.ts ***!
  \****************************************/
/*! exports provided: BiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiteComponent", function() { return BiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            gigab: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            terab: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            megab: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kilob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            byt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            bit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    BiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bite',
            template: __webpack_require__(/*! ./bite.component.html */ "./src/app/bite/bite.component.html"),
            styles: [__webpack_require__(/*! ./bite.component.scss */ "./src/app/bite/bite.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BiteComponent);
    return BiteComponent;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calculator works!\n</p>\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
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

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div  class=\"chatform\">\n  <message-list [messages]=\"messages\"></message-list>\n  <message-form [message]=\"message\" [messages]=\"messages\"></message-form>\n</div>\n"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/chatbot/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent() {
        this.message = new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
        this.messages = [
            new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
        ];
    }
    ChatbotComponent.prototype.ngOnInit = function () {
    };
    ChatbotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.css */ "./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/chatbot/components/index.ts ***!
  \*********************************************/
/*! exports provided: MessageFormComponent, MessageListComponent, MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-form/message-form.component */ "./src/app/chatbot/components/message-form/message-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__["MessageFormComponent"]; });

/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/chatbot/components/message-list/message-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__["MessageListComponent"]; });

/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__["MessageItemComponent"]; });






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

module.exports = ".chatcontrol {\n  float: left;\n  width: 100%; }\n  .chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n  .chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtZm9ybS9FOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1mb3JtXFxtZXNzYWdlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBRmI7SUFLSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBUHBCO0lBV0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1mb3JtL21lc3NhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Y29udHJvbHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmNoYXRpbnB1dHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VuZGJ0bntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return MessageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/chatbot/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/chatbot/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            _this.messages.push(new _models__WEBPACK_IMPORTED_MODULE_1__["Message"](res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp));
        });
        this.message = new _models__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-form',
            template: __webpack_require__(/*! ./message-form.component.html */ "./src/app/chatbot/components/message-form/message-form.component.html"),
            styles: [__webpack_require__(/*! ./message-form.component.scss */ "./src/app/chatbot/components/message-form/message-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DialogflowService"]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



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

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n\n.timeform i {\n    margin-left: 20px; }\n\n.timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtaXRlbS9FOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1pdGVtXFxtZXNzYWdlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRmI7SUFLSSxpQkFBaUIsRUFBQTs7QUFMckI7SUFTSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1pdGVtL21lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRpbWVmb3JtIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC50aW1lc3RhbXB7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmF2YXRhcntcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/chatbot/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/chatbot/components/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.scss */ "./src/app/chatbot/components/message-item/message-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



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

module.exports = ".chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtbGlzdC9FOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1saXN0XFxtZXNzYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0bGlzdHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatlist', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageListComponent.prototype, "chatList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__["MessageItemComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/chatbot/components/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.scss */ "./src/app/chatbot/components/message-list/message-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/models/index.ts":
/*!*****************************************!*\
  !*** ./src/app/chatbot/models/index.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/app/chatbot/models/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_0__["Message"]; });




/***/ }),

/***/ "./src/app/chatbot/models/message.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/models/message.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/chatbot/services/dialogflow.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chatbot/services/dialogflow.service.ts ***!
  \********************************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogflowService = /** @class */ (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
        this.token = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].token;
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
        return this.http.post("" + this.baseURL, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    DialogflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/app/chatbot/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/services/index.ts ***!
  \*******************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogflow.service */ "./src/app/chatbot/services/dialogflow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__["DialogflowService"]; });




/***/ }),

/***/ "./src/app/currency/currency.component.html":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-form-field class=\"example-full-width\">  \r\n    <input matInput type=\"text\" name=\"dollar\" (ngModelChange)=\"dollarChanged($event)\" placeholder=\"USD - US dollar\"\r\n       [(ngModel)]=\"dollar\"> \r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"euro\" (ngModelChange)=\"euroChanged( $event)\" placeholder=\"Euro (EUR)\"\r\n       [(ngModel)]=\"euro\">\r\n  </mat-form-field>\r\n  <!-- great british pond -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"pond\" (ngModelChange)=\"pondChanged( $event)\" placeholder=\"Pound sterling (GBP)\"\r\n       [(ngModel)]=\"pound\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hec\" (ngModelChange)=\"yenChanged( $event)\" placeholder=\"Japanese yen (JPY)\"\r\n       [(ngModel)]=\"japanYen\">\r\n  </mat-form-field>\r\n\r\n    <!-- krone is the official currency of Denmark -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"krone\" (ngModelChange)=\"kroneChanged( $event)\" placeholder=\"Danish krone (DKK)\"\r\n       [(ngModel)]=\"denKrone\">\r\n  </mat-form-field>\r\n  <!-- The lev is the currency of Bulgaria. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"len\" (ngModelChange)=\"bulgChanged( $event)\" placeholder=\"Bulgarian lev (BGN)\"\r\n       [(ngModel)]=\"levBulgria\">\r\n  </mat-form-field>\r\n  <!-- forint (sign: Ft; code: HUF) is the currency of Hungary. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"forint\" (ngModelChange)=\"hungaryChanged( $event)\" placeholder=\"Hungarian forint (HUF)\"\r\n       [(ngModel)]=\"forintHungary\">\r\n  </mat-form-field>\r\n  <!-- The koruna (sign: Kč; code: CZK) is the currency of the Czech Republic -->\r\n  <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"Czech\" (ngModelChange)=\"czechChanged( $event)\" placeholder=\"Czech koruna (CZK)\"\r\n         [(ngModel)]=\"czechRepublc\">\r\n    </mat-form-field>\r\n\r\n    <!-- Zloty can be abbreviated to zl though PLN, the international symbol of the Polish currency, is widely used in Poland as well. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"poland\" (ngModelChange)=\"polandChanged( $event)\" placeholder=\"Polish zloty (PLN)\"\r\n       [(ngModel)]=\"poland\">\r\n  </mat-form-field>\r\n  <!-- The krona is the official currency of Sweden -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kronsym\" (ngModelChange)=\"swedenChanged( $event)\" placeholder=\"Swedish krona (SEK)\"\r\n       [(ngModel)]=\"swedan\">\r\n  </mat-form-field>\r\n  <!-- The franc is the currency and legal tender of Switzerland and Liechtenstein -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"franc\" (ngModelChange)=\"swissChanged( $event)\" placeholder=\"Swiss franc (CHF)\"\r\n       [(ngModel)]=\"swiss\">\r\n  </mat-form-field>\r\n  <!-- The króna (sign: kr; code: ISK) is the currency of Iceland. -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"ice\" (ngModelChange)=\"icelndChanged( $event)\" placeholder=\"Icelandic krona (ISK)\"\r\n       [(ngModel)]=\"icelnd\">\r\n  </mat-form-field>.\r\n\r\n    <!-- The krone [ˈkruːnə] (sign: kr; code: NOK), plural kroner, is the currency of Norway -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"norwy\" (ngModelChange)=\"norwayChanged( $event)\" placeholder=\"Norwegian krone (NOK)\"\r\n       [(ngModel)]=\"norway\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"aust\" (ngModelChange)=\"ausChanged( $event)\" placeholder=\"Australian dollar (AUD)\"\r\n       [(ngModel)]=\"australian\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"canada\" (ngModelChange)=\"conadaChanged( $event)\" placeholder=\"Canadian dollar (CAD)\"\r\n       [(ngModel)]=\"canada\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kong\" (ngModelChange)=\"hongChanged( $event)\" placeholder=\"Hong Kong dollar (HKD)\"\r\n       [(ngModel)]=\"hongkong\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"kor\" (ngModelChange)=\"koreanChanged( $event)\" placeholder=\"South Korean won (KRW)\"\r\n       [(ngModel)]=\"korean\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"newzlnd\" (ngModelChange)=\"newzlndChanged( $event)\" placeholder=\"New Zealand dollar (NZD)\"\r\n       [(ngModel)]=\"newzlnd\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sing\" (ngModelChange)=\"singChanged( $event)\" placeholder=\"Singapore dollar (SGD)\"\r\n       [(ngModel)]=\"singapore\">\r\n  </mat-form-field>\r\n  <!-- The rand (sign: R; code: ZAR) is the currency of South Africa.  -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"afri\" (ngModelChange)=\"africnChanged( $event)\" placeholder=\"South African rand (ZAR)\"\r\n       [(ngModel)]=\"african\">\r\n  </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"rupee\" (ngModelChange)=\"INDChanged( $event)\" placeholder=\"Indian Rupee (INR)\"\r\n         [(ngModel)]=\"indian\">\r\n    </mat-form-field>\r\n    <!-- currency of Romania -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"roman\" (ngModelChange)=\"romaniaChanged( $event)\" placeholder=\"Romanian Leu (RON)\"\r\n         [(ngModel)]=\"romaniac\">\r\n    </mat-form-field>\r\n    <!-- currency of Croatia -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"cro\" (ngModelChange)=\"crotiaChanged( $event)\" placeholder=\"Croatian Kuna(HRK)\"\r\n         [(ngModel)]=\"crotia\">\r\n    </mat-form-field>\r\n    <!-- The rand (sign: R; code: ZAR) is the currency of South Africa.  -->\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" name=\"russ\" (ngModelChange)=\"russianChanged( $event)\" placeholder=\"Russian Ruble (RUB)\"\r\n         [(ngModel)]=\"russian\">\r\n    </mat-form-field>\r\n\r\n\r\n<div class=\"tbl\">\r\n    <table id=\"customers\">\r\n       <tr>\r\n         <th>name</th>\r\n         <th>symbol</th>\r\n       </tr>\r\n       <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n         <td>{{i.name}}</td>\r\n         <td>{{i.symbol}}</td>\r\n       </tr>\r\n     </table>\r\n   </div>\r\n"

/***/ }),

/***/ "./src/app/currency/currency.component.scss":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbmN5L2N1cnJlbmN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/currency/currency.component.ts":
/*!************************************************!*\
  !*** ./src/app/currency/currency.component.ts ***!
  \************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        return (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([response1, response2, response3, response4, response5, response6, response7,
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/digit/digit.component.html":
/*!********************************************!*\
  !*** ./src/app/digit/digit.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t\t<form [formGroup]=\"form\">\r\n        <h1>Base converter</h1>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"decimal\" (ngModelChange)=\"decimalChanged($event)\" placeholder=\"decimal\"\r\n              formControlName=\"decimal\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"binary\" (ngModelChange)=\"binaryChanged($event)\" placeholder=\"binary\"\r\n              formControlName=\"binary\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"octal\" (ngModelChange)=\"octalChanged($event)\" placeholder=\"octal\"\r\n              formControlName=\"octal\">\r\n          </mat-form-field>\r\n\r\n         <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"text\" name=\"hexa\" (ngModelChange)=\"hexaChanged($event)\" placeholder=\"hexa\"\r\n              formControlName=\"hexa\">\r\n          </mat-form-field>\r\n     </form>\r\n\r\n<div class=\"tbl\">\r\n     <table id=\"customers\">\r\n        <tr>\r\n          <th>name</th>\r\n          <th>weight</th>\r\n          <th>symbol</th>\r\n        </tr>\r\n        <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n          <td>{{i.name}}</td>\r\n          <td>{{i.weight}}</td>\r\n          <td>{{i.symbol}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>"

/***/ }),

/***/ "./src/app/digit/digit.component.scss":
/*!********************************************!*\
  !*** ./src/app/digit/digit.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpZ2l0L2RpZ2l0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/digit/digit.component.ts":
/*!******************************************!*\
  !*** ./src/app/digit/digit.component.ts ***!
  \******************************************/
/*! exports provided: DigitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitComponent", function() { return DigitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            decimal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            binary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            octal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            hexa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    DigitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-digit',
            template: __webpack_require__(/*! ./digit.component.html */ "./src/app/digit/digit.component.html"),
            styles: [__webpack_require__(/*! ./digit.component.scss */ "./src/app/digit/digit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DigitComponent);
    return DigitComponent;
}());



/***/ }),

/***/ "./src/app/essay/essay.component.css":
/*!*******************************************!*\
  !*** ./src/app/essay/essay.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vzc2F5L2Vzc2F5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/essay/essay.component.html":
/*!********************************************!*\
  !*** ./src/app/essay/essay.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-head\">\n  <div>\n    <span>  Directions</span>\n      Read the question below. You have 30 minutes to\n      plan, write, and revise your essay. Typically an\n      effective response will contain a minimum of 300\n      words\n  </div>\n  <div>\n     <span> Question</span>\n      Question: Do you agree or disagree with the following\n      statement? Always telling the truth is the most important\n      consideration in any relationship between people. Use\n      specific reasons and examples to support your answer\n  </div>\n  <div>\n    <div>\n      <button>Cut</button>\n      <button>Paste</button>\n      <button>Undo</button>\n<span>Word count</span>\n<span>5</span>\n<button>hide</button>\n    </div>\n    <div></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/essay/essay.component.ts":
/*!******************************************!*\
  !*** ./src/app/essay/essay.component.ts ***!
  \******************************************/
/*! exports provided: EssayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayComponent", function() { return EssayComponent; });
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

var EssayComponent = /** @class */ (function () {
    function EssayComponent() {
    }
    EssayComponent.prototype.ngOnInit = function () {
    };
    EssayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-essay',
            template: __webpack_require__(/*! ./essay.component.html */ "./src/app/essay/essay.component.html"),
            styles: [__webpack_require__(/*! ./essay.component.css */ "./src/app/essay/essay.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EssayComponent);
    return EssayComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"km\" (ngModelChange)=\"kmChanged($event)\" \r\n    placeholder=\"kilometer\" [(ngModel)]=\"kiloMeter\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput  type=\"text\" name=\"m\" (ngModelChange)=\"mtrChanged($event)\" \r\n    placeholder=\"meter\" [(ngModel)]=\"meter\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"cm\" (ngModelChange)=\"cmChanged($event)\" \r\n    placeholder=\"centi meter\" [(ngModel)]=\"centiMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"mm\" (ngModelChange)=\"mmChanged($event)\" \r\n    placeholder=\"mili meter\" [(ngModel)]=\"miliMetr\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"dm\" (ngModelChange)=\"decaChanged($event)\" \r\n    placeholder=\"Decimetre\"  [(ngModel)]=\"decaMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"um\" (ngModelChange)=\"microChanged($event)\" \r\n    placeholder=\"micro meter\"  [(ngModel)]=\"microMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"nm\" (ngModelChange)=\"nanoChanged($event)\" \r\n    placeholder=\"nano meter\"  [(ngModel)]=\"nanoMetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"mile\" (ngModelChange)=\"mileChanged($event)\" \r\n    placeholder=\"mile\"  [(ngModel)]=\"mile\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"yd\" (ngModelChange)=\"yardChanged($event)\" \r\n    placeholder=\"yard\"  [(ngModel)]=\"yard\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"foot\" (ngModelChange)=\"footChanged($event)\" \r\n    placeholder=\"foot\"  [(ngModel)]=\"foot\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"inch\" (ngModelChange)=\"inchChanged($event)\" \r\n    placeholder=\"inch\"  [(ngModel)]=\"inch\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"gj\"  \r\n    placeholder=\"Guz\"  [(ngModel)]=\"gajj\">\r\n  </mat-form-field>\r\n\r\n\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sq.km\" (ngModelChange)=\"sqkmChanged($event)\" \r\n    placeholder=\"sq. km\"  [(ngModel)]=\"sqkilometer\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqm\" (ngModelChange)=\"sqmChanged($event)\" \r\n    placeholder=\"square meter\"  [(ngModel)]=\"sqmetr\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqmile\" (ngModelChange)=\"sqmileChanged($event)\" \r\n    placeholder=\"square mile\"  [(ngModel)]=\"sqmile\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqyd\" (ngModelChange)=\"sqydChanged($event)\" \r\n    placeholder=\"Gaj or Sqaure Yard \"  [(ngModel)]=\"sqyard\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"cm\" (ngModelChange)=\"sqfootChanged($event)\" \r\n    placeholder=\"square foot\"  [(ngModel)]=\"sqft\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"sqinch\" (ngModelChange)=\"sqinchChanged($event)\" \r\n    placeholder=\"square inch\"  [(ngModel)]=\"sqinch\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"acre\" (ngModelChange)=\"acreChanged($event)\" \r\n    placeholder=\"acres\"  [(ngModel)]=\"acre\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hec\" (ngModelChange)=\"hectareChanged($event)\" \r\n    placeholder=\"hectare\"  [(ngModel)]=\"hectare\">\r\n  </mat-form-field>\r\n\r\n\r\n<div class=\"tbl\">\r\n    <table id=\"customers\">\r\n       <tr>\r\n         <th>name</th>\r\n         <th>weight</th>\r\n         <th>symbol</th>\r\n       </tr>\r\n       <tr *ngFor=\"let i of ELEMENT_DATA\">\r\n         <td>{{i.name}}</td>\r\n         <td>{{i.weight}}</td>\r\n         <td>{{i.symbol}}</td>\r\n       </tr>\r\n     </table>\r\n   </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divide {\n  float: left;\n  width: 50%;\n  margin: 10px;\n  border: 2px solid #73AD21; }\n\n.divideSection {\n  width: 50%;\n  margin: 10px;\n  clear: left;\n  border: 2px solid #73AD21; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9FOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kaXZpZGV7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcclxufVxyXG5cclxuLmRpdmlkZVNlY3Rpb257XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



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

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\n#notfound {\n  position: relative;\n  height: 100vh; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 767px;\n  width: 100%;\n  line-height: 1.4;\n  padding: 0px 15px; }\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 150px;\n  line-height: 150px;\n  margin-bottom: 25px; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 186px;\n  font-weight: 900;\n  margin: 0px;\n  text-transform: uppercase;\n  background: url('text.png');\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: cover;\n  background-position: center; }\n\n.notfound h2 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0; }\n\n.notfound p {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 0px;\n  text-transform: uppercase; }\n\n.notfound a {\n  font-family: 'Titillium Web', sans-serif;\n  display: inline-block;\n  text-transform: uppercase;\n  color: #fff;\n  text-decoration: none;\n  border: none;\n  background: #5c91fe;\n  padding: 10px 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 1px;\n  margin-top: 15px;\n  transition: 0.2s all; }\n\n.notfound a:hover {\n  opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0U6XFxwcm9cXHVuaXRzL3NyY1xcYXBwXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVZLHNCQUFzQixFQUFBOztBQUdoQztFQUNFLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBR0EsZ0NBQWdDLEVBQUE7O0FBRzFDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwyQkFBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIHtcclxuICAgIG1heC13aWR0aDogNzY3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4NnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy90ZXh0LnBuZycpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM1YzkxZmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/tech/tech.component.html":
/*!******************************************!*\
  !*** ./src/app/tech/tech.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"back\">\r\n  <h2> Random number generator</h2>\r\n  <span>Amount of numbers to be generated </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavx\" [(ngModel)]=\"entries\">\r\n  </mat-form-field>\r\n  <span>Numbers from: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavdvfx\" [(ngModel)]=\"noFrom\">\r\n  </mat-form-field>\r\n  <span>Numbers to: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" name=\"hexavdvfx\" [(ngModel)]=\"noTo\" (blur)=\"randomNo()\">\r\n  </mat-form-field>\r\n  <span>Output: </span>\r\n  <input type=\"text\" id=\"myInput\" [(ngModel)]=\"noOutput\" disabled>\r\n  <div class=\"tooltip\">\r\n    <button (click)=\"copyData()\" (mouseout)=\"outFunc()\">\r\n      <span class=\"tooltiptext\" id=\"myTooltip\">Copy to clipboard</span>\r\n      Copy text\r\n      </button>\r\n</div>\r\n\r\n</div>\r\n\r\n<div id=\"top\">\r\n  <h2> Random string generator</h2>\r\n  <span> Allowed chars: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexazdvx\" [(ngModel)]=\"textEntriesString\">\r\n  </mat-form-field>\r\n  <span>Number of strings: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexafsvx\" [(ngModel)]=\"noofSTr\">\r\n  </mat-form-field>\r\n  <span>Length: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"hexavvx\" [(ngModel)]=\"lenStr\" (blur)=\"generateText()\">\r\n  </mat-form-field>\r\n  <span> Output:</span>\r\n  <input type=\"text\" id=\"myInput\" [(ngModel)]=\"finalStr\" disabled>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Shuffle letters</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"1\" [(ngModel)]=\"shuffledata\" (blur)=\"shufflWords()\">\r\n  </mat-form-field>\r\n  <span> Output: </span>\r\n  <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"finalShuffling\" disabled>\r\n</div>\r\n\r\n<div>\r\n  <h2>Compress text online encrypt/decrypt</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"2\" [(ngModel)]=\"myString\">\r\n  </mat-form-field>\r\n  <span>Convert: </span>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n      <mat-select placeholder=\"Select\">\r\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n          {{food.viewValue}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  <br>\r\n  <span>Output: </span>\r\n</div>\r\n\r\n<div>\r\n  <h2>Text statistics generator</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" name=\"3\" [(ngModel)]=\"textData\" (blur)=\"WordsStatistics()\">\r\n  </mat-form-field>\r\n  <span>Output: </span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalObj\"></textarea>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Remove line breaks online</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput name=\"\" id=\"\" cols=\"30\" rows=\"5\" id=\"\" [(ngModel)]=\"someText\" (blur)=\"removeLinebreaks()\"></textarea>\r\n    </mat-form-field>\r\n  <span>Output:</span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"updatedText\"></textarea>\r\n</div>\r\n\r\n<div>\r\n  <h2>Replace text online</h2>\r\n  <span>Input data: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"phrase\" name=\"phrase\">\r\n  </mat-form-field>\r\n  <span>Find text: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"findPhrase\" name=\"ph\">\r\n  </mat-form-field>\r\n  <span>Replace with: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"replacePhrase\" name=\"phr\">\r\n  </mat-form-field>\r\n  <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"finalPhrase\" disabled>\r\n  <button (click)=\"replaceText()\">Replace</button>\r\n</div>\r\n\r\n<div class=\"back\">\r\n  <h2>Count characters</h2>\r\n  <span>Input: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" [(ngModel)]=\"exampleString\" name=\"sfd\" (blur)=\"countChars()\">\r\n  </mat-form-field>\r\n  <span>Output:</span>\r\n  <br>\r\n  <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalop\"></textarea>\r\n  <!-- c: 1\r\nd: 3\r\nf: 1\r\ns: 1 -->\r\n</div>\r\n\r\n<div>\r\n  <h2>Count text entries</h2>\r\n  <div>\r\n    <span>Input: </span>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" [(ngModel)]=\"sampEntries\" name=\"\" id=\"\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <span>Find text: </span>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput type=\"text\" [(ngModel)]=\"texttofind\" (blur)=\"textEntries()\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <span>Output:</span>\r\n    <br>\r\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"finalValue\"></textarea>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <h2>Barcode generator</h2>\r\n  <span>Input data: </span>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <textarea matInput name=\"\" id=\"\" cols=\"30\" rows=\"5\" id=\"\" placeholder=\"bc-value\" [(ngModel)]=\"value\"></textarea>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n    <mat-select placeholder=\"bc-element-type\" [(ngModel)]=\"elementType\">\r\n      <mat-option *ngFor=\"let food of foods2\" [value]=\"food.value\">\r\n        {{food.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field style=\"margin-left:10px\">\r\n    <mat-select placeholder=\"bc-format\" [(ngModel)]=\"format\">\r\n      <mat-option *ngFor=\"let code of codeList\" [value]=\"code\">\r\n        {{code}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-line-color\" [(ngModel)]=\"lineColor\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-width\" [(ngModel)]=\"width\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-height\" [(ngModel)]=\"height\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-font-options\" [(ngModel)]=\"fontOptions\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-font\" [(ngModel)]=\"font\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-align\" [(ngModel)]=\"textAlign\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-position\" [(ngModel)]=\"textPosition\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-text-margin\" [(ngModel)]=\"textMargin\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-font-size\" [(ngModel)]=\"fontSize\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"bc-background\" [(ngModel)]=\"background\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"bc-margin\" [(ngModel)]=\"margin\">\r\n  </mat-form-field>\r\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"displayValue\">bc-display-value</mat-checkbox>\r\n\r\n  <br>\r\n  <span>Output:</span>\r\n  <div fxLayout=\"column\">\r\n    <ngx-barcode *ngFor=\"let bcValue of values\" [bc-element-type]=\"elementType\" [bc-value]=\"bcValue\"\r\n      [bc-format]=\"format\" [bc-line-color]=\"lineColor\" [bc-width]=\"width\" [bc-height]=\"height\"\r\n      [bc-display-value]=\"displayValue\" [bc-font-options]=\"fontOptions\" [bc-font]=\"font\" [bc-text-align]=\"textAlign\"\r\n      [bc-text-position]=\"textPosition\" [bc-text-margin]=\"textMargin\" [bc-font-size]=\"fontSize\"\r\n      [bc-background]=\"background\" [bc-margin]=\"margin\" [bc-margin-top]=\"marginTop\" [bc-margin-bottom]=\"marginBottom\"\r\n      [bc-margin-left]=\"marginLeft\" [bc-margin-right]=\"marginRight\"></ngx-barcode>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tech/tech.component.scss":
/*!******************************************!*\
  !*** ./src/app/tech/tech.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-family: verdana;\n  font-size: 20px; }\n\n.back {\n  background-color: aliceblue; }\n\n.tooltip {\n  position: relative;\n  display: inline-block; }\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 140px;\n  background-color: #555;\n  color: red;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 1;\n  transition: opacity 0.3s; }\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible; }\n\n.example-margin {\n  margin: 0 10px; }\n\nbutton {\n  background-image: linear-gradient(#337ab7 0px, #265a88 100%);\n  background-repeat: repeat-x;\n  border-color: #245580;\n  color: white;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaC9FOlxccHJvXFx1bml0cy9zcmNcXGFwcFxcdGVjaFxcdGVjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFvQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0RBQXNELEVBQUE7O0FBR3hEO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLDREQUErRTtFQUMvRSwyQkFBMkI7RUFDM0IscUJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZWNoL3RlY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnNwYW57XHJcbiAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxufVxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgY29sb3I6cmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMTUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuYnV0dG9ueyAgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig1MSwgMTIyLCAxODMpIDBweCwgcmdiKDM4LCA5MCwgMTM2KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzYsIDg1LCAxMjgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tech/tech.component.ts":
/*!****************************************!*\
  !*** ./src/app/tech/tech.component.ts ***!
  \****************************************/
/*! exports provided: TechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechComponent", function() { return TechComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        console.log(countObject);
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
        //  console.log(count(str34,'i'),'df');
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
        console.log(this.finalShuffling, 'cs');
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
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(myString, myPassword);
        // var decrypted = crypto.AES.decrypt(encrypted, myPassword);
        // var encrypted = crypto.AES.encrypt("Message", "Secret Passphrase");
        // U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(encrypted, 'Secret Passphrase');
        console.log(encrypted.toString());
        console.log(decrypted.toString());
        console.log(decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8, 'vg'));
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
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'log.txt');
    };
    TechComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tech',
            template: __webpack_require__(/*! ./tech.component.html */ "./src/app/tech/tech.component.html"),
            styles: [__webpack_require__(/*! ./tech.component.scss */ "./src/app/tech/tech.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TechComponent);
    return TechComponent;
}());



/***/ }),

/***/ "./src/app/temperature/temperature.component.css":
/*!*******************************************************!*\
  !*** ./src/app/temperature/temperature.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temp{\r\n    margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGVyYXR1cmUvdGVtcGVyYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBlcmF0dXJlL3RlbXBlcmF0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVtcHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/temperature/temperature.component.html":
/*!********************************************************!*\
  !*** ./src/app/temperature/temperature.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Conversion of Temperature - Celsius to Fahrenheit and vice-versa</h3>\r\n\r\n<mat-form-field class=\"example-full-width\">  \r\n  <input matInput type=\"text\" name=\"celsius\" (ngModelChange)=\"celsiusChanged($event)\" placeholder=\"Celsius (°C)\t\"\r\n     [(ngModel)]=\"cels\"> \r\n</mat-form-field>\r\n<mat-form-field class=\"example-full-width\">\r\n  <input matInput type=\"text\" name=\"fahrenheit\" (ngModelChange)=\"fahrChanged( $event)\" placeholder=\"Fahrenheit (°F)\t\"\r\n     [(ngModel)]=\"fahr\">\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/temperature/temperature.component.ts":
/*!******************************************************!*\
  !*** ./src/app/temperature/temperature.component.ts ***!
  \******************************************************/
/*! exports provided: TemperatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureComponent", function() { return TemperatureComponent; });
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

var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent() {
        this.cels = 0;
        this.fahr = 32;
    }
    TemperatureComponent.prototype.ngOnInit = function () {
    };
    TemperatureComponent.prototype.celsiusChanged = function (newvalue) {
        var tempValue = newvalue == "" ? "0" : newvalue;
        this.fahr = ((parseFloat(tempValue) * 9) / 5) + 32;
    };
    TemperatureComponent.prototype.fahrChanged = function (newvalue) {
        var tempValue = newvalue == "" ? "0" : newvalue;
        this.cels = ((parseFloat(tempValue) - 32) * 5) / 9;
    };
    TemperatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temperature',
            template: __webpack_require__(/*! ./temperature.component.html */ "./src/app/temperature/temperature.component.html"),
            styles: [__webpack_require__(/*! ./temperature.component.css */ "./src/app/temperature/temperature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureComponent);
    return TemperatureComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n    background: #faedbe;\r\n}\r\n\r\n.head{\r\n    display: flex;\r\n}\r\n\r\n.scroll{\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n    width: 30%;\r\n}\r\n\r\n.textbox{\r\n    font-size: x-large;\r\n    border-width: 0px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: #eee;\r\n    width: 70%;\r\n}\r\n\r\n.rightbox{\r\n    background-color: #eee;\r\n    width: 70%;\r\n}\r\n\r\n.btn {\r\n    background-color: #f7fcfd; /* Blue background */\r\n    border: none; /* Remove borders */\r\n    padding: 12px 16px; /* Some padding */\r\n    font-size: 16px; /* Set a font size */\r\n    cursor: pointer; /* Mouse pointer on hover */\r\n  }\r\n\r\n/* Darker background on mouse-over */\r\n\r\n.btn:hover {\r\n    background-color: RoyalBlue;\r\n    opacity: 0.8;  \r\n  }\r\n\r\ninput[type=text] {  \r\n      padding: 12px 40px;  \r\n    border-radius: 10px;\r\n      display: inline-block;  \r\n      border: 1px solid #ccc;  \r\n      box-sizing: border-box;  \r\n  }\r\n\r\n.fontuser { \r\n      position: relative; \r\n  }\r\n\r\n.fontuser i{ \r\n      position: absolute; \r\n      left: 15px; \r\n      top: 13px; \r\n      color: gray; \r\n  }\r\n\r\n.aligndate {\r\ndisplay: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUdBO0lBQ0kseUJBQXlCLEVBQUUsb0JBQW9CO0lBQy9DLFlBQVksRUFBRSxtQkFBbUI7SUFDakMsa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsZUFBZSxFQUFFLDJCQUEyQjtFQUM5Qzs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDs7QUFHQTtNQUNJLGtCQUFrQjtJQUNwQixtQkFBbUI7TUFDakIscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0QixzQkFBc0I7RUFDMUI7O0FBR0E7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxXQUFXO0VBQ2Y7O0FBRUY7QUFDQSxhQUFhO0lBQ1QsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYWVkYmU7XHJcbn1cclxuXHJcbi5oZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2Nyb2xse1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4udGV4dGJveHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmlnaHRib3h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZmNmZDsgLyogQmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xyXG4gIH1cclxuICBcclxuICAvKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBtb3VzZS1vdmVyICovXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbiAgICBvcGFjaXR5OiAwLjg7ICBcclxuICB9XHJcblxyXG5cclxuICBpbnB1dFt0eXBlPXRleHRdIHsgIFxyXG4gICAgICBwYWRkaW5nOiAxMnB4IDQwcHg7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAgXHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcclxuICB9ICBcclxuICAgIFxyXG5cclxuICAuZm9udHVzZXIgeyBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICB9IFxyXG4gICAgXHJcbiAgLmZvbnR1c2VyIGl7IFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICBsZWZ0OiAxNXB4OyBcclxuICAgICAgdG9wOiAxM3B4OyBcclxuICAgICAgY29sb3I6IGdyYXk7IFxyXG4gIH0gXHJcblxyXG4uYWxpZ25kYXRlIHtcclxuZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\" id=\"responsive\">\n  <div>\n      <button class=\"btn\" (click)=\"addNote()\"><i class=\"fa fa-plus\"></i>Add </button>\n      <button class=\"btn\" (click)=\"editNote()\"><i class=\"fa fa-edit\"></i> Edit</button>\n      <button class=\"btn\" (click)=\"deleteNote()\"><i class=\"fa fa-remove\"></i>Remove </button>\n      <button class=\"btn\" (click)=\"saveNote()\"><i class=\"fa fa-save\"></i> Save</button>\n  </div>\n  <div class=\"container\">\n      <div class=\"fontuser\">\n          <input type=\"text\" [(ngModel)]=\"searchNotes\" placeholder=\"Search\">\n          <i class=\"fa fa-search\"></i>\n      </div>\n  </div>\n</div>\n\n\n\n<div class=\"head\">\n  \n  <div class=\"scroll\">\n      <div *ngFor=\"let j= index;let item of taskList|search:'title,content':searchNotes\"\n          [ngClass]=\"{'active': selectedNote == item}\" (click)=\"selectedNote = item\">\n          <h1 id=\"textValue\">{{item.content}}</h1>\n          <span style=\"font-weight: 600;\">{{item.currentTime}}</span>\n          <span>{{' ' + item.title}}</span>\n      </div>\n  </div>\n\n  <div class=\"rightbox\">\n      <span class=\"aligndate\">{{selectedNote.modifiedTime}}</span> <br>\n     <textarea class=\"textbox\" type=\"text\" [ngModel]=\"selectedNote.content\" (ngModelChange)=\"selectedNote.content = $event\" *ngIf=\"selectedNote\" [disabled]=\"enableDisableSpan\" #inputToFocus> </textarea>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
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

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputToFocus'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodoComponent.prototype, "inputElement", void 0);
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/weight/weight.component.css":
/*!*********************************************!*\
  !*** ./src/app/weight/weight.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlaWdodC93ZWlnaHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/weight/weight.component.html":
/*!**********************************************!*\
  !*** ./src/app/weight/weight.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  weight conversion\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/weight/weight.component.ts":
/*!********************************************!*\
  !*** ./src/app/weight/weight.component.ts ***!
  \********************************************/
/*! exports provided: WeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightComponent", function() { return WeightComponent; });
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

var WeightComponent = /** @class */ (function () {
    function WeightComponent() {
    }
    WeightComponent.prototype.ngOnInit = function () {
    };
    WeightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weight',
            template: __webpack_require__(/*! ./weight.component.html */ "./src/app/weight/weight.component.html"),
            styles: [__webpack_require__(/*! ./weight.component.css */ "./src/app/weight/weight.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeightComponent);
    return WeightComponent;
}());



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


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\pro\units\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map