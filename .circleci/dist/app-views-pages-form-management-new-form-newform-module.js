(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-new-form-newform-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                  Fasting glucose level\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1\" formControlName=\"BIO_FastingGlucose_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp1.open()\" (focus)=\"dp1.open()\"  name=\"dp1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_FastingGlucose_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1_1\" formControlName=\"BIO_FastingGlucose_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp1_1.open()\" (focus)=\"dp1_1.open()\"  name=\"dp1_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_FastingGlucose_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20 \" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIO_FastingGlucose_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n       \n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Random glucose level\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp2\" formControlName=\"BIO_RandomGlucose_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp2.open()\" (focus)=\"dp2.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_RandomGlucose_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp2_1\" formControlName=\"BIO_RandomGlucose_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp2_1.open()\" (focus)=\"dp2_1.open()\"  name=\"dp2_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_RandomGlucose_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIO_RandomGlucose_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <label>\n                    Glucose tolerance (OGTT)\n                </label>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --Fasting blood glucose (FBG)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp3\" formControlName=\"BIO_OGTT_FBG_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp3\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_OGTT_FBG_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp3_1\" formControlName=\"BIO_OGTT_FBG_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp3_1.open()\" (focus)=\"dp3_1.open()\"  name=\"dp3_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_OGTT_FBG_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n                 <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIO_OGTT_FBG_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --FBG after 2 hours\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp4\" formControlName=\"BIO_OGTT_FBG2_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp4.open()\" (focus)=\"dp4.open()\"  name=\"dp4\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_OGTT_FBG2_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp4_1\" formControlName=\"BIO_OGTT_FBG2_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp4_1.open()\" (focus)=\"dp4_1.open()\"  name=\"dp4_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_OGTT_FBG2_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_OGTT_FBG2_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    HbA1c (%)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp5\" formControlName=\"BIO_HbA1c_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp5.open()\" (focus)=\"dp5.open()\"  name=\"dp5\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_HbA1c_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp5_1\" formControlName=\"BIO_HbA1c_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp5_1.open()\" (focus)=\"dp5_1.open()\"  name=\"dp5_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_HbA1c_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n       \n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_HbA1c_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Total cholesterol (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp6\" formControlName=\"BIO_TotalCholesterol_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp6.open()\" (focus)=\"dp6.open()\"  name=\"dp6\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_TotalCholesterol_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp6_1\" formControlName=\"BIO_TotalCholesterol_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp6_1.open()\" (focus)=\"dp6_1.open()\"  name=\"dp6_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_TotalCholesterol_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_TotalCholesterol_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Triglyceride (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp7\" formControlName=\"BIO_Triglyceride_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp7.open()\" (focus)=\"dp7.open()\"  name=\"dp7\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Triglyceride_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp7_1\" formControlName=\"BIO_Triglyceride_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp7_1.open()\" (focus)=\"dp7_1.open()\"  name=\"dp7_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_Triglyceride_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Triglyceride_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    HDL (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp8\" formControlName=\"BIO_HDL_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp8.open()\" (focus)=\"dp8.open()\"  name=\"dp8\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_HDL_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp8_1\" formControlName=\"BIO_HDL_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp8_1.open()\" (focus)=\"dp8_1.open()\"  name=\"dp8_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_HDL_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_HDL_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    LDL (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp9\" formControlName=\"BIO_LDL_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp9.open()\" (focus)=\"dp9.open()\"  name=\"dp9\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_LDL_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp9_1\" formControlName=\"BIO_LDL_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp9_1.open()\" (focus)=\"dp9_1.open()\"  name=\"dp9_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_LDL_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_LDL_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --Microalbumin (mg)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp10\" formControlName=\"BIO_Microalbumin_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp10.open()\" (focus)=\"dp10.open()\"  name=\"dp10\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Microalbumin_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp10_1\" formControlName=\"BIO_Microalbumin_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp10_1.open()\" (focus)=\"dp10_1.open()\"  name=\"dp10_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\" formControlName=\"BIO_Microalbumin_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Microalbumin_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --Albuminuria (mg/g)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp11\" formControlName=\"BIO_albuminuria_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp11.open()\" (focus)=\"dp11.open()\"  name=\"dp11\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_albuminuria_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp11_1\" formControlName=\"BIO_albuminuria_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp11_1.open()\" (focus)=\"dp11_1.open()\"  name=\"dp11_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_albuminuria_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_albuminuria_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --Albumin/creatinine ratio (mg/gm)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp12\" formControlName=\"BIO_albumincreatinine_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp12.open()\" (focus)=\"dp12.open()\"  name=\"dp12\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_albumincreatinine_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp12_1\" formControlName=\"BIO_albumincreatinine_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp12_1.open()\" (focus)=\"dp12_1.open()\"  name=\"dp12_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_albumincreatinine_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_albumincreatinine_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Creatinine (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp13\" formControlName=\"BIO_Creatinine_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp13.open()\" (focus)=\"dp13.open()\"  name=\"dp13\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Creatinine_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp13_1\" formControlName=\"BIO_Creatinine_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp13_1.open()\" (focus)=\"dp13_1.open()\"  name=\"dp13_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_Creatinine_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Creatinine_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Urea\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp14\" formControlName=\"BIO_Urea_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp14.open()\" (focus)=\"dp14.open()\"  name=\"dp14\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp14\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp14></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Urea_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp14_1\" formControlName=\"BIO_Urea_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp14_1.open()\" (focus)=\"dp14_1.open()\"  name=\"dp14_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp14_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp14_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_Urea_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Urea_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Vitamin D level (ng/ml)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp15\" formControlName=\"BIO_VitaminDLevel_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp15.open()\" (focus)=\"dp15.open()\"  name=\"dp15\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp15\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp15></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_VitaminDLevel_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp15_1\" formControlName=\"BIO_VitaminDLevel_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp15_1.open()\" (focus)=\"dp15_1.open()\"  name=\"dp15_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp15_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp15_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_VitaminDLevel_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_VitaminDLevel_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    eGFR\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp16\" formControlName=\"BIO_egfr_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp16.open()\" (focus)=\"dp16.open()\"  name=\"dp16\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp16\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp16></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_egfr_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp16_1\" formControlName=\"BIO_egfr_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp16_1.open()\" (focus)=\"dp16_1.open()\"  name=\"dp16_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp16_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp16_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_egfr_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_egfr_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Serum sodium\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp17\" formControlName=\"BIO_sodium_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp17.open()\" (focus)=\"dp17.open()\"  name=\"dp17\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp17\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp17></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_sodium_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp17_1\" formControlName=\"BIO_sodium_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp17_1.open()\" (focus)=\"dp17_1.open()\"  name=\"dp17_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp17_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp17_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_sodium_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_sodium_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Serum potassium\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp18\" formControlName=\"BIO_potassium_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp18.open()\" (focus)=\"dp18.open()\"  name=\"dp18\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp18\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp18></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_potassium_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp18_1\" formControlName=\"BIO_potassium_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp18_1.open()\" (focus)=\"dp18_1.open()\"  name=\"dp18_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp18_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp18_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_potassium_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_potassium_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Serum calcium\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp19\" formControlName=\"BIO_calcium_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp19.open()\" (focus)=\"dp19.open()\"  name=\"dp19\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp19\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp19></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_calcium_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp19_1\" formControlName=\"BIO_calcium_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp19_1.open()\" (focus)=\"dp19_1.open()\"  name=\"dp19_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp19_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp19_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_calcium_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_calcium_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Serum magnesium\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp20\" formControlName=\"BIO_mag_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp20.open()\" (focus)=\"dp20.open()\"  name=\"dp20\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp20\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp20></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_mag_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp20_1\" formControlName=\"BIO_mag_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp20_1.open()\" (focus)=\"dp20_1.open()\"  name=\"dp20_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp20_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp20_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_mag_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_mag_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Phosphorus\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp21\" formControlName=\"BIO_phos_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp21.open()\" (focus)=\"dp21.open()\"  name=\"dp21\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp21\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp21></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_phos_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp21_1\" formControlName=\"BIO_phos_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp21_1.open()\" (focus)=\"dp21_1.open()\"  name=\"dp21_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp21_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp21_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_phos_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_phos_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Bicarbonate\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp22\" formControlName=\"BIO_bicar_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp22.open()\" (focus)=\"dp22.open()\"  name=\"dp22\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp22\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp22></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_bicar_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp22_1\" formControlName=\"BIO_bicar_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp22_1.open()\" (focus)=\"dp22_1.open()\"  name=\"dp22_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp22_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp22_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_bicar_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_bicar_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Total protein\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp23\" formControlName=\"BIO_protein_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp23.open()\" (focus)=\"dp23.open()\"  name=\"dp23\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp23\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp23></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_protein_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp23_1\" formControlName=\"BIO_protein_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp23_1.open()\" (focus)=\"dp23_1.open()\"  name=\"dp23_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp23_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp23_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_protein_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_protein_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Serum albumin\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp24\" formControlName=\"BIO_serum_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp24.open()\" (focus)=\"dp24.open()\"  name=\"dp24\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp24\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp24></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_serum_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp24_1\" formControlName=\"BIO_serum_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp24_1.open()\" (focus)=\"dp24_1.open()\"  name=\"dp24_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp24_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp24_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_serum_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_serum_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    C-reactive protein\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp25\" formControlName=\"BIO_cprotein_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp25.open()\" (focus)=\"dp25.open()\"  name=\"dp25\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp25\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp25></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_cprotein_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp25_1\" formControlName=\"BIO_cprotein_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp25_1.open()\" (focus)=\"dp25_1.open()\"  name=\"dp25_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp25_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp25_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_cprotein_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_cprotein_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Alanine transaminase (ALT)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp26\" formControlName=\"BIO_alt_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp26.open()\" (focus)=\"dp26.open()\"  name=\"dp26\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp26\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp26></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_alt_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp26_1\" formControlName=\"BIO_alt_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp26_1.open()\" (focus)=\"dp26_1.open()\"  name=\"dp26_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp26_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp26_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_alt_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_alt_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Alkaline phosphatase (ALP)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp27\" formControlName=\"BIO_alp_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp27.open()\" (focus)=\"dp27.open()\"  name=\"dp27\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp27\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp27></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_alp_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp27_1\" formControlName=\"BIO_alp_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp27_1.open()\" (focus)=\"dp27_1.open()\"  name=\"dp27_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp27_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp27_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_alp_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_alp_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Aspartate transaminase (AST)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp28\" formControlName=\"BIO_ast_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp28.open()\" (focus)=\"dp28.open()\"  name=\"dp28\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp28\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp28></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_ast_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp28_1\" formControlName=\"BIO_ast_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp28_1.open()\" (focus)=\"dp28_1.open()\"  name=\"dp28_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp28_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp28_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_ast_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_ast_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Bilirubin level (direct/indirect)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp29\" formControlName=\"BIO_bilirubin_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp29.open()\" (focus)=\"dp29.open()\"  name=\"dp29\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp29\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp29></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_bilirubin_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp29_1\" formControlName=\"BIO_bilirubin_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp29_1.open()\" (focus)=\"dp29_1.open()\"  name=\"dp29_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp29_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp29_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_bilirubin_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_bilirubin_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    T3\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp30\" formControlName=\"BIO_t3_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp30.open()\" (focus)=\"dp30.open()\"  name=\"dp30\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp30\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp30></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_t3_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp30_1\" formControlName=\"BIO_t3_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp30_1.open()\" (focus)=\"dp30_1.open()\"  name=\"dp30_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp30_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp30_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_t3_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_t3_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    T4\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp31\" formControlName=\"BIO_t4_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp31.open()\" (focus)=\"dp31.open()\"  name=\"dp31\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp31\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp31></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_t4_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp31_1\" formControlName=\"BIO_t4_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp31_1.open()\" (focus)=\"dp31_1.open()\"  name=\"dp31_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp31_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp31_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_t4_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_t4_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Free T4\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp32\" formControlName=\"BIO_freet4_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp32.open()\" (focus)=\"dp32.open()\"  name=\"dp32\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp32\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp32></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_freet4_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp32_1\" formControlName=\"BIO_freet4_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp32_1.open()\" (focus)=\"dp32_1.open()\"  name=\"dp32_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp32_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp32_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_freet4_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_freet4_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    TSH\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp33\" formControlName=\"BIO_tsh_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp33.open()\" (focus)=\"dp33.open()\"  name=\"dp33\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp33\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp33></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_tsh_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp33_1\" formControlName=\"BIO_tsh_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp33_1.open()\" (focus)=\"dp33_1.open()\"  name=\"dp33_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp33_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp33_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_tsh_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_tsh_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Parathyroid hormone\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp34\" formControlName=\"BIO_parathyroid_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp34.open()\" (focus)=\"dp34.open()\"  name=\"dp34\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp34\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp34></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_parathyroid_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp34_1\" formControlName=\"BIO_parathyroid_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp34_1.open()\" (focus)=\"dp34_1.open()\"  name=\"dp34_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp34_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp34_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_parathyroid_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_parathyroid_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    White blood cell (WBC) count\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp35\" formControlName=\"BIO_wbc_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp35.open()\" (focus)=\"dp35.open()\"  name=\"dp35\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp35\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp35></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_wbc_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp35_1\" formControlName=\"BIO_wbc_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp35_1.open()\" (focus)=\"dp35_1.open()\"  name=\"dp35_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp35_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp35_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_wbc_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_wbc_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    White blood cell (WBC) differential (if not normal)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp36\" formControlName=\"BIO_wbc_diff_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp36.open()\" (focus)=\"dp36.open()\"  name=\"dp36\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp36\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp36></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_wbc_diff_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp36_1\" formControlName=\"BIO_wbc_diff_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp36_1.open()\" (focus)=\"dp36_1.open()\"  name=\"dp36_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp36_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp36_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_wbc_diff_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_wbc_diff_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Red blood cell (RBC) count\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp37\" formControlName=\"BIO_rbc_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp37.open()\" (focus)=\"dp37.open()\"  name=\"dp37\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp37\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp37></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_rbc_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp37_1\" formControlName=\"BIO_rbc_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp37_1.open()\" (focus)=\"dp37_1.open()\"  name=\"dp37_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp37_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp37_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_rbc_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_rbc_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Haemoglobin\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp38\" formControlName=\"BIO_haemoglobin_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp38.open()\" (focus)=\"dp38.open()\"  name=\"dp38\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp38\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp38></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_haemoglobin_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp38_1\" formControlName=\"BIO_haemoglobin_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp38_1.open()\" (focus)=\"dp38_1.open()\"  name=\"dp38_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp38_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp38_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_haemoglobin_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_haemoglobin_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Haematocrit\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp39\" formControlName=\"BIO_haematocrit_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp39.open()\" (focus)=\"dp39.open()\"  name=\"dp39\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp39\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp39></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_haematocrit_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp39_1\" formControlName=\"BIO_haematocrit_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp39_1.open()\" (focus)=\"dp39_1.open()\"  name=\"dp39_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp39_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp39_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_haematocrit_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_haematocrit_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Ferritin\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp40\" formControlName=\"BIO_ferritin_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp40.open()\" (focus)=\"dp40.open()\"  name=\"dp40\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp40\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp40></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_ferritin_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp40_1\" formControlName=\"BIO_ferritin_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp40_1.open()\" (focus)=\"dp40_1.open()\"  name=\"dp40_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp40_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp40_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_ferritin_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_ferritin_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Red cell distribution width (RDW)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp41\" formControlName=\"BIO_rdw_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp41.open()\" (focus)=\"dp41.open()\"  name=\"dp41\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp41\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp41></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_rdw_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp41_1\" formControlName=\"BIO_rdw_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp41_1.open()\" (focus)=\"dp41_1.open()\"  name=\"dp41_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp41_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp41_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_rdw_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_rdw_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <label>\n                    Red blood cell indices:\n                </label>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --MCV\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp42\" formControlName=\"BIO_rbcmcv_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp42.open()\" (focus)=\"dp42.open()\"  name=\"dp42\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp42\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp42></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_rbcmcv_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp42_1\" formControlName=\"BIO_rbcmcv_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp42_1.open()\" (focus)=\"dp42_1.open()\"  name=\"dp42_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp42_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp42_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_rbcmcv_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_rbcmcv_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --MCH\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp43\" formControlName=\"BIO_rbcmch_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp43.open()\" (focus)=\"dp43.open()\"  name=\"dp43\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp43\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp43></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_rbcmch_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp43_1\" formControlName=\"BIO_rbcmch_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp43_1.open()\" (focus)=\"dp43_1.open()\"  name=\"dp43_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp43_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp43_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_rbcmch_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_rbcmch_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    --MCHC\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp44\" formControlName=\"BIO_rbcmchc_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp44.open()\" (focus)=\"dp44.open()\"  name=\"dp44\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp44\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp44></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_rbcmchc_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp44_1\" formControlName=\"BIO_rbcmchc_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp44_1.open()\" (focus)=\"dp44_1.open()\"  name=\"dp44_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp44_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp44_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_rbcmchc_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_rbcmchc_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Reticulocyte count\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp45\" formControlName=\"BIO_Reticulocyte_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp45.open()\" (focus)=\"dp45.open()\"  name=\"dp45\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp45\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp45></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Reticulocyte_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp45_1\" formControlName=\"BIO_Reticulocyte_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp45_1.open()\" (focus)=\"dp45_1.open()\"  name=\"dp45_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp45_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp45_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_Reticulocyte_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Reticulocyte_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Platelet (thrombocyte) count\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp46\" formControlName=\"BIO_Platelet_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp46.open()\" (focus)=\"dp46.open()\"  name=\"dp46\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp46\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp46></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_Platelet_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp46_1\" formControlName=\"BIO_Platelet_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp46_1.open()\" (focus)=\"dp46_1.open()\"  name=\"dp46_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp46_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp46_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_Platelet_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_Platelet_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Mean platelet volume (MPV)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp47\" formControlName=\"BIO_mpv_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp47.open()\" (focus)=\"dp47.open()\"  name=\"dp47\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp47\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp47></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_mpv_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp47_1\" formControlName=\"BIO_mpv_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp47_1.open()\" (focus)=\"dp47_1.open()\"  name=\"dp47_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp47_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp47_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_mpv_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_mpv_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <label>\n                    Urine tests summary (report abnormal):\n                </label>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Macroscopic appearance\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp48\" formControlName=\"BIO_UTSmacroscopic_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp48.open()\" (focus)=\"dp48.open()\"  name=\"dp48\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp48\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp48></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSmacroscopic_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp48_1\" formControlName=\"BIO_UTSmacroscopic_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp48_1.open()\" (focus)=\"dp48_1.open()\"  name=\"dp48_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp48_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp48_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSmacroscopic_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSmacroscopic_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    pH\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp50\" formControlName=\"BIO_UTSph_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp50.open()\" (focus)=\"dp50.open()\"  name=\"dp50\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp50\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp50></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSph_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp50_1\" formControlName=\"BIO_UTSph_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp50_1.open()\" (focus)=\"dp50_1.open()\"  name=\"dp50_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp50_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp50_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSph_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSph_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Glucose\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp49\" formControlName=\"BIO_UTSglu_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp49.open()\" (focus)=\"dp49.open()\"  name=\"dp49\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp49\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp49></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSglu_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp49_1\" formControlName=\"BIO_UTSglu_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp49_1.open()\" (focus)=\"dp49_1.open()\"  name=\"dp49_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp49_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp49_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSglu_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSglu_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Specific gravity\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp51\" formControlName=\"BIO_UTSgravity_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp51.open()\" (focus)=\"dp51.open()\"  name=\"dp51\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp51\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp51></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSgravity_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp51_1\" formControlName=\"BIO_UTSgravity_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp51_1.open()\" (focus)=\"dp51_1.open()\"  name=\"dp51_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp51_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp51_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSgravity_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSgravity_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Nitrite\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp52\" formControlName=\"BIO_UTSNitrite_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp52.open()\" (focus)=\"dp52.open()\"  name=\"dp52\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp52\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp52></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSNitrite_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp52_1\" formControlName=\"BIO_UTSNitrite_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp52_1.open()\" (focus)=\"dp52_1.open()\"  name=\"dp52_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp52_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp52_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSNitrite_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSNitrite_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Leukocyte esterase\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp53\" formControlName=\"BIO_UTSLeukocyte_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp53.open()\" (focus)=\"dp53.open()\"  name=\"dp53\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp53\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp53></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSLeukocyte_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp53_1\" formControlName=\"BIO_UTSLeukocyte_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp53_1.open()\" (focus)=\"dp53_1.open()\"  name=\"dp53_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp53_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp53_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSLeukocyte_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSLeukocyte_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Microscopy (cells)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp54\" formControlName=\"BIO_UTSMicrocells_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp54.open()\" (focus)=\"dp54.open()\"  name=\"dp54\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp54\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp54></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSMicrocells_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp54_1\" formControlName=\"BIO_UTSMicrocells_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp54_1.open()\" (focus)=\"dp54_1.open()\"  name=\"dp54_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp54_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp54_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSMicrocells_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSMicrocells_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Microscopy (casts)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp55\" formControlName=\"BIO_UTSMicrocasts_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp55.open()\" (focus)=\"dp55.open()\"  name=\"dp55\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp55\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp55></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSMicrocasts_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp55_1\" formControlName=\"BIO_UTSMicrocasts_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp55_1.open()\" (focus)=\"dp55_1.open()\"  name=\"dp55_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp55_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp55_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSMicrocasts_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSMicrocasts_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Microscopy (crystals)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp56\" formControlName=\"BIO_UTSMicrocrystals_RecentTest_Date\"  placeholder=\"Date of recent test\" (click)=\"dp56.open()\" (focus)=\"dp56.open()\"  name=\"dp56\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp56\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp56></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIO_UTSMicrocrystals_RecentTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp56_1\" formControlName=\"BIO_UTSMicrocrystals_LastTest_Date\"  placeholder=\"Date of last test\" (click)=\"dp56_1.open()\" (focus)=\"dp56_1.open()\"  name=\"dp56_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp56_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp56_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIO_UTSMicrocrystals_LastTest_Result\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIO_UTSMicrocrystals_IsNormalResult\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Family History\n                </h6>\n            </div>\n            <div class=\"row col-md-12\">   \n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\"><br>\n                            Father's Ethnicity\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"Ethnicity\"  formControlName=\"fam_fatethnicity\"><br>\n                            <mat-radio-button matInput  value=\"single\">Arab</mat-radio-button>\n                            <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                            <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                            <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                            <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                        </mat-radio-group>\n    \n                    </div>\n                </div>\n                    <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('fam_fatethnicity').value == 'other'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If Other, specify\"\n                                formControlName=\"fam_fatethnicity_other\" />\n                        </mat-form-field>\n                    </div>\n                \n            </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Father's Place Of Birth\" formControlName=\"fam_fatplaceofbirth\" [matAutocomplete]=\"pob\">\n                <mat-autocomplete #pob=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                        {{ nationality  }}\n                    </mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                    Place of Birth is\n                    <strong>required</strong>\n                </mat-error>\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Nationality</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        <div class=\"row col-md-12\">   \n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Mother's Ethnicity\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"Ethnicity\"  formControlName=\"fam_motethnicity\"><br>\n                        <mat-radio-button matInput  value=\"single\">Arab</mat-radio-button>\n                        <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                        <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                        <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                        <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                    </mat-radio-group>\n\n                </div>\n            </div>\n                <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('fam_motethnicity').value == 'other'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Other, specify\"\n                            formControlName=\"fam_motethnicity_other\" />\n                    </mat-form-field>\n                </div>\n            \n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Mother's Place Of Birth\" formControlName=\"fam_motplaceofbirth\" [matAutocomplete]=\"pob\">\n                <mat-autocomplete #pob=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                        {{ nationality  }}\n                    </mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                    Place of Birth is\n                    <strong>required</strong>\n                </mat-error>\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Nationality</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                    Are your parents related?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"fam_parents_related\"><br>\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('fam_parents_related').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, please specify\"\n                        formControlName=\"fam_parents_related_yes\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"form-group col-md-12 row\">\n\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <label>Has anyone in your immediate family (siblings or parents) ever had any of the following conditions?</label>\n            </div>\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n    \n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_hypertension\">Hypertension</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_heart\">Heart disease</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_dep\">Depression</mat-checkbox>\n                    <mat-checkbox  class=\"lab-mar-right-15\"  formControlName=\"fam_osteo\">Osteoporosis</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_type1\">Type 1 Diabetes</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_type2\">Type 2 Diabetes</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_gesdia\">Gestational diabetes</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"fam_cancer\">Cancer</mat-checkbox>\n                    <div *ngIf=\"Mform.get('fam_cancer').value\"  class=\"dis-con\">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If yes, type\"\n                                       formControlName=\"fam_condition_cancer_type\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <mat-checkbox  class=\"lab-mar-right-15\"  formControlName=\"fam_other\">Other</mat-checkbox>\n                    <div *ngIf=\"Mform.get('fam_other').value\"  class=\"dis-con\">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If other, please specify\"\n                                       formControlName=\"fam_condition_other\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"row col-md-12\">   \n                \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-form-field class=\"example-full-width\" >\n                            <mat-label>Leave a comment</mat-label>\n                            <textarea matInput rows=\"7\" placeholder=\"Family Pedigree\" formControlName=\"fam_pedigree\"></textarea>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Laboratory Details (Filled by research members)\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Sample Type\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"lab_sample_type_blood\">Blood</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"lab_sample_type_saliva\">Saliva </mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"lab_sample_type_tissue\">Tissue</mat-checkbox>\n                     <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"lab_sample_type_other\">Other</mat-checkbox>\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('lab_sample_type_other').value\">\n                        <mat-form-field   class=\"mat-form-field-fluid\">\n                            <input   type=\"text\" matInput placeholder=\"If other, Please specify\" formControlName=\"lab_sample_type_other_text\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"dobPicker\"\n                           (click)=\"dobPicker.open()\"\n                           [max]=\"maxDate\"\n                           autocomplete=\"off\"\n                           placeholder=\"Sample receiving date\" formControlName=\"lab_sample_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #dobPicker></mat-datepicker>\n                    <!--<mat-hint align=\"start\">Please enter-->\n                    <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                </mat-form-field>\n            </div>\n            \n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Storage\" autocomplete=\"off\" formControlName=\"lab_storage\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Sample Volume\" autocomplete=\"off\" formControlName=\"lab_sample_volume\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Project Code\" autocomplete=\"off\" formControlName=\"lab_project_code\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Test Code\" autocomplete=\"off\" formControlName=\"lab_test_code\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <textarea matInput placeholder=\"Comments\" rows=\"5\" autocomplete=\"off\" formControlName=\"lab_comments\" >\n                        </textarea>\n                </mat-form-field>\n            </div>\n        </div>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Lifestyle Details\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        What is your smoking status\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"life_smokingstatus\">\n                        <mat-radio-button  value=\"yes\">Current smoker</mat-radio-button>\n                        <mat-radio-button  value=\"exsmoker\">Ex-smoker</mat-radio-button>\n                        <mat-radio-button  value=\"never\">Never smoked</mat-radio-button>\n                        <mat-radio-button  value=\"prefer not to disclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n            <div class=\"row col-md-12 form-group\">\n                <h6>\n                    Physical Activity\n                </h6>\n            </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you exercise or walk?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"Walk\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"other\">Other</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n                <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('Walk').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, Please Specify in minutes\"\n                            formControlName=\"Walk_IfYes\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('Walk').value == 'other'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Other, Please Specify\"\n                            formControlName=\"Walk_others_Specify\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\" >\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Intensity\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-8  form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"walking_intensity\">\n                            <mat-radio-button  value=\"low\">Low</mat-radio-button>\n                            <mat-radio-button  value=\"moderate\">Moderate</mat-radio-button>\n                            <mat-radio-button  value=\"high\">High</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n    \n        <div class=\"row  col-md-12\">\n            <div class=\"form-group\">\n                <h6>\n                    Diet\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you follow a healthy diet\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"healthy_diet\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('healthy_diet').value == 'others'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Others, Please specify\"\n                           formControlName=\"diet_other\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Weight change in the past 5 years\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"weight_change\">\n                        <mat-radio-button  value=\"increased\">Increased</mat-radio-button>\n                        <mat-radio-button  value=\"decreased\">Decreased</mat-radio-button>\n                        <mat-radio-button  value=\"nochange\">No change</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you on a special diet to lose/gain weight?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"spl_diet\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        How many times a week do you consume fast food?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"fastfood_intake\">\n                        <mat-radio-button  value=\"0\">0 times</mat-radio-button>\n                        <mat-radio-button  value=\"2\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"4\">4 times</mat-radio-button>\n                        <mat-radio-button  value=\"6\">More than 6 times</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        How many times a week do you consume fruits/vegetables?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"fruits_veg\">\n                        <mat-radio-button  value=\"0\">0 times</mat-radio-button>\n                        <mat-radio-button  value=\"1\">Once</mat-radio-button>\n                        <mat-radio-button  value=\"2\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"3\">More than 3 times</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        How much soft drinks do you consume per week?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"softdrinks\">\n                        <mat-radio-button  value=\"0\">0 litres</mat-radio-button>\n                        <mat-radio-button  value=\"2\">2 litres</mat-radio-button>\n                        <mat-radio-button  value=\"4\">4 litres</mat-radio-button>\n                        <mat-radio-button  value=\"6\">More than 6 litres</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Do you eat after midnight (12am)?\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"eat_after_midnight\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12 \">\n            <div class=\"col-md-12 row form-group\">\n                <h6>\n                    Satisfaction\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you satisfied with your body?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"satisfied_body\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you happy with your life?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"happy_life\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you consider yourself a healthy individual?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"healthy_individual\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Medical details (If Type 2 diabetic)\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you have diabetes-related complications?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"type2_complications\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('type2_complications').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, number of years\"\n                        formControlName=\"type2_complications_yestxt\" />\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"form-group  col-md-12 row\">\n            <h6>If Yes, what are the specific diabetes related complications? (Please select as many as appropriate)</h6>\n        </div>\n        <div class=\"form-group col-md-12 row\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_retinopathy\"  >Retinopathy</mat-checkbox>\n                    <br>\n                    <mat-hint>\n                        *Nonproliferative<br>\n                        *Proliferative<br>\n                        *Laser\n                    </mat-hint>\n                </div>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_neuropathy\"  >Neuropathy</mat-checkbox>\n                    <br>\n                    <mat-hint>\n                        \n                        *gangrene<br>\n                        *loss of sensation/numbness/pain/burning/tingling\n                        *Loss of sensation, numbness, pain, burning, tingling\n                        *Amputation\n                        *Loss of toe, foot, or leg\n                        *Pain in calf muscles while walking\n                        *Circulation/peripheral vascular disease/operation on artery in legs.\n                    </mat-hint>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field  class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Other\" formControlName=\"type2_neuropathy_other\" autocomplete=\"off\"    />\n                </mat-form-field>\n                    <mat-hint>\n                        Amputation:<br>\n                        *Loss of toe, foot or leg. <br>*Pain in calf muscles while walking. <br>\n                        *Circulation/peripheral vascular disease/operation on artery in legs.\n                    </mat-hint>\n                \n            </div> -->\n        </div>\n        <div class=\"form-group col-md-12  row\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_cva\"  >Cerebrovascular accident (C.V.A)\n                    </mat-checkbox>\n                    <br>\n                    <mat-hint>\n                        *TIA <br>\n                        *Stroke (bleeding, Ischemia) <br>\n                        *Bleeding<br>\n                        *loss of sensation down one side of the body<br>\n                        *Difficulty in speaking/eating<br>\n                        *Operation on artery or neck<br>\n                        *Facial drop/paralysed arm or leg<br>\n                    </mat-hint>\n                </div>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_nephropathy\" >Nephropathy</mat-checkbox>\n                     <br>\n                    <mat-hint>\n                       \n                        * protein or albumin in the urine<br>\n                        * Albuminuria <br>\n                        * 30-299 <br>\n                        * >300<br>\n                        * eGFR<br>\n                    </mat-hint>\n                    <div class=\"col-md-12 row\">\n                        <mat-form-field   class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"eGFR\" formControlName=\"type2_egfr\" autocomplete=\"off\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-md-12 row\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_cad\"  >Coronary artery disease(C.A.D)\n                    </mat-checkbox>\n                    <br>\n                    <mat-hint>\n                        * Coronary artery bypass grafting (CABG)<br>\n                        * Percutaneous Coronary Intervention (PCI)<br>\n                        * Arrhythymias (AF)\n                    </mat-hint>\n                </div>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox   formControlName=\"type2_other\">Other</mat-checkbox>\n                    <div [hidden]=\"!Mform.get('type2_other').value\">\n                        <mat-form-field   class=\"mat-form-field-fluid\">\n                            <input  type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"type2_other_specify\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group  col-md-12 row\">\n\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <label>* Current diabetes management method</label>\n            </div>\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_none\">None</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_tabletsonly\">Tablets only </mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_diettablets\">Diet & Tablets </mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"    formControlName=\"diabetes_mgt_diettabletsinsulin\">Diet, Tablets & Insulin</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_dietonly\">Diet only</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_insulinonly\">Insulin only</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_dietinsulin\">Diet & Insulin</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_unknown\">Unknown</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_mgt_other\">Others please specify</mat-checkbox>\n                    <div class=\"col-md-12 row\" [hidden]=\"!Mform.get('diabetes_mgt_other').value\">\n                        <mat-form-field   class=\"mat-form-field-fluid\">\n                            <input   type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"diabetes_mgt_othertxt\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Who do you usually contact for health advice about your health?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"med_healthadvcontact\">\n                        <mat-radio-button  value=\"noone\">No one</mat-radio-button>\n                        <mat-radio-button  value=\"dietician\">Dietician</mat-radio-button>\n                        <mat-radio-button  value=\"nurse\">Nurse</mat-radio-button>\n                        <mat-radio-button  value=\"gp\">GP</mat-radio-button>\n                        <mat-radio-button  value=\"pharmacist\">Pharmacist</mat-radio-button>\n                        <mat-radio-button  value=\"diabetesspecialist\">Diabetes Specialist</mat-radio-button>\n                        <mat-radio-button  value=\"other\">Other</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                      \n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('med_healthadvcontact').value == 'other'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Other\"\n                        formControlName=\"med_healthadvcontact_othtxt\" />\n                </mat-form-field>\n            </div>\n       </div>\n       \n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you do an annual Medical checkup?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"med_annualcheck\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n           \n            <div class=\"col-md-12 row\" >\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Have you seen any health practitioners (GP/specialist/consultant) in the last 12 months?\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-8  form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"med_Gpvisit\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                          \n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('med_Gpvisit').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes,\"\n                            formControlName=\"med_Gpvisit_yestxt\" />\n                    </mat-form-field>\n                </div>\n           </div>\n           <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        If you are >40 years, how often do you monitor your blood glucose at home (i.e. with finger pricks)?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"med_glucosemon40\">\n                        <mat-radio-button  value=\"0times\">0 times</mat-radio-button>\n                        <mat-radio-button  value=\"morethan4timesaday\">More than 4 times a day</mat-radio-button>\n                        <mat-radio-button  value=\"onceaday\">Once a day</mat-radio-button>\n                        <mat-radio-button  value=\"3to5timesaweek\">3 to 5 times a week</mat-radio-button>\n                        <mat-radio-button  value=\"onceaweek\">Once a week</mat-radio-button>\n                        <mat-radio-button  value=\"onceamonth\">Once a month</mat-radio-button>\n                        <mat-radio-button  value=\"2to4timesaday\">2 to 4 times a day</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not sure</mat-radio-button>\n                        <mat-radio-button  value=\"other\">Other</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                      \n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('med_glucosemon40').value == 'other'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Other\"\n                        formControlName=\"med_glucosemon40_othtxt\" />\n                </mat-form-field>\n            </div>\n       </div>\n       <div class=\"col-md-12 row\" >\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\">\n                    Have you been admitted to the hospital/emergency department in the last 12 months?\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-8  form-group\">\n            <div>\n                <mat-radio-group formControlName=\"med_hospitaladm\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\">\n                  \n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-8 form-group\" *ngIf=\"Mform.get('med_hospitaladm').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If Yes\"\n                    formControlName=\"med_hospitaladm_yestxt\" />\n            </mat-form-field>\n        </div>\n   </div>\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you have any allergies?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"allergies\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('allergies').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes,\"\n                        formControlName=\"allergies_yestxt\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you have any intolerance?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"intolerance\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('intolerance').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes,\"\n                        formControlName=\"intolerance_yestxt\" />\n                </mat-form-field>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Have you been diagnosed with any of these conditions? (tick the box(s)) If yes, please specify year of diagnosis. (you can tick more than one answer)\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Hypertension (excluding during pregnancy)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_hypertension\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_hypertension').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_hypertension_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Type 2 Diabetes (excluding during pregnancy) if yes, please fill section 'Medical details (If Type 2 diabetic)'.\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_type2diabetes\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_type2diabetes').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_type2diabetes_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Type 1 diabetes\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_type1diabetes\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_type1diabetes').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_type1diabetes_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        High cholesterol\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_highcholesterol\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_highcholesterol').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_highcholesterol_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Obesity\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_obesity\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_obesity').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_obesity_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Heart disease\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_heartdis\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_heartdis').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_heartdis_year\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Cancer\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_cancer\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                        <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n           \n        </div>\n        <div class=\"row col-md-12\" *ngIf=\"Mform.get('med_cancer').value == 'yes'\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                      \n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('med_cancer').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, specify year\"\n                        formControlName=\"med_cancer_year\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('med_cancer').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, what type\"\n                        formControlName=\"med_cancer_type\" />\n                </mat-form-field>\n            </div>\n       </div>\n       <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Depression\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_depression\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_depression').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_depression_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Osteoporosis\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_osteoporosis\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_osteoporosis').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_osteoporosis_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Asthma\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_asthma\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_asthma').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_asthma_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Inherited disease\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_inheriteddis\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_inheriteddis').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_inheriteddis_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Thyroid problem\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_thyroid\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_thyroid').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_thyroid_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Liver Disease\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_liver\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_liver').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_liver_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Arthritis Rheumatism\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_arthritis\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_arthritis').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_arthritis_year\" />\n            </mat-form-field>\n        </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Hepatitis A-B-C-D\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_hepatitis\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_hepatitis').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_hepatitis_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Sickle cell disease\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_sickle\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_sickle').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_sickle_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Neurological disorder\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_neurological\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_neurological').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_neurological_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Fainting or dizzy spills\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_faint\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_faint').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_faint_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Headache/migraine\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_migraine\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_migraine').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_migraine_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Epilepsy/seizures\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_epilepsy\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                    <mat-radio-button  value=\"prefernottodisclose\">Prefer not to disclose</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-2 form-group\" *ngIf=\"Mform.get('med_epilepsy').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify year\"\n                    formControlName=\"med_epilepsy_year\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Other (Please specify)\n                </label>\n            </div>\n        </div>\n        \n        <div class=\"col-md-8 form-group\"  >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If other, please specify\"\n                    formControlName=\"med_other_specify\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row col-md-12\">\n        <div class=\"col-md-4\">\n            <div class=\"kt-section\">\n                <label align=\"start\"><br>\n                    Did you have any surgery?\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-4 form-group\">\n            <div><br>\n                <mat-radio-group formControlName=\"med_surgery\">\n                    <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  value=\"dontknow\">Don't Know</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n        <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('med_surgery').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, please specify\"\n                    formControlName=\"med_surgery_yestxt\" />\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"form-group col-md-12 row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <label>Are you currently taking medications for these conditions? (you can tick more than one answer)</label>\n        </div>\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_hypertension\">Hypertension</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_type1\">Type 1 Diabetes</mat-checkbox>\n                <mat-checkbox  class=\"lab-mar-right-15\"  formControlName=\"medication_type2\">Type 2 Diabetes </mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_choles\">High cholesterol</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_obe\">Obesity</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_heart\">Heart disease</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_cancer\">Cancer</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_dep\">Depression</mat-checkbox>\n                <mat-checkbox  class=\"lab-mar-right-15\"  formControlName=\"medication_osteo\">Osteoporosis</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_asth\">Asthma</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_inhdis\">Inherited disease</mat-checkbox>\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"medication_vit\">Vitamin supplements</mat-checkbox>\n                <mat-checkbox  class=\"lab-mar-right-15\"  formControlName=\"medication_none\">None</mat-checkbox>\n                \n            </div>\n        </div>\n    </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"><br>\n                        Are your vaccinations up-to-date?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div><br>\n                    <mat-radio-group formControlName=\"med_vaccine\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </div>\n        </form>\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n            <div class=\"col-md-12 row form-group\">\n                <h5>\n                    Medications for Type 2 Diabetes Patients:\n                </h5>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Anti-Hypertensive\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_ace\"> ACE-inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_ace').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Perindopril Dose\"\n                               formControlName=\"perindop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Captopril Dose\"\n                               formControlName=\"captopril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Enalapril Dose\"\n                               formControlName=\"enalapril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Lisinopril Dose\"\n                               formControlName=\"lisinop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"medications_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_arbs\"> ARBs</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_arbs').value ||  Mform.get('anti_hyper_arbs').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Losartan Dose\"\n                               formControlName=\"losartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Valsartan Dose\"\n                               formControlName=\"Valsartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"beta_blockers\"> Beta-blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('beta_blockers').value\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atenolol Dose\"\n                               formControlName=\"atenolol\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Bisoprolol Dose\"\n                               formControlName=\"bisopr\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"beta_other_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diurectics\"> Diuretics</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('diurectics').value\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Indapamide Dose\"\n                               formControlName=\"indapam\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Hydrochlorothiazide Dose\"\n                               formControlName=\"hydroch\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Frusemide Dose\"\n                               formControlName=\"fruse\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"diur_others_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"CA_channel_blockers\"> CA Channel Blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('CA_channel_blockers').value\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Amlodipine Dose\"\n                               formControlName=\"amlodip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nifedipine Dose\"\n                               formControlName=\"nifedip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Verapamil Dose\"\n                               formControlName=\"verapamil\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"ca_channer_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"others_oh\"> Others</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('others_oh').value\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Methyldopa Dose\"\n                               formControlName=\"methyldop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_others_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Anti-Dyslipidemia\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"Anti_Dyslipidemia_statins\"> Statins</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('Anti_Dyslipidemia_statins').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Simvastatin Dose\"\n                               formControlName=\"simvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atorvastatin Dose\"\n                               formControlName=\"atorvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Rosuvastatin Dose\"\n                               formControlName=\"rosuvas\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"Anti_Dyslipidemia_OtherD\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"Anti_Dyslipidemia_fibrates\"> Fibrates</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('Anti_Dyslipidemia_fibrates').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gemfibrozil Dose\"\n                               formControlName=\"gemfib\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Fenofibrate  Dose\"\n                               formControlName=\"fenofib\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"fibrat1\"> Yes</mat-checkbox>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"fibrat2\"> Yes</mat-checkbox>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"Anti_Dyslipidemia_others\"> Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('Anti_Dyslipidemia_others').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"AntiOthers\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Anti-hyperglycemia (diabetes) Oral agents\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_Biguanides\"> Biguanides</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_Biguanides').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Metformin Dose\"\n                               formControlName=\"Metformin\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_sus\"> SUs</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_sus').value\"  class=\"col-md-10 row\">\n                <div class=\"col-md-12 \">\n                <div class=\"row\">\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glibenclamide Dose\"\n                               formControlName=\"glibenclamide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"glimepir\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gliclazide MR Dose\"\n                               formControlName=\"gliclazide_mr\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row \">\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"pride_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_other_su\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_thiazolid\"> Thiazolidinediones</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_thiazolid').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pioglitazone Dose\"\n                               formControlName=\"pioglit\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_thiazolid_Other\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_meglitin\"> Meglitinides</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_meglitin').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nateglinide Dose\"\n                               formControlName=\"anti_hyper_Nateglinide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Repaglinide Dose\"\n                               formControlName=\"anti_hyper_repaglin\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_glucosid\"> Alpha-glucosidase inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_glucosid').value\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Acarbose Dose\"\n                               formControlName=\"acarbose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_dipeptidyl\">Dipeptidyl peptidase-IV inhibitors (DPP-IV)</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_dipeptidyl').value\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sitagliptin Dose\"\n                               formControlName=\"anti_hyper_sitaglip\" />\n                    </mat-form-field>\n                </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Vildagliptin Dose\"\n                           formControlName=\"anti_hyper_vildaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Saxagliptin Dose\"\n                           formControlName=\"anti_hyper_saxaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Linagliptin Dose\"\n                           formControlName=\"anti_hyper_linaglip\" />\n                </mat-form-field>\n            </div>\n               \n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_peptid_others\">Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_peptid_others').value\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pramlintide Dose\"\n                               formControlName=\"pramlintide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_other_peptid\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_incretinm\">Incretinmimetics (GLP-1 agonist)</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_incretinm').value\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide Dose\"\n                               formControlName=\"anti_hyper_exenatide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Liraglutide Dose\"\n                               formControlName=\"anti_hyper_liraglut\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide (weekly) Dose\"\n                               formControlName=\"exenatide_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Injections\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_insulin_lin\">Insulin</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_insulin_lin').value\"  class=\"col-md-10 row\">\n\n                <div class=\"col-md-12 \">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Lispro Dose\"\n                                       formControlName=\"lispro_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Aspart Dose\"\n                                       formControlName=\"aspart_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Glulisine Dose\"\n                                       formControlName=\"glulisine_dose\" />\n                            </mat-form-field>\n                        </div>\n                        \n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Regular Dose\"\n                                       formControlName=\"regular_dose\" />\n                            </mat-form-field>\n                        </div>\n                        \n                    </div>\n                    </div>\n                    <div class=\"col-md-12 row \">\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"NPH Dose\"\n                                       formControlName=\"nph_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Detemir Dose\"\n                                       formControlName=\"Detemir_Dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Glargine Dose\"\n                                       formControlName=\"glargine\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-3 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Combination Dose\"\n                                       formControlName=\"anti_hyper_insulin_lin_combination\" />\n                            </mat-form-field>\n                        </div>\n                        \n                    </div>\n                </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Supplement\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"suplements_vitamind3\"> Vitamin D3</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('suplements_vitamind3').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"suplements_OtherVit\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Antidepressives\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_depre_prozac_dose\"> Prozac Dose</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_depre_prozac_dose').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_depre_other_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 row form-group\">\n                <h6>\n                    Antianxiety\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_anx_diazepam_dose\"> Diazepam Dose</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_anx_diazepam_dose').value\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_anx_other_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 row form-group\">\n                <h6>\n                    Others (e.g. thyroid)\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"medication_other_dose\" />\n                    </mat-form-field>\n                </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Traditional Chinese Medicine\n                </h6>\n            </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4 form-group\"  >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Others\"\n                           formControlName=\"traditional_chinese\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                \n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"sample\" />\n                        <mat-error>Sample Id is\n                            <strong>required</strong>\n                        </mat-error>\n                        \n                    </mat-form-field>\n                </div>\n            \n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                        \n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                    <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Project Title\"\n                                   autocomplete=\"off\"\n                                   formControlName=\"projecttitle\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Principal Investigator\"\n                                   autocomplete=\"off\"\n                                   formControlName=\"principalinvestigator\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n                </div>\n                <div class=\"form-group  row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collection Point\"\n                               autocomplete=\"off\"\n                               formControlName=\"collection_point\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"collected_by\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Collection Date\" (click)=\"doaPicker.open()\" formControlName=\"collected_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of assessment</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\"> Individual/Family&nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"indifamily\">\n                            <mat-radio-button matInput  value=\"Individual\">Individual</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Family\">Family</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Number\" autocomplete=\"off\" formControlName=\"family_number\" />\n                       \n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">If Family &nbsp;&nbsp;&nbsp;</label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"family_yes\">\n                        <mat-radio-button matInput  value=\"Father\">Father</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Mother\">Mother</mat-radio-button>\n                        <mat-radio-button matInput  value=\"Adult\">Adult Less than 18 </mat-radio-button>\n                        <mat-radio-button  matInput value=\"Child\">Child</mat-radio-button>\n                    </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"per_firstname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>First Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"per_middlename\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Middle Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Name\" autocomplete=\"off\" formControlName=\"per_lastname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Family Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Emirates ID Number\" autocomplete=\"off\" formControlName=\"emiratesid\" />\n                       </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"nationality\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date of Birth\" formControlName=\"dob\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                        </mat-form-field>\n                </div>\n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place Of Birth\" formControlName=\"PlaceOfBirth\" [matAutocomplete]=\"pob\">\n                        <mat-autocomplete #pob=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let data of filteredPlaces | async\" [value]=\"data\">\n                                {{ data }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Place of Birth is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"City\"\n                                   formControlName=\"city\" />\n                            <!--<mat-hint align=\"start\">Please enter-->\n                            <!--<strong>Number Of Wives</strong>-->\n                            <!--</mat-hint>-->\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Phone\" autocomplete=\"off\" formControlName=\"phone\" />\n                           </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Email\" autocomplete=\"off\" formControlName=\"email\" />\n                           </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Ethnicity &nbsp;&nbsp;&nbsp;</label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                    <div>\n                            <mat-radio-group aria-labelledby=\"Ethnicity\"  formControlName=\"ethnicity\">\n                                <mat-radio-button matInput  value=\"single\">Arab</mat-radio-button>\n                                <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                                <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                                <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                                <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                            </mat-radio-group>\n    \n                        </div>\n                        <div *ngIf=\"form.get('ethnicity').value == 'mixed'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Mixed, specify\"\n                                    formControlName=\"ethnicity_mixed_specify_text\" />\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"form.get('ethnicity').value == 'other'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Other, specify\"\n                                    formControlName=\"ethnicity_others_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n               \n                <div class=\"form-group  row\">\n                    \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <div class=\"mat-form-field-fluid\">\n                            <label id=\"example-radio-group-label\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\">\n                        <div>\n                            <mat-radio-group aria-labelledby=\"marital_status\"  formControlName=\"maritalstatus\">\n                                <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                                <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                                <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                                <mat-radio-button  matInput value=\"widow\">Widow</mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                Consanguineous Marriage?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\" >\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n               </div>\n                \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Children\"\n                               formControlName=\"pers_NumberofChildren\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Boys\"\n                               formControlName=\"pers_Boys\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Girls\"\n                               formControlName=\"pers_Girls\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Wives\"\n                               formControlName=\"pers_Numberofwives\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of Wives</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n               \n              \n                  <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Highest Level of Education\" formControlName=\"eduLevel\" [matAutocomplete]=\"edu\">\n                        <mat-autocomplete #edu=\"matAutocomplete\">\n                            <mat-option  value=\"Did not attend school\">Did not attend school</mat-option>\n                            <mat-option  value=\"Less than high school\">Less than high school</mat-option>\n                            <mat-option  value=\"Completed high school\">Completed high school</mat-option>\n                            <mat-option  value=\"Completed bacheloror diploma\">Completed bachelor or diploma</mat-option>\n                            <mat-option  value=\"Completed master or PhD\">Completed master or PhD</mat-option>\n                            <mat-option  value=\"Not sure\">Not sure</mat-option>\n                            <mat-option  value=\"Prefer not to disclose\">Prefer not to disclose</mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Education level is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Employment Status\" formControlName=\"employment_status\" [matAutocomplete]=\"empstatus\">\n                        <mat-autocomplete #empstatus=\"matAutocomplete\">\n                            <mat-option  value=\"Employed (including self-employement)\">Employed (including self-employement)</mat-option>\n                            <mat-option  value=\"Unemployment\">Unemployment</mat-option>\n                            <mat-option  value=\"Retired\">Retired</mat-option>\n                            <mat-option  value=\"Student\">Student</mat-option>\n                            <mat-option  value=\"Housewife\">Housewife</mat-option>\n                            <mat-option  value=\"Not sure\">Not sure</mat-option>\n                            <mat-option  value=\"Prefer not to disclose\">Prefer not to disclose</mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Education level is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n           \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Body weight without shoes (kg)\" autocomplete=\"off\"   (ngModelChange)=\"calculateBodyMass()\"  formControlName=\"BodyWeight\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\"  matInput placeholder=\"Height without shoes (m)\"  autocomplete=\"off\"  (ngModelChange)=\"calculateBodyMass()\" formControlName=\"Height\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body mass index (kg/m2)\"  autocomplete=\"off\"   formControlName=\"bmi\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Waist circumference (cm)\" autocomplete=\"off\"      formControlName=\"Waist\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Hip circumference (cm)\" autocomplete=\"off\"      formControlName=\"hip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Body fat mass (Kg)\" autocomplete=\"off\"      formControlName=\"BodyMass\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Body fat percentage (%)\" autocomplete=\"off\"      formControlName=\"bodyfatper\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"WHR (WR/HR)\" autocomplete=\"off\"      formControlName=\"WHR\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <h6>Blood pressure</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Systolic (mm/Hg)\" formControlName=\"BloodPressureSystolic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Diastolic (mm/Hg)\" formControlName=\"BloodPressureDiastolic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Skin Color</label>\n                        <br>\n                        <mat-radio-group aria-labelledby=\"Dyslipidemia\"  formControlName=\"skincolor\">\n                            <mat-radio-button matInput  value=\"white\">White</mat-radio-button>\n                            <mat-radio-button  matInput value=\"black\">Black</mat-radio-button>\n                            <mat-radio-button  matInput value=\"brown\">Brown</mat-radio-button>\n                            <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\" *ngIf=\"form.get('skincolor').value == 'other'\">\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\" >\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"If Other\" formControlName=\"skincolor_other_text\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"'Emirates Family Registry'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a  [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\tmatTooltip=\"Back to the forms list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<i class=\"la la-save\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n       \n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tPersonal Details\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-new-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appNewPersonalDetails></kt-new-personal-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n\t\t\t\t\tPhysical Measurements\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-physical-measurements [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewPhysicalMeasurements></kt-new-physical-measurements>\n            </mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Medical Education\n                </ng-template>\n                    <kt-new-medical-education [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalEducation></kt-new-medical-education>\n            </mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Medical Status\n                </ng-template>\n                    <kt-new-medical-status [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalStatus></kt-new-medical-status>\n            </mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Medical Details(If Type 2 Diabetic)\n                </ng-template>\n                    <kt-new-medical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalDetails></kt-new-medical-details>\n            </mat-tab>\n            <mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-pills\"></i>\n\t\t\t\t\tMedication(Type 2 Diabetes Patient)\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-medication [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedication></kt-new-medication>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n\t\t\t\t\tBiochemical\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewBiochemical></kt-new-biochemical>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n\t\t\t\t\tLifeStyle Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-lifestyle-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewLifestyleDetails></kt-new-lifestyle-details>\n\t\t\t</mat-tab>\n\t\t\t\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-dna\"></i>\n\t\t\t\t\tFamily Information\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-family-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewFamilyInformation></kt-new-family-information>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab  >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tFamily Pedigree\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-family-pedigree  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appNewFamilyPedigree></kt-new-family-pedigree>\n\t\t\t</mat-tab>\n            <mat-tab  >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tLaboratory Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-new-laboratory-details  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appNewLaboratoryDetails></kt-new-laboratory-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-file\"></i>\n\t\t\t\t\tDocument Upload\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-doc-upload  #appDocUpload></kt-doc-upload>\n\t\t\t</mat-tab>\n\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<kt-portlet id=\"print_form\">\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Personal Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appNewPersonalDetails></kt-new-personal-details>\n\t\t\t\t</kt-portlet-body>\n            </div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Physical Measurements'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-physical-measurements [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appNewPhysicalMeasurements></kt-new-physical-measurements>\n\t\t\t\t</kt-portlet-body>\n            </div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medical Education'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-medical-education [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalEducation></kt-new-medical-education>\n\t\t\t\t</kt-portlet-body>\n            </div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medical Status'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-medical-status [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalStatus></kt-new-medical-status>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-medical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedicalDetails></kt-new-medical-details>\n\t\t\t\t</kt-portlet-body>\n            </div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medication'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-medication [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewMedication></kt-new-medication>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Biochemical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewBiochemical></kt-new-biochemical>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Life Style'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-lifestyle-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewLifestyle></kt-new-lifestyle-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Family Information'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-family-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewFamilyInformation></kt-new-family-information>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Family Pedigree'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-family-pedigree  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appNewFamilyPedigree></kt-new-family-pedigree>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Laboratory Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-new-laboratory-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appNewLaboratoryDetails></kt-new-laboratory-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form/new-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form/new-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Emirates Family Registry'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create Emirates Family Registry\">Add New</button>\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\n\t\t\t\t\t\t\t<!--</mat-hint>-->\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n\t\t\t[dataSource]=\"dataSource\"\n\t\t\tmatSort\n\t\t\t#sort1=\"matSort\"\n\t\t\tmatSortActive=\"savedFormID\"\n\t\t\tmatSortDirection=\"asc\"\n\t\t\t>\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>");

/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MY_FORMATS, NewBiochemicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBiochemicalComponent", function() { return NewBiochemicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);










// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var moment = moment__WEBPACK_IMPORTED_MODULE_10___default.a || moment__WEBPACK_IMPORTED_MODULE_10__;
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
var NewBiochemicalComponent = /** @class */ (function () {
    function NewBiochemicalComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Biochemical Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewBiochemicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewBiochemicalComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BIO_FastingGlucose_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_FastingGlucose_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_FastingGlucose_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_FastingGlucose_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_FastingGlucose_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_RandomGlucose_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_RandomGlucose_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_RandomGlucose_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_RandomGlucose_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_RandomGlucose_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG2_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG2_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG2_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG2_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_OGTT_FBG2_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HbA1c_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HbA1c_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HbA1c_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HbA1c_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HbA1c_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_TotalCholesterol_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_TotalCholesterol_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_TotalCholesterol_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_TotalCholesterol_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_TotalCholesterol_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Triglyceride_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Triglyceride_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Triglyceride_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Triglyceride_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Triglyceride_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HDL_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HDL_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HDL_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HDL_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_HDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_LDL_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_LDL_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_LDL_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_LDL_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_LDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Microalbumin_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Microalbumin_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Microalbumin_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Microalbumin_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Microalbumin_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albuminuria_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albuminuria_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albuminuria_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albuminuria_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albuminuria_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albumincreatinine_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albumincreatinine_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albumincreatinine_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albumincreatinine_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_albumincreatinine_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Creatinine_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Creatinine_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Creatinine_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Creatinine_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Creatinine_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Urea_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Urea_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Urea_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Urea_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Urea_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_VitaminDLevel_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_VitaminDLevel_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_VitaminDLevel_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_VitaminDLevel_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_VitaminDLevel_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_egfr_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_egfr_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_egfr_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_egfr_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_egfr_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_sodium_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_sodium_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_sodium_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_sodium_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_sodium_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_potassium_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_potassium_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_potassium_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_potassium_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_potassium_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_calcium_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_calcium_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_calcium_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_calcium_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_calcium_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mag_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mag_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mag_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mag_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mag_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_phos_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_phos_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_phos_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_phos_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_phos_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bicar_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bicar_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bicar_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bicar_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bicar_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_protein_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_protein_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_protein_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_protein_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_protein_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_serum_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_serum_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_serum_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_serum_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_serum_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_cprotein_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_cprotein_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_cprotein_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_cprotein_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_cprotein_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alt_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alt_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alt_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alt_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alt_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alp_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alp_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alp_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alp_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_alp_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ast_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ast_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ast_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ast_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ast_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bilirubin_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bilirubin_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bilirubin_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bilirubin_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_bilirubin_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t3_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t3_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t3_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t3_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t3_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t4_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t4_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t4_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t4_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_t4_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_freet4_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_freet4_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_freet4_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_freet4_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_freet4_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_tsh_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_tsh_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_tsh_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_tsh_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_tsh_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_parathyroid_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_parathyroid_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_parathyroid_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_parathyroid_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_parathyroid_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_diff_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_diff_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_diff_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_diff_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_wbc_diff_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbc_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbc_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbc_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbc_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbc_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haemoglobin_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haemoglobin_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haemoglobin_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haemoglobin_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haemoglobin_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haematocrit_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haematocrit_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haematocrit_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haematocrit_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_haematocrit_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ferritin_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ferritin_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ferritin_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ferritin_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_ferritin_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rdw_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rdw_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rdw_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rdw_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rdw_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmcv_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmcv_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmcv_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmcv_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmcv_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmch_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmch_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmch_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmch_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmch_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmchc_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmchc_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmchc_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmchc_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_rbcmchc_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Reticulocyte_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Reticulocyte_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Reticulocyte_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Reticulocyte_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Reticulocyte_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Platelet_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Platelet_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Platelet_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Platelet_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_Platelet_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mpv_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mpv_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mpv_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mpv_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_mpv_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSmacroscopic_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSmacroscopic_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSmacroscopic_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSmacroscopic_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSmacroscopic_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSph_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSph_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSph_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSph_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSph_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSglu_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSglu_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSglu_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSglu_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSglu_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSgravity_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSgravity_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSgravity_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSgravity_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSgravity_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSNitrite_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSNitrite_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSNitrite_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSNitrite_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSNitrite_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSLeukocyte_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSLeukocyte_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSLeukocyte_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSLeukocyte_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSLeukocyte_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocells_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocells_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocells_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocells_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocells_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocasts_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocasts_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocasts_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocasts_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocasts_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocrystals_RecentTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocrystals_RecentTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocrystals_LastTest_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocrystals_LastTest_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIO_UTSMicrocrystals_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewBiochemicalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewBiochemicalComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewBiochemicalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewBiochemicalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewBiochemicalComponent.ctorParameters = function () { return [
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
    ], NewBiochemicalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewBiochemicalComponent.prototype, "disableInput", void 0);
    NewBiochemicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-biochemical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./biochemical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.html")).default,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"],
                    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
                },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewBiochemicalComponent);
    return NewBiochemicalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L25ldy1mb3JtL19zdWJzL2RvYy11cGxvYWQvQzpcXEphbmVcXFByb2plY3RzXFxKYW5lXFxLaGFsaWZhQ0VSQS9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxmb3JtLW1hbmFnZW1lbnRcXG5ldy1mb3JtXFxfc3Vic1xcZG9jLXVwbG9hZFxcZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L25ldy1mb3JtL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9uZXctZm9ybS9fc3Vicy9kb2MtdXBsb2FkL2RvYy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICAgICAgICM0NTRjYWQ7XG4kZGFyay10ZXh0OiAgICM1ZjY5ODI7XG5cbi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWU7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cblxuICAgICYuaG92ZXIge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgJHRoZW1lO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICNlZWU7XG5cbiAgICAgICNzdGFydCB7XG4gICAgICAgIGkuZmEge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGkuZmEge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG4gICNyZXNwb25zZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI21lc3NhZ2VzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gICNmaWxlLWltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwIGF1dG8gLjVyZW0gYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICNub3RpbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBwcm9ncmVzcyxcbiAgLnByb2dyZXNzIHtcbiAgICAvLyBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGRhcmtlbigkdGhlbWUsOCUpIDAlLCAkdGhlbWUgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGRpdiB7XG4gICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICBjb2xvcjogJGRhcmstdGV4dDtcbiAgfVxuICAuYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAuNXJlbSAuNXJlbSAxcmVtIC41cmVtO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lO1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmZpbGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMmQ2O1xufVxuXG4uZmlsZS1yb3d7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSIsIi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG59XG4udXBsb2FkZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG59XG4udXBsb2FkZXIgbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0NTRjYWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xufVxuLnVwbG9hZGVyIGxhYmVsLmhvdmVyICNzdGFydCBpLmZhIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwLjM7XG59XG4udXBsb2FkZXIgI3N0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjc3RhcnQuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjc3RhcnQgaS5mYSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UgI21lc3NhZ2VzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnVwbG9hZGVyICNmaWxlLWltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDAgYXV0byAwLjVyZW0gYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyIHByb2dyZXNzLFxuLnVwbG9hZGVyIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNmOTAgMCUsICM0NTRjYWQgNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBkaXYge1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgY29sb3I6ICM1ZjY5ODI7XG59XG4udXBsb2FkZXIgLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjNDU0Y2FkO1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.ts ***!
  \***********************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NewFamilyInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFamilyInformationComponent", function() { return NewFamilyInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");










