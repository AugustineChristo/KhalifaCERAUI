(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-substance-dependence-substance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Fasting glucose level\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1\" formControlName=\"fasting_glucose_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp1.open()\" (focus)=\"dp1.open()\"  name=\"dp1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"fasting_glucose_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Random glucose level\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp2\" formControlName=\"random_glucose_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp2.open()\" (focus)=\"dp2.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"random_glucose_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Glucose tolerance (OGTT)\n                    *Fasting Blood Glucose\n                    *FBG after 2 hours\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp3\" formControlName=\"glucose_tolerance_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"glucose_tolerance_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    HbA1c (%)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp4\" formControlName=\"hba1c_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp4.open()\" (focus)=\"dp4.open()\"  name=\"dp4\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"hba1c_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Total cholesterol (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp5\" formControlName=\"total_cholesterol_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp5.open()\" (focus)=\"dp5.open()\"  name=\"dp5\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"total_cholesterol_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Triglyceride (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp6\" formControlName=\"Triglyceride_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp6.open()\" (focus)=\"dp6.open()\"  name=\"dp6\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Triglyceride_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    HDL (mg/dl)x\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp7\" formControlName=\"HDL_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp7.open()\" (focus)=\"dp7.open()\"  name=\"dp7\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"HDL_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    LDL (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp8\" formControlName=\"LDL_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp8.open()\" (focus)=\"dp8.open()\"  name=\"dp8\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"LDL_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Microalbumin (mg)\n                    Alubuminuria (mg/g)\n                    Albumin/creatinine ratio (mg/g)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp9\" formControlName=\"microablumin_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp9.open()\" (focus)=\"dp9.open()\"  name=\"dp9\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"microablumin_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Creatinine (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp10\" formControlName=\"creatinine_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp10.open()\" (focus)=\"dp10.open()\"  name=\"dp10\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"creatinine_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Urea\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp11\" formControlName=\"Urea_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp11.open()\" (focus)=\"dp11.open()\"  name=\"dp11\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Urea_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Vitamin D level (ng/ml)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp12\" formControlName=\"vitamind_coll_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp12.open()\" (focus)=\"dp12.open()\"  name=\"dp12\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"vitamind_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"number\" matInput placeholder=\"Body weight without shoes (kg)\" autocomplete=\"off\"   (ngModelChange)=\"calculateBodyMass()\"  formControlName=\"BodyWeight\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"number\"  matInput placeholder=\"Height without shoes (m)\"  autocomplete=\"off\"  (ngModelChange)=\"calculateBodyMass()\" formControlName=\"Height\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Body mass index (kg/m2)\"  autocomplete=\"off\"   formControlName=\"BodyMass\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Waist circumference (cm)\" autocomplete=\"off\"      formControlName=\"Waist\" />\n                </mat-form-field>\n            </div>\n            <div class=\"form-group  col-md-12 row\">\n                <h6>Blood pressure</h6>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Systolic\" formControlName=\"BloodPressureSystolic\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Diastolic\" formControlName=\"BloodPressureDiastolic\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Have you been on\n                </label>\n            </div>\n            <div class=\"col-md-4 form-group \">\n                <mat-form-field  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"substance\" >\n                        <mat-radio-button  value=\"single\">Single Substance</mat-radio-button>\n                        <mat-radio-button  value=\"poly_sub\">Poly-Substance</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <h6>Please, specify (indicate in case of poly-substance use)</h6>\n            </div>\n\n            <!--<div class=\"col-md-12 \">-->\n                <!--<div class=\"col-md-12 row\">-->\n                    <!--<div classs=\"col-md-2\"><label>Substance</label></div>-->\n                    <!--<div classs=\"col-md-2\"><label>Ever used Yes/ No</label></div>-->\n                    <!--<div classs=\"col-md-2\"><label>Specify</label></div>-->\n                    <!--<div class=\"col-md-6 row\">-->\n                        <!--<div class=\"col-md-1\"></div>-->\n                        <!--<div class=\"col-md-2\"> <label>First use age</label></div>-->\n                        <!--<div class=\"col-md-2\"><label>Total years of use</label></div>-->\n                        <!--<div class=\"col-md-2\"><label>Amount</label></div>-->\n                        <!--<div class=\"col-md-2\"><label>Frequency<sup>A</sup></label></div>-->\n                        <!--<div class=\"col-md-2\"><label>Method of administration<sup>B</sup></label></div>-->\n                        <!--<div class=\"col-md-1\"></div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n\n            <div class=\"col-md-12  \">\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6 \"><label>Methadone/Physeptone prescribed,non-prescribed</label></div>\n                    <div class=\"col-md-6 \">\n                        <mat-radio-group formControlName=\"medhadone_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div class=\"col-md-12 row\" [hidden]=\"form.get('medhadone_used').value != 'yes'\">\n                    <div class=\"col-md-12 form-group row\">\n                        <div class=\"col-md-2\">\n                            <mat-checkbox   formControlName=\"methadone_symoron\">Symoron</mat-checkbox>\n                        </div>\n                        <ng-container  *ngIf=\"form.get('methadone_symoron').value || form.get('methadone_symoron').value == 'true'\">\n                            <div class=\"col-md-2\">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_symoron_first\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_symoron_total\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_symoron_amn\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_symoron_freq\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_symoron_admin\" />\n                                </mat-form-field>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div class=\"col-md-12 form-group row\">\n                        <div class=\"col-md-2 my-auto\">\n                            <mat-checkbox   formControlName=\"methadone_dolophine\">Dolophine</mat-checkbox>\n                        </div>\n                        <ng-container  *ngIf=\"form.get('methadone_dolophine').value || form.get('methadone_dolophine').value == 'true'\">\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_dolophine_first\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_dolophine_total\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_dolophine_amn\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_dolophine_freq\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_dolophine_admin\" />\n                                </mat-form-field>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div class=\"col-md-12 form-group row\">\n                        <div class=\"col-md-2 my-auto\">\n                            <mat-checkbox    formControlName=\"methadone_amidone\">Amidone</mat-checkbox>\n                        </div>\n                        <ng-container  *ngIf=\"form.get('methadone_amidone').value || form.get('methadone_amidone').value == 'true'\">\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_amidone_first\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_amidone_total\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_amidone_amn\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_amidone_freq\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_amidone_admin\" />\n                                </mat-form-field>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div class=\"col-md-12 form-group row\">\n                        <div class=\"col-md-2 my-auto\">\n                            <mat-checkbox    formControlName=\"methadone_physeptone\">Physeptone</mat-checkbox>\n                        </div>\n                        <ng-container  *ngIf=\"form.get('methadone_physeptone').value || form.get('methadone_physeptone').value == 'true'\">\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_physeptone_first\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_physeptone_total\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_amn\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_physeptone_freq\" />\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-2 \">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_physeptone_admin\" />\n                                </mat-form-field>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"methadone_heptadon\">Heptadon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('methadone_heptadon').value || form.get('methadone_heptadon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"methadone_methadose\">Methadose</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('methadone_methadose').value || form.get('methadone_methadose').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_methadose_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_methadose_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_methadose_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_methadose_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_methadose_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"methadone_disket\">Disket</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('methadone_disket').value || form.get('methadone_disket').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"methadone_disket_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"methadone_disket_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"methadone_disket_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"methadone_disket_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_disket_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Buprenorphine prescribed, non-prescribed</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Buprenorphine_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div class=\"col-md-12 row\" [hidden]=\"form.get('Buprenorphine_used').value != 'yes'\">\n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-12 form-group row\">\n                                <div class=\"col-md-2\">\n                                    <mat-checkbox  formControlName=\"prescribed_subutex\">Subutex</mat-checkbox>\n                                </div>\n                                <ng-container  *ngIf=\"form.get('prescribed_subutex').value || form.get('prescribed_subutex').value == 'true'\">\n                                    <div class=\"col-md-2\">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_subutex_first\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_subutex_total\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_subutex_amn\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_subutex_freq\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_subutex_admin\" />\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n                            </div>\n                            <div class=\"col-md-12 form-group row\">\n                                <div class=\"col-md-2 my-auto\">\n                                    <mat-checkbox   formControlName=\"prescribed_suboxone\">Suboxone</mat-checkbox>\n                                </div>\n                                <ng-container  *ngIf=\"form.get('prescribed_suboxone').value || form.get('prescribed_suboxone').value == 'true'\">\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_suboxone_first\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_suboxone_total\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_suboxone_amn\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_suboxone_freq\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_suboxone_admin\" />\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n                            </div>\n                            <div class=\"col-md-12 form-group row\">\n                                <div class=\"col-md-2 my-auto\">\n                                    <mat-checkbox    formControlName=\"prescribed_buprenex\">Buprenex</mat-checkbox>\n                                </div>\n                                <ng-container  *ngIf=\"form.get('prescribed_buprenex').value || form.get('prescribed_buprenex').value == 'true'\">\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_buprenex_first\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_buprenex_total\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_buprenex_amn\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_buprenex_freq\" />\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-2 \">\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                            <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_buprenex_admin\" />\n                                        </mat-form-field>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Opiates prescribed, non-prescribed</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Opiates_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('Opiates_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"opiates_heroin\">Heroin</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_heroin').value || form.get('opiates_heroin').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"opiates_morphine\">Morphine</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_morphine').value || form.get('opiates_morphine').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_codine\">Codine</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_codine').value || form.get('opiates_codine').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_codine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_codine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_codine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_codine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_codine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_oxycodon\">Oxycodon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_oxycodon').value || form.get('opiates_oxycodon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_oxymorphon\">Oxymorphon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_oxymorphon').value || form.get('opiates_oxymorphon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_hydrocodon\">Hydrocodon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_hydrocodon').value || form.get('opiates_hydrocodon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"opiates_hydromorphon\">Hydromorphon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_hydromorphon').value || form.get('opiates_hydromorphon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"opiates_tramadol\">Tramadol</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_tramadol').value || form.get('opiates_tramadol').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Opiates prescribed, non-prescribed</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Opiates_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div class=\"col-md-12 row\" [hidden]=\"form.get('opiates_morphine').value != 'yes'\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"opiates_heroin\">Heroin</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_heroin').value || form.get('opiates_heroin').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_heroin_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"opiates_morphine\">Morphine</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_morphine').value || form.get('opiates_morphine').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_morphine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_codine\">Codine</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_codine').value || form.get('opiates_codine').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_codine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_codine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_codine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_codine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_codine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_oxycodon\">Oxycodon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_oxycodon').value || form.get('opiates_oxycodon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_oxycodon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_oxymorphon\">Oxymorphon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_oxymorphon').value || form.get('opiates_oxymorphon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_oxymorphon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"methadone_heptadon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"opiates_hydrocodon\">Hydrocodon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_hydrocodon').value || form.get('opiates_hydrocodon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_hydrocodon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"opiates_hydromorphon\">Hydromorphon</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_hydromorphon').value || form.get('opiates_hydromorphon').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_hydromorphon_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"opiates_tramadol\">Tramadol</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('opiates_tramadol').value || form.get('opiates_tramadol').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"opiates_tramadol_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Tranquilizers prescribed, non-prescribed</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"tranquilizers_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('tranquilizers_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"tranquilizers_valium\">Valium (diazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_valium').value || form.get('tranquilizers_valium').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_valium_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_valium_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_valium_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_valium_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_valium_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"tranquilizers_librium\">Librium or Novopoxide (chlordiazepoxide)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_librium').value || form.get('tranquilizers_librium').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_librium_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_librium_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_librium_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_librium_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_librium_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"tranquilizers_halcion\">Halcion (triazolam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_halcion').value || form.get('tranquilizers_halcion').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_halcion_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_halcion_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_halcion_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_halcion_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_halcion_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"tranquilizers_prosom\">ProSom (estazolam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_prosom').value || form.get('tranquilizers_prosom').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_prosom_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_prosom_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_prosom_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_prosom_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_prosom_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"tranquilizers_xanax\">Xanax(alprazolam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_xanax').value || form.get('tranquilizers_xanax').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_xanax_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_xanax_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_xanax_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_xanax_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_xanax_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"tranquilizers_ativan\">Ativan (lorazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_ativan').value || form.get('tranquilizers_ativan').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ativan_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ativan_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ativan_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ativan_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ativan_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_klonopin\">Klonopin or Rivotril (clonazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_klonopin').value || form.get('tranquilizers_klonopin').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_klonopin_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_klonopin_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_klonopin_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_klonopin_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_klonopin_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_restoril\">Restoril (temazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_restoril').value || form.get('tranquilizers_restoril').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_restoril_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_restoril_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_restoril_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_restoril_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_restoril_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_rohypnol\">Rohypnol (flunitrazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_rohypnol').value || form.get('tranquilizers_rohypnol').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_rohypnol_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_rohypnol_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_rohypnol_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_rohypnol_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_rohypnol_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_dalmane\">Dalmane (flurazepam)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_dalmane').value || form.get('tranquilizers_dalmane').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dalmane_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dalmane_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dalmane_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dalmane_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dalmane_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_imovane\">Imovane (zopiclone)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_imovane').value || form.get('tranquilizers_imovane').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_imovane_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_imovane_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_imovane_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_imovane_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_imovane_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_ambien\">Ambien (zoldipem)\t</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_ambien').value || form.get('tranquilizers_ambien').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ambien_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ambien_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ambien_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ambien_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_ambien_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_lunesta\">Lunesta (eszopiclone)</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_lunesta').value || form.get('tranquilizers_lunesta').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_lunesta_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_lunesta_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_lunesta_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_lunesta_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_lunesta_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox formControlName=\"tranquilizers_others\">Others</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tranquilizers_others').value || form.get('tranquilizers_others').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_others_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_others_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_others_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_others_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_others_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row  mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Cannabis</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Cannabis_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('Cannabis_used').value != 'yes'\" class=\"col-md-12  row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"Cannabis_marijuana\">Marijuan</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Cannabis_marijuana').value || form.get('Cannabis_marijuana').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_marijuana_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_marijuana_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_marijuana_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_marijuana_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_marijuana_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Cannabis_hashish\">Hashish</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Cannabis_hashish').value || form.get('Cannabis_hashish').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_hashish_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_hashish_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_hashish_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_hashish_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_hashish_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"Cannabis_dope\">Dope</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Cannabis_dope').value || form.get('Cannabis_dope').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dope_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dope_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dope_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dope_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_dope_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"Cannabis_synthetic\">Synthetic cannabis</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Cannabis_synthetic').value || form.get('Cannabis_synthetic').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tranquilizers_synthetic_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tranquilizers_synthetic_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tranquilizers_synthetic_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tranquilizers_synthetic_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tranquilizers_synthetic_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Amphetamines & Methamphetamine</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"amphetamines_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('amphetamines_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"amphetamines_amphetamine\">Amphetamine:Speed</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('amphetamines_amphetamine').value || form.get('amphetamines_amphetamine').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"amphetamines_amphetamine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"amphetamines_amphetamine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"amphetamines_amphetamine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"amphetamines_amphetamine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"amphetamines_amphetamine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"amphetamines_methamphetamine_crystal\">Methamphetamine: Crystal, Crank</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('amphetamines_methamphetamine_crystal').value || form.get('amphetamines_methamphetamine_crystal').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_crystal_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_crystal_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_crystal_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_crystal_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_crystal_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"amphetamines_methamphetamine_hcl\">Methamphetamine hydrochloride: Ice, Glass</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('amphetamines_methamphetamine_hcl').value || form.get('amphetamines_methamphetamine_hcl').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_hcl_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_hcl_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_hcl_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_hcl_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"amphetamines_methamphetamine_hcl_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"amphetamines_dextroamphetamine\">Dextroamphetamine Dexies</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('amphetamines_dextroamphetamine').value || form.get('amphetamines_dextroamphetamine').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"amphetamines_dextroamphetamine_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"amphetamines_dextroamphetamine_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"amphetamines_dextroamphetamine_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"amphetamines_dextroamphetamine_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"amphetamines_dextroamphetamine_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"amphetamines_mdma\">MDMA: Ecstasy</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('amphetamines_mdma').value || form.get('amphetamines_mdma').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"amphetamines_mdma_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"amphetamines_mdma_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"amphetamines_mdma_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"amphetamines_mdma_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"amphetamines_mdma_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Cocaine</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"cocaine_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('cocaine_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"cocaine_coke\">Coke</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('cocaine_coke').value || form.get('cocaine_coke').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"cocaine_coke_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"cocaine_coke_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"cocaine_coke_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"cocaine_coke_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"cocaine_coke_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"cocaine_crack\">Crack</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('cocaine_crack').value || form.get('cocaine_crack').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"cocaine_crack_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"cocaine_crack_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"cocaine_crack_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"cocaine_crack_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"cocaine_crack_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox    formControlName=\"cocaine_snow\">Snow</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('cocaine_snow').value || form.get('cocaine_snow').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"cocaine_snow_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"cocaine_snow_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"cocaine_snow_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"cocaine_snow_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"cocaine_snow_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30  form-group\">\n                    <div class=\"col-md-6\"><label>Hallucinogens</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Hallucinogens_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('Hallucinogens_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"hallucinogens_lsd\">LSD/acid</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('hallucinogens_lsd').value || form.get('hallucinogens_lsd').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"hallucinogens_lsd_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"hallucinogens_lsd_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"hallucinogens_lsd_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"hallucinogens_lsd_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"hallucinogens_lsd_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"hallucinogens_mushroom\">Magic mushroom</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('hallucinogens_mushroom').value || form.get('hallucinogens_mushroom').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"hallucinogens_mushroom_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"hallucinogens_mushroom_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"hallucinogens_mushroom_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"hallucinogens_mushroom_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"hallucinogens_mushroom_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Inhalants</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Inhalants_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('Inhalants_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"Inhalants_petrolume\">Petrolume products</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Inhalants_petrolume').value || form.get('Inhalants_petrolume').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Inhalants_petrolume_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Inhalants_petrolume_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Inhalants_petrolume_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Inhalants_petrolume_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Inhalants_petrolume_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Inhalants_toulene\">Toluene: Paint, Glue</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Inhalants_toulene').value || form.get('Inhalants_toulene').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Inhalants_toulene_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Inhalants_toulene_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Inhalants_toulene_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Inhalants_toulene_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Inhalants_toulene_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Inhalants_acetone\">Acetone</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Inhalants_acetone').value || form.get('Inhalants_acetone').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Inhalants_acetone_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Inhalants_acetone_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Inhalants_acetone_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Inhalants_acetone_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Inhalants_acetone_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Inhalants_aerosols\">Aerosols and propellants</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Inhalants_aerosols').value || form.get('Inhalants_aerosols').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Inhalants_aerosols_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Inhalants_aerosols_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Inhalants_aerosols_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Inhalants_aerosols_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Inhalants_aerosols_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Inhalants_nitrites\">Nitrites</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Inhalants_nitrites').value || form.get('Inhalants_nitrites').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Inhalants_nitrites_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Inhalants_nitrites_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Inhalants_nitrites_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Inhalants_nitrites_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Inhalants_nitrites_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Barbiturates</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"Barbiturates_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div  [hidden]=\"form.get('Barbiturates_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"Barbiturates_Amobarbital\">Amobarbital: Amytal</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Barbiturates_Amobarbital').value || form.get('Barbiturates_Amobarbital').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Barbiturates_Amobarbital_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Barbiturates_Amobarbital_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Barbiturates_Amobarbital_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Barbiturates_Amobarbital_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Barbiturates_Amobarbital_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Barbiturates_pentobarbital\">Pentobarbital: Nembutal</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Barbiturates_pentobarbital').value || form.get('Barbiturates_pentobarbital').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Barbiturates_pentobarbital_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Barbiturates_pentobarbital_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Barbiturates_pentobarbital_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Barbiturates_pentobarbital_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Barbiturates_pentobarbital_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"Barbiturates_nembutal\">Secobarbital: Seconal</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('Barbiturates_nembutal').value || form.get('Barbiturates_nembutal').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"Barbiturates_nembutal_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"Barbiturates_nembutal_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"Barbiturates_nembutal_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"Barbiturates_nembutal_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"Barbiturates_nembutal_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Alcohol</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"alcohol_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('alcohol_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"alcohol_beer\">Beer</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_beer').value || form.get('alcohol_beer').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_beer_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_beer_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_beer_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_beer_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_beer_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_wiseky\">Wiseky</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_wiseky').value || form.get('alcohol_wiseky').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_wiseky_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_wiseky_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_wiseky_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_wiseky_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_wiseky_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_vodka\">Vodka</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_vodka').value || form.get('alcohol_vodka').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_vodka_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_vodka_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_vodka_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_vodka_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_vodka_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_tequila\">Tequila</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_tequila').value || form.get('alcohol_tequila').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_tequila_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_tequila_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_tequila_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_tequila_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_tequila_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_gin\">Gin</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_gin').value || form.get('alcohol_gin').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_gin_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_gin_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_gin_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_gin_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_gin_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_rum\">Rum</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_rum').value || form.get('alcohol_rum').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_rum_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_rum_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_rum_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_rum_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_rum_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"alcohol_wines\">Wines</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('alcohol_wines').value || form.get('alcohol_wines').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"alcohol_wines_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"alcohol_wines_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"alcohol_wines_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"alcohol_wines_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"alcohol_wines_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Tobacco</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"tobacco_used\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('tobacco_used').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"tobacco_cigarette\">Cigarette</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tobacco_cigarette').value || form.get('tobacco_cigarette').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tobacco_cigarette_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tobacco_cigarette_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tobacco_cigarette_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tobacco_cigarette_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tobacco_cigarette_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2\">\n                                <mat-checkbox  formControlName=\"tobacco_cigar\">Cigar</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tobacco_cigar').value || form.get('tobacco_cigar').value == 'true'\">\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tobacco_cigar_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tobacco_cigar_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tobacco_cigar_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tobacco_cigar_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tobacco_cigar_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"tobacco_midwakh\">Midwakh</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tobacco_midwakh').value || form.get('tobacco_midwakh').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tobacco_midwakh_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tobacco_midwakh_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tobacco_midwakh_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tobacco_midwakh_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tobacco_midwakh_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-checkbox   formControlName=\"tobacco_shisha\">Shisha</mat-checkbox>\n                            </div>\n                            <ng-container  *ngIf=\"form.get('tobacco_shisha').value || form.get('tobacco_shisha').value == 'true'\">\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"tobacco_shisha_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"tobacco_shisha_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"tobacco_shisha_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"tobacco_shisha_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"tobacco_shisha_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"col-md-12 row mar-t-30 form-group\">\n                    <div class=\"col-md-6\"><label>Others (please state</label></div>\n                    <div class=\"col-md-6\">\n                        <mat-radio-group formControlName=\"substance_dependence_his_others\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div [hidden]=\"form.get('substance_dependence_his_others').value != 'yes'\" class=\"col-md-12 row\">\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Others\"  autocomplete=\"off\"   formControlName=\"prescribed_others_state\" />\n                                </mat-form-field>\n                            </div>\n                            <ng-container  >\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_others_first\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_others_total\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_others_amn\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_others_freq\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_others_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Others\"  autocomplete=\"off\"   formControlName=\"prescribed_others_state_1\" />\n                                </mat-form-field>\n                            </div>\n                            <ng-container  >\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_others_first_1\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_others_total_1\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_others_amn_1\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_others_freq_1\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_others_admin_1\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n                        <div class=\"col-md-12 form-group row\">\n                            <div class=\"col-md-2 my-auto\">\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                    <input matInput placeholder=\"Others\"  autocomplete=\"off\"   formControlName=\"prescribed_others_state_2\" />\n                                </mat-form-field>\n                            </div>\n                            <ng-container  >\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"First use age\"  autocomplete=\"off\"   formControlName=\"prescribed_others_first_2\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Total years of use\"  autocomplete=\"off\"   formControlName=\"prescribed_others_total_2\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"Amount\"  autocomplete=\"off\"   formControlName=\"prescribed_others_amn_2\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyA\"  autocomplete=\"off\"   formControlName=\"prescribed_others_freq_2\" />\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2 \">\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"FrequencyB\"  autocomplete=\"off\"   formControlName=\"prescribed_others_admin\" />\n                                    </mat-form-field>\n                                </div>\n                            </ng-container>\n                        </div>\n\n                    </div>\n                </div>\n                <hr/>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-6\">\n                    <h5><sup>A</sup>Frequency of use codes</h5>\n                    <p>0=Never</p>\n                    <p>1=1-2 times only</p>\n                    <p>2=1-3 times/week</p>\n                    <p>3=Most days of the week</p>\n                    <p>4=Daily</p>\n                </div>\n                <div class=\"col-md-6\">\n                    <h5><sup>B</sup>Method of administration codes</h5>\n                    <p>1=Oral</p>\n                    <p>2=Injection</p>\n                    <p>3=Inhalation</p>\n                    <p>4=Smoke</p>\n                    <p>5=Others</p>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-12\">\n                    <label>Have you experienced the following symptoms as a consequence of substance use</label>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_seizures\">Seizures</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_blackout\">Blackout</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_hallucination\">Hallucination</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_chest_pain\">Chest pain</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_sleep_dis\">Sleep disturbance</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_anxiety\">Anxiety attack</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_nausea\">Nausea</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_Diarrhea\">Diarrhea</mat-checkbox>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_eating_problem\">Eating problems(Anorexia, Bulimia)</mat-checkbox>\n                </div>\n                <div class=\"col-md-1\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_fatigue\">Fatigue</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_overdose\">Overdose</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_headache\">Headache</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_dizziness\">Dizziness</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_paranoid\">Paranoid thoughts</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_palpitation\">Palpitation</mat-checkbox>\n                </div>\n                <div class=\"col-md-3\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_uncontrollable\">Uncontrollable Movements</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                <mat-checkbox  formControlName=\"sub_symptoms_hyperactive\">Hyperactive</mat-checkbox>\n            </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_vomitting\">Vomiting</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_constipation\">Constipation</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_urinating\">Difficulty in urinating</mat-checkbox>\n                </div>\n                <div class=\"col-md-2\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_irritability\">Irritability</mat-checkbox>\n                </div>\n                <div class=\"col-md-1\">\n                    <mat-checkbox  formControlName=\"sub_symptoms_others\">others</mat-checkbox>\n                </div>\n                <div  [hidden]=\"!form.get('sub_symptoms_others').value && form.get('sub_symptoms_others').value != 'true'\" class=\"col-md-2\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If others, please specify\"  autocomplete=\"off\"   formControlName=\"sub_symptoms_others_text\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"How old were you when you first diagnosed with addiction(using daily or most days of the week)?\"  autocomplete=\"off\"   formControlName=\"substance_diagnosed\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group \">\n                    <label align=\"start\">\n                        How often the dosage of drug changed?\n                    </label>\n                    <div  class=\"mat-form-field-fluid \">\n                        <mat-radio-group formControlName=\"drug_dosage\" >\n                            <mat-radio-button  value=\"daily\">Daily</mat-radio-button>\n                            <mat-radio-button  value=\"weekly\">Weekly</mat-radio-button>\n                            <mat-radio-button  value=\"monthly\">Monthly</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 form-group \">\n                    <label align=\"start\">\n                        Time frame from regular use to dependence?\n                    </label>\n                    <div  class=\"mat-form-field-fluid \">\n                        <mat-radio-group formControlName=\"drug_dosage\" >\n                            <mat-radio-button  value=\"days\">Days</mat-radio-button>\n                            <mat-radio-button  value=\"weeks\">Weeks</mat-radio-button>\n                            <mat-radio-button  value=\"months\">Months</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Diabetic</label>\n                        <mat-radio-group aria-labelledby=\"Diabetic\"  formControlName=\"diabetesMellitus\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Type\" formControlName=\"diabetic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Age of diagnosis(diabetes)\" formControlName=\"age\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Dyslipidemia</label>\n                        <mat-radio-group aria-labelledby=\"Dyslipidemia\"  formControlName=\"dyslipidemia\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Do you have any specific diabetes related complications?</label>\n                        <br>\n\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"Dyslipidemia\"  formControlName=\"diabetes_com\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n            </div>\n    \n            <div class=\"form-group  row\">\n                <h6>If Yes, what are the specific diabetes related complications? (Please select as many as appropriate)</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_retinopathy\"  >Retinopathy</mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            Eyes:\n                            1. Nonproliferative\n                            2. Proliferative<br>\n                            3. Laser\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_neuropathy\"  >Neuropathy</mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            Feet (ulcers):\n                            *gangrene<br>\n                            *loss of sensation/numbness/pain/burning/tingling\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Other\" formControlName=\"neuropathy_other\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Amputation:\n                            *Loss of toe, foot or leg. *Pain in calf muscles while walking. <br>\n                            *Circulation/peripheral vascular disease/operation on artery in legs.\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_cva\"  >Cerebrovascular accident (C.V.A)\n                        </mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            TIA <br>\n                            Stroke (bleeding, Ischemia) <br>\n                            Bleeding<br>\n                            Stroke: *loss of sensation down one side of the body<br>\n                            *Difficulty in speaking/eating<br>\n                            *Operation on artery or neck<br>\n                            *Facial drop/paralysed arm or leg\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_nephropathy\" >Nephropathy</mat-checkbox>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Albuminuria 30-299 > 300\" formControlName=\"nephropathy_albuminuria_others\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Kidney:\n                            *protein or albumin in the urine\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"eGFR\" formControlName=\"nephropathy_eGFR_others\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Kidney:\n                            *protein or albumin in the urine\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_cad\"  >Coronary artery disease(C.A.D)\n                        </mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            * Coronary artery bypass grafting (CABG)<br>\n                            * Percutaneous Coronary Intervention (PCI)<br>\n                            * Arrhythymias (AF)\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"diabetes_comp_other_check\"  >Other</mat-checkbox>\n                        <div [hidden]=\"!form.get('diabetes_comp_other_check').value\">\n                            <mat-form-field   class=\"mat-form-field-fluid\">\n                                <input  type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"diabetes_comp_others_text\" autocomplete=\"off\"    />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <label>* Current diabetes management method</label>\n                </div>\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_none\">None</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_tabletsonly\">Tablets only </mat-checkbox>\n                        <mat-checkbox  class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_diettablets\">Diet & Tablets </mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"    formControlName=\"diabetes_man_diettabletsinsulin\">Diet, Tablets & Insulin</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_dietonly\">Diet only</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_insulinonly\">Insulin only</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_dietinsulin\">Diet & Insulin</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_unknown\">Unknown</mat-checkbox>\n                        <mat-checkbox  class=\"lab-mar-right-15\"   formControlName=\"current_diabetes_man_other\">Others please specify</mat-checkbox>\n                        <div class=\"col-md-12 row\" [hidden]=\"!form.get('current_diabetes_man_other').value\">\n                            <mat-form-field   class=\"mat-form-field-fluid\">\n                                <input   type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"current_diabetes_man_other_text\" autocomplete=\"off\"    />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Diabetes in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"diabetes_family_his\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Diabetes complication in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"diab_comp_family\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Obesity in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"obesity_family_his\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Hypertension in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"hypertension_family_his\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Dyslipidaemia in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"dyslip_family_his\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"col-md-12  form-group\">\n                <h6>Do you have (blood) relatives who have, or have had a history of drug use/abuse?</h6>\n            </div>\n\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Sibling</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"drug_sibling\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('drug_sibling').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Type of drug\"  autocomplete=\"off\"   formControlName=\"sib_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Mother</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"drug_mother\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('drug_mother').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Type of drug\"  autocomplete=\"off\"   formControlName=\"mother_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Father</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"drug_father\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('drug_father').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Type of drug\"  autocomplete=\"off\"   formControlName=\"father_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Others</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"drug_others_his\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('drug_others_his').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Relationship\"  autocomplete=\"off\"   formControlName=\"others_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-12  form-group\">\n                <h6>- Do you have (blood) relatives who have been treated for drug addiction at this clinic?</h6>\n            </div>\n\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Sibling</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"medic_sib\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('medic_sib').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Treatment medication (if possible)\"  autocomplete=\"off\"   formControlName=\"medic_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Mother</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"medic_mother\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('medic_mother').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Treatment medication (if possible)\"  autocomplete=\"off\"   formControlName=\"medic_mother_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Father</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"medic_father\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('medic_father').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Treatment medication (if possible)\"  autocomplete=\"off\"   formControlName=\"medic_father_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Others</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"medic_others_his\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div [hidden]=\"form.get('medic_others_his').value != 'yes'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Relationship\"  autocomplete=\"off\"   formControlName=\"medic_others_drug\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Did the family member completed the treatment</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"completed_fam\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n            </div>\n            <div [hidden]=\"form.get('completed_fam').value != 'yes'\" class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4 form-group\">\n                    <label>If No, Please specify the reason</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"completed_fam_reason\" >\n                        <mat-radio-button  value=\"yes\">Successful treatment</mat-radio-button>\n                        <mat-radio-button  value=\"no\">Relapse</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div [hidden]=\"form.get('completed_fam_reason').value != 'others'\" class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If others, please specify\"  autocomplete=\"off\"   formControlName=\"completed_fam_reason_other\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <label class=\"hoverable\" for=\"fileInput\">\n            <img class=\"img\" [src]=\"url ? url :  '/assets//media/img_avatar.png'\">\n            <div class=\"hover-text\">\n                Family Photo\n            </div>\n            <div class=\"background\"></div>\n        </label>\n        <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row kt-form__section--first\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you exercise or walk\n                </label>\n            </div>\n            <div class=\"col-md-5 form-group \">\n                <mat-form-field floatPlaceholder=\"Walk\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Walk\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <ng-container [ngSwitch]=\"form.get('Walk').value\">\n                    <ng-container *ngSwitchCase=\"'yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\" >\n                            <input  matInput placeholder=\"If Yes, Walk (minutes per walk)\" formControlName=\"Walk_IfYes\" />\n                        </mat-form-field>\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'others'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If others, please specify\" autocomplete=\"off\" formControlName=\"Walk_others_Specify\" />\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you follow a healthy diet\n                </label>\n            </div>\n            <div class=\"col-md-5 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Healthy\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <ng-container [ngSwitch]=\"form.get('Healthy').value\">\n                    <ng-container *ngSwitchCase=\"'others'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If others, please specify\" autocomplete=\"off\" formControlName=\"Walk_others_Specify\" />\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n            </div>\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    What is your smoking status\n                </label>\n            </div>\n            <div class=\"col-md-5 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Healthy\" >\n                        <mat-radio-button  value=\"CurrentSmoke\">Current smoker</mat-radio-button>\n                        <mat-radio-button  value=\"NeverSmoke\">Never smoked</mat-radio-button>\n                        <mat-radio-button  value=\"Ex-Smoker\"> Ex Smoker</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row col-md-12 kt-form__section--first\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you have any medical condition?\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"medical_condition\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <h6>Indicate if you had any of the following medical conditions and specify the period (Pre- Post substance use)</h6>\n            </div>\n            <div class=\"col-md-5 form-group\">\n                <label class=\"label-bold\">Medical condition</label>\n            </div>\n            <div class=\"col-md-7 form-group\">\n                <label class=\"label-bold\">When</label>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_con\"> Asthma</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_con').value ||  form.get('medical_con').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"asthma_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"asthma_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_circle\"> Diabetes Circle type</mat-checkbox>\n                    </label>\n                    <mat-radio-group *ngIf=\"form.get('diabetes_circle').value ||  form.get('diabetes_circle').value == 'true'\" formControlName=\"diabetes_circle_type\">\n                        <mat-radio-button  value=\"one\">I</mat-radio-button>\n                        <mat-radio-button  value=\"two\">II</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div *ngIf=\"form.get('diabetes_circle').value ||  form.get('diabetes_circle').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"diabetes_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"diabetes_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_heart\"> Heart Disease</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_heart').value ||  form.get('medical_heart').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_heart_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_heart_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_high_pressure\"> High Blood Pressure\t</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_high_pressure').value ||  form.get('medical_high_pressure').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_high_pressure_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_high_pressure_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_anemia\">Anemia</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_anemia').value ||  form.get('medical_anemia').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_anemia_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_anemia_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_ulcer\">Ulcer</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_ulcer').value ||  form.get('medical_ulcer').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_ulcer_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_ulcer_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_cancer\">Cancer</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_cancer').value ||  form.get('medical_cancer').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_cancer_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_cancer_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_cancer\">Kidney Disease</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_kidney').value ||  form.get('medical_kidney').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_kidney_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_kidney_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_HepatitisCircle\"> Hepatitis Circle</mat-checkbox>\n                    </label>\n                    <mat-radio-group *ngIf=\"form.get('medical_HepatitisCircle').value ||  form.get('medical_HepatitisCircle').value == 'true'\" formControlName=\"medical_HepatitisCircleType\">\n                        <mat-radio-button  value=\"b\">B</mat-radio-button>\n                        <mat-radio-button  value=\"c\">C</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div *ngIf=\"form.get('medical_HepatitisCircle').value ||  form.get('medical_HepatitisCircle').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_HepatitisCircle_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_HepatitisCircle_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_liver\">Liver Disease\t</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_liver').value ||  form.get('medical_liver').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_liver_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_liver_pre\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_Seizures\">Seizures\t</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_Seizures').value ||  form.get('medical_Seizures').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_Seizures_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_Seizures_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_gastro\">Gastro intestinal problems</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_gastro').value ||  form.get('medical_gastro').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3 \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_gastro_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3 \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_gastro_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_Sinusitis\">Sinusitis</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_Sinusitis').value ||  form.get('medical_Sinusitis').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_Sinusitis_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_Sinusitis_pre_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_cough\">Persistent cough</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_cough').value ||  form.get('medical_cough').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_cough_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_cough_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_skin\">Skin Problems</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_skin').value ||  form.get('medical_skin').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_skin_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_skin_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_Arthritis\">Arthritis</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_Arthritis').value ||  form.get('medical_Arthritis').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_Arthritis_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_Arthritis_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_hallucination\">Hallucination</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_hallucination').value ||  form.get('medical_hallucination').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_hallucination_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_hallucination_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_Depression\">Depression</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_Depression').value ||  form.get('medical_Depression').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_Depression_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_Depression_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_hiv\">HIV</mat-checkbox>\n                    </label>\n                </div>\n                <div *ngIf=\"form.get('medical_hiv').value ||  form.get('medical_hiv').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_hiv_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_hiv_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-5  \">\n                    <label>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medical_others\">Others</mat-checkbox>\n                        <div style=\"display: inline-block\"  *ngIf=\"form.get('medical_others').value ||  form.get('medical_others').value == 'true'\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If others, please specify\"\n                                       formControlName=\"medical_others_specify\" />\n                            </mat-form-field>\n                        </div>\n                    </label>\n\n                </div>\n                <div *ngIf=\"form.get('medical_others').value ||  form.get('medical_others').value == 'true'\"  class=\"dis-con\" >\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Pre\"\n                                   formControlName=\"medical_others_pre\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3  \">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Post\"\n                                   formControlName=\"medical_others_post\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you have allergies?\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"allergies\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-4\" >\n                <div  [hidden]=\"form.get('allergies').value != 'yes'\" >\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\"\n                               formControlName=\"all_specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you have intolerance to any medication or food\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"intolerance\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4\" >\n                <div [hidden]=\"form.get('intolerance').value != 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\"\n                               formControlName=\"intolerance_specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    During dependence: Have you loss/ gain weight\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"intolerance\">\n                        <mat-radio-button  value=\"loss\">Loss</mat-radio-button>\n                        <mat-radio-button  value=\"gain\">Gain</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-1\" >\n                <div [hidden]=\"form.get('intolerance').value !=''  && form.get('intolerance').value != null\">\n                    <label align=\"start\">\n                        Reason\n                    </label>\n                </div>\n            </div >\n            <div class=\"col-md-5\" >\n                <div [hidden]=\"form.get('intolerance').value !=''  && form.get('intolerance').value != null\">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"intolerance_specify\">\n                            <mat-radio-button  value=\"loss\">Medical illness</mat-radio-button>\n                            <mat-radio-button  value=\"gain\">Substance dependence</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Have you been hospitalised (medical or psychiatric) or had surgery\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"surgery\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div [hidden]=\"form.get('surgery').value !='yes'\" class=\"col-md-12 row\">\n                <div class=\"col-md-12\">\n                <h6>If yes, Please indicate the following</h6>\n                </div>\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"hospitalised\"\n                               (click)=\"hospitalised.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date\" formControlName=\"ind_specify\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"hospitalised\"></mat-datepicker-toggle>\n                        <mat-datepicker #hospitalised></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput\n                               autocomplete=\"off\"\n                               placeholder=\"Place\" formControlName=\"where_specify\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput\n                               autocomplete=\"off\"\n                               placeholder=\"Reason\" formControlName=\"Reasaon_specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Have you ever been on medical pain management\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"medical_pain\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div [hidden]=\"form.get('medical_pain').value !='yes'\" class=\"col-md-12 row\">\n                <div class=\"col-md-12\">\n                    <h6>If yes, Please specify</h6>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"when_specify\"\n                               (click)=\"when_specify.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"When\" formControlName=\"when_specify\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"when_specify\"></mat-datepicker-toggle>\n                        <mat-datepicker #when_specify></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput\n                               autocomplete=\"off\"\n                               placeholder=\"Source of pain (physical /psychological)\" formControlName=\"source_specify\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput\n                               autocomplete=\"off\"\n                               placeholder=\"Medication\" formControlName=\"medic_specify\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput\n                               autocomplete=\"off\"\n                               placeholder=\"Duration\" formControlName=\"dur_specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Are you currently on any medication other than treatment\n                </label>\n            </div>\n            <div class=\"col-md-3  form-group\">\n                <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"medic_treatment\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div [hidden]=\"form.get('medic_treatment').value !='yes'\" class=\"col-md-4 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput\n                           autocomplete=\"off\"\n                           placeholder=\"If yes, Please specify\" formControlName=\"medic_treat_specify\" />\n                </mat-form-field>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h5>\n                    Anti-Hypertensive\n                </h5>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_ace\"> ACE-inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('inhibit_ace').value ||  form.get('inhibit_ace').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Perindopril Dose\"\n                               formControlName=\"perindop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Captopril Dose\"\n                               formControlName=\"captopril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Enalapril Dose\"\n                               formControlName=\"enalapril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Lisinopril Dose\"\n                               formControlName=\"lisinop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"medications_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_arbs\"> ARBs</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_arbs').value ||  form.get('anti_hyper_arbs').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Losartan Dose\"\n                               formControlName=\"losartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Valsartan Dose\"\n                               formControlName=\"Valsartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"beta_blockers\"> Beta-blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"form.get('beta_blockers').value ||  form.get('beta_blockers').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atenolol Dose\"\n                               formControlName=\"atenolol\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Bisoprolol Dose\"\n                               formControlName=\"bisopr\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"beta_other_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diurectics\"> Diuretics</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"form.get('diurectics').value ||  form.get('diurectics').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Indapamide Dose\"\n                               formControlName=\"indapam\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Hydrochlorothiazide Dose\"\n                               formControlName=\"hydroch\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Frusemide Dose\"\n                               formControlName=\"fruse\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"diur_others_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"CA_channel_blockers\"> CA Channel Blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"form.get('CA_channel_blockers').value || form.get('CA_channel_blockers').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Amlodipine Dose\"\n                               formControlName=\"amlodip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nifedipine Dose\"\n                               formControlName=\"nifedip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Verapamil Dose\"\n                               formControlName=\"verapamil\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"ca_channer_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"others_oh\">Others </mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"form.get('others_oh').value || form.get('others_oh').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Methyldopa Dose\"\n                               formControlName=\"methyldop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_others_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n                <h5>\n                    Anti-Dyslipidemia\n                </h5>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"Anti_Dyslipidemia_statins\"> Statins</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('Anti_Dyslipidemia_statins').value || form.get('Anti_Dyslipidemia_statins').value == 'true' \"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Simvastatin Dose\"\n                               formControlName=\"simvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atorvastatin Dose\"\n                               formControlName=\"atorvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Rosuvastatin Dose\"\n                               formControlName=\"rosuvas\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"Anti_Dyslipidemia_OtherD\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"Anti_Dyslipidemia_fibrates\"> Fibrates</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('Anti_Dyslipidemia_fibrates').value || form.get('Anti_Dyslipidemia_fibrates').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gemfibrozil Dose\"\n                               formControlName=\"gemfib\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Fenofibrate  Dose\"\n                               formControlName=\"fenofib\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-radio-group formControlName=\"fibrat1\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-radio-group formControlName=\"fibrat2\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"Anti_Dyslipidemia_others\"> Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('Anti_Dyslipidemia_others').value || form.get('Anti_Dyslipidemia_others').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"AntiOthers\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n                <h5>\n                    Anti-hyperglycemia (diabetes) Oral agents\n                </h5>\n\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_Biguanides\"> Biguanides</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_Biguanides').value || form.get('anti_hyper_Biguanides').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Metformin Dose\"\n                               formControlName=\"Metformin\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_sus\"> SUs</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_sus').value || form.get('anti_hyper_sus').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glibenclamide Dose\"\n                               formControlName=\"glibenclamide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"glimepir\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gliclazide MR Dose\"\n                               formControlName=\"gliclazide_mr\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"pride_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_other_su\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_thiazolid\"> Thiazolidinediones</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_thiazolid').value || form.get('anti_hyper_thiazolid').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pioglitazone Dose\"\n                               formControlName=\"pioglit\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_thiazolid_Other\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_meglitin\"> Meglitinides</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_meglitin').value || form.get('anti_hyper_meglitin').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nateglinide Dose\"\n                               formControlName=\"anti_hyper_Nateglinide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Repaglinide Dose\"\n                               formControlName=\"anti_hyper_repaglin\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_glucosid\"> Alpha-glucosidase inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_glucosid').value || form.get('anti_hyper_glucosid').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Acarbose Dose\"\n                               formControlName=\"acarbose\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_dipeptidyl\">Dipeptidyl peptidase-IV inhibitors (DPP-IV)</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_dipeptidyl').value || form.get('anti_hyper_dipeptidyl').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sitagliptin Dose\"\n                               formControlName=\"anti_hyper_sitaglip\" />\n                    </mat-form-field>\n                </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Vildagliptin Dose\"\n                           formControlName=\"anti_hyper_vildaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Saxagliptin Dose\"\n                           formControlName=\"anti_hyper_saxaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Linagliptin Dose\"\n                           formControlName=\"anti_hyper_linaglip\" />\n                </mat-form-field>\n            </div>\n\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_peptid_others\">Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_peptid_others').value || form.get('anti_hyper_peptid_others').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pramlintide Dose\"\n                               formControlName=\"pramlintide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_other_peptid\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_incretinm\">Incretinmimetics (GLP-1 agonist)</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_incretinm').value || form.get('anti_hyper_incretinm').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide Dose\"\n                               formControlName=\"anti_hyper_exenatide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Liraglutide Dose\"\n                               formControlName=\"anti_hyper_liraglut\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide (weekly) Dose\"\n                               formControlName=\"exenatide_dose\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n                <h5>\n                    Injections\n                </h5>\n\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_insulin_lin\">Insulin</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('anti_hyper_insulin_lin').value || form.get('anti_hyper_insulin_lin').value == 'true'\"  class=\"col-md-10 row\">\n\n                <div class=\"col-md-12 \">\n                    <div class=\"row\">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Lispro Dose\"\n                                       formControlName=\"lispro_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Aspart Dose\"\n                                       formControlName=\"aspart_dose\" />\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Glulisine Dose\"\n                                       formControlName=\"glulisine_dose\" />\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Regular Dose\"\n                                       formControlName=\"regular_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"NPH Dose\"\n                                       formControlName=\"nph_dose\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12 row \">\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Detemir Dose\"\n                                   formControlName=\"Detemir_Dose\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Glargine Dose\"\n                                   formControlName=\"glargine\" />\n                        </mat-form-field>\n                    </div>\n\n\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Combination Dose\"\n                                   formControlName=\"anti_hyper_insulin_lin_combination\" />\n                        </mat-form-field>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n                <h5>\n                    Supplement\n                </h5>\n            \n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"suplements_vitamind3\"> Vitamin D3</mat-checkbox>\n            </div>\n            <div *ngIf=\"form.get('suplements_vitamind3').value || form.get('suplements_vitamind3').value == 'true' \"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others\"\n                               formControlName=\"suplements_OtherVit\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div classs=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section col-md-12 row kt-form__section--first\">\n            <div class=\"col-md-3   form-group\">\n                <label class=\"hoverable\" for=\"fileInput\">\n                    <img class=\"img\" [src]=\"url ? url : form.get('Gender').value == 'female' ?   '/assets//media/img_avatar-female.png' :  '/assets//media/img_avatar.png'\">\n                    <div class=\"hover-text\">\n                        Choose file\n                    </div>\n                    <div class=\"background\"></div>\n                </label>\n                <br/>\n                <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n            </div>\n            <div class=\"col-md-3 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                    <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"Sample\" />\n                    <mat-error>Sample Id is\n                        <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            \n            <div class=\"col-md-3 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                    <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                 \n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                    <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"Collected_by\" />\n                </mat-form-field>\n            </div>\n       \n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n       \n            \n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            \n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                           autocomplete=\"off\"\n                           (click)=\"doaPicker.open()\"\n                           placeholder=\"Choose Collection Date\"  formControlName=\"Collected_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"NRC ID\"\n                           autocomplete=\"off\"\n                           formControlName=\"nrc_id\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"dobPicker\"\n                           autocomplete=\"off\"\n                           [max] = 'maxDate'\n                           placeholder=\"Date of Birth\" (click)=\"dobPicker.open()\" formControlName=\"dob\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #dobPicker></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3    \">\n                <label align=\"start\">\n                    Gender\n                </label>\n            </div>\n            <div class=\"col-md-5  form-group \">\n                <mat-form-field floatPlaceholder=\"Gender\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Gender\" >\n                        <mat-radio-button  value=\"Male\">Male</mat-radio-button>\n                        <mat-radio-button  value=\"Female\">Female</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Nationality\" formControlName=\"country\" [matAutocomplete]=\"manuf\">\n                    <mat-autocomplete #manuf=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let list of filteredNationalities | async\" [value]=\"list\">\n                            {{ list }}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Marital Status\n                </label>\n            </div>\n            <div class=\"col-md-5  form-group\">\n                <mat-form-field floatPlaceholder=\"Marital Status\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"MaritalStatus\">\n                        <mat-radio-button  value=\"single\">Single</mat-radio-button>\n                        <mat-radio-button  value=\"married\">Married</mat-radio-button>\n                        <mat-radio-button  value=\"divorced\">Divorced</mat-radio-button>\n                        <mat-radio-button  value=\"widow\">Widow</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Place of Birth\" formControlName=\"PlaceOfBirth\" [matAutocomplete]=\"manuf\" />\n                    <mat-autocomplete #manuf=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let list of filteredPlace | async\" [value]=\"list\">\n                            {{ list }}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Employment status\n                </label>\n            </div>\n            <div class=\"col-md-5  form-group\">\n                <mat-form-field floatPlaceholder=\"Marital Status\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"employment_status\">\n                        <mat-radio-button  value=\"employed\">Employed</mat-radio-button>\n                        <mat-radio-button  value=\"unemployed\">Unemployed</mat-radio-button>\n                        <mat-radio-button  value=\"student\">Student</mat-radio-button>\n                        <mat-radio-button  value=\"yes\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\"  >\n                <div [hidden]=\"form.get('employment_status').value != 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\" >\n                        <input matInput placeholder=\"If others, please specify\" formControlName=\"employment_others_text\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Education level\n                </label>\n            </div>\n            <div class=\"col-md-9  form-group\">\n                <mat-form-field floatPlaceholder=\"Education level\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"eduLevel\">\n                        <mat-radio-button  value=\"primary\">Primary</mat-radio-button>\n                        <mat-radio-button  value=\"preparatory\">Preparatory</mat-radio-button>\n                        <mat-radio-button  value=\"secondary\">Secondary</mat-radio-button>\n                        <mat-radio-button  value=\"highSchool\">High School</mat-radio-button>\n                        <mat-radio-button  value=\"diploma\">Diploma</mat-radio-button>\n                        <mat-radio-button  value=\"bachelor\">Bachelor</mat-radio-button>\n                        <mat-radio-button  value=\"master\">Master</mat-radio-button>\n                        <mat-radio-button  value=\"phd\">PhD</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Ethnicity\n                </label>\n            </div>\n            <div class=\"form-group\"  [ngClass]=\" form.get('ethnicity').value != 'others' && form.get('ethnicity').value != 'mixed' ? 'col-md-6' : 'col-md-5'\">\n                <mat-form-field floatPlaceholder=\"Education level\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"ethnicity\">\n                        <mat-radio-button  value=\"arab\">Arab</mat-radio-button>\n                        <mat-radio-button  value=\"ajam\">Ajam</mat-radio-button>\n                        <mat-radio-button  value=\"bloush\">Bloush</mat-radio-button>\n                        <mat-radio-button  value=\"mixed\">Mixed, specify</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div [ngClass]=\"  form.get('ethnicity').value != 'others' && form.get('ethnicity').value != 'mixed' ? 'col-md-3' : 'col-md-4' \" class=\"form-group\">\n            <ng-container [ngSwitch]=\"form.get('ethnicity').value\"   >\n                <ng-container *ngSwitchCase=\"'mixed'\">\n                    <mat-form-field class=\"mat-form-field-fluid\" >\n                        <input  matInput placeholder=\"If mixed, please specify\" formControlName=\"ethnicity_mixed_specify_text\" />\n                    </mat-form-field>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'others'\">\n                    <mat-form-field class=\"mat-form-field-fluid\" >\n                        <input  matInput placeholder=\"If others, please specify\" formControlName=\"ethnicity_others_text\" />\n                    </mat-form-field>\n                </ng-container>\n            </ng-container>\n            </div>\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Patient type\n                </label>\n            </div>\n            <div class=\"col-md-5  form-group\">\n                <mat-form-field floatPlaceholder=\"Patient type\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Admission_Status\">\n                        <mat-radio-button  value=\"NewAdmission\">New admission</mat-radio-button>\n                        <mat-radio-button  value=\"inpatient\">Inpatient</mat-radio-button>\n                        <mat-radio-button  value=\"outpatient\">Outpatient</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\" >\n                <div [hidden]=\"form.get('Admission_Status').value != 'inpatient'\">\n                <mat-form-field>\n                    <mat-label>If inpatient, please select </mat-label>\n                    <mat-select formControlName=\"inpatient_type\" matNativeControl >\n                        <mat-option value=\"Detox\">Detox</mat-option>\n                        <mat-option value=\"Voluntary\">Voluntary</mat-option>\n                        <mat-option value=\"Involuntary\">Involuntary</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            </div>\n\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Method of admission\n                </label>\n            </div>\n            <div class=\"col-md-5  form-group\">\n                <mat-form-field floatPlaceholder=\"Patient type\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"method_adm\">\n                        <mat-radio-button  value=\"voluntary\">Voluntary</mat-radio-button>\n                        <mat-radio-button  value=\"involuntary\">Involuntary</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\"  >\n                <div [hidden]=\"form.get('method_adm').value != 'others'\">\n                    <mat-form-field class=\"mat-form-field-fluid\" >\n                        <input matInput placeholder=\"If others, please specify\" formControlName=\"method_adm_others_text\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                <textarea matInput rows=\"4\" placeholder=\"Comments\"\n                          formControlName=\"participant_comments\"></textarea>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Are you currently on follow up management?</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"out_patient_healthy_diet\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div [hidden]=\"form.get('out_patient_healthy_diet').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, How often the follow up session?\"  autocomplete=\"off\"   formControlName=\"follow_up_session_specify\" />\n                        <mat-hint>\n                            (per week / month)\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 form-group\">\n                    <label>What is the treatment response?</label>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                    <mat-radio-group formControlName=\"out_patient_treatment_response\" >\n                        <mat-radio-button  value=\"responder\">Responder</mat-radio-button>\n                        <mat-radio-button  value=\"non_responder\">Non-responder</mat-radio-button>\n                        <mat-radio-button  value=\"responder\">Partial-responder</mat-radio-button>\n                        <mat-radio-button  value=\"relapse\">Relapse</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Have you attended one of the following as part of the treatment?\n                    </label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"att_treat_how_long\" >\n                        <mat-radio-button  value=\"programme\"> Structured outpatients programme How Long</mat-radio-button>\n                        <mat-radio-button  value=\"counselling_session\"> Counselling session Number of sessions</mat-radio-button>\n                        <mat-radio-button  value=\"group_session\"> Group session How Many</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div *ngIf=\"form.get('att_treat_how_long').value == 'programme'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Structured outpatients, please specify\"  autocomplete=\"off\"   formControlName=\"att_treat_number_ses\" />\n                    </mat-form-field>\n                </div>\n\n                <div *ngIf=\"form.get('att_treat_how_long').value == 'counselling_session'\"\n                           class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Counselling session, please specify\"  autocomplete=\"off\"   formControlName=\"att_treat\" />\n                </mat-form-field>\n            </div>\n                <div *ngIf=\"form.get('att_treat_how_long').value == 'group_session'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Group session, please specify\"  autocomplete=\"off\"   formControlName=\"att_treat_how_many\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n\n            <div class=\"col-md-12 form-group\">\n            <h6>Test preformed in admission or follow upsession</h6>\n            </div>\n            <div class=\"col-md-12 row\">\n            <div class=\"col-md-4 form-group\">\n                <label>Sample collected</label>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <mat-radio-group formControlName=\"test_sample_collected\" >\n                    <mat-radio-button  value=\"urine\">Urine</mat-radio-button>\n                    <mat-radio-button  value=\"blood\">Blood</mat-radio-button>\n                    <mat-radio-button  value=\"others\">others</mat-radio-button>\n                </mat-radio-group>\n            </div>\n            <div  [hidden]=\"form.get('test_sample_collected').value != 'others'\"\n                   class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input placeholder=\"If Others, please specify\" formControlName=\"test_sample_collected_spec\" matInput  autocomplete=\"off\"  />\n                </mat-form-field>\n            </div>\n            </div>\n            \n            <div class=\"col-md-12 row form-group\">\n                <div class=\"col-md-4\">\n                    <label>Target drug</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <label>Result of last test\t</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <label>Comments</label>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Amphetamines</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"amphetamines\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('amphetamines').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"amphetamines_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Barbiturates</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"barbiturates\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('barbiturates').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"barbiturates_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Benzodiazepines</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_benzodiazepines\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_benzodiazepines').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_benzodiazepines_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Cannabinoids</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_cannainoids\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_cannainoids').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_cannainoids_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Cocaine and metabolite</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_cocaine\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_cocaine').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_cocaine_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Methadone and metabolite\t</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_methadone\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_methadone').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_methadone_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Phencyclidine</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_phencyclidine\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_phencyclidine').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_phencyclidine_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Propxyphene and metabolite\t</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_propxyphene\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_propxyphene').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_propxyphene_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Opiate</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_opiate\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_opiate').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Comments\"  formControlName=\"test_opiate_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group row\">\n                <div class=\"col-md-4\">\n                    <label>Others</label>\n                    <div  >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input  placeholder=\"Comments\"  formControlName=\"test_target_drug_others\"  matInput autocomplete=\"off\"   />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-radio-group formControlName=\"test_target_drug_others\" >\n                        <mat-radio-button  value=\"positive\">Positive</mat-radio-button>\n                        <mat-radio-button  value=\"negative\">Negative</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div class=\"col-md-4\" [hidden]=\"!form.get('test_target_drug_others').value\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input  placeholder=\"Others\"  formControlName=\"test_target_drug_others_com\"  matInput autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n\n         <div class=\"col-md-12 row form-group\">\n            <div class=\"col-md-4\">\n                <label>Have you had any of the following for your addiction treatment?</label>\n            </div>\n            <div class=\"col-md-4\">\n                <mat-radio-group formControlName=\"addiction_treatment\" >\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n         </div>\n\n\n\n            <div class=\"col-md-12  row\">\n                    <div class=\"col-md-4\">\n                        <label>Prescribed Methadone</label>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_times\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_star\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Date started*\"\n                                   (click)=\"sub_treat_prescribed_star.open()\"\n                                   formControlName=\"sub_treat_prescribed_star\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_star\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_star></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_finis\"\n                                   autocomplete=\"off\"\n                                    placeholder=\"Date finished*\"\n                                   (click)=\"sub_treat_prescribed_finis.open()\"\n                                   formControlName=\"sub_treat_prescribed_finis\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_finis\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_finis></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_encoun\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n            <div class=\"col-md-12  row\">\n                    <div class=\"col-md-4\">\n                        <label>Prescribed oral Naltrexone, injection or implantation</label>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Naltrexone_times\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Naltrexone_star\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Date started*\"\n                                   (click)=\"sub_treat_prescribed_Naltrexone_star.open()\"\n                                   formControlName=\"sub_treat_prescribed_Naltrexone_star\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Naltrexone_star\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Naltrexone_star></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Naltrexone_finis\"\n                                   autocomplete=\"off\"\n                                    placeholder=\"Date finished*\"\n                                   (click)=\"sub_treat_prescribed_Naltrexone_finis.open()\"\n                                   formControlName=\"sub_treat_prescribed_Naltrexone_finis\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Naltrexone_finis\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Naltrexone_finis></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Naltrexone_encoun\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n            <div class=\"col-md-12  row\">\n                    <div class=\"col-md-4\">\n                        <label>Prescribed oral Buprenorphine (Subutex or Suboxone)</label>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Buprenorphine_times\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Buprenorphine_star\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Date started*\"\n                                   (click)=\"sub_treat_prescribed_Buprenorphine_star.open()\"\n                                   formControlName=\"sub_treat_prescribed_Buprenorphine_star\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Buprenorphine_star\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Buprenorphine_star></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Buprenorphine_finis\"\n                                   autocomplete=\"off\"\n                                    placeholder=\"Date finished*\"\n                                   (click)=\"sub_treat_prescribed_Buprenorphine_finis.open()\"\n                                   formControlName=\"sub_treat_prescribed_Buprenorphine_finis\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Buprenorphine_finis\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Buprenorphine_finis></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Buprenorphine_encoun\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n            <div class=\"col-md-12  row\">\n                    <div class=\"col-md-4\">\n                        <label>Inpatient detox</label>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Inpatient_times\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Inpatient_star\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Date started*\"\n                                   (click)=\"sub_treat_prescribed_Inpatient_star.open()\"\n                                   formControlName=\"sub_treat_prescribed_Inpatient_star\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Inpatient_star\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Inpatient_star></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_Inpatient_finis\"\n                                   autocomplete=\"off\"\n                                    placeholder=\"Date finished*\"\n                                   (click)=\"sub_treat_prescribed_Inpatient_finis.open()\"\n                                   formControlName=\"sub_treat_prescribed_Inpatient_finis\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_Inpatient_finis\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_Inpatient_finis></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_Inpatient_encoun\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n            <div class=\"col-md-12  row\">\n                    <div class=\"col-md-4\">\n                        <label>Inpatient or residential rehab (other than detox or oral Naltrexone/Buprenorphine)</label>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_rehab_times\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_rehab_star\"\n                                   autocomplete=\"off\"\n                                   placeholder=\"Date started*\"\n                                   (click)=\"sub_treat_prescribed_rehab_star.open()\"\n                                   formControlName=\"sub_treat_prescribed_rehab_star\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_rehab_star\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_rehab_star></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"sub_treat_prescribed_rehab_finis\"\n                                   autocomplete=\"off\"\n                                    placeholder=\"Date finished*\"\n                                   (click)=\"sub_treat_prescribed_rehab_finis.open()\"\n                                   formControlName=\"sub_treat_prescribed_rehab_finis\" />\n                            <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_rehab_finis\"></mat-datepicker-toggle>\n                            <mat-datepicker #sub_treat_prescribed_rehab_finis></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_rehab_encoun\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n            <div class=\"col-md-12  row\">\n                     <div class=\"col-md-4\">\n                         <label>Outpatient detox\t</label>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_outpatient_detox_times\" />\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_outpatient_detox_star\"\n                                    autocomplete=\"off\"\n                                    placeholder=\"Date started*\"\n                                    (click)=\"sub_treat_prescribed_outpatient_detox_star.open()\"\n                                    formControlName=\"sub_treat_prescribed_outpatient_detox_star\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_outpatient_detox_star\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_outpatient_detox_star></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_outpatient_detox_finis\"\n                                    autocomplete=\"off\"\n                                     placeholder=\"Date finished*\"\n                                    (click)=\"sub_treat_prescribed_outpatient_detox_finis.open()\"\n                                    formControlName=\"sub_treat_prescribed_outpatient_detox_finis\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_outpatient_detox_finis\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_outpatient_detox_finis></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_outpatient_detox_encoun\" />\n                         </mat-form-field>\n                     </div>\n             </div>\n            <div class=\"col-md-12  row\">\n                     <div class=\"col-md-4\">\n                         <label>Outpatient counselling</label>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_outpatient_counselling_times\" />\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_outpatient_counselling_star\"\n                                    autocomplete=\"off\"\n                                    placeholder=\"Date started*\"\n                                    (click)=\"sub_treat_prescribed_outpatient_counselling_star.open()\"\n                                    formControlName=\"sub_treat_prescribed_outpatient_counselling_star\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_outpatient_counselling_star\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_outpatient_counselling_star></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_outpatient_counselling_finis\"\n                                    autocomplete=\"off\"\n                                     placeholder=\"Date finished*\"\n                                    (click)=\"sub_treat_prescribed_outpatient_counselling_finis.open()\"\n                                    formControlName=\"sub_treat_prescribed_outpatient_counselling_finis\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_outpatient_counselling_finis\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_outpatient_counselling_finis></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_outpatient_counselling_encoun\" />\n                         </mat-form-field>\n                     </div>\n             </div>\n            <div class=\"col-md-12  row\">\n                     <div class=\"col-md-4\">\n                         <label>Self help groups</label>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"No of times\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_self_help_group_times\" />\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_self_help_group_star\"\n                                    autocomplete=\"off\"\n                                    placeholder=\"Date started*\"\n                                    (click)=\"sub_treat_prescribed_self_help_group_star.open()\"\n                                    formControlName=\"sub_treat_prescribed_self_help_group_star\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_self_help_group_star\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_self_help_group_star></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput [matDatepicker]=\"sub_treat_prescribed_self_help_group_finis\"\n                                    autocomplete=\"off\"\n                                     placeholder=\"Date finished*\"\n                                    (click)=\"sub_treat_prescribed_self_help_group_finis.open()\"\n                                    formControlName=\"sub_treat_prescribed_self_help_group_finis\" />\n                             <mat-datepicker-toggle matSuffix [for]=\"sub_treat_prescribed_self_help_group_finis\"></mat-datepicker-toggle>\n                             <mat-datepicker #sub_treat_prescribed_self_help_group_finis></mat-datepicker>\n                         </mat-form-field>\n                     </div>\n                     <div class=\"col-md-2 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                             <input matInput placeholder=\"Problems encountered\"  autocomplete=\"off\"   formControlName=\"sub_treat_prescribed_self_help_group_encoun\" />\n                         </mat-form-field>\n                     </div>\n             </div>\n\n            <h6 class=\"form-group\">*Most recent treatment if more than once</h6>\n\n         <div class=\"col-md-12 row\">\n             <div class=\"col-md-4 form-group\">\n                 <label>Did you complete your treatment</label>\n             </div>\n             <div class=\"col-md-4 form-group\">\n                 <mat-radio-group formControlName=\"sub_treatment_completed\" >\n                     <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                     <mat-radio-button  value=\"no\">No</mat-radio-button>\n                 </mat-radio-group>\n\n             </div>\n             <div class=\"col-md-4 form-group\" [hidden]=\"form.get('sub_treatment_completed').value != 'no'\" >\n\n             <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If No,Please specify\"  autocomplete=\"off\"   formControlName=\"sub_treatment_recent_specify\" />\n                 </mat-form-field>\n             </div>\n         </div>\n         <div class=\"col-md-12 row\">\n             <div class=\"col-md-4 form-group\">\n                 <label>Have you experienced any laps/relapse\n                 </label>\n             </div>\n             <div class=\"col-md-4 form-group\">\n                 <mat-radio-group formControlName=\"sub_treatment_relapse\" >\n                     <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                     <mat-radio-button  value=\"no\">No</mat-radio-button>\n                 </mat-radio-group>\n\n             </div>\n             <div class=\"col-md-4 form-group\" [hidden]=\"form.get('sub_treatment_relapse').value != 'no'\" >\n\n             <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If No,Please specify\"  autocomplete=\"off\"   formControlName=\"sub_treatment_relapse_specify\" />\n                 </mat-form-field>\n             </div>\n         </div>\n\n            <h6 class=\"form-group\">Relapse patients</h6>\n\n         <div class=\"col-md-12 row\">\n             <div class=\"col-md-4 form-group\">\n                 <label>Time period between relapse (previous treatment and current treatment)</label>\n             </div>\n             <div class=\"col-md-6 form-group\">\n                 <mat-radio-group formControlName=\"relapse_period\" >\n                     <mat-radio-button  value=\"days\">Days</mat-radio-button>\n                     <mat-radio-button  value=\"weeks\">Weeks</mat-radio-button>\n                     <mat-radio-button  value=\"months\">Months</mat-radio-button>\n                     <mat-radio-button  value=\"years\">Years</mat-radio-button>\n                 </mat-radio-group>\n             </div>\n         </div>\n         <div class=\"col-md-12 row\">\n             <div class=\"col-md-4 form-group\">\n                 <label>Current treatment readiness </label>\n             </div>\n             <div class=\"col-md-6 form-group\">\n                 <mat-radio-group formControlName=\"current_treat_readiness\" >\n                     <mat-radio-button  value=\"motivated\">Patient highly motivated to receive treatment</mat-radio-button>\n                     <mat-radio-button  value=\"reasonably\">Patient reasonably motivated to receive treatment</mat-radio-button>\n                     <mat-radio-button  value=\"little\">Patient have little motivation to treatment</mat-radio-button>\n                 </mat-radio-group>\n             </div>\n         </div>\n         <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 form-group\">\n                    <label>Is there Internal/ External High risk(s) for laps or relapse?</label>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group formControlName=\"risk_of_relapse\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n                <div class=\"col-md-4 form-group\" [hidden]=\"form.get('risk_of_relapse').value != 'yes'\" >\n\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, Please specify reasons\"  autocomplete=\"off\"   formControlName=\"risk_of_relapse_specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <h6 class=\"form-group\">- What is the medication of maintenance</h6>\n            \n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 form-group\"><label for=\"\">Dependence Type</label></div>\n                <div class=\"col-md-4 form-group\"><label ></label>Medication</div>\n                <div class=\"col-md-4 form-group\"><label >Dose</label></div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">Opiate Dependence</div>\n                <div class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_methadon\"  >Methadon</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_methadon').value && form.get('opiate_methadon').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_methadon_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_Clonide\" > Clonide (Catapres)</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_Clonide').value && form.get('opiate_Clonide').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_Clonide_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_Bupemorphine\" >Bupemorphine, Subutex</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_Bupemorphine').value && form.get('opiate_Bupemorphine').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_Bupemorphine_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_suboxon\" >Bupermorphine, Naloxon (Suboxon)</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_suboxon').value && form.get('opiate_suboxon').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_suboxon_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_Naloxon\" >Naloxon</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_Naloxon').value && form.get('opiate_Naloxon').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_Naloxon_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_Naltrexon\" >Naltrexon Hydrochloride</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_Naltrexon').value && form.get('opiate_Naltrexon').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_Naltrexon_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_Naltrexon_xr\" >Naltrexon XR (Vial)</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_Naltrexon_xr').value && form.get('opiate_Naltrexon_xr').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_Naltrexon_xr_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_LOFex\" >LoFexidineHydrochlordie</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('opiate_LOFex').value && form.get('opiate_LOFex').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_LOFex_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-3 form-group\">\n                            <mat-checkbox   formControlName=\"opiate_others\" >Others</mat-checkbox>\n                        </div>\n                        <div [hidden]=\"!form.get('opiate_others').value && form.get('opiate_others').value != 'true'\"  class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If others, please specify\"  autocomplete=\"off\"   formControlName=\"opiate_others_specify\" />\n                            </mat-form-field>\n                            </div>\n                        <div  [hidden]=\"!form.get('opiate_others').value && form.get('opiate_others').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"opiate_others_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </div>\n\n\n\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">Alcohol Dependence\t</div>\n                <div class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"alcohol_acamprosate\"  >Acamprosate Calcium\t</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('alcohol_acamprosate').value && form.get('alcohol_acamprosate').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"alcohol_acamprosate_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"alcohol_disulfirm\" > Disulfirm</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('alcohol_disulfirm').value && form.get('alcohol_disulfirm').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"alcohol_disulfirm_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"alcohol_naltrexon\" >Naltrexon Hydrochloride</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('alcohol_naltrexon').value && form.get('alcohol_naltrexon').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"alcohol_naltrexon_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"alcohol_naltrexon_xr\" >Naltrexon XR (Vial)</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('alcohol_naltrexon_xr').value && form.get('alcohol_naltrexon_xr').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"alcohol_naltrexon_xr_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">Benzodiazphine dependence</div>\n                <div class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"Benzodiazphine_flumazenil\"  >Flumazenil(Romazicon</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('Benzodiazphine_flumazenil').value && form.get('Benzodiazphine_flumazenil').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"Benzodiazphine_flumazenil_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-3 form-group\">\n                            <mat-checkbox   formControlName=\"Benzodiazphine_others\" >Others</mat-checkbox>\n                        </div>\n                        <div [hidden]=\"!form.get('Benzodiazphine_others').value && form.get('Benzodiazphine_others').value != 'true'\"  class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If others, please specify\"  autocomplete=\"off\"   formControlName=\"Benzodiazphine_others_specify\" />\n                            </mat-form-field>\n                        </div>\n                        <div  [hidden]=\"!form.get('Benzodiazphine_others').value && form.get('Benzodiazphine_others').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"Benzodiazphine_others_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">Nicotine Dependence</div>\n                <div class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"nicotine_vaenicline\"  >Vaenicline (Champix, Tartrate)</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('nicotine_vaenicline').value && form.get('nicotine_vaenicline').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"nicotine_vaenicline_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"nicotine_bupropion\" > Bupropion</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('nicotine_bupropion').value && form.get('nicotine_bupropion').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"nicotine_bupropion_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"nicotine_nicotinnell\" >Nicotinnell Patches</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('nicotine_nicotinnell').value && form.get('nicotine_nicotinnell').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"nicotine_nicotinnell_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-6 form-group\">\n                            <mat-checkbox   formControlName=\"nicotine_nicotinnell_gum\" >Nicotinnell Chewing Gum\t</mat-checkbox>\n                        </div>\n                        <div  [hidden]=\"!form.get('nicotine_nicotinnell_gum').value && form.get('nicotine_nicotinnell_gum').value != 'true'\" class=\"col-md-6 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Dose\"  autocomplete=\"off\"   formControlName=\"nicotine_nicotinnell_gum_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <h6 class=\"form-group\">Other medication (cognitive, behavioural)</h6>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">\n                    <mat-checkbox   formControlName=\"other_medic_antipsycotic\"  >Antipsycotic</mat-checkbox>\n                </div>\n                <div   class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('other_medic_antipsycotic').value && form.get('other_medic_antipsycotic').value != 'true'\">\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Aripiprazole (Abilify) Dose\"     formControlName=\"other_medic_Antipsycotic_abilify_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Olanzapine (Zebraxa) Dose\"     formControlName=\"other_medic_Antipsycotic_zebraxa_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Quetiapine (Seriquol) Dose\"     formControlName=\"other_medic_Antipsycotic_seriquol_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Risperidone (Risperdal) Dose\"     formControlName=\"other_medic_Antipsycotic_risperdal_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Ziprasidone(Zeldox, Geodon) Dose\"     formControlName=\"other_medic_Antipsycotic_ziprasidone_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Haloperidol (Haldol) Dose\"     formControlName=\"other_medic_Antipsycotic_haldol_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Zuclopenthixol(Cisordinol, Clopixol, Acuphase) Dose\"     formControlName=\"other_medic_Antipsycotic_zuclopenthixol_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Others\"     formControlName=\"other_medic_Antipsycotic_others_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">\n                    <mat-checkbox   formControlName=\"other_medic_Antidepressants\"  > Anti-depressants</mat-checkbox>\n                </div>\n                <div   class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('other_medic_Antidepressants').value && form.get('other_medic_Antidepressants').value != 'true'\">\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Amitryptyline (Tryptizol, Elavil, Endep)\"     formControlName=\"other_medic_Antidepressants_amitryptyline_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Clomiparamine (Anafranil) Dose\"     formControlName=\"other_medic_Antidepressants_clomiparamine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Fluoxetine (Prozac, Sarafem, Ladose & Fontex) Dose\"     formControlName=\"other_medic_Antidepressants_fluxetine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Venlafaxine (Effexor)\"     formControlName=\"other_medic_Antidepressants_effexor_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Paroxetine (Seroxate) Dose\"     formControlName=\"other_medic_Antidepressants_seroxate_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Escitalopram (Cireplex, Lexapro, Esipram) Dose\"     formControlName=\"other_medic_Antidepressants_escitalopram_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Sertraline(Zoloft, Lustral) Dose\"     formControlName=\"other_medic_Antidepressants_sertraline_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Mirtazapine (Remeron, Soltab) Dose\"     formControlName=\"other_medic_Antidepressants_mirtazapine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Bupropion Hydrochloride SR\"     formControlName=\"other_medic_Antidepressants_bupropion_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Others\"     formControlName=\"other_medic_Antidepressants_others_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Dose\"     formControlName=\"other_medic_Antidepressants_others_dose\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">\n                    <mat-checkbox   formControlName=\"other_medic_central_nervous\"  > Central nervous stimuli\t</mat-checkbox>\n                </div>\n                <div   class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('other_medic_central_nervous').value && form.get('other_medic_central_nervous').value != 'true'\">\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Atomoxetine (Strattera)\"     formControlName=\"other_medic_central_nervous_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">\n                    <mat-checkbox   formControlName=\"other_medic_hypnotic_anxiolytics\"  >Hypnotic & Anxiolytics</mat-checkbox>\n                </div>\n                <div   class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('other_medic_hypnotic_anxiolytics').value && form.get('other_medic_hypnotic_anxiolytics').value != 'true'\">\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Zopiclone (Imovane) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_imovane_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Diazepam (Valium) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_diazepam_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Chlordiazepoxide (Librium) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_librium_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Buspirone (BuSpar) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_buspar_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Alprazolam(Xanax) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_alprazolam_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Lorazepam (Ativan) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_lorazepam_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Hydroxyzine (Vistaril, Atarax) Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_hydroxyzine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Others\"     formControlName=\"other_medic_hypnotic_anxiolytics_others_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Dose\"     formControlName=\"other_medic_hypnotic_anxiolytics_others_dose\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <hr/>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-4 my-auto form-group\">\n                    <mat-checkbox   formControlName=\"other_medic_Antiepileptics\"  >Antiepileptics& Anticonvulsants</mat-checkbox>\n                </div>\n                <div   class=\"col-md-8 \">\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('other_medic_Antiepileptics').value && form.get('other_medic_Antiepileptics').value != 'true'\">\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Carbamazepine (Tegretol, Equetro, Carbatrol) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_carbamazepine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Clonazepam (Klonopin) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_klonopin_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Gabapentin (Neurontin) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_gabapentin_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Lamotrigine (Lamictal) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_lamotrigine_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Topiramate (Topamax) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_topamax_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Phenoytoin Sodium (Dilantin) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_dilantin_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Sodium Valproate (Epilim) Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_epilim_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Others\"     formControlName=\"other_medic_hypnotic_antiepileptics_others_text\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input  placeholder=\"Dose\"     formControlName=\"other_medic_hypnotic_antiepileptics_others_dose\"  matInput autocomplete=\"off\"/>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\n    <kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n        <div class=\"kt-form kt-margin-b-30\">\n            <div>\n                <kt-portlet-header [title]=\"'Participant Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-participant-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-sb-participant-details>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Clinical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-sb-clinical-details>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Lifestyle Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-life-style [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-sb-life-style>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Medical History Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-medical-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedical></kt-sb-medical-history>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Substance Dependence History Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-dependence-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appDependence></kt-sb-dependence-history>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Family History of Substance Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamily></kt-sb-family-history>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Substance Dependence Treatment'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-treatment [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appTreatment></kt-sb-treatment>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Out Patients Followup'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-patients-followup [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appPatients></kt-sb-patients-followup>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Test Section'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-test-section [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appTest></kt-sb-test-section>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Diabetic Patients Only'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-diabetic-patients [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appDiabetic></kt-sb-diabetic-patients>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Biochemical'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appBiochemical></kt-sb-biochemical>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Medications'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-medications [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedications></kt-sb-medications>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Family History'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-family-history-without-sb [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyWOS></kt-sb-family-history-without-sb>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"' Family Pedigree'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-sb-family-pedigree [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyPedigree></kt-sb-family-pedigree>\n                </kt-portlet-body>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <!-- PORTLET LOADING | Binded to TABLE Datasource -->\n    <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n    <kt-portlet-header [title]=\"'Manage Substance Dependence'\" [class]=\"'kt-portlet__head--lg'\">\n        <ng-container ktPortletTools>\n            <button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n            <!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n            <!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n        </ng-container>\n    </kt-portlet-header>\n    <!-- end::Header -->\n\n    <!-- start::Body (attribute: ktPortletBody) -->\n    <kt-portlet-body>\n        <!-- start::FILTERS & GROUP ACTIONS -->\n        <div class=\"kt-form kt-margin-b-30\">\n            <!-- start::FILTERS -->\n            <div class=\"kt-form__filtration\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n                            <!--<mat-hint align=\"start\">-->\n                            <!--<strong>Search</strong> in all fields-->\n                            <!--</mat-hint>-->\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div #MainBody class=\"mat-table__wrapper col-md-12\">\n            <mat-table class=\"lmat-elevation-z8\"\n                       [dataSource]=\"dataSource\"\n                       matSort\n                       #sort1=\"matSort\"\n\n            >\n                <div matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n                </div>\n                <div matColumnDef=\"1\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n                </div>\n                <div matColumnDef=\"2\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n                        <a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n                    </mat-cell>\n                </div>\n                <div matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">\n                        <button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n                            <mat-icon>create</mat-icon>\n                        </button>&nbsp;\n                        <button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n                        <a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n                            <mat-icon>print</mat-icon>\n                        </a>\n                    </mat-cell>\n                </div>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n            </mat-table>\n            <div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n            <div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n        </div>\n\n\n        <!-- start: BOTTOM -->\n        <div class=\"mat-table__bottom\">\n            <!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n            <!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n            <!-- MATERIAL PAGINATOR | Binded to dasources -->\n            <!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n            <mat-paginator [length]=\"lastQuery.totalRecords\"\n                           [pageSize]=\"10\"\n                           (page)=\"getPaginatorData($event)\"\n                           [showFirstLastButtons]=\"true\"\n                           [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n            </mat-paginator>\n\n            <!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n        </div>\n        <!-- end: BOTTOM -->\n    </kt-portlet-body>\n    <!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <kt-portlet-header [title]=\"'Substance Dependence Forms'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n        <ng-container ktPortletTools>\n            <a [routerLink]=\"[ formId ? '../../' : '../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n               matTooltip=\"Back to the forms list\">\n                <i class=\"la la-arrow-left\"></i>\n                <span class=\"kt-hidden-mobile\">Back</span>\n            </a>\n            <a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n               mat-raised-button matTooltip=\"Save & Continue\">\n                <i class=\"la la-save\"></i>\n                <span class=\"kt-hidden-mobile\">Save</span>\n            </a>\n\n        </ng-container>\n    </kt-portlet-header>\n\n    <kt-portlet-body>\n        <mat-tab-group [(selectedIndex)]=\"selectedTab\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Details\n                </ng-template>\n                <kt-sb-participant-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-sb-participant-details>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n                    Clinical Details\n                </ng-template>\n                <kt-sb-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-sb-clinical-details>\n            </mat-tab>\n            <mat-tab>\n            <ng-template mat-tab-label>\n                <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                Lifestyle Details\n            </ng-template>\n            <kt-sb-life-style [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appLifestyle></kt-sb-life-style>\n        </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Medical History Details\n                </ng-template>\n                <kt-sb-medical-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedical></kt-sb-medical-history>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Substance Dependence History Details\n                </ng-template>\n                <kt-sb-dependence-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appDependence></kt-sb-dependence-history>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Family History of Substance Details\n                </ng-template>\n                <kt-sb-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamily></kt-sb-family-history>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Substance Dependence Treatment\n                </ng-template>\n                <kt-sb-treatment [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appTreatment></kt-sb-treatment>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Out Patients Followup\n                </ng-template>\n                <kt-sb-patients-followup [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appPatients></kt-sb-patients-followup>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Test Section\n                </ng-template>\n                <kt-sb-test-section [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appTest></kt-sb-test-section>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Diabetic Patients Only\n                </ng-template>\n                <kt-sb-diabetic-patients [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appDiabetic></kt-sb-diabetic-patients>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n                    Biochemical\n                </ng-template>\n                <kt-sb-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appBiochemical></kt-sb-biochemical>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-pills\"></i>\n                    Medications\n                </ng-template>\n                <kt-sb-medications [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedications></kt-sb-medications>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Family History\n                </ng-template>\n                <kt-sb-family-history-without-sb [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyWOS></kt-sb-family-history-without-sb>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Family Pedigree\n                </ng-template>\n                <kt-sb-family-pedigree [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyPedigree></kt-sb-family-pedigree>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-file\"></i>\n                    Document Upload\n                </ng-template>\n                <kt-doc-upload  #appDocUpload></kt-doc-upload>\n            </mat-tab>\n        </mat-tab-group>\n    </kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L3N1YnN0YW5jZS1kZXBlbmRlbmNlL19zdWJzL2RvYy11cGxvYWQvQzpcXEphbmVcXFByb2plY3RzXFxKYW5lXFxLaGFsaWZhQ0VSQS9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxmb3JtLW1hbmFnZW1lbnRcXHN1YnN0YW5jZS1kZXBlbmRlbmNlXFxfc3Vic1xcZG9jLXVwbG9hZFxcZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L3N1YnN0YW5jZS1kZXBlbmRlbmNlL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9zdWJzdGFuY2UtZGVwZW5kZW5jZS9fc3Vicy9kb2MtdXBsb2FkL2RvYy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICAgICAgICM0NTRjYWQ7XG4kZGFyay10ZXh0OiAgICM1ZjY5ODI7XG5cbi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWU7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cblxuICAgICYuaG92ZXIge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgJHRoZW1lO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICNlZWU7XG5cbiAgICAgICNzdGFydCB7XG4gICAgICAgIGkuZmEge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGkuZmEge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG4gICNyZXNwb25zZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI21lc3NhZ2VzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gICNmaWxlLWltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwIGF1dG8gLjVyZW0gYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICNub3RpbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBwcm9ncmVzcyxcbiAgLnByb2dyZXNzIHtcbiAgICAvLyBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGRhcmtlbigkdGhlbWUsOCUpIDAlLCAkdGhlbWUgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGRpdiB7XG4gICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICBjb2xvcjogJGRhcmstdGV4dDtcbiAgfVxuICAuYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAuNXJlbSAuNXJlbSAxcmVtIC41cmVtO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lO1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmZpbGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMmQ2O1xufVxuXG4uZmlsZS1yb3d7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSIsIi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG59XG4udXBsb2FkZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG59XG4udXBsb2FkZXIgbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0NTRjYWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xufVxuLnVwbG9hZGVyIGxhYmVsLmhvdmVyICNzdGFydCBpLmZhIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwLjM7XG59XG4udXBsb2FkZXIgI3N0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjc3RhcnQuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjc3RhcnQgaS5mYSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UgI21lc3NhZ2VzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnVwbG9hZGVyICNmaWxlLWltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDAgYXV0byAwLjVyZW0gYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyIHByb2dyZXNzLFxuLnVwbG9hZGVyIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNmOTAgMCUsICM0NTRjYWQgNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBkaXYge1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgY29sb3I6ICM1ZjY5ODI7XG59XG4udXBsb2FkZXIgLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjNDU0Y2FkO1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DocUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocUploadComponent", function() { return DocUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");








var DocUploadComponent = /** @class */ (function () {
    function DocUploadComponent(service, cdr, interactionService, splashService, _snackBar, activatedRoute) {
        this.service = service;
        this.cdr = cdr;
        this.interactionService = interactionService;
        this.splashService = splashService;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.myFiles = [];
        this.sMsg = '';
        this.saveFormId = 0;
        this.error = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__["mediaPath"];
    }
    DocUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.saveFormId = id;
            }
        });
        if (!this.saveFormId) {
            this.interactionService._Refid$.subscribe(function (id) {
                _this.saveFormId = id;
            });
        }
        else {
            this.service.GetDocuments(this.saveFormId).subscribe(function (res) {
                if (res) {
                    for (var i = 0; i < res.length; i++) {
                        res[i].isUpload = true;
                        res[i].name = res[i].AttributeValue;
                        _this.myFiles.push(res[i]);
                    }
                }
            });
        }
    };
    //this.cd.detectChanges();
    DocUploadComponent.prototype.onSelectFile = function (e) {
        //if (event.target.files && event.target.files[0]) {
        //  var filesAmount = event.target.files.length;
        //  for (let i = 0; i < filesAmount; i++) {
        //    var reader = new FileReader();
        //    reader.readAsDataURL(event.target.files[i]);
        //    reader.onload = (event) => {
        //
        //      let obj={obj:
        //          reader['result']
        //      }
        //      //console.log(typeof obj);
        //      //console.log(event.target);
        //      //this.urls.push(event.target.result);
        //
        //      //this.form.patchValue({
        //      //  document:event.target.result
        //      //})
        //      //
        //
        //    }
        //
        //  }
        //}
        for (var i = 0; i < e.target.files.length; i++) {
            e.target.files[i].isUpload = false;
            this.myFiles.push(e.target.files[i]);
        }
    };
    DocUploadComponent.prototype.uploadDocuments = function () {
        var _this = this;
        var frmData = new FormData();
        var data = [];
        for (var i = 0; i < this.myFiles.length; i++) {
            if (this.myFiles[i].isUpload == false) {
                frmData.append("file", this.myFiles[i]);
                data.push({
                    "FormAttributeValueID": 0,
                    "SavedFormID": this.saveFormId,
                    "AttributeValue": this.myFiles[i].name
                });
            }
        }
        this.splashService.splashScreen({ isLoading: true, message: "UPLOADING" });
        this.service.postDocumentUpload(frmData, this.saveFormId).subscribe(function (res) {
            _this.service.AddDocuments(data).subscribe(function (res) {
                _this._snackBar.open("Data has been added successfully!", 'Ok', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                });
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.markUsUploaded();
            });
        });
    };
    DocUploadComponent.prototype.markUsUploaded = function () {
        for (var i = 0; i < this.myFiles.length; i++) {
            this.myFiles[i].isUpload = true;
        }
        this.cdr.detectChanges();
    };
    DocUploadComponent.prototype.onSubmit = function () {
        if (this.saveFormId == 0) {
            this.sMsg = "First Create Sample ID, then upload the documents";
            this.error = true;
        }
        else {
            this.uploadDocuments();
        }
    };
    DocUploadComponent.prototype.deleteDocument = function (file, index) {
        var _this = this;
        this.myFiles.splice(index, 1);
        var data = [];
        if (file.isUpload) {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this.service.GetDocuments(this.saveFormId).subscribe(function (res) {
                if (res) {
                    _this.splashService.splashScreen({ isLoading: true, message: "DELETING" });
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].AttributeValue == file.name) {
                            data.push(res[i]);
                            _this.service.DeleteDocuments(data).subscribe(function (res) {
                                _this._snackBar.open("Data has been deleted successfully!", 'Ok', {
                                    duration: 5000,
                                    verticalPosition: 'bottom',
                                    horizontalPosition: 'center'
                                });
                                _this.splashService.splashScreen({ isLoading: false, message: "" });
                            });
                        }
                    }
                }
            });
        }
    };
    DocUploadComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__["VitamindService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__["ComponentInteractionService"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    DocUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-doc-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__["VitamindService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__["ComponentInteractionService"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], DocUploadComponent);
    return DocUploadComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SbBiochemicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbBiochemicalComponent", function() { return SbBiochemicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbBiochemicalComponent = /** @class */ (function () {
    function SbBiochemicalComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Biochemical Patients";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbBiochemicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbBiochemicalComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "fasting_glucose_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fasting_glucose_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "random_glucose_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "random_glucose_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_tolerance_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_tolerance_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hba1c_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hba1c_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "total_cholesterol_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "total_cholesterol_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Triglyceride_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Triglyceride_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HDL_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HDL_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LDL_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LDL_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "microablumin_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "microablumin_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "creatinine_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "creatinine_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Urea_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Urea_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "vitamind_coll_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "vitamind_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbBiochemicalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 11).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbBiochemicalComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbBiochemicalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbBiochemicalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbBiochemicalComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbBiochemicalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbBiochemicalComponent.prototype, "disableInput", void 0);
    SbBiochemicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-biochemical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-biochemical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbBiochemicalComponent);
    return SbBiochemicalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SbClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbClinicalDetailsComponent", function() { return SbClinicalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbClinicalDetailsComponent = /** @class */ (function () {
    function SbClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    SbClinicalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
        this.createForm();
    };
    SbClinicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BodyWeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Height": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BodyMass": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Waist": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureSystolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureDiastolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    SbClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.onSubmit();
        });
    };
    SbClinicalDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample1(data_1, true).subscribe(function (res) {
                            if (res) {
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbClinicalDetailsComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "BodyMass": (this.form.controls["BodyWeight"].value / (this.form.controls["Height"].value * this.form.controls["Height"].value)).toFixed(2) });
        }
    };
    SbClinicalDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbClinicalDetailsComponent.prototype, "disableInput", void 0);
    SbClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbClinicalDetailsComponent);
    return SbClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SbDependenceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbDependenceHistoryComponent", function() { return SbDependenceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbDependenceHistoryComponent = /** @class */ (function () {
    function SbDependenceHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Substance Dependence History Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbDependenceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbDependenceHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "substance": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medhadone_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_symoron_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_dolophine_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_amidone_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_physeptone_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_heptadon_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_methadose_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methadone_disket_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Buprenorphine_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_subutex_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_suboxone_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_buprenex_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Opiates_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_heroin_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_morphine_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_codine_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxycodon_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_oxymorphon_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydrocodon_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_hydromorphon_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiates_tramadol_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_valium_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_librium_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_halcion_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_prosom_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_xanax_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ativan_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_klonopin_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_restoril_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_rohypnol_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_dalmane_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_imovane_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_ambien_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_lunesta_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tranquilizers_others_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_marijuana_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_hashish_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_dope_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cannabis_synthetic_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_amphetamine_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_crystal_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_methamphetamine_hcl_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_dextroamphetamine_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_mdma_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_coke_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_crack_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cocaine_snow_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Hallucinogens_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_lsd_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hallucinogens_mushroom_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_petrolume_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_toulene_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_acetone_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_aerosols_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Inhalants_nitrites_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_Amobarbital_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_pentobarbital_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Barbiturates_nembutal_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_beer_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wiseky_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_vodka_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_tequila_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_gin_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_rum_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_wines_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigarette_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_cigar_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_midwakh_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "tobacco_shisha_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "substance_dependence_his_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_state": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_first": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_total": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_amn": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_freq": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_admin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_seizures": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_blackout": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_hallucination": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_chest_pain": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_sleep_dis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_anxiety": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_nausea": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_Diarrhea": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_eating_problem": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_fatigue": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_overdose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_headache": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_dizziness": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_paranoid": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_palpitation": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_uncontrollable": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_hyperactive": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_vomitting": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_constipation": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_urinating": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_irritability": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_symptoms_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "substance_diagnosed": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "drug_dosage": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_time_frame": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_state_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_first_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_total_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_amn_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_freq_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_admin_1": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_state_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_first_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_total_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_amn_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_freq_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "prescribed_others_admin_2": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbDependenceHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbDependenceHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbDependenceHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.onSubmit();
        });
    };
    SbDependenceHistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbDependenceHistoryComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbDependenceHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbDependenceHistoryComponent.prototype, "disableInput", void 0);
    SbDependenceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-dependence-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-dependence-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbDependenceHistoryComponent);
    return SbDependenceHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SbDiabeticPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbDiabeticPatientsComponent", function() { return SbDiabeticPatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbDiabeticPatientsComponent = /** @class */ (function () {
    function SbDiabeticPatientsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Test Section";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbDiabeticPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbDiabeticPatientsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "diabetesMellitus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "age": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spec_app_retinopathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spec_app_neuropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "neuropathy_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spec_app_cva": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spec_app_nephropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nephropathy_albuminuria_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nephropathy_eGFR_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spec_app_cad": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_comp_other_check": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_comp_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_none": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_tabletsonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_diettablets": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_diettabletsinsulin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_dietonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_insulinonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_dietinsulin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_man_unknown": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "current_diabetes_man_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "current_diabetes_man_other_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbDiabeticPatientsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 10).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbDiabeticPatientsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbDiabeticPatientsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.onSubmit();
        });
    };
    SbDiabeticPatientsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbDiabeticPatientsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbDiabeticPatientsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbDiabeticPatientsComponent.prototype, "disableInput", void 0);
    SbDiabeticPatientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-diabetic-patients',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-diabetic-patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbDiabeticPatientsComponent);
    return SbDiabeticPatientsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: SbFamilyHistoryWithoutSbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFamilyHistoryWithoutSbComponent", function() { return SbFamilyHistoryWithoutSbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbFamilyHistoryWithoutSbComponent = /** @class */ (function () {
    function SbFamilyHistoryWithoutSbComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbFamilyHistoryWithoutSbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbFamilyHistoryWithoutSbComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "diabetes_family_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diab_comp_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "obesity_family_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hypertension_family_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dyslip_family_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbFamilyHistoryWithoutSbComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 13).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbFamilyHistoryWithoutSbComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbFamilyHistoryWithoutSbComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbFamilyHistoryWithoutSbComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbFamilyHistoryWithoutSbComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbFamilyHistoryWithoutSbComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbFamilyHistoryWithoutSbComponent.prototype, "disableInput", void 0);
    SbFamilyHistoryWithoutSbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-family-history-without-sb',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-family-history-without-sb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbFamilyHistoryWithoutSbComponent);
    return SbFamilyHistoryWithoutSbComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SbFamilyHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFamilyHistoryComponent", function() { return SbFamilyHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbFamilyHistoryComponent = /** @class */ (function () {
    function SbFamilyHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History of Substance Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbFamilyHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbFamilyHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "drug_sibling": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sib_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "drug_mother": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "mother_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "drug_father": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "father_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "drug_others_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "others_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_sib": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_mother": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_mother_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_father": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_father_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_others_his": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_others_drug": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "completed_fam": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "completed_fam_reason": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "completed_fam_reason_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbFamilyHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbFamilyHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbFamilyHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbFamilyHistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbFamilyHistoryComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbFamilyHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbFamilyHistoryComponent.prototype, "disableInput", void 0);
    SbFamilyHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-family-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbFamilyHistoryComponent);
    return SbFamilyHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SbFamilyPedigreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFamilyPedigreeComponent", function() { return SbFamilyPedigreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");









