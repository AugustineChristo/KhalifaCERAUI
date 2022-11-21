(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-osteoporosis-osteoporosis-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div >\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-3\"><label>Date of recent test</label></div>\n                <div class=\"col-md-3\"><label>Result of recent test</label></div>\n                <div class=\"col-md-3\"><label>Is the result normal?</label></div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>a) Fasting glucose level (mg/dl)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p1\"\n                               autocomplete=\"off\"\n                               (click)=\"p1.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_FastingGlucoseLevel_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p1\"></mat-datepicker-toggle>\n                        <mat-datepicker #p1></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_FastingGlucoseLevel_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_FastingGlucoseLevel_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>b) Total cholesterol (mg/dl)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p2\"\n                               autocomplete=\"off\"\n                               (click)=\"p2.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_TotalCholesterol_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p2\"></mat-datepicker-toggle>\n                        <mat-datepicker #p2></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_TotalCholesterol_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_TotalCholesterol_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>c) Triglyceride (mg/dl)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p3\"\n                               autocomplete=\"off\"\n                               (click)=\"p3.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Triglyceride_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p3\"></mat-datepicker-toggle>\n                        <mat-datepicker #p3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Triglyceride_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Triglyceride_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>d) HDL (mg/dl)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p4\"\n                               autocomplete=\"off\"\n                               (click)=\"p4.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_HDL_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p4\"></mat-datepicker-toggle>\n                        <mat-datepicker #p4></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_HDL_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_HDL_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>e) LDL (mg/dl)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p5\"\n                               autocomplete=\"off\"\n                               (click)=\"p5.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_LDL_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p5\"></mat-datepicker-toggle>\n                        <mat-datepicker #p5></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_LDL_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_LDL_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>f) Creatinine (mg/dl)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p7\"\n                               autocomplete=\"off\"\n                               (click)=\"p7.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Creatinine_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p7\"></mat-datepicker-toggle>\n                        <mat-datepicker #p7></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Creatinine_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Creatinine_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>g) Ca (mg/dl)\t)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p8\"\n                               autocomplete=\"off\"\n                               (click)=\"p8.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Ca_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p8\"></mat-datepicker-toggle>\n                        <mat-datepicker #p8></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Ca_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Ca_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>h) Vitamin D level (ng/ml)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p9\"\n                               autocomplete=\"off\"\n                               (click)=\"p9.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_VitaminDLevel_Test_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p9\"></mat-datepicker-toggle>\n                        <mat-datepicker #p9></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_VitaminDLevel_Result\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_VitaminDLevel_IsNormalResult\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n                <div class=\"form-group  col-md-12 row\">\n                <h6>Physical Measurements</h6>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body weight without shoes (kg)\"   formControlName=\"CLIN_BodyWeight_KG\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"WHR (WC/HC)\"   formControlName=\"CLIN_WHR\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Height without shoes (m)\"   formControlName=\"CLIN_Height_CM\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body Fat mass (Kg)\"   formControlName=\"CLIN_BodyFatMass_Kg\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body mass index(kg/m2)\"   formControlName=\"CLIN_BMI_KGM2\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Body Fat percentage (%)\"   formControlName=\"CLIN_BMIFatPercent\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Waist circumference (cm)\"   formControlName=\"CLIN_WaistCircumference_CM\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Systolic Blood Pressure (mmHg)\"   formControlName=\"CLIN_BloodPressure_SYS_mmHg\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Hip circumference (cm)\"   formControlName=\"CLIN_Hipcircumference_CM\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Diastolic Blood Pressure (mmHg)\"   formControlName=\"CLIN_BloodPressure_DIA_mmHg\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Vertical Trunk Circumference (cm)\"   formControlName=\"CLIN_VerticalTrunkCircumference_CM\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n\n            <div class=\"form-group row col-md-12 \">\n                <h6>Medical Conditions </h6>\n            </div>\n\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Do you have any Medical Conditions?</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\" [hidden]=\"form.get('CLIN_MC').value != 'yes'\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, please specify\"  autocomplete=\"off\"   formControlName=\"CLIN_MC_YesRemarks\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Type 2 Diabetes Mellitus</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Type2Diabetes\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Hypertension</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Hypertension\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Dyslipidemia</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Dyslipidemia\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Respiratory Disease: (Sleep apnoea, Asthma, Emphysema)</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Respiratory\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Gastrointestinal System: (Gastroesophageal reflux, Hepatobiliary disease)</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Gastrointestinal\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                        </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Other</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Others\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\" [hidden]=\"form.get('CLIN_MC').value != 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\"  autocomplete=\"off\"   formControlName=\"CLIN_MC_Others_Remarks\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label>Any Previous or current Fractures:</label>\n                </div>\n                <div class=\"form-group  col-md-5 \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input matInput style=\"display: none;\" />\n                        <mat-radio-group formControlName=\"CLIN_MC_Fractures\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n            </div>\n\n            <div [hidden]=\"form.get('CLIN_MC_Fractures').value != 'yes' && form.get('CLIN_MC_Fractures').value != 'notsure'\"    class=\"col-md-12 row\">\n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Type of Fracture\"  autocomplete=\"off\"   formControlName=\"CLIN_MC_FracturesType\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\" >\n                <mat-form-field class=\"mat-form-field-fluid \">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                           autocomplete=\"off\"\n                           (click)=\"doaPicker.open()\"\n                           [max]=\"maxDate\"\n                           placeholder=\"Choose a Date of Assessment\" (click)=\"doaPicker.open()\" formControlName=\"CLIN_MC_FracturesDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                    </div>\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"DEXA readings\"  autocomplete=\"off\"   formControlName=\"CLIN_MC_DEXAReadings\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 \">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*Osteoporosis in the family:\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"FAMH_Osteoporosis\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">No Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*Osteoporosis complication in the family:\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"FAMH_Osteoporosis_complication\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n                <div [hidden]=\"form.get('FAMH_Osteoporosis_complication').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"FAMH_Osteoporosis_complication_Remarks\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*Obesity in the family\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"FAMH_Obesity\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*Bone fractures in the family\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"FAMH_BoneFractures\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*CVD in the family\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"FAMH_CVD\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>*Other\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput formControlName=\"FAMH_Other\" placeholder=\"Others\"/>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Are you currently on any medication?</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDI_Any_Medication\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n                <div [hidden]=\"form.get('MEDI_Any_Medication').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDI_Any_Medication_Remarks\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Do you have allergies?</label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDI_Any_Allergies\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n                <div [hidden]=\"form.get('MEDI_Any_Allergies').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDI_Any_Allergies_Remarks\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Do you have intolerance?\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDI_Intolerance\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n                <div [hidden]=\"form.get('MEDI_Intolerance').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDI_Intolerance_Remarks\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n\n\n            </div>\n\n            <div class=\"col-md-12 form-group row\">\n                <h6>*Supplements:\n                </h6>\n            </div>\n\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Do you take Multivitamins\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDIS_Multivitamins\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Do these multivitamins contain Vitamin D?\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDIS_Multivitamins_VitaminD\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Are you taking any Calcium Supplements prescribed?\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDIS_CalciumSupplements\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div [hidden]=\"form.get('MEDIS_CalciumSupplements').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDIS_CalciumSupplements_Dose\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Are you taking any Vitamin D supplements?\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDIS_VitaminD\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div [hidden]=\"form.get('MEDIS_VitaminD').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDIS_VitaminD_Dose\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 \">\n                    <label>Are you taking any Hormone Replacement Therapy?\n                    </label>\n                </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"MEDIS_HormoneReplacementTherapy\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div [hidden]=\"form.get('MEDIS_HormoneReplacementTherapy').value != 'yes'\"\n                     class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If Yes, please specify\"   formControlName=\"MEDIS_HormoneReplacementTherapy_Remarks\" autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 \">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>1. Have either of your parents been diagnosed with osteoporosis or broken a bone after a minor fall (a fall from standing height or less)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q1_Parent_osteoporosis\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>2. Did either of your parents have a stooped back (dowager’s hump)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q2_Parent_StoopedBack\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>3. Are you 40 years old or older?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q3_Parent_40YearsOlder\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>4. Have you ever broken a bone after a minor fall, as an adult?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q4_BrokenBone\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>5. Do you fall frequently (more than once in the last year) or do you have a fear of falling because you are frail?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q5_FearFalling\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>6. After the age of 40, have you lost more than 3 cm in height (just over 1 inch)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q6_After40_3cmHeight\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>7. Are you underweight (is your Body Mass Index less than 19 kg/m2)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q7_Underweight\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>8. Have you ever taken corticosteroid tablets (cortisone, prednisone, etc.) for more than 3 consecutive months (corticosteroids are often prescribed for conditions like asthma, rheumatoid arthritis, and some inflammatory diseases)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q8_CorticosteroidTablets\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>9. Have you ever been diagnosed with rheumatoid arthritis?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q9_RheumatoidArthritis\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>10. Have you been diagnosed with an over-active thyroid, overactive parathyroid glands, type 1 diabetes or a nutritional/ gastrointestinal disorder such as Crohn’s or celiac disease?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q10_OveractiveThyroid\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>11. For women over 45: Did your menopause occur before the age of 45?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q11_Menopause\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>12. Have your periods ever stopped for 12 consecutive months or more (other than because of pregnancy, menopause or hysterectomy)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q12_PeriodsEver\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>13. Were your ovaries removed before age 50, without you taking Hormone Replacement Therapy?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q13_HormoneReplacementTherapy\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>14. Do you currently, or have you ever, smoked cigarettes?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q14_SmokedCigarettes\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>15. Is your daily level of physical activity less than 30 minutes per day (housework, gardening, walking, running etc.)?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q15_PhysicalActivity\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>16. Do you avoid, or are you allergic to milk or dairy products, without taking any calcium supplements?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q16_Allergic_Milk\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3 form-group \">\n                    <label>17. Do you spend less than 10 minutes per day outdoors (with part of your body exposed to sunlight), without taking vitamin D supplements?\n                    </label>\n                </div>\n                <div class=\"col-md-7 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid  mat-n-top-10\">\n                        <input matInput style=\"display: none\" />\n                        <mat-radio-group formControlName=\"OMRT_Q17_OutdoorsSpend\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3 form-group\">\n                    <label class=\"hoverable\" for=\"fileInput\">\n                        <img class=\"img\" [src]=\"url ? url : form.get('PERS_Gender').value == 'female' ?   '/assets//media/img_avatar-female.png' :  '/assets//media/img_avatar.png'\">\n                        <div class=\"hover-text\">\n                            Choose file\n                            <!--<h4 class=\"success-message\" *ngIf=\"url\"> Uploaded Successfully </h4>-->\n                        </div>\n                        <div class=\"background\"></div>\n                    </label>\n                    <br/>\n                    <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"SampleID\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                        \n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Choose a Date of Assessment\" (click)=\"doaPicker.open()\" formControlName=\"DateofAssessment\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n           \n                    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                        <h6>Platform</h6>\n                    </div>\n                \n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Panel</label>\n                            </div>\n                            <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Microarray</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"EXOME\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WES</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WES\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n     \n                    <div class=\"col-md-2 form-group \">\n                        <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WGS</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WGS\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n               \n                    <div class=\"col-md-4 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <div class=\"kt-section\"><br><br>\n                                <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                            </div>\n                            </mat-form-field>\n                    </div>\n                \n    \n      \n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"PERS_Firstname\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"PERS_MiddleName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Name\" autocomplete=\"off\" formControlName=\"PERS_FamilyName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date of Birth\" formControlName=\"PERS_DateofBirth\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place of Birth\" formControlName=\"PERS_PlaceofBirth\" [matAutocomplete]=\"manuf\" />\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let list of filteredPlace | async\" [value]=\"list\">\n                                {{ list }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"PERS_Nationality\" [matAutocomplete]=\"manuf1\">\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1\">\n                    <label align=\"start\">\n                        Ethnicity\n                    </label>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                    <mat-radio-group formControlName=\"PERS_Ethnicity\">\n                        <mat-radio-button  value=\"arab\">Arab</mat-radio-button>\n                        <mat-radio-button  value=\"ajam\">Ajam</mat-radio-button>\n                        <mat-radio-button  value=\"bloush\">Bloush</mat-radio-button>\n                        <mat-radio-button  value=\"mixed\">Mixed, specify</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <div [ngClass]=\"  form.get('PERS_Ethnicity').value != 'others' && form.get('PERS_Ethnicity').value != 'mixed' ? 'col-md-4' : 'col-md-4' \" class=\"form-group\">\n                    <ng-container [ngSwitch]=\"form.get('PERS_Ethnicity').value\"   >\n                        <ng-container *ngSwitchCase=\"'mixed'\">\n                            <mat-form-field class=\"mat-form-field-fluid\" >\n                                <input  matInput placeholder=\"If mixed, please specify\" formControlName=\"PERS_Ethnicity_Mixed_Remarks\" />\n                            </mat-form-field>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'others'\">\n                            <mat-form-field class=\"mat-form-field-fluid\" >\n                                <input  matInput placeholder=\"If others, please specify\" formControlName=\"PERS_Ethnicity_Others_Remarks\" />\n                            </mat-form-field>\n                        </ng-container>\n                    </ng-container>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PERS_Gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label >Are your parents related? &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group   formControlName=\"PERS_IsParents_Related\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-8 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"PERS_MaritalStatus\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"PERS_MaritalStatus\"  formControlName=\"PERS_MaritalStatus\">\n                            <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                            <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                            <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                            <mat-radio-button  matInput value=\"widow\">Widow</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"PERS_marriage_con\">Consanguineous Marriage &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"PERS_marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Wives\"\n                               formControlName=\"PERS_Numberofwives\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Children\"\n                               formControlName=\"PERS_NumberofChildren\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Home\" autocomplete=\"off\" formControlName=\"PERS_Home_Number\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Work\"\n                               formControlName=\"PERS_Work_Number\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Mobile number\" formControlName=\"PERS_Mobile_Number\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Address\"\n                               formControlName=\"PERS_Address\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"City\"\n                               formControlName=\"PERS_City\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Emirates\" autocomplete=\"off\"\n                               formControlName=\"PERS_Emirates\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <kt-portlet-header [title]=\"'Osteoporosis Form'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n        <ng-container ktPortletTools>\n            <a [routerLink]=\"[ formId ? '../../' : '../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n               matTooltip=\"Back to the forms list\">\n                <i class=\"la la-arrow-left\"></i>\n                <span class=\"kt-hidden-mobile\">Back</span>\n            </a>\n            <a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n               mat-raised-button matTooltip=\"Save & Continue\">\n                <i class=\"la la-save\"></i>\n                <span class=\"kt-hidden-mobile\">Save</span>\n            </a>\n\n        </ng-container>\n    </kt-portlet-header>\n\n    <kt-portlet-body>\n        <mat-tab-group [(selectedIndex)]=\"selectedTab\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Details\n                </ng-template>\n                <kt-ob-participant-personal [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-ob-participant-personal>\n            </mat-tab>\n            <mat-tab>\n            <ng-template mat-tab-label>\n                <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                Clinical Details\n            </ng-template>\n            <kt-ob-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-ob-clinical-details>\n        </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Biochemical Details\n                </ng-template>\n                <kt-ob-biochemical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appBiochemical></kt-ob-biochemical-details>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Medications\n                </ng-template>\n                <kt-ob-medications [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedications></kt-ob-medications>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    One Minute Risk Test\n                </ng-template>\n                <kt-ob-one-minute-risk-test [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appOneMinuteRiskTest></kt-ob-one-minute-risk-test>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                   Family History\n                </ng-template>\n                <kt-ob-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyHistory></kt-ob-family-history>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-file\"></i>\n                    Document Upload\n                </ng-template>\n                <kt-doc-upload  #appDocUpload></kt-doc-upload>\n            </mat-tab>\n\n        </mat-tab-group>\n    </kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet id=\"print_form\">\n    <kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n        <div class=\"kt-form kt-margin-b-30\">\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Personal Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ob-participant-personal [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-ob-participant-personal>\n                </kt-portlet-body>\n            </div>\n\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Clinical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ob-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-ob-clinical-details>\n                </kt-portlet-body>\n            </div>\n\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Biochemical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ob-biochemical-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appBiochemical></kt-ob-biochemical-details>\n                </kt-portlet-body>\n            </div>\n\n            <div class=\"\">\n            <kt-portlet-header [title]=\"'Medications'\" [class]=\"'kt-portlet__head--lg'\" >\n            </kt-portlet-header>\n            <kt-portlet-body  class=\"kt-portlet__body\">\n                <kt-ob-medications [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedications></kt-ob-medications>\n            </kt-portlet-body>\n        </div>\n\n\n            <div class=\"\">\n            <kt-portlet-header [title]=\"'One Minute Risk Test'\" [class]=\"'kt-portlet__head--lg'\" >\n            </kt-portlet-header>\n            <kt-portlet-body  class=\"kt-portlet__body\">\n                <kt-ob-one-minute-risk-test [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appOneMinuteRiskTest></kt-ob-one-minute-risk-test>\n            </kt-portlet-body>\n        </div>\n\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Family History'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ob-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyHistory></kt-ob-family-history>\n                </kt-portlet-body>\n            </div>\n\n\n            </div>\n        </kt-portlet-body>\n    </kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<kt-portlet >\n    <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n    <kt-portlet-header [title]=\"'Manage Osteoporosis'\"  [class]=\"'kt-portlet__head--lg'\" >\n        <ng-container ktPortletTools>\n            <button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n        </ng-container>\n    </kt-portlet-header>\n    <kt-portlet-body class=\"col-md-12\">\n        <div class=\"kt-form kt-margin-b-30\">\n            <div class=\"kt-form__filtration\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input autocomplete=\"off\" matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div #MainBody class=\"mat-table__wrapper col-md-12\">\n            <mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n                       [dataSource]=\"dataSource\"\n                       matSort\n                       #sort1=\"matSort\"\n                       matSortActive=\"savedFormID\"\n                       matSortDirection=\"asc\"\n            >\n                <div matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n                </div>\n                <div matColumnDef=\"1\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n                </div>\n                <div matColumnDef=\"2\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n                        <a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n                    </mat-cell>\n                </div>\n                <div matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">\n                        <button routerLink=\"../edit/{{form.SavedFormID}}\"  mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n                            <mat-icon>create</mat-icon>\n                        </button>&nbsp;\n                        <button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n                        <a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n                            <mat-icon>print</mat-icon>\n                        </a>\n                    </mat-cell>\n                </div>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n            </mat-table>\n            <div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n            <div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n        </div>\n\n        <!-- start: BOTTOM -->\n        <div class=\"mat-table__bottom\">\n            <!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n            <!--<mat-spinner [diameter]=\"20\" *ngIf=\"loading$ | async\"></mat-spinner>-->\n            <!-- MATERIAL PAGINATOR | Binded to dasources -->\n            <!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n            <mat-paginator [length]=\"lastQuery.totalRecords\"\n                           [pageSize]=\"10\"\n                           (page)=\" getPaginatorData($event)\"\n                           [showFirstLastButtons]=\"true\"\n                           [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n            </mat-paginator>\n            <!--<mat-paginator  [pageSizeOptions]=\"[10,25,50,100]\" (page)=\"pageEvent = getPaginatorData($event)\" [length]=\"300\" [showFirstLastButtons]=\"true\"></mat-paginator>-->\n        </div>\n        <!-- end: BOTTOM -->\n    </kt-portlet-body>\n    <!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L29zdGVvcG9yb3Npcy9fc3Vicy9kb2MtdXBsb2FkL0M6XFxKYW5lXFxQcm9qZWN0c1xcSmFuZVxcS2hhbGlmYUNFUkEvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZm9ybS1tYW5hZ2VtZW50XFxvc3Rlb3Bvcm9zaXNcXF9zdWJzXFxkb2MtdXBsb2FkXFxkb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9mb3JtLW1hbmFnZW1lbnQvb3N0ZW9wb3Jvc2lzL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvX3N1YnMvZG9jLXVwbG9hZC9kb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lOiAgICAgICAjNDU0Y2FkO1xuJGRhcmstdGV4dDogICAjNWY2OTgyO1xuXG4udXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG5cbiAgICAmLmhvdmVyIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR0aGVtZTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xuXG4gICAgICAjc3RhcnQge1xuICAgICAgICBpLmZhIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3N0YXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAjcmVzcG9uc2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNtZXNzYWdlcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAjZmlsZS1pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMCBhdXRvIC41cmVtIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAjbm90aW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3MsXG4gIC5wcm9ncmVzcyB7XG4gICAgLy8gYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCR0aGVtZSw4JSkgMCUsICR0aGVtZSA1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBkaXYge1xuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLjVyZW0gLjVyZW0gMXJlbSAuNXJlbTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5maWxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iLCIudXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xufVxuLnVwbG9hZGVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xufVxuLnVwbG9hZGVyIGxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkZXIgbGFiZWwuaG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDU0Y2FkO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggI2VlZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnVwbG9hZGVyICNzdGFydCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3N0YXJ0IGkuZmEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnVwbG9hZGVyICNyZXNwb25zZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlICNtZXNzYWdlcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwIGF1dG8gMC41cmVtIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBwcm9ncmVzcyxcbi51cGxvYWRlciAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udXBsb2FkZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgZGl2IHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGNvbG9yOiAjNWY2OTgyO1xufVxuLnVwbG9hZGVyIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogIzQ1NGNhZDtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMyZDY7XG59XG5cbi5maWxlLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.ts ***!
  \***************************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: MY_FORMATS, ObBiochemicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObBiochemicalDetailsComponent", function() { return ObBiochemicalDetailsComponent; });
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
var ObBiochemicalDetailsComponent = /** @class */ (function () {
    function ObBiochemicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Biochemical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    ObBiochemicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObBiochemicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BIOC_FastingGlucoseLevel_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucoseLevel_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucoseLevel_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Ca_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Ca_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Ca_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_Test_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_Result": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_IsNormalResult": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObBiochemicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObBiochemicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObBiochemicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObBiochemicalDetailsComponent.prototype.onSubmit = function () {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObBiochemicalDetailsComponent.ctorParameters = function () { return [
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
    ], ObBiochemicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObBiochemicalDetailsComponent.prototype, "disableInput", void 0);
    ObBiochemicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-biochemical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-biochemical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.html")).default,
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
    ], ObBiochemicalDetailsComponent);
    return ObBiochemicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvX3N1YnMvb2ItY2xpbmljYWwtZGV0YWlscy9vYi1jbGluaWNhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MY_FORMATS, ObClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObClinicalDetailsComponent", function() { return ObClinicalDetailsComponent; });
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
var ObClinicalDetailsComponent = /** @class */ (function () {
    function ObClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    ObClinicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObClinicalDetailsComponent.prototype.createForm = function () {
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
            "CLIN_MC_YesRemarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Type2Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Respiratory": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Gastrointestinal": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_Fractures": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_FracturesType": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_FracturesDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_MC_DEXAReadings": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_SYS_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_DIA_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObClinicalDetailsComponent.prototype.onSubmit = function () {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObClinicalDetailsComponent.ctorParameters = function () { return [
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
    ], ObClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObClinicalDetailsComponent.prototype, "disableInput", void 0);
    ObClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.html")).default,
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
            styles: [__importDefault(__webpack_require__(/*! ./ob-clinical-details.component.scss */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObClinicalDetailsComponent);
    return ObClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ObFamilyHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObFamilyHistoryComponent", function() { return ObFamilyHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var ObFamilyHistoryComponent = /** @class */ (function () {
    function ObFamilyHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    ObFamilyHistoryComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObFamilyHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FAMH_Osteoporosis": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Osteoporosis_complication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Osteoporosis_complication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_BoneFractures": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_CVD": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMH_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    ObFamilyHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObFamilyHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObFamilyHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObFamilyHistoryComponent.prototype.onSubmit = function () {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObFamilyHistoryComponent.ctorParameters = function () { return [
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
    ], ObFamilyHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObFamilyHistoryComponent.prototype, "disableInput", void 0);
    ObFamilyHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-family-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], ObFamilyHistoryComponent);
    return ObFamilyHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ObMedicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObMedicationsComponent", function() { return ObMedicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var ObMedicationsComponent = /** @class */ (function () {
    function ObMedicationsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Biochemical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    ObMedicationsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObMedicationsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "MEDI_Any_Medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Medication_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Allergies_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_Multivitamins": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_Multivitamins_VitaminD": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_CalciumSupplements": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_CalciumSupplements_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_VitaminD": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_VitaminD_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_HormoneReplacementTherapy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDIS_HormoneReplacementTherapy_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObMedicationsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObMedicationsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObMedicationsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObMedicationsComponent.prototype.onSubmit = function () {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObMedicationsComponent.ctorParameters = function () { return [
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
    ], ObMedicationsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObMedicationsComponent.prototype, "disableInput", void 0);
    ObMedicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-medications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-medications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], ObMedicationsComponent);
    return ObMedicationsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ObOneMinuteRiskTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObOneMinuteRiskTestComponent", function() { return ObOneMinuteRiskTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var ObOneMinuteRiskTestComponent = /** @class */ (function () {
    function ObOneMinuteRiskTestComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = " Biochemical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    ObOneMinuteRiskTestComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObOneMinuteRiskTestComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "OMRT_Q1_Parent_osteoporosis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q2_Parent_StoopedBack": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q3_Parent_40YearsOlder": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q4_BrokenBone": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q5_FearFalling": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q6_After40_3cmHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q7_Underweight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q8_CorticosteroidTablets": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q9_RheumatoidArthritis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q10_OveractiveThyroid": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q11_Menopause": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q12_PeriodsEver": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q13_HormoneReplacementTherapy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q14_SmokedCigarettes": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q15_PhysicalActivity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q16_Allergic_Milk": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OMRT_Q17_OutdoorsSpend": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    ObOneMinuteRiskTestComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObOneMinuteRiskTestComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    ObOneMinuteRiskTestComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    ObOneMinuteRiskTestComponent.prototype.onSubmit = function () {
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
                this._service.createSample1(data_1, this.formId ? true : false).subscribe(function (res) {
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
    ObOneMinuteRiskTestComponent.ctorParameters = function () { return [
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
    ], ObOneMinuteRiskTestComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObOneMinuteRiskTestComponent.prototype, "disableInput", void 0);
    ObOneMinuteRiskTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-one-minute-risk-test',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-one-minute-risk-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], ObOneMinuteRiskTestComponent);
    return ObOneMinuteRiskTestComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvX3N1YnMvb2ItcGFydGljaXBhbnQtcGVyc29uYWwvb2ItcGFydGljaXBhbnQtcGVyc29uYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: MY_FORMATS, ObParticipantPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObParticipantPersonalComponent", function() { return ObParticipantPersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
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
var ObParticipantPersonalComponent = /** @class */ (function () {
    function ObParticipantPersonalComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
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
    ObParticipantPersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 7).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    ObParticipantPersonalComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "SampleID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectionPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DateofAssessment": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
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
            "PERS_Emirates": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "profilePicture": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["PERS_Nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlace = this.form.controls["PERS_PlaceofBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterPlaceofBirth(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    ObParticipantPersonalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(7, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    ObParticipantPersonalComponent.prototype.prepareForm = function () {
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
    //   this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //   this._service.createSampleId(7, this.form.value["SampleID"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    //     if (!this.formId) {
    //       this.saveFormId = res;
    //       this._interactionService.sendRefId(parseInt(this.saveFormId));
    //     }
    //     this.splashService.splashScreen({isLoading : false, message : "" })
    //     this.isSampleSubmit = true;
    //     this.onSubmit();
    //   });
    // }
    ObParticipantPersonalComponent.prototype.updatedSingleAttributes = function (mode) {
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
    ObParticipantPersonalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(7, this.form.value["SampleID"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    ObParticipantPersonalComponent.prototype.onSubmit = function () {
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
    //       this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
    //       if (this.fileToUpload) {
    //         this.updatedSingleAttributes(true);
    //       }
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
    //               this.splashService.splashScreen({isLoading : false, message : "" })
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
    //       this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
    //       if (this.fileToUpload ) {
    //         this.updatedSingleAttributes(false);
    //       }
    //       if(!this.isFormSubmit) {
    //         this._service.createSample1(data, this.formId ? true : false).subscribe((res) => {
    //           if (res) {
    //             this.isFormSubmit = true;
    //             this.splashService.splashScreen({isLoading : false, message : "" })
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
    ObParticipantPersonalComponent.prototype.filterPlaceofBirth = function (val) {
        return AVAILABLE_PLACE.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ObParticipantPersonalComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    ObParticipantPersonalComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.form.value["savedFormID"]).subscribe(function (res) {
            _this.form.patchValue({ "profilePicture": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    ObParticipantPersonalComponent.prototype.onSelectFile = function (event) {
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
    ObParticipantPersonalComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_4__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ObParticipantPersonalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ObParticipantPersonalComponent.prototype, "disableInput", void 0);
    ObParticipantPersonalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ob-participant-personal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ob-participant-personal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.html")).default,
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
            styles: [__importDefault(__webpack_require__(/*! ./ob-participant-personal.component.scss */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_4__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_3__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], ObParticipantPersonalComponent);
    return ObParticipantPersonalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvb3N0ZW9wb3Jvc2lzLWZvcm0vb3N0ZW9wb3Jvc2lzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OsteoporosisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsteoporosisFormComponent", function() { return OsteoporosisFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/ob-participant-personal/ob-participant-personal.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.ts");
/* harmony import */ var _subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/ob-clinical-details/ob-clinical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.ts");
/* harmony import */ var _subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/ob-medications/ob-medications.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.ts");
/* harmony import */ var _subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.ts");
/* harmony import */ var _subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/ob-family-history/ob-family-history.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.ts");
/* harmony import */ var _subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/ob-biochemical-details/ob-biochemical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.ts");

// Angular










var OsteoporosisFormComponent = /** @class */ (function () {
    function OsteoporosisFormComponent(activatedRoute, router, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    OsteoporosisFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Osteoporosis');
    };
    OsteoporosisFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    OsteoporosisFormComponent.prototype.reset = function () {
    };
    OsteoporosisFormComponent.prototype.onSubmit = function () {
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
            this.appMedications.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appOneMinuteRiskTest.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appDocUpload.onSubmit();
        }
    };
    OsteoporosisFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__["ObParticipantPersonalComponent"])
    ], OsteoporosisFormComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__["ObClinicalDetailsComponent"])
    ], OsteoporosisFormComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_9__["ObBiochemicalDetailsComponent"])
    ], OsteoporosisFormComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedications'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_6__["ObMedicationsComponent"])
    ], OsteoporosisFormComponent.prototype, "appMedications", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appOneMinuteRiskTest'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_7__["ObOneMinuteRiskTestComponent"])
    ], OsteoporosisFormComponent.prototype, "appOneMinuteRiskTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_8__["ObFamilyHistoryComponent"])
    ], OsteoporosisFormComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_10__["DocUploadComponent"])
    ], OsteoporosisFormComponent.prototype, "appDocUpload", void 0);
    OsteoporosisFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-osteoporosis-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./osteoporosis-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./osteoporosis-form.component.scss */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], OsteoporosisFormComponent);
    return OsteoporosisFormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvb3N0ZW9wb3Jvc2lzLXByaW50L29zdGVvcG9yb3Npcy1wcmludC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: OsteoporosisPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsteoporosisPrintComponent", function() { return OsteoporosisPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/ob-participant-personal/ob-participant-personal.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.ts");
/* harmony import */ var _subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/ob-clinical-details/ob-clinical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.ts");
/* harmony import */ var _subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/ob-medications/ob-medications.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.ts");
/* harmony import */ var _subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.ts");
/* harmony import */ var _subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/ob-family-history/ob-family-history.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.ts");
/* harmony import */ var _subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/ob-biochemical-details/ob-biochemical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.ts");










var OsteoporosisPrintComponent = /** @class */ (function () {
    function OsteoporosisPrintComponent(activatedRoute, subheaderService, router) {
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
        this.router = router;
        this.hasFormErrors = false;
        this.isPrint = true;
        this.subscriptions = [];
    }
    OsteoporosisPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Osteoporosis');
        this.subheaderService.showPrintButton(true);
    };
    OsteoporosisPrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    OsteoporosisPrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__["ObParticipantPersonalComponent"])
    ], OsteoporosisPrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_5__["ObClinicalDetailsComponent"])
    ], OsteoporosisPrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appBiochemical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_9__["ObBiochemicalDetailsComponent"])
    ], OsteoporosisPrintComponent.prototype, "appBiochemical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedications'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_6__["ObMedicationsComponent"])
    ], OsteoporosisPrintComponent.prototype, "appMedications", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appOneMinuteRiskTest'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_7__["ObOneMinuteRiskTestComponent"])
    ], OsteoporosisPrintComponent.prototype, "appOneMinuteRiskTest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_8__["ObFamilyHistoryComponent"])
    ], OsteoporosisPrintComponent.prototype, "appFamilyHistory", void 0);
    OsteoporosisPrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-osteoporosis-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./osteoporosis-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./osteoporosis-print.component.scss */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OsteoporosisPrintComponent);
    return OsteoporosisPrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9vc3Rlb3Bvcm9zaXMvb3N0ZW9wb3Jvc2lzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.ts ***!
  \************************************************************************************/