var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__["Countries"];
var NewFamilyInformationComponent = /** @class */ (function () {
    function NewFamilyInformationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family Information";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewFamilyInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewFamilyInformationComponent.prototype.createForm = function () {
        var _this = this;
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "fam_fatethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_fatethnicity_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_fatplaceofbirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_motethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_motethnicity_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_motplaceofbirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_parents_related": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_parents_related_yes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_heart": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_dep": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_osteo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_type1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_type2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_gesdia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_condition_cancer_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fam_condition_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.Mform.controls["fam_fatplaceofbirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredNationalities = this.Mform.controls["fam_motplaceofbirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    NewFamilyInformationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 9).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewFamilyInformationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewFamilyInformationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewFamilyInformationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewFamilyInformationComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    NewFamilyInformationComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NewFamilyInformationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewFamilyInformationComponent.prototype, "disableInput", void 0);
    NewFamilyInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-family-information',
            template: __importDefault(__webpack_require__(/*! raw-loader!./family-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewFamilyInformationComponent);
    return NewFamilyInformationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NewFamilyPedigreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFamilyPedigreeComponent", function() { return NewFamilyPedigreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewFamilyPedigreeComponent = /** @class */ (function () {
    function NewFamilyPedigreeComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family Information";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewFamilyPedigreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewFamilyPedigreeComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "fam_pedigree": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewFamilyPedigreeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 10).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewFamilyPedigreeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewFamilyPedigreeComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewFamilyPedigreeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewFamilyPedigreeComponent.ctorParameters = function () { return [
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
    ], NewFamilyPedigreeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewFamilyPedigreeComponent.prototype, "disableInput", void 0);
    NewFamilyPedigreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-family-pedigree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./family-pedigree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewFamilyPedigreeComponent);
    return NewFamilyPedigreeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MY_FORMATS, NewLaboratoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLaboratoryDetailsComponent", function() { return NewLaboratoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);










// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

var moment = moment__WEBPACK_IMPORTED_MODULE_10___default.a || moment__WEBPACK_IMPORTED_MODULE_10__;
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
var NewLaboratoryDetailsComponent = /** @class */ (function () {
    function NewLaboratoryDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Biomechanics Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewLaboratoryDetailsComponent.prototype.ngOnInit = function () {
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
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewLaboratoryDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "lab_sample_type_blood": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_type_saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_type_tissue": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_type_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_type_other_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_storage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_sample_volume": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_project_code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_test_code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lab_comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewLaboratoryDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 11).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewLaboratoryDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewLaboratoryDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewLaboratoryDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewLaboratoryDetailsComponent.ctorParameters = function () { return [
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
    ], NewLaboratoryDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewLaboratoryDetailsComponent.prototype, "disableInput", void 0);
    NewLaboratoryDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-laboratory-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./laboratory-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.html")).default,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"],
                    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
                },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewLaboratoryDetailsComponent);
    return NewLaboratoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NewLifestyleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifestyleDetailsComponent", function() { return NewLifestyleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewLifestyleDetailsComponent = /** @class */ (function () {
    function NewLifestyleDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Lifestyle Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewLifestyleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewLifestyleDetailsComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "life_smokingstatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Walk": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Walk_IfYes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Walk_others_Specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "walking_intensity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "healthy_diet": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diet_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "weight_change": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "spl_diet": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fastfood_intake": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fruits_veg": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "softdrinks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eat_after_midnight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "satisfied_body": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "happy_life": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "healthy_individual": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewLifestyleDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 8).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewLifestyleDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewLifestyleDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewLifestyleDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    NewLifestyleDetailsComponent.ctorParameters = function () { return [
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
    ], NewLifestyleDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewLifestyleDetailsComponent.prototype, "disableInput", void 0);
    NewLifestyleDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-lifestyle-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lifestyle-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewLifestyleDetailsComponent);
    return NewLifestyleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NewMedicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMedicalDetailsComponent", function() { return NewMedicalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewMedicalDetailsComponent = /** @class */ (function () {
    function NewMedicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medical Status";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewMedicalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewMedicalDetailsComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "type2_complications": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_complications_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_retinopathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_neuropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_neuropathy_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_cva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_nephropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_egfr": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_cad": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "type2_other_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_none": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_tabletsonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_diettablets": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_diettabletsinsulin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_dietonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_insulinonly": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_dietinsulin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_unknown": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_mgt_othertxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewMedicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewMedicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewMedicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewMedicalDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewMedicalDetailsComponent.ctorParameters = function () { return [
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
    ], NewMedicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewMedicalDetailsComponent.prototype, "disableInput", void 0);
    NewMedicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-medical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewMedicalDetailsComponent);
    return NewMedicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NewMedicalEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMedicalEducationComponent", function() { return NewMedicalEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewMedicalEducationComponent = /** @class */ (function () {
    function NewMedicalEducationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medical Education";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewMedicalEducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewMedicalEducationComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "med_healthadvcontact": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_healthadvcontact_othtxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_annualcheck": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_Gpvisit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_Gpvisit_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_glucosemon40": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_glucosemon40_othtxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hospitaladm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hospitaladm_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewMedicalEducationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewMedicalEducationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewMedicalEducationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewMedicalEducationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    NewMedicalEducationComponent.ctorParameters = function () { return [
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
    ], NewMedicalEducationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewMedicalEducationComponent.prototype, "disableInput", void 0);
    NewMedicalEducationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-medical-education',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medical-education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewMedicalEducationComponent);
    return NewMedicalEducationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: NewMedicalStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMedicalStatusComponent", function() { return NewMedicalStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewMedicalStatusComponent = /** @class */ (function () {
    function NewMedicalStatusComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medical Status";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewMedicalStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewMedicalStatusComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "allergies_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "intolerance_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hypertension_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_type2diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_type2diabetes_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_type1diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_type1diabetes_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_highcholesterol": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_highcholesterol_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_obesity_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_heartdis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_heartdis_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_cancer_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_cancer_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_depression": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_depression_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_osteoporosis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_osteoporosis_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_asthma": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_asthma_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_inheriteddis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_inheriteddis_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_thyroid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_thyroid_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_liver": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_liver_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_arthritis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_arthritis_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hepatitis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_hepatitis_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_sickle": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_sickle_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_neurological": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_neurological_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_faint": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_faint_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_migraine": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_migraine_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_epilepsy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_epilepsy_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_other_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_surgery": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_surgery_yestxt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_type1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_type2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_choles": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_obe": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_heart": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_dep": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_osteo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_asth": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_inhdis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_vit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_none": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "med_vaccine": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewMedicalStatusComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewMedicalStatusComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewMedicalStatusComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewMedicalStatusComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewMedicalStatusComponent.ctorParameters = function () { return [
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
    ], NewMedicalStatusComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewMedicalStatusComponent.prototype, "disableInput", void 0);
    NewMedicalStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-medical-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medical-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewMedicalStatusComponent);
    return NewMedicalStatusComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewMedicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMedicationComponent", function() { return NewMedicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");








