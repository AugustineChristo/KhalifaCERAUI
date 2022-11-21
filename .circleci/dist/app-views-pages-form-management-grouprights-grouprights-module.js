(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-grouprights-grouprights-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n        <div class=\"kt-form__section kt-form__section--first\">\r\n\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-4 row form-group\">\r\n                    <label style=\"font-size:10px;color:gray;font-family:Roboto,Helvetica Neue,sans-serif;\">User Group</label> \r\n                   <mat-form-field class=\"mat-form-field-fluid\" >\r\n                        <mat-select formControlName=\"name\" >\r\n                           <mat-option *ngFor=\"let data of filteredUserGroup\"\r\n                                value=\"{{ data.name }}\">{{ data.name }}\r\n                           </mat-option>\r\n                       </mat-select>\r\n                    </mat-form-field>\r\n               </div>\r\n\r\n    <!--             <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"User Name\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"name\" />\r\n                    </mat-form-field>\r\n                </div>\r\n      \r\n                <div *ngIf=\"f.name.invalid && (f.name.dirty || f.name.touched)\"class=\"alert alert-danger\">\r\n                    <div *ngIf=\"f.name.errors.required\">  User Name is required.  </div>\r\n                    <div *ngIf=\"f.name.errors.minlength\">  User Name must be at least 4 characters long.  </div>\r\n                </div> \r\n\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Menu ID\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"templateid\" />\r\n                    </mat-form-field>\r\n                </div> \r\n            \r\n            -->\r\n\r\n<!--                 <div class=\"col-md-4 row form-group\">\r\n                    <label style=\"font-size:10px;color:gray;font-family:Roboto,Helvetica Neue,sans-serif;\">Menu</label> \r\n                   <mat-form-field  class=\"example-full-width\" >\r\n                        <mat-select formControlName=\"templateid\" >\r\n                           <mat-option *ngFor=\"let data of filteredMenu\"\r\n                                value=\"{{ data.TemplateID }}\">{{ data.Name }}\r\n                           </mat-option>\r\n                       </mat-select>\r\n                    </mat-form-field>\r\n               </div>\r\n -->\r\n               <div class=\"col-md-4 row form-group\">\r\n                <mat-form-field  class=\"mat-form-field-fluid\">\r\n                    <input matInput placeholder=\"Menu ID\" formControlName=\"templateid\" \r\n                    [matAutocomplete]=\"manuf\">\r\n                    <mat-autocomplete #manuf=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let menus of filteredMenus | async\" [value]=\"menus\">\r\n                            {{ menus }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n      <!--         \r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Section ID\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"sectionid\" />\r\n                    </mat-form-field>\r\n                </div>\r\n-->\r\n\r\n                <div class=\"col-md-4 row form-group\">\r\n                    \r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Sections\" formControlName=\"sectionid\" \r\n                        [matAutocomplete]=\"manufa\">\r\n                        <mat-autocomplete #manufa=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let sections of filteredSections | async\" [value]=\"sections\">\r\n                                {{ sections }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n          <!--   <div class=\"form-group  row\">\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   \r\n                    formControlName=\"AddForm\">Add</mat-checkbox>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   \r\n                    formControlName=\"EditForm\">Edit</mat-checkbox>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   \r\n                    formControlName=\"DeleteForm\">Delete</mat-checkbox>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   \r\n                    formControlName=\"ViewForm\">View</mat-checkbox>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   \r\n                    formControlName=\"ReportForm\">Report</mat-checkbox>\r\n                </div>\r\n\r\n            </div> -->\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                    <div>New Form:</div>\r\n                    <mat-radio-group formControlName=\"AddForm\" class=\"example-radio-group\">\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"0\">No</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                    <div>Edit Form:</div>\r\n                    <mat-radio-group formControlName=\"EditForm\" class=\"example-radio-group\">\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"0\">No</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                    <div>Delete Form:</div>\r\n                    <mat-radio-group formControlName=\"DeleteForm\" class=\"example-radio-group\">\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"0\">No</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                    <div>View Form:</div>\r\n                    <mat-radio-group formControlName=\"ViewForm\" class=\"example-radio-group\">\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"0\">No</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                    <div>Report Form:</div>\r\n                    <mat-radio-group formControlName=\"ReportForm\" class=\"example-radio-group\">\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"1\">Yes</mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button\" value=\"0\">No</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n\r\n            </div>\r\n      \r\n\r\n           \r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\r\n\t<kt-portlet-header [title]=\"'Group Rights'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<a  [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\r\n\t\t\t\tmatTooltip=\"Back to the forms list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\r\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\r\n\t\t\t\t<i class=\"la la-save\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\r\n\t\t\t</a>\r\n\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n       \r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n\t\t\t<mat-tab>\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\r\n\t\t\t\t\tGroup Rights\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<kt-grouprights-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appgrouprightsPersonalDetails></kt-grouprights-personal-details>\r\n            </mat-tab>\r\n\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<kt-portlet id=\"print_form\">\r\n\r\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\r\n\t\t<div class=\"kt-form kt-margin-b-30\">\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<kt-portlet-header [title]=\"'Group Rights'\" [class]=\"'kt-portlet__head--lg'\" >\r\n\t\t\t\t</kt-portlet-header>\r\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\r\n\t\t\t\t<kt-grouprights-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appgrouprightsPersonalDetails></kt-grouprights-personal-details>\r\n\t\t\t\t</kt-portlet-body>\r\n\t\t\t</div>\r\n            \r\n\t\r\n\r\n\t\t\t\t\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Manage Group Rights'\" [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create Group Rights\">Add New</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form kt-margin-b-30\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\r\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\r\n\t\t\t\t\t\t\t<!--</mat-hint>-->\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\r\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\r\n\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\tmatSort\r\n\t\t\t#sort1=\"matSort\"\r\n\t\t\tmatSortActive=\"savedformID\"\r\n\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t>\r\n\t\t\t\t<div matColumnDef=\"id\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >S.No.</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"1\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"2\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Group Name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.name}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"3\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Menu ID</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.templateid}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"4\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Section ID</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.sectionid}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\r\n<!-- \t\t\t\t<div matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\r\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div matColumnDef=\"actions\">\r\n\t\t\t\t\t<div    *ngFor=\"let userrights of userRights\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div *ngIf=\"userrights.sectionid === 1 && userrights.usertype === 'Admin'; else elseBlock\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\r\n\t\t\t\t\t\t<button *ngIf=\"userrights.editform === 1\" (click)=\"editForm(form.SavedFormID)\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button color=\"warn\"  *ngIf=\"userrights.deleteform === 1\" (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-icon-button *ngIf=\"userrights.reportform === 1\" color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div #elseBlock *ngIf=\"userrights.usertype === 'User'\">\r\n\t\t\t\t<div matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\r\n\t\t\t\t\t\t<button *ngIf=\"userrights.editform === 1\" (click)=\"editForm(form.SavedFormID)\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button color=\"warn\"  *ngIf=\"userrights.deleteform === 1\" (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-icon-button *ngIf=\"userrights.reportform === 1\" color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\r\n\t\t\t\t\t\t   [pageSize]=\"10\"\r\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\r\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\r\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\r\n\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>");

