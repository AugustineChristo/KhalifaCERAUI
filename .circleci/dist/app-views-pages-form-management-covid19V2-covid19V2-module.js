(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-covid19V2-covid19V2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>Clinical Outcome</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\"> Was the person hospitalized?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"PersonHospitalized\">\n                        <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n<!-- \n                <div class=\"col-md-6 form-group\" *ngIf=\"form.get('PC_6A_work_in_highrisk_occupations').value == 'other'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If other, specify:\" autocomplete=\"off\" formControlName=\"PC_6A_work_in_highrisk_occupations_others\" />\n                          \n                 </mat-form-field>\n                 </div>  \n                <div class=\"col-md-6 form-group\" *ngIf=\"form.get('PC_6A_work_in_highrisk_occupations').value == 'other'\" >\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"doaPicker.open()\"\n                        placeholder=\"Date last attended this work: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker.open()\" formControlName=\"PC_6A_work_in_highrisk_occupations_Last_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                --> \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Oxygen Therapy is required? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"OxygenTherapyRequired\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Admitted to ICU/HDU? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"AdmittedICU\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Intubation is required? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"IntubationRequired\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Mechanical incubation is required? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"MechanicalIncubationRequired\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Hospital Medical Record/Chart Number: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Hospital Medical Record/Chart Number\" autocomplete=\"off\" \n                        formControlName=\"HospitalMedicalRecordChartNumber\" />  \n                    </mat-form-field>\n                </div>\n            </div>\n\n\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>3.a: Medical Care:</h5>  \n                        </label>\n                </div>\n            </div> \n\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Medication administered</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Medication administered 1\" autocomplete=\"off\" \n                        formControlName=\"MedicationAdministered1\" />  \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Dose 1\" autocomplete=\"off\" \n                        formControlName=\"Dose1\" />  \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Comments 1\" autocomplete=\"off\" \n                        formControlName=\"Comments1\" />  \n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\"></label>\n                    </div>\n                 </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Medication administered 2\" autocomplete=\"off\" \n                        formControlName=\"MedicationAdministered2\" />  \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Dose 2\" autocomplete=\"off\" \n                        formControlName=\"Dose2\" />  \n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Comments 2\" autocomplete=\"off\" \n                        formControlName=\"Comments2\" />  \n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>3.b: Pre-existing Conditions and Medical History</h5>  \n                        </label>\n                </div>\n            </div> \n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">No Risk Medical Conditions: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"NoRiskMedicalConditions\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Cardiac Disease (Not Simple Hypertension): </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"CardiacDisease\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Chronic Lung Disease: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"ChronicLungDisease\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Haemoglobinopathies: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"Haemoglobinopathies\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Type 2 Diabetes: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-3 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"Type2Diabetes\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n                    <div class=\"col-md-5 form-group\" *ngIf=\"form.get('Type2Diabetes').value == 'Yes'\" >\n                        <label id=\"example-radio-group-label\">If yes, are they on dialysis? </label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"Dialysis\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Immunosuppressive Condition: </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-3 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"ImmunosuppressiveCondition\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n                <div  class=\"col-md-5 form-group\" *ngIf=\"form.get('ImmunosuppressiveCondition').value == 'Yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If yes, Please Specify\" autocomplete=\"off\" \n                            formControlName=\"ImmunosuppressiveConditionSpecify\" />  \n                        </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Liver Disease :</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"LiverDisease\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Metabolic Disease :</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"MetabolicDisease\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Neurological Disorder :</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"NeurologicalDisorder\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Obesity :</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"Obesity\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Renal Disease : </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-3 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"RenalDisease\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n                    <div class=\"col-md-5 form-group\" *ngIf=\"form.get('RenalDisease').value == 'Yes'\" >\n                        <label id=\"example-radio-group-label\">If yes, are they on dialysis? </label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"RenalDiseaseDialysis\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Other Risk Medical Condition? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-3 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"OtherRiskMedicalCondition\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n                <div  class=\"col-md-5 form-group\" *ngIf=\"form.get('OtherRiskMedicalCondition').value == 'Yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If yes, Please Specify\" autocomplete=\"off\" \n                            formControlName=\"OtherRiskMedicalConditionSpecify\" />  \n                        </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Have You Received COVID-19 Vaccine ?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"ReceivedCOVID19Vaccine\">\n                            <mat-radio-button matInput  value=\"YesReceived1stDose\">Yes Received 1st Dose</mat-radio-button>\n                            <mat-radio-button  matInput value=\"YesReceived2ndDose\">Yes received 2nd Dose</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotVaccinated\">Not Vaccinated</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>3.c: Other Risk Factors:</h5>  \n                        </label>\n                </div>\n            </div> \n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Is The person Currently Pregnant or Pregnant During The Illness? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"CurrentlyPregnant\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Are they a current smoker? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"CurrentSmoker\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Do they Consume Alcohol? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"ConsumeAlcohol\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h5>Dietary Fiber Intake Short Food Frequency Questionnaire (DFI-FFQ)</h5>\n                <h6>\n                    On average, over the past year, do you consume the following items daily?\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\"> Fruit  (Tinned / Fresh): </label>\n                </div>\n            </div>\n           \n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                formControlName=\"Fruit\">\n                    <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">Vegetables (Tinned / Frozen): </label>\n                </div>\n            </div>\n           \n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                formControlName=\"Vegetables\">\n                    <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">Whole Meal Breads: </label>\n                </div>\n            </div>\n           \n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                formControlName=\"WholeMealBreads\">\n                    <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">Beans, Peas and Lentils: </label>\n                </div>\n            </div>\n           \n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                formControlName=\"BeansPeasLentils\">\n                    <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">Nuts and Seeds : </label>\n                </div>\n            </div>\n           \n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                formControlName=\"NutsSeeds\">\n                    <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n        </div>\n\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4\">\n                        <label align=\"start\">\n                         <h5>Treatment regimen</h5>  \n                        </label>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TreatmentRegimen\">\n                        <mat-radio-button matInput  value=\"Water\">Water</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Saline\">Saline</mat-radio-button>\n                        <mat-radio-button  matInput value=\"None\">None</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n            <!--Day 0 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 0</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day0Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day0NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Date\" formControlName=\"Day0Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 0 end-->\n            <!--Day 2 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 2</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day2Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day2NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker2\"\n                                (click)=\"dobPicker2.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day2Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker2\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker2></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 2 end-->\n            <!--Day 4 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 4</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day4Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day4NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker4\"\n                                (click)=\"dobPicker4.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day4Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker4\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker4></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 4 end-->\n            <!--Day 6 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 6</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day6Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day6NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker6\"\n                                (click)=\"dobPicker6.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day6Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker6\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker6></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 6 end-->\n            <!--Day 8 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 8</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day8Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day8NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker8\"\n                                (click)=\"dobPicker8.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day8Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker8\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker8></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 8 end-->\n            <!--Day 10 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 10</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day10Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day10NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker10\"\n                                (click)=\"dobPicker10.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day10Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker10\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker10></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 10 end-->\n            <!--Day 12 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 12</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day12Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day12NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker12\"\n                                (click)=\"dobPicker12.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day12Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker12\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker12></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 12 end-->\n            <!--Day 14 Begin-->\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Day 14</label>\n                    </div>\n                    </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day14Saliva\">Saliva</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"  formControlName=\"Day14NasalSwab\">Nasal Swab</mat-checkbox>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker14\"\n                                (click)=\"dobPicker14.open()\"\n                                [max]=\"maxDate\"\n                                autocomplete=\"off\"\n                                placeholder=\"Date\" formControlName=\"Day14Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker14\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker14></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n            <!--Day 14 end-->\n            \n            \n            \n            \n            \n            \n            \n\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>2.a Onset date of first symptoms:</h5>  \n                        </label>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Diagnostic Date: </label>\n                    </div>\n                 </div>\n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"diaPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"diaPicker.open()\"\n                        placeholder=\"Diagnostic date\" (click)=\"diaPicker.open()\"\n                         formControlName=\"DiagnosticDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"diaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #diaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div> \n            </div>\n            \n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did The Person Have Symptoms?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">                     \n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"PersonHaveSymptoms\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n              <div class=\"col-md-4 form-group\"  *ngIf=\"form.get('PersonHaveSymptoms').value == 'yes'\">  \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"doaPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"doaPicker.open()\" \n                        formControlName=\"PersonHaveSymptomsDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div> \n            </div> \n\n            <div class=\"form-group  row\">\n                \n                    <div class=\"col-md-12 kt-margin-bottom-20-mobile form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Duration of symptoms:(days) \"\n                             autocomplete=\"off\" \n                            formControlName=\"PersonHaveSymptomsDuration\" />\n                           </mat-form-field>\n                    </div>\n                </div>\n            \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 \">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Did the person Travel? </label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-2 form-group\">\n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\" \n                             formControlName=\"PersonTravel\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                               <!--  <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button> -->\n                            </mat-radio-group>\n                    </div>\n    \n                    <!-- *ngIf=\"form.get('PersonTravel').value == 'yes'\"  -->\n               <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('PersonTravel').value == 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker1\"\n                        autocomplete=\"off\"\n                        (click)=\"doaPicker1.open()\"\n                        placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker1.open()\" \n                        formControlName=\"PersonTravelDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker1></mat-datepicker>\n                    </mat-form-field>\n                </div> \n                 <div class=\"col-md-4  form-group\"  *ngIf=\"form.get('PersonTravel').value == 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Destination\" autocomplete=\"off\" \n                        formControlName=\"PersonTravelDestination\" />\n                       </mat-form-field>\n                </div> \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>2.b Symptoms:</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Acute Respiratory Distress Syndrome: </label>\n                    </div>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" \n                    formControlName=\"ARDS\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                 <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ARDS').value == 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"ARDSDate\"\n                        autocomplete=\"off\"\n                        (click)=\"ARDSDate.open()\"\n                        placeholder=\"Onset date\" (click)=\"ARDSDate.open()\" \n                        formControlName=\"ARDSDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"ARDSDate\"></mat-datepicker-toggle>\n                    <mat-datepicker #ARDSDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Confirmed by X-ray?</label>\n                    </div>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" \n                    formControlName=\"ARDS_Xray\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                    </div>\n                </div>\n                \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Pneumonia:</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-3 form-group\">                      \n                       <mat-radio-group aria-labelledby=\"example-radio-group-label\" \n                         formControlName=\"Pneumonia\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                            </mat-radio-group>\n                </div>\n                <div class=\"col-md-2 form-group\" *ngIf=\"form.get('Pneumonia').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker3\"\n                           autocomplete=\"off\"\n                           (click)=\"doaPicker3.open()\"\n                           placeholder=\"Onset date\" (click)=\"doaPicker3.open()\"\n                            formControlName=\"Pneumonia_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Confirmed by X-ray?</label>\n                </div>\n                </div>\n                <div class=\"col-md-3 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" \n                    formControlName=\"Pneumonia_Xray\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Unknown\">Unknown</mat-radio-button>\n                    </mat-radio-group>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h6>Other Symptoms:</h6>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Fever</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Fever\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Fever').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker2\"\n                        autocomplete=\"off\"\n                        (click)=\"doaPicker2.open()\"\n                        placeholder=\"Onset date\" (click)=\"doaPicker2.open()\" \n                        formControlName=\"FeverDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker2></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Cough</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Cough\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Cough').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"CoughPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"CoughPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"CoughPicker.open()\" \n                        formControlName=\"Cough_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"CoughPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #CoughPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">New Loss of Taste or Smell</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"NewLossOfTasteOrSmell\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('NewLossOfTasteOrSmell').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"NewLossOfTastePicker\"\n                        autocomplete=\"off\"\n                        (click)=\"NewLossOfTastePicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"NewLossOfTastePicker.open()\" \n                        formControlName=\"NewLossOfTasteOrSmellDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"NewLossOfTastePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #NewLossOfTastePicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Fatigue</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Fatigue\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Fatigue').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"FatiguePicker\"\n                        autocomplete=\"off\"\n                        (click)=\"FatiguePicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"FatiguePicker.open()\" \n                        formControlName=\"FatigueDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"FatiguePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #FatiguePicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Chills or Rigors</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"ChillsOrRigors\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('ChillsOrRigors').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"ChillsOrRigorsPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"ChillsOrRigorsPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"ChillsOrRigorsPicker.open()\" \n                        formControlName=\"ChillsOrRigorsDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"ChillsOrRigorsPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #ChillsOrRigorsPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Headache</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Headache\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Headache').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"HeadachePicker\"\n                        autocomplete=\"off\"\n                        (click)=\"HeadachePicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"HeadachePicker.open()\" \n                        formControlName=\"HeadacheDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"HeadachePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #HeadachePicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Diarrhea</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Diarrhea\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Diarrhea').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"DiarrheaPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"DiarrheaPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"DiarrheaPicker.open()\" \n                        formControlName=\"DiarrheaDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"DiarrheaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #DiarrheaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Nausea</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Nausea\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Nausea').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"NauseaPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"NauseaPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"NauseaPicker.open()\" \n                        formControlName=\"NauseaDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"NauseaPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #NauseaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Shortness Of Breath</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"ShortnessOfBreath\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('ShortnessOfBreath').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"ShortnessOfBreathPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"ShortnessOfBreathPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"ShortnessOfBreathPicker.open()\" \n                        formControlName=\"ShortnessOfBreathDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"ShortnessOfBreathPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #ShortnessOfBreathPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Sore Throat</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"SoreThroat\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('SoreThroat').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"SoreThroatPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"SoreThroatPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"SoreThroatPicker.open()\" \n                        formControlName=\"SoreThroatDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"SoreThroatPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #SoreThroatPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Runny Or Stuffy Nose</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"RunnyOrStuffyNose\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('RunnyOrStuffyNose').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"RunnyOrStuffyNosePicker\"\n                        autocomplete=\"off\"\n                        (click)=\"RunnyOrStuffyNosePicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"RunnyOrStuffyNosePicker.open()\" \n                        formControlName=\"RunnyOrStuffyNoseDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"RunnyOrStuffyNosePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #RunnyOrStuffyNosePicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Muscle Or Body Aches</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"MuscleOrBodyAches\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('MuscleOrBodyAches').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"MuscleOrBodyAchesPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"MuscleOrBodyAchesPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"MuscleOrBodyAchesPicker.open()\" \n                        formControlName=\"MuscleOrBodyAchesDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"MuscleOrBodyAchesPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #MuscleOrBodyAchesPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Vomiting</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Vomiting\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Vomiting').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"VomitingPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"VomitingPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"VomitingPicker.open()\" \n                        formControlName=\"VomitingDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"VomitingPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #VomitingPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Sneezing</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                    formControlName=\"Sneezing\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('Sneezing').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"SneezingPicker\"\n                        autocomplete=\"off\"\n                        (click)=\"SneezingPicker.open()\"\n                        placeholder=\"Onset date\" (click)=\"SneezingPicker.open()\" \n                        formControlName=\"SneezingDate\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"SneezingPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #SneezingPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Clinical Notes\"\n                         autocomplete=\"off\" \n                        formControlName=\"ClinicalNotes\" />\n                       </mat-form-field>\n                </div>\n            </div>\n\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> General Clinical Information:</h5>  \n                        </label>\n                </div>\n            </div>\n            \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4\">\n                    <label align=\"start\">\n                        Participants Blood Type: \n                    </label>\n                 </div>\n                <div class=\"col-md-4 form-group\" >\n                 <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"BloodType\">\n                    <mat-radio-button matInput  value=\"A\">A</mat-radio-button>\n                    <mat-radio-button  matInput value=\"B\">B</mat-radio-button>\n                    <mat-radio-button  matInput value=\"AB\">AB</mat-radio-button>\n                    <mat-radio-button  matInput value=\"O\">O</mat-radio-button>\n                    <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                </mat-radio-group>\n                </div>   \n                <div class=\"col-md-2\">\n                <label align=\"start\">\n                    Participants Rh Type: \n                </label>\n             </div>\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"BloodTypePositiveNegative\">\n                       <mat-radio-button matInput  value=\"+\">+</mat-radio-button>\n                       <mat-radio-button  matInput value=\"-\">-</mat-radio-button>\n                   </mat-radio-group>\n                   </div> \n\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4\">\n                        <label align=\"start\">\n                        Participants weight (Kg) and height (cm): \n                        </label>\n                </div>\n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Weight: \" autocomplete=\"off\" \n                     formControlName=\"ParticipantsWeight\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Height:\" autocomplete=\"off\" \n                     formControlName=\"ParticipantsHeight\" />\n                          \n                 </mat-form-field>\n                 </div>   \n            </div>\n\n           \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"kt-form__section kt-form__section--first\">\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"Sample\" />\n                        <mat-error>Sample Id is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"COVID-19 ID\" autocomplete=\"off\" formControlName=\"COVID19ID\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository ID\" autocomplete=\"off\" formControlName=\"DepositoryID\" />\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"EXOME microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\"><strong> Severity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>\n                       <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"Severity\">\n                            <mat-radio-button matInput  value=\"Severe\">Severe</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Moderate\">Moderate</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Mild\">Mild</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Asymptomatic\">Asymptomatic</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Healthy\">Healthy</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Project Title\"  autocomplete=\"off\"\n                                formControlName=\"ProjectTitle\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Principal Investigator\" autocomplete=\"off\"\n                                formControlName=\"PrincipalInvestigator\" />\n                    </mat-form-field>\n                </div>\n            </div>\n              \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collection Point\" autocomplete=\"off\"\n                               formControlName=\"CollectionPoint\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" \n                        formControlName=\"CollectedBy\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Collection Date\" (click)=\"doaPicker.open()\" \n                               formControlName=\"CollectedDate\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\"> Individual/Family&nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"Indifamily\">\n                            <mat-radio-button matInput  value=\"Individual\">Individual</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Family\">Family</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n          \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                        <h5>Participant’s Personal Details </h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" \n                        formControlName=\"FirstName\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" \n                        formControlName=\"MiddleName\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Last Name\" autocomplete=\"off\" \n                        formControlName=\"LastName\" />\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  \n                        formControlName=\"Gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Emirates ID number\" autocomplete=\"off\" \n                        formControlName=\"EmiratesID\" />\n                       </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" \n                        formControlName=\"Nationality\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let Nationality of filteredNationalities | async\" [value]=\"Nationality\">\n                                {{ Nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n         \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               (ngModelChange)=\"CalculateAge()\" \n                               placeholder=\"Choose a Date of Birth\" formControlName=\"DOB\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Age\"  autocomplete=\"off\"   formControlName=\"Age\" />\n                    </mat-form-field>\n                </div>\n               \n                <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Place Of Birth\" autocomplete=\"off\"\n                            [matAutocomplete]=\"manuf1\"       formControlName=\"PlaceOfBirth\" />\n                        <mat-autocomplete #manuf1=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let data of filteredPlaces | async\" [value]=\"data\">\n                                {{ data }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>           \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"City\"\n                                formControlName=\"City\" />\n                    </mat-form-field>\n                </div>\n            </div>\n  \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Phone\" autocomplete=\"off\" \n                        formControlName=\"Phone\" />\n                        </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Email\" autocomplete=\"off\" \n                        formControlName=\"Email\" />\n                        </mat-form-field>\n                </div>\n            </div>\n \n        <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Ethnicity &nbsp;&nbsp;&nbsp;</label>\n                    </div>\n     \n                    <!-- <div class=\"col-md-8 form-group\"> -->\n                        <mat-radio-group aria-labelledby=\"Ethnicity\" \n                            formControlName=\"Ethnicity\">\n                            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-radio-button matInput  value=\"arab\">Arab/Bedouin</mat-radio-button>\n                            <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                            <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                            <mat-radio-button  matInput value=\"africanamerican\">African American</mat-radio-button>\n                            <mat-radio-button  matInput value=\"southasian\">South Asian</mat-radio-button> \n                            <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                                <div *ngIf=\"form.get('Ethnicity').value == 'mixed'\" >\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"If Mixed, specify\"\n                                            formControlName=\"EthnicityMixedSpecify\" />\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-radio-button  matInput value=\"eastasian\">East Asian</mat-radio-button>\n                            <mat-radio-button  matInput value=\"african\">African</mat-radio-button>\n                            <mat-radio-button  matInput value=\"nativeamerican\">Native American</mat-radio-button>\n                            <mat-radio-button  matInput value=\"hispanic\">Hispanic</mat-radio-button>\n                            <mat-radio-button  matInput value=\"caucasian\">Caucasian</mat-radio-button>\n                            <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                             \n                                <div *ngIf=\"form.get('Ethnicity').value == 'other'\" >\n                                    <mat-form-field class=\"mat-form-field-fluid\">\n                                        <input matInput placeholder=\"If Other, specify\"\n                                            formControlName=\"EthnicityOthersSpecify\" />\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </mat-radio-group>\n\n                    <!-- </div> -->\n                </div> \n            </div>\n\n           \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"'Covid 19V2'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a  [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\tmatTooltip=\"Back to the forms list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<i class=\"la la-save\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n       \n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tPersonal Details\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-covid19V2-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appcovid19V2PersonalDetails></kt-covid19V2-personal-details>\n            </mat-tab>\n            \n\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n\t\t\t\t\tClinical Presentation\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19V2-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalDetails></kt-covid19V2-clinical-details>\n            </mat-tab>\n\t\t\t<mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Clinical Outcome\n                </ng-template>\n                    <kt-covid19V2-ClinicalOutcome [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalOutcome></kt-covid19V2-ClinicalOutcome>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Clinical Information\n                </ng-template>\n                    <kt-covid19V2-clinical-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalInformation></kt-covid19V2-clinical-information>\n            </mat-tab>\n\n\n           \n            <mat-tab  >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tDFIFFQ\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19V2-DFIFFQ  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appcovid19V2DFIFFQ></kt-covid19V2-DFIFFQ>\n\t\t\t</mat-tab>\n\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-pills\"></i>\n\t\t\t\t\tTreatment Regimen\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19V2-Treatmentregimen [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2Treatmentregimen></kt-covid19V2-Treatmentregimen>\n\t\t\t</mat-tab> \n\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-file\"></i>\n\t\t\t\t\tDocument Upload\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-doc-upload  #appDocUpload></kt-doc-upload>\n\t\t\t</mat-tab> \n\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<kt-portlet id=\"print_form\">\n\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Personal Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t<kt-covid19V2-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appcovid19V2PersonalDetails></kt-covid19V2-personal-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n            \n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Presentation'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t<kt-covid19V2-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalDetails></kt-covid19V2-clinical-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n\t\t\t<div class=\"\">\n                \n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Outcome'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-covid19V2-ClinicalOutcome [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalOutcome></kt-covid19V2-ClinicalOutcome>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Information'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-covid19V2-clinical-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2ClinicalInformation></kt-covid19V2-clinical-information>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n\n\n           \n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Dietary Fiber Intake Short Food Frequency Questionnaire (DFI-FFQ)'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\n\t\t\t\t\t<kt-covid19V2-DFIFFQ  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appcovid19V2DFIFFQ></kt-covid19V2-DFIFFQ>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<kt-portlet-header [title]=\"'Treatment Regimen'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t\t</kt-portlet-header>\n\t\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t\t<kt-covid19V2-Treatmentregimen [disableInput]=\"isPrint\"   [formData]=\"formId\" #appcovid19V2Treatmentregimen></kt-covid19V2-Treatmentregimen>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t\t</div> \n\t\t\t\t\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Covid-19 V2'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create Covid-19 V2\">Add New</button>\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\n\t\t\t\t\t\t\t<!--</mat-hint>-->\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n\t\t\t[dataSource]=\"dataSource\"\n\t\t\tmatSort\n\t\t\t#sort1=\"matSort\"\n\t\t\tmatSortActive=\"savedFormID\"\n\t\t\tmatSortDirection=\"asc\"\n\t\t\t>\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.Sample}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"3\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">COVID-19 ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.COVID19ID}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>");

/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: covid19V2ClinicalOutcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2ClinicalOutcomeComponent", function() { return covid19V2ClinicalOutcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var covid19V2ClinicalOutcomeComponent = /** @class */ (function () {
    function covid19V2ClinicalOutcomeComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Outcome";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    covid19V2ClinicalOutcomeComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2ClinicalOutcomeComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "PersonHospitalized": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OxygenTherapyRequired": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "AdmittedICU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "IntubationRequired": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MechanicalIncubationRequired": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HospitalMedicalRecordChartNumber": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MedicationAdministered1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Dose1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Comments1": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MedicationAdministered2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Dose2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Comments2": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NoRiskMedicalConditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CardiacDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ChronicLungDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Haemoglobinopathies": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Type2Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Dialysis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ImmunosuppressiveCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ImmunosuppressiveConditionSpecify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LiverDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MetabolicDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NeurologicalDisorder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "RenalDisease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "RenalDiseaseDialysis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OtherRiskMedicalCondition": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OtherRiskMedicalConditionSpecify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ReceivedCOVID19Vaccine": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CurrentlyPregnant": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CurrentSmoker": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ConsumeAlcohol": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    covid19V2ClinicalOutcomeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2ClinicalOutcomeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2ClinicalOutcomeComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    covid19V2ClinicalOutcomeComponent.prototype.onSubmit = function () {
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
    covid19V2ClinicalOutcomeComponent.ctorParameters = function () { return [
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
    ], covid19V2ClinicalOutcomeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2ClinicalOutcomeComponent.prototype, "disableInput", void 0);
    covid19V2ClinicalOutcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-ClinicalOutcome',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ClinicalOutcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], covid19V2ClinicalOutcomeComponent);
    return covid19V2ClinicalOutcomeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.ts ***!
  \****************************************************************************************/
/*! exports provided: covid19V2DFIFFQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2DFIFFQComponent", function() { return covid19V2DFIFFQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var covid19V2DFIFFQComponent = /** @class */ (function () {
    function covid19V2DFIFFQComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Dietary Fiber Intake Short Food Frequency Questionnaire (DFIFFQ)";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    covid19V2DFIFFQComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2DFIFFQComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "Fruit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Vegetables": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WholeMealBreads": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BeansPeasLentils": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NutsSeeds": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    covid19V2DFIFFQComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2DFIFFQComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2DFIFFQComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    covid19V2DFIFFQComponent.prototype.onSubmit = function () {
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
    covid19V2DFIFFQComponent.ctorParameters = function () { return [
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
    ], covid19V2DFIFFQComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2DFIFFQComponent.prototype, "disableInput", void 0);
    covid19V2DFIFFQComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-DFIFFQ',
            template: __importDefault(__webpack_require__(/*! raw-loader!./DFIFFQ.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], covid19V2DFIFFQComponent);
    return covid19V2DFIFFQComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, covid19V2TreatmentregimenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2TreatmentregimenComponent", function() { return covid19V2TreatmentregimenComponent; });
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
var covid19V2TreatmentregimenComponent = /** @class */ (function () {
    function covid19V2TreatmentregimenComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Treatment regimen";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    covid19V2TreatmentregimenComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2TreatmentregimenComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "TreatmentRegimen": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day0Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day0NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day0Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day2Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day2NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day2Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day4Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day4NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day4Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day6Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day6NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day6Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day8Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day8NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day8Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day10Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day10NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day10Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day12Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day12NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day12Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day14Saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day14NasalSwab": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Day14Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    covid19V2TreatmentregimenComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2TreatmentregimenComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2TreatmentregimenComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    covid19V2TreatmentregimenComponent.prototype.onSubmit = function () {
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
    covid19V2TreatmentregimenComponent.ctorParameters = function () { return [
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
    ], covid19V2TreatmentregimenComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2TreatmentregimenComponent.prototype, "disableInput", void 0);
    covid19V2TreatmentregimenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-Treatmentregimen',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Treatmentregimen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.html")).default,
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
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], covid19V2TreatmentregimenComponent);
    return covid19V2TreatmentregimenComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, covid19V2ClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2ClinicalDetailsComponent", function() { return covid19V2ClinicalDetailsComponent; });
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
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MM YYYY',
    },
};
var covid19V2ClinicalDetailsComponent = /** @class */ (function () {
    function covid19V2ClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
        this.DiagnosticDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](moment.utc());
        this.isFormSubmit = false;
    }
    covid19V2ClinicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2ClinicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "DiagnosticDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonHaveSymptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonHaveSymptomsDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonHaveSymptomsDuration": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonTravel": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonTravelDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PersonTravelDestination": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ARDS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ARDSDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ARDS_Xray": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Pneumonia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Pneumonia_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Pneumonia_Xray": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Fever": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FeverDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cough": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Cough_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NewLossOfTasteOrSmell": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NewLossOfTasteOrSmellDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Fatigue": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FatigueDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ChillsOrRigors": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ChillsOrRigorsDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Headache": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "HeadacheDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Diarrhea": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DiarrheaDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Nausea": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "NauseaDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ShortnessOfBreath": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ShortnessOfBreathDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SoreThroat": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SoreThroatDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "RunnyOrStuffyNose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "RunnyOrStuffyNoseDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MuscleOrBodyAches": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MuscleOrBodyAchesDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Vomiting": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "VomitingDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Sneezing": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "SneezingDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ClinicalNotes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    covid19V2ClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2ClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2ClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    covid19V2ClinicalDetailsComponent.prototype.onSubmit = function () {
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
    covid19V2ClinicalDetailsComponent.ctorParameters = function () { return [
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
    ], covid19V2ClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2ClinicalDetailsComponent.prototype, "disableInput", void 0);
    covid19V2ClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.html")).default,
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
                //  { provide: MAT_DATE_LOCALE, useValue: 'en-AR' },
                { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], covid19V2ClinicalDetailsComponent);
    return covid19V2ClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: covid19V2ClinicalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2ClinicalInformationComponent", function() { return covid19V2ClinicalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var covid19V2ClinicalInformationComponent = /** @class */ (function () {
    function covid19V2ClinicalInformationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Information";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    covid19V2ClinicalInformationComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2ClinicalInformationComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "BloodType": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "BloodTypePositiveNegative": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ParticipantsWeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ParticipantsHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    covid19V2ClinicalInformationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2ClinicalInformationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2ClinicalInformationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    covid19V2ClinicalInformationComponent.prototype.onSubmit = function () {
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
    covid19V2ClinicalInformationComponent.ctorParameters = function () { return [
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
    ], covid19V2ClinicalInformationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2ClinicalInformationComponent.prototype, "disableInput", void 0);
    covid19V2ClinicalInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-clinical-information',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], covid19V2ClinicalInformationComponent);
    return covid19V2ClinicalInformationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9jb3ZpZDE5VjIvX3N1YnMvZG9jLXVwbG9hZC9kb2MtdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.ts ***!
  \************************************************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, covid19V2PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2PersonalDetailsComponent", function() { return covid19V2PersonalDetailsComponent; });
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
var covid19V2PersonalDetailsComponent = /** @class */ (function () {
    function covid19V2PersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
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
        //CollectedDate = new FormControl(moment.utc().format("YYYYMMDD"));
        // CollectedDate = moment("12-25-1995", "MM-DD-YYYY");
        this.url = '';
        this.fileToUpload = null;
        this.fileUploadSuccess = false;
        this.isSampleSubmit = false;
        this.isFormSubmit = false;
        this.mediaPath = _core_utils_api_url__WEBPACK_IMPORTED_MODULE_8__["mediaPath"];
    }
    covid19V2PersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 13).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    covid19V2PersonalDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "Sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "COVID19ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DepositoryID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ProjectTitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PrincipalInvestigator": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectionPoint": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectedBy": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CollectedDate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Indifamily": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "FirstName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MiddleName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EmiratesID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Nationality": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "DOB": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PlaceOfBirth": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Email": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Ethnicity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EthnicityMixedSpecify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EthnicityOthersSpecify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["Nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlaces = this.form.controls["PlaceOfBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    covid19V2PersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(13, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    covid19V2PersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    covid19V2PersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(13, this.form.value["Sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    covid19V2PersonalDetailsComponent.prototype.onSubmit = function () {
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
                        /*  this.formId=0 */
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
    covid19V2PersonalDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    covid19V2PersonalDetailsComponent.prototype.CalculateAge = function () {
        if (this.form.controls["DOB"].value) {
            var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["DOB"].value).getTime());
            this.form.patchValue({ "Age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) });
        }
    };
    covid19V2PersonalDetailsComponent.prototype.onSelectFile = function (event) {
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
    covid19V2PersonalDetailsComponent.ctorParameters = function () { return [
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
    ], covid19V2PersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], covid19V2PersonalDetailsComponent.prototype, "disableInput", void 0);
    covid19V2PersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.html")).default,
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
    ], covid19V2PersonalDetailsComponent);
    return covid19V2PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: covid19V2EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2EditComponent", function() { return covid19V2EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _components_covid19V2_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/covid19V2/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.ts");
/* harmony import */ var _components_covid19V2_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/covid19V2/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_covid19V2_subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component */ "./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.ts");
/* harmony import */ var _components_covid19V2_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/covid19V2/_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _components_covid19V2_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/covid19V2/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_covid19V2_subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/covid19V2/_subs/DFIFFQ/DFIFFQ.component */ "./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.ts");
/* harmony import */ var _components_covid19V2_subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component */ "./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.ts");

// Angular




// import { HsaLifestyleDetailsComponent } from '@components/hsa/_subs/lifestyle-details/lifestyle-details.component';
// import { HsaPersonalDetailsComponent } from '@components/hsa/_subs/personal-details/personal-details.component';
//  import { HsaMedicalDetailsComponent } from '@components/hsa/_subs/medical-details/medical-details.component';
// import { HsaFamilyHistoryComponent } from '@components/hsa/_subs/family-history/family-history.component';
// import { HsaClinicalDetailsComponent } from '@components/hsa/_subs/clinical-details/clinical-details.component';
// import { HsaDiabetesSelfManagementComponent } from '@components/hsa/_subs/diabetes-self-management/diabetes-self-management.component';
// import { HsaBiochemicalComponent } from '@components/hsa/_subs/biochemical/biochemical.component';
// import { HsaCognitiveTestResultComponent } from '@components/hsa/_subs/cognitive-test-result/cognitive-test-result.component';
// import { HsaDFIFFQComponent } from '@components/hsa/_subs/DFIFFQ/DFIFFQ.component';







var covid19V2EditComponent = /** @class */ (function () {
    function covid19V2EditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    covid19V2EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('covid19V2');
    };
    covid19V2EditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    covid19V2EditComponent.prototype.reset = function () {
    };
    covid19V2EditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appcovid19V2PersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appcovid19V2ClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appcovid19V2ClinicalOutcome.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appcovid19V2ClinicalInformation.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appcovid19V2DFIFFQ.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appcovid19V2Treatmentregimen.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appDocUpload.onSubmit();
        }
    };
    covid19V2EditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2PersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__["covid19V2PersonalDetailsComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2PersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__["covid19V2ClinicalDetailsComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2ClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_8__["covid19V2ClinicalInformationComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2ClinicalInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalOutcome'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_11__["covid19V2ClinicalOutcomeComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2ClinicalOutcome", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2DFIFFQ'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_10__["covid19V2DFIFFQComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2DFIFFQ", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2Treatmentregimen'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_7__["covid19V2TreatmentregimenComponent"])
    ], covid19V2EditComponent.prototype, "appcovid19V2Treatmentregimen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19V2_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocUploadComponent"])
    ], covid19V2EditComponent.prototype, "appDocUpload", void 0);
    covid19V2EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19V2-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], covid19V2EditComponent);
    return covid19V2EditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: covid19V2PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2PrintComponent", function() { return covid19V2PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/Treatmentregimen/Treatmentregimen.component */ "./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.ts");
