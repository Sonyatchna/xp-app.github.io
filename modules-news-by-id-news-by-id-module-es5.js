(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-by-id-news-by-id-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news-by-id/news-by-id.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news-by-id/news-by-id.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewsByIdNewsByIdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"first-header\">\n  <span>My news</span>\n</div>\n\n<div class=\"news-item\">\n  <div class=\"image-div\">\n    <img class=\"news-image\" src=\"{{news?.imageUrl}}\">\n  </div>\n\n  <div class=\"info-div\">\n    <div class=\"info-div-heading\">\n      <span>\n        {{news?.heading}}\n      </span>\n    </div>\n\n    <div class=\"info-div-content\">\n      <span>\n        {{news?.content}}\n      </span>\n    </div>\n\n    <div class=\"info-div-date\">\n      <span>\n        Date: {{news?.date}}\n      </span>\n    </div>\n\n    <div class=\"info-div-author\">\n      <span>\n        Author: {{news?.author}}\n      </span>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/news-by-id/news-by-id-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/news-by-id/news-by-id-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: NewsByIdRoutingModule */

  /***/
  function srcAppModulesNewsByIdNewsByIdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdRoutingModule", function () {
      return NewsByIdRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _news_by_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-by-id.component */
    "./src/app/modules/news-by-id/news-by-id.component.ts");

    const routes = [{
      path: '',
      component: _news_by_id_component__WEBPACK_IMPORTED_MODULE_3__["NewsByIdComponent"]
    }];
    let NewsByIdRoutingModule = class NewsByIdRoutingModule {};
    NewsByIdRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsByIdRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/news-by-id/news-by-id.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modules/news-by-id/news-by-id.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewsByIdNewsByIdComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".first-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 80px;\n  background: #587599;\n}\n.first-header span {\n  font-size: 36px;\n  font-weight: bold;\n  color: #ffffff;\n}\n.news-item {\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 65%;\n  height: 340px;\n  margin: 20px auto;\n  padding-top: 15px;\n  border: #8eaacc 1px solid;\n}\n.news-item .image-div {\n  display: -webkit-box;\n  display: flex;\n  box-sizing: border-box;\n  height: 210px;\n  width: 210px;\n  margin: 0 15px;\n}\n.news-item .image-div .news-image {\n  height: 210px;\n  width: 210px;\n  border: #8eaacc 1px solid;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.news-item .info-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 310px;\n  width: 100%;\n  margin: 0 15px;\n}\n.news-item .info-div .info-div-heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 5px;\n  width: 100%;\n  font-size: x-large;\n  font-weight: bold;\n  color: #587599;\n}\n.news-item .info-div .info-div-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 5px;\n  width: 100%;\n  font-size: 16px;\n  color: #587599;\n}\n.news-item .info-div .info-div-date, .news-item .info-div .info-div-author {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 5px;\n  font-size: 16px;\n  color: #587599;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXdzLWJ5LWlkL0Y6XFzQodC+0YTRltC50LrQsFxc0J3QoyDQm9CfXFwzINC60YPRgNGBXFw2INGB0LXQvNC10YHRgtGAXFzQldC60YHRgtGA0LXQvNCw0LvRjNC90LUg0L/RgNC+0LPRgNCw0LzRg9Cy0LDQvdC90Y9cXEFuZ3VsYXJBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXG5ld3MtYnktaWRcXG5ld3MtYnktaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmV3cy1ieS1pZC9uZXdzLWJ5LWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjtBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBTjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FESUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FES0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0hOO0FETUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25ld3MtYnktaWQvbmV3cy1ieS1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogIzU4NzU5OTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLm5ld3MtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogMzQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgYm9yZGVyOiAjOGVhYWNjIDFweCBzb2xpZDtcclxuXHJcbiAgLmltYWdlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuXHJcbiAgICAubmV3cy1pbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgYm9yZGVyOiAjOGVhYWNjIDFweCBzb2xpZDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5mby1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuXHJcbiAgICAuaW5mby1kaXYtaGVhZGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICM1ODc1OTk7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tZGl2LWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM1ODc1OTk7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tZGl2LWRhdGUsIC5pbmZvLWRpdi1hdXRob3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogIzU4NzU5OTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZpcnN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg3NTk5O1xufVxuLmZpcnN0LWhlYWRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5uZXdzLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMzQwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm9yZGVyOiAjOGVhYWNjIDFweCBzb2xpZDtcbn1cbi5uZXdzLWl0ZW0gLmltYWdlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMjEwcHg7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4ubmV3cy1pdGVtIC5pbWFnZS1kaXYgLm5ld3MtaW1hZ2Uge1xuICBoZWlnaHQ6IDIxMHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGJvcmRlcjogIzhlYWFjYyAxcHggc29saWQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm5ld3MtaXRlbSAuaW5mby1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMzEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5uZXdzLWl0ZW0gLmluZm8tZGl2IC5pbmZvLWRpdi1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzU4NzU5OTtcbn1cbi5uZXdzLWl0ZW0gLmluZm8tZGl2IC5pbmZvLWRpdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTg3NTk5O1xufVxuLm5ld3MtaXRlbSAuaW5mby1kaXYgLmluZm8tZGl2LWRhdGUsIC5uZXdzLWl0ZW0gLmluZm8tZGl2IC5pbmZvLWRpdi1hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU4NzU5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/news-by-id/news-by-id.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/news-by-id/news-by-id.component.ts ***!
    \************************************************************/

  /*! exports provided: NewsByIdComponent */

  /***/
  function srcAppModulesNewsByIdNewsByIdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdComponent", function () {
      return NewsByIdComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_news_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/news-storage.service */
    "./src/app/shared/services/news-storage.service.ts");

    let NewsByIdComponent = class NewsByIdComponent {
      constructor(newsStorageService, route) {
        this.newsStorageService = newsStorageService;
        this.route = route;
      }

      ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
          this.getNewsById(Number(params.id));
        });
      }

      ngOnDestroy() {
        this.routeSub.unsubscribe();
      }

      getNewsById(id) {
        this.news = this.newsStorageService.getNewsInfoById(id);
      }

    };

    NewsByIdComponent.ctorParameters = () => [{
      type: _shared_services_news_storage_service__WEBPACK_IMPORTED_MODULE_3__["NewsStorageService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    NewsByIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news-by-id',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news-by-id.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news-by-id/news-by-id.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news-by-id.component.scss */
      "./src/app/modules/news-by-id/news-by-id.component.scss")).default]
    })], NewsByIdComponent);
    /***/
  },

  /***/
  "./src/app/modules/news-by-id/news-by-id.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/news-by-id/news-by-id.module.ts ***!
    \*********************************************************/

  /*! exports provided: NewsByIdModule */

  /***/
  function srcAppModulesNewsByIdNewsByIdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdModule", function () {
      return NewsByIdModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-by-id-routing.module */
    "./src/app/modules/news-by-id/news-by-id-routing.module.ts");
    /* harmony import */


    var _news_by_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news-by-id.component */
    "./src/app/modules/news-by-id/news-by-id.component.ts");

    let NewsByIdModule = class NewsByIdModule {};
    NewsByIdModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_news_by_id_component__WEBPACK_IMPORTED_MODULE_4__["NewsByIdComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsByIdRoutingModule"]]
    })], NewsByIdModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-news-by-id-news-by-id-module-es5.js.map