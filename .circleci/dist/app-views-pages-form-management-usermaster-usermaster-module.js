(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-usermaster-usermaster-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n        <div class=\"kt-form__section kt-form__section--first\">\r\n\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"User Name\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"UserName\" />\r\n                    </mat-form-field>\r\n                </div>\r\n                <!--&& (UserName.dirty || UserName.touched)-->\r\n                <div *ngIf=\"UserName.invalid && (UserName.dirty || UserName.touched)\"class=\"alert alert-danger\">\r\n                    <div *ngIf=\"UserName.errors.required\">  User Name is required.  </div>\r\n                    <div *ngIf=\"UserName.errors.minlength\">  User Name must be at least 4 characters long.  </div>\r\n                </div>\r\n    \r\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Full Name\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"FullName\" />\r\n                        \r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-3 row form-group\">\r\n                     <label style=\"font-size:10px;color:gray;font-family:Roboto,Helvetica Neue,sans-serif;\">Role</label> \r\n                    <mat-form-field  class=\"example-full-width\" >\r\n                         <mat-select formControlName=\"Occupation\" >\r\n                            <mat-option *ngFor=\"let data of filteredRole\"\r\n                                 value=\"{{ data.name }}\">{{ data.name }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                     </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 row form-group\">\r\n                    <label style=\"font-size:10px;color:gray;font-family:Roboto,Helvetica Neue,sans-serif;\">Reporting To</label> \r\n                   <mat-form-field  class=\"example-full-width\" >\r\n                        <mat-select formControlName=\"ReportingTo\" >\r\n                           <mat-option *ngFor=\"let data of filteredReportingTo\"\r\n                                value=\"{{ data.UserName }}\">{{ data.UserName }}\r\n                           </mat-option>\r\n                       </mat-select>\r\n                    </mat-form-field>\r\n               </div>\r\n\r\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\r\n                    <div class=\"mat-form-field-fluid\">\r\n                    <label id=\"example-radio-group-label\">Department</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4 form-group\">\r\n        \r\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" \r\n                    formControlName=\"CompanyName\">\r\n                        <mat-radio-button matInput  value=\"BT-Full\">BT-Full</mat-radio-button>\r\n                        <mat-radio-button  matInput value=\"BT-Short\">BT-Short</mat-radio-button>\r\n                        <mat-radio-button  matInput value=\"CIRA\">CIRA</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n            </div>\r\n\r\n            <!---  -->\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Password\" autocomplete=\"off\"   type=\"password\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"Password\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Re-Enter Password\" autocomplete=\"off\"  type=\"password\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"ConfirmPassword\"  />\r\n                    </mat-form-field>\r\n                </div>\r\n                <div *ngIf=\"f.ConfirmPassword.touched && f.ConfirmPassword.invalid\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"f.ConfirmPassword.errors.required\">Password is required.</div>\r\n                    <div *ngIf=\"f.ConfirmPassword.errors.confirmedValidator\">Password and Confirm Password must be match.</div>\r\n                </div>\r\n\r\n            </div>\r\n            <!---  -->\r\n            <div class=\"form-group  row\">\r\n\r\n                <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Email\" autocomplete=\"off\" type=\"email\"\r\n                        maxlength=\"100\"\r\n                        formControlName=\"Email\" />\r\n                        <div *ngIf=\"Email.errors?.email\" class=\"alert alert-danger\"> Email not valid.</div> \r\n                    </mat-form-field>\r\n                       <!--  ngModel [email]=\"true\" -->\r\n                </div>\r\n          \r\n        \r\n                <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Phone No\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"PhoneNumber\" />\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <!---  -->\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Address\" autocomplete=\"off\" \r\n                        maxlength=\"200\"\r\n                        formControlName=\"Address\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"City\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"City\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"State\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"State\" />\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <!---  -->\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Postal Code\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"PostalCode\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"LinkedIn\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"linkedin\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Facebook\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"facebook\" />\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <!---  -->\r\n            <div class=\"form-group  row\">\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Twitter\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"twitter\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Instagram\" autocomplete=\"off\" \r\n                        maxlength=\"100\"\r\n                        formControlName=\"Instagram\" />\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\r\n              <!--       <mat-form-field class=\"mat-form-field-fluid\">\r\n                        <input matInput placeholder=\"Active\" autocomplete=\"off\" \r\n                        formControlName=\"IsActive\" />\r\n                    </mat-form-field> -->\r\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"IsActive\">Active</mat-checkbox>\r\n                </div>\r\n            </div>\r\n\r\n\r\n           \r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\r\n\t<kt-portlet-header [title]=\"'User Master'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<a  [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\r\n\t\t\t\tmatTooltip=\"Back to the forms list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\r\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\r\n\t\t\t\t<i class=\"la la-save\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\r\n\t\t\t</a>\r\n\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n       \r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n\t\t\t<mat-tab>\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\r\n\t\t\t\t\tUser Master\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<kt-usermaster-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appusermasterPersonalDetails></kt-usermaster-personal-details>\r\n            </mat-tab>\r\n\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<kt-portlet id=\"print_form\">\r\n\r\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\r\n\t\t<div class=\"kt-form kt-margin-b-30\">\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<kt-portlet-header [title]=\"'User Master'\" [class]=\"'kt-portlet__head--lg'\" >\r\n\t\t\t\t</kt-portlet-header>\r\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\r\n\t\t\t\t<kt-usermaster-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appusermasterPersonalDetails></kt-usermaster-personal-details>\r\n\t\t\t\t</kt-portlet-body>\r\n\t\t\t</div>\r\n            \r\n\t\r\n\r\n\t\t\t\t\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Manage User Master'\" [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create User\">Add New</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form kt-margin-b-30\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\r\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\r\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\r\n\t\t\t\t\t\t\t<!--</mat-hint>-->\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\r\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\r\n\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\tmatSort\r\n\t\t\t#sort1=\"matSort\"\r\n\t\t\tmatSortActive=\"savedformID\"\r\n\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t>\r\n\t\t\t\t<div matColumnDef=\"id\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >S.No</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"1\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"2\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">User Name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.UserName}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"3\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Full Name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.FullName}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div matColumnDef=\"4\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Role</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.Occupation}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div>\r\n\t\r\n\t\r\n<!-- \t\t\t\t<div matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\r\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</div> \r\n -->\r\n <div matColumnDef=\"actions\">\r\n\t<div    *ngFor=\"let userrights of userRights\">\r\n\r\n\t<div *ngIf=\"userrights.sectionid === 1 && userrights.usertype === 'Admin'; else elseBlock\">\r\n\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t<mat-cell *matCellDef=\"let form\">\r\n\t\t<button *ngIf=\"userrights.editform === 1\" (click)=\"editForm(form.SavedFormID)\" mat-icon-button color=\"primary\" matTooltip=\"Edit User Master\">\r\n\t\t\t<mat-icon>create</mat-icon>\r\n\t\t</button>&nbsp;\r\n\t\t<button color=\"warn\"  *ngIf=\"userrights.deleteform === 1\" (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete User Master\">\r\n\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t</button>&nbsp;\r\n\t\t<a mat-icon-button *ngIf=\"userrights.reportform === 1\" color=\"warn\" matTooltip=\"Print User Master\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t<mat-icon>print</mat-icon>\r\n\t\t</a>\r\n\t</mat-cell>\r\n</div>\r\n\r\n<div #elseBlock *ngIf=\"userrights.usertype === 'User'\">\r\n<div matColumnDef=\"actions\">\r\n\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \r\n\t<mat-cell *matCellDef=\"let form\">\r\n\t\t<button *ngIf=\"userrights.editform === 1\" (click)=\"editForm(form.SavedFormID)\" mat-icon-button color=\"primary\" matTooltip=\"Edit User Master\">\r\n\t\t\t<mat-icon>create</mat-icon>\r\n\t\t</button>&nbsp;\r\n\t\t<button color=\"warn\"  *ngIf=\"userrights.deleteform === 1\" (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete User Master\">\r\n\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t</button>&nbsp;\r\n\t\t<a mat-icon-button *ngIf=\"userrights.reportform === 1\" color=\"warn\" matTooltip=\"Print User Master\" routerLink=\"../print/{{form.SavedFormID}}\">\r\n\t\t\t<mat-icon>print</mat-icon>\r\n\t\t</a>\r\n\t</mat-cell>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\r\n\t\t\t\t\t\t   [pageSize]=\"10\"\r\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\r\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\r\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\r\n\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>");

