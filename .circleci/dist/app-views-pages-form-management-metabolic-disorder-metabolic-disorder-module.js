(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-metabolic-disorder-metabolic-disorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Fasting glucose level\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                    <input  matInput [matDatepicker]=\"dp1\" formControlName=\"bloodCollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp1.open()\" (focus)=\"dp1.open()\"  name=\"dp1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp1></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"recentresult\" />\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Random glucose level\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp2\" formControlName=\"glucose_collected_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp2.open()\" (focus)=\"dp2.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp2></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"glucose_recentresult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Glucose tolerance (OGTT)\n                    *Fasting Blood Glucose\n                    *FBG after 2 hours\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp3\" formControlName=\"glucose_tolerance_collected_date\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp3></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"glucose_tolerance_recent_result\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    HbA1c (%)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp4\" formControlName=\"hba1c\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp4.open()\" (focus)=\"dp4.open()\"  name=\"dp4\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp4></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"hba1c_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Total cholesterol (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp5\" formControlName=\"cholesterol_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp5.open()\" (focus)=\"dp5.open()\"  name=\"dp5\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp5\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp5></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"cholesterol_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Triglyceride (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp6\" formControlName=\"Triglyceride_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp6.open()\" (focus)=\"dp6.open()\"  name=\"dp6\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp6\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp6></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Triglyceride_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    HDL (mg/dl)x\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp7\" formControlName=\"HDL_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp7.open()\" (focus)=\"dp7.open()\"  name=\"dp7\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp7\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp7></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"HDL_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    LDL (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp8\" formControlName=\"LDL_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp8.open()\" (focus)=\"dp8.open()\"  name=\"dp8\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp8\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp8></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"LDL_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Microalbumin (mg)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp9\" formControlName=\"Microalbumin_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp9.open()\" (focus)=\"dp9.open()\"  name=\"dp9\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp9\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp9></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Microalbumin_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Creatinine (mg/dl)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp10\" formControlName=\"Creatinine_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp10.open()\" (focus)=\"dp10.open()\"  name=\"dp10\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp10\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp10></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Creatinine_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Urea\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp11\" formControlName=\"Urea_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp11.open()\" (focus)=\"dp11.open()\"  name=\"dp11\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp11\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp11></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"Urea_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    Vitamin D level (ng/ml)\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp12\" formControlName=\"VitaminD_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp12.open()\" (focus)=\"dp12.open()\"  name=\"dp12\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp12\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp12></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"VitaminD_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-4 form-group\">\n                <label>\n                    eGFR\n                </label>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input  matInput [matDatepicker]=\"dp13\" formControlName=\"eGFR_CollectedDate\"  placeholder=\"Date of blood collection or Report\" (click)=\"dp13.open()\" (focus)=\"dp13.open()\"  name=\"dp13\">\n                    <mat-datepicker-toggle matSuffix [for]=\"dp13\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #dp13></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4  form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Result of recent test\"\n                           formControlName=\"eGFR_RecentResult\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Step and Stride length\" autocomplete=\"off\"     formControlName=\"stride_length\" />\n                        <mat-hint align=\"start\">\n                            (cm)\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Stride velocity\" autocomplete=\"off\"     formControlName=\"stride_velocity\" />\n                        <mat-hint align=\"start\">\n                            (cm/sec)\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Plantar pressure and force during gait displayed in time graphs\" autocomplete=\"off\"     formControlName=\"plantar_pres\" />\n                   <mat-hint align=\"start\">\n                       (Newton/m2, Newton)\n                   </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Metatarsal phalangeal angle\" autocomplete=\"off\"     formControlName=\"Metatarsal_specify\" />\n                        <mat-hint align=\"start\">\n                            (degrees)\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Ankle joint flexion angle\" autocomplete=\"off\"     formControlName=\"Reas_specify\" />\n                        <mat-hint align=\"start\">\n                            (degrees)\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n                </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Body weight without shoes (kg)\" autocomplete=\"off\"   (ngModelChange)=\"calculateBodyMass()\"  formControlName=\"BodyWeight\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\"  matInput placeholder=\"Height without shoes (m)\"  autocomplete=\"off\"  (ngModelChange)=\"calculateBodyMass()\" formControlName=\"Height\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body mass index (kg/m2)\"  autocomplete=\"off\"   formControlName=\"BodyMass\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Waist circumference (cm)\" autocomplete=\"off\"      formControlName=\"Waist\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <h6>Blood pressure</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Systolic\" formControlName=\"BloodPressureSystolic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Diastolic\" formControlName=\"BloodPressureDiastolic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Hypertension</label>\n                        <mat-radio-group aria-labelledby=\"Hypertension\"  formControlName=\"clinical_hypertension\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Diabetic</label>\n                        <mat-radio-group aria-labelledby=\"Diabetic\"  formControlName=\"diabetesMellitus\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Type\" formControlName=\"diabetic\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"number\" matInput placeholder=\"Age of diagnosis(diabetes)\" formControlName=\"age\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Dyslipidemia</label>\n                        <mat-radio-group aria-labelledby=\"Dyslipidemia\"  formControlName=\"dyslipidemia\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Other diseases\" formControlName=\"diabetic_other\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Do you have any specific diabetes related complications?</label>\n                        <br>\n                        <mat-radio-group aria-labelledby=\"Dyslipidemia\"  formControlName=\"diabetes_com\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"If Yes, number of years\" formControlName=\"diabetes_com_specify\" autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <h6>If Yes, what are the specific diabetes related complications? (Please select as many as appropriate)</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_retinopathy\"  >Retinopathy</mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            Eyes:\n                            1. Nonproliferative\n                            2. Proliferative<br>\n                            3. Laser\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_neuropathy\"  >Neuropathy</mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            Feet (ulcers):\n                            *gangrene<br>\n                            *loss of sensation/numbness/pain/burning/tingling\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Other\" formControlName=\"neuropathy_other\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Amputation:\n                            *Loss of toe, foot or leg. *Pain in calf muscles while walking. <br>\n                            *Circulation/peripheral vascular disease/operation on artery in legs.\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_cva\"  >Cerebrovascular accident (C.V.A)\n                        </mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            TIA <br>\n                            Stroke (bleeding, Ischemia) <br>\n                            Bleeding<br>\n                            Stroke: *loss of sensation down one side of the body<br>\n                            *Difficulty in speaking/eating<br>\n                            *Operation on artery or neck<br>\n                            *Facial drop/paralysed arm or leg\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_nephropathy\" >Nephropathy</mat-checkbox>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"Albuminuria 30-299 > 300\" formControlName=\"nephropathy_albuminuria_others\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Kidney:\n                            *protein or albumin in the urine\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field  class=\"mat-form-field-fluid\">\n                        <input type=\"text\" matInput placeholder=\"eGFR\" formControlName=\"nephropathy_eGFR_others\" autocomplete=\"off\"    />\n                        <mat-hint>\n                            Kidney:\n                            *protein or albumin in the urine\n                        </mat-hint>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"spec_app_cad\"  >Coronary artery disease(C.A.D)\n                        </mat-checkbox>\n                        <br>\n                        <mat-hint>\n                            * Coronary artery bypass grafting (CABG)<br>\n                            * Percutaneous Coronary Intervention (PCI)<br>\n                            * Arrhythymias (AF)\n                        </mat-hint>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox   formControlName=\"diabetes_comp_other_check\"  >Other</mat-checkbox>\n                        <div [hidden]=\"!form.get('diabetes_comp_other_check').value\">\n                            <mat-form-field   class=\"mat-form-field-fluid\">\n                                <input  type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"diabetes_comp_others_text\" autocomplete=\"off\"    />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <label>* Current diabetes management method</label>\n                </div>\n                    <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_none\">None</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_tabletsonly\">Tablets only </mat-checkbox>\n                        <mat-checkbox  class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_diettablets\">Diet & Tablets </mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"    formControlName=\"diabetes_man_diettabletsinsulin\">Diet, Tablets & Insulin</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_dietonly\">Diet only</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_insulinonly\">Insulin only</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_dietinsulin\">Diet & Insulin</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"diabetes_man_unknown\">Unknown</mat-checkbox>\n                        <mat-checkbox  class=\"lab-mar-right-15\"   formControlName=\"current_diabetes_man_other\">Others please specify</mat-checkbox>\n                        <div class=\"col-md-12 row\" [hidden]=\"!form.get('current_diabetes_man_other').value\">\n                            <mat-form-field   class=\"mat-form-field-fluid\">\n                                <input   type=\"text\" matInput placeholder=\"Please specify\" formControlName=\"current_diabetes_man_other_text\" autocomplete=\"off\"    />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Diabetes in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"diabetes\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Diabetes complication in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"diabetesc\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Obesity in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"obesity\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Hypertension in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"hypertension\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        CVD in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"cvd\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Dyslipidaemia in the family\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"dyslipidaemia\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 row \">\n            <div class=\"col-md-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Others\"\n                           formControlName=\"familyothers\" />\n                </mat-form-field>\n            </div>\n            </div>\n        <div class=\"col-md-12 row \">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grandfather (mother side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grandfa_maside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grandfa_maside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grandfa_maside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grandfa_maside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grandfa_maside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grandmother (mother side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grandma_maside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grandma_maside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grandma_maside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grandma_maside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grandma_maside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grandfather (father side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grandfa_faside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grandfa_faside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grandfa_faside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grandfa_faside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grandfa_faside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grandmother (father side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grandma_faside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grandma_faside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grandma_faside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grandma_faside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grandma_faside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Mother\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"ma_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"ma_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"ma_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"ma_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"ma_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Father\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"fa_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"fa_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"fa_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"fa_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"fa_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Sisters\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"sister_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"sister_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"sister_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"sister_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"sister_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Brothers\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"brother_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"brother_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"brother_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"brother_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"brother_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Wives\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"wives_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"wives_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"wives_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"wives_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"wives_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Husband\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"husband_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"husband_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"husband_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"husband_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"husband_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Son\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"son_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"son_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"son_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"son_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"son_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Daughters\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"daughters_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"daughters_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"daughters_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"daughters_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"daughters_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grandsons\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grandsons_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grandsons_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grandsons_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grandsons_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grandsons_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Grand Daughters\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"grand_daughters_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"grand_daughters_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"grand_daughters_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"grand_daughters_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"grand_daughters_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Uncles (mother side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"uncles_maside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"uncles_maside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"uncles_maside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"uncles_maside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"uncles_maside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Aunts (mother side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"aunts_maside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"aunts_maside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"aunts_maside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"aunts_maside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"aunts_maside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Uncles (father side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"uncles_faside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"uncles_faside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"uncles_faside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"uncles_faside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"uncles_faside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Aunts (father side)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"aunts_faside_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"aunts_faside_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"aunts_faside_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"aunts_faside_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"aunts_faside_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Cousins (mother side - Aunt)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"cousins_maside_aunt_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"cousins_maside_aunt_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"cousins_maside_aunt_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"cousins_maside_aunt_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"cousins_maside_aunt_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Cousins (mother side - Uncle)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"cousins_maside_uncle_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"cousins_maside_uncle_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"cousins_maside_uncle_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"cousins_maside_uncle_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"cousins_maside_uncle_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Cousins (father side - Aunt)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"cousins_faside_aunt_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"cousins_faside_aunt_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"cousins_faside_aunt_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"cousins_faside_aunt_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"cousins_faside_aunt_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Cousins (father side - Uncle)\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Total No\"\n                           formControlName=\"cousins_faside_uncle_no\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Deceased\"\n                           formControlName=\"cousins_faside_uncle_dec\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not affected\"\n                           formControlName=\"cousins_faside_uncle_notaff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Affected\"\n                           formControlName=\"cousins_faside_uncle_aff\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Not Sure\"\n                           formControlName=\"cousins_faside_uncle_notsur\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <label class=\"hoverable\" for=\"fileInput\">\n        <img class=\"img\" [src]=\"url ? url :  '/assets//media/img_avatar.png'\">\n        <div class=\"hover-text\">\n            Family Photo\n        </div>\n        <div class=\"background\"></div>    \n    </label>\n        <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Fasting glucose level\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you walk?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"lifestyle_walk\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('lifestyle_walk').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, Please Specify in minutes\"\n                           formControlName=\"lifestyle_walk_specify\" />\n                </mat-form-field>\n            </div>\n        <div class=\"col-md-12 row\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you exercise?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"lifestyle_exercise\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-8 row\" *ngIf=\"Mform.get('lifestyle_exercise').value == 'yes'\">\n            <div class=\"col-md-3\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        If, Yes Intensity\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-5  form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"intensity\">\n                        <mat-radio-button  value=\"low\">Low</mat-radio-button>\n                        <mat-radio-button  value=\"moderate\">Moderate</mat-radio-button>\n                        <mat-radio-button  value=\"high\">High</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"row  col-md-12 form-group\">\n            <h6>\n                Diet\n            </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you follow a healthy diet\n                    </label>\n                </div>\n            </div>\n\n            <div class=\"col-md-3 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"healthy\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('healthy').value == 'others'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Others, Please specify\"\n                           formControlName=\"SpecifyHealthy\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12 \">\n            <div class=\"col-md-12 row form-group\">\n                <h6>\n                    Smoking status\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        What is your smoking status\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"currentSmoke\">\n                        <mat-radio-button  value=\"yes\">Current smoker</mat-radio-button>\n                        <mat-radio-button  value=\"exsmoker\">Ex-smoker</mat-radio-button>\n                        <mat-radio-button  value=\"never\">Never smoked</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"Mform\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you have allergies?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"medications_allergies\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('medications_allergies').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, Please Specify\"\n                           formControlName=\"medications_allergies_specify\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Intolerance?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"medication_intolerance\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('medication_intolerance').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, Please Specify\"\n                           formControlName=\"medication_intolerance_specify\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Do you take medications?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"medication_medication\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('medication_medication').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, Please Specify\"\n                           formControlName=\"medication_medication_specify\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Anti-Hypertensive\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_ace\"> ACE-inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_ace').value || Mform.get('inhibit_ace').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Perindopril Dose\"\n                               formControlName=\"perindop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Captopril Dose\"\n                               formControlName=\"captopril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Enalapril Dose\"\n                               formControlName=\"enalapril\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Lisinopril Dose\"\n                               formControlName=\"lisinop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"medications_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_arbs\"> ARBs</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_arbs').value ||  Mform.get('inhibit_arbs').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Losartan Dose\"\n                               formControlName=\"losartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Valsartan Dose\"\n                               formControlName=\"Valsartan\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_beta\"> Beta-blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_beta').value\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atenolol Dose\"\n                               formControlName=\"atenolol\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Bisoprolol Dose\"\n                               formControlName=\"bisopr\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"beta_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_diuret\"> Diuretics</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_diuret').value || Mform.get('inhibit_diuret').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Indapamide Dose\"\n                               formControlName=\"indapam\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Hydrochlorothiazide Dose\"\n                               formControlName=\"hydroch\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Frusemide Dose\"\n                               formControlName=\"fruse\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"diur_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"inhibit_channel\"> CA Channel Blockers</mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('inhibit_channel').value || Mform.get('inhibit_channel').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Amlodipine Dose\"\n                               formControlName=\"amlodip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nifedipine Dose\"\n                               formControlName=\"nifedip\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Verapamil Dose\"\n                               formControlName=\"verapamil\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"diur_inhibit_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <label>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"others_oh\"> </mat-checkbox>\n                </label>\n            </div>\n            <div *ngIf=\"Mform.get('others_oh').value || Mform.get('others_oh').value == 'true'\"  class=\"dis-con\" >\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Methyldopa Dose\"\n                               formControlName=\"methyldop\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"otr_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Anti-Dyslipidemia\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"AntiRadio_statinsan\"> Statins</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('AntiRadio_statinsan').value || Mform.get('AntiRadio_statinsan').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Simvastatin Dose\"\n                               formControlName=\"simvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Atorvastatin Dose\"\n                               formControlName=\"atorvast\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Rosuvastatin Dose\"\n                               formControlName=\"rosuvas\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"OtherD\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"AntiRadio_Fibrates\"> Fibrates</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('AntiRadio_Fibrates').value || Mform.get('AntiRadio_Fibrates').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gemfibrozil Dose\"\n                               formControlName=\"gemfib\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Fenofibrate  Dose\"\n                               formControlName=\"fenofib\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\" formControlName=\"AntiRadio_others\"> Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('AntiRadio_others').value || Mform.get('AntiRadio_others').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"AntiOthers\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Anti-hyperglycemia (diabetes) Oral agents\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_Biguanides\"> Biguanides</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_Biguanides').value || Mform.get('anti_hyper_Biguanides').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Metformin Dose\"\n                               formControlName=\"Metformin\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_sus\"> SUs</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_sus').value || Mform.get('anti_hyper_sus').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glibenclamide Dose\"\n                               formControlName=\"glibenclamide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"glimepir\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Gliclazide MR Dose\"\n                               formControlName=\"gliclazide_mr\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glipizide Dose\"\n                               formControlName=\"glipizide_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Glimepride Dose\"\n                               formControlName=\"pride_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_other_su\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_thiazolid\"> Thiazolidinediones</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_thiazolid').value || Mform.get('anti_hyper_thiazolid').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pioglitazone Dose\"\n                               formControlName=\"anti_hyper_pioglit\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"AntiOther\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_meglitin\"> Meglitinides</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_meglitin').value || Mform.get('anti_hyper_meglitin').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nateglinide Dose\"\n                               formControlName=\"anti_hyper_nateglinide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Repaglinide Dose\"\n                               formControlName=\"anti_hyper_nateglinide_repaglinide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_nateglinide_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_glucosid\"> Alpha-glucosidase inhibitors</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_glucosid').value || Mform.get('anti_hyper_glucosid').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Acarbose Dose\"\n                               formControlName=\"acarbose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"acarbose_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_dipeptidyl\">Dipeptidyl peptidase-IV inhibitors (DPP-IV)</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_dipeptidyl').value || Mform.get('anti_hyper_dipeptidyl').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sitagliptin Dose\"\n                               formControlName=\"sitaglip\" />\n                    </mat-form-field>\n                </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Vildagliptin Dose\"\n                           formControlName=\"vildaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Saxagliptin Dose\"\n                           formControlName=\"saxaglip\" />\n                </mat-form-field>\n            </div> <div class=\"col-md-2 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Linagliptin Dose\"\n                           formControlName=\"linaglip\" />\n                </mat-form-field>\n            </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_peptid_others\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_peptid_others\">Others</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_peptid_others').value || Mform.get('anti_hyper_peptid_others').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Pramlintide Dose\"\n                               formControlName=\"pramlintide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"other_inhibit\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_incretinm\">Incretinmimetics (GLP-1 agonist)</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_incretinm').value || Mform.get('anti_hyper_incretinm').value == 'true'\"  class=\"col-md-10 row\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide Dose\"\n                               formControlName=\"exenatide\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Liraglutide Dose\"\n                               formControlName=\"liraglut\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Exenatide (weekly) Dose\"\n                               formControlName=\"exenatide_dose\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"anti_hyper_incretinm_others_dose\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Injections\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"dis-chek-label\" formControlName=\"anti_hyper_insulin_lin\">Insulin</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_insulin_lin').value || Mform.get('anti_hyper_insulin_lin').value == 'true'\"  class=\"col-md-10 row\">\n\n                <div class=\"col-md-12 \">\n                    <div class=\"row\">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Lispro Dose\"\n                                       formControlName=\"lispro_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Aspart Dose\"\n                                       formControlName=\"aspart_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Regular Dose\"\n                                       formControlName=\"regular_dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"NPH Dose\"\n                                       formControlName=\"nph_dose\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"col-md-12 row \">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Detemir Dose\"\n                                       formControlName=\"Detemir_Dose\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Glargine Dose\"\n                                       formControlName=\"glargine\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Others/Dose\"\n                                       formControlName=\"insulin_lin_other_su\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 row\">\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Combination Dose\"\n                                       formControlName=\"combination\" />\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-2 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Others/Dose\"\n                                       formControlName=\"combination_other_su\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n                <h6>\n                    Supplement\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_vitamin\"> Vitamin D3</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_vitamin').value || Mform.get('anti_hyper_vitamin').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"OtherVit\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12 form-group\">\n            <h6>\n                Antidepressives\n            </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_prozac\"> Prozac</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_prozac').value || Mform.get('anti_hyper_prozac').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"OthersPro\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 row form-group\">\n                <h6>\n                    Antinxiety\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"anti_hyper_diazepam\"> Diazepam</mat-checkbox>\n            </div>\n            <div *ngIf=\"Mform.get('anti_hyper_diazepam').value || Mform.get('anti_hyper_diazepam').value == 'true'\"  class=\"dis-con\">\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Others/Dose\"\n                               formControlName=\"OthersDia\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n            <div class=\"col-md-12 form-group row\">\n                <h6>\n                    Traditional Chinese Medicine\n                </h6>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-2 form-group\">\n                <div>\n                    <mat-radio-group formControlName=\"medication_traditional_chinese\">\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" *ngIf=\"Mform.get('medication_traditional_chinese').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Yes, Please Specify\"\n                           formControlName=\"chin_specify\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n\n                    <label class=\"hoverable\" for=\"fileInput\">\n                        <img class=\"img\" [src]=\"url ? url : form.get('sex_mat').value == 'female' ?   '/assets//media/img_avatar-female.png' :  '/assets//media/img_avatar.png'\">\n                        <div class=\"hover-text\">\n                            Choose file\n                            <!--<h4 class=\"success-message\" *ngIf=\"url\"> Uploaded Successfully </h4>-->\n                        </div>\n                        <div class=\"background\"></div>\n                    </label>\n                    <br/>\n                    <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n\n                    <!--<mat-form-field class=\"mat-form-field-fluid\">-->\n                        <!--<input matInput placeholder=\"Form Id\" autocomplete=\"off\" formControlName=\"formId\" />-->\n                        <!--<mat-error>Form Id is-->\n                            <!--<strong>required</strong>-->\n                        <!--</mat-error>-->\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Form Id</strong>-->\n                        <!--</mat-hint>-->\n                    <!--</mat-form-field>-->\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"Sample\" />\n                        <mat-error>Sample Id is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                        <mat-error>Depository Id is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Choose a Date of Assessment\" (click)=\"doaPicker.open()\" formControlName=\"DateAsses\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of assessment</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"form-group  row\">\n                <h6>Platform</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        \n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input type=\"text\" matInput placeholder=\"Panel\" formControlName=\"GWAS\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >Microarray</label>\n                        <mat-radio-group aria-labelledby=\"EXOME\"  formControlName=\"EXOME\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label class=\"lab-mar-right-20\" >WES</label>\n                        <mat-radio-group aria-labelledby=\"WES\"  formControlName=\"WES\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                \n            </div>\n            <div class=\"form-group  row\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <label class=\"lab-mar-right-20\" >WGS  </label>\n                    <mat-radio-group aria-labelledby=\"WGS\"  formControlName=\"WGS\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Others\" formControlName=\"Platform_Others\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"collected_by\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collection Point\"\n                               autocomplete=\"off\"\n                               formControlName=\"Collected_point\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"Firstname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>First Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"Middlename\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Middle Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Name\" autocomplete=\"off\" formControlName=\"Familyname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Family Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date of Birth\" formControlName=\"dob\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <!-- <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"nationality\" />\n                        <mat-hint align=\"start\">Please enter\n                            <strong>Nationality</strong>\n                        </mat-hint>\n                    </mat-form-field> -->\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"country\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Ethnicity\" formControlName=\"Ethnicity\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Ethnicity</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"sex_mat\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"marital_status\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"marital_status\"  formControlName=\"MaritalStatus\">\n                            <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                            <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                            <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                            <mat-radio-button  matInput value=\"widow\">Widow</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"Consanguineou_Marrage\">Consanguineous Marriage &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Wives\"\n                               formControlName=\"Numberofwives\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of Wives</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Children\"\n                               formControlName=\"Numberofchildren\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Number Of Children</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Health Card Number\"\n                               formControlName=\"Healthcardnumber\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Health Card Number</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Health Center\"\n                               formControlName=\"healthcentre\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Health Center</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place Of Birth\" autocomplete=\"off\"\n                               [matAutocomplete]=\"manuf1\"       formControlName=\"Placeofbirth\" />\n\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let data of filteredPlaces | async\" [value]=\"data\">\n                                {{ data }}\n                            </mat-option>\n                        </mat-autocomplete>\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Address\" formControlName=\"Address\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Address</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Suburb\" formControlName=\"Suburb\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Suburb</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  \">\n                <h6>Contact phone number(s)</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Home\" formControlName=\"home\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Home</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Work\" formControlName=\"work\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Work</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Mobile</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-10-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<textarea matInput rows=\"7\" placeholder=\"Comments\"\n                                                      formControlName=\"comments\"></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"'Metabolic Disorder Form'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a [routerLink]=\"[ formId ? '../../' : '../']\"  class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\tmatTooltip=\"Back to the forms list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<!--<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\"-->\n\t\t\t\t <!--mat-raised-button matTooltip=\"Reset changes\">-->\n\t\t\t\t<!--<i class=\"la la-cog\"></i>-->\n\t\t\t\t<!--<span class=\"kt-hidden-mobile\">Reset</span>-->\n\t\t\t<!--</a>-->\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<i class=\"la la-save\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tParticipant Details\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-participant-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-participant-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n\t\t\t\t\tClinical Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appClinical></kt-clinical-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n\t\t\t\t\tBiochemical Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appBiochemical></kt-biochemical>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n\t\t\t\t\tLife Style\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-lifestyle-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appLifestyle></kt-lifestyle-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-pills\"></i>\n\t\t\t\t\tMedication\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-medication-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appMedication></kt-medication-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-dna\"></i>\n\t\t\t\t\tFamily History\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-family-history-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appFamilyHistory></kt-family-history-details>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab  >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tFamily Pedigree\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-family-pedigree  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appFamilyPedigree></kt-family-pedigree>\n\t\t\t</mat-tab>\n\t\t\t\t<mat-tab  >\n                    <ng-template mat-tab-label>\n                        <i class=\"mat-tab-label-icon fa fa-procedures\"></i>\n                        Biomechanics\n                    </ng-template>\n                        <kt-biomechanics-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appBiomechanics></kt-biomechanics-details>\n                </mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-file\"></i>\n\t\t\t\t\tDocument Upload\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-doc-upload  #appDocUpload></kt-doc-upload>\n\t\t\t</mat-tab>\n\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<kt-portlet id=\"print_form\">\n\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Participation Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-participant-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-participant-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appClinical></kt-clinical-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Biochemical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-biochemical [disableInput]=\"isPrint\"   [formData]=\"formId\" #appBiochemical></kt-biochemical>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Life Style'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-lifestyle-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appLifestyle></kt-lifestyle-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Medication'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-medication-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appMedication></kt-medication-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Family History'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-family-history-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appFamilyHistory></kt-family-history-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Family Pedigree'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-family-pedigree  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appFamilyPedigree></kt-family-pedigree>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Biomechanics'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-biomechanics-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appBiomechanics></kt-biomechanics-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Metabolic Disorder'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\n\t\t\t\t\t\t\t<!--</mat-hint>-->\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\n\t\t\t\t\t   [dataSource]=\"dataSource\"\n\t\t\t\t\t   matSort\n\t\t\t\t\t   #sort1=\"matSort\"\n\n\t\t\t>\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"/form-management/metabolic-disorder/edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MY_FORMATS, BiochemicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiochemicalComponent", function() { return BiochemicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
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
var BiochemicalComponent = /** @class */ (function () {
    function BiochemicalComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues, splashService) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.splashService = splashService;
        this.title = "Biochemical Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    BiochemicalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.Mform.patchValue({ "savedFormID": id });
                _this.saveFormId = id;
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
            });
        }
    };
    BiochemicalComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "bloodCollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "recentresult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_collected_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_recentresult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_tolerance_collected_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glucose_tolerance_recent_result": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hba1c": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hba1c_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cholesterol_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cholesterol_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Triglyceride_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Triglyceride_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HDL_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HDL_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LDL_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LDL_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Microalbumin_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Microalbumin_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Creatinine_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Creatinine_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Urea_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Urea_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VitaminD_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VitaminD_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eGFR_CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eGFR_RecentResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    BiochemicalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    BiochemicalComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    BiochemicalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    BiochemicalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
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
                this._service.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
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
    BiochemicalComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BiochemicalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], BiochemicalComponent.prototype, "disableInput", void 0);
    BiochemicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-biochemical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./biochemical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.html")).default,
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]])
    ], BiochemicalComponent);
    return BiochemicalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: BiomechanicsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiomechanicsDetailsComponent", function() { return BiomechanicsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var BiomechanicsDetailsComponent = /** @class */ (function () {
    function BiomechanicsDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    BiomechanicsDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    BiomechanicsDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "stride_length": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "stride_velocity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "plantar_pres": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Metatarsal_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Reas_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    BiomechanicsDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 8).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    BiomechanicsDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    BiomechanicsDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    BiomechanicsDetailsComponent.prototype.onSubmit = function () {
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
                            _this.splashService.splashScreen({
                                isLoading: true,
                                message: "UPDATING"
                            });
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
                this._service.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
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
    BiomechanicsDetailsComponent.ctorParameters = function () { return [
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
    ], BiomechanicsDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], BiomechanicsDetailsComponent.prototype, "disableInput", void 0);
    BiomechanicsDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-biomechanics-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./biomechanics-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], BiomechanicsDetailsComponent);
    return BiomechanicsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalDetailsComponent", function() { return ClinicalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var ClinicalDetailsComponent = /** @class */ (function () {
    function ClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    ClinicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({
                    isLoading: false,
                    message: ""
                });
                if (res.length)
                    _this.prepareForm();
                _this.saveFormId = _this.formId;
            });
        }
        this.createForm();
    };
    ClinicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BodyWeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Height": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BodyMass": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Waist": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureSystolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressureDiastolic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "clinical_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetesMellitus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetic": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "age": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetic_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_com": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetes_com_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
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
            "current_diabetes_man_other_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ClinicalDetailsComponent.prototype.onSubmit = function () {
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
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
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
    ClinicalDetailsComponent.prototype.calculateBodyMass = function () {
        if (this.form.controls["BodyWeight"].value && this.form.controls["Height"].value) {
            this.form.patchValue({ "BodyMass": (this.form.controls["BodyWeight"].value / (this.form.controls["Height"].value * this.form.controls["Height"].value)).toFixed(2) });
        }
    };
    ClinicalDetailsComponent.ctorParameters = function () { return [
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
    ], ClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ClinicalDetailsComponent.prototype, "disableInput", void 0);
    ClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], ClinicalDetailsComponent);
    return ClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L21ldGFib2xpYy1kaXNvcmRlci9fc3Vicy9kb2MtdXBsb2FkL0M6XFxKYW5lXFxQcm9qZWN0c1xcSmFuZVxcS2hhbGlmYUNFUkEvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZm9ybS1tYW5hZ2VtZW50XFxtZXRhYm9saWMtZGlzb3JkZXJcXF9zdWJzXFxkb2MtdXBsb2FkXFxkb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9mb3JtLW1hbmFnZW1lbnQvbWV0YWJvbGljLWRpc29yZGVyL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9tZXRhYm9saWMtZGlzb3JkZXIvX3N1YnMvZG9jLXVwbG9hZC9kb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lOiAgICAgICAjNDU0Y2FkO1xuJGRhcmstdGV4dDogICAjNWY2OTgyO1xuXG4udXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG5cbiAgICAmLmhvdmVyIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR0aGVtZTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xuXG4gICAgICAjc3RhcnQge1xuICAgICAgICBpLmZhIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3N0YXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAjcmVzcG9uc2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNtZXNzYWdlcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAjZmlsZS1pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMCBhdXRvIC41cmVtIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAjbm90aW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3MsXG4gIC5wcm9ncmVzcyB7XG4gICAgLy8gYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCR0aGVtZSw4JSkgMCUsICR0aGVtZSA1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBkaXYge1xuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLjVyZW0gLjVyZW0gMXJlbSAuNXJlbTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5maWxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iLCIudXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xufVxuLnVwbG9hZGVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xufVxuLnVwbG9hZGVyIGxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkZXIgbGFiZWwuaG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDU0Y2FkO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggI2VlZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnVwbG9hZGVyICNzdGFydCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3N0YXJ0IGkuZmEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnVwbG9hZGVyICNyZXNwb25zZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlICNtZXNzYWdlcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwIGF1dG8gMC41cmVtIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBwcm9ncmVzcyxcbi51cGxvYWRlciAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udXBsb2FkZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgZGl2IHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGNvbG9yOiAjNWY2OTgyO1xufVxuLnVwbG9hZGVyIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogIzQ1NGNhZDtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMyZDY7XG59XG5cbi5maWxlLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.ts ***!
  \*********************************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FamilyHistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyHistoryDetailsComponent", function() { return FamilyHistoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var FamilyHistoryDetailsComponent = /** @class */ (function () {
    function FamilyHistoryDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    FamilyHistoryDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    FamilyHistoryDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diabetesc": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cvd": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dyslipidaemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "familyothers": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_maside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_maside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_maside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_maside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_maside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_maside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_maside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_maside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_maside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_maside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_faside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_faside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_faside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_faside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandfa_faside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_faside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_faside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_faside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_faside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandma_faside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ma_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ma_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ma_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ma_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ma_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fa_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fa_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fa_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fa_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fa_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sister_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sister_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sister_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sister_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sister_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "brother_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "brother_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "brother_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "brother_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "brother_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "wives_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "wives_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "wives_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "wives_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "wives_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "husband_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "husband_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "husband_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "husband_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "husband_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "son_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "son_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "son_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "son_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "son_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "daughters_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "daughters_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "daughters_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "daughters_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "daughters_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandsons_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandsons_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandsons_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandsons_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grandsons_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grand_daughters_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grand_daughters_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grand_daughters_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grand_daughters_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "grand_daughters_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_maside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_maside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_maside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_maside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_maside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_maside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_maside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_maside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_maside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_maside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_faside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_faside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_faside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_faside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "uncles_faside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_faside_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_faside_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_faside_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_faside_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aunts_faside_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_aunt_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_aunt_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_aunt_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_aunt_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_aunt_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_uncle_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_uncle_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_uncle_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_uncle_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_maside_uncle_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_aunt_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_aunt_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_aunt_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_aunt_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_aunt_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_uncle_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_uncle_dec": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_uncle_notaff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_uncle_aff": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cousins_faside_uncle_notsur": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    FamilyHistoryDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    FamilyHistoryDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    FamilyHistoryDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    FamilyHistoryDetailsComponent.prototype.onSubmit = function () {
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
                this._service.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
                    if (res) {
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
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
    FamilyHistoryDetailsComponent.ctorParameters = function () { return [
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
    ], FamilyHistoryDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], FamilyHistoryDetailsComponent.prototype, "disableInput", void 0);
    FamilyHistoryDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-family-history-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./family-history-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], FamilyHistoryDetailsComponent);
    return FamilyHistoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: FamilyPedigreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPedigreeComponent", function() { return FamilyPedigreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");









