(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-obesity-obesity-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Fasting Blood Glucose (mmol/l)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1\" formControlName=\"BIOC_FastingGlucose_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp1.open()\" (focus)=\"dp1.open()\"  name=\"dp1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_FastingGlucose_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1_1\" formControlName=\"BIOC_FastingGlucose_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp1_1.open()\" (focus)=\"dp1_1.open()\"  name=\"dp1_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_FastingGlucose_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20 \" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIOC_FastingGlucose_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n       \n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Random glucose level (mmol/l)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp2\" formControlName=\"BIOC_RandomGlucose_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp2.open()\" (focus)=\"dp2.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_RandomGlucose_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp2_1\" formControlName=\"BIOC_RandomGlucose_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp2_1.open()\" (focus)=\"dp2_1.open()\"  name=\"dp2_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_RandomGlucose_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIOC_RandomGlucose_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Glucose tolerance (OGTT) - * Fasting Blood Glucose\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp3\" formControlName=\"BIOC_OGTT_FBG_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp3\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_OGTT_FBG_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp3_1\" formControlName=\"BIOC_OGTT_FBG_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp3_1.open()\" (focus)=\"dp3_1.open()\"  name=\"dp3_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_OGTT_FBG_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n          <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label><br>\n                    <mat-radio-group formControlName=\"BIOC_OGTT_FBG_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Glucose tolerance (OGTT) - * FBG after 2 hours\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp4\" formControlName=\"BIOC_OGTT_FBG2_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp4.open()\" (focus)=\"dp4.open()\"  name=\"dp4\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_OGTT_FBG2_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp4_1\" formControlName=\"BIOC_OGTT_FBG2_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp4_1.open()\" (focus)=\"dp4_1.open()\"  name=\"dp4_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_OGTT_FBG2_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_OGTT_FBG2_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    HbA1c (%)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp5\" formControlName=\"BIOC_HbA1c_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp5.open()\" (focus)=\"dp5.open()\"  name=\"dp5\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_HbA1c_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp5_1\" formControlName=\"BIOC_HbA1c_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp5_1.open()\" (focus)=\"dp5_1.open()\"  name=\"dp5_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_HbA1c_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n       \n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_HbA1c_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Total cholesterol (mmol/L)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp6\" formControlName=\"BIOC_TotalCholesterol_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp6.open()\" (focus)=\"dp6.open()\"  name=\"dp6\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_TotalCholesterol_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp6_1\" formControlName=\"BIOC_TotalCholesterol_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp6_1.open()\" (focus)=\"dp6_1.open()\"  name=\"dp6_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_TotalCholesterol_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_TotalCholesterol_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Triglyceride (mmol/L)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp7\" formControlName=\"BIOC_Triglyceride_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp7.open()\" (focus)=\"dp7.open()\"  name=\"dp7\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_Triglyceride_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp7_1\" formControlName=\"BIOC_Triglyceride_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp7_1.open()\" (focus)=\"dp7_1.open()\"  name=\"dp7_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_Triglyceride_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_Triglyceride_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    HDL (mmol/L)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp8\" formControlName=\"BIOC_HDL_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp8.open()\" (focus)=\"dp8.open()\"  name=\"dp8\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_HDL_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp8_1\" formControlName=\"BIOC_HDL_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp8_1.open()\" (focus)=\"dp8_1.open()\"  name=\"dp8_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_HDL_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_HDL_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    LDL (mmol/L)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp9\" formControlName=\"BIOC_LDL_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp9.open()\" (focus)=\"dp9.open()\"  name=\"dp9\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_LDL_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp9_1\" formControlName=\"BIOC_LDL_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp9_1.open()\" (focus)=\"dp9_1.open()\"  name=\"dp9_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_LDL_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_LDL_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Microalbumin (mg)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp10\" formControlName=\"BIOC_Microalbumin_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp10.open()\" (focus)=\"dp10.open()\"  name=\"dp10\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_Microalbumin_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp10_1\" formControlName=\"BIOC_Microalbumin_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp10_1.open()\" (focus)=\"dp10_1.open()\"  name=\"dp10_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\" formControlName=\"BIOC_Microalbumin_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_Microalbumin_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Creatinine (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp11\" formControlName=\"BIOC_Creatinine_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp11.open()\" (focus)=\"dp11.open()\"  name=\"dp11\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_Creatinine_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp11_1\" formControlName=\"BIOC_Creatinine_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp11_1.open()\" (focus)=\"dp11_1.open()\"  name=\"dp11_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_Creatinine_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_Creatinine_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Urea (mmol/l)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp12\" formControlName=\"BIOC_Urea_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp12.open()\" (focus)=\"dp12.open()\"  name=\"dp12\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_Urea_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp12_1\" formControlName=\"BIOC_Urea_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp12_1.open()\" (focus)=\"dp12_1.open()\"  name=\"dp12_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_Urea_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_Urea_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Vitamin D level (nmol/l)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp13\" formControlName=\"BIOC_VitaminDLevel_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp13.open()\" (focus)=\"dp13.open()\"  name=\"dp13\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_VitaminDLevel_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp13_1\" formControlName=\"BIOC_VitaminDLevel_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp13_1.open()\" (focus)=\"dp13_1.open()\"  name=\"dp13_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_VitaminDLevel_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_VitaminDLevel_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Leptin (ng/mL)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp14\" formControlName=\"BIOC_Lepatin_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp14.open()\" (focus)=\"dp14.open()\"  name=\"dp14\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp14\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp14></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_Lepatin_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp14_1\" formControlName=\"BIOC_Lepatin_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp14_1.open()\" (focus)=\"dp14_1.open()\"  name=\"dp14_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp14_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp14_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_Lepatin_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_Lepatin_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    Leptin receptor (ng/mL)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp15\" formControlName=\"BIOC_LepatinReceptor_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp15.open()\" (focus)=\"dp15.open()\"  name=\"dp15\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp15\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp15></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_LepatinReceptor_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp15_1\" formControlName=\"BIOC_LepatinReceptor_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp15_1.open()\" (focus)=\"dp15_1.open()\"  name=\"dp15_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp15_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp15_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_LepatinReceptor_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_LepatinReceptor_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    CRP (ng/mL)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp16\" formControlName=\"BIOC_CRP_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp16.open()\" (focus)=\"dp16.open()\"  name=\"dp16\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp16\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp16></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_CRP_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp16_1\" formControlName=\"BIOC_CRP_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp16_1.open()\" (focus)=\"dp16_1.open()\"  name=\"dp16_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp16_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp16_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_CRP_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_CRP_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    TNF- (ng/mL)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp17\" formControlName=\"BIOC_TNF_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp17.open()\" (focus)=\"dp17.open()\"  name=\"dp17\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp17\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp17></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_TNF_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp17_1\" formControlName=\"BIOC_TNF_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp17_1.open()\" (focus)=\"dp17_1.open()\"  name=\"dp17_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp17_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp17_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_TNF_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_TNF_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-2 form-group\">\n                <label><br>\n                    IL-F (ng/mL)\n                </label>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp18\" formControlName=\"BIOC_ILF_RecentTest_Date_PO\"  placeholder=\"Date of recent test\" (click)=\"dp18.open()\" (focus)=\"dp18.open()\"  name=\"dp18\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp18\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp18></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"BIOC_ILF_RecentTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp18_1\" formControlName=\"BIOC_ILF_LastTest_Date_PO\"  placeholder=\"Date of last test\" (click)=\"dp18_1.open()\" (focus)=\"dp18_1.open()\"  name=\"dp18_1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp18_1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp18_1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of last test\"\n                           formControlName=\"BIOC_ILF_LastTest_Result_PO\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >Is the result normal</label>\n                    <mat-radio-group formControlName=\"BIOC_ILF_IsNormalResult_PO\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n       \n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Skin colour\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"SDBC_SkinColor\">\n                        <mat-radio-button  value=\"white\">White</mat-radio-button>\n                        <mat-radio-button  value=\"black\">Black</mat-radio-button>\n                        <mat-radio-button  value=\"brown\">Brown</mat-radio-button>\n                        <mat-radio-button  value=\"other\">Other</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Socioeconomic status\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"SDBC_Socioeconomic\">\n                        <mat-radio-button  value=\"low\">Low</mat-radio-button>\n                        <mat-radio-button  value=\"moderate\">Moderate</mat-radio-button>\n                        <mat-radio-button  value=\"high\">High</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Smoking Status\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"SDBC_SmokingStatus\">\n                        <mat-radio-button  value=\"yes\">Current smoker</mat-radio-button>\n                        <mat-radio-button  value=\"exsmoker\">Ex-smoker</mat-radio-button>\n                        <mat-radio-button  value=\"never\">Never smoked</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row  col-md-12\">\n            <div class=\"form-group\">\n                <h6>\n                    Food Intake\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        How often per week do you eat fast food?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"FOOD_EatFastfood_Week\">\n                        <mat-radio-button  value=\"never\">Never</mat-radio-button>\n                        <mat-radio-button  value=\"twice\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"4times\">4 times</mat-radio-button>\n                        <mat-radio-button  value=\"daily\">Daily</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Eat fruits/vegetables, per day?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"FOOD_Fruits_Vegetables_Day\">\n                        <mat-radio-button  value=\"never\">Never</mat-radio-button>\n                        <mat-radio-button  value=\"once\">Once</mat-radio-button>\n                        <mat-radio-button  value=\"twice\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"3ormore\">Three or more</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        How much soda pop do you consume per week?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"FOOD_Sodapop_Week\">\n                        <mat-radio-button  value=\"never\">0</mat-radio-button>\n                        <mat-radio-button  value=\"2L\">2L</mat-radio-button>\n                        <mat-radio-button  value=\"4L\">4L</mat-radio-button>\n                        <mat-radio-button  value=\"6L\">6L or more</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you eat in the middle of the night?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"FOOD_Eat_Midnight\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you follow a healthy diet?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"FOOD_HealthyDiet\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row  col-md-12\">\n            <div class=\"form-group\">\n                <h6>\n                    Physical activity\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you exercise 30 min each week?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"PHYA_Exercise_Week\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you satisfied with your body?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"PHYA_Satisfy_Body\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you happy about your life?\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"PHYA_Happy_Life\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Body weight without shoes (kg)\" autocomplete=\"off\"   (ngModelChange)=\"calculateBodyMass()\"  formControlName=\"CLIN_BodyWeight_KG\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\"  matInput placeholder=\"Height without shoes (m)\"  autocomplete=\"off\"  (ngModelChange)=\"calculateBodyMass()\" formControlName=\"CLIN_Height_CM\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body mass index (kg/m2)\"  autocomplete=\"off\"   formControlName=\"CLIN_BMI_KGM2\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Waist circumference (cm)\" autocomplete=\"off\"      formControlName=\"CLIN_WaistCircumference_CM\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Hip circumference (cm)\" autocomplete=\"off\"      formControlName=\"CLIN_Hipcircumference_CM\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Vertical Trunk Circumference (cm)\" autocomplete=\"off\"      formControlName=\"CLIN_VerticalTrunkCircumference_CM\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"WHR (WR/HR)\" autocomplete=\"off\"      formControlName=\"CLIN_WHR\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Body fat mass (Kg)\" autocomplete=\"off\"      formControlName=\"CLIN_BodyFatMass_Kg\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Body fat percentage (%)\" autocomplete=\"off\"      formControlName=\"CLIN_BMIFatPercent\" />\n                    </mat-form-field>\n                </div>\n               \n            </div>\n            <div class=\"form-group  row\">\n                <h6>Blood pressure</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Systolic (mm/Hg)\" formControlName=\"CLIN_BloodPressure_SYS_mmHg\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Diastolic (mm/Hg)\" formControlName=\"CLIN_BloodPressure_DIA_mmHg\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <h6>Medical Conditions</h6>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Do you have any Medical Conditions?\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Type 2 Diabetes Mellitus\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Type2Diabetes\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Hypertension\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Hypertension\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Dyslipidemia\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Dyslipidemia\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Respiratory Disease: (Sleep apnoea, Asthma, Emphysema)\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Respiratory\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Gastrointestinal System: (Gastroesophageal reflux, Hepatobiliary disease)\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Gastrointestinal\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Other\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"CLIN_MC_Others\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\" *ngIf=\"form.get('CLIN_MC_Others').value == 'yes'\">\n                    <div class=\"col-md-8 kt-margin-bottom-20-mobile\" >\n                        <mat-form-field  class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"If Yes, Please specify\" formControlName=\"CLIN_MC_Others_Remarks\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Obesity in the family:\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"FAMI_Obesity\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Obesity complication in the family:\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"FAMI_ObesityComplication\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\" *ngIf=\"form.get('FAMI_ObesityComplication').value == 'yes'\">\n                    <div class=\"col-lg-8 kt-margin-bottom-20-mobile\" >\n                        <mat-form-field  class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"If Yes, Please specify\" formControlName=\"FAMI_ObesityComplication_Remarks\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Diabetes in the family\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"FAMI_Diabetes\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n               \n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Hypertension in the family\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"FAMI_Hypertension\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n               \n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Dyslipidemia in the family\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"FAMI_Dyslipidemia\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n               \n            </div>\n        </div>\n    </form>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4 row\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Are you currently on any medication?\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"MEDI_Any_Medication\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\" *ngIf=\"form.get('MEDI_Any_Medication').value == 'yes'\">\n                    <div class=\"col-lg-8 kt-margin-bottom-20-mobile\" >\n                        <mat-form-field  class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"If Yes, Please specify\" formControlName=\"MEDI_Any_Medication_Remarks\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4 row\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Do you have allergies?\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"MEDI_Any_Allergies\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\" *ngIf=\"form.get('MEDI_Any_Allergies').value == 'yes'\">\n                    <div class=\"col-lg-8 kt-margin-bottom-20-mobile\" >\n                        <mat-form-field  class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"If Yes, Please specify\" formControlName=\"MEDI_Any_Allergies_Remarks\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row col-md-12\">\n                <div class=\"col-md-4 row\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                            Do you have intolerance?\n                        </label>\n                    </div>\n                </div>\n    \n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-radio-group formControlName=\"MEDI_Intolerance\">\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\" *ngIf=\"form.get('MEDI_Intolerance').value == 'yes'\">\n                    <div class=\"col-lg-8 kt-margin-bottom-20-mobile\" >\n                        <mat-form-field  class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"If Yes, Please specify\" formControlName=\"MEDI_Intolerance_Remarks\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" >\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"SampleID\" />\n                        <mat-error>Sample Id is\n                            <strong>required</strong>\n                        </mat-error>\n                        \n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                        \n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collection Point\"\n                               autocomplete=\"off\"\n                               formControlName=\"CollectionPoint\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n               \n                    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                        <h6>Platform</h6>\n                    </div>\n          \n               \n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Panel</label>\n                            </div>\n                            <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Microarray</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"EXOME\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WES</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WES\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n     \n                    <div class=\"col-md-2 form-group \">\n                        <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WGS</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WGS\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n               \n                    <div class=\"col-md-4 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <div class=\"kt-section\"><br><br>\n                                <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                            </div>\n                            </mat-form-field>\n                    </div>\n                \n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"CollectedBy\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                 \n                </div>\n              \n            <div class=\"form-group  row\">\n              \n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Date of Assessment\" (click)=\"doaPicker.open()\" formControlName=\"DateofAssessment\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of assessment</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"PERS_Firstname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>First Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"PERS_MiddleName\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Middle Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Name\" autocomplete=\"off\" formControlName=\"PERS_FamilyName\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Family Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PERS_Gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n               \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"PERS_Nationality\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date of Birth\" formControlName=\"PERS_DateofBirth\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place Of Birth\" formControlName=\"PERS_PlaceofBirth\" [matAutocomplete]=\"pob\">\n                        <mat-autocomplete #pob=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality  }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Place of Birth is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            \n                   \n                </div>\n               \n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Ethnicity &nbsp;&nbsp;&nbsp;</label>\n                    </div>\n                </div>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                        <div>\n                            <mat-radio-group aria-labelledby=\"Ethnicity\"  formControlName=\"PERS_Ethnicity\">\n                                <mat-radio-button matInput  value=\"single\">Arab</mat-radio-button>\n                                <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                                <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                                <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                                <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                            </mat-radio-group>\n    \n                        </div>\n                        <div *ngIf=\"form.get('PERS_Ethnicity').value == 'mixed'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Mixed, specify\"\n                                    formControlName=\"PERS_Ethnicity_Mixed_Remarks\" />\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"form.get('PERS_Ethnicity').value == 'other'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Other, specify\"\n                                    formControlName=\"PERS_Ethnicity_Others_Remarks\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n               <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                Are your parents related?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\" >\n                        <mat-radio-group aria-labelledby=\"PERS_IsParents_Related\"  formControlName=\"PERS_IsParents_Related\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n               </div>\n                <div class=\"form-group  row\">\n                    \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <div class=\"mat-form-field-fluid\">\n                            <label id=\"example-radio-group-label\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                        <div>\n                            <mat-radio-group aria-labelledby=\"marital_status\"  formControlName=\"PERS_MaritalStatus\">\n                                <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                                <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                                <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                                <mat-radio-button  matInput value=\"widow\">Widow</mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                Consanguineous Marriage?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\" >\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"PERS_marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n               </div>\n                \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Children\"\n                               formControlName=\"PERS_NumberofChildren\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Wives\"\n                               formControlName=\"PERS_Numberofwives\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of Wives</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  \">\n                <h6>Contact phone number(s)</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Home\" formControlName=\"PERS_Home_Number\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Home</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Work\" formControlName=\"PERS_Work_Number\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Work</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Mobile\" formControlName=\"PERS_Mobile_Number\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Mobile</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-10-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<textarea matInput rows=\"7\" placeholder=\"Address\"\n                                                      formControlName=\"PERS_Address\"></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n        \n     <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"City\"\n                       formControlName=\"PERS_City\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of Wives</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Emirates\"\n                       formControlName=\"PERS_Emirates\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of Wives</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n     </div>\n    </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"'Obesity Form'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a [routerLink]=\"[ formId ? '../../' : '../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\tmatTooltip=\"Back to the forms list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<i class=\"la la-save\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n       \n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tPersonal Details\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-obesity-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appObesityPersonalDetails></kt-obesity-personal-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n\t\t\t\t\tClinical Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-obesity-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityClinicalDetails></kt-obesity-clinical-details>\n            </mat-tab>\n            <mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n\t\t\t\t\tBiochemical Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-obesity-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityBiochemical></kt-obesity-biochemical>\n\t\t\t</mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Medications\n                </ng-template>\n                    <kt-obesity-medication [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityMedication></kt-obesity-medication>\n            </mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Socioeconomic, Demographic and Behavioural Characteristcs\n                </ng-template>\n                    <kt-obesity-characteristics [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityCharacteristics></kt-obesity-characteristics>\n            </mat-tab>\n            <mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-dna\"></i>\n\t\t\t\t\tFamily History\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-obesity-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityFamilyHistory></kt-obesity-family-history>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-file\"></i>\n\t\t\t\t\tDocument Upload\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-doc-upload  #appDocUpload></kt-doc-upload>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<kt-portlet id=\"print_form\">\n\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Personal Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appObesityPersonalDetails></kt-obesity-personal-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityClinicalDetails></kt-obesity-clinical-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Biochemical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityBiochemical></kt-obesity-biochemical>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medications'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-medication [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityMedication></kt-obesity-medication>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Socioeconomic, Demographic and Behavioural Characteristcs'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-characteristics [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityCharacteristics></kt-obesity-characteristics>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Family History'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-obesity-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\" #appObesityFamilyHistory></kt-obesity-family-history>\n\t\t\t\t</kt-portlet-body>\n            </div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity/obesity.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity/obesity.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Obesity Forms'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\n\t\t\t\t\t\t\t<!--</mat-hint>-->\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\n\t\t\t\t\t   [dataSource]=\"dataSource\"\n\t\t\t\t\t   matSort\n\t\t\t\t\t   #sort1=\"matSort\"\n\n\t\t\t>\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button   routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MY_FORMATS, ObesityBiochemicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityBiochemicalComponent", function() { return ObesityBiochemicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
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
var ObesityBiochemicalComponent = /** @class */ (function () {
    function ObesityBiochemicalComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Biochemical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    ObesityBiochemicalComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    ObesityBiochemicalComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BIOC_FastingGlucose_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG2_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG2_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG2_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG2_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_OGTT_FBG2_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Microalbumin_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Microalbumin_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Microalbumin_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Microalbumin_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Microalbumin_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_CRP_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_CRP_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_CRP_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_CRP_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_CRP_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TNF_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TNF_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TNF_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TNF_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TNF_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ILF_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ILF_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ILF_LastTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ILF_LastTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ILF_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObesityBiochemicalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityBiochemicalComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObesityBiochemicalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObesityBiochemicalComponent.prototype.onSubmit = function () {
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
                        _this._service.createSample(data_1, true).subscribe(function (res) {
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
                this._service.createSample(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObesityBiochemicalComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "BodyMass": (this.form.controls["BodyWeight"].value / this.form.controls["Height"].value).toFixed(2) });
        }
    };
    ObesityBiochemicalComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ObesityBiochemicalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityBiochemicalComponent.prototype, "disableInput", void 0);
    ObesityBiochemicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-biochemical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./biochemical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.html")).default,
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
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObesityBiochemicalComponent);
    return ObesityBiochemicalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ObesityCharacteristicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityCharacteristicsComponent", function() { return ObesityCharacteristicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var ObesityCharacteristicsComponent = /** @class */ (function () {
    function ObesityCharacteristicsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Socioeconomic, Demographic and Behavioural Characteristics";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    ObesityCharacteristicsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    ObesityCharacteristicsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "SDBC_SkinColor": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SDBC_Socioeconomic": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SDBC_SmokingStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_EatFastfood_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Fruits_Vegetables_Day": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Sodapop_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Eat_Midnight": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_HealthyDiet": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYA_Exercise_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYA_Satisfy_Body": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYA_Happy_Life": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObesityCharacteristicsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityCharacteristicsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObesityCharacteristicsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObesityCharacteristicsComponent.prototype.onSubmit = function () {
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
                        _this._service.createSample(data_1, true).subscribe(function (res) {
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
                this._service.createSample(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObesityCharacteristicsComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "BodyMass": (this.form.controls["BodyWeight"].value / (this.form.controls["Height"].value * this.form.controls["Height"].value)).toFixed(2) });
        }
    };
    ObesityCharacteristicsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ObesityCharacteristicsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityCharacteristicsComponent.prototype, "disableInput", void 0);
    ObesityCharacteristicsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-characteristics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./characteristics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObesityCharacteristicsComponent);
    return ObesityCharacteristicsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ObesityClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityClinicalDetailsComponent", function() { return ObesityClinicalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var ObesityClinicalDetailsComponent = /** @class */ (function () {
    function ObesityClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    ObesityClinicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    ObesityClinicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "CLIN_BodyWeight_KG": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Height_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BMI_KGM2": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_WaistCircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Hipcircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_VerticalTrunkCircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_WHR": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BodyFatMass_Kg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BMIFatPercent": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Type2Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Respiratory": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Gastrointestinal": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_SYS_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_DIA_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObesityClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObesityClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObesityClinicalDetailsComponent.prototype.onSubmit = function () {
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
                        _this._service.createSample(data_1, true).subscribe(function (res) {
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
                this._service.createSample(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObesityClinicalDetailsComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["CLIN_BodyWeight_KG"].value && this.form.controls["CLIN_Height_CM"].value) {
            this.form.patchValue({ "CLIN_BMI_KGM2": (this.form.controls["CLIN_BodyWeight_KG"].value / (this.form.controls["CLIN_Height_CM"].value * this.form.controls["CLIN_Height_CM"].value)).toFixed(2) });
        }
    };
    ObesityClinicalDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ObesityClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityClinicalDetailsComponent.prototype, "disableInput", void 0);
    ObesityClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObesityClinicalDetailsComponent);
    return ObesityClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L29iZXNpdHkvX3N1YnMvZG9jLXVwbG9hZC9DOlxcSmFuZVxcUHJvamVjdHNcXEphbmVcXEtoYWxpZmFDRVJBL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZvcm0tbWFuYWdlbWVudFxcb2Jlc2l0eVxcX3N1YnNcXGRvYy11cGxvYWRcXGRvYy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vYmVzaXR5L19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vYmVzaXR5L19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVtZTogICAgICAgIzQ1NGNhZDtcbiRkYXJrLXRleHQ6ICAgIzVmNjk4MjtcblxuLnVwbG9hZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2VlZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuXG4gICAgJi5ob3ZlciB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAkdGhlbWU7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggI2VlZTtcblxuICAgICAgI3N0YXJ0IHtcbiAgICAgICAgaS5mYSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNzdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgaS5mYSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgI3Jlc3BvbnNlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjbWVzc2FnZXMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgfVxuICB9XG5cbiAgI2ZpbGUtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDAgYXV0byAuNXJlbSBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgI25vdGltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIHByb2dyZXNzLFxuICAucHJvZ3Jlc3Mge1xuICAgIC8vIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIH1cblxuICAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGRhcmtlbigkdGhlbWUsOCUpIDAlLCAkdGhlbWUgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCR0aGVtZSw4JSkgMCUsICR0aGVtZSA1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgZGl2IHtcbiAgICBtYXJnaW46IDAgMCAuNXJlbSAwO1xuICAgIGNvbG9yOiAkZGFyay10ZXh0O1xuICB9XG4gIC5idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IC41cmVtIC41cmVtIDFyZW0gLjVyZW07XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWU7XG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uZmlsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMyZDY7XG59XG5cbi5maWxlLXJvd3tcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6MjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XG59IiwiLnVwbG9hZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2VlZTtcbn1cbi51cGxvYWRlcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGNhZDtcbn1cbi51cGxvYWRlciBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnVwbG9hZGVyIGxhYmVsLmhvdmVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQ1NGNhZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICNlZWU7XG59XG4udXBsb2FkZXIgbGFiZWwuaG92ZXIgI3N0YXJ0IGkuZmEge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi51cGxvYWRlciAjc3RhcnQge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZGVyICNzdGFydC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyICNzdGFydCBpLmZhIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2Uge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZGVyICNyZXNwb25zZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyICNyZXNwb25zZSAjbWVzc2FnZXMge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogMCBhdXRvIDAuNXJlbSBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xufVxuLnVwbG9hZGVyICNmaWxlLWltYWdlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI25vdGltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI25vdGltYWdlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgcHJvZ3Jlc3MsXG4udXBsb2FkZXIgLnByb2dyZXNzIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udXBsb2FkZXIgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4udXBsb2FkZXIgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udXBsb2FkZXIgLnByb2dyZXNzW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNmOTAgMCUsICM0NTRjYWQgNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnVwbG9hZGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyIGRpdiB7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICBjb2xvcjogIzVmNjk4Mjtcbn1cbi51cGxvYWRlciAuYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMXJlbSAwLjVyZW07XG4gIGNsZWFyOiBib3RoO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICM0NTRjYWQ7XG4gIGJvcmRlci1jb2xvcjogIzQ1NGNhZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMmQ2O1xufVxuXG4uZmlsZS1yb3cge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.ts ***!
  \**********************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ObesityFamilyHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityFamilyHistoryComponent", function() { return ObesityFamilyHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var ObesityFamilyHistoryComponent = /** @class */ (function () {
    function ObesityFamilyHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    ObesityFamilyHistoryComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    ObesityFamilyHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FAMI_Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_ObesityComplication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_ObesityComplication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObesityFamilyHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityFamilyHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObesityFamilyHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObesityFamilyHistoryComponent.prototype.onSubmit = function () {
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
                        _this._service.createSample(data_1, true).subscribe(function (res) {
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
                this._service.createSample(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObesityFamilyHistoryComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ObesityFamilyHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityFamilyHistoryComponent.prototype, "disableInput", void 0);
    ObesityFamilyHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./family-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObesityFamilyHistoryComponent);
    return ObesityFamilyHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ObesityMedicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityMedicationComponent", function() { return ObesityMedicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var ObesityMedicationComponent = /** @class */ (function () {
    function ObesityMedicationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Medication";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    ObesityMedicationComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
        this.createForm();
    };
    ObesityMedicationComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "MEDI_Any_Medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Medication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Allergies_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObesityMedicationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityMedicationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObesityMedicationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObesityMedicationComponent.prototype.onSubmit = function () {
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
                        _this._service.createSample(data_1, true).subscribe(function (res) {
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
                this._service.createSample(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObesityMedicationComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "BodyMass": (this.form.controls["BodyWeight"].value / this.form.controls["Height"].value).toFixed(2) });
        }
    };
    ObesityMedicationComponent.ctorParameters = function () { return [
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
    ], ObesityMedicationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityMedicationComponent.prototype, "disableInput", void 0);
    ObesityMedicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-medication',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], ObesityMedicationComponent);
    return ObesityMedicationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MY_FORMATS, ObesityPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityPersonalDetailsComponent", function() { return ObesityPersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
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
var ObesityPersonalDetailsComponent = /** @class */ (function () {
    function ObesityPersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.cd = cd;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Obesity";
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
    ObesityPersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 6).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObesityPersonalDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "SampleID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectionPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DateofAssessment": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Firstname": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_MiddleName": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_FamilyName": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_DateofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_PlaceofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Nationality": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity_Mixed_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_IsParents_Related": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_marriage_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Numberofwives": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_NumberofChildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Home_Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Work_Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Mobile_Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_City": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Emirates": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.filteredNationalities = this.form.controls["PERS_Nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredNationalities = this.form.controls["PERS_PlaceofBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    ObesityPersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(6, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObesityPersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    // createSampleId() {
    //     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //     this._service.createSampleId(6, this.form.value["SampleID"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    //     if (!this.formId) {
    //      this.saveFormId = res;
    //      this._interactionService.sendRefId(parseInt(this.saveFormId));
    //      }
    //     this.splashService.splashScreen({isLoading : false, message : "" })
    //     this.isSampleSubmit = true;
    //     this.onSubmit();
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
    //                     this._service.createSample(data, true).subscribe((res)=> {
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
    //             this._service.createSample(data, false).subscribe((res)=> {
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
    ObesityPersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(6, this.form.value["SampleID"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    ObesityPersonalDetailsComponent.prototype.onSubmit = function () {
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
    ObesityPersonalDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ObesityPersonalDetailsComponent.prototype.onSelectFile = function (event) {
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
    ObesityPersonalDetailsComponent.ctorParameters = function () { return [
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
    ], ObesityPersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObesityPersonalDetailsComponent.prototype, "disableInput", void 0);
    ObesityPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.html")).default,
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
    ], ObesityPersonalDetailsComponent);
    return ObesityPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ObesityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityEditComponent", function() { return ObesityEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/family-history/family-history.component */ "./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/medication/medication.component */ "./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.ts");
/* harmony import */ var _subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/characteristics/characteristics.component */ "./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.ts");

// Angular


// Layout









var ObesityEditComponent = /** @class */ (function () {
    function ObesityEditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    ObesityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Obesity');
    };
    ObesityEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    ObesityEditComponent.prototype.reset = function () {
    };
    ObesityEditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appObesityPersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appObesityClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appObesityBiochemical.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appObesityMedication.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appObesityCharacteristics.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appObesityFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appDocUpload.onSubmit();
        }
    };
    ObesityEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_7__["ObesityFamilyHistoryComponent"])
    ], ObesityEditComponent.prototype, "appObesityFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_8__["ObesityBiochemicalComponent"])
    ], ObesityEditComponent.prototype, "appObesityBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityPersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["ObesityPersonalDetailsComponent"])
    ], ObesityEditComponent.prototype, "appObesityPersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_6__["ObesityClinicalDetailsComponent"])
    ], ObesityEditComponent.prototype, "appObesityClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_9__["ObesityMedicationComponent"])
    ], ObesityEditComponent.prototype, "appObesityMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityCharacteristics'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_10__["ObesityCharacteristicsComponent"])
    ], ObesityEditComponent.prototype, "appObesityCharacteristics", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_11__["DocUploadComponent"])
    ], ObesityEditComponent.prototype, "appDocUpload", void 0);
    ObesityEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./obesity-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], ObesityEditComponent);
    return ObesityEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ObesityPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityPrintComponent", function() { return ObesityPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/family-history/family-history.component */ "./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/medication/medication.component */ "./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.ts");