/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: usermasterPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermasterPersonalDetailsComponent", function() { return usermasterPersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _confirmed_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../confirmed.validator */ "./src/app/views/pages/form-management/usermaster/confirmed.validator.ts");









var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__["Countries"];

// import custom validator to validate that password and confirm password fields match

var usermasterPersonalDetailsComponent = /** @class */ (function () {
    function usermasterPersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.cd = cd;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "User Master";
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
    }
    usermasterPersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.getRole();
        this.getReportingTo();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedformID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 19).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    usermasterPersonalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedformID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            //"UserName": new FormControl({value: '', disabled: this.disableInput}),
            "UserName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            "FullName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Occupation": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            //"Password": new FormControl({value: '',  disabled: this.disableInput }),
            "Password": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            "ConfirmPassword": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            //  "Email": new FormControl({value: '', disabled: this.disableInput} ),
            "Email": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailPattern)
            ]),
            "CompanyName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PhoneNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PostalCode": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "linkedin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "facebook": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "twitter": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Instagram": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "IsActive": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ReportingTo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        }, {
            validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_10__["ConfirmedValidator"])('Password', 'ConfirmPassword')
        });
        this.getFormAttributeValues();
    };
    usermasterPersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(19, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    usermasterPersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    usermasterPersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(19, this.form.value["UserName"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    usermasterPersonalDetailsComponent.prototype.onSubmit = function () {
        /*     console.log("Email:"+ this.form.value["Email"]);
            console.log("UserName:"+ this.form.value["UserName"]);
            console.log("Password:"+ this.form.value["Password"]);
            console.log("ConfirmPassword:"+ this.form.value["ConfirmPassword"]); */
        var _this = this;
        this.MandatoryFields = " ";
        if (!this.form.value["UserName"]) {
            this.MandatoryFields = this.MandatoryFields + "UserName ";
        }
        if (!this.form.value["Email"]) {
            this.MandatoryFields = this.MandatoryFields + "Email ID ";
        }
        if (!this.form.value["Password"]) {
            this.MandatoryFields = this.MandatoryFields + "Password ";
        }
        if (!this.form.value["ConfirmPassword"]) {
            this.MandatoryFields = this.MandatoryFields + "Confirm Password ";
        }
        if (this.form.invalid) {
            this._snackBar.open(this.MandatoryFields + "  Not Entered  or Invalid", 'Ok', {
                duration: 5000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
            });
            return;
        }
        /*    var savedFormID = 0;
           if (this.form.invalid) {
             return;
         } */
        var savedformID = 0;
        if (this.formId === undefined) {
            savedformID = 0;
            /*  console.log("Saved Form ID"+savedformID);
             console.log("Form ID"+this.formId); */
        }
        else
            savedformID = this.formId;
        /*  if(!this.form.value["savedformID"] && !this.saveFormId ){  */
        if (!this.saveFormId) {
            /*   if(!this.form.value["savedformID"]  ){ */
            this.createSampleId();
            /*     console.log("Saved Form ID"+savedformID); */
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
            else {
                this.splashService.splashScreen({ isLoading: true, message: "INSERTING" });
                this._service.createSample3(data_1, true).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
                        /*  this.formId=0 */
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
                this.saveFormId = 0;
                this.form.value["savedformID"] = 0;
                /*  console.log("after Insert saveformid"+this.saveFormId);
                 console.log("after Insert savedformID"+this.form.value["savedformID"]); */
            }
        }
    };
    usermasterPersonalDetailsComponent.prototype.getRole = function () {
        var _this = this;
        this._service.getQuestionnaire(0, 17).subscribe(function (res) {
            _this.filteredRole = res;
        });
    };
    usermasterPersonalDetailsComponent.prototype.getReportingTo = function () {
        var _this = this;
        this._service.getQuestionnaire(0, 19).subscribe(function (res) {
            _this.filteredReportingTo = res;
        });
    };
    Object.defineProperty(usermasterPersonalDetailsComponent.prototype, "Email", {
        get: function () {
            return this.form.get('Email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(usermasterPersonalDetailsComponent.prototype, "UserName", {
        get: function () {
            return this.form.get('UserName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(usermasterPersonalDetailsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    usermasterPersonalDetailsComponent.ctorParameters = function () { return [
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
    ], usermasterPersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], usermasterPersonalDetailsComponent.prototype, "disableInput", void 0);
    usermasterPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-usermaster-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], usermasterPersonalDetailsComponent);
    return usermasterPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/confirmed.validator.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/confirmed.validator.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function() { return ConfirmedValidator; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function ConfirmedValidator(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: usermasterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermasterEditComponent", function() { return usermasterEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _components_usermaster_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/usermaster/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.ts");

// Angular





var usermasterEditComponent = /** @class */ (function () {
    function usermasterEditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    usermasterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('User Master');
    };
    usermasterEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    usermasterEditComponent.prototype.reset = function () {
    };
    usermasterEditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appusermasterPersonalDetails.onSubmit();
        }
    };
    usermasterEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appusermasterPersonalDetails', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_usermaster_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["usermasterPersonalDetailsComponent"])
    ], usermasterEditComponent.prototype, "appusermasterPersonalDetails", void 0);
    usermasterEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-usermaster-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./usermaster-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], usermasterEditComponent);
    return usermasterEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: usermasterPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermasterPrintComponent", function() { return usermasterPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.ts");






