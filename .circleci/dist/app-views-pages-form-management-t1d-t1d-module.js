(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-t1d-t1d-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n    <!-- Heading-->\n    <div class=\"row \">\n        <div class=\"col-md-3 kt-margin-bottom-10-mobile\"><br><br>\n            <label></label>\n        </div>\n        <div class=\"col-md-3  kt-margin-bottom-10-mobile\">\n            <label>Date of Last Test </label>\n        </div>\n        <div class=\"col-md-3  kt-margin-bottom-10-mobile\">\n            <label>Result of Recent Test</label>\n        </div>\n        <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n            <label>Is Result Normal?</label>\n         </div>\n    </div>\n    <!--- A. HbA1c (%)-->\n    <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>A. HbA1c (%)</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp1\" formControlName=\"BIOC_HbA1c_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp1.open()\" (focus)=\"dp1.open()\"  name=\"dp1\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp1\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp1></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_HbA1c_Test_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_HbA1c_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!--- B. Total cholesterol (mg/dl)-->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>B. Total cholesterol (mg/dl)</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp2\" formControlName=\"BIOC_TotalCholesterol_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp2.open()\" (focus)=\"dp2.open()\"  name=\"dp2\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp2\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp2></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_TotalCholesterol_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_TotalCholesterol_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!--- C. Triglyceride (mg/dl) -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>C. Triglyceride (mg/dl) </label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp3\" formControlName=\"BIOC_Triglyceride_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp3\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp3></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_Triglyceride_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_Triglyceride_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!--- D. HDL (mg/dl) -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>D. HDL (mg/dl) </label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp4\" formControlName=\"BIOC_HDL_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp4.open()\" (focus)=\"dp4.open()\"  name=\"dp4\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp4\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp4></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_HDL_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_HDL_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!---E. LDL (mg/dl)  -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>E. LDL (mg/dl) </label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp5\" formControlName=\"BIOC_LDL_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp5.open()\" (focus)=\"dp5.open()\"  name=\"dp5\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp5\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp5></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_LDL_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_LDL_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!---F. Vitamin D level (ng/ml)  -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>F. Vitamin D level (ng/ml)</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp6\" formControlName=\"BIOC_VitaminDLevel_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp6.open()\" (focus)=\"dp6.open()\"  name=\"dp6\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp6\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp6></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_VitaminDLevel_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_VitaminDLevel_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!---G. HCO3/PH at diagnosis  -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>G. HCO3/PH at diagnosis</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp7\" formControlName=\"BIOC_HCO3PH_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp7.open()\" (focus)=\"dp7.open()\"  name=\"dp7\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp7\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp7></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_HCO3PH_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_HCO3PH_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n     <!---H. Fasting c pep  -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>H. Fasting c pep</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp8\" formControlName=\"BIOC_FastingCPEP_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp8.open()\" (focus)=\"dp8.open()\"  name=\"dp8\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp8\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp8></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_FastingCPEP_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_FastingCPEP_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n    <!---I. Full Blood Count  -->\n    <div class=\"row \">\n        <div class=\"col-md-12 \">\n            <H5><label>I. Full Blood Count</label></H5>\n        </div>\n    </div>\n     <!---I. Haemoglobin  g(d/L) -->\n     <div class=\"row \">\n        <div class=\"col-md-3 \">\n            <label>Haemoglobin g(d/L)</label>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                <input  matInput [matDatepicker]=\"dp9\" formControlName=\"BIOC_FBC_Haemoglobin_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp9.open()\" (focus)=\"dp9.open()\"  name=\"dp9\">\n                <mat-datepicker-toggle matSuffix [for]=\"dp9\">\n                </mat-datepicker-toggle>\n                <mat-datepicker #dp9></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Result of recent test\"\n                       formControlName=\"BIOC_FBC_Haemoglobin_Result\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 \">\n            <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"BIOC_FBC_Haemoglobin_IsNormalResult\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n         <!---White Cell Count (109/L)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>White Cell Count (109/L)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp10\" formControlName=\"BIOC_FBC_WhiteCellCount_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp10.open()\" (focus)=\"dp10.open()\"  name=\"dp10\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_WhiteCellCount_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_WhiteCellCount_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Platelets (109/L)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Platelets (109/L)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp11\" formControlName=\"BIOC_FBC_Platelets_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp11.open()\" (focus)=\"dp11.open()\"  name=\"dp11\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Platelets_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Platelets_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Neutrophils (%)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Neutrophils (%)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp12\" formControlName=\"BIOC_FBC_Neutrophils_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp12.open()\" (focus)=\"dp12.open()\"  name=\"dp12\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Neutrophils_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Neutrophils_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Lymphocytes (%)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Lymphocytes (%)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp13\" formControlName=\"BIOC_FBC_Lymphocytes_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp13.open()\" (focus)=\"dp13.open()\"  name=\"dp13\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Lymphocytes_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Lymphocytes_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Monocytes (%)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Monocytes (%)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp14\" formControlName=\"BIOC_FBC_Monocytes_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp14.open()\" (focus)=\"dp14.open()\"  name=\"dp14\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp14\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp14></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Monocytes_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Monocytes_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Eosinophils (%)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Eosinophils (%)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp15\" formControlName=\"BIOC_FBC_Eosinophils_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp15.open()\" (focus)=\"dp15.open()\"  name=\"dp15\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp15\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp15></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Eosinophils_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Eosinophils_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---Haematocrit (%)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>Haematocrit (%)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp16\" formControlName=\"BIOC_FBC_Haematocrit_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp16.open()\" (focus)=\"dp16.open()\"  name=\"dp16\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp16\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp16></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_Haematocrit_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_Haematocrit_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---MCV (fL/cell)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>MCV (fL/cell)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp17\" formControlName=\"BIOC_FBC_MCV_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp17.open()\" (focus)=\"dp17.open()\"  name=\"dp17\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp17\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp17></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_MCV_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_MCV_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---MCH (pg/cell)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>MCH (pg/cell)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp18\" formControlName=\"BIOC_FBC_MCH_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp18.open()\" (focus)=\"dp18.open()\"  name=\"dp18\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp18\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp18></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_MCH_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_MCH_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n         <!---MCHC (g/dL)-->\n         <div class=\"row \">\n            <div class=\"col-md-3 \">\n                <label>MCHC (g/dL)</label>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp19\" formControlName=\"BIOC_FBC_MCHC_Test_Date\"  placeholder=\"Date of recent test\" (click)=\"dp19.open()\" (focus)=\"dp19.open()\"  name=\"dp19\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp19\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp19></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FBC_MCHC_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n                <mat-form-field floatPlaceholder=\"Is Result Normal?\"  class=\"mat-form-field-fluid\">\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"BIOC_FBC_MCHC_IsNormalResult\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n    \n\n\n\n</div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\">\n    <div class=\"col-md-12\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group row\">\n                <h6>Physical Measurements</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput type=\"number\"  formControlName=\"CLIN_BodyWeight_KG\"  placeholder=\"Body weight without shoes (kg)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input type=\"number\" formControlName=\"CLIN_Height_CM\" matInput  placeholder=\"Height without shoes (m)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_BMI_KGM2\"   placeholder=\"Body mass index (kg/m2)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_WaistCircumference_CM\" placeholder=\"Waist circumference (cm)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_BloodPressure_SYS_mmHg\"  placeholder=\"Systolic Blood Pressure (mmHg)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_BloodPressure_DIA_mmHg\"  placeholder=\"Diastolic Blood Pressure (mmHg)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-md-7 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Do you have any Medical Conditions\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Do you have any Medical Conditions\n                            </label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-5 kt-margin-bottom-10-mobile\"><br><br><br>\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_MC_YesRemarks\"  placeholder=\"If Yes, Please Specify\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Type 2 Diabetes Mellitus\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Type 2 Diabetes Mellitus</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Type2Diabetes\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Type 1 Diabetes\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Type 1 Diabetes</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Type1Diabetes\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Hypertension\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Hypertension</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_Hypertension\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Dyslipidemia\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Dyslipidemia</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_HypertensionAge\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Other\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Other</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_OtherDiseases\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-10-mobile\">\n                    <div class=\"kt-section\"><br><br><br>\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_OtherDiseases\"  placeholder=\"If Other Diseases, Please Specify\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"if you have T1D or T2D, Do you have any specific diabetes related complications?\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">If you have T1D or T2D, Do you have any specific diabetes related complications?</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_DiabetesComplications\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>              \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>If Yes, What are the specific diabetes related complications\n                        (Please tick as many as possible)</h6>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-5 kt-margin-bottom-20-mobile\">\n \n                    <mat-form-field floatPlaceholder=\"Retinopathy\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Retinopathy</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_Retinopathy\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <mat-hint align=\"start\"><strong>Eyes: \n                            1. Non Proliferative   \n                            2. Proliferative\n                            3. Laser </strong>                    \n                            </mat-hint>\n                    </mat-form-field>\n                </div>  \n                <div class=\"col-md-5 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Neuropathy\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Neuropathy</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_Neuropathy\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <mat-hint align=\"start\"><strong>\n                            Feet (Ulcers) :  \n                            * Gangrene\n                            * Loss of sensation / numbness / pain / burning / tingling<br>\n                            Ambutation : \n                            * Loss of toe, foot or leg \n                            * Pain in calf musle while walking\n                            * Circulation / Peripheral vascular disease / operation on artery in legs.<br>\n                            \n                        </strong>                    \n                            </mat-hint>\n                    </mat-form-field>\n                </div> \n                <div class=\"col-md-2 kt-margin-bottom-10-mobile\"><br><br><br>\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput formControlName=\"CLIN_MC_Diabetes_Neuropathy_Other\"  placeholder=\"Others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-5 kt-margin-bottom-20-mobile\">\n \n                    <mat-form-field floatPlaceholder=\"Cerebrovascular accident (C.V.A)\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Cerebrovascular accident (C.V.A)</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_CVA\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <mat-hint align=\"start\"><strong>TIA Stroke (bleeding, ischemia)\n                            Bleeding Stroke: * Loss of sensation down one side of the body\n                              * Difficulty in speaking / eating   \n                              * Operation on artery or neck\n                              * Facial drop / paralised arm or leg</strong>                    \n                            </mat-hint>\n                    </mat-form-field>\n                </div>  \n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n \n                    <mat-form-field floatPlaceholder=\"Nephropathy\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Nephropathy</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_CVA\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <mat-hint align=\"start\"><strong></strong>                    \n                            </mat-hint>\n                    </mat-form-field>\n                </div>  \n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\"><br><br><br>\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"CLIN_MC_Diabetes_Nephropathy_Albuminuria\"  placeholder=\"Albuminuria\" />\n                            <mat-hint align=\"start\"><strong>\n                                Kidney : protien or albumin in urine\n                            </strong>                    \n                            </mat-hint>\n                       </mat-form-field>\n                </div> \n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\"><br><br><br>\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                       <input matInput formControlName=\"CLIN_MC_Diabetes_Nephropathy_eGFR\"  placeholder=\"eGFR\" />\n                  </mat-form-field>\n                </div> \n\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-5 kt-margin-bottom-20-mobile\">\n \n                    <mat-form-field floatPlaceholder=\"Coronary artery disease (C.A.D)\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Coronary artery disease (C.A.D)</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_CAD\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                        <mat-hint align=\"start\"><strong>* Coronary artery bypass grafting (CABG)\n                            * Percutneous Coronary Intervention (PCI)\n                              * Arrhythmias </strong>                    \n                            </mat-hint>\n                    </mat-form-field>\n                </div> \n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n \n                    <mat-form-field floatPlaceholder=\"Other\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Other</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_Diabetes_Others\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div> \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\"><br><br><br>\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                       <input matInput formControlName=\"CLIN_MC_Diabetes_Others_Remarks\"  placeholder=\"Please specify\" />\n                  </mat-form-field>\n                </div> \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Do you have any significant past history: of the following?\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Do you have any significant past history: of the following?</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>              \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>If Yes, Please tick as many as appropriate</h6>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Autoimmune Diseases\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Autoimmune Diseases</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory_Autoimmune\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Celiac\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Celiac</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory_Celiac\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Hypothyroidism\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Hypothyroidism</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory_Hypothyroidism\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Arthritis\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Arthritis</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory_Arthritis\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\n                    <mat-form-field floatPlaceholder=\"Other\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Other</label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"CLIN_MC_PastHistory_Other\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-9 kt-margin-bottom-20-mobile\"><br><br><br>\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                       <input matInput formControlName=\"CLIN_MC_PastHistory_Other_Remarks\"  placeholder=\"Please specify\" />\n                  </mat-form-field>\n                </div> \n\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n    <div class=\"form-group  row\">\n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n            <div class=\"kt-section\">\n                <mat-form-field floatPlaceholder=\"T1D in the family\"  class=\"mat-form-field-fluid\">\n                    <div class=\"kt-section\">\n                    <label align=\"start\">\n                        T1D in the family\n                    </label>\n                    </div>\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"FAMH_T1DFamily\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n        </div>\n\n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"T2D in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        T2D in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_T2DFamily\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Diabetes complication in the family:\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Diabetes complication in the family: \n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_Diabetescomplication\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>       \n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\"><br><br><br>\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput   formControlName=\"FAMH_Diabetescomplication_Remarks\" placeholder=\"If Yes, please specify\" />\n            </mat-form-field>\n        </div>\n     </div>\n\n\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Obesity in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Obesity in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_Obesity\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Hypertension in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Hypertension in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_Hypertension\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Dyslipidaemia in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Dyslipidaemia in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_Dyslipidaemia\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n   \n\n    <div class=\"form-group  row\">\n        <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Other Diseases in the Family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Other Diseases in the Family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FAMH_OtherDisease\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-6 kt-margin-bottom-20-mobile\"><br><br><br>\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput   formControlName=\"FAMH_OtherDisease_Remarks\" placeholder=\"Other Diseases in the Family\" />\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n  \n    <div class=\"form-group col-md-12 row\">\n        <div class=\"kt-section col-md-3\">\n            <label align=\"start\">Smoking Status</label>\n        </div>\n        <div class=\"col-md-9 kt-margin-bottom-10-mobile\">\n            <mat-form-field floatPlaceholder=\"Smoking Status\"  class=\"mat-form-field-fluid\">\n\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"LIFE_SmokingStatus\">\n                    <mat-radio-button  value=\"Current Smoker\">Current Smoker</mat-radio-button>\n                    <mat-radio-button  value=\"Ex-smoker\">Ex-smoker</mat-radio-button>\n                    <mat-radio-button  value=\"Never smoked\">Never smoked</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n    <div class=\"form-group  row\">\n        <div class=\"col-md-12 kt-margin-bottom-10-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you take medications?\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">Do you take medications?</label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"MEDI_Any_Medication\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n        <mat-form-field class=\"mat-form-field-fluid\">\n            <div class=\"kt-section mar-t-10\">\n                <label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label><label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label>\n            </div>\n            <input matInput formControlName=\"MEDI_Any_Medication_Remarks\"  placeholder=\"if Yes please specify\" />\n        </mat-form-field>\n    </div>\n    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n        <mat-form-field class=\"mat-form-field-fluid\">\n            <div class=\"kt-section mar-t-10\">\n                <label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label><label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label>\n            </div>\n            <input matInput formControlName=\"MEDI_CurrentInsulinDose\"  placeholder=\"Current insulin dose(unit/kg/day)\" />\n        </mat-form-field>\n    </div>\n\n</div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" >\n    <form autocomplete=\"off\" [formGroup]=\"VForm1\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\" row\">\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input #firstInput matInput placeholder=\"Sample Id\" formControlName=\"SampleID\" />\n                        <!--<mat-error>Sample Id is-->\n                        <!--<strong>required</strong>-->\n                        <!--</mat-error>-->\n                        <!--<mat-hint align=\"start\">-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                     \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                        <input  matInput [matDatepicker]=\"dp3\" formControlName=\"DateofAssessment\"  placeholder=\"Date of Assesment\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp3\">\n                        <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #dp3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collecion Center\"\n                               formControlName=\"CollectionPoint\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            </div>\n            <div class=\" row\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected By\" formControlName=\"CollectedBy\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"T1D Child\" formControlName=\"PERS_T1DChild\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Year of diagnosis\" formControlName=\"PERS_YearofDiagnosis\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Mother\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Mother</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_Mother\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Father\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Father</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_Father\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Sibling\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Sibling</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_Sibling\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"Others\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Others</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_Others\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If yes, please specify\" formControlName=\"PERS_Firstname\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            </div>\n\n            <div class=\" row\">\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Name\" formControlName=\"PERS_MiddleName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place of Birth\" formControlName=\"PERS_PlaceofBirth\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group \">\n                    <mat-form-field floatPlaceholder=\"Gender\"  class=\"mat-form-field-fluid\">\n                       <!--<div class=\"kt-section\"> --> \n                            <label align=\"start\">Gender</label>&nbsp;&nbsp;&nbsp;\n                        <!--</div> -->\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_Gender\" >\n                            <mat-radio-button  value=\"Male\">Male</mat-radio-button>\n                            <mat-radio-button  value=\"Female\">Female</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n\n            </div>\n\n            <div class=\" row\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input [max]=\"maxDate\" matInput [matDatepicker]=\"dobPicker\"\n                               placeholder=\"Choose a Date of Birth\" (click)=\"dobPicker.open()\"   (focus)=\"dobPicker.open()\"   formControlName=\"PERS_DateofBirth\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4  form-group\">\n                    <!-- <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"nationality\" />\n                        <mat-hint align=\"start\">Please enter\n                            <strong>Nationality</strong>\n                        </mat-hint>\n                    </mat-form-field> -->\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"PERS_Nationality\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-md-4  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Ethnicity (Not Reliable)\" formControlName=\"PERS_Ethnicity\" />\n                        <mat-hint align=\"start\">Please enter\n                        <strong>Ethnicity</strong>\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-5  form-group\">\n                    <mat-form-field floatPlaceholder=\"Marital Status\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Marital Status</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PERS_MaritalStatus\">\n                            <mat-radio-button  value=\"single\">Single</mat-radio-button>\n                            <mat-radio-button  value=\"married\">Married</mat-radio-button>\n                            <mat-radio-button  value=\"divorced\">Divorced</mat-radio-button>\n                            <mat-radio-button  value=\"widow\">Widow</mat-radio-button>\n                        </mat-radio-group>\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\"><br><br><br>\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput formControlName=\"PERS_ParentAgeDuringPregnancy\"  placeholder=\"Age of parent during pregnancy\" />\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field floatPlaceholder=\"Consanguineous Marriage\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Consanguineous Marriage</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group  formControlName=\"PERS_marriage_con\"  >\n                            <mat-radio-button   value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input formControlName=\"PERS_NumberofChildren\" matInput  placeholder=\"Number of Children\" />\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput formControlName=\"PERS_Mobile_Number\"  placeholder=\"Mobile Number\" />\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput formControlName=\"PERS_SiblingDiabetesType1\"  placeholder=\"Comments if other siblings are diagnosed with Diabetes Type 1\" />\n                    </mat-form-field>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                <textarea matInput rows=\"4\" placeholder=\"Address\"\n                          formControlName=\"PERS_Address\"></textarea>\n                    </mat-form-field>\n                </div>\n             </div>   \n\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n \n    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n        <mat-form-field class=\"mat-form-field-fluid\">\n            <div class=\"kt-section mar-t-10\">\n                <label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label><label align=\"start\">\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </label>\n            </div>\n            <input matInput formControlName=\"FAPD_MemberDiabetes\"  placeholder=\"Please indicate all family members with diabetes\" />\n        </mat-form-field>\n    </div>\n\n\n</div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <kt-portlet-header [title]=\"'T1D Form'\" [class]=\"'kt-portlet__head--lg'\" >\n        <ng-container ktPortletTools>\n            <a [routerLink]=\"[ formId ? '../../' : '../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n               matTooltip=\"Back to the forms list\">\n                <i class=\"la la-arrow-left\"></i>\n                <span class=\"kt-hidden-mobile\">Back</span>\n            </a>\n            <a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\"\n               mat-raised-button matTooltip=\"Save & Continue\">\n                <i class=\"la la-save\"></i>\n                <span class=\"kt-hidden-mobile\">Save</span>\n            </a>\n        </ng-container>\n    </kt-portlet-header>\n\n    <kt-portlet-body >\n        <mat-tab-group [(selectedIndex)]=\"selectedTab\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Details\n                </ng-template>\n                        <kt-t1d-participation-details  [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-t1d-participation-details>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n                    Clinical Details\n                </ng-template>\n                    <kt-t1d-clinical-details [disableInput]=\"isPrint\"    [formData]=\"formId\" #appClinical></kt-t1d-clinical-details>\n            </mat-tab>\n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Biochemical Details\n                </ng-template>\n                    <kt-t1d-biochemical-details [disableInput]=\"isPrint\"    [formData]=\"formId\" #appBiochemicalDetails></kt-t1d-biochemical-details>\n            </mat-tab> \n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Life Style\n                </ng-template>\n                    <kt-t1d-life-styles [disableInput]=\"isPrint\"  [formData]=\"formId\" #appLifeStyle></kt-t1d-life-styles>\n            </mat-tab>\n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Medication\n                </ng-template>\n                    <kt-t1d-medication [disableInput]=\"isPrint\"    [formData]=\"formId\" #appMedication></kt-t1d-medication>\n            </mat-tab>\n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Family History\n                </ng-template>\n                    <kt-t1d-family-history [disableInput]=\"isPrint\"    [formData]=\"formId\" #appFamilyHistory></kt-t1d-family-history>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Family Pedigree\n                </ng-template>\n                    <kt-t1d-pedigree [disableInput]=\"isPrint\"    [formData]=\"formId\" #appPedigree></kt-t1d-pedigree>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-file\"></i>\n                    Document Upload\n                </ng-template>\n                <kt-doc-upload  #appDocUpload></kt-doc-upload>\n            </mat-tab>\n\n\n        </mat-tab-group>\n    </kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet id=\"print_form\">\n    <!-- PORTLET LOADING | Binded to TABLE Datasource -->\n    <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\n\n    <kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n        <!-- start::FILTERS & GROUP ACTIONS -->\n        <div class=\"kt-form kt-margin-b-30\">\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Participation Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-participation-details   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appParticipation></kt-t1d-participation-details>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Clinical Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-clinical-details   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appClinical></kt-t1d-clinical-details>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Biochemical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-biochemical-details   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appBiochemicalDetails></kt-t1d-biochemical-details>\n                </kt-portlet-body>\n            </div>\n\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Life Style Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-life-styles   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appLifeStyle></kt-t1d-life-styles>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Medication'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-medication   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appMedication></kt-t1d-medication>\n                </kt-portlet-body>\n            </div>\n\n\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Family History Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-family-history   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appFamilyHistory></kt-t1d-family-history>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Family Pedigree'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-t1d-pedigree   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appPedigree></kt-t1d-pedigree>\n                </kt-portlet-body>\n            </div>\n\n            </div>\n    </kt-portlet-body>\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet >\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage T1D'\"  [class]=\"'kt-portlet__head--lg'\" >\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body class=\"col-md-12\">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input autocomplete=\"off\" matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n\t\t\t\t\t   [dataSource]=\"dataSource\"\n\t\t\t\t\t   matSort\n\t\t\t\t\t   #sort1=\"matSort\"\n\t\t\t\t\t   matSortActive=\"savedFormID\"\n\t\t\t\t\t   matSortDirection=\"asc\"\n\t\t\t\t\t   >\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\" getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\t\t\t<!--<mat-paginator  [pageSizeOptions]=\"[10,25,50,100]\" (page)=\"pageEvent = getPaginatorData($event)\" [length]=\"300\" [showFirstLastButtons]=\"true\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L3QxZC9fc3Vicy9kb2MtdXBsb2FkL0M6XFxKYW5lXFxQcm9qZWN0c1xcSmFuZVxcS2hhbGlmYUNFUkEvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZm9ybS1tYW5hZ2VtZW50XFx0MWRcXF9zdWJzXFxkb2MtdXBsb2FkXFxkb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9mb3JtLW1hbmFnZW1lbnQvdDFkL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC90MWQvX3N1YnMvZG9jLXVwbG9hZC9kb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lOiAgICAgICAjNDU0Y2FkO1xuJGRhcmstdGV4dDogICAjNWY2OTgyO1xuXG4udXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG5cbiAgICAmLmhvdmVyIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR0aGVtZTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xuXG4gICAgICAjc3RhcnQge1xuICAgICAgICBpLmZhIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3N0YXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAjcmVzcG9uc2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNtZXNzYWdlcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAjZmlsZS1pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMCBhdXRvIC41cmVtIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAjbm90aW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3MsXG4gIC5wcm9ncmVzcyB7XG4gICAgLy8gYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCR0aGVtZSw4JSkgMCUsICR0aGVtZSA1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBkaXYge1xuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLjVyZW0gLjVyZW0gMXJlbSAuNXJlbTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5maWxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iLCIudXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xufVxuLnVwbG9hZGVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xufVxuLnVwbG9hZGVyIGxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkZXIgbGFiZWwuaG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDU0Y2FkO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggI2VlZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnVwbG9hZGVyICNzdGFydCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3N0YXJ0IGkuZmEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnVwbG9hZGVyICNyZXNwb25zZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlICNtZXNzYWdlcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwIGF1dG8gMC41cmVtIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBwcm9ncmVzcyxcbi51cGxvYWRlciAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udXBsb2FkZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgZGl2IHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGNvbG9yOiAjNWY2OTgyO1xufVxuLnVwbG9hZGVyIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogIzQ1NGNhZDtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMyZDY7XG59XG5cbi5maWxlLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.ts ***!
  \******************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.ts ***!
  \**********************************************************************************************************/
/*! exports provided: T1DBiochemicalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DBiochemicalDetails", function() { return T1DBiochemicalDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DBiochemicalDetails = /** @class */ (function () {
    function T1DBiochemicalDetails(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Biochemical Details";
        this.saveFormId = 0;
    }
    T1DBiochemicalDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.prepareForm();
            });
        }
    };
    T1DBiochemicalDetails.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BIOC_HbA1c_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_Test_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HCO3PH_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HCO3PH_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HCO3PH_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingCPEP_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingCPEP_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingCPEP_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haemoglobin_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haemoglobin_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haemoglobin_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_WhiteCellCount_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_WhiteCellCount_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_WhiteCellCount_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Platelets_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Platelets_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Platelets_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Neutrophils_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Neutrophils_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Neutrophils_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Lymphocytes_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Lymphocytes_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Lymphocytes_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Monocytes_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Monocytes_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Monocytes_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Eosinophils_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Eosinophils_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Eosinophils_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haematocrit_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haematocrit_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Haematocrit_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCV_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCV_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCV_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCH_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCH_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCH_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCHC_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCHC_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_MCHC_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FBC_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DBiochemicalDetails.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DBiochemicalDetails.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    T1DBiochemicalDetails.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(res);
            _this.onSubmit();
        });
    };
    T1DBiochemicalDetails.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DBiochemicalDetails.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DBiochemicalDetails.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DBiochemicalDetails.prototype, "disableInput", void 0);
    T1DBiochemicalDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-biochemical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-biochemical-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DBiochemicalDetails);
    return T1DBiochemicalDetails;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.ts ***!
  \****************************************************************************************************/