var SbFamilyPedigreeComponent = /** @class */ (function () {
    function SbFamilyPedigreeComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues, splashService, cd) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.splashService = splashService;
        this.cd = cd;
        this.title = "Family History Details";
        this.saveFormId = 0;
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__["mediaPath"];
        this.isFormSubmit = false;
    }
    SbFamilyPedigreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
                _this.saveFormId = id;
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbFamilyPedigreeComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "family_pedigree": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    SbFamilyPedigreeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 14).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbFamilyPedigreeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
        if (this.url == "" && this.form.controls["family_pedigree"].value) {
            this.url = this.mediaPath + "/images/" + this.formId + "_" + this.form.controls["family_pedigree"].value;
        }
    };
    SbFamilyPedigreeComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.saveFormId).subscribe(function (res) {
            _this.form.patchValue({ "family_pedigree": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    SbFamilyPedigreeComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbFamilyPedigreeComponent.prototype.updatedSingleAttributes = function (mode) {
        var _this = this;
        var data = {
            "FormAttributeID": 1165,
            "SavedFormID": this.saveFormId,
            "AttributeValue": this.form.value["family_pedigree"]
        };
        if (!mode) {
            this.splashService.splashScreen({
                isLoading: true,
                message: "INSERTING"
            });
            this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                });
            });
        }
        else {
            var id = this.saveFormId;
            this.splashService.splashScreen({
                isLoading: true,
                message: "UPDATING"
            });
            this._service.getFormAttributeValues(id).subscribe(function (res) {
                if (res) {
                    for (var j = 0; j < res.length; j++) {
                        if (data["FormAttributeID"] == res[j]["FormAttributeID"]) {
                            data["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                            break;
                        }
                    }
                    _this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been updated successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    });
                }
            });
        }
    };
    SbFamilyPedigreeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            if (this.fileToUpload && !this.fileUploadSuccess) {
                this.uploadImage();
                return;
            }
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                if (this.fileToUpload) {
                    this.updatedSingleAttributes(true);
                }
                if (data_1.length == 0)
                    return;
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                if (this.fileToUpload) {
                    this.updatedSingleAttributes(false);
                }
                this._service.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbFamilyPedigreeComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.fileToUpload = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                if (event.target) {
                    _this.url = reader.result;
                    _this.fileUploadSuccess = false;
                    _this.cd.detectChanges();
                }
            };
        }
    };
    SbFamilyPedigreeComponent.prototype.onClick = function () {
        // const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        // fileUpload.click();
    };
    SbFamilyPedigreeComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbFamilyPedigreeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbFamilyPedigreeComponent.prototype, "disableInput", void 0);
    SbFamilyPedigreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-family-pedigree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-family-pedigree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SbFamilyPedigreeComponent);
    return SbFamilyPedigreeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SbLifeStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbLifeStyleComponent", function() { return SbLifeStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbLifeStyleComponent = /** @class */ (function () {
    function SbLifeStyleComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Lifestyle Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    SbLifeStyleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbLifeStyleComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "Walk": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Walk_others_Specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Walk_IfYes": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Healthy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SpecifyHealthy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "smoking_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    SbLifeStyleComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbLifeStyleComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbLifeStyleComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.onSubmit();
        });
    };
    SbLifeStyleComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbLifeStyleComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbLifeStyleComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbLifeStyleComponent.prototype, "disableInput", void 0);
    SbLifeStyleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-life-style',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-life-style.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbLifeStyleComponent);
    return SbLifeStyleComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SbMedicalHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbMedicalHistoryComponent", function() { return SbMedicalHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");