var NewMedicationComponent = /** @class */ (function () {
    function NewMedicationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medication";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    NewMedicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewMedicationComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "inhibit_ace": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "perindop": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "captopril": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "enalapril": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lisinop": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medications_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_arbs": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "losartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Valsartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "beta_blockers": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atenolol": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "bisopr": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "beta_other_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diurectics": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "indapam": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hydroch": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fruse": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diur_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CA_channel_blockers": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amlodip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nifedip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "verapamil": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ca_channer_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "others_oh": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methyldop": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_statins": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "simvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atorvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "rosuvas": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_OtherD": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_fibrates": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gemfib": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fenofib": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fibrat1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fibrat2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Anti_Dyslipidemia_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_Biguanides": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Metformin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_sus": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glibenclamide": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glimepir": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gliclazide_mr": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pride_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_other_su": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_thiazolid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pioglit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_thiazolid_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_meglitin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_Nateglinide": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_repaglin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_glucosid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "acarbose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_dipeptidyl": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_sitaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_vildaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_saxaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_linaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_peptid_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pramlintide": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_other_peptid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_incretinm": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_exenatide": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_liraglut": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "exenatide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_insulin_lin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lispro_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aspart_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glulisine_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "regular_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nph_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Detemir_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glargine": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_insulin_lin_combination": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "suplements_vitamind3": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "suplements_OtherVit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_depre_prozac_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_depre_other_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_anx_diazepam_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_anx_other_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_other_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "traditional_chinese": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewMedicationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewMedicationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewMedicationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewMedicationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewMedicationComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NewMedicationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewMedicationComponent.prototype, "disableInput", void 0);
    NewMedicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-medication',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewMedicationComponent);
    return NewMedicationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MY_FORMATS, NewPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPersonalDetailsComponent", function() { return NewPersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);










var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_7__["Countries"];



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
var NewPersonalDetailsComponent = /** @class */ (function () {
    function NewPersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.cd = cd;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Personal Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.isSampleSubmit = false;
        this.isFormSubmit = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__["mediaPath"];
    }
    NewPersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    NewPersonalDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "projecttitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "principalinvestigator": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "collection_point": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "collected_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "collected_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "indifamily": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "family_number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "family_yes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "per_firstname": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "per_middlename": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "per_lastname": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "emiratesid": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nationality": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dob": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PlaceOfBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "city": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity_mixed_specify_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ethnicity_others_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "maritalstatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "marriage_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_NumberofChildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Boys": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Girls": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Numberofwives": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eduLevel": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "employment_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.filteredNationalities = this.form.controls["nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlaces = this.form.controls["PlaceOfBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    NewPersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewPersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    // createSampleId() {
    //     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //     this._service.createSampleId(9,this.form.value["sample"]).subscribe((res)=> {
    //    // this._service.createSampleId(9, this.form.value["sample"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    // if (!this.formId) {
    //   this.saveFormId = res;
    //   this._interactionService.sendRefId(parseInt(this.saveFormId));
    // }
    //     this.splashService.splashScreen({isLoading : false, message : "" })
    //     this.isSampleSubmit = true;
    // this.onSubmit();
    // });
    // }
    // onSubmit(){
    //     if(!this.isSampleSubmit){
    //       this.createSampleId();
    //     }else {
    //         this.form.patchValue({"savedFormID": this.form.value["savedFormID"] || this.saveFormId})
    //         this.isSampleSubmit = false;
    //         let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
    //         if (this.formId ||  this.isFormSubmit) {
    //             this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
    //             this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value ).subscribe((res:any) => {
    //                 if(res){
    //                     for(var i=0;i<data.length;i++) {
    //                         for (var j = 0; j < res.length; j++) {
    //                             if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
    //                                 data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
    //                             }
    //                         }
    //                     }
    //                     this._service.createSample8(data, true).subscribe((res)=> {
    //                         if (res) {
    //                             this.splashService.splashScreen({isLoading : false, message : "" })
    //                             this._snackBar.open("Data has been updated successfully!", 'Ok', {
    //                                 duration: 5000,
    //                                 verticalPosition: 'bottom',
    //                                 horizontalPosition: 'center'
    //                             });
    //                         }
    //                     })
    //                 }
    //             })
    //         } else {
    //             this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
    //             this._service.createSample8(data, false).subscribe((res)=> {
    //                 if (res) {
    //                     this.isFormSubmit = true;
    //                     this.splashService.splashScreen({isLoading : false, message : "" })
    //                     this._snackBar.open("Data has been inserted successfully!", 'Ok', {
    //                         duration: 5000,
    //                         verticalPosition: 'bottom',
    //                         horizontalPosition: 'center'
    //                     });
    //                 }
    //             })
    //         }
    //     }
    // }
    NewPersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(9, this.form.value["sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    NewPersonalDetailsComponent.prototype.onSubmit = function () {
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
    NewPersonalDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    NewPersonalDetailsComponent.prototype.onSelectFile = function (event) {
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
    NewPersonalDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_9__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NewPersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewPersonalDetailsComponent.prototype, "disableInput", void 0);
    NewPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.html")).default,
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
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_9__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewPersonalDetailsComponent);
    return NewPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: NewPhysicalMeasurementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPhysicalMeasurementsComponent", function() { return NewPhysicalMeasurementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var NewPhysicalMeasurementsComponent = /** @class */ (function () {
    function NewPhysicalMeasurementsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Physical Measurements";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    NewPhysicalMeasurementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.form.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 9).subscribe(function (res) {
                _this.formData = res;
                if (res.length)
                    _this.prepareForm();
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    NewPhysicalMeasurementsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BodyWeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Waist": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BodyMass": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Height": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hip": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "bodyfatper": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "bmi": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WHR": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureSystolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureDiastolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "skincolor": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "skincolor_other_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    NewPhysicalMeasurementsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(9, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    NewPhysicalMeasurementsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    NewPhysicalMeasurementsComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(9, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    NewPhysicalMeasurementsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        if (!this.form.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe(function (res) {
                    if (res) {
                        for (var i = 0; i < data_1.length; i++) {
                            for (var j = 0; j < res.length; j++) {
                                if (data_1[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                                    data_1[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                                }
                            }
                        }
                        _this._service.createSample8(data_1, true).subscribe(function (res) {
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
                this._service.createSample8(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.isFormSubmit = true;
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
    NewPhysicalMeasurementsComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "bmi": (this.form.controls["BodyWeight"].value / (this.form.controls["Height"].value * this.form.controls["Height"].value)).toFixed(2) });
        }
    };
    NewPhysicalMeasurementsComponent.ctorParameters = function () { return [
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
    ], NewPhysicalMeasurementsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NewPhysicalMeasurementsComponent.prototype, "disableInput", void 0);
    NewPhysicalMeasurementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-physical-measurements',
            template: __importDefault(__webpack_require__(/*! raw-loader!./physical-measurements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], NewPhysicalMeasurementsComponent);
    return NewPhysicalMeasurementsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewFormEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormEditComponent", function() { return NewFormEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/family-information/family-information.component */ "./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/medical-details/medical-details.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.ts");
/* harmony import */ var _subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/medical-education/medical-education.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.ts");
/* harmony import */ var _subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/medical-status/medical-status.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.ts");
/* harmony import */ var _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_subs/medication/medication.component */ "./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_subs/physical-measurements/physical-measurements.component */ "./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.ts");

// Angular
















var NewFormEditComponent = /** @class */ (function () {
    function NewFormEditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    NewFormEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Emirates Family Registry');
    };
    NewFormEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    NewFormEditComponent.prototype.reset = function () {
    };
    NewFormEditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appNewPersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appNewPhysicalMeasurements.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appNewMedicalEducation.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appNewMedicalStatus.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appNewMedicalDetails.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appNewMedication.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appNewBiochemical.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appNewLifestyleDetails.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appNewFamilyInformation.onSubmit();
        }
        else if (this.selectedTab == 9) {
            this.appNewFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 10) {
            this.appNewLaboratoryDetails.onSubmit();
        }
        else if (this.selectedTab == 11) {
            this.appDocUpload.onSubmit();
        }
    };
    NewFormEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewFamilyInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_5__["NewFamilyInformationComponent"])
    ], NewFormEditComponent.prototype, "appNewFamilyInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__["NewBiochemicalComponent"])
    ], NewFormEditComponent.prototype, "appNewBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_7__["NewFamilyPedigreeComponent"])
    ], NewFormEditComponent.prototype, "appNewFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewLaboratoryDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_8__["NewLaboratoryDetailsComponent"])
    ], NewFormEditComponent.prototype, "appNewLaboratoryDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewLifestyleDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_9__["NewLifestyleDetailsComponent"])
    ], NewFormEditComponent.prototype, "appNewLifestyleDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_10__["NewMedicalDetailsComponent"])
    ], NewFormEditComponent.prototype, "appNewMedicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalEducation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_11__["NewMedicalEducationComponent"])
    ], NewFormEditComponent.prototype, "appNewMedicalEducation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalStatus'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_12__["NewMedicalStatusComponent"])
    ], NewFormEditComponent.prototype, "appNewMedicalStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_13__["NewMedicationComponent"])
    ], NewFormEditComponent.prototype, "appNewMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewPersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_14__["NewPersonalDetailsComponent"])
    ], NewFormEditComponent.prototype, "appNewPersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewPhysicalMeasurements'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_15__["NewPhysicalMeasurementsComponent"])
    ], NewFormEditComponent.prototype, "appNewPhysicalMeasurements", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_16__["DocUploadComponent"])
    ], NewFormEditComponent.prototype, "appDocUpload", void 0);
    NewFormEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-form-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-form-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], NewFormEditComponent);
    return NewFormEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NewFormPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormPrintComponent", function() { return NewFormPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/family-information/family-information.component */ "./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/medical-details/medical-details.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.ts");