var usermasterPrintComponent = /** @class */ (function () {
    function usermasterPrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    usermasterPrintComponent.prototype.ngOnInit = function () {
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
    usermasterPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    usermasterPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('User Master');
        this.subheaderService.showPrintButton(true);
    };
    usermasterPrintComponent.prototype.reset = function () {
    };
    usermasterPrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appusermasterPersonalDetails.onSubmit();
        }
    };
    usermasterPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appusermasterPersonalDetails', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["usermasterPersonalDetailsComponent"])
    ], usermasterPrintComponent.prototype, "appusermasterPersonalDetails", void 0);
    usermasterPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-usermaster-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./usermaster-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], usermasterPrintComponent);
    return usermasterPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/usermaster.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/usermaster.module.ts ***!
  \*****************************************************************************/
/*! exports provided: usermasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermasterModule", function() { return usermasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_usermaster_usermaster_usermaster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/usermaster/usermaster/usermaster.component */ "./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.ts");
/* harmony import */ var _components_usermaster_usermaster_edit_usermaster_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/usermaster/usermaster-edit/usermaster-edit.component */ "./src/app/views/pages/form-management/usermaster/usermaster-edit/usermaster-edit.component.ts");
/* harmony import */ var _components_usermaster_usermaster_print_usermaster_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/usermaster/usermaster-print/usermaster-print.component */ "./src/app/views/pages/form-management/usermaster/usermaster-print/usermaster-print.component.ts");
/* harmony import */ var _components_usermaster_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/usermaster/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/usermaster/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");