var SbMedicalHistoryComponent = /** @class */ (function () {
    function SbMedicalHistoryComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.title = "Medical History Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbMedicalHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbMedicalHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "smoking_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_condition": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "asthma_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "asthma_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_circle": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_circle_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_heart": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_heart_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_heart_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_high_pressure": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_high_pressure_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_high_pressure_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_anemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_anemia_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_anemia_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_ulcer": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_ulcer_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_ulcer_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cancer_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cancer_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_kidney": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_kidney_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_kidney_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_HepatitisCircle": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_HepatitisCircleType": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_HepatitisCircle_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_HepatitisCircle_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_liver": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_liver_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_liver_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Seizures": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Seizures_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Seizures_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_gastro": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_gastro_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_gastro_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Sinusitis": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Sinusitis_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Sinusitis_pre_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cough": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cough_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_cough_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_skin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_skin_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_skin_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Arthritis": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Arthritis_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Arthritis_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hallucination": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hallucination_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hallucination_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Depression": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Depression_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_Depression_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hiv": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hiv_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_hiv_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_others_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_others_pre": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_others_post": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "all_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "intolerance_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dependence_weight": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "reason_weight": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "surgery": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ind_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "where_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Reasaon_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medical_pain": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "when_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "source_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dur_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_treatment": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medic_treat_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbMedicalHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbMedicalHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbMedicalHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbMedicalHistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbMedicalHistoryComponent.ctorParameters = function () { return [
        { type: _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbMedicalHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbMedicalHistoryComponent.prototype, "disableInput", void 0);
    SbMedicalHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-medical-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-medical-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], SbMedicalHistoryComponent);
    return SbMedicalHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SbMedicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbMedicationsComponent", function() { return SbMedicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");