/* harmony import */ var _subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/medical-education/medical-education.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.ts");
/* harmony import */ var _subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/medical-status/medical-status.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.ts");
/* harmony import */ var _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_subs/medication/medication.component */ "./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_subs/physical-measurements/physical-measurements.component */ "./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.ts");

// Angular















var NewFormPrintComponent = /** @class */ (function () {
    function NewFormPrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = true;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    NewFormPrintComponent.prototype.ngOnInit = function () {
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
    NewFormPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init form
     */
    NewFormPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Emirates Family Registry');
        this.subheaderService.showPrintButton(true);
    };
    NewFormPrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appNewPersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appNewPhysicalMeasurements.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appNewMedicalEducation.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appNewMedicalStatus.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appNewMedicalDetails.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appNewMedication.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appNewBiochemical.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appNewLifestyleDetails.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appNewFamilyInformation.onSubmit();
        }
        else if (this.selectedTab == 9) {
            this.appNewFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 10) {
            this.appNewLaboratoryDetails.onSubmit();
        }
    };
    NewFormPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewFamilyInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_5__["NewFamilyInformationComponent"])
    ], NewFormPrintComponent.prototype, "appNewFamilyInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__["NewBiochemicalComponent"])
    ], NewFormPrintComponent.prototype, "appNewBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_7__["NewFamilyPedigreeComponent"])
    ], NewFormPrintComponent.prototype, "appNewFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewLaboratoryDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_8__["NewLaboratoryDetailsComponent"])
    ], NewFormPrintComponent.prototype, "appNewLaboratoryDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewLifestyleDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_9__["NewLifestyleDetailsComponent"])
    ], NewFormPrintComponent.prototype, "appNewLifestyleDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_10__["NewMedicalDetailsComponent"])
    ], NewFormPrintComponent.prototype, "appNewMedicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalEducation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_11__["NewMedicalEducationComponent"])
    ], NewFormPrintComponent.prototype, "appNewMedicalEducation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedicalStatus'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_12__["NewMedicalStatusComponent"])
    ], NewFormPrintComponent.prototype, "appNewMedicalStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_13__["NewMedicationComponent"])
    ], NewFormPrintComponent.prototype, "appNewMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewPersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_14__["NewPersonalDetailsComponent"])
    ], NewFormPrintComponent.prototype, "appNewPersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appNewPhysicalMeasurements'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_15__["NewPhysicalMeasurementsComponent"])
    ], NewFormPrintComponent.prototype, "appNewPhysicalMeasurements", void 0);
    NewFormPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-form-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-form-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], NewFormPrintComponent);
    return NewFormPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/new-form/new-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/new-form/new-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
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