/*! exports provided: T1DClinicalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DClinicalDetails", function() { return T1DClinicalDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DClinicalDetails = /** @class */ (function () {
    function T1DClinicalDetails(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Details";
        this.saveFormId = 0;
    }
    T1DClinicalDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    T1DClinicalDetails.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "CLIN_BodyWeight_KG": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Height_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BMI_KGM2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_WaistCircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_SYS_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_DIA_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_HypertensionAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_DiabetesType": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_DiabetesAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_OtherDiseases": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_YesRemarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Type2Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Type1Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_DiabetesComplications": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Retinopathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Neuropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Neuropathy_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_CVA": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Nephropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Nephropathy_Albuminuria": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Nephropathy_eGFR": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_CAD": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Diabetes_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Autoimmune": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Celiac": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Hypothyroidism": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Arthritis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_PastHistory_Other_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_OtherCon": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_OtherCon_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DClinicalDetails.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DClinicalDetails.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    // calculateBodyMass() {
    //        if (this.VForm1.controls["BodyWeight"].value && this.VForm1.controls["Height"].value) {
    //            this.VForm1.patchValue({"BodyMass": (this.VForm1.controls["BodyWeight"].value / this.VForm1.controls["Height"].value).toFixed(2)})
    //       }
    //   }
    T1DClinicalDetails.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    T1DClinicalDetails.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DClinicalDetails.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DClinicalDetails.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DClinicalDetails.prototype, "disableInput", void 0);
    T1DClinicalDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-clinical-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DClinicalDetails);
    return T1DClinicalDetails;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.ts ***!
  \************************************************************************************************/