var SbMedicationsComponent = /** @class */ (function () {
    function SbMedicationsComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.title = " Biochemical Patients";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbMedicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbMedicationsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "inhibit_ace": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "perindop": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "captopril": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "enalapril": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lisinop": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medications_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_arbs": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "losartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Valsartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "beta_blockers": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atenolol": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "bisopr": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "beta_other_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diurectics": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "indapam": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hydroch": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fruse": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diur_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CA_channel_blockers": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amlodip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nifedip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "verapamil": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ca_channer_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "others_oh": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methyldop": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_statins": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "simvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atorvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "rosuvas": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_OtherD": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_fibrates": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gemfib": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fenofib": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fibrat1": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fibrat2": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_Biguanides": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Metformin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_sus": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glibenclamide": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glimepir": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gliclazide_mr": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pride_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_other_su": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_thiazolid": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pioglit": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_thiazolid_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_meglitin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_Nateglinide": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_repaglin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_glucosid": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "acarbose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_dipeptidyl": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_sitaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_vildaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_saxaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_linaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_peptid_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pramlintide": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_other_peptid": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_incretinm": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_exenatide": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_liraglut": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "exenatide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_insulin_lin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lispro_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aspart_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glulisine_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "regular_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nph_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Detemir_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glargine": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_insulin_lin_combination": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "suplements_vitamind3": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "suplements_OtherVit": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbMedicationsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 12).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbMedicationsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbMedicationsComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbMedicationsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbMedicationsComponent.ctorParameters = function () { return [
        { type: _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbMedicationsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbMedicationsComponent.prototype, "disableInput", void 0);
    SbMedicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-medications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-medications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], SbMedicationsComponent);
    return SbMedicationsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: MY_FORMATS, SbParticipantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbParticipantDetailsComponent", function() { return SbParticipantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);













// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var moment = moment__WEBPACK_IMPORTED_MODULE_13___default.a || moment__WEBPACK_IMPORTED_MODULE_13__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'M YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'M YYYY',
    },
};
var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_9__["Countries"];
var AVAILABLE_PLACE = _core_utils_countries__WEBPACK_IMPORTED_MODULE_9__["Countries"];
var SbParticipantDetailsComponent = /** @class */ (function () {
    function SbParticipantDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.cd = cd;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Participation Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.isSampleSubmit = false;
        this.isFormSubmit = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_10__["mediaPath"];
    }
    SbParticipantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbParticipantDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "profilePicture": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Collected_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Collected_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nrc_id": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dob": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "country": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PlaceOfBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "employment_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "employment_status_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "employment_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eduLevel": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity_mixed_specify_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inpatient_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Admission_Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "method_adm": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "method_adm_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "participant_comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["country"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlace = this.form.controls["PlaceOfBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterPlaceofBirth(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    SbParticipantDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbParticipantDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
        if (this.url == "" && this.form.controls["profilePicture"].value) {
            this.url = this.mediaPath + "/images/" + this.formId + "_" + this.form.controls["profilePicture"].value;
        }
    };
    // createSampleId() {
    //   this._service.createSampleId(2, this.form.value["Sample"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    //     if (!this.formId) {
    //       this.saveFormId = res;
    //       this._interactionService.sendRefId(parseInt(this.saveFormId));
    //     }
    //     this.splashService.splashScreen({
    //       isLoading : false,
    //       message : ""
    //     })
    //     this.isSampleSubmit = true;
    //     this.onSubmit();
    //   });
    // }
    SbParticipantDetailsComponent.prototype.updatedSingleAttributes = function (mode) {
        var _this = this;
        var data = {
            "FormAttributeID": 1166,
            "SavedFormID": this.saveFormId,
            "AttributeValue": this.form.value["profilePicture"]
        };
        if (!mode) {
            this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                //console.log("Done!!")
            });
        }
        else {
            this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
                if (res) {
                    for (var j = 0; j < res.length; j++) {
                        if (data["FormAttributeID"] == res[j]["FormAttributeID"]) {
                            data["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                            break;
                        }
                    }
                    _this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                        //console.log("Done!!")
                    });
                }
            });
        }
    };
    SbParticipantDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(2, this.form.value["Sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    SbParticipantDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var savedFormID = 0;
        if (this.formId === undefined) {
            savedFormID = 0;
            /*  //console.log("Saved Form ID"+savedFormID);
             //console.log("Form ID"+this.formId); */
        }
        else
            savedFormID = this.formId;
        /*  if(!this.form.value["savedFormID"] && !this.saveFormId ){  */
        if (!this.saveFormId) {
            /*   if(!this.form.value["savedFormID"]  ){ */
            this.createSampleId();
            /*     //console.log("Saved Form ID"+savedFormID); */
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            if (this.fileToUpload && !this.fileUploadSuccess) {
                this.uploadImage();
                return;
            }
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
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
                if (this.fileToUpload) {
                    this.updatedSingleAttributes(false);
                }
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
                this.form.value["savedFormID"] = 0;
                /*  //console.log("after Insert saveformid"+this.saveFormId);
                 //console.log("after Insert savedFormID"+this.form.value["savedFormID"]); */
            }
        }
    };
    // onSubmit() {
    //   if (!this.isSampleSubmit) {
    //     this.createSampleId();
    //   } else {
    //     this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId })
    //     if (this.fileToUpload && !this.fileUploadSuccess) {
    //       this.uploadImage();
    //       return;
    //     }
    //     let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId)
    //     this.isSampleSubmit = false;
    //     if (this.formId || this.isFormSubmit) {
    //       if (this.fileToUpload) {
    //         this.updatedSingleAttributes(true);
    //       }
    //       this.splashService.splashScreen({
    //         isLoading : true,
    //         message : "UPDATING"
    //       })
    //       this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe((res: any) => {
    //         if (res) {
    //           for (var i = 0; i < data.length; i++) {
    //             for (var j = 0; j < res.length; j++) {
    //               if (data[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
    //                 data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
    //               }
    //             }
    //           }
    //           this._service.createSample1(data, true).subscribe((res) => {
    //             if (res) {
    //               this.splashService.splashScreen({
    //                 isLoading : false,
    //                 message : ""
    //               })
    //               this._snackBar.open("Data has been updated successfully!", 'Ok', {
    //                 duration: 5000,
    //                 verticalPosition: 'bottom',
    //                 horizontalPosition: 'center'
    //               });
    //             }
    //           })
    //         }
    //       })
    //     } else {
    //       if (this.fileToUpload ) {
    //         this.updatedSingleAttributes(false);
    //       }
    //       if(!this.isFormSubmit) {
    //         this.splashService.splashScreen({
    //           isLoading : true,
    //           message : "INSERTING"
    //         })
    //         this._service.createSample1(data, this.formId ? true : false).subscribe((res) => {
    //           if (res) {
    //             this.isFormSubmit = true;
    //             this.splashService.splashScreen({
    //               isLoading : false,
    //               message : ""
    //             })
    //             this._snackBar.open("Data has been inserted successfully!", 'Ok', {
    //               duration: 5000,
    //               verticalPosition: 'bottom',
    //               horizontalPosition: 'center'
    //             });
    //           }
    //         })
    //       }
    //     }
    //   }
    // }
    SbParticipantDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    SbParticipantDetailsComponent.prototype.filterPlaceofBirth = function (val) {
        return AVAILABLE_PLACE.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    SbParticipantDetailsComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.form.value["savedFormID"]).subscribe(function (res) {
            _this.form.patchValue({ "profilePicture": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    SbParticipantDetailsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.fileToUpload = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                if (event.target) {
                    _this.url = reader.result;
                    _this.cd.detectChanges();
                    _this.fileUploadSuccess = false;
                }
            };
        }
    };
    SbParticipantDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbParticipantDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbParticipantDetailsComponent.prototype, "disableInput", void 0);
    SbParticipantDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-participant-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-participant-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.html")).default,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"],
                    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
                },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbParticipantDetailsComponent);
    return SbParticipantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SbPatientsFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbPatientsFollowupComponent", function() { return SbPatientsFollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbPatientsFollowupComponent = /** @class */ (function () {
    function SbPatientsFollowupComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Out Patients Followup";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbPatientsFollowupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbPatientsFollowupComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "out_patient_healthy_diet": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "follow_up_session_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "out_patient_treatment_response": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "att_treat_how_long": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "att_treat_number_ses": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "att_treat": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "att_treat_how_many": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbPatientsFollowupComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 8).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbPatientsFollowupComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbPatientsFollowupComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbPatientsFollowupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbPatientsFollowupComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbPatientsFollowupComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbPatientsFollowupComponent.prototype, "disableInput", void 0);
    SbPatientsFollowupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-patients-followup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-patients-followup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbPatientsFollowupComponent);
    return SbPatientsFollowupComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SbTestSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbTestSectionComponent", function() { return SbTestSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbTestSectionComponent = /** @class */ (function () {
    function SbTestSectionComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Test Section";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbTestSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbTestSectionComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "test_sample_collected": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_sample_collected_spec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amphetamines_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "barbiturates": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "barbiturates_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_benzodiazepines": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_benzodiazepines_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_cannainoids": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_cannainoids_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_cocaine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_cocaine_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_methadone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_methadone_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_phencyclidine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_phencyclidine_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_propxyphene": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_propxyphene_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_opiate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_opiate_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_target_drug_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_target_drug_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "test_target_drug_others_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbTestSectionComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 9).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbTestSectionComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbTestSectionComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbTestSectionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbTestSectionComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbTestSectionComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbTestSectionComponent.prototype, "disableInput", void 0);
    SbTestSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-test-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-test-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbTestSectionComponent);
    return SbTestSectionComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SbTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbTreatmentComponent", function() { return SbTreatmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var SbTreatmentComponent = /** @class */ (function () {
    function SbTreatmentComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Substance Dependence Treatment";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    SbTreatmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire(this.formId, 2).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    SbTreatmentComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "addiction_treatment": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Naltrexone_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Naltrexone_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Naltrexone_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Naltrexone_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Buprenorphine_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Buprenorphine_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Buprenorphine_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Buprenorphine_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Inpatient_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Inpatient_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Inpatient_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_Inpatient_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_rehab_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_rehab_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_rehab_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_rehab_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_detox_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_detox_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_detox_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_detox_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_counselling_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_counselling_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_counselling_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_outpatient_counselling_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_self_help_group_times": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_self_help_group_star": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_self_help_group_finis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treat_prescribed_self_help_group_encoun": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treatment_completed": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treatment_recent_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treatment_relapse": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sub_treatment_relapse_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "relapse_period": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "current_treat_readiness": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "risk_of_relapse": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "risk_of_relapse_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_methadon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_methadon_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Clonide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Clonide_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Bupemorphine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Bupemorphine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_suboxon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_suboxon_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naloxon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naloxon_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naltrexon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naltrexon_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naltrexon_xr": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_Naltrexon_xr_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_LOFex": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_LOFex_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_others_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "opiate_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_acamprosate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_acamprosate_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_disulfirm": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_disulfirm_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_naltrexon": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_naltrexon_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_naltrexon_xr": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "alcohol_naltrexon_xr_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Benzodiazphine_flumazenil": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Benzodiazphine_flumazenil_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Benzodiazphine_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Benzodiazphine_others_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Benzodiazphine_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_vaenicline": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_vaenicline_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_bupropion": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_bupropion_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_nicotinnell": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_nicotinnell_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_nicotinnell_gum": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nicotine_nicotinnell_gum_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_antipsycotic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_abilify_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_zebraxa_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_seriquol_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_risperdal_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_ziprasidone_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_haldol_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_zuclopenthixol_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antipsycotic_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_amitryptyline_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_clomiparamine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_fluxetine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_effexor_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_seroxate_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_escitalopram_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_sertraline_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_mirtazapine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_bupropion_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antidepressants_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_central_nervous": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_central_nervous_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_imovane_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_diazepam_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_librium_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_buspar_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_alprazolam_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_lorazepam_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_hydroxyzine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_anxiolytics_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_Antiepileptics": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_carbamazepine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_klonopin_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_gabapentin_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_lamotrigine_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_topamax_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_dilantin_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_epilim_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_medic_hypnotic_antiepileptics_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    SbTreatmentComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(2, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    SbTreatmentComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    SbTreatmentComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(2, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    SbTreatmentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
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
                                _this.splashService.splashScreen({
                                    isLoading: false,
                                    message: ""
                                });
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
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "INSERTING"
                });
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
                        _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                });
            }
        }
    };
    SbTreatmentComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SbTreatmentComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], SbTreatmentComponent.prototype, "disableInput", void 0);
    SbTreatmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-sb-treatment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sb-treatment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], SbTreatmentComponent);
    return SbTreatmentComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9zdWJzdGFuY2UtZGVwZW5kZW5jZS9zdWJzdGFuY2UtZGVwZW5kZW5jZS1wcmludC9zdWJzdGFuY2UtZGVwZW5kZW5jZS1wcmludC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: SubstanceDependencePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstanceDependencePrintComponent", function() { return SubstanceDependencePrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/sb-participant-details/sb-participant-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.ts");
