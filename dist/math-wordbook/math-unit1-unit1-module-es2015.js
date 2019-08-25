(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["math-unit1-unit1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/math/unit1/numbers/numbers.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/math/unit1/numbers/numbers.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Natural Numbers And Whole Numbers</h1>\n<ol>\n    <li>\n        <p> <b>Natural Numbers :</b></p>\n        <p>Natural numbers are denoted by 'N'.numbers starting from '1 ' (one).\n            N = {{ \"{1, 2, 3, 4, 5, .........}\" }}</p>\n    </li>\n\n    <li>\n        <p> <b>Whole Numbers :</b></p>\n        <p>Whole numbers are denoted by 'W'.numbers starting from '0' (zero).\n            W = {{ \"{0, 1, 2, 3, 4, 5, .........}\" }}</p>\n    </li>\n    <li>\n        <p> <b>Even Numbers :</b></p>\n        <p> Numbers which are the multiples of '2' are called 'Even Numbers '.\n            E = {{ \"{2, 4, 6, 8, .........}\" }}</p>\n    </li>\n    <li>\n        <p> <b>Odd Numbers :</b></p>\n        <p> Numbers which are not the multiples of '2' are called 'Odd Numbers'.\n            Odd = {{ \"{1, 3, 5, 7, .........}\" }}</p>\n    </li>\n    <li>\n        <p> The smallest Natural Number is '1 ' and the smallest\n            Whole Number is '0'.</p>\n    </li>\n    <li>\n        <p> There do not exist the largest Natural number and\n            the largest Whole number.</p>\n    </li>\n    <li>\n        <p>The successor of any whole number is one more than that whole number.</p>\n        <p> Ex : Successor of 11 is 12, (11 + 1)</p>\n    </li>\n    <li>\n        <p>The predecessor of any whole number is one less\n            than that whole number.</p>\n        <p> Ex : Predecessor of 11 is 10 (11 1)</p>\n    </li>\n    <li>\n        <p>There is no predecessor of zero in whole numbers.</p>\n    </li>\n    <li>\n        <p>Face value and place value :</p>\n        <ul>\n            <li>Face value of a digit is the digit itsell\n                Ex.: Face value of '5' in 325 is '5'</li>\n\n            <li>Place value of a digit is the value of the digit in its place.\n                Ex. : Place value of '5' in 352 is 50 [5 x 10]</li>\n        </ul>\n    </li>\n    <li>\n        <p> <b>Consecutive Numbers :</b></p>\n        <p>The Numbers which differ from each other by one are called 'Consecutive Numbers'.\n            Ex. : 13, 14 and 19, 20 are Consecutive Numbers</p>\n    </li>\n</ol>");

/***/ }),

/***/ "./src/app/math/unit1/numbers/numbers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/math/unit1/numbers/numbers.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1 {\n    font-size: 2.4rem;\n    font-weight: 500;\n    display: inline-block;\n    margin: 8px 0;\n}\nh1, h2, h3, h4, h5, h6 {\n    color: #333;\n}\na, input, li, ol, p, ul {\n    font-size: 1.4rem;\n    line-height: 2.4rem;\n    letter-spacing: .3px;\n    letter-spacing: .03rem;\n    font-weight: 400;\n    color: #444;\n}\nli p {\n    margin: 0;\n}\nli {\n    padding-bottom: 8px;\n}\nul { list-style-type: square; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0aC91bml0MS9udW1iZXJzL251bWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLEtBQUssdUJBQXVCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9tYXRoL3VuaXQxL251bWJlcnMvbnVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMSB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMDtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuYSwgaW5wdXQsIGxpLCBvbCwgcCwgdWwge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wM3JlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNDQ0O1xufVxubGkgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxubGkge1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG51bCB7IGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlOyB9Il19 */");

/***/ }),

/***/ "./src/app/math/unit1/numbers/numbers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/math/unit1/numbers/numbers.component.ts ***!
  \*********************************************************/
/*! exports provided: NumbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersComponent", function() { return NumbersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumbersComponent = class NumbersComponent {
    constructor() { }
    ngOnInit() {
    }
};
NumbersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-numbers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./numbers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/math/unit1/numbers/numbers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./numbers.component.css */ "./src/app/math/unit1/numbers/numbers.component.css")).default]
    })
], NumbersComponent);



/***/ }),

/***/ "./src/app/math/unit1/unit1-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/math/unit1/unit1-routing.module.ts ***!
  \****************************************************/
/*! exports provided: Unit1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit1RoutingModule", function() { return Unit1RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _numbers_numbers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numbers/numbers.component */ "./src/app/math/unit1/numbers/numbers.component.ts");




const routes = [
    {
        path: '',
        component: _numbers_numbers_component__WEBPACK_IMPORTED_MODULE_3__["NumbersComponent"]
    }
];
let Unit1RoutingModule = class Unit1RoutingModule {
};
Unit1RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Unit1RoutingModule);



/***/ }),

/***/ "./src/app/math/unit1/unit1.module.ts":
/*!********************************************!*\
  !*** ./src/app/math/unit1/unit1.module.ts ***!
  \********************************************/
/*! exports provided: Unit1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit1Module", function() { return Unit1Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _unit1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit1-routing.module */ "./src/app/math/unit1/unit1-routing.module.ts");
/* harmony import */ var _numbers_numbers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numbers/numbers.component */ "./src/app/math/unit1/numbers/numbers.component.ts");





let Unit1Module = class Unit1Module {
};
Unit1Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_numbers_numbers_component__WEBPACK_IMPORTED_MODULE_4__["NumbersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _unit1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Unit1RoutingModule"]
        ]
    })
], Unit1Module);



/***/ })

}]);
//# sourceMappingURL=math-unit1-unit1-module-es2015.js.map