/* harmony import */ var _subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/DFIFFQ/DFIFFQ.component */ "./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.ts");
/* harmony import */ var _subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/ClinicalOutcome/ClinicalOutcome.component */ "./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.ts");











var covid19V2PrintComponent = /** @class */ (function () {
    function covid19V2PrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    covid19V2PrintComponent.prototype.ngOnInit = function () {
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
    covid19V2PrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    covid19V2PrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Covid-19V2');
        this.subheaderService.showPrintButton(true);
    };
    covid19V2PrintComponent.prototype.reset = function () {
    };
    covid19V2PrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appcovid19V2PersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appcovid19V2ClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appcovid19V2ClinicalOutcome.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appcovid19V2ClinicalInformation.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appcovid19V2DFIFFQ.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appcovid19V2Treatmentregimen.onSubmit();
        }
    };
    covid19V2PrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2PersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["covid19V2PersonalDetailsComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2PersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_8__["covid19V2ClinicalDetailsComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2ClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_7__["covid19V2ClinicalInformationComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2ClinicalInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2ClinicalOutcome'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_10__["covid19V2ClinicalOutcomeComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2ClinicalOutcome", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2DFIFFQ'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_9__["covid19V2DFIFFQComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2DFIFFQ", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcovid19V2Treatmentregimen'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_6__["covid19V2TreatmentregimenComponent"])
    ], covid19V2PrintComponent.prototype, "appcovid19V2Treatmentregimen", void 0);
    covid19V2PrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19V2-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], covid19V2PrintComponent);
    return covid19V2PrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/covid19V2.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/covid19V2.module.ts ***!
  \***************************************************************************/