/*! exports provided: OsteoporosisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsteoporosisComponent", function() { return OsteoporosisComponent; });
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






var OsteoporosisComponent = /** @class */ (function () {
    function OsteoporosisComponent(activatedRoute, router, _snackBar, dialog, subheaderService, cdr, splashService, _vService) {
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
            templateId: 7,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    OsteoporosisComponent.prototype.fetchList = function () {
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
        });
    };
    OsteoporosisComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(this.lastQuery.templateId, this.lastQuery.filter).subscribe(function (res) {
            if (res)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On init
     */
    OsteoporosisComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Osteoporosis');
        this.subheaderService.showPrintButton(false);
    };
    OsteoporosisComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    OsteoporosisComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/1000-arab-genome/edit', id], { relativeTo: this.activatedRoute });
    };
    OsteoporosisComponent.prototype.openDialog = function (id) {
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
    OsteoporosisComponent.prototype.deleteForm = function (id) {
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
    OsteoporosisComponent.ctorParameters = function () { return [
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
    ], OsteoporosisComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OsteoporosisComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OsteoporosisComponent.prototype, "searchInput", void 0);
    OsteoporosisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-osteoporosis',
            template: __importDefault(__webpack_require__(/*! raw-loader!./osteoporosis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./osteoporosis.component.scss */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"]])
    ], OsteoporosisComponent);
    return OsteoporosisComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/osteoporosis/osteoporosis.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/form-management/osteoporosis/osteoporosis.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OsteoporosisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsteoporosisModule", function() { return OsteoporosisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_osteoporosis_osteoporosis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/osteoporosis/osteoporosis.component */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis.component.ts");
/* harmony import */ var _components_osteoporosis_osteoporosis_form_osteoporosis_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/osteoporosis/osteoporosis-form/osteoporosis-form.component */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-form/osteoporosis-form.component.ts");
/* harmony import */ var _components_osteoporosis_osteoporosis_print_osteoporosis_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/osteoporosis/osteoporosis-print/osteoporosis-print.component */ "./src/app/views/pages/form-management/osteoporosis/osteoporosis-print/osteoporosis-print.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-participant-personal/ob-participant-personal.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-clinical-details/ob-clinical-details.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-biochemical-details/ob-biochemical-details.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-medications/ob-medications.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-medications/ob-medications.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-one-minute-risk-test/ob-one-minute-risk-test.component.ts");
/* harmony import */ var _components_osteoporosis_subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/osteoporosis/_subs/ob-family-history/ob-family-history.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/ob-family-history/ob-family-history.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_osteoporosis_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/osteoporosis/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/osteoporosis/_subs/doc-upload/doc-upload.component.ts");


















var routes = [
    {
        path: '',
        component: _components_osteoporosis_osteoporosis_component__WEBPACK_IMPORTED_MODULE_7__["OsteoporosisComponent"],
    },
    {
        path: 'add',
        component: _components_osteoporosis_osteoporosis_form_osteoporosis_form_component__WEBPACK_IMPORTED_MODULE_8__["OsteoporosisFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_osteoporosis_osteoporosis_form_osteoporosis_form_component__WEBPACK_IMPORTED_MODULE_8__["OsteoporosisFormComponent"],
    },
    {
        path: 'print/:id',
        component: _components_osteoporosis_osteoporosis_print_osteoporosis_print_component__WEBPACK_IMPORTED_MODULE_9__["OsteoporosisPrintComponent"],
    }
];
var OsteoporosisModule = /** @class */ (function () {
    function OsteoporosisModule() {
    }
    OsteoporosisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                //Osteoporosis
                _components_osteoporosis_osteoporosis_component__WEBPACK_IMPORTED_MODULE_7__["OsteoporosisComponent"],
                _components_osteoporosis_osteoporosis_print_osteoporosis_print_component__WEBPACK_IMPORTED_MODULE_9__["OsteoporosisPrintComponent"],
                _components_osteoporosis_osteoporosis_form_osteoporosis_form_component__WEBPACK_IMPORTED_MODULE_8__["OsteoporosisFormComponent"],
                _components_osteoporosis_subs_ob_participant_personal_ob_participant_personal_component__WEBPACK_IMPORTED_MODULE_10__["ObParticipantPersonalComponent"],
                _components_osteoporosis_subs_ob_clinical_details_ob_clinical_details_component__WEBPACK_IMPORTED_MODULE_11__["ObClinicalDetailsComponent"],
                _components_osteoporosis_subs_ob_biochemical_details_ob_biochemical_details_component__WEBPACK_IMPORTED_MODULE_12__["ObBiochemicalDetailsComponent"],
                _components_osteoporosis_subs_ob_medications_ob_medications_component__WEBPACK_IMPORTED_MODULE_13__["ObMedicationsComponent"],
                _components_osteoporosis_subs_ob_one_minute_risk_test_ob_one_minute_risk_test_component__WEBPACK_IMPORTED_MODULE_14__["ObOneMinuteRiskTestComponent"],
                _components_osteoporosis_subs_ob_family_history_ob_family_history_component__WEBPACK_IMPORTED_MODULE_15__["ObFamilyHistoryComponent"],
                _components_osteoporosis_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__["DocUploadComponent"]
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
    ], OsteoporosisModule);
    return OsteoporosisModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-osteoporosis-osteoporosis-module.js.map