/***/ }),

/***/ "./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: grouprightsPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouprightsPersonalDetailsComponent", function() { return grouprightsPersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");











var AVAILABLE_SECTIONS = _core_utils_countries__WEBPACK_IMPORTED_MODULE_10__["Sections"];

var AVAILABLE_MENUS = _core_utils_countries__WEBPACK_IMPORTED_MODULE_10__["Menus"];
var grouprightsPersonalDetailsComponent = /** @class */ (function () {
    function grouprightsPersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.cd = cd;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Group Rights";
        this.loading$ = true;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.isSampleSubmit = false;
        this.isFormSubmit = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__["mediaPath"];
        this.GroupName = '';
        this.TemplateID = 0;
        this.SectionID = 0;
    }
    grouprightsPersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.getMenu();
        this.getUserGroup();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedformID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 18).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
                _this.GroupName = res[0]["name"];
                _this.TemplateID = res[0]["templateid"];
                _this.SectionID = res[0]["sectionid"];
                /*      console.log(" Group Name :"+this.GroupName);
                     console.log(res); */
            });
        }
    };
    grouprightsPersonalDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedformID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            //"name": new FormControl({ value: '', disabled: this.disableInput }),
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            "templateid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            "sectionid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            "AddForm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EditForm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DeleteForm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ViewForm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ReportForm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredSections = this.form.controls["sectionid"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterSections(val != null && val != "" ? val.toString() : ''); }));
        this.filteredMenus = this.form.controls["templateid"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterMenus(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    grouprightsPersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(18, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    grouprightsPersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    grouprightsPersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(18, this.form.value["name"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    grouprightsPersonalDetailsComponent.prototype.onSubmit = function () {
        //   localStorage.removeItem('userRights');
        var _this = this;
        this.MandatoryFields = " ";
        if (!this.form.value["name"]) {
            this.MandatoryFields = this.MandatoryFields + "Name ,";
        }
        if (!this.form.value["templateid"]) {
            this.MandatoryFields = this.MandatoryFields + " Template ID ,";
        }
        if (!this.form.value["sectionis"]) {
            this.MandatoryFields = this.MandatoryFields + " Section ID ,";
        }
        if (this.form.invalid) {
            this._snackBar.open(this.MandatoryFields.slice(0, -1) + " Not Entered or Invalid", 'Ok', {
                duration: 5000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
            });
            return;
        }
        else {
            var savedformID = 0;
            if (this.formId === undefined) {
                savedformID = 0;
            }
            else {
                savedformID = this.formId;
                /* check duplicate begin */
                if (this.GroupName !== "") {
                    this._service.CheckDuplicateGroupRights(this.GroupName, this.TemplateID, this.SectionID, savedformID).subscribe(function (res) {
                        console.log("CheckDuplicateGroupRights" + _this.GroupName);
                        if (res[0]["name"] != "") {
                            var result = res[0]["name"];
                            if (result.includes(_this.GroupName)) {
                                _this.splashService.splashScreen({ isLoading: false, message: "" });
                                _this._snackBar.open("Group Rights for " + _this.GroupName + "  in Template ID " + _this.TemplateID + " and Section ID " + _this.SectionID + "Already Exists", 'Ok', {
                                    duration: 5000,
                                    verticalPosition: 'bottom',
                                    horizontalPosition: 'center'
                                });
                            }
                        }
                        return;
                    });
                }
            }
            /* check duplciate end */
            if (!this.saveFormId) {
                this.createSampleId();
            }
            else {
                this.form.patchValue({ "savedformID": this.form.value["savedformID"] || this.saveFormId });
                var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedformID", this.formId);
                if (this.formId) {
                    this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                    this._service.getFormAttributeValues(this.formId).subscribe(function (res) {
                        if (res) {
                            for (var i = 0; i < data_1.length; i++) {
                                for (var j = 0; j < res.length; j++) {
                                    if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                        data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                    }
                                }
                            }
                            _this._service.createSample3(data_1, true).subscribe(function (res) {
                                if (res) {
                                    _this.splashService.splashScreen({ isLoading: false, message: "" });
                                    _this._snackBar.open("Data has been updated successfully!", 'Ok', {
                                        duration: 5000,
                                        verticalPosition: 'bottom',
                                        horizontalPosition: 'center'
                                    });
                                }
                            });
                        }
                    });
                }
                else /* Create start */ {
                    this.splashService.splashScreen({ isLoading: true, message: "INSERTING" });
                    this._service.createSample3(data_1, true).subscribe(function (res) {
                        if (res) {
                            _this.splashService.splashScreen({ isLoading: false, message: "" });
                            _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                                duration: 5000,
                                verticalPosition: 'bottom',
                                horizontalPosition: 'center'
                            });
                        }
                    });
                    this.saveFormId = 0;
                    this.form.value["savedformID"] = 0;
                } /* Create end */
            } /* update&create end */
            /*  }  checkduplciate  end */
        }
        this.getTabRights();
    };
    grouprightsPersonalDetailsComponent.prototype.getTabRights = function () {
        var _this = this;
        this.userRights = [];
        //console.log('test',this.userRights)
        this.loading$ = true;
        this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
        this.username = localStorage.getItem('username');
        this._service.getTabRights(this.username, 14, 1).subscribe(function (res) {
            var propertyValues = Object.values(res);
            var userRights = JSON.stringify(propertyValues);
            // //console.log('menus',menus);
            _this.loading$ = false;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            // this.cdr.detectChanges();
            // this.userRights = res[0].sectionid;
            localStorage.setItem("userRights", userRights);
            console.log('rights', localStorage.getItem('userRights'));
            //console.log('userRights',userRights)
            //this.searchInput.nativeElement.focus();
        });
    };
    grouprightsPersonalDetailsComponent.prototype.filterSections = function (val) {
        return AVAILABLE_SECTIONS.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    grouprightsPersonalDetailsComponent.prototype.filterMenus = function (val) {
        return AVAILABLE_MENUS.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    grouprightsPersonalDetailsComponent.prototype.getMenu = function () {
        var _this = this;
        this._service.getTemplates().subscribe(function (res) {
            _this.filteredMenu = res;
        });
    };
    grouprightsPersonalDetailsComponent.prototype.getUserGroup = function () {
        var _this = this;
        this._service.getQuestionnaire(0, 17).subscribe(function (res) {
            _this.filteredUserGroup = res;
        });
    };
    Object.defineProperty(grouprightsPersonalDetailsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    grouprightsPersonalDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], grouprightsPersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], grouprightsPersonalDetailsComponent.prototype, "disableInput", void 0);
    grouprightsPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-grouprights-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], grouprightsPersonalDetailsComponent);
    return grouprightsPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: grouprightsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouprightsEditComponent", function() { return grouprightsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _components_grouprights_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/grouprights/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.ts");