/* harmony import */ var _subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/sb-clinical-details/sb-clinical-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.ts");
/* harmony import */ var _subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/sb-life-style/sb-life-style.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.ts");
/* harmony import */ var _subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/sb-medical-history/sb-medical-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.ts");
/* harmony import */ var _subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/sb-dependence-history/sb-dependence-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.ts");
/* harmony import */ var _subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/sb-family-history/sb-family-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.ts");
/* harmony import */ var _subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/sb-treatment/sb-treatment.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.ts");
/* harmony import */ var _subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/sb-patients-followup/sb-patients-followup.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.ts");
/* harmony import */ var _subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/sb-test-section/sb-test-section.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.ts");
/* harmony import */ var _subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_subs/sb-diabetic-patients/sb-diabetic-patients.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.ts");
/* harmony import */ var _subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_subs/sb-biochemical/sb-biochemical.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.ts");
/* harmony import */ var _subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_subs/sb-medications/sb-medications.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.ts");
/* harmony import */ var _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_subs/sb-family-history-without-sb/sb-family-history-without-sb.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.ts");

// Angular
















var SubstanceDependencePrintComponent = /** @class */ (function () {
    function SubstanceDependencePrintComponent(activatedRoute, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.isPrint = true;
    }
    SubstanceDependencePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Substance Dependence Print');
        this.subheaderService.showPrintButton(true);
    };
    SubstanceDependencePrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    SubstanceDependencePrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_4__["SbParticipantDetailsComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__["SbClinicalDetailsComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_6__["SbLifeStyleComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_7__["SbMedicalHistoryComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appMedical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDependence'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_8__["SbDependenceHistoryComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appDependence", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamily'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_9__["SbFamilyHistoryComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appFamily", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appTreatment'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_10__["SbTreatmentComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appTreatment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appTest'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_12__["SbTestSectionComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appPatients'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_11__["SbPatientsFollowupComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appPatients", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDiabetic'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_13__["SbDiabeticPatientsComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appDiabetic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_14__["SbBiochemicalComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedications'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_15__["SbMedicationsComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appMedications", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyWOS'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__["SbFamilyHistoryWithoutSbComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appFamilyWOS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__["SbFamilyHistoryWithoutSbComponent"])
    ], SubstanceDependencePrintComponent.prototype, "appFamilyPedigree", void 0);
    SubstanceDependencePrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-substance-dependence-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./substance-dependence-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./substance-dependence-print.component.scss */ "./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], SubstanceDependencePrintComponent);
    return SubstanceDependencePrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SubstanceDependenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstanceDependenceComponent", function() { return SubstanceDependenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var SubstanceDependenceComponent = /** @class */ (function () {
    function SubstanceDependenceComponent(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, splashService, cdr) {
        this.activatedRoute = activatedRoute;
        this._vService = _vService;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.splashService = splashService;
        this.cdr = cdr;
        // Table fields
        this.loading$ = true;
        this.dataSource = [];
        this.displayedColumns = ['id', '1', '2', 'actions'];
        this.lastQuery = {
            filter: '',
            sortOrder: 2,
            sortField: 1,
            pageNumber: 0,
            pageSize: 10,
            templateId: 2,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    SubstanceDependenceComponent.prototype.fetchList = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "LOADING"
        });
        this.dataSource = [];
        this.loading$ = true;
        this._vService.getList(this.lastQuery).subscribe(function (res) {
            if (res[0].result === "")
                _this.dataSource = [];
            else
                _this.dataSource = res;
            _this.loading$ = false;
            _this.cdr.detectChanges();
            //this.searchInput.nativeElement.focus();
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
        });
    };
    SubstanceDependenceComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(this.lastQuery.templateId, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    SubstanceDependenceComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    SubstanceDependenceComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.subheaderService.setTitle('Substance Dependence');
        this.subheaderService.showPrintButton(false);
    };
    SubstanceDependenceComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    SubstanceDependenceComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/substance-dependence/edit', id], { relativeTo: this.activatedRoute });
    };
    SubstanceDependenceComponent.prototype.openDialog = function (id) {
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
    SubstanceDependenceComponent.prototype.deleteForm = function (id) {
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
    SubstanceDependenceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SubstanceDependenceComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SubstanceDependenceComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubstanceDependenceComponent.prototype, "searchInput", void 0);
    SubstanceDependenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-substance-dependence',
            template: __importDefault(__webpack_require__(/*! raw-loader!./substance-dependence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SubstanceDependenceComponent);
    return SubstanceDependenceComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substance.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substance.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SubstanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstanceModule", function() { return SubstanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_substance_dependence_substanced_dependence_form_substanced_dependence_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/substance-dependence/substanced-dependence-form/substanced-dependence-form.component */ "./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-participant-details/sb-participant-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-life-style/sb-life-style.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-medical-history/sb-medical-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-family-history/sb-family-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-treatment/sb-treatment.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-test-section/sb-test-section.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-biochemical/sb-biochemical.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-medications/sb-medications.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.ts");
/* harmony import */ var _components_substance_dependence_subs_sb_family_pedigree_sb_family_pedigree_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-pedigree/sb-family-pedigree.component.ts");
/* harmony import */ var _components_substance_dependence_substance_dependence_print_substance_dependence_print_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/substance-dependence/substance-dependence-print/substance-dependence-print.component */ "./src/app/views/pages/form-management/substance-dependence/substance-dependence-print/substance-dependence-print.component.ts");
/* harmony import */ var _components_substance_dependence_substance_dependence_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/substance-dependence/substance-dependence.component */ "./src/app/views/pages/form-management/substance-dependence/substance-dependence.component.ts");
/* harmony import */ var _components_substance_dependence_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @components/substance-dependence/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");


























var routes = [
    {
        path: '',
        component: _components_substance_dependence_substance_dependence_component__WEBPACK_IMPORTED_MODULE_23__["SubstanceDependenceComponent"],
    },
    {
        path: 'add',
        component: _components_substance_dependence_substanced_dependence_form_substanced_dependence_form_component__WEBPACK_IMPORTED_MODULE_7__["SubstancedDependenceFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_substance_dependence_substanced_dependence_form_substanced_dependence_form_component__WEBPACK_IMPORTED_MODULE_7__["SubstancedDependenceFormComponent"],
    },
    {
        path: 'print/:id',
        component: _components_substance_dependence_substance_dependence_print_substance_dependence_print_component__WEBPACK_IMPORTED_MODULE_22__["SubstanceDependencePrintComponent"],
    }
];
var SubstanceModule = /** @class */ (function () {
    function SubstanceModule() {
    }
    SubstanceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_substance_dependence_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_24__["DocUploadComponent"],
                // Substance Dependence
                _components_substance_dependence_substance_dependence_component__WEBPACK_IMPORTED_MODULE_23__["SubstanceDependenceComponent"],
                _components_substance_dependence_substanced_dependence_form_substanced_dependence_form_component__WEBPACK_IMPORTED_MODULE_7__["SubstancedDependenceFormComponent"],
                _components_substance_dependence_subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_8__["SbParticipantDetailsComponent"],
                _components_substance_dependence_subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__["SbClinicalDetailsComponent"],
                _components_substance_dependence_subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_10__["SbLifeStyleComponent"],
                _components_substance_dependence_subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_11__["SbMedicalHistoryComponent"],
                _components_substance_dependence_subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_12__["SbDependenceHistoryComponent"],
                _components_substance_dependence_subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_13__["SbFamilyHistoryComponent"],
                _components_substance_dependence_subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_14__["SbTreatmentComponent"],
                _components_substance_dependence_subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_15__["SbPatientsFollowupComponent"],
                _components_substance_dependence_subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_16__["SbTestSectionComponent"],
                _components_substance_dependence_subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_17__["SbDiabeticPatientsComponent"],
                _components_substance_dependence_subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_18__["SbBiochemicalComponent"],
                _components_substance_dependence_subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_19__["SbMedicationsComponent"],
                _components_substance_dependence_subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_20__["SbFamilyHistoryWithoutSbComponent"],
                _components_substance_dependence_subs_sb_family_pedigree_sb_family_pedigree_component__WEBPACK_IMPORTED_MODULE_21__["SbFamilyPedigreeComponent"],
                _components_substance_dependence_substance_dependence_print_substance_dependence_print_component__WEBPACK_IMPORTED_MODULE_22__["SubstanceDependencePrintComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            ]
        })
    ], SubstanceModule);
    return SubstanceModule;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9zdWJzdGFuY2UtZGVwZW5kZW5jZS9zdWJzdGFuY2VkLWRlcGVuZGVuY2UtZm9ybS9zdWJzdGFuY2VkLWRlcGVuZGVuY2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: SubstancedDependenceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstancedDependenceFormComponent", function() { return SubstancedDependenceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/sb-participant-details/sb-participant-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-participant-details/sb-participant-details.component.ts");