//../../../../../../../_utils/api.url
var FamilyPedigreeComponent = /** @class */ (function () {
    function FamilyPedigreeComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues, cd, splashService) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.cd = cd;
        this.splashService = splashService;
        this.title = "Family History Details";
        this.saveFormId = 0;
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__["mediaPath"];
        this.isFormSubmit = false;
    }
    FamilyPedigreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.Mform.patchValue({ "savedFormID": id });
                _this.saveFormId = id;
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    FamilyPedigreeComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "family_pedigree": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    FamilyPedigreeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    FamilyPedigreeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
        if (this.url == "" && this.Mform.controls["family_pedigree"].value) {
            this.url = this.mediaPath + "/images/" + this.formId + "_" + this.Mform.controls["family_pedigree"].value;
        }
    };
    FamilyPedigreeComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.saveFormId).subscribe(function (res) {
            _this.Mform.patchValue({ "family_pedigree": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    FamilyPedigreeComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    FamilyPedigreeComponent.prototype.updatedSingleAttributes = function (mode) {
        var _this = this;
        var data = {
            "FormAttributeID": 301,
            "SavedFormID": this.saveFormId,
            "AttributeValue": this.Mform.value["family_pedigree"]
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
    FamilyPedigreeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            if (this.fileToUpload && !this.fileUploadSuccess) {
                this.uploadImage();
                return;
            }
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                if (this.fileToUpload) {
                    this.updatedSingleAttributes(true);
                }
                if (data_1.length == 0)
                    return;
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
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
    FamilyPedigreeComponent.prototype.onSelectFile = function (event) {
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
    FamilyPedigreeComponent.prototype.onClick = function () {
        // const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        // fileUpload.click();
    };
    FamilyPedigreeComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FamilyPedigreeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], FamilyPedigreeComponent.prototype, "disableInput", void 0);
    FamilyPedigreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-family-pedigree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./family-pedigree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]])
    ], FamilyPedigreeComponent);
    return FamilyPedigreeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LifestyleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestyleDetailsComponent", function() { return LifestyleDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var LifestyleDetailsComponent = /** @class */ (function () {
    function LifestyleDetailsComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues, splashService) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.splashService = splashService;
        this.title = "Biomechanics Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    LifestyleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                    _this.saveFormId = id;
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    LifestyleDetailsComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "lifestyle_walk": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lifestyle_walk_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lifestyle_exercise": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "intensity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "healthy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SpecifyHealthy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "currentSmoke": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    LifestyleDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    LifestyleDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    LifestyleDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    LifestyleDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
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
                        _this.splashService.splashScreen({
                            isLoading: false,
                            message: ""
                        });
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
    LifestyleDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LifestyleDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], LifestyleDetailsComponent.prototype, "disableInput", void 0);
    LifestyleDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-lifestyle-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lifestyle-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]])
    ], LifestyleDetailsComponent);
    return LifestyleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: MedicationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationDetailsComponent", function() { return MedicationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var MedicationDetailsComponent = /** @class */ (function () {
    function MedicationDetailsComponent(_service, eformFB, _interactionService, _snackBar, finalFormValues, splashService) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.splashService = splashService;
        this.title = "Biomechanics Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    MedicationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                if (id) {
                    _this.Mform.patchValue({ "savedFormID": id });
                }
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    MedicationDetailsComponent.prototype.createForm = function () {
        this.Mform = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "medications_allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medications_allergies_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_intolerance_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_medication_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inhibit_ace": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "perindop": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "captopril": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "enalapril": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lisinop": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medications_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inhibit_arbs": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "losartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Valsartan": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inhibit_beta": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atenolol": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "bisopr": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "beta_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inhibit_diuret": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "indapam": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hydroch": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fruse": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diur_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "inhibit_channel": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "amlodip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nifedip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "verapamil": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "diur_inhibit_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "others_oh": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "methyldop": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "otr_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiRadio_statinsan": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "simvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "atorvast": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "rosuvas": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OtherD": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiRadio_Fibrates": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gemfib": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "fenofib": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            //  "fibrat1": new FormControl({value: '', disabled: this.disableInput}),
            //  "fibrat2": new FormControl({value: '', disabled: this.disableInput}),
            "AntiRadio_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiOthers": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_Biguanides": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Metformin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_sus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glibenclamide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glimepir": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "gliclazide_mr": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glipizide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pride_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_other_su": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_thiazolid": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_pioglit": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AntiOther": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_meglitin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_nateglinide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_nateglinide_repaglinide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_nateglinide_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_glucosid": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "acarbose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "acarbose_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_dipeptidyl": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sitaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "vildaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "saxaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "linaglip": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dipeptidyl_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_peptid_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pramlintide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "other_inhibit": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_incretinm": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "exenatide": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "liraglut": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "exenatide_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_incretinm_others_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_insulin_lin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "lispro_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "aspart_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "regular_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "nph_dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Detemir_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "glargine": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "insulin_lin_other_su": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "combination": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "combination_other_su": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_vitamin": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OtherVit": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_prozac": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OthersPro": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "anti_hyper_diazepam": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OthersDia": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "medication_traditional_chinese": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "chin_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    MedicationDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    MedicationDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.Mform.controls[name]) {
                _this.Mform.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    MedicationDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._service.createSampleId(1, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    MedicationDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.Mform.patchValue({ "savedFormID": this.Mform.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe(function (res) {
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
                this._service.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
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
    MedicationDetailsComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MedicationDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], MedicationDetailsComponent.prototype, "disableInput", void 0);
    MedicationDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-medication-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medication-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]])
    ], MedicationDetailsComponent);
    return MedicationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: MY_FORMATS, ParticipantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantDetailsComponent", function() { return ParticipantDetailsComponent; });
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
var ParticipantDetailsComponent = /** @class */ (function () {
    function ParticipantDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
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
    ParticipantDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire1(this.formId).subscribe(function (res) {
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
    ParticipantDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "profilePicture": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DateAsses": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "collected_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Collected_point": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Firstname": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Middlename": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Familyname": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dob": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "country": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "sex_mat": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "marriage_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Numberofwives": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Numberofchildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Healthcardnumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "healthcentre": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Placeofbirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Suburb": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "home": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "work": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "mobile": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.filteredNationalities = this.form.controls["country"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlaces = this.form.controls["Placeofbirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    ParticipantDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(1, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ParticipantDetailsComponent.prototype.prepareForm = function () {
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
    //   this.splashService.splashScreen({
    //     isLoading : true,
    //     message : "SAVING"
    //   })
    //   this._service.createSampleId(1,this.form.value["Sample"]).subscribe((res)=> {
    //   // this._service.createSampleId(1, this.form.value["Sample"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    //     if (!this.formId) {
    //       this.saveFormId = res;
    //       this._interactionService.sendRefId(parseInt(this.saveFormId));
    //     }
    //     this.isSampleSubmit = true;
    //     this.splashService.splashScreen({
    //       isLoading : false,
    //       message : ""
    //     })
    //     this.onSubmit();
    //   });
    // }
    ParticipantDetailsComponent.prototype.updatedSingleAttributes = function (mode) {
        var _this = this;
        var data = {
            "FormAttributeID": 307,
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
    //           message : "CREATING"
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
    ParticipantDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(1, this.form.value["Sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    ParticipantDetailsComponent.prototype.onSubmit = function () {
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
    ParticipantDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ParticipantDetailsComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.form.value["savedFormID"]).subscribe(function (res) {
            _this.form.patchValue({ "profilePicture": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    ParticipantDetailsComponent.prototype.onSelectFile = function (event) {
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
    ParticipantDetailsComponent.ctorParameters = function () { return [
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
    ], ParticipantDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ParticipantDetailsComponent.prototype, "disableInput", void 0);
    ParticipantDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-participant-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./participant-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.html")).default,
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
    ], ParticipantDetailsComponent);
    return ParticipantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: MetabolicDisorderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetabolicDisorderEditComponent", function() { return MetabolicDisorderEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/participant-details/participant-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/biomechanics-details/biomechanics-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.ts");
/* harmony import */ var _subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/family-history-details/family-history-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.ts");
/* harmony import */ var _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/medication-details/medication-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.ts");

// Angular












var MetabolicDisorderEditComponent = /** @class */ (function () {
    function MetabolicDisorderEditComponent(activatedRoute, router, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
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
    MetabolicDisorderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Metabolic Disorder');
    };
    MetabolicDisorderEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    MetabolicDisorderEditComponent.prototype.reset = function () {
    };
    MetabolicDisorderEditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appBiochemical.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appLifestyle.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appMedication.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appBiomechanics.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appDocUpload.onSubmit();
        }
    };
    MetabolicDisorderEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_4__["ParticipantDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_5__["BiochemicalComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiomechanics'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_6__["BiomechanicsDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appBiomechanics", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__["ClinicalDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_7__["FamilyHistoryDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__["FamilyPedigreeComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_10__["LifestyleDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_11__["MedicationDetailsComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appMedication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__["DocUploadComponent"])
    ], MetabolicDisorderEditComponent.prototype, "appDocUpload", void 0);
    MetabolicDisorderEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-metabolic-disorder-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./metabolic-disorder-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], MetabolicDisorderEditComponent);
    return MetabolicDisorderEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: MetabolicDisorderPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetabolicDisorderPrintComponent", function() { return MetabolicDisorderPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/participant-details/participant-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.ts");
/* harmony import */ var _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/biomechanics-details/biomechanics-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.ts");
/* harmony import */ var _subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/family-history-details/family-history-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.ts");
/* harmony import */ var _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/medication-details/medication-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.ts");

// Angular


// Layout










var MetabolicDisorderPrintComponent = /** @class */ (function () {
    function MetabolicDisorderPrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    MetabolicDisorderPrintComponent.prototype.ngOnInit = function () {
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
    MetabolicDisorderPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init form
     */
    MetabolicDisorderPrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle(' Metabolic Disorder');
        this.subheaderService.showPrintButton(true);
    };
    MetabolicDisorderPrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appBiochemical.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appLifestyle.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appMedication.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appBiomechanics.onSubmit();
        }
    };
    MetabolicDisorderPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_5__["ParticipantDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_6__["BiochemicalComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiomechanics'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_7__["BiomechanicsDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appBiomechanics", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_10__["ClinicalDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_8__["FamilyHistoryDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_9__["FamilyPedigreeComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_11__["LifestyleDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedication'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_12__["MedicationDetailsComponent"])
    ], MetabolicDisorderPrintComponent.prototype, "appMedication", void 0);
    MetabolicDisorderPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-metabolic-disorder-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./metabolic-disorder-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], MetabolicDisorderPrintComponent);
    return MetabolicDisorderPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: MetabolicDisorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetabolicDisorderModule", function() { return MetabolicDisorderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_metabolic_disorder_metabolic_disorder_metabolic_disorder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/metabolic-disorder/metabolic-disorder/metabolic-disorder.component */ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.ts");
/* harmony import */ var _components_metabolic_disorder_metabolic_disorder_edit_metabolic_disorder_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component */ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-edit/metabolic-disorder-edit.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/participant-details/participant-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/participant-details/participant-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biomechanics-details/biomechanics-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/family-history-details/family-history-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-history-details/family-history-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/family-pedigree/family-pedigree.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/family-pedigree/family-pedigree.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/lifestyle-details/lifestyle-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/medication-details/medication-details.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/medication-details/medication-details.component.ts");
/* harmony import */ var _components_metabolic_disorder_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/biochemical/biochemical.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/biochemical/biochemical.component.ts");
/* harmony import */ var _components_metabolic_disorder_metabolic_disorder_print_metabolic_disorder_print_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component */ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder-print/metabolic-disorder-print.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_metabolic_disorder_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/metabolic-disorder/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/metabolic-disorder/_subs/doc-upload/doc-upload.component.ts");







// Components













var routes = [
    {
        path: '',
        component: _components_metabolic_disorder_metabolic_disorder_metabolic_disorder_component__WEBPACK_IMPORTED_MODULE_7__["MetabolicDisorderComponent"],
    },
    {
        path: 'add',
        component: _components_metabolic_disorder_metabolic_disorder_edit_metabolic_disorder_edit_component__WEBPACK_IMPORTED_MODULE_8__["MetabolicDisorderEditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_metabolic_disorder_metabolic_disorder_edit_metabolic_disorder_edit_component__WEBPACK_IMPORTED_MODULE_8__["MetabolicDisorderEditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_metabolic_disorder_metabolic_disorder_print_metabolic_disorder_print_component__WEBPACK_IMPORTED_MODULE_17__["MetabolicDisorderPrintComponent"],
    }
];
var MetabolicDisorderModule = /** @class */ (function () {
    function MetabolicDisorderModule() {
    }
    MetabolicDisorderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // Metabolic Disorder
                _components_metabolic_disorder_metabolic_disorder_metabolic_disorder_component__WEBPACK_IMPORTED_MODULE_7__["MetabolicDisorderComponent"],
                _components_metabolic_disorder_metabolic_disorder_edit_metabolic_disorder_edit_component__WEBPACK_IMPORTED_MODULE_8__["MetabolicDisorderEditComponent"],
                _components_metabolic_disorder_metabolic_disorder_print_metabolic_disorder_print_component__WEBPACK_IMPORTED_MODULE_17__["MetabolicDisorderPrintComponent"],
                _components_metabolic_disorder_subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantDetailsComponent"],
                _components_metabolic_disorder_subs_biochemical_biochemical_component__WEBPACK_IMPORTED_MODULE_16__["BiochemicalComponent"],
                _components_metabolic_disorder_subs_biomechanics_details_biomechanics_details_component__WEBPACK_IMPORTED_MODULE_10__["BiomechanicsDetailsComponent"],
                _components_metabolic_disorder_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_11__["ClinicalDetailsComponent"],
                _components_metabolic_disorder_subs_family_history_details_family_history_details_component__WEBPACK_IMPORTED_MODULE_12__["FamilyHistoryDetailsComponent"],
                _components_metabolic_disorder_subs_family_pedigree_family_pedigree_component__WEBPACK_IMPORTED_MODULE_13__["FamilyPedigreeComponent"],
                _components_metabolic_disorder_subs_lifestyle_details_lifestyle_details_component__WEBPACK_IMPORTED_MODULE_14__["LifestyleDetailsComponent"],
                _components_metabolic_disorder_subs_medication_details_medication_details_component__WEBPACK_IMPORTED_MODULE_15__["MedicationDetailsComponent"],
                _components_metabolic_disorder_subs_participant_details_participant_details_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantDetailsComponent"],
                _components_metabolic_disorder_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__["DocUploadComponent"]
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
    ], MetabolicDisorderModule);
    return MetabolicDisorderModule;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MetabolicDisorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetabolicDisorderComponent", function() { return MetabolicDisorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var MetabolicDisorderComponent = /** @class */ (function () {
    function MetabolicDisorderComponent(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, cdr, splashService) {
        this.activatedRoute = activatedRoute;
        this._vService = _vService;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.splashService = splashService;
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
            templateId: 1,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    MetabolicDisorderComponent.prototype.fetchList = function () {
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
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.cdr.detectChanges();
            //this.searchInput.nativeElement.focus();
        });
    };
    MetabolicDisorderComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(1, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    MetabolicDisorderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    MetabolicDisorderComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Metabolic Disorder');
        this.subheaderService.showPrintButton(false);
    };
    MetabolicDisorderComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    MetabolicDisorderComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/metabolic-disorder/edit', id], { relativeTo: this.activatedRoute });
    };
    MetabolicDisorderComponent.prototype.openDialog = function (id) {
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
    MetabolicDisorderComponent.prototype.deleteForm = function (id) {
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
    MetabolicDisorderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MetabolicDisorderComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MetabolicDisorderComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MetabolicDisorderComponent.prototype, "searchInput", void 0);
    MetabolicDisorderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-metabolic-disorder',
            template: __importDefault(__webpack_require__(/*! raw-loader!./metabolic-disorder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/metabolic-disorder/metabolic-disorder/metabolic-disorder.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"]])
    ], MetabolicDisorderComponent);
    return MetabolicDisorderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-metabolic-disorder-metabolic-disorder-module.js.map