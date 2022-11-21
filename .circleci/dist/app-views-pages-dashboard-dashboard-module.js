(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div *ngFor=\"let data of data\" class=\"col-md-6  form-group\">\n\t\t<div class=\"col-md-12 padding-lr-zero bg-white \"  [style.height]=\"!data.toggle ? '100%' : 'auto'\" >\n\t\t<div class=\"header\">\n\t\t\t<div class=\"col-md-12 row\">\n\t\t\t\t<div class=\"col-md-8 my-auto\">\n\t\t\t\t\t<h6 class=\" my-auto\">{{data.name}}</h6>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4 text-right\">\n\t\t\t\t\t<a style=\"margin-top: 15px\">\n\t\t\t\t\t\t<i (click)=\"data.toggle = !data.toggle\" style=\"line-height: 1.3;font-size: 25px !important;cursor: pointer;\" class=\"material-icons\">\n\t\t\t\t\t\t{{data.toggle ?\t'keyboard_arrow_down' : 'keyboard_arrow_up' }}\n\t\t\t\t\t\t</i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<table style=\"width:100%\"   [hidden]=\"data.toggle\" mat-table [dataSource]=\"data.data\" class=\"mat-elevation-z8\">\n\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> S.No </th>\n\t\t\t\t<td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\n\t\t\t</ng-container>\n\t\t\t<ng-container matColumnDef=\"1\">\n\t\t\t\t<th class=\"text-center\" mat-header-cell *matHeaderCellDef>Form ID </th>\n\t\t\t\t<td class=\"text-center\" mat-cell *matCellDef=\"let element\"> \n\t\t\t\t\t<a  matTooltip=\"Edit form\"  routerLink=\"{{'/form-management/'+data.link+'/edit/'+element.SavedFormID}}\">\n\t\t\t\t\t\t{{element.SavedFormID}}\n\t\t\t\t\t</a> </td>\n\t\t\t</ng-container>\n\t\t\t<ng-container matColumnDef=\"2\">\n\t\t\t\t<th class=\"text-center\"  mat-header-cell *matHeaderCellDef> Name </th>\n\t\t\t\t<td class=\"text-center\" mat-cell *matCellDef=\"let element\">\n\t\t\t\t\t\n\t\t\t\t\t\t{{element.TemplateID === 14?element.per_firstname+\" \"+element.per_middlename+\" \"+element.per_lastname:element.name}}\n\t\t\t\t\t\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t<th class=\"text-right\"  mat-header-cell *matHeaderCellDef> Action </th>\n\t\t\t\t<td class=\"text-right\"  mat-cell *matCellDef=\"let element\">\n\n\t\t\t\t\t\t<a class=\"mat-icon-button mat-button-base mat-primary\" matTooltip=\"Edit form\"  routerLink=\"{{'/form-management/'+data.link+'/edit/'+element.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a class=\"mat-icon-button mat-button-base mat-warn\" matTooltip=\"Print form\" routerLink=\"{{'/form-management/'+data.link+'/print/'+element.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t</table>\n\t\t\t<a [hidden]=\"data.toggle\" routerLink=\"{{'/form-management/'+data.link+'/add'}}\" class=\"fab-btn\" matTooltip=\"Add Form\"><i class=\"material-icons\" >add</i></a>\n\t\t</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n\ntr.mat-header-row {\n  height: 48px;\n}\n\n.header {\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\ntable {\n  box-shadow: none;\n}\n\n.bg-white {\n  background-color: #fff;\n  height: 100%;\n}\n\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n  color: #fd397a;\n}\n\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n  color: #5d78ff;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.add-new-btn {\n  box-shadow: none;\n  border: none;\n  min-width: 55px;\n  line-height: 33px;\n  padding: 0 16px;\n  border-radius: 4px;\n}\n\n.fab-btn {\n  color: #fff;\n  right: 97px;\n  bottom: 8px;\n  left: auto;\n  position: absolute;\n  background-color: #5d78ff;\n  box-shadow: none;\n  border: none;\n  padding: 10px;\n  border-radius: 40px;\n  width: 40px;\n  height: 38px;\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n}\n\n.fab-btn:hover {\n  transform: scale(1.1);\n}\n\n.padding-lr-zero {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0M6XFxKYW5lXFxQcm9qZWN0c1xcSmFuZVxcS2hhbGlmYUNFUkEvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDQyxhQUFBO0FDREg7O0FET0E7RUFDQyxZQUFBO0FDSkQ7O0FET0E7RUFFQyxhQUFBO0VBQ0EsNENBQUE7QUNMRDs7QURRQTtFQUNDLGdCQUFBO0FDTEQ7O0FEUUE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7QUNMRDs7QURRQTtFQUNDLGNBQUE7QUNMRDs7QURRQTtFQUNDLGNBQUE7QUNMRDs7QURRQTtFQUNDLGtCQUFBO0FDTEQ7O0FET0E7RUFDQyxpQkFBQTtBQ0pEOztBRE9BO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSkQ7O0FET0E7RUFDQyxXQUFBO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDSCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0pEOztBRE9BO0VBQWlCLHFCQUFBO0FDSGpCOztBREtBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FDRkQiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQ6Om5nLWRlZXAge1xuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cbn1cblxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG5cdGhlaWdodDogNDhweDtcbn1cblxuLmhlYWRlcntcblxuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xufVxuXG50YWJsZXtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJnLXdoaXRle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIHtcblx0Y29sb3I6ICNmZDM5N2E7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcblx0Y29sb3I6ICM1ZDc4ZmY7XG59XG5cbi50ZXh0LWNlbnRlcntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtcmlnaHR7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWRkLW5ldy1idG57XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0bWluLXdpZHRoOiA1NXB4O1xuXHRsaW5lLWhlaWdodDogMzNweDtcblx0cGFkZGluZzogMCAxNnB4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5mYWItYnRue1xuXHRjb2xvcjogI2ZmZjtcbiAgICByaWdodDogOTdweDtcbiAgICBib3R0b206IDhweDtcblx0bGVmdDogYXV0bztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ3OGZmO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDM4cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZhYi1idG46aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cblxuLnBhZGRpbmctbHItemVyb3tcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5cbiIsIjpob3N0IDo6bmctZGVlcCBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxudGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmZDM5N2E7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICM1ZDc4ZmY7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFkZC1uZXctYnRuIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmZhYi1idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgcmlnaHQ6IDk3cHg7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDc4ZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZhYi1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5wYWRkaW5nLWxyLXplcm8ge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(subheaderService, _vService, cdr, activatedRoute, router, splashService) {
        this.subheaderService = subheaderService;
        this._vService = _vService;
        this.cdr = cdr;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.splashService = splashService;
        this.loading = false;
        this.userRights = [];
        this.loading$ = true;
        this.lastQuery = {
            filter: '',
            sortOrder: 2,
            sortField: 1,
            pageNumber: 0,
            pageSize: 10,
            templateId: 1,
            totalRecords: 0
        };
        this.currentIndex = 0;
        this.data = [];
        this.subscriptions = [];
        this.tempName = [
        //  {name : "Metabolic Disorder" , tempId : 1, link : 'metabolic-disorder'},
        //  {name : "Substance Dependence" , tempId : 2, link : 'substance-dependence'},
        //  {name : "Vitamin-D" , tempId : 4, link : 'vitamin-d'},
        //  {name : "1000 Arab Genome" , tempId : 5, link : '1000-arab-genome'},
        //  {name : "Obesity" , tempId : 6, link : 'obesity'},
        //  {name : "Osteoporosis" , tempId : 7, link : 'osteoporosis'},
        //  {name : "T1D" , tempId : 8, link : 't1d'},
        //  {name : "Emirates Family Registry" , tempId : 9, link : 'new-form'},
        //  {name : "Precision Medicine" , tempId : 10, link : 'hsa'},
        //  {name : "COVID-19" , tempId : 11, link : 'covid19'}
        ];
        this.displayedColumns = ['id', '1', '2', 'actions'];
        // this.unsubscribe = new Subject();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.subheaderService.setTitle('Dashboard');
        this.subheaderService.showPrintButton(false);
        this.triggerList();
        this.getTabRights();
    };
    DashboardComponent.prototype.getTabRights = function () {
        var _this = this;
        this.userRights = [];
        localStorage.removeItem('userRights');
        //console.log('test',this.userRights)
        this.loading$ = true;
        this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
        this.username = localStorage.getItem('username');
        this._vService.getTabRights(this.username, 14, 1).subscribe(function (res) {
            var propertyValues = Object.values(res);
            var userRights = JSON.stringify(propertyValues);
            // //console.log('menus',menus);
            _this.loading$ = false;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this.cdr.detectChanges();
            // this.userRights = res[0].sectionid;
            localStorage.setItem("userRights", userRights);
            //console.log('userRights',userRights)
            //this.searchInput.nativeElement.focus();
        });
    };
    DashboardComponent.prototype.triggerList = function () {
        var _this = this;
        this.loading = true;
        var data = [];
        data["username"] = localStorage.getItem('username');
        this.subscriptions.push(this._vService.getTemplatesName(data).subscribe(function (results) {
            Promise.resolve(null).then(function () {
                _this.tempName = results;
                //console.log('listitime',this.tempName);
                if (_this.currentIndex < _this.tempName.length) {
                    _this.lastQuery.templateId = _this.tempName[_this.currentIndex].Templateid;
                    _this.getList();
                    _this.cdr.detectChanges();
                }
                else {
                    _this.loading = false;
                    _this.cdr.detectChanges();
                }
                // this.filteredNationality.next(this.listtemplates.slice());
                // this.cdr.detectChanges();
            });
        }));
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // this.unsubscribe.next();
        // this.unsubscribe.complete();
        this.loading = false;
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    DashboardComponent.prototype.getList = function () {
        var _this = this;
        this.subscriptions.push(this._vService.getList(this.lastQuery).subscribe(function (res) {
            Promise.resolve(null).then(function () {
                console.log(res);
                if (res[0].result === "")
                    _this.data = [];
                else
                    _this.data.push({ data: res, toggle: false, link: _this.tempName[_this.currentIndex].Link, name: _this.tempName[_this.currentIndex].title });
                _this.currentIndex += 1;
                _this.triggerList();
            });
        }));
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_5__["SplashScreenService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"], _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_5__["SplashScreenService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");

// Angular



// Core Module




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
                    },
                ]),
            ],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map