(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-vitamin-d-vitamin-d-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\">\n    <div class=\"col-md-12\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group row\">\n                <h6>Physical Measurements</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput type=\"number\"  formControlName=\"BodyWeight\" (ngModelChange)=\"calculateBodyMass()\" placeholder=\"Body weight without shoes (kg)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input type=\"number\" formControlName=\"Height\" matInput  (ngModelChange)=\"calculateBodyMass()\" placeholder=\"Height without shoes (m)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"BodyMass\"   placeholder=\"Body mass index (kg/m2)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"Waist\" placeholder=\"Waist circumference (cm)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"BloodPressure\"  placeholder=\"Blood pressure (mmHg)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"BloodPressurePercentage\"  placeholder=\"Body Fat percentage (%)\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <h6>Medial Conditions</h6>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field floatPlaceholder=\"What is your smoking status\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Hypertension\n                            </label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"Hypertension\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field floatPlaceholder=\"Do you eat fast food\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Dyslipidemia\n                            </label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"Dyslipidemia\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field floatPlaceholder=\"Do you drink soft drinks\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Diabetes\n                            </label>\n                        </div>\n                        <input matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"Diabetis\">\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput  formControlName=\"Diabetis_Type\" placeholder=\"Type\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"AgeOf_Diagnosis\"  placeholder=\"Age of diagnosis\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"kt-section\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput formControlName=\"Diseases_Other\"  placeholder=\"Other Diseases\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"kt-section\">\n                <mat-form-field floatPlaceholder=\" Diabetes in the family\"  class=\"mat-form-field-fluid\">\n                    <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Diabetes in the family\n                    </label>\n                    </div>\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"diabetes_family\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Obesity in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Obesity in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"obesity_family\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\" Hypertension in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Hypertension in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"hypertension_family\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n    </div>\n\n\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\" CVD in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         CVD in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"cvd_family\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\" Dyslipidaemia in the family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Dyslipidaemia in the family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"dyslip_family\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\" Cancer in the Family\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Cancer in the Family\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"CancerIn_family\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n    </div>\n\n\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput   formControlName=\"Other_Family\" placeholder=\"Other Diseases in the Family\" />\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"VForm1\" class=\"col-md-12\">\n<div class=\"kt-form__section kt-form__section--first\">\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"kt-section\">\n                <mat-form-field floatPlaceholder=\" Do you exercise or walk\"  class=\"mat-form-field-fluid\">\n                    <div class=\"kt-section\">\n                        <label align=\"start\">\n                             Do you exercise or walk\n\n                        </label>\n                    </div>\n                    <input matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"Walk\">\n                        <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you go to the gym\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you go to the gym\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Gym\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you follow a healthy diet\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you follow a healthy diet\n\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Diet\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n    </div>\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you eat breakfast everyday?\n\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you eat breakfast everyday?\n\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Breakfast\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Are you happy about your life?\n\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Are you happy about your life?\n\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Happy\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"What is your smoking status\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         What is your smoking status\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"smoking_status\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n    </div>\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you eat fast food\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you eat fast food\n\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"FastFood\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you drink soft drinks\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you drink soft drinks\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"SoftDrinks\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Are you satisfied with your body?\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Are you satisfied with your body?\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Satisfied\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n\n    </div>\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you stay up late\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you stay up late\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Late\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <div class=\"kt-section mar-t-10\">\n                    <label align=\"start\">\n                        &nbsp;&nbsp;&nbsp;&nbsp;\n                    </label>\n                </div>\n                <input matInput formControlName=\"Dinner_Time\"  placeholder=\"What time do you eat dinner\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Were you obese or overweight when you were a child\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Were you obese or overweight when you were a child\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"Overweight\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you know what is Vitamin D deficiency is?\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you know what is Vitamin D deficiency is?\n\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group  formControlName=\"VitaminD_Deficiency\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                    <mat-radio-button  value=\"Not_Sure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field floatPlaceholder=\"Do you drink soft drinks\"  class=\"mat-form-field-fluid\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                         Do you take Vitamin D supplement\n                    </label>\n                </div>\n                <input matInput  style=\"display: none\">\n                <mat-radio-group formControlName=\"VitaminD_Supplement\">\n                    <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <div class=\"kt-section mar-t-10\">\n                    <label align=\"start\">\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </label><label align=\"start\">\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </label>\n                </div>\n                <input matInput formControlName=\"VitaminD_Supplement_Dose\"  placeholder=\"if Yes specify Dose\" />\n            </mat-form-field>\n\n        </div>\n    </div>\n\n    <div class=\"form-group  row\">\n        <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <textarea matInput rows=\"7\" placeholder=\"Comments\"\n                          formControlName=\"LifeStyle_Comments\"></textarea>\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" >\n    <form autocomplete=\"off\" [formGroup]=\"VForm1\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\" row\">\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input #firstInput matInput placeholder=\"Sample Id\" formControlName=\"Sample\" />\n                        <!--<mat-error>Sample Id is-->\n                        <!--<strong>required</strong>-->\n                        <!--</mat-error>-->\n                        <!--<mat-hint align=\"start\">-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                     \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\" style=\"width:100%;\">\n                        <input  matInput [matDatepicker]=\"dp3\" formControlName=\"collected_date\"  placeholder=\"Collection Date\" (click)=\"dp3.open()\" (focus)=\"dp3.open()\"  name=\"dp3\">\n                        <mat-datepicker-toggle matSuffix [for]=\"dp3\">\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #dp3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collecion Center\"\n                               formControlName=\"Collected_Center\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                       \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            </div>\n            <div class=\" row\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Student/Staff Name\" formControlName=\"staff_name\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Student/Staff ID\" formControlName=\"staff_id\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input [max]=\"maxDate\" matInput [matDatepicker]=\"dobPicker\"\n                               placeholder=\"Choose a Date of Birth\" (click)=\"dobPicker.open()\"   (focus)=\"dobPicker.open()\"   formControlName=\"birth_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place of Birth\" formControlName=\"birth_place\" [matAutocomplete]=\"manuf1\" />\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let list of filteredPlaces | async\" [value]=\"list\">\n                                {{ list }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4  form-group\">\n                    <!-- <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"nationality\" />\n                        <mat-hint align=\"start\">Please enter\n                            <strong>Nationality</strong>\n                        </mat-hint>\n                    </mat-form-field> -->\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"country\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let list of filteredNationalities | async\" [value]=\"list\">\n                                {{ list }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input ktNumberOnly  matInput placeholder=\"Mobile#1221\" type=\"number\" formControlName=\"Mobile_no\" />\n                        <!--<div *ngIf=\".errors.required\">-->\n                            <!--Name is required.-->\n                        <!--</div>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4  form-group \">\n                    <mat-form-field floatPlaceholder=\"Gender\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Gender\n                            </label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"Gender\" >\n                            <mat-radio-button  value=\"Male\">Male</mat-radio-button>\n                            <mat-radio-button  value=\"Female\">Female</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-5  form-group\">\n                    <mat-form-field floatPlaceholder=\"Marital Status\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Marital Status\n\n                            </label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MaritalStatus\">\n                            <mat-radio-button  value=\"single\">Single</mat-radio-button>\n                            <mat-radio-button  value=\"married\">Married</mat-radio-button>\n                            <mat-radio-button  value=\"divorced\">Divorced</mat-radio-button>\n                            <mat-radio-button  value=\"widow\">Widow</mat-radio-button>\n                        </mat-radio-group>\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3  form-group\">\n                    <mat-form-field floatPlaceholder=\"Consanguineous marriage\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">\n                                Consanguineous marriage\n                            </label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group  formControlName=\"Consanguineous_Marriage\"  >\n                            <mat-radio-button   value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput formControlName=\"NoOfWives\"  placeholder=\"Number of Wives\" />\n                    </mat-form-field>\n\n                </div>\n\n                <div class=\"col-md-4  form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input formControlName=\"NoOfChildren\" matInput  placeholder=\"Number of Children\" />\n                    </mat-form-field>\n\n                </div>\n\n                <div class=\"col-md-12 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                <textarea matInput rows=\"4\" placeholder=\"Address\"\n                          formControlName=\"Address\"></textarea>\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <kt-portlet-header [title]=\"'Vitamin-D Form'\" [class]=\"'kt-portlet__head--lg'\" >\n        <ng-container ktPortletTools>\n            <a [routerLink]=\"[ formId ? '../../' : '../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n               matTooltip=\"Back to the forms list\">\n                <i class=\"la la-arrow-left\"></i>\n                <span class=\"kt-hidden-mobile\">Back</span>\n            </a>\n\n            <button href=\"javascript:;\" class=\"btn  btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\"\n               mat-raised-button matTooltip=\"Save & Continue\">\n                <i class=\"la la-save\"></i>\n                <span class=\"kt-hidden-mobile\">Save</span>\n        </button>\n        </ng-container>\n    </kt-portlet-header>\n\n    <kt-portlet-body >\n        <mat-tab-group [(selectedIndex)]=\"selectedTab\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Details\n                </ng-template>\n                        <kt-vitamin-d-participation-details  [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-vitamin-d-participation-details>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n                    Clinical Details\n                </ng-template>\n                    <kt-vitamin-d-clinical-details [disableInput]=\"isPrint\"    [formData]=\"formId\" #appClinical></kt-vitamin-d-clinical-details>\n            </mat-tab>\n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user-shield\"></i>\n                    Life Style\n                </ng-template>\n                    <kt-vitamin-d-life-styles [disableInput]=\"isPrint\"  [formData]=\"formId\" #appLifeStyle></kt-vitamin-d-life-styles>\n            </mat-tab>\n\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-dna\"></i>\n                    Family History\n                </ng-template>\n                    <kt-vitamin-d-family-history [disableInput]=\"isPrint\"    [formData]=\"formId\" #appFamilyHistory></kt-vitamin-d-family-history>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-file\"></i>\n                    Document Upload\n                </ng-template>\n                    <kt-doc-upload  #appDocUpload></kt-doc-upload>\n            </mat-tab>\n\n        </mat-tab-group>\n    </kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet id=\"print_form\">\n    <!-- PORTLET LOADING | Binded to TABLE Datasource -->\n    <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\n\n    <kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n        <!-- start::FILTERS & GROUP ACTIONS -->\n        <div class=\"kt-form kt-margin-b-30\">\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Participation Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-vitamin-d-participation-details   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appParticipation></kt-vitamin-d-participation-details>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Clinical Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-vitamin-d-clinical-details   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appClinical></kt-vitamin-d-clinical-details>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Life Style Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-vitamin-d-life-styles   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appLifeStyle></kt-vitamin-d-life-styles>\n                </kt-portlet-body>\n            </div>\n            <div class=\"\">\n                <kt-portlet-header [title]=\"'Family History Detail'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-vitamin-d-family-history   [disableInput]=\"isPrint\"   [formData]=\"formId\" #appFamilyHistory></kt-vitamin-d-family-history>\n                </kt-portlet-body>\n            </div>\n            </div>\n    </kt-portlet-body>\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet >\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Vitamin-D'\"  [class]=\"'kt-portlet__head--lg'\" >\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body class=\"col-md-12\">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input autocomplete=\"off\" matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n\t\t\t\t\t   [dataSource]=\"dataSource\"\n\t\t\t\t\t   matSort\n\t\t\t\t\t   #sort1=\"matSort\"\n\t\t\t\t\t   matSortActive=\"savedFormID\"\n\t\t\t\t\t   matSortDirection=\"asc\"\n\t\t\t\t\t   >\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\"  mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\" getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\t\t\t<!--<mat-paginator  [pageSizeOptions]=\"[10,25,50,100]\" (page)=\"pageEvent = getPaginatorData($event)\" [length]=\"300\" [showFirstLastButtons]=\"true\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L3ZpdGFtaW4tZC9fc3Vicy9kb2MtdXBsb2FkL0M6XFxKYW5lXFxQcm9qZWN0c1xcSmFuZVxcS2hhbGlmYUNFUkEvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZm9ybS1tYW5hZ2VtZW50XFx2aXRhbWluLWRcXF9zdWJzXFxkb2MtdXBsb2FkXFxkb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9mb3JtLW1hbmFnZW1lbnQvdml0YW1pbi1kL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC92aXRhbWluLWQvX3N1YnMvZG9jLXVwbG9hZC9kb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lOiAgICAgICAjNDU0Y2FkO1xuJGRhcmstdGV4dDogICAjNWY2OTgyO1xuXG4udXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG5cbiAgICAmLmhvdmVyIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR0aGVtZTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xuXG4gICAgICAjc3RhcnQge1xuICAgICAgICBpLmZhIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI3N0YXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpLmZhIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAjcmVzcG9uc2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNtZXNzYWdlcyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB9XG4gIH1cblxuICAjZmlsZS1pbWFnZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMCBhdXRvIC41cmVtIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAjbm90aW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgcHJvZ3Jlc3MsXG4gIC5wcm9ncmVzcyB7XG4gICAgLy8gYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxuXG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCR0aGVtZSw4JSkgMCUsICR0aGVtZSA1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBkaXYge1xuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XG4gIH1cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLjVyZW0gLjVyZW0gMXJlbSAuNXJlbTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5maWxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iLCIudXBsb2FkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xufVxuLnVwbG9hZGVyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xufVxuLnVwbG9hZGVyIGxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkZXIgbGFiZWwuaG92ZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDU0Y2FkO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggI2VlZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnVwbG9hZGVyICNzdGFydCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3N0YXJ0IGkuZmEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnVwbG9hZGVyICNyZXNwb25zZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlICNtZXNzYWdlcyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwIGF1dG8gMC41cmVtIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjbm90aW1hZ2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBwcm9ncmVzcyxcbi51cGxvYWRlciAucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udXBsb2FkZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkZXIgZGl2IHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGNvbG9yOiAjNWY2OTgyO1xufVxuLnVwbG9hZGVyIC5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogIzQ1NGNhZDtcbiAgYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMyZDY7XG59XG5cbi5maWxlLXJvdyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DocUploadComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocUploadComponent1", function() { return DocUploadComponent1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");








var DocUploadComponent1 = /** @class */ (function () {
    function DocUploadComponent1(service, cdr, interactionService, splashService, _snackBar, activatedRoute) {
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
    DocUploadComponent1.prototype.ngOnInit = function () {
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
    DocUploadComponent1.prototype.onSelectFile = function (e) {
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
    DocUploadComponent1.prototype.uploadDocuments = function () {
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
    DocUploadComponent1.prototype.markUsUploaded = function () {
        for (var i = 0; i < this.myFiles.length; i++) {
            this.myFiles[i].isUpload = true;
        }
        this.cdr.detectChanges();
    };
    DocUploadComponent1.prototype.onSubmit = function () {
        if (this.saveFormId == 0) {
            this.sMsg = "First Create Sample ID, then upload the documents";
            this.error = true;
        }
        else {
            this.uploadDocuments();
        }
    };
    DocUploadComponent1.prototype.deleteDocument = function (file, index) {
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
    DocUploadComponent1.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__["VitamindService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__["ComponentInteractionService"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    DocUploadComponent1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-doc-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_2__["VitamindService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_3__["ComponentInteractionService"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], DocUploadComponent1);
    return DocUploadComponent1;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: VitaminDClinicalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDClinicalDetails", function() { return VitaminDClinicalDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");

/**
 * Created by TCITSS on 1/9/2020.
 */







var VitaminDClinicalDetails = /** @class */ (function () {
    function VitaminDClinicalDetails(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    VitaminDClinicalDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._vService.getQuestionnaire3(this.formId).subscribe(function (res) {
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
    VitaminDClinicalDetails.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BodyWeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Height": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BodyMass": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: false }),
            "Waist": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressure": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodPressurePercentage": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Diabetis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Diabetis_Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AgeOf_Diagnosis": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Diseases_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    VitaminDClinicalDetails.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(4, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    VitaminDClinicalDetails.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    VitaminDClinicalDetails.prototype.calculateBodyMass = function () {
        if (this.VForm1.controls["BodyWeight"].value && this.VForm1.controls["Height"].value) {
            this.VForm1.patchValue({ "BodyMass": (this.VForm1.controls["BodyWeight"].value / (this.VForm1.controls["Height"].value * this.VForm1.controls["Height"].value)).toFixed(2) });
        }
    };
    VitaminDClinicalDetails.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({
            isLoading: true,
            message: "SAVING"
        });
        this._vService.createSampleId(4, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    VitaminDClinicalDetails.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({
                    isLoading: true,
                    message: "UPDATING"
                });
                this._vService.getFormAttributeValues(this.formId || this.VForm1.controls["savedFormID"].value).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
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
    VitaminDClinicalDetails.ctorParameters = function () { return [
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
    ], VitaminDClinicalDetails.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], VitaminDClinicalDetails.prototype, "disableInput", void 0);
    VitaminDClinicalDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-clinical-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], VitaminDClinicalDetails);
    return VitaminDClinicalDetails;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.ts ***!
  \******************************************************************************************************************/
/*! exports provided: VitaminDFamilyHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDFamilyHistory", function() { return VitaminDFamilyHistory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");

/**
 * Created by TCITSS on 1/9/2020.
 */







var VitaminDFamilyHistory = /** @class */ (function () {
    function VitaminDFamilyHistory(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Family History Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    VitaminDFamilyHistory.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({
                isLoading: true,
                message: "LOADING"
            });
            this._vService.getQuestionnaire3(this.formId).subscribe(function (res) {
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
    VitaminDFamilyHistory.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "diabetes_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "obesity_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "hypertension_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "cvd_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "dyslip_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CancerIn_family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Other_Family": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    VitaminDFamilyHistory.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(4, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    VitaminDFamilyHistory.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    VitaminDFamilyHistory.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(4, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(res);
            _this.splashService.splashScreen({
                isLoading: false,
                message: ""
            });
            _this.onSubmit();
        });
    };
    VitaminDFamilyHistory.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId || this.VForm1.controls["savedFormID"].value).subscribe(function (res) {
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
                this._vService.createSample3(data_1, this.formId ? true : false).subscribe(function (res) {
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
    VitaminDFamilyHistory.ctorParameters = function () { return [
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
    ], VitaminDFamilyHistory.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], VitaminDFamilyHistory.prototype, "disableInput", void 0);
    VitaminDFamilyHistory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-family-history.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], VitaminDFamilyHistory);
    return VitaminDFamilyHistory;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.ts ***!
  \************************************************************************************************************/
/*! exports provided: VitaminDLifeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDLifeStyles", function() { return VitaminDLifeStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");

/**
 * Created by TCITSS on 1/9/2020.
 */







var VitaminDLifeStyles = /** @class */ (function () {
    function VitaminDLifeStyles(_vService, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Life Style";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    VitaminDLifeStyles.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.VForm1.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire3(this.formId).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    VitaminDLifeStyles.prototype.createForm = function () {
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "Walk": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Gym": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Diet": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Breakfast": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Happy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "smoking_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FastFood": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SoftDrinks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Satisfied": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Late": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Dinner_Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Overweight": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VitaminD_Deficiency": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VitaminD_Supplement": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VitaminD_Supplement_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LifeStyle_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    VitaminDLifeStyles.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(4, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    VitaminDLifeStyles.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    VitaminDLifeStyles.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(4, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(res);
            _this.onSubmit();
        });
    };
    VitaminDLifeStyles.prototype.onSubmit = function () {
        var _this = this;
        if (!this.VForm1.value["savedFormID"] && !this.saveFormId) {
            this.createSampleId();
        }
        else {
            this.VForm1.patchValue({ "savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId });
            var data_1 = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID", this.formId);
            if (this.formId || this.isFormSubmit) {
                this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
                this._vService.getFormAttributeValues(this.formId || this.VForm1.controls["savedFormID"].value).subscribe(function (res) {
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
    VitaminDLifeStyles.ctorParameters = function () { return [
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
    ], VitaminDLifeStyles.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], VitaminDLifeStyles.prototype, "disableInput", void 0);
    VitaminDLifeStyles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-life-styles',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-life-styles.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], VitaminDLifeStyles);
    return VitaminDLifeStyles;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: MY_FORMATS, VitaminDParticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDParticipationComponent", function() { return VitaminDParticipationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

/**
 * Created by TCITSS on 1/9/2020.
 */











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
var VitaminDParticipationComponent = /** @class */ (function () {
    function VitaminDParticipationComponent(_vService, eformFB, _interactionService, _snackBar, finalFormValues, splashService) {
        this._vService = _vService;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.finalFormValues = finalFormValues;
        this.splashService = splashService;
        this.AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__["Countries"];
        this.title = 'Participation Details';
        this._coutries = _core_utils_countries__WEBPACK_IMPORTED_MODULE_6__["Countries"];
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isSampleSubmit = false;
        this.isFormSubmit = false;
    }
    VitaminDParticipationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) { _this.VForm1.patchValue({ "savedFormID": id }); });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._vService.getQuestionnaire3(this.formId).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
        this.getFormAttributeValues();
    };
    VitaminDParticipationComponent.prototype.createForm = function () {
        var _this = this;
        this.VForm1 = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "Sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "collected_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Collected_Center": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "staff_name": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "staff_id": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "birth_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "birth_place": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "country": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Mobile_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput, validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required] }),
            "Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Consanguineous_Marriage": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NoOfWives": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NoOfChildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.VForm1.controls["country"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlaces = this.VForm1.controls["birth_place"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
    };
    VitaminDParticipationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.VForm1.controls[name]) {
                _this.VForm1.controls[name].patchValue(_this.formData[0][name]);
            }
        });
    };
    VitaminDParticipationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._vService.getFormAttribute(4, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    VitaminDParticipationComponent.prototype.prepareAttibuteForm = function () {
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
    // createSampleId(){
    //     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //     this._vService.createSampleId(4,this.VForm1.value["Sample"],!!this.VForm1.controls["savedFormID"].value,this.VForm1.controls["savedFormID"].value).subscribe((res)=> {
    //         if (!this.formId) {
    //         this.saveFormId = res;
    //         this._interactionService.sendRefId( this.saveFormId);
    //         }
    //         this.splashService.splashScreen({isLoading : false, message : "" })
    //         this.isSampleSubmit = true;
    //        this.onSubmit();
    //     });
    //     }
    //     onSubmit(){
    //         if(!this.isSampleSubmit){
    //           this.createSampleId();
    //         }else {
    //             this.VForm1.patchValue({"savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId})
    //             this.isSampleSubmit = false;
    //             let data = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID",this.formId)
    //             if (this.formId ||  this.isFormSubmit) {
    //                 this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
    //                 this._vService.getFormAttributeValues(this.formId || this.VForm1.controls["savedFormID"].value ).subscribe((res:any) => {
    //                     if(res){
    //                         for(var i=0;i<data.length;i++) {
    //                             for (var j = 0; j < res.length; j++) {
    //                                 if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
    //                                     data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
    //                                 }
    //                             }
    //                         }
    //                         this._vService.createSample3(data, true).subscribe((res)=> {
    //                             if (res) {
    //                                 this.splashService.splashScreen({isLoading : false, message : "" })
    //                                 this._snackBar.open("Data has been updated successfully!", 'Ok', {
    //                                     duration: 5000,
    //                                     verticalPosition: 'bottom',
    //                                     horizontalPosition: 'center'
    //                                 });
    //                             }
    //                         })
    //                     }
    //                 })
    //             } else {
    //                 this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
    //                 this._vService.createSample3(data, false).subscribe((res)=> {
    //                     if (res) {
    //                         this.isFormSubmit = true;
    //                         this.splashService.splashScreen({isLoading : false, message : "" })
    //                         this._snackBar.open("Data has been inserted successfully!", 'Ok', {
    //                             duration: 5000,
    //                             verticalPosition: 'bottom',
    //                             horizontalPosition: 'center'
    //                         });
    //                     }
    //                 })
    //             }
    //         }
    //     }
    VitaminDParticipationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._vService.createSampleId(4, this.VForm1.value["Sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    VitaminDParticipationComponent.prototype.onSubmit = function () {
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
    VitaminDParticipationComponent.prototype.filterNationalities = function (val) {
        return this.AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    VitaminDParticipationComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_8__["PrepareFinalForm"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], VitaminDParticipationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], VitaminDParticipationComponent.prototype, "disableInput", void 0);
    VitaminDParticipationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-participation-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-participation-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.html")).default,
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_8__["PrepareFinalForm"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]])
    ], VitaminDParticipationComponent);
    return VitaminDParticipationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.ts ***!
  \****************************************************************************************/
/*! exports provided: VitaminDFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDFormComponent", function() { return VitaminDFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/vitamin-d-clinical-details/vitamin-d-clinical-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.ts");
/* harmony import */ var _subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/vitamin-d-family-history/vitamin-d-family-history */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.ts");
/* harmony import */ var _subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/vitamin-d-life-styles/vitamin-d-life-styles */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.ts");
/* harmony import */ var _subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/vitamin-d-participation-details/vitamin-d-participation-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.ts");

// Angular



// Layout









var VitaminDFormComponent = /** @class */ (function () {
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
    function VitaminDFormComponent(activatedRoute, router, eformFB, subheaderService, layoutUtilsService, _vService, _interactionService, layoutConfigService) {
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
    VitaminDFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.initForm();
        //  this._interactionService._Refid$.subscribe((id)=>{  this.VForm1.patchValue({"3_id" : id}); })
    };
    VitaminDFormComponent.prototype.ngOnDestroy = function () {
        this._interactionService.sendRefId(undefined);
    };
    /**
     * Init form
     */
    VitaminDFormComponent.prototype.initForm = function () {
        this.subheaderService.setTitle('Vitamin-D');
    };
    VitaminDFormComponent.prototype.reset = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.createForm();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.createForm();
        }
        else if (this.selectedTab == 2) {
            this.appLifeStyle.createForm();
        }
        else if (this.selectedTab == 3) {
            this.appFamilyHistory.createForm();
        }
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    VitaminDFormComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appLifeStyle.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appDocUpload.onSubmit();
        }
    };
    VitaminDFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_7__["ComponentInteractionService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_11__["VitaminDParticipationComponent"])
    ], VitaminDFormComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_8__["VitaminDClinicalDetails"])
    ], VitaminDFormComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifeStyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_10__["VitaminDLifeStyles"])
    ], VitaminDFormComponent.prototype, "appLifeStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_9__["VitaminDFamilyHistory"])
    ], VitaminDFormComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__["DocUploadComponent1"])
    ], VitaminDFormComponent.prototype, "appDocUpload", void 0);
    VitaminDFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-form.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_7__["ComponentInteractionService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"]])
    ], VitaminDFormComponent);
    return VitaminDFormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_crud_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/crud/utils/layout-utils.service */ "./src/app/core/_base/crud/utils/layout-utils.service.ts");