/*! exports provided: covid19V2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2Module", function() { return covid19V2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_covid19V2_covid19V2_covid19V2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/covid19V2/covid19V2/covid19V2.component */ "./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.ts");
/* harmony import */ var _components_covid19V2_covid19V2_edit_covid19V2_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/covid19V2/covid19V2-edit/covid19V2-edit.component */ "./src/app/views/pages/form-management/covid19V2/covid19V2-edit/covid19V2-edit.component.ts");
/* harmony import */ var _components_covid19V2_covid19V2_print_covid19V2_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/covid19V2/covid19V2-print/covid19V2-print.component */ "./src/app/views/pages/form-management/covid19V2/covid19V2-print/covid19V2-print.component.ts");
/* harmony import */ var _components_covid19V2_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/covid19V2/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_covid19V2_subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component */ "./src/app/views/pages/form-management/covid19V2/_subs/Treatmentregimen/Treatmentregimen.component.ts");
/* harmony import */ var _components_covid19V2_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/covid19V2/_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _components_covid19V2_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/covid19V2/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19V2/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_covid19V2_subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/covid19V2/_subs/DFIFFQ/DFIFFQ.component */ "./src/app/views/pages/form-management/covid19V2/_subs/DFIFFQ/DFIFFQ.component.ts");
/* harmony import */ var _components_covid19V2_subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component */ "./src/app/views/pages/form-management/covid19V2/_subs/ClinicalOutcome/ClinicalOutcome.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_covid19V2_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/covid19V2/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/covid19V2/_subs/doc-upload/doc-upload.component.ts");


