/* harmony import */ var _subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/sb-clinical-details/sb-clinical-details.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-clinical-details/sb-clinical-details.component.ts");
/* harmony import */ var _subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/sb-life-style/sb-life-style.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-life-style/sb-life-style.component.ts");
/* harmony import */ var _subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/sb-medical-history/sb-medical-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medical-history/sb-medical-history.component.ts");
/* harmony import */ var _subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/sb-dependence-history/sb-dependence-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-dependence-history/sb-dependence-history.component.ts");
/* harmony import */ var _subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/sb-family-history/sb-family-history.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history/sb-family-history.component.ts");
/* harmony import */ var _subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/sb-treatment/sb-treatment.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-treatment/sb-treatment.component.ts");
/* harmony import */ var _subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/sb-patients-followup/sb-patients-followup.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-patients-followup/sb-patients-followup.component.ts");
/* harmony import */ var _subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/sb-test-section/sb-test-section.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-test-section/sb-test-section.component.ts");
/* harmony import */ var _subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_subs/sb-diabetic-patients/sb-diabetic-patients.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-diabetic-patients/sb-diabetic-patients.component.ts");
/* harmony import */ var _subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_subs/sb-biochemical/sb-biochemical.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-biochemical/sb-biochemical.component.ts");
/* harmony import */ var _subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_subs/sb-medications/sb-medications.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-medications/sb-medications.component.ts");
/* harmony import */ var _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_subs/sb-family-history-without-sb/sb-family-history-without-sb.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/sb-family-history-without-sb/sb-family-history-without-sb.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/substance-dependence/_subs/doc-upload/doc-upload.component.ts");