/* harmony import */ var _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/layout/services/subheader.service */ "./src/app/core/_base/layout/services/subheader.service.ts");
/* harmony import */ var _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/vitamin-d-participation-details/vitamin-d-participation-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.ts");
/* harmony import */ var _subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/vitamin-d-clinical-details/vitamin-d-clinical-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.ts");
/* harmony import */ var _subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/vitamin-d-life-styles/vitamin-d-life-styles */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.ts");
/* harmony import */ var _subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/vitamin-d-family-history/vitamin-d-family-history */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.ts");










var PrintComponent = /** @class */ (function () {
    function PrintComponent(activatedRoute, router, layoutUtilsService, subheaderService, cdr, _vService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this._vService = _vService;
        this.isLoading = true;
        this.isPrint = true;
        this.isEdit = true;
    }
    PrintComponent.prototype.ngOnInit = function () {
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
    PrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Vitamin D Form');
        this.subheaderService.showPrintButton(true);
    };
    PrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_crud_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_3__["LayoutUtilsService"] },
        { type: _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_5__["VitamindService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_6__["VitaminDParticipationComponent"])
    ], PrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_7__["VitaminDClinicalDetails"])
    ], PrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifeStyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_8__["VitaminDLifeStyles"])
    ], PrintComponent.prototype, "appLifeStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_9__["VitaminDFamilyHistory"])
    ], PrintComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printButton', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PrintComponent.prototype, "printButton", void 0);
    PrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_crud_utils_layout_utils_service__WEBPACK_IMPORTED_MODULE_3__["LayoutUtilsService"],
            _core_base_layout_services_subheader_service__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_5__["VitamindService"]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.ts ***!
  \******************************************************************************/