/*! exports provided: T1DFamilyHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DFamilyHistory", function() { return T1DFamilyHistory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DFamilyHistory = /** @class */ (function () {
    function T1DFamilyHistory(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History Details";
        this.saveFormId = 0;
    }
    T1DFamilyHistory.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.prepareForm();
            });
        }
    };
    T1DFamilyHistory.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FAMH_T1DFamily": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_T2DFamily": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Diabetescomplication": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Diabetescomplication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Dyslipidaemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_OtherDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_OtherDisease_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DFamilyHistory.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DFamilyHistory.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    T1DFamilyHistory.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(res);
            _this.onSubmit();
        });
    };
    T1DFamilyHistory.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    //console.log(res)
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DFamilyHistory.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DFamilyHistory.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DFamilyHistory.prototype, "disableInput", void 0);
    T1DFamilyHistory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-family-history.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DFamilyHistory);
    return T1DFamilyHistory;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.ts ***!
  \******************************************************************************************/
/*! exports provided: T1DLifeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DLifeStyles", function() { return T1DLifeStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DLifeStyles = /** @class */ (function () {
    function T1DLifeStyles(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Life Style";
        this.saveFormId = 0;
    }
    T1DLifeStyles.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.prepareForm();
            });
        }
    };
    T1DLifeStyles.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "LIFE_SmokingStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DLifeStyles.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DLifeStyles.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    T1DLifeStyles.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(res);
            _this.onSubmit();
        });
    };
    T1DLifeStyles.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DLifeStyles.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DLifeStyles.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DLifeStyles.prototype, "disableInput", void 0);
    T1DLifeStyles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-life-styles',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-life-styles.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DLifeStyles);
    return T1DLifeStyles;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.ts ***!
  \****************************************************************************************/