//import { HsaEditComponent } from './hsa-edit/hsa-edit.component';
var routes = [
    {
        path: '',
        component: _components_covid19V2_covid19V2_covid19V2_component__WEBPACK_IMPORTED_MODULE_7__["covid19V2Component"],
    },
    {
        path: 'add',
        component: _components_covid19V2_covid19V2_edit_covid19V2_edit_component__WEBPACK_IMPORTED_MODULE_8__["covid19V2EditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_covid19V2_covid19V2_edit_covid19V2_edit_component__WEBPACK_IMPORTED_MODULE_8__["covid19V2EditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_covid19V2_covid19V2_print_covid19V2_print_component__WEBPACK_IMPORTED_MODULE_9__["covid19V2PrintComponent"],
    }
];
var covid19V2Module = /** @class */ (function () {
    function covid19V2Module() {
    }
    covid19V2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_covid19V2_covid19V2_covid19V2_component__WEBPACK_IMPORTED_MODULE_7__["covid19V2Component"],
                _components_covid19V2_covid19V2_edit_covid19V2_edit_component__WEBPACK_IMPORTED_MODULE_8__["covid19V2EditComponent"],
                _components_covid19V2_covid19V2_print_covid19V2_print_component__WEBPACK_IMPORTED_MODULE_9__["covid19V2PrintComponent"],
                _components_covid19V2_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_13__["covid19V2ClinicalDetailsComponent"],
                _components_covid19V2_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["covid19V2PersonalDetailsComponent"],
                _components_covid19V2_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_12__["covid19V2ClinicalInformationComponent"],
                _components_covid19V2_subs_DFIFFQ_DFIFFQ_component__WEBPACK_IMPORTED_MODULE_14__["covid19V2DFIFFQComponent"],
                _components_covid19V2_subs_ClinicalOutcome_ClinicalOutcome_component__WEBPACK_IMPORTED_MODULE_15__["covid19V2ClinicalOutcomeComponent"],
                _components_covid19V2_subs_Treatmentregimen_Treatmentregimen_component__WEBPACK_IMPORTED_MODULE_11__["covid19V2TreatmentregimenComponent"],
                _components_covid19V2_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_17__["DocUploadComponent"],
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
    ], covid19V2Module);
    return covid19V2Module;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.ts ***!
  \****************************************************************************************/
/*! exports provided: covid19V2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covid19V2Component", function() { return covid19V2Component; });
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






var covid19V2Component = /** @class */ (function () {
    function covid19V2Component(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, splashService, cdr) {
        this.activatedRoute = activatedRoute;
        this._vService = _vService;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.subheaderService = subheaderService;
        this.splashService = splashService;
        this.cdr = cdr;
        this.loading$ = true;
        this.dataSource = [];
        this.displayedColumns = ['id', '1', '2', '3', 'actions'];
        this.lastQuery = {
            filter: '',
            sortOrder: 2,
            sortField: 1,
            pageNumber: 0,
            pageSize: 10,
            templateId: 13,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    covid19V2Component.prototype.fetchList = function () {
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
    covid19V2Component.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(13, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    covid19V2Component.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    covid19V2Component.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Covid-19V2');
        this.subheaderService.showPrintButton(false);
    };
    covid19V2Component.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    covid19V2Component.prototype.openDialog = function (id) {
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
    covid19V2Component.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/covid19V2/edit', id], { relativeTo: this.activatedRoute });
    };
    covid19V2Component.prototype.deleteForm = function (id) {
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
    covid19V2Component.ctorParameters = function () { return [
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
    ], covid19V2Component.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], covid19V2Component.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], covid19V2Component.prototype, "searchInput", void 0);
    covid19V2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19V2',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19V2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19V2/covid19V2/covid19V2.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], covid19V2Component);
    return covid19V2Component;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-covid19V2-covid19V2-module.js.map