/*! exports provided: VitaminDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDComponent", function() { return VitaminDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS


// Services





var VitaminDComponent = /** @class */ (function () {
    function VitaminDComponent(activatedRoute, router, _snackBar, dialog, subheaderService, layoutUtilsService, cdr, splashService, _vService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
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
            templateId: 4,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    VitaminDComponent.prototype.fetchList = function () {
        var _this = this;
        this.dataSource = [];
        this.loading$ = true;
        this.splashService.splashScreen({
            isLoading: true,
            message: "LOADING"
        });
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
        });
    };
    VitaminDComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(4, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On init
     */
    VitaminDComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Vitamin-D');
        this.subheaderService.showPrintButton(false);
    };
    VitaminDComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    VitaminDComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/vitamin-d-form', id], { relativeTo: this.activatedRoute });
    };
    VitaminDComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialog"], {
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
    VitaminDComponent.prototype.deleteForm = function (id) {
        var _this = this;
        if (this.dataSource.length) {
            var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialog"], {
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
    VitaminDComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_9__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], VitaminDComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], VitaminDComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VitaminDComponent.prototype, "searchInput", void 0);
    VitaminDComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-vitamin-d',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vitamin-d.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_9__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"]])
    ], VitaminDComponent);
    return VitaminDComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/vitamin-d/vitamin-d.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/form-management/vitamin-d/vitamin-d.module.ts ***!
  \***************************************************************************/