// Angular





var grouprightsEditComponent = /** @class */ (function () {
    function grouprightsEditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    grouprightsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Group Rights');
    };
    grouprightsEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    grouprightsEditComponent.prototype.reset = function () {
    };
    grouprightsEditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appgrouprightsPersonalDetails.onSubmit();
        }
    };
    grouprightsEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appgrouprightsPersonalDetails', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_grouprights_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["grouprightsPersonalDetailsComponent"])
    ], grouprightsEditComponent.prototype, "appgrouprightsPersonalDetails", void 0);
    grouprightsEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-grouprights-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./grouprights-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], grouprightsEditComponent);
    return grouprightsEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: grouprightsPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouprightsPrintComponent", function() { return grouprightsPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.ts");






var grouprightsPrintComponent = /** @class */ (function () {
    function grouprightsPrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    grouprightsPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.initTitle();
    };
    grouprightsPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    grouprightsPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Group Rights');
        this.subheaderService.showPrintButton(true);
    };
    grouprightsPrintComponent.prototype.reset = function () {
    };
    grouprightsPrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appgrouprightsPersonalDetails.onSubmit();
        }
    };
    grouprightsPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appgrouprightsPersonalDetails', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["grouprightsPersonalDetailsComponent"])
    ], grouprightsPrintComponent.prototype, "appgrouprightsPersonalDetails", void 0);
    grouprightsPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-grouprights-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./grouprights-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], grouprightsPrintComponent);
    return grouprightsPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/grouprights/grouprights.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/form-management/grouprights/grouprights.module.ts ***!
  \*******************************************************************************/