/*! exports provided: T1DMedication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DMedication", function() { return T1DMedication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DMedication = /** @class */ (function () {
    function T1DMedication(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medication";
        this.saveFormId = 0;
    }
    T1DMedication.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.prepareForm();
            });
        }
    };
    T1DMedication.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "MEDI_Any_Medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Medication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_CurrentInsulinDose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DMedication.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DMedication.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    T1DMedication.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(res);
            _this.onSubmit();
        });
    };
    T1DMedication.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DMedication.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DMedication.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DMedication.prototype, "disableInput", void 0);
    T1DMedication = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-medication',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-medication.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DMedication);
    return T1DMedication;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MY_FORMATS, T1DParticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DParticipationComponent", function() { return T1DParticipationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

/**
 * Created by TCITSS on 1/9/2020.
 */








var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__["Countries"];



// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var moment = moment__WEBPACK_IMPORTED_MODULE_12___default.a || moment__WEBPACK_IMPORTED_MODULE_12__;
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
var T1DParticipationComponent = /** @class */ (function () {
    function T1DParticipationComponent(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__["Countries"];
        this.title = 'Participation Details';
        this._coutries = _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__["Countries"];
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    T1DParticipationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) { _this.VForm1.patchValue({ "savedFormID": id }); });
        else {
            //this._vService.getQuestionnaire3(this.formId).subscribe((res:any[])=> {
            //    this.formData  = res;
            //    this.prepareForm();
            //    this.saveFormId = this.formId;
            // })
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.prepareForm();
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
            });
        }
        this.getFormAttributeValues();
    };
    T1DParticipationComponent.prototype.createForm = function () {
        var _this = this;
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "SampleID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectionPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DateofAssessment": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_T1DChild": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_YearofDiagnosis": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Mother": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Father": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Sibling": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Firstname": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_MiddleName": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_FamilyName": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_PlaceofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_DateofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Nationality": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_ParentAgeDuringPregnancy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_marriage_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_NumberofChildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Mobile_Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_SiblingDiabetesType1": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_OtherRel": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_OtherRel_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.VForm1.controls["PERS_Nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
    };
    T1DParticipationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name]);
            }
        });
    };
    T1DParticipationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DParticipationComponent.prototype.prepareAttibuteForm = function () {
        var res = this.VForm1.value;
        var _result = [];
        for (var prop in res) {
            for (var i = 0; i < this.formAttributes.length; i++) {
                if (prop == this.formAttributes[i].attributeName && res[prop] != "") {
                    _result.push({
                        "savedFormID": res["savedFormID"],
                        "formAttributeID": this.formAttributes[i].formAttributeID,
                        "attributeValue": res[prop]
                    });
                }
            }
        }
        return _result;
    };
    T1DParticipationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, this.VForm1.value["SampleID"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    T1DParticipationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, true).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DParticipationComponent.prototype.filterNationalities = function (val) {
        return this.AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    T1DParticipationComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DParticipationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DParticipationComponent.prototype, "disableInput", void 0);
    T1DParticipationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-participation-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-participation-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.html")).default,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MomentDateAdapter"],
                    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
                },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], T1DParticipationComponent);
    return T1DParticipationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.ts ***!
  \************************************************************************************/