/*! exports provided: VitaminDModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitaminDModule", function() { return VitaminDModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_vitamin_d_vitamin_d_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/vitamin-d/vitamin-d.component */ "./src/app/views/pages/form-management/vitamin-d/vitamin-d.component.ts");
/* harmony import */ var _components_vitamin_d_vitamin_d_form_vitamin_d_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/vitamin-d/vitamin-d-form/vitamin-d-form */ "./src/app/views/pages/form-management/vitamin-d/vitamin-d-form/vitamin-d-form.ts");
/* harmony import */ var _components_vitamin_d_subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-clinical-details/vitamin-d-clinical-details.ts");
/* harmony import */ var _components_vitamin_d_subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-life-styles/vitamin-d-life-styles.ts");
/* harmony import */ var _components_vitamin_d_subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-family-history/vitamin-d-family-history.ts");
/* harmony import */ var _components_vitamin_d_subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details */ "./src/app/views/pages/form-management/vitamin-d/_subs/vitamin-d-participation-details/vitamin-d-participation-details.ts");
/* harmony import */ var _components_vitamin_d_vitamin_d_print_vitamin_d_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/vitamin-d/vitamin-d-print/vitamin-d-print.component */ "./src/app/views/pages/form-management/vitamin-d/vitamin-d-print/vitamin-d-print.component.ts");
/* harmony import */ var _components_vitamin_d_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/vitamin-d/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/vitamin-d/_subs/doc-upload/doc-upload.component.ts");
