/* harmony import */ var _subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/characteristics/characteristics.component */ "./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.ts");

// Angular


// Layout








var ObesityPrintComponent = /** @class */ (function () {
    function ObesityPrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    ObesityPrintComponent.prototype.ngOnInit = function () {
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
    ObesityPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init form
     */
    ObesityPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Obesity Print');
        this.subheaderService.showPrintButton(true);
    };
    ObesityPrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appObesityPersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appObesityClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appObesityBiochemical.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appObesityMedication.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appObesityCharacteristics.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appObesityFamilyHistory.onSubmit();
        }
    };
    ObesityPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_7__["ObesityFamilyHistoryComponent"])
    ], ObesityPrintComponent.prototype, "appObesityFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_8__["ObesityBiochemicalComponent"])
    ], ObesityPrintComponent.prototype, "appObesityBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityPersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["ObesityPersonalDetailsComponent"])
    ], ObesityPrintComponent.prototype, "appObesityPersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_6__["ObesityClinicalDetailsComponent"])
    ], ObesityPrintComponent.prototype, "appObesityClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_9__["ObesityMedicationComponent"])
    ], ObesityPrintComponent.prototype, "appObesityMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appObesityCharacteristics'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_10__["ObesityCharacteristicsComponent"])
    ], ObesityPrintComponent.prototype, "appObesityCharacteristics", void 0);
    ObesityPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./obesity-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], ObesityPrintComponent);
    return ObesityPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/obesity.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/obesity.module.ts ***!
  \***********************************************************************/