var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, splashService, cdr) {
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
            templateId: 9,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    NewFormComponent.prototype.fetchList = function () {
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
            //this.searchInput.nativeElement.focus();
        });
    };
    NewFormComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(9, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    NewFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    NewFormComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Emirates Family Registry');
        this.subheaderService.showPrintButton(false);
    };
    NewFormComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    NewFormComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/hsa/edit', id], { relativeTo: this.activatedRoute });
    };
    NewFormComponent.prototype.openDialog = function (id) {
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
    NewFormComponent.prototype.deleteForm = function (id) {
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
    NewFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], NewFormComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], NewFormComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewFormComponent.prototype, "searchInput", void 0);
    NewFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-new-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/new-form/new-form/new-form.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NewFormComponent);
    return NewFormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/new-form/newform.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/form-management/new-form/newform.module.ts ***!
  \************************************************************************/
/*! exports provided: NewFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormModule", function() { return NewFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_new_form_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/new-form/new-form/new-form.component */ "./src/app/views/pages/form-management/new-form/new-form/new-form.component.ts");
/* harmony import */ var _components_new_form_new_form_edit_new_form_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/new-form/new-form-edit/new-form-edit.component */ "./src/app/views/pages/form-management/new-form/new-form-edit/new-form-edit.component.ts");
/* harmony import */ var _components_new_form_new_form_print_new_form_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/new-form/new-form-print/new-form-print.component */ "./src/app/views/pages/form-management/new-form/new-form-print/new-form-print.component.ts");
/* harmony import */ var _components_new_form_subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/new-form/_subs/physical-measurements/physical-measurements.component */ "./src/app/views/pages/form-management/new-form/_subs/physical-measurements/physical-measurements.component.ts");
/* harmony import */ var _components_new_form_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/new-form/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/new-form/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_new_form_subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/new-form/_subs/medical-education/medical-education.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-education/medical-education.component.ts");
/* harmony import */ var _components_new_form_subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/new-form/_subs/medical-status/medical-status.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-status/medical-status.component.ts");
/* harmony import */ var _components_new_form_subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/new-form/_subs/medical-details/medical-details.component */ "./src/app/views/pages/form-management/new-form/_subs/medical-details/medical-details.component.ts");
/* harmony import */ var _components_new_form_subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/new-form/_subs/medication/medication.component */ "./src/app/views/pages/form-management/new-form/_subs/medication/medication.component.ts");
/* harmony import */ var _components_new_form_subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/new-form/_subs/family-information/family-information.component */ "./src/app/views/pages/form-management/new-form/_subs/family-information/family-information.component.ts");
/* harmony import */ var _components_new_form_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/new-form/_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/new-form/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _components_new_form_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/new-form/_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/new-form/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _components_new_form_subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/new-form/_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/new-form/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _components_new_form_subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/new-form/_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/new-form/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_new_form_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/new-form/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/new-form/_subs/doc-upload/doc-upload.component.ts");























