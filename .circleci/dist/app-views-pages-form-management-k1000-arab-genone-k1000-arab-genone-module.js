(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-k1000-arab-genone-k1000-arab-genone-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Have you had an ECG Test before?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"ECXR_AnyECGTestBefore\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('ECXR_AnyECGTestBefore').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, when\" formControlName=\"ECXR_AnyECGTestBefore_Date\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Have you had a chest X-ray before?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"ECXR_AnyXRayBefore\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('ECXR_AnyXRayBefore').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes,when\" formControlName=\"ECXR_AnyXRayBefore_Date\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row form-group\">\n                <h6>To be filled by physician only</h6>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Is the participant’s chest x-ray exam normal?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PHYS_IsXRayNormal_PO\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Is the participant’s ECG test normal?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PHYS_IsECGNormal_PO\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Is the participant considered healthy?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"PHYS_IsHealthy_PO\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Ethnicity of biological mother\n                </label>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input matInput type=\"text\" style=\"display: none\" />\n                <mat-radio-group formControlName=\"FAMI_Ethnicity_BiologicalMother\">\n                    <mat-radio-button  value=\"arab\">Arab</mat-radio-button>\n                    <mat-radio-button  value=\"ajam\">Ajam</mat-radio-button>\n                    <mat-radio-button  value=\"bloush\">Bloush</mat-radio-button>\n                    <mat-radio-button  value=\"mixed\">Mixed, specify</mat-radio-button>\n                    <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n            </div>\n\n            <div [ngClass]=\"  form.get('FAMI_Ethnicity_BiologicalMother').value != 'others' && form.get('FAMI_Ethnicity_BiologicalMother').value != 'mixed' ? 'col-md-3' : ' ' \" class=\"form-group \">\n                <ng-container [ngSwitch]=\"form.get('FAMI_Ethnicity_BiologicalMother').value\"   >\n                    <ng-container *ngSwitchCase=\"'mixed'\">\n                        <mat-form-field class=\"mat-form-field-fluid\" >\n                            <input  matInput placeholder=\"If mixed, please specify\" formControlName=\"FAMI_Ethnicity_BiologicalMother_Mixed_Remarks\" />\n                        </mat-form-field>\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'others'\">\n                        <mat-form-field class=\"mat-form-field-fluid\" >\n                            <input  matInput placeholder=\"If others, please specify\" formControlName=\"FAMI_Ethnicity_BiologicalMother_Others_Remarks\" />\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n            </div>\n</div>\n            <div class=\"col-md-12 row\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Ethnicity of biological father\n                </label>\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\" >\n                    <input matInput type=\"text\" style=\"display: none\" />\n                <mat-radio-group formControlName=\"FAMI_Ethnicity_BiologicalFather\">\n                    <mat-radio-button  value=\"arab\">Arab</mat-radio-button>\n                    <mat-radio-button  value=\"ajam\">Ajam</mat-radio-button>\n                    <mat-radio-button  value=\"bloush\">Bloush</mat-radio-button>\n                    <mat-radio-button  value=\"mixed\">Mixed, specify</mat-radio-button>\n                    <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                </mat-radio-group>\n            </mat-form-field>\n            </div>\n\n            <div [ngClass]=\"  form.get('FAMI_Ethnicity_BiologicalFather').value != 'others' && form.get('FAMI_Ethnicity_BiologicalFather').value != 'mixed' ? 'col-md-3' : ' ' \" class=\"form-group \">\n                <ng-container [ngSwitch]=\"form.get('FAMI_Ethnicity_BiologicalFather').value\"   >\n                    <ng-container *ngSwitchCase=\"'mixed'\">\n                        <mat-form-field class=\"mat-form-field-fluid\" >\n                            <input  matInput placeholder=\"If mixed, please specify\" formControlName=\"FAMI_Ethnicity_BiologicalFather_Mixed_Remarks\" />\n                        </mat-form-field>\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'others'\">\n                        <mat-form-field class=\"mat-form-field-fluid\" >\n                            <input  matInput placeholder=\"If others, please specify\" formControlName=\"FAMI_Ethnicity_BiologicalFather_Others_Remarks\" />\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n            </div>\n</div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Country of birth of biological mother\" formControlName=\"FAMI_BiologicalMother_BirthCountry\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredBioMother | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Country of birth of biological father\" formControlName=\"FAMI_BiologicalFather_BirthCountry\" [matAutocomplete]=\"manuf1\">\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredBioFather | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Are your parents related\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FAMI_IsParents_Related\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FAMI_IsParents_Related').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FAMI_IsParents_Related_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <h6>Did any of your family members suffer from the following\n                </h6>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Asthma\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Asthma\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Asthma').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Asthma_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Blood disorders\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Blooddisorders\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Blooddisorders').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Blooddisorders_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Cancer\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Cancer\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Cancer').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Cancer_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Depression\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Depression\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Depression').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Depression_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Diabetes Type 1\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_DiabetesType1\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_DiabetesType1').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_DiabetesType1_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Hypertension\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Hypertension\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Hypertension').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Hypertension_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Cardiovascular\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Cardiovascular\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Cardiovascular').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Cardiovascular_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Hearing loss\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Hearingloss\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Hearingloss').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Hearingloss_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Obesity\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Obesity\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Obesity').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Obesity_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Diabetes Type 2\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Diabetestype2\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Diabetestype2').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Diabetestype2_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Others\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"FADI_Others\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('FADI_Others').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"FADI_Others_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <label class=\"hoverable\" for=\"fileInput\">\n            <img class=\"img\" [src]=\"url ? url :  '/assets//media/img_avatar.png'\">\n            <div class=\"hover-text\">\n                Family Photo\n            </div>\n            <div class=\"background\"></div>\n        </label>\n        <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section  row kt-form__section--first\">\n            <div class=\"form-group  col-md-12 row\">\n                <h6>Physical Measurements</h6>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"number\" matInput placeholder=\"Body Weight (Kg)\" autocomplete=\"off\"    formControlName=\"CLIN_BodyWeight_KG\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"number\"  matInput placeholder=\"Waist Circumference (cm)\"  autocomplete=\"off\"  formControlName=\"CLIN_WaistCircumference_CM\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Height (cm)\"  autocomplete=\"off\"   formControlName=\"CLIN_Height_CM\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Hip circumference (cm)\" autocomplete=\"off\"      formControlName=\"CLIN_Hipcircumference_CM\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"BMI (kg/m2)\" formControlName=\"CLIN_BMI_KGM2\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Systolic Blood Pressure (mmHg)\" formControlName=\"CLIN_BloodPressure_SYS_mmHg\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n            <div class=\"col-lg-4 form-group\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input type=\"text\" matInput placeholder=\"Diastolic Blood Pressure (mmHg)\" formControlName=\"CLIN_BloodPressure_DIA_mmHg\" autocomplete=\"off\"    />\n                </mat-form-field>\n            </div>\n            <div class=\"form-group  col-md-12 row\">\n                <h6>Biochemical Details (To be filled by physician only)</h6>\n            </div>\n            <div class=\"col-md-12 row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-3\"><label>Date of recent test</label></div>\n            <div class=\"col-md-3\"><label>Result of recent test</label></div>\n            <div class=\"col-md-3\"><label>Is the result normal?</label></div>\n           </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Fasting Blood Glucose (mmol/l)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p1\"\n                               autocomplete=\"off\"\n                               (click)=\"p1.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_FastingGlucose_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p1\"></mat-datepicker-toggle>\n                        <mat-datepicker #p1></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_FastingGlucose_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_FastingGlucose_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Random Glucose Level (mmol/l)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p2\"\n                               autocomplete=\"off\"\n                               (click)=\"p2.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_RandomGlucose_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p2\"></mat-datepicker-toggle>\n                        <mat-datepicker #p2></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_RandomGlucose_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_RandomGlucose_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>HbA1c (%)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p3\"\n                               autocomplete=\"off\"\n                               (click)=\"p3.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_HbA1c_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p3\"></mat-datepicker-toggle>\n                        <mat-datepicker #p3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_HbA1c_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_HbA1c_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Total Cholesterol (mmol/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p4\"\n                               autocomplete=\"off\"\n                               (click)=\"p4.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_TotalCholesterol_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p4\"></mat-datepicker-toggle>\n                        <mat-datepicker #p4></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_TotalCholesterol_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_TotalCholesterol_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Triglyceride (mmol/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p5\"\n                               autocomplete=\"off\"\n                               (click)=\"p5.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Triglyceride_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p5\"></mat-datepicker-toggle>\n                        <mat-datepicker #p5></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Triglyceride_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Triglyceride_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>HDL (mmol/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p7\"\n                               autocomplete=\"off\"\n                               (click)=\"p7.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_HDL_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p7\"></mat-datepicker-toggle>\n                        <mat-datepicker #p7></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_HDL_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_HDL_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>LDL (mmol/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p8\"\n                               autocomplete=\"off\"\n                               (click)=\"p8.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_LDL_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p8\"></mat-datepicker-toggle>\n                        <mat-datepicker #p8></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_LDL_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_LDL_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Calcium (mmol/l)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p9\"\n                               autocomplete=\"off\"\n                               (click)=\"p9.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Calcium_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p9\"></mat-datepicker-toggle>\n                        <mat-datepicker #p9></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Calcium_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Calcium_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Urea (mmol/l)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p10\"\n                               autocomplete=\"off\"\n                               (click)=\"p10.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Urea_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p10\"></mat-datepicker-toggle>\n                        <mat-datepicker #p10></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Urea_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Urea_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Creatinine (µmol/l)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p11\"\n                               autocomplete=\"off\"\n                               (click)=\"p11.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Creatinine_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p11\"></mat-datepicker-toggle>\n                        <mat-datepicker #p11></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Creatinine_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Creatinine_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Total protein (g/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p12\"\n                               autocomplete=\"off\"\n                               (click)=\"p12.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_TotalProtein_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p12\"></mat-datepicker-toggle>\n                        <mat-datepicker #p12></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_TotalProtein_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_TotalProtein_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Albumin (g/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p13\"\n                               autocomplete=\"off\"\n                               (click)=\"p13.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Albumin_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p13\"></mat-datepicker-toggle>\n                        <mat-datepicker #p13></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Albumin_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Albumin_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Vitamin D level (nmol/l)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p14\"\n                               autocomplete=\"off\"\n                               (click)=\"p14.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_VitaminDLevel_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p14\"></mat-datepicker-toggle>\n                        <mat-datepicker #p14></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_VitaminDLevel_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_VitaminDLevel_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Leptin (ng/ml)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p15\"\n                               autocomplete=\"off\"\n                               (click)=\"p15.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Lepatin_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p15\"></mat-datepicker-toggle>\n                        <mat-datepicker #p15></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Lepatin_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Lepatin_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Leptin receptor (ng/ml)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p16\"\n                               autocomplete=\"off\"\n                               (click)=\"p16.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_LepatinReceptor_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p16\"></mat-datepicker-toggle>\n                        <mat-datepicker #p16></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_LepatinReceptor_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_LepatinReceptor_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Alkaline Phosphatase (µkat/L)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p17\"\n                               autocomplete=\"off\"\n                               (click)=\"p17.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Alkaline_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p17\"></mat-datepicker-toggle>\n                        <mat-datepicker #p17></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Alkaline_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Alkaline_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>ALT (µkat/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p18\"\n                               autocomplete=\"off\"\n                               (click)=\"p18.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_ALT_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p18\"></mat-datepicker-toggle>\n                        <mat-datepicker #p18></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_ALT_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_ALT_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Gamma Glutamyl Transferase (µkat/L)</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p19\"\n                               autocomplete=\"off\"\n                               (click)=\"p19.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_GammaGlutamyl_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p19\"></mat-datepicker-toggle>\n                        <mat-datepicker #p19></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_GammaGlutamyl_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_GammaGlutamyl_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Platelet count\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p20\"\n                               autocomplete=\"off\"\n                               (click)=\"p20.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_PlateletCount_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p20\"></mat-datepicker-toggle>\n                        <mat-datepicker #p20></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_PlateletCount_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_PlateletCount_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\"><label>Bilirubin (µmol/l)\t</label></div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"p21\"\n                               autocomplete=\"off\"\n                               (click)=\"p21.open()\"\n                               placeholder=\"Date of recent test\"  formControlName=\"BIOC_Bilirubin_RecentTest_Date_PO\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"p21\"></mat-datepicker-toggle>\n                        <mat-datepicker #p21></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"BIOC_Bilirubin_RecentTest_Result_PO\" placeholder=\"Result of recent test\"  autocomplete=\"off\"   />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group my-auto\">\n                    <mat-radio-group formControlName=\"BIOC_Bilirubin_IsNormalResult_PO\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"notsure\">Not Sure</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row kt-form__section--first\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    How often do you Eat Fast food per week\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"FOOD_EatFastfood_Week\" >\n                        <mat-radio-button  value=\"Never\">Never</mat-radio-button>\n                        <mat-radio-button  value=\"Twice\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"4times\"> 4 times</mat-radio-button>\n                        <mat-radio-button  value=\"Daily\">Daily</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Consume soda pop, per week?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Walk\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"FOOD_Sodapop_Week\" >\n                        <mat-radio-button  value=\"Never\">Never</mat-radio-button>\n                        <mat-radio-button  value=\"Twice\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"4times\"> 4 times</mat-radio-button>\n                        <mat-radio-button  value=\"Daily\">Daily</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Eat fruits/vegetables, per day?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"FOOD_Fruits_Vegetables_Day\" >\n                        <mat-radio-button  value=\"Never\">Never</mat-radio-button>\n                        <mat-radio-button  value=\"Once\">Once</mat-radio-button>\n                        <mat-radio-button  value=\"Twice\">Twice</mat-radio-button>\n                        <mat-radio-button  value=\"Daily\">Daily</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you eat in the middle of the night?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"FOOD_Eat_Midnight\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row kt-form__section--first\">\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    What is your smoking status\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_SmokingStatus\" >\n                        <mat-radio-button  value=\"CurrentSmoke\">Current smoker</mat-radio-button>\n                        <mat-radio-button  value=\"NeverSmoke\">Never smoked</mat-radio-button>\n                        <mat-radio-button  value=\"Ex-Smoker\"> Ex Smoker</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    How often do you exercise?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Walk\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_ExcersizeFrquent\" >\n                        <mat-radio-button  value=\"daily\">Daily</mat-radio-button>\n                        <mat-radio-button  value=\"3TimesPerWeek\">3 times/week</mat-radio-button>\n                        <mat-radio-button  value=\"No\">I do not exercise</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you follow a healthy diet\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"Healthy\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_FollowHealthyDiet\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Are you on a special diet to lose/gain weight?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"LIFE_SpecialDiet_weight_LossGain\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_SpecialDiet_weight_LossGain\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Has your weight changed in the last 5 years?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"LIFE_healthy_Individual\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_healthy_Individual\" >\n                        <mat-radio-button  value=\"Increased\">Increased</mat-radio-button>\n                        <mat-radio-button  value=\"Decreased\">Decreased</mat-radio-button>\n                        <mat-radio-button  value=\"NoChange\">No Change</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n\n            <div class=\"col-md-3\">\n                <label align=\"start\">\n                    Do you consider yourself a healthy individual?\n                </label>\n            </div>\n            <div class=\"col-md-9 form-group \">\n                <mat-form-field floatPlaceholder=\"LIFE_healthy_Individual\"  class=\"mat-form-field-fluid mat-n-top-10\">\n                    <input  matInput  style=\"display: none\">\n                    <mat-radio-group formControlName=\"LIFE_healthy_Individual\" >\n                        <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </mat-form-field>\n            </div>\n\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section row kt-form__section--first\">\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Do you have any allergies?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Any_Allergies\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Any_Allergies').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"If yes, please specify\" formControlName=\"MEDI_Any_Allergies_Remarks\"  autocomplete=\"off\"    />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        What about intolerance?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Intolerance\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Intolerance').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Intolerance_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Do you take any medications?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Any_Medications\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Do you take any vitamins or supplements?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Any_Vitamins_Supplements\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Any_Vitamins_Supplements').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Any_Vitamins_Supplements_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Do you have any diseases?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Any_Diseases\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Type 1 Diabetes\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Type1Diabetes\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Type1Diabetes').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Any_Vitamins_Supplements_Remarks\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Seizures\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Seizures\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Seizures').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Seizures_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Hypertension\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Hypertension\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Hypertension').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Hypertension_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Arthritis/Rheumatism\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Arthritis_Rheumatism\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Arthritis_Rheumatism').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Arthritis_Rheumatism_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Eczema\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Eczema\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Eczema').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Eczema_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Kidney disease\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Kidneydisease\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Kidneydisease').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Eczema_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Liver disease\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Liverdisease\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Liverdisease').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Liverdisease_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Neurological disorder\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Neurologicaldisorder\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Neurologicaldisorder').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Neurologicaldisorder_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Psychological diseasesr\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Psychologicaldiseases\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Psychologicaldiseases').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Psychologicaldiseases_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Thyroid\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Thyroid\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Thyroid').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Thyroid_Age\"  placeholder=\"If yes, at what age\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Others\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Others\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Others').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Others_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"col-md-12 row\">\n                <div class=\"col-md-3\">\n                    <label align=\"start\">\n                        Did you have any surgery?\n                    </label>\n                </div>\n                <div class=\"col-md-5 form-group \">\n                    <mat-form-field   class=\"mat-form-field-fluid mat-n-top-10\">\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"MEDI_Any_Surgery\" >\n                            <mat-radio-button  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  value=\"notsure\"> Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div  [hidden]=\"form.get('MEDI_Any_Surgery').value != 'yes'\"   class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput   formControlName=\"MEDI_Any_Surgery_Remarks\"  placeholder=\"If yes, please specify\"  autocomplete=\"off\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" >\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3 form-group\">\n                    <label class=\"hoverable\" for=\"fileInput\">\n                        <img class=\"img\" [src]=\"url ? url : form.get('PERS_Gender').value == 'female' ?   '/assets//media/img_avatar-female.png' :  '/assets//media/img_avatar.png'\">\n                        <div class=\"hover-text\">\n                            Choose file\n                            <!--<h4 class=\"success-message\" *ngIf=\"url\"> Uploaded Successfully </h4>-->\n                        </div>\n                        <div class=\"background\"></div>\n                    </label>\n                    <br/>\n                    <input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"SampleID\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Depository Id\" autocomplete=\"off\" formControlName=\"Depository_ID\" />\n                        \n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Sample Id</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid input-bottom\">\n                        <input matInput placeholder=\"Collection Point\"\n                               autocomplete=\"off\"\n                               formControlName=\"CollectionPoint\" />\n                    </mat-form-field>\n                </div>\n           \n                    <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                        <h6>Platform</h6>\n                    </div>\n        \n         \n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Panel</label>\n                            </div>\n                            <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">Microarray</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"EXOME\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2  form-group \">\n                        <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WES</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WES\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n     \n                    <div class=\"col-md-2 form-group \">\n                        <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\">\n                                <label align=\"start\">WGS</label>\n                            </div>\n                            <input  matInput  style=\"display: none\">\n                            <mat-radio-group formControlName=\"WGS\" >\n                                <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                                <mat-radio-button  value=\"No\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </mat-form-field>\n                    </div>\n               \n                    <div class=\"col-md-4 form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <div class=\"kt-section\"><br><br>\n                                <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                            </div>\n                            </mat-form-field>\n                    </div>\n                \n                \n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"CollectedBy\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid \">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Choose a Date of Assessment\" (click)=\"doaPicker.open()\" formControlName=\"DateofAssessment\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"PERS_Firstname\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"PERS_MiddleName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Last Name\" autocomplete=\"off\" formControlName=\"PERS_LastName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PERS_Gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Choose a Date of Birth\" formControlName=\"PERS_DateofBirth\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place of Birth\" formControlName=\"PERS_PlaceofBirth\" [matAutocomplete]=\"manuf\" />\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let list of filteredPlace | async\" [value]=\"list\">\n                                {{ list }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"PERS_Nationality\" [matAutocomplete]=\"manuf1\">\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n\n\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1\">\n                    <label align=\"start\">\n                        Ethnicity\n                    </label>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                        <mat-radio-group formControlName=\"PERS_Ethnicity\">\n                            <mat-radio-button  value=\"arab\">Arab</mat-radio-button>\n                            <mat-radio-button  value=\"ajam\">Ajam</mat-radio-button>\n                            <mat-radio-button  value=\"bloush\">Bloush</mat-radio-button>\n                            <mat-radio-button  value=\"mixed\">Mixed, specify</mat-radio-button>\n                            <mat-radio-button  value=\"others\">Others</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n                <div [ngClass]=\"  form.get('PERS_Ethnicity').value != 'others' && form.get('PERS_Ethnicity').value != 'mixed' ? 'col-md-4' : 'col-md-4' \" class=\"form-group\">\n                    <ng-container [ngSwitch]=\"form.get('PERS_Ethnicity').value\"   >\n                        <ng-container *ngSwitchCase=\"'mixed'\">\n                            <mat-form-field class=\"mat-form-field-fluid\" >\n                                <input  matInput placeholder=\"If mixed, please specify\" formControlName=\"PERS_Ethnicity_Mixed_Remarks\" />\n                            </mat-form-field>\n                        </ng-container>\n                        <ng-container *ngSwitchCase=\"'others'\">\n                            <mat-form-field class=\"mat-form-field-fluid\" >\n                                <input  matInput placeholder=\"If others, please specify\" formControlName=\"PERS_Ethnicity_Other_Remarks\" />\n                            </mat-form-field>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <div class=\"col-lg-8 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"PERS_MaritalStatus\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"PERS_MaritalStatus\"  formControlName=\"PERS_MaritalStatus\">\n                            <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                            <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                            <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                            <mat-radio-button  matInput value=\"widow\">Widow</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"PERS_marriage_con\">Consanguineous Marriage &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"PERS_marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Children\"\n                               formControlName=\"PERS_NumberofChildren\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number of Boys\"\n                               formControlName=\"PERS_Boys\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number of Girls\"\n                               formControlName=\"PERS_Girls\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Number Of Wives\"\n                               formControlName=\"PERS_Numberofwives\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Address\"\n                               formControlName=\"PERS_Address\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"City\"\n                               formControlName=\"PERS_City\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Emirates\" autocomplete=\"off\"\n                               formControlName=\"PERS_Emirates\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Mobile number\" formControlName=\"PERS_Mobilenumber\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                        <div class=\"col-md-12 \">\n                            <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                                <div class=\"col-md-12 row file-row form-group\" >\n                                    <div class=\"col-md-10\">\n                                        <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                    </div>\n                                    <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                        <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n    <kt-portlet-header [title]=\"'1000 Arab Genome Form'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n        <ng-container ktPortletTools>\n            <a [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n               matTooltip=\"Back to the forms list\">\n                <i class=\"la la-arrow-left\"></i>\n                <span class=\"kt-hidden-mobile\">Back</span>\n            </a>\n            <a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n               mat-raised-button matTooltip=\"Save & Continue\">\n                <i class=\"la la-save\"></i>\n                <span class=\"kt-hidden-mobile\">Save</span>\n            </a>\n\n        </ng-container>\n    </kt-portlet-header>\n\n    <kt-portlet-body>\n        <mat-tab-group [(selectedIndex)]=\"selectedTab\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Details\n                </ng-template>\n                <kt-ag-participant-personal [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-ag-participant-personal>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Lifestyle Details\n                </ng-template>\n                <kt-ag-participant-lifestyle [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appLifestyle></kt-ag-participant-lifestyle>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Food Intake\n                </ng-template>\n                <kt-ag-participant-food-intake [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFoodIntake></kt-ag-participant-food-intake>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Medical History\n                </ng-template>\n                <kt-ag-participant-medical-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedicalHistory></kt-ag-participant-medical-history>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Family History\n                </ng-template>\n                <kt-ag-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyHistory></kt-ag-family-history>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Family pedigree Details\n                </ng-template>\n                <kt-ag-family-pedigree [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyPedigree></kt-ag-family-pedigree>\n            </mat-tab>\n                <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Participant Clinical Details\n                </ng-template>\n                <kt-ag-participant-clinical [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-ag-participant-clinical>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-user\"></i>\n                    Electrocardiography Details\n                </ng-template>\n                <kt-ag-electrocardiography [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appElectrocardiography  ></kt-ag-electrocardiography>\n            </mat-tab>\n            <mat-tab >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-file\"></i>\n                    Document Upload\n                </ng-template>\n                <kt-doc-upload  #appDocUpload></kt-doc-upload>\n            </mat-tab>\n\n        </mat-tab-group>\n        </kt-portlet-body>\n    </kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\n    <kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n        <div class=\"kt-form kt-margin-b-30\">\n            <div>\n                <kt-portlet-header [title]=\"'Participant Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-participant-personal [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appParticipation></kt-ag-participant-personal>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"' Participant Lifestyle Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-participant-lifestyle [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appLifestyle></kt-ag-participant-lifestyle>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Participant Food Intake'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-participant-food-intake [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFoodIntake></kt-ag-participant-food-intake>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Participant Medical History'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-participant-medical-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appMedicalHistory></kt-ag-participant-medical-history>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Participant Family History'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-family-history [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyHistory></kt-ag-family-history>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Family pedigree Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-family-pedigree [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appFamilyPedigree></kt-ag-family-pedigree>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"' Participant Clinical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-participant-clinical [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appClinical></kt-ag-participant-clinical>\n                </kt-portlet-body>\n            </div>\n            <div>\n                <kt-portlet-header [title]=\"'Electrocardiography Details'\" [class]=\"'kt-portlet__head--lg'\" >\n                </kt-portlet-header>\n                <kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-ag-electrocardiography [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appElectrocardiography  ></kt-ag-electrocardiography>\n                </kt-portlet-body>\n            </div>\n            </div>\n        </kt-portlet-body>\n    </kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet >\n    <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n    <kt-portlet-header [title]=\"'Manage 1000 Arab Genome'\"  [class]=\"'kt-portlet__head--lg'\" >\n        <ng-container ktPortletTools>\n            <button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new Form\">Add New</button>\n        </ng-container>\n    </kt-portlet-header>\n    <kt-portlet-body class=\"col-md-12\">\n        <div class=\"kt-form kt-margin-b-30\">\n            <div class=\"kt-form__filtration\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input autocomplete=\"off\" matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div #MainBody class=\"mat-table__wrapper col-md-12\">\n            <mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n                       [dataSource]=\"dataSource\"\n                       matSort\n                       #sort1=\"matSort\"\n                       matSortActive=\"savedFormID\"\n                       matSortDirection=\"asc\"\n            >\n                <div matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n                </div>\n                <div matColumnDef=\"1\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n                </div>\n                <div matColumnDef=\"2\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n                        <a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.SavedFormName}}</a>\n                    </mat-cell>\n                </div>\n                <div matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n                    <mat-cell *matCellDef=\"let form\">\n                        <button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n                            <mat-icon>create</mat-icon>\n                        </button>&nbsp;\n                        <button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n                        <a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n                            <mat-icon>print</mat-icon>\n                        </a>\n                    </mat-cell>\n                </div>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n            </mat-table>\n            <div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n            <div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n        </div>\n\n        <!-- start: BOTTOM -->\n        <div class=\"mat-table__bottom\">\n            <!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n            <!--<mat-spinner [diameter]=\"20\" *ngIf=\"loading$ | async\"></mat-spinner>-->\n            <!-- MATERIAL PAGINATOR | Binded to dasources -->\n            <!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n            <mat-paginator [length]=\"lastQuery.totalRecords\"\n                           [pageSize]=\"10\"\n                           (page)=\" getPaginatorData($event)\"\n                           [showFirstLastButtons]=\"true\"\n                           [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n            </mat-paginator>\n            <!--<mat-paginator  [pageSizeOptions]=\"[10,25,50,100]\" (page)=\"pageEvent = getPaginatorData($event)\" [length]=\"300\" [showFirstLastButtons]=\"true\"></mat-paginator>-->\n        </div>\n        <!-- end: BOTTOM -->\n    </kt-portlet-body>\n    <!-- end::Body -->\n</kt-portlet>\n");

/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AgElectrocardiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgElectrocardiographyComponent", function() { return AgElectrocardiographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var AgElectrocardiographyComponent = /** @class */ (function () {
    function AgElectrocardiographyComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Food Intake";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    AgElectrocardiographyComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgElectrocardiographyComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "ECXR_AnyECGTestBefore": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ECXR_AnyECGTestBefore_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ECXR_AnyXRayBefore": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ECXR_AnyXRayBefore_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYS_IsXRayNormal_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYS_IsECGNormal_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PHYS_IsHealthy_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.getFormAttributeValues();
    };
    AgElectrocardiographyComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 8).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgElectrocardiographyComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgElectrocardiographyComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgElectrocardiographyComponent.prototype.onSubmit = function () {
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
    AgElectrocardiographyComponent.ctorParameters = function () { return [
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
    ], AgElectrocardiographyComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgElectrocardiographyComponent.prototype, "disableInput", void 0);
    AgElectrocardiographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-electrocardiography',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-electrocardiography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], AgElectrocardiographyComponent);
    return AgElectrocardiographyComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AgFamilyHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgFamilyHistoryComponent", function() { return AgFamilyHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var BIOLOGICAL_FATHER = _core_utils_countries__WEBPACK_IMPORTED_MODULE_7__["Countries"];
var AgFamilyHistoryComponent = /** @class */ (function () {
    function AgFamilyHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    AgFamilyHistoryComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgFamilyHistoryComponent.prototype.filterCountry = function (val) {
        return BIOLOGICAL_FATHER.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AgFamilyHistoryComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalMother": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalFather": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_BiologicalMother_BirthCountry": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_BiologicalFather_BirthCountry": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_IsParents_Related": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_IsParents_Related_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Asthma": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Asthma_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Blooddisorders": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Blooddisorders_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Cancer_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Depression": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Depression_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_DiabetesType1": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_DiabetesType1_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Hypertension_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Cardiovascular": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Cardiovascular_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Hearingloss": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Hearingloss_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Obesity_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Diabetestype2": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Diabetestype2_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FADI_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalMother_Mixed_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalMother_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalFather_Mixed_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FAMI_Ethnicity_BiologicalFather_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput })
        });
        this.filteredBioMother = this.form.controls["FAMI_BiologicalMother_BirthCountry"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (val) { return _this.filterCountry(val != null && val != "" ? val.toString() : ''); }));
        this.filteredBioFather = this.form.controls["FAMI_BiologicalFather_BirthCountry"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (val) { return _this.filterCountry(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    AgFamilyHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgFamilyHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgFamilyHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgFamilyHistoryComponent.prototype.onSubmit = function () {
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
    AgFamilyHistoryComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AgFamilyHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgFamilyHistoryComponent.prototype, "disableInput", void 0);
    AgFamilyHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-family-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-family-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], AgFamilyHistoryComponent);
    return AgFamilyHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AgFamilyPedigreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgFamilyPedigreeComponent", function() { return AgFamilyPedigreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/_utils/api.url */ "./src/app/core/_utils/api.url.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");









var AgFamilyPedigreeComponent = /** @class */ (function () {
    function AgFamilyPedigreeComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues, cd) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.cd = cd;
        this.title = "Family Pedigree";
        this.saveFormId = 0;
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_7__["mediaPath"];
        this.isFormSubmit = false;
    }
    AgFamilyPedigreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
                _this.saveFormId = id;
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgFamilyPedigreeComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FamilyPedigree": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    AgFamilyPedigreeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgFamilyPedigreeComponent.prototype.prepareForm = function () {
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
    AgFamilyPedigreeComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.saveFormId).subscribe(function (res) {
            _this.form.patchValue({ "family_pedigree": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    AgFamilyPedigreeComponent.prototype.createSampleId = function () {
        var _this = this;
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgFamilyPedigreeComponent.prototype.updatedSingleAttributes = function (mode) {
        var _this = this;
        var data = {
            "FormAttributeID": 1453,
            "SavedFormID": this.saveFormId,
            "AttributeValue": this.form.value["FamilyPedigree"]
        };
        if (!mode) {
            this.splashService.splashScreen({ isLoading: true, message: "INSERTING" });
            this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                });
            });
        }
        else {
            var id = this.saveFormId;
            this.splashService.splashScreen({ isLoading: true, message: "UPDATING" });
            this._service.getFormAttributeValues(id).subscribe(function (res) {
                if (res) {
                    for (var j = 0; j < res.length; j++) {
                        if (data["FormAttributeID"] == res[j]["FormAttributeID"]) {
                            data["FormAttributeValueID"] = res[j]["FormAttributeValueID"];
                            break;
                        }
                    }
                    _this._service.postSingleFormAttr(data, mode).subscribe(function (res) {
                        _this.splashService.splashScreen({ isLoading: false, message: "" });
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
    AgFamilyPedigreeComponent.prototype.onSubmit = function () {
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
    AgFamilyPedigreeComponent.prototype.onSelectFile = function (event) {
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
    AgFamilyPedigreeComponent.prototype.onClick = function () {
        // const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
        // fileUpload.click();
    };
    AgFamilyPedigreeComponent.ctorParameters = function () { return [
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"] },
        { type: _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formData'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AgFamilyPedigreeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgFamilyPedigreeComponent.prototype, "disableInput", void 0);
    AgFamilyPedigreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-family-pedigree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-family-pedigree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AgFamilyPedigreeComponent);
    return AgFamilyPedigreeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: MY_FORMATS, AgParticipantClinicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgParticipantClinicalComponent", function() { return AgParticipantClinicalComponent; });
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
var AgParticipantClinicalComponent = /** @class */ (function () {
    function AgParticipantClinicalComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Food Intake";
        this.saveFormId = 0;
        this.isFormSubmit = false;
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    }
    AgParticipantClinicalComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgParticipantClinicalComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "CLIN_BodyWeight_KG": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_WaistCircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Height_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_Hipcircumference_CM": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BMI_KGM2": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_FastingGlucose_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_RandomGlucose_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HbA1c_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalCholesterol_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Triglyceride_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_HDL_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LDL_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Calcium_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Calcium_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Calcium_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Urea_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Creatinine_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalProtein_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalProtein_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_TotalProtein_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Albumin_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Albumin_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Albumin_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_VitaminDLevel_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Lepatin_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_LepatinReceptor_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Alkaline_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Alkaline_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Alkaline_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ALT_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ALT_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_ALT_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_GammaGlutamyl_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_GammaGlutamyl_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_GammaGlutamyl_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_PlateletCount_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_PlateletCount_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_PlateletCount_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Bilirubin_RecentTest_Date_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Bilirubin_RecentTest_Result_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BIOC_Bilirubin_IsNormalResult_PO": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_SYS_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CLIN_BloodPressure_DIA_mmHg": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    AgParticipantClinicalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgParticipantClinicalComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgParticipantClinicalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgParticipantClinicalComponent.prototype.onSubmit = function () {
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
    AgParticipantClinicalComponent.ctorParameters = function () { return [
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
    ], AgParticipantClinicalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgParticipantClinicalComponent.prototype, "disableInput", void 0);
    AgParticipantClinicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-participant-clinical',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-participant-clinical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.html")).default,
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
    ], AgParticipantClinicalComponent);
    return AgParticipantClinicalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AgParticipantFoodIntakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgParticipantFoodIntakeComponent", function() { return AgParticipantFoodIntakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var AgParticipantFoodIntakeComponent = /** @class */ (function () {
    function AgParticipantFoodIntakeComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Food Intake";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    AgParticipantFoodIntakeComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgParticipantFoodIntakeComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "FOOD_EatFastfood_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Sodapop_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Fruits_Vegetables_Day": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FOOD_Eat_Midnight": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    AgParticipantFoodIntakeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgParticipantFoodIntakeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgParticipantFoodIntakeComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgParticipantFoodIntakeComponent.prototype.onSubmit = function () {
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
    AgParticipantFoodIntakeComponent.ctorParameters = function () { return [
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
    ], AgParticipantFoodIntakeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgParticipantFoodIntakeComponent.prototype, "disableInput", void 0);
    AgParticipantFoodIntakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-participant-food-intake',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-participant-food-intake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], AgParticipantFoodIntakeComponent);
    return AgParticipantFoodIntakeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AgParticipantLifestyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgParticipantLifestyleComponent", function() { return AgParticipantLifestyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var AgParticipantLifestyleComponent = /** @class */ (function () {
    function AgParticipantLifestyleComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Participation Details";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    AgParticipantLifestyleComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgParticipantLifestyleComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "LIFE_SmokingStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LIFE_ExcersizeFrquent": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LIFE_FollowHealthyDiet": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LIFE_SpecialDiet_weight_LossGain": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LIFE_Weightchangedin5years": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LIFE_healthy_Individual": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    AgParticipantLifestyleComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgParticipantLifestyleComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgParticipantLifestyleComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgParticipantLifestyleComponent.prototype.onSubmit = function () {
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
    AgParticipantLifestyleComponent.ctorParameters = function () { return [
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
    ], AgParticipantLifestyleComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgParticipantLifestyleComponent.prototype, "disableInput", void 0);
    AgParticipantLifestyleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-participant-lifestyle',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-participant-lifestyle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_6__["PrepareFinalForm"]])
    ], AgParticipantLifestyleComponent);
    return AgParticipantLifestyleComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: AgParticipantMedicalHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgParticipantMedicalHistoryComponent", function() { return AgParticipantMedicalHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var AgParticipantMedicalHistoryComponent = /** @class */ (function () {
    function AgParticipantMedicalHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Participation Medical History";
        this.saveFormId = 0;
        this.isFormSubmit = false;
    }
    AgParticipantMedicalHistoryComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                _this.saveFormId = _this.formId;
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgParticipantMedicalHistoryComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "MEDI_Any_Allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Allergies_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Intolerance_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Medications": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Vitamins_Supplements": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Vitamins_Supplements_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Diseases": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Type1Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Type1Diabetes_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            /*Need to Check*/
            "MEDI_Type2Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Type2Diabetes_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Cardiovascular": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Cardiovascular_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Cancer": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Cancer_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Asthma": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Asthma_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            /*Need to Check End*/
            "MEDI_Seizures": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Seizures_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Hypertension_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Arthritis_Rheumatism": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Arthritis_Rheumatism_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Eczema": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Eczema_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Kidneydisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Kidneydisease_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Liverdisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Liverdisease_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Neurologicaldisorder": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Neurologicaldisorder_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Psychologicaldiseases": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Psychologicaldiseases_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Thyroid": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Thyroid_Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Others_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Surgery": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MEDI_Any_Surgery_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    AgParticipantMedicalHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgParticipantMedicalHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    AgParticipantMedicalHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    AgParticipantMedicalHistoryComponent.prototype.onSubmit = function () {
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
    AgParticipantMedicalHistoryComponent.ctorParameters = function () { return [
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
    ], AgParticipantMedicalHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgParticipantMedicalHistoryComponent.prototype, "disableInput", void 0);
    AgParticipantMedicalHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-participant-medical-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-participant-medical-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_3__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_5__["PrepareFinalForm"]])
    ], AgParticipantMedicalHistoryComponent);
    return AgParticipantMedicalHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: MY_FORMATS, AgParticipantPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgParticipantPersonalComponent", function() { return AgParticipantPersonalComponent; });
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
var AgParticipantPersonalComponent = /** @class */ (function () {
    function AgParticipantPersonalComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
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
    AgParticipantPersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 5).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    AgParticipantPersonalComponent.prototype.createForm = function () {
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
            "PERS_LastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_DateofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_PlaceofBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Nationality": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_MaritalStatus": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_marriage_con": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_NumberofChildren": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Boys": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Girls": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Numberofwives": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_City": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Emirates": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Mobilenumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity_Mixed_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PERS_Ethnicity_Other_Remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["PERS_Nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlace = this.form.controls["PERS_PlaceofBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (val) { return _this.filterPlaceofBirth(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    AgParticipantPersonalComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(5, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    AgParticipantPersonalComponent.prototype.prepareForm = function () {
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
    //   //console.log("Test",this.form.value["SampleID"])
    //   this._service.createSampleId(5,this.form.value["SampleID"]).subscribe((res)=> {
    //   //this._service.createSampleId(5, this.form.value["SampleID"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
    //     if (!this.formId) {
    //       this.saveFormId = res;
    //       this._interactionService.sendRefId(parseInt(this.saveFormId));
    //     }
    //     this.splashService.splashScreen({isLoading : false, message : "" })
    //     this.isSampleSubmit = true;
    //     this.onSubmit();
    //   });
    // }
    AgParticipantPersonalComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(5, this.form.value["SampleID"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    AgParticipantPersonalComponent.prototype.onSubmit = function () {
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
    AgParticipantPersonalComponent.prototype.updatedSingleAttributes = function (mode) {
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
    //     if (this.formId) {
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
    AgParticipantPersonalComponent.prototype.filterPlaceofBirth = function (val) {
        return AVAILABLE_PLACE.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AgParticipantPersonalComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AgParticipantPersonalComponent.prototype.uploadImage = function () {
        var _this = this;
        this._service.postUploadImages(this.fileToUpload, this.form.value["savedFormID"]).subscribe(function (res) {
            _this.form.patchValue({ "profilePicture": _this.fileToUpload.name });
            _this.fileUploadSuccess = true;
            _this.onSubmit();
        });
    };
    AgParticipantPersonalComponent.prototype.onSelectFile = function (event) {
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
    AgParticipantPersonalComponent.ctorParameters = function () { return [
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
    ], AgParticipantPersonalComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AgParticipantPersonalComponent.prototype, "disableInput", void 0);
    AgParticipantPersonalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ag-participant-personal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ag-participant-personal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.html")).default,
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
    ], AgParticipantPersonalComponent);
    return AgParticipantPersonalComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 7px;\n  border: 3px solid #eee;\n}\n.uploader:hover {\n  border-color: #454cad;\n}\n.uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.2s ease;\n  -moz-user-select: none;\n       user-select: none;\n}\n.uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa {\n  transform: scale(0.8);\n  opacity: 0.3;\n}\n.uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #start.hidden {\n  display: none;\n}\n.uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease-in-out;\n}\n.uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #response.hidden {\n  display: none;\n}\n.uploader #response #messages {\n  margin-bottom: 0.5rem;\n}\n.uploader #file-image {\n  display: inline;\n  margin: 0 auto 0.5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n}\n.uploader #file-image.hidden {\n  display: none;\n}\n.uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n}\n.uploader #notimage.hidden {\n  display: none;\n}\n.uploader progress,\n.uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n}\n.uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n}\n.uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n}\n.uploader input[type=file] {\n  display: none;\n}\n.uploader div {\n  margin: 0 0 0.5rem 0;\n  color: #5f6982;\n}\n.uploader .btn {\n  display: inline-block;\n  margin: 0.5rem 0.5rem 1rem 0.5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: 0.2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n}\n.file-row:hover {\n  background-color: #c1c2d6;\n}\n.file-row {\n  text-align: left;\n  padding-top: 20px;\n  margin-bottom: 0px !important;\n  border-bottom: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L2sxMDAwLWFyYWItZ2Vub25lL19zdWJzL2RvYy11cGxvYWQvQzpcXEphbmVcXFByb2plY3RzXFxKYW5lXFxLaGFsaWZhQ0VSQS9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxmb3JtLW1hbmFnZW1lbnRcXGsxMDAwLWFyYWItZ2Vub25lXFxfc3Vic1xcZG9jLXVwbG9hZFxcZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybS1tYW5hZ2VtZW50L2sxMDAwLWFyYWItZ2Vub25lL19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGRjtBRElFO0VBQ0UscUJBYlU7QUNXZDtBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0FDSko7QURPSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNMTjtBRFFRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDTlY7QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVE47QURZRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1ZKO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLHFCQUFBO0FDVE47QURhRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRFlJO0VBQ0UsYUFBQTtBQ1ZOO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7QUNYTjtBRGVFOztFQUdFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDZko7QURrQkU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEa0JFO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGFBQUE7QUNqQko7QURvQkU7RUFDRSxvQkFBQTtFQUNBLGNBekhVO0FDdUdkO0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBOUlVO0VBK0lWLHFCQS9JVTtFQWdKVixlQUFBO0FDbEJKO0FEcUJBO0VBQ0UseUJBQUE7QUNsQkY7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9rMTAwMC1hcmFiLWdlbm9uZS9fc3Vicy9kb2MtdXBsb2FkL2RvYy11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICAgICAgICM0NTRjYWQ7XG4kZGFyay10ZXh0OiAgICM1ZjY5ODI7XG5cbi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWU7XG4gIH1cblxuICBsYWJlbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cblxuICAgICYuaG92ZXIge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgJHRoZW1lO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNnB4ICNlZWU7XG5cbiAgICAgICNzdGFydCB7XG4gICAgICAgIGkuZmEge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGkuZmEge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG4gICNyZXNwb25zZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgI21lc3NhZ2VzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gICNmaWxlLWltYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwIGF1dG8gLjVyZW0gYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAmLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICNub3RpbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBwcm9ncmVzcyxcbiAgLnByb2dyZXNzIHtcbiAgICAvLyBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG5cbiAgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrZW4oJHRoZW1lLDglKSAwJSwgJHRoZW1lIDUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGRhcmtlbigkdGhlbWUsOCUpIDAlLCAkdGhlbWUgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGRpdiB7XG4gICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgICBjb2xvcjogJGRhcmstdGV4dDtcbiAgfVxuICAuYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAuNXJlbSAuNXJlbSAxcmVtIC41cmVtO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lO1xuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmZpbGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMmQ2O1xufVxuXG4uZmlsZS1yb3d7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSIsIi51cGxvYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlZWU7XG59XG4udXBsb2FkZXI6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG59XG4udXBsb2FkZXIgbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi51cGxvYWRlciBsYWJlbC5ob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0NTRjYWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xufVxuLnVwbG9hZGVyIGxhYmVsLmhvdmVyICNzdGFydCBpLmZhIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwLjM7XG59XG4udXBsb2FkZXIgI3N0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjc3RhcnQuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjc3RhcnQgaS5mYSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udXBsb2FkZXIgI3Jlc3BvbnNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciAjcmVzcG9uc2UgI21lc3NhZ2VzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnVwbG9hZGVyICNmaWxlLWltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDAgYXV0byAwLjVyZW0gYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cbi51cGxvYWRlciAjZmlsZS1pbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVwbG9hZGVyICNub3RpbWFnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZGVyIHByb2dyZXNzLFxuLnVwbG9hZGVyIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNmOTAgMCUsICM0NTRjYWQgNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51cGxvYWRlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWRlciBkaXYge1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgY29sb3I6ICM1ZjY5ODI7XG59XG4udXBsb2FkZXIgLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjNDU0Y2FkO1xuICBib3JkZXItY29sb3I6ICM0NTRjYWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzJkNjtcbn1cblxuLmZpbGUtcm93IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.ts ***!
  \********************************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: K1000ArabGenoneFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K1000ArabGenoneFormComponent", function() { return K1000ArabGenoneFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/ag-participant-personal/ag-participant-personal.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.ts");
/* harmony import */ var _subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/ag-participant-lifestyle/ag-participant-lifestyle.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.ts");
/* harmony import */ var _subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/ag-electrocardiography/ag-electrocardiography.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.ts");
/* harmony import */ var _subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/ag-participant-clinical/ag-participant-clinical.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.ts");
/* harmony import */ var _subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/ag-family-pedigree/ag-family-pedigree.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.ts");
/* harmony import */ var _subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/ag-family-history/ag-family-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.ts");
/* harmony import */ var _subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/ag-participant-medical-history/ag-participant-medical-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.ts");
/* harmony import */ var _subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/ag-participant-food-intake/ag-participant-food-intake.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.ts");
/* harmony import */ var _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.ts");

// Angular












var K1000ArabGenoneFormComponent = /** @class */ (function () {
    function K1000ArabGenoneFormComponent(activatedRoute, router, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.isPrint = false;
        this.subscriptions = [];
        this.selectedTab = 0;
    }
    K1000ArabGenoneFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('1000 Arab Genome');
    };
    K1000ArabGenoneFormComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    K1000ArabGenoneFormComponent.prototype.reset = function () {
    };
    K1000ArabGenoneFormComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appParticipation.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appLifestyle.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appFoodIntake.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appMedicalHistory.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appFamilyHistory.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appFamilyPedigree.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appClinical.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appElectrocardiography.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appDocUpload.onSubmit();
        }
    };
    K1000ArabGenoneFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__["AgParticipantPersonalComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_5__["AgParticipantLifestyleComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFoodIntake'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__["AgParticipantFoodIntakeComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appFoodIntake", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedicalHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_10__["AgParticipantMedicalHistoryComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appMedicalHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_9__["AgFamilyHistoryComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__["AgFamilyPedigreeComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_7__["AgParticipantClinicalComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appElectrocardiography'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_6__["AgElectrocardiographyComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appElectrocardiography", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_12__["DocUploadComponent"])
    ], K1000ArabGenoneFormComponent.prototype, "appDocUpload", void 0);
    K1000ArabGenoneFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-k1000-arab-genone-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./k1000-arab-genone-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], K1000ArabGenoneFormComponent);
    return K1000ArabGenoneFormComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9rMTAwMC1hcmFiLWdlbm9uZS9rMTAwMC1hcmFiLWdlbm9uZS1wcmludC9rMTAwMC1hcmFiLWdlbm9uZS1wcmludC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: K1000ArabGenonePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K1000ArabGenonePrintComponent", function() { return K1000ArabGenonePrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_subs/ag-participant-personal/ag-participant-personal.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.ts");
/* harmony import */ var _subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/ag-participant-lifestyle/ag-participant-lifestyle.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.ts");
/* harmony import */ var _subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/ag-electrocardiography/ag-electrocardiography.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.ts");
/* harmony import */ var _subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/ag-participant-clinical/ag-participant-clinical.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.ts");
/* harmony import */ var _subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/ag-family-pedigree/ag-family-pedigree.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.ts");
/* harmony import */ var _subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/ag-family-history/ag-family-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.ts");
/* harmony import */ var _subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/ag-participant-medical-history/ag-participant-medical-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.ts");
/* harmony import */ var _subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/ag-participant-food-intake/ag-participant-food-intake.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.ts");

// Angular











var K1000ArabGenonePrintComponent = /** @class */ (function () {
    function K1000ArabGenonePrintComponent(activatedRoute, router, subheaderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subheaderService = subheaderService;
        this.isPrint = true;
        this.subscriptions = [];
    }
    K1000ArabGenonePrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('1000 Arab Genome');
        this.subheaderService.showPrintButton(true);
    };
    K1000ArabGenonePrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    K1000ArabGenonePrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appParticipation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_4__["AgParticipantPersonalComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appParticipation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appLifestyle'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_5__["AgParticipantLifestyleComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appLifestyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFoodIntake'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__["AgParticipantFoodIntakeComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appFoodIntake", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appMedicalHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_10__["AgParticipantMedicalHistoryComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appMedicalHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_9__["AgFamilyHistoryComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appFamilyHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appFamilyPedigree'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_8__["AgFamilyPedigreeComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appFamilyPedigree", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appClinical'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_7__["AgParticipantClinicalComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appClinical", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appElectrocardiography'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_6__["AgElectrocardiographyComponent"])
    ], K1000ArabGenonePrintComponent.prototype, "appElectrocardiography", void 0);
    K1000ArabGenonePrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-k1000-arab-genone-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./k1000-arab-genone-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./k1000-arab-genone-print.component.scss */ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], K1000ArabGenonePrintComponent);
    return K1000ArabGenonePrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9rMTAwMC1hcmFiLWdlbm9uZS9rMTAwMC1hcmFiLWdlbm9uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: K1000ArabGenoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K1000ArabGenoneComponent", function() { return K1000ArabGenoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/views/pages/form-management/confirmation-dialog/confirmation-dialog.component.ts");

// Angular



// RXJS






var K1000ArabGenoneComponent = /** @class */ (function () {
    function K1000ArabGenoneComponent(activatedRoute, router, _snackBar, dialog, subheaderService, cdr, splashService, _vService) {
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
            templateId: 5,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    K1000ArabGenoneComponent.prototype.fetchList = function () {
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
    K1000ArabGenoneComponent.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(this.lastQuery.templateId, this.lastQuery.filter).subscribe(function (res) {
            if (res)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On init
     */
    K1000ArabGenoneComponent.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('1000 Arab Genome');
        this.subheaderService.showPrintButton(false);
    };
    K1000ArabGenoneComponent.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    K1000ArabGenoneComponent.prototype.openDialog = function (id) {
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
    K1000ArabGenoneComponent.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/1000-arab-genome/edit', id], { relativeTo: this.activatedRoute });
    };
    K1000ArabGenoneComponent.prototype.deleteForm = function (id) {
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
    K1000ArabGenoneComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"] },
        { type: _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], K1000ArabGenoneComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], K1000ArabGenoneComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], K1000ArabGenoneComponent.prototype, "searchInput", void 0);
    K1000ArabGenoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-k1000-arab-genone',
            template: __importDefault(__webpack_require__(/*! raw-loader!./k1000-arab-genone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./k1000-arab-genone.component.scss */ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_7__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_6__["SplashScreenService"],
            _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_8__["VitamindService"]])
    ], K1000ArabGenoneComponent);
    return K1000ArabGenoneComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: K100ArabGenone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K100ArabGenone", function() { return K100ArabGenone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_k1000_arab_genone_k1000_arab_genone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/k1000-arab-genone/k1000-arab-genone.component */ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.component.ts");
/* harmony import */ var _components_k1000_arab_genone_k1000_arab_genone_form_k1000_arab_genone_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component */ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-form/k1000-arab-genone-form.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-personal/ag-participant-personal.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-lifestyle/ag-participant-lifestyle.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-food-intake/ag-participant-food-intake.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-medical-history/ag-participant-medical-history.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-history/ag-family-history.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-family-pedigree/ag-family-pedigree.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-participant-clinical/ag-participant-clinical.component.ts");
/* harmony import */ var _components_k1000_arab_genone_subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/ag-electrocardiography/ag-electrocardiography.component.ts");
/* harmony import */ var _components_k1000_arab_genone_k1000_arab_genone_print_k1000_arab_genone_print_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component */ "./src/app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone-print/k1000-arab-genone-print.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_k1000_arab_genone_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/k1000-arab-genone/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/k1000-arab-genone/_subs/doc-upload/doc-upload.component.ts");







// Components













var routes = [
    {
        path: '',
        component: _components_k1000_arab_genone_k1000_arab_genone_component__WEBPACK_IMPORTED_MODULE_7__["K1000ArabGenoneComponent"],
    },
    {
        path: 'add',
        component: _components_k1000_arab_genone_k1000_arab_genone_form_k1000_arab_genone_form_component__WEBPACK_IMPORTED_MODULE_8__["K1000ArabGenoneFormComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_k1000_arab_genone_k1000_arab_genone_form_k1000_arab_genone_form_component__WEBPACK_IMPORTED_MODULE_8__["K1000ArabGenoneFormComponent"],
    },
    {
        path: 'print/:id',
        component: _components_k1000_arab_genone_k1000_arab_genone_print_k1000_arab_genone_print_component__WEBPACK_IMPORTED_MODULE_17__["K1000ArabGenonePrintComponent"],
    }
];
var K100ArabGenone = /** @class */ (function () {
    function K100ArabGenone() {
    }
    K100ArabGenone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // 1000 Arab Genone
                _components_k1000_arab_genone_k1000_arab_genone_component__WEBPACK_IMPORTED_MODULE_7__["K1000ArabGenoneComponent"],
                _components_k1000_arab_genone_k1000_arab_genone_form_k1000_arab_genone_form_component__WEBPACK_IMPORTED_MODULE_8__["K1000ArabGenoneFormComponent"],
                _components_k1000_arab_genone_subs_ag_participant_personal_ag_participant_personal_component__WEBPACK_IMPORTED_MODULE_9__["AgParticipantPersonalComponent"],
                _components_k1000_arab_genone_subs_ag_participant_lifestyle_ag_participant_lifestyle_component__WEBPACK_IMPORTED_MODULE_10__["AgParticipantLifestyleComponent"],
                _components_k1000_arab_genone_subs_ag_participant_food_intake_ag_participant_food_intake_component__WEBPACK_IMPORTED_MODULE_11__["AgParticipantFoodIntakeComponent"],
                _components_k1000_arab_genone_subs_ag_participant_medical_history_ag_participant_medical_history_component__WEBPACK_IMPORTED_MODULE_12__["AgParticipantMedicalHistoryComponent"],
                _components_k1000_arab_genone_subs_ag_family_history_ag_family_history_component__WEBPACK_IMPORTED_MODULE_13__["AgFamilyHistoryComponent"],
                _components_k1000_arab_genone_subs_ag_family_pedigree_ag_family_pedigree_component__WEBPACK_IMPORTED_MODULE_14__["AgFamilyPedigreeComponent"],
                _components_k1000_arab_genone_subs_ag_participant_clinical_ag_participant_clinical_component__WEBPACK_IMPORTED_MODULE_15__["AgParticipantClinicalComponent"],
                _components_k1000_arab_genone_subs_ag_electrocardiography_ag_electrocardiography_component__WEBPACK_IMPORTED_MODULE_16__["AgElectrocardiographyComponent"],
                _components_k1000_arab_genone_k1000_arab_genone_print_k1000_arab_genone_print_component__WEBPACK_IMPORTED_MODULE_17__["K1000ArabGenonePrintComponent"],
                _components_k1000_arab_genone_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__["DocUploadComponent"]
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
    ], K100ArabGenone);
    return K100ArabGenone;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-k1000-arab-genone-k1000-arab-genone-module.js.map