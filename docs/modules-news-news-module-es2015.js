(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"first-header\">\n  <span>{{ sourceName }}</span>\n</div>\n\n<div class=\"second-header\">\n\n  <mat-form-field>\n    <mat-label>Select source</mat-label>\n    <mat-select [(value)]=\"selected\" (valueChange)=\"sourceSelected($event)\">\n      <mat-option value=\"sourceAll\">All sources</mat-option>\n      <mat-option *ngFor=\"let source of sources\" [value]=\"source\">{{ source }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <app-search></app-search>\n\n  <mat-button-toggle class=\"header-element\" (click)=\"openAddNewsDialog()\">Add article</mat-button-toggle>\n</div>\n\n<div class=\"news-list\">\n  <div *ngIf=\"newsArray.length; else noNews\">\n    <app-news-item\n      [news]=\"news\"\n      *ngFor=\"let news of newsArray\"\n    ></app-news-item>\n  </div>\n</div>\n\n<ng-template class=\"news-list\" #noNews>\n  <div class=\"noNews\">There are no news!</div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/modules/news/news-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/news/news-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/news/news.component.ts");




const routes = [
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
    }
];
let NewsRoutingModule = class NewsRoutingModule {
};
NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewsRoutingModule);



/***/ }),

/***/ "./src/app/modules/news/news.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".first-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 80px;\n  background: #587599;\n}\n.first-header span {\n  font-size: 36px;\n  font-weight: bold;\n  color: #ffffff;\n}\n.second-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 80px;\n  margin: 0 auto;\n  border-bottom: #8eaacc 1px solid;\n}\n.second-header .header-element {\n  padding: 0 20px;\n  color: #ffffff;\n  background: #8eaacc;\n  border: 1px solid #8eaacc;\n}\n.news-list {\n  width: 65%;\n  margin: 0 auto;\n}\n.news-list .noNews {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 200px;\n  font-size: xx-large;\n  font-weight: bold;\n  color: #587599;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXdzL0Y6XFzQodC+0YTRltC50LrQsFxc0J3QoyDQm9CfXFwzINC60YPRgNGBXFw2INGB0LXQvNC10YHRgtGAXFzQldC60YHRgtGA0LXQvNCw0LvRjNC90LUg0L/RgNC+0LPRgNCw0LzRg9Cy0LDQvdC90Y9cXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXG5ld3NcXG5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjtBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUo7QURJQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDREY7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogIzU4NzU5OTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY29uZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogIzhlYWFjYyAxcHggc29saWQ7XHJcblxyXG4gIC5oZWFkZXItZWxlbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM4ZWFhY2M7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGVhYWNjO1xyXG4gIH1cclxufVxyXG5cclxuLm5ld3MtbGlzdCB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgLm5vTmV3cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNTg3NTk5O1xyXG4gIH1cclxufVxyXG4iLCIuZmlyc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICM1ODc1OTk7XG59XG4uZmlyc3QtaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlY29uZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b206ICM4ZWFhY2MgMXB4IHNvbGlkO1xufVxuLnNlY29uZC1oZWFkZXIgLmhlYWRlci1lbGVtZW50IHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzhlYWFjYztcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlYWFjYztcbn1cblxuLm5ld3MtbGlzdCB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm5ld3MtbGlzdCAubm9OZXdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzU4NzU5OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/news/news.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/news/news.component.ts ***!
  \************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_news_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/news-storage.service */ "./src/app/shared/services/news-storage.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_dialogs_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dialogs/add-article/add-article.component */ "./src/app/shared/dialogs/add-article/add-article.component.ts");





let NewsComponent = class NewsComponent {
    constructor(newsStorageService, dialog) {
        this.newsStorageService = newsStorageService;
        this.dialog = dialog;
        this.sourceName = 'My news';
        this.selected = 'sourceAll';
    }
    ngOnInit() {
        this.subscribeForChanges();
    }
    subscribeForChanges() {
        this.newsStorageService.$filteredList.subscribe(res => {
            this.newsArray = res;
        });
        this.newsStorageService.$list.subscribe(res => {
            this.newsArray = res;
        });
        this.newsStorageService.$sourcesList.subscribe(res => {
            this.sources = res;
        });
    }
    openAddNewsDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '650px';
        dialogConfig.width = '500px';
        dialogConfig.position = {
            top: '50px',
            left: '34.2%'
        };
        this.dialog.open(_shared_dialogs_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_4__["AddArticleComponent"], dialogConfig);
    }
    sourceSelected(value) {
        if (value !== 'sourceAll') {
            this.newsStorageService.filterBySource(value);
            this.sourceName = value;
        }
        else {
            this.newsStorageService.setAllSourcesList();
            this.sourceName = 'My news';
        }
    }
};
NewsComponent.ctorParameters = () => [
    { type: _shared_services_news_storage_service__WEBPACK_IMPORTED_MODULE_2__["NewsStorageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/modules/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/modules/news/news.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.module.ts ***!
  \*********************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/modules/news/news-routing.module.ts");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], NewsModule);



/***/ })

}]);
//# sourceMappingURL=modules-news-news-module-es2015.js.map