var routes = [
    {
        path: '',
        component: _components_new_form_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_7__["NewFormComponent"],
    },
    {
        path: 'add',
        component: _components_new_form_new_form_edit_new_form_edit_component__WEBPACK_IMPORTED_MODULE_8__["NewFormEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_new_form_new_form_edit_new_form_edit_component__WEBPACK_IMPORTED_MODULE_8__["NewFormEditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_new_form_new_form_print_new_form_print_component__WEBPACK_IMPORTED_MODULE_9__["NewFormPrintComponent"],
    }
];
var NewFormModule = /** @class */ (function () {
    function NewFormModule() {
    }
    NewFormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                //New Form (Questionnaire8)
                _components_new_form_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_7__["NewFormComponent"],
                _components_new_form_new_form_edit_new_form_edit_component__WEBPACK_IMPORTED_MODULE_8__["NewFormEditComponent"],
                _components_new_form_new_form_print_new_form_print_component__WEBPACK_IMPORTED_MODULE_9__["NewFormPrintComponent"],
                _components_new_form_subs_physical_measurements_physical_measurements_component__WEBPACK_IMPORTED_MODULE_10__["NewPhysicalMeasurementsComponent"],
                _components_new_form_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_11__["NewPersonalDetailsComponent"],
                _components_new_form_subs_medical_education_medical_education_component__WEBPACK_IMPORTED_MODULE_12__["NewMedicalEducationComponent"],
                _components_new_form_subs_medical_status_medical_status_component__WEBPACK_IMPORTED_MODULE_13__["NewMedicalStatusComponent"],
                _components_new_form_subs_medical_details_medical_details_component__WEBPACK_IMPORTED_MODULE_14__["NewMedicalDetailsComponent"],
                _components_new_form_subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_15__["NewMedicationComponent"],
                _components_new_form_subs_family_information_family_information_component__WEBPACK_IMPORTED_MODULE_16__["NewFamilyInformationComponent"],
                _components_new_form_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_17__["NewLaboratoryDetailsComponent"],
                _components_new_form_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_18__["NewBiochemicalComponent"],
                _components_new_form_subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_19__["NewFamilyPedigreeComponent"],
                _components_new_form_subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_20__["NewLifestyleDetailsComponent"],
                _components_new_form_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_22__["DocUploadComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            ]
        })
    ], NewFormModule);
    return NewFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-new-form-newform-module.js.map