// Angular

















var SubstancedDependenceFormComponent = /** @class */ (function () {
    function SubstancedDependenceFormComponent(activatedRoute, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    SubstancedDependenceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Substance Dependence');
    };
    SubstancedDependenceFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    SubstancedDependenceFormComponent.prototype.reset = function () {
        //if (this.selectedTab == 0) {
        //  this.appParticipation.reset();
        //}else if(this.selectedTab == 1){
        //  this.appClinical.reset();
        //}else if(this.selectedTab == 2){
        //  this.appLifestyle.reset();
        //}else if(this.selectedTab == 3){
        //  this.appMedical.reset();
        //}else if(this.selectedTab == 4){
        //  this.appDependence.reset();
        //}else if(this.selectedTab == 5){
        //  this.appFamily.reset();
        //}else if(this.selectedTab == 6){
        //  this.appTreatment.reset();
        //}else if(this.selectedTab == 7){
        //  this.appPatients.reset();
        //}else if(this.selectedTab == 8){
        //  this.appTest.reset();
        //}else if(this.selectedTab == 9){
        //  this.appDiabetic.reset();
        //}else if(this.selectedTab ==10){
        //  this.appBiochemical.reset();
        //}else if(this.selectedTab == 11){
        //  this.appMedications.reset();
        //}else if(this.selectedTab == 12){
        //  this.appFamilyWOS.reset();
        //}else if(this.selectedTab == 13){
        //  this.appFamilyPedigree.reset();
        //}
    };
    SubstancedDependenceFormComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appLifestyle.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appMedical.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appDependence.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamily.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appTreatment.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appPatients.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appTest.onSubmit();
        }
        else if (this.selectedTab == 9) {
            this.appDiabetic.onSubmit();
        }
        else if (this.selectedTab == 10) {
            this.appBiochemical.onSubmit();
        }
        else if (this.selectedTab == 11) {
            this.appMedications.onSubmit();
        }
        else if (this.selectedTab == 12) {
            this.appFamilyWOS.onSubmit();
        }
        else if (this.selectedTab == 13) {
            this.appFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 14) {
            this.appDocUpload.onSubmit();
        }
    };
    SubstancedDependenceFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_participant_details_sb_participant_details_component__WEBPACK_IMPORTED_MODULE_4__["SbParticipantDetailsComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_clinical_details_sb_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__["SbClinicalDetailsComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_life_style_sb_life_style_component__WEBPACK_IMPORTED_MODULE_6__["SbLifeStyleComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_medical_history_sb_medical_history_component__WEBPACK_IMPORTED_MODULE_7__["SbMedicalHistoryComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appMedical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDependence'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_dependence_history_sb_dependence_history_component__WEBPACK_IMPORTED_MODULE_8__["SbDependenceHistoryComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appDependence", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamily'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_sb_family_history_component__WEBPACK_IMPORTED_MODULE_9__["SbFamilyHistoryComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appFamily", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appTreatment'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_treatment_sb_treatment_component__WEBPACK_IMPORTED_MODULE_10__["SbTreatmentComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appTreatment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appTest'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_test_section_sb_test_section_component__WEBPACK_IMPORTED_MODULE_12__["SbTestSectionComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appPatients'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_patients_followup_sb_patients_followup_component__WEBPACK_IMPORTED_MODULE_11__["SbPatientsFollowupComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appPatients", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDiabetic'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_diabetic_patients_sb_diabetic_patients_component__WEBPACK_IMPORTED_MODULE_13__["SbDiabeticPatientsComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appDiabetic", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_biochemical_sb_biochemical_component__WEBPACK_IMPORTED_MODULE_14__["SbBiochemicalComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedications'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_medications_sb_medications_component__WEBPACK_IMPORTED_MODULE_15__["SbMedicationsComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appMedications", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyWOS'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__["SbFamilyHistoryWithoutSbComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appFamilyWOS", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_sb_family_history_without_sb_sb_family_history_without_sb_component__WEBPACK_IMPORTED_MODULE_16__["SbFamilyHistoryWithoutSbComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__["DocUploadComponent"])
    ], SubstancedDependenceFormComponent.prototype, "appDocUpload", void 0);
    SubstancedDependenceFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-substanced-dependence-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./substanced-dependence-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./substanced-dependence-form.component.scss */ "./src/app/views/pages/form-management/substance-dependence/substanced-dependence-form/substanced-dependence-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], SubstancedDependenceFormComponent);
    return SubstancedDependenceFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-substance-dependence-substance-module.js.map