var routes = [
    {
        path: '',
        component: _components_vitamin_d_vitamin_d_component__WEBPACK_IMPORTED_MODULE_8__["VitaminDComponent"],
    },
    {
        path: 'add',
        component: _components_vitamin_d_vitamin_d_form_vitamin_d_form__WEBPACK_IMPORTED_MODULE_9__["VitaminDFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_vitamin_d_vitamin_d_form_vitamin_d_form__WEBPACK_IMPORTED_MODULE_9__["VitaminDFormComponent"],
    },
    {
        path: 'print/:id',
        component: _components_vitamin_d_vitamin_d_print_vitamin_d_print_component__WEBPACK_IMPORTED_MODULE_14__["PrintComponent"],
    }
];
var VitaminDModule = /** @class */ (function () {
    function VitaminDModule() {
    }
    VitaminDModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // Vitamin-D
                _components_vitamin_d_vitamin_d_component__WEBPACK_IMPORTED_MODULE_8__["VitaminDComponent"],
                _components_vitamin_d_vitamin_d_form_vitamin_d_form__WEBPACK_IMPORTED_MODULE_9__["VitaminDFormComponent"],
                _components_vitamin_d_subs_vitamin_d_participation_details_vitamin_d_participation_details__WEBPACK_IMPORTED_MODULE_13__["VitaminDParticipationComponent"],
                _components_vitamin_d_subs_vitamin_d_clinical_details_vitamin_d_clinical_details__WEBPACK_IMPORTED_MODULE_10__["VitaminDClinicalDetails"],
                _components_vitamin_d_subs_vitamin_d_life_styles_vitamin_d_life_styles__WEBPACK_IMPORTED_MODULE_11__["VitaminDLifeStyles"],
                _components_vitamin_d_subs_vitamin_d_family_history_vitamin_d_family_history__WEBPACK_IMPORTED_MODULE_12__["VitaminDFamilyHistory"],
                _components_vitamin_d_vitamin_d_print_vitamin_d_print_component__WEBPACK_IMPORTED_MODULE_14__["PrintComponent"],
                _components_vitamin_d_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_15__["DocUploadComponent1"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            ]
        })
    ], VitaminDModule);
    return VitaminDModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-vitamin-d-vitamin-d-module.js.map