/*! exports provided: ObisityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObisityModule", function() { return ObisityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_obesity_obesity_obesity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/obesity/obesity/obesity.component */ "./src/app/views/pages/form-management/obesity/obesity/obesity.component.ts");
/* harmony import */ var _components_obesity_obesity_print_obesity_print_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/obesity/obesity-print/obesity-print.component */ "./src/app/views/pages/form-management/obesity/obesity-print/obesity-print.component.ts");
/* harmony import */ var _components_obesity_obesity_edit_obesity_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/obesity/obesity-edit/obesity-edit.component */ "./src/app/views/pages/form-management/obesity/obesity-edit/obesity-edit.component.ts");
/* harmony import */ var _components_obesity_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/obesity/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/obesity/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_obesity_subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/obesity/_subs/medication/medication.component */ "./src/app/views/pages/form-management/obesity/_subs/medication/medication.component.ts");
/* harmony import */ var _components_obesity_subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/obesity/_subs/family-history/family-history.component */ "./src/app/views/pages/form-management/obesity/_subs/family-history/family-history.component.ts");
/* harmony import */ var _components_obesity_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/obesity/_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/obesity/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _components_obesity_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/obesity/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/obesity/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_obesity_subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/obesity/_subs/characteristics/characteristics.component */ "./src/app/views/pages/form-management/obesity/_subs/characteristics/characteristics.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_obesity_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/obesity/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/obesity/_subs/doc-upload/doc-upload.component.ts");


