/*! exports provided: T1DPedigree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DPedigree", function() { return T1DPedigree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var T1DPedigree = /** @class */ (function () {
    function T1DPedigree(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family Pedigree";
        this.saveFormId = 0;
    }
    T1DPedigree.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire(this.formId, 8).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    T1DPedigree.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FAPD_MemberDiabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    T1DPedigree.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(8, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    T1DPedigree.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    T1DPedigree.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(8, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(res);
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this.onSubmit();
        });
    };
    T1DPedigree.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId).subscribe(function (res) {
                    //console.log(res)
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._vService.createSample3(data_1, true).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    T1DPedigree.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], T1DPedigree.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], T1DPedigree.prototype, "disableInput", void 0);
    T1DPedigree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-pedigree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-pedigree.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], T1DPedigree);
    return T1DPedigree;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.ts ***!
  \**********************************************************************/
/*! exports provided: T1DFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DFormComponent", function() { return T1DFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/t1d-clinical-details/t1d-clinical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.ts");
/* harmony import */ var _subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/t1d-family-history/t1d-family-history */ "./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.ts");
/* harmony import */ var _subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/t1d-life-styles/t1d-life-styles */ "./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.ts");
/* harmony import */ var _subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/t1d-participation-details/t1d-participation-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.ts");
/* harmony import */ var _subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/t1d-medication/t1d-medication */ "./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.ts");
/* harmony import */ var _subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/t1d-pedigree/t1d-pedigree */ "./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.ts");
/* harmony import */ var _subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_subs/t1d-biochemical-details/t1d-biochemical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.ts");