/*! exports provided: grouprightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouprightsModule", function() { return grouprightsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_grouprights_grouprights_grouprights_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/grouprights/grouprights/grouprights.component */ "./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.ts");
/* harmony import */ var _components_grouprights_grouprights_edit_grouprights_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/grouprights/grouprights-edit/grouprights-edit.component */ "./src/app/views/pages/form-management/grouprights/grouprights-edit/grouprights-edit.component.ts");
/* harmony import */ var _components_grouprights_grouprights_print_grouprights_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/grouprights/grouprights-print/grouprights-print.component */ "./src/app/views/pages/form-management/grouprights/grouprights-print/grouprights-print.component.ts");
/* harmony import */ var _components_grouprights_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/grouprights/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/grouprights/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");












//import { HsaEditComponent } from './hsa-edit/hsa-edit.component';
var routes = [
    {
        path: '',
        component: _components_grouprights_grouprights_grouprights_component__WEBPACK_IMPORTED_MODULE_7__["grouprightsComponent"],
    },
    {
        path: 'add',
        component: _components_grouprights_grouprights_edit_grouprights_edit_component__WEBPACK_IMPORTED_MODULE_8__["grouprightsEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_grouprights_grouprights_edit_grouprights_edit_component__WEBPACK_IMPORTED_MODULE_8__["grouprightsEditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_grouprights_grouprights_print_grouprights_print_component__WEBPACK_IMPORTED_MODULE_9__["grouprightsPrintComponent"],
    }
];
var grouprightsModule = /** @class */ (function () {
    function grouprightsModule() {
    }
    grouprightsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_grouprights_grouprights_grouprights_component__WEBPACK_IMPORTED_MODULE_7__["grouprightsComponent"],
                _components_grouprights_grouprights_edit_grouprights_edit_component__WEBPACK_IMPORTED_MODULE_8__["grouprightsEditComponent"],
                _components_grouprights_grouprights_print_grouprights_print_component__WEBPACK_IMPORTED_MODULE_9__["grouprightsPrintComponent"],
                _components_grouprights_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["grouprightsPersonalDetailsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            ]
        })
    ], grouprightsModule);
    return grouprightsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: grouprightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grouprightsComponent", function() { return grouprightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var grouprightsComponent = /** @class */ (function () {
    function grouprightsComponent(activatedRoute, _vService, _snackBar, dialog, router, subheaderService, splashService, cdr) {
        this.activatedRoute = activatedRoute;
        this._vService = _vService;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.router = router;
        this.subheaderService = subheaderService;
        this.splashService = splashService;
        this.cdr = cdr;
        this.loading$ = true;
        this.dataSource = [];
        this.displayedColumns = ['id', '1', '2', '3', '4', 'actions'];
        this.lastQuery = {
            filter: '',
            sortOrder: 2,
            sortField: 1,
            pageNumber: 0,
            pageSize: 10,
            templateId: 18,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    grouprightsComponent.prototype.fetchList = function () {
        var _this = this;
        this.dataSource = [];
        this.loading$ = true;
        this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
        this._vService.getList(this.lastQuery).subscribe(function (res) {
            _this.dataSource = res;
            _this.loading$ = false;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this.cdr.detectChanges();
            //this.searchInput.nativeElement.focus();
        });
    };
    grouprightsComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(18, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    grouprightsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    grouprightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRights = JSON.parse(localStorage.getItem('userRights'));
        this.sort.sortChange.subscribe(function (data) {
            _this.lastQuery.sortField = data.active == "1" ? 1 : 0;
            _this.lastQuery.sortOrder = data.direction == "asc" ? 0 : 1;
            _this.fetchList();
        });
        var searchSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), // The form can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), // This operator will eliminate duplicate values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            //this.lastQuery.filter
            _this.lastQuery.filter = _this.searchInput.nativeElement.value;
            _this.lastQuery.pageNumber = 0;
            _this.getTotalCount();
            _this.fetchList();
        }))
            .subscribe();
        this.getTotalCount();
        this.fetchList();
        this.subheaderService.setTitle('Group Rights');
        this.subheaderService.showPrintButton(false);
    };
    grouprightsComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialog"], {
            data: {
                message: 'Are you sure want to delete?',
                buttonText: {
                    ok: 'Yes',
                    cancel: 'No'
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.deleteForm(id);
                var a = document.createElement('a');
                a.click();
                a.remove();
            }
        });
    };
    grouprightsComponent.prototype.deleteForm = function (id) {
        var _this = this;
        if (this.dataSource.length) {
            var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationDialog"], {
                data: {
                    message: 'Are you sure want to delete?',
                    buttonText: {
                        ok: 'Yes',
                        cancel: 'No'
                    }
                }
            });
            //   const snack = this._snackBar.open('Snack bar open before dialog');
            dialogRef.afterClosed().subscribe(function (confirmed) {
                if (confirmed) {
                    _this.splashService.splashScreen({ isLoading: true, message: "Deleting" });
                    _this._vService.deleteForm(id).subscribe(function (res) {
                        if (res) {
                            // this.isSelected = !this.isSelected;
                            // this.fetchList();
                            // this.createForm();
                            _this.getTotalCount();
                            _this.fetchList();
                            _this.splashService.splashScreen({ isLoading: false, message: "" });
                            _this._snackBar.open("Data has been deleted successfully!", 'Ok', {
                                duration: 5000,
                                verticalPosition: 'bottom',
                                horizontalPosition: 'center'
                            });
                        }
                    });
                    var a = document.createElement('a');
                    a.click();
                    a.remove();
                }
            });
        }
    };
    grouprightsComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    grouprightsComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/grouprights/edit', id], { relativeTo: this.activatedRoute });
    };
    grouprightsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], grouprightsComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], grouprightsComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], grouprightsComponent.prototype, "searchInput", void 0);
    grouprightsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-grouprights',
            template: __importDefault(__webpack_require__(/*! raw-loader!./grouprights.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/grouprights/grouprights/grouprights.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], grouprightsComponent);
    return grouprightsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-grouprights-grouprights-module.js.map