var routes = [
    {
        path: '',
        component: _components_obesity_obesity_obesity_component__WEBPACK_IMPORTED_MODULE_7__["ObesityComponent"],
    },
    {
        path: 'add',
        component: _components_obesity_obesity_edit_obesity_edit_component__WEBPACK_IMPORTED_MODULE_9__["ObesityEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_obesity_obesity_edit_obesity_edit_component__WEBPACK_IMPORTED_MODULE_9__["ObesityEditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_obesity_obesity_print_obesity_print_component__WEBPACK_IMPORTED_MODULE_8__["ObesityPrintComponent"],
    }
];
var ObisityModule = /** @class */ (function () {
    function ObisityModule() {
    }
    ObisityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                //Obesity
                _components_obesity_obesity_obesity_component__WEBPACK_IMPORTED_MODULE_7__["ObesityComponent"],
                _components_obesity_obesity_edit_obesity_edit_component__WEBPACK_IMPORTED_MODULE_9__["ObesityEditComponent"],
                _components_obesity_obesity_print_obesity_print_component__WEBPACK_IMPORTED_MODULE_8__["ObesityPrintComponent"],
                _components_obesity_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["ObesityPersonalDetailsComponent"],
                _components_obesity_subs_medication_medication_component__WEBPACK_IMPORTED_MODULE_11__["ObesityMedicationComponent"],
                _components_obesity_subs_family_history_family_history_component__WEBPACK_IMPORTED_MODULE_12__["ObesityFamilyHistoryComponent"],
                _components_obesity_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_13__["ObesityBiochemicalComponent"],
                _components_obesity_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_14__["ObesityClinicalDetailsComponent"],
                _components_obesity_subs_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_15__["ObesityCharacteristicsComponent"],
                _components_obesity_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__["DocUploadComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            ]
        })
    ], ObisityModule);
    return ObisityModule;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/obesity/obesity/obesity.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/form-management/obesity/obesity/obesity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ObesityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObesityComponent", function() { return ObesityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var ObesityComponent = /** @class */ (function () {
    function ObesityComponent(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, splashService, cdr) {
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
            templateId: 6,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    ObesityComponent.prototype.fetchList = function () {
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
            _this.cdr.detectChanges();
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            //this.searchInput.nativeElement.focus();
        });
    };
    ObesityComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(6, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    ObesityComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    ObesityComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Obesity');
        this.subheaderService.showPrintButton(false);
    };
    ObesityComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    ObesityComponent.prototype.editForm = function (id) {
        this.router.navigate(['../edit', id], { relativeTo: this.activatedRoute });
    };
    ObesityComponent.prototype.openDialog = function (id) {
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
    ObesityComponent.prototype.deleteForm = function (id) {
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
    ObesityComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ObesityComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ObesityComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ObesityComponent.prototype, "searchInput", void 0);
    ObesityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-obesity',
            template: __importDefault(__webpack_require__(/*! raw-loader!./obesity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/obesity/obesity/obesity.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ObesityComponent);
    return ObesityComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-obesity-obesity-module.js.map