//import { HsaEditComponent } from './hsa-edit/hsa-edit.component';
var routes = [
    {
        path: '',
        component: _components_usermaster_usermaster_usermaster_component__WEBPACK_IMPORTED_MODULE_7__["usermasterComponent"],
    },
    {
        path: 'add',
        component: _components_usermaster_usermaster_edit_usermaster_edit_component__WEBPACK_IMPORTED_MODULE_8__["usermasterEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_usermaster_usermaster_edit_usermaster_edit_component__WEBPACK_IMPORTED_MODULE_8__["usermasterEditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_usermaster_usermaster_print_usermaster_print_component__WEBPACK_IMPORTED_MODULE_9__["usermasterPrintComponent"],
    }
];
var usermasterModule = /** @class */ (function () {
    function usermasterModule() {
    }
    usermasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_usermaster_usermaster_usermaster_component__WEBPACK_IMPORTED_MODULE_7__["usermasterComponent"],
                _components_usermaster_usermaster_edit_usermaster_edit_component__WEBPACK_IMPORTED_MODULE_8__["usermasterEditComponent"],
                _components_usermaster_usermaster_print_usermaster_print_component__WEBPACK_IMPORTED_MODULE_9__["usermasterPrintComponent"],
                _components_usermaster_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["usermasterPersonalDetailsComponent"],
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
    ], usermasterModule);
    return usermasterModule;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: usermasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usermasterComponent", function() { return usermasterComponent; });
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






var usermasterComponent = /** @class */ (function () {
    function usermasterComponent(activatedRoute, _vService, _snackBar, dialog, router, subheaderService, splashService, cdr) {
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
            templateId: 19,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    usermasterComponent.prototype.fetchList = function () {
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
    usermasterComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(19, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    usermasterComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    usermasterComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('User Master');
        this.subheaderService.showPrintButton(false);
    };
    usermasterComponent.prototype.openDialog = function (id) {
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
    usermasterComponent.prototype.deleteForm = function (id) {
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
    usermasterComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    usermasterComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/usermaster/edit', id], { relativeTo: this.activatedRoute });
    };
    usermasterComponent.ctorParameters = function () { return [
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
    ], usermasterComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], usermasterComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], usermasterComponent.prototype, "searchInput", void 0);
    usermasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-usermaster',
            template: __importDefault(__webpack_require__(/*! raw-loader!./usermaster.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/usermaster/usermaster/usermaster.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], usermasterComponent);
    return usermasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-usermaster-usermaster-module.js.map