// Angular















var T1DFormComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param eformFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     * @param layoutConfigService: LayoutConfigService
     */
    function T1DFormComponent(activatedRoute, router, eformFB, subheaderService, layoutUtilsService, _vService, _interactionService, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eformFB = eformFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this._vService = _vService;
        this._interactionService = _interactionService;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.isLoading = true;
        this.isPrint = false;
        this.isEdit = true;
        this.subscriptions = [];
    }
    T1DFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        //  this.initForm();
        //  this._interactionService._Refid$.subscribe((id)=>{  this.VForm1.patchValue({"3_id" : id}); })
    };
    T1DFormComponent.prototype.ngOnDestroy = function () {
        this._interactionService.sendRefId(undefined);
    };
    /**
     * Init form
     */
    T1DFormComponent.prototype.initForm = function () {
        this.subheaderService.setTitle('Create T1D Form');
    };
    T1DFormComponent.prototype.reset = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.createForm();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.createForm();
        }
        else if (this.selectedTab == 2) {
            this.appBiochemicalDetails.createForm();
        }
        else if (this.selectedTab == 3) {
            this.appLifeStyle.createForm();
        }
        else if (this.selectedTab == 4) {
            this.appMedication.createForm();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyHistory.createForm();
        }
        else if (this.selectedTab == 6) {
            this.appPedigree.createForm();
        }
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    T1DFormComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appBiochemicalDetails.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appLifeStyle.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appMedication.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appPedigree.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appDocUpload.onSubmit();
        }
    };
    T1DFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_14__["VitamindService"] },
        { type: _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_6__["ComponentInteractionService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_10__["T1DParticipationComponent"])
    ], T1DFormComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_7__["T1DClinicalDetails"])
    ], T1DFormComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_11__["T1DMedication"])
    ], T1DFormComponent.prototype, "appMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifeStyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_9__["T1DLifeStyles"])
    ], T1DFormComponent.prototype, "appLifeStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_8__["T1DFamilyHistory"])
    ], T1DFormComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_12__["T1DPedigree"])
    ], T1DFormComponent.prototype, "appPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_13__["T1DBiochemicalDetails"])
    ], T1DFormComponent.prototype, "appBiochemicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_15__["DocUploadComponent"])
    ], T1DFormComponent.prototype, "appDocUpload", void 0);
    T1DFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-form.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_14__["VitamindService"],
            _core_services_component_interaction_service__WEBPACK_IMPORTED_MODULE_6__["ComponentInteractionService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"]])
    ], T1DFormComponent);
    return T1DFormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.ts ***!
  \**********************************************************************************/
/*! exports provided: T1DPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DPrintComponent", function() { return T1DPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/t1d-participation-details/t1d-participation-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.ts");
/* harmony import */ var _subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/t1d-clinical-details/t1d-clinical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.ts");
/* harmony import */ var _subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/t1d-life-styles/t1d-life-styles */ "./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.ts");
/* harmony import */ var _subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/t1d-family-history/t1d-family-history */ "./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.ts");
/* harmony import */ var _subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/t1d-medication/t1d-medication */ "./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.ts");
/* harmony import */ var _subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/t1d-pedigree/t1d-pedigree */ "./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.ts");
/* harmony import */ var _subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/t1d-biochemical-details/t1d-biochemical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.ts");











var T1DPrintComponent = /** @class */ (function () {
    function T1DPrintComponent(activatedRoute, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
        this.isLoading = true;
        this.isPrint = true;
        this.isEdit = true;
    }
    T1DPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTitle();
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
    };
    T1DPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('T1D Form');
        this.subheaderService.showPrintButton(true);
    };
    T1DPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_4__["T1DParticipationComponent"])
    ], T1DPrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_5__["T1DClinicalDetails"])
    ], T1DPrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifeStyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_6__["T1DLifeStyles"])
    ], T1DPrintComponent.prototype, "appLifeStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_7__["T1DFamilyHistory"])
    ], T1DPrintComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_8__["T1DMedication"])
    ], T1DPrintComponent.prototype, "appMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_9__["T1DPedigree"])
    ], T1DPrintComponent.prototype, "appPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_10__["T1DBiochemicalDetails"])
    ], T1DPrintComponent.prototype, "appBiochemicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printButton', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], T1DPrintComponent.prototype, "printButton", void 0);
    T1DPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], T1DPrintComponent);
    return T1DPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/t1d.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/t1d.component.ts ***!
  \******************************************************************/
/*! exports provided: T1DComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1DComponent", function() { return T1DComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var T1DComponent = /** @class */ (function () {
    function T1DComponent(activatedRoute, router, _snackBar, dialog, subheaderService, cdr, splashService, _vService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.splashService = splashService;
        this._vService = _vService;
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
            templateId: 8,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    T1DComponent.prototype.fetchList = function () {
        var _this = this;
        this.dataSource = [];
        this.loading$ = true;
        this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
        this._vService.getList(this.lastQuery).subscribe(function (res) {
            if (res[0].result === "")
                _this.dataSource = [];
            else
                _this.dataSource = res;
            _this.loading$ = false;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this.cdr.detectChanges();
        });
    };
    T1DComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(8, this.lastQuery.filter).subscribe(function (res) {
            if (res)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On init
     */
    T1DComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('T1D');
        this.subheaderService.showPrintButton(false);
    };
    T1DComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    T1DComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/t1d-form', id], { relativeTo: this.activatedRoute });
    };
    T1DComponent.prototype.openDialog = function (id) {
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
    T1DComponent.prototype.deleteForm = function (id) {
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
    T1DComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], T1DComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], T1DComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], T1DComponent.prototype, "searchInput", void 0);
    T1DComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-t1d',
            template: __importDefault(__webpack_require__(/*! raw-loader!./t1d.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/t1d/t1d.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"]])
    ], T1DComponent);
    return T1DComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/t1d/t1d.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/form-management/t1d/t1d.module.ts ***!
  \***************************************************************/
/*! exports provided: T1dModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T1dModule", function() { return T1dModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_t1d_t1d_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/t1d/t1d.component */ "./src/app/views/pages/form-management/t1d/t1d.component.ts");
/* harmony import */ var _components_t1d_t1d_form_t1d_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/t1d/t1d-form/t1d-form */ "./src/app/views/pages/form-management/t1d/t1d-form/t1d-form.ts");
/* harmony import */ var _components_t1d_subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/t1d/_subs/t1d-clinical-details/t1d-clinical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-clinical-details/t1d-clinical-details.ts");
/* harmony import */ var _components_t1d_subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/t1d/_subs/t1d-life-styles/t1d-life-styles */ "./src/app/views/pages/form-management/t1d/_subs/t1d-life-styles/t1d-life-styles.ts");
/* harmony import */ var _components_t1d_subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/t1d/_subs/t1d-family-history/t1d-family-history */ "./src/app/views/pages/form-management/t1d/_subs/t1d-family-history/t1d-family-history.ts");
/* harmony import */ var _components_t1d_subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/t1d/_subs/t1d-participation-details/t1d-participation-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-participation-details/t1d-participation-details.ts");
/* harmony import */ var _components_t1d_subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/t1d/_subs/t1d-medication/t1d-medication */ "./src/app/views/pages/form-management/t1d/_subs/t1d-medication/t1d-medication.ts");
/* harmony import */ var _components_t1d_subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/t1d/_subs/t1d-pedigree/t1d-pedigree */ "./src/app/views/pages/form-management/t1d/_subs/t1d-pedigree/t1d-pedigree.ts");
/* harmony import */ var _components_t1d_subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details */ "./src/app/views/pages/form-management/t1d/_subs/t1d-biochemical-details/t1d-biochemical-details.ts");
/* harmony import */ var _components_t1d_t1d_print_t1d_print_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/t1d/t1d-print/t1d-print.component */ "./src/app/views/pages/form-management/t1d/t1d-print/t1d-print.component.ts");
/* harmony import */ var _components_t1d_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/t1d/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/t1d/_subs/doc-upload/doc-upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");



















var routes = [
    {
        path: '',
        component: _components_t1d_t1d_component__WEBPACK_IMPORTED_MODULE_7__["T1DComponent"],
    },
    {
        path: 'add',
        component: _components_t1d_t1d_form_t1d_form__WEBPACK_IMPORTED_MODULE_8__["T1DFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_t1d_t1d_form_t1d_form__WEBPACK_IMPORTED_MODULE_8__["T1DFormComponent"],
    },
    {
        path: 'print/:id',
        component: _components_t1d_t1d_print_t1d_print_component__WEBPACK_IMPORTED_MODULE_16__["T1DPrintComponent"],
    }
];
var T1dModule = /** @class */ (function () {
    function T1dModule() {
    }
    T1dModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // T1D
                _components_t1d_t1d_component__WEBPACK_IMPORTED_MODULE_7__["T1DComponent"],
                _components_t1d_t1d_form_t1d_form__WEBPACK_IMPORTED_MODULE_8__["T1DFormComponent"],
                _components_t1d_subs_t1d_participation_details_t1d_participation_details__WEBPACK_IMPORTED_MODULE_12__["T1DParticipationComponent"],
                _components_t1d_subs_t1d_clinical_details_t1d_clinical_details__WEBPACK_IMPORTED_MODULE_9__["T1DClinicalDetails"],
                _components_t1d_subs_t1d_biochemical_details_t1d_biochemical_details__WEBPACK_IMPORTED_MODULE_15__["T1DBiochemicalDetails"],
                _components_t1d_subs_t1d_life_styles_t1d_life_styles__WEBPACK_IMPORTED_MODULE_10__["T1DLifeStyles"],
                _components_t1d_subs_t1d_medication_t1d_medication__WEBPACK_IMPORTED_MODULE_13__["T1DMedication"],
                _components_t1d_subs_t1d_family_history_t1d_family_history__WEBPACK_IMPORTED_MODULE_11__["T1DFamilyHistory"],
                _components_t1d_subs_t1d_pedigree_t1d_pedigree__WEBPACK_IMPORTED_MODULE_14__["T1DPedigree"],
                _components_t1d_t1d_print_t1d_print_component__WEBPACK_IMPORTED_MODULE_16__["T1DPrintComponent"],
                _components_t1d_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__["DocUploadComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            ]
        })
    ], T1dModule);
    return T1dModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-t1d-t1d-module.js.map