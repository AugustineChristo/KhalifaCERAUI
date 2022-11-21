(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-form-management-covid19-covid19-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>Microbiome Questionnaire</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">1. Did you use antibiotics for the past 3 months?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_Antibiotics\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">2. Have you taken prescribed probiotics from before?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_Probiotics\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <P>3.\tDietary Fiber Intake Short Food Frequency Questionnaire (DFI-FFQ)\n                            On average, over the past year, how many serves have you consumed of the following?\n                            (a portion includes: a handful of grapes, an apple, an orange, two kiwifruits, a carrot, ½ cup spinach, a side salad, a slice of wholegrain bread, a handful of nuts, ¾ cup cooked legumes)\n                         </P>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Fruit  (Tinned / Fresh)</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_FibreIntake_Fruit\">\n                            <mat-radio-button matInput  value=\"Rarely or Never\">Rarely or Never</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-3 times a Month\">1-3 times a Month</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Once a Week\">Once a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"2-4 times a Week\">2-4 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5-6 times a Week\">5-6 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-2 times a  Day\">1-2 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"3-4 times a  Day\">3-4 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5+ times a  Day\">5+ times a  Day</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n  <!--          <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"If yes, date of presentation to a hospital: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker.open()\" formControlName=\"ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"If yes, give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>  \n             -->\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Vegetables (Tinned / Frozen)</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_FibreIntake_Vegetables\">\n                            <mat-radio-button matInput  value=\"Rarely or Never\">Rarely or Never</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-3 times a Month\">1-3 times a Month</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Once a Week\">Once a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"2-4 times a Week\">2-4 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5-6 times a Week\">5-6 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-2 times a  Day\">1-2 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"3-4 times a  Day\">3-4 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5+ times a  Day\">5+ times a  Day</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n        <!--    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_other_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker2\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker2.open()\"\n                       placeholder=\"If yes, date of presentation to a hospital: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker2.open()\" formControlName=\"ES_5A_present_to_hospital_in_14_days_other_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker2></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_other_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"If yes, give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_hospital_in_14_days_other_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>  -->\n\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Wholemeal Breads (or Chapattis) and Cereal (like Weetabix)</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_FibreIntake_WholemealBreads\">\n                            <mat-radio-button matInput  value=\"Rarely or Never\">Rarely or Never</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-3 times a Month\">1-3 times a Month</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Once a Week\">Once a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"2-4 times a Week\">2-4 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5-6 times a Week\">5-6 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-2 times a  Day\">1-2 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"3-4 times a  Day\">3-4 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5+ times a  Day\">5+ times a  Day</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n<!--\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker3\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker3.open()\"\n                       placeholder=\"If yes, date of presentation to a hospital:  (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker3.open()\" formControlName=\"ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker3></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"If yes, give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>\n             -->  \n\n             \n            </div>\n            \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Nuts and Seeds</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_FibreIntake_NutsSeeds\">\n                            <mat-radio-button matInput  value=\"Rarely or Never\">Rarely or Never</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-3 times a Month\">1-3 times a Month</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Once a Week\">Once a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"2-4 times a Week\">2-4 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5-6 times a Week\">5-6 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-2 times a  Day\">1-2 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"3-4 times a  Day\">3-4 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5+ times a  Day\">5+ times a  Day</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Legumes, Beans, peas and lentils</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_FibreIntake_LegumesBeansPeasLentils\">\n                            <mat-radio-button matInput  value=\"Rarely or Never\">Rarely or Never</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-3 times a Month\">1-3 times a Month</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Once a Week\">Once a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"2-4 times a Week\">2-4 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5-6 times a Week\">5-6 times a Week</mat-radio-button>\n                            <mat-radio-button  matInput value=\"1-2 times a  Day\">1-2 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"3-4 times a  Day\">3-4 times a Day</mat-radio-button>\n                            <mat-radio-button  matInput value=\"5+ times a  Day\">5+ times a Day</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">4. Do You Excercise?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_Exercise\">\n                            <mat-radio-button matInput  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"No\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Occasionally\">Occasionally</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Rarely\">Rarely</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">5. Do you suffer any of the following long-standing conditions?</label>\n                    </div>\n                 </div>\n                <!--<div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"MQ_LongStandingSuffering\">\n                            <mat-radio-button matInput  value=\"Hypertension\">Hypertension</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Cardiovascular Disease\">Cardiovascular Disease</mat-radio-button>\n                            <mat-radio-button  matInput value=\"COPD\">COPD</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Asthma\">Asthma</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Others\">Others</mat-radio-button>\n                            <mat-radio-button  matInput value=\"None\">None</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n                <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('MQ_LongStandingSuffering').value == 'Others'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If Others, Specify:\" autocomplete=\"off\" formControlName=\"MQ_LongStandingSuffering_Specify\" />\n                          \n                 </mat-form-field>\n                 </div> -->\n\n\n                 <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_Hypertension\">Hypertension</mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_CVD\">Cardiovascular Disease </mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_COPD\">COPD </mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_Asthma\">Asthma </mat-checkbox>\n                        <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_Others\">Others </mat-checkbox>\n                         <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"MQ_LongStandingSuffering_None\">None</mat-checkbox>\n                        <div class=\"col-md-12 row\" [hidden]=\"!form.get('MQ_LongStandingSuffering_Others').value\">\n                            <mat-form-field   class=\"mat-form-field-fluid\">\n                                <input   type=\"text\" matInput placeholder=\"If other, Please specify\" formControlName=\"MQ_LongStandingSuffering_Specify\" autocomplete=\"off\"    />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n\n\n\n            </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> Onset date of first symptoms:</h5>  \n                        </label>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did the person have symptoms?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3A_person_have_symptoms\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DontRemember\">Don't Remember</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3A_person_have_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker.open()\" formControlName=\"CP_3A_person_have_symptoms_onset_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                \n                    <div class=\"col-md-12 kt-margin-bottom-20-mobile form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Duration of symptoms: ________  (days)         –if symptoms have resolved-\" autocomplete=\"off\" formControlName=\"CP_3A_duration_symptoms\" />\n                           </mat-form-field>\n                    </div>\n                </div>\n            \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Acute respiratory distress syndrome:</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-6 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_ARDS\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_ARDS').value == 'yes'\" >\n                   \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker1\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker1.open()\"\n                       placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker1.open()\" formControlName=\"CP_3B_ARDS_onset_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker1\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker1></mat-datepicker>\n                </mat-form-field>\n                \n                </div>\n                </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Confirmed by X-ray?</label>\n                </div>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_ARDS_XRay\">\n                        <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                        <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                        <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n               \n                    </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Diarrhea:</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Diarrhea\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_Diarrhea').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker3\"\n                           autocomplete=\"off\"\n                           (click)=\"doaPicker3.open()\"\n                           placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker3.open()\" formControlName=\"CP_3B_Diarrhea_onset_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker3></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">New loss of taste or smell:</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-5 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_loss_of_Taste_Smell\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_loss_of_Taste_Smell').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker2\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker2.open()\"\n                       placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker2.open()\" formControlName=\"CP_3B_loss_of_Taste_Smell_onset_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker2></mat-datepicker>\n                </mat-form-field>\n            </div>\n            </div>\n\n                <div class=\"form-group  row\">\n                \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                Fever:\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Fever\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n    \n                            </mat-radio-group>\n                    </div>\n    \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile form-group\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Higher temperature (Celsius):\" autocomplete=\"off\" formControlName=\"CP_3B_Fever_high_temperature\" />\n                               </mat-form-field>\n                        </div>\n                    </div>\n               \n            <div class=\"form-group  row\">\n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                        <label align=\"start\">\n                            Feverish self-report?\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_feverish_selfreport\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Where/when recorded:\" autocomplete=\"off\" formControlName=\"CP_3B_feverish_selfreport_where_when\" />\n                           </mat-form-field>\n                    </div>\n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Pneumonia:</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-6 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Pneumonia\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_Pneumonia').value == 'yes'\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker24\"\n                           autocomplete=\"off\"\n                           (click)=\"doaPicker24.open()\"\n                           placeholder=\"Onset date: (dd/mm/yyyy): __/__/____\" (click)=\"doaPicker24.open()\" formControlName=\"CP_3B_Pneumonia_onset_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"doaPicker24\"></mat-datepicker-toggle>\n                    <mat-datepicker #doaPicker24></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                </div>          \n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Confirmed by X-ray?</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-6 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Pneumonia_XRay\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n                    \n                </div>   \n                \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> Symptom:</h5>  \n                        </label>\n                </div>\n            </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Arthralgia</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Arthralgia\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_Arthralgia').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker5\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker5.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker5.open()\" formControlName=\"CP_3B_Arthralgia_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker5\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker5></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Cough</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Cough\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3B_Cough').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker6\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker6.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker6.open()\" formControlName=\"CP_3B_Cough_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker6\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker6></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Conjunctivitis</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Conjunctivitis\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Conjunctivitis').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker7\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker7.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker7.open()\" formControlName=\"CP_3B_Conjunctivitis_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker7\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker7></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Fatigue</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Fatigue\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Fatigue').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker8\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker8.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker8.open()\" formControlName=\"CP_3B_Fatigue_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker8\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker8></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Chills or rigors</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Chills_rigors\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Chills_rigors').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker9\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker9.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker9.open()\" formControlName=\"CP_3B_Chills_rigors_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker9\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker9></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Headache</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Headache\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Headache').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker10\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker10.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker10.open()\" formControlName=\"CP_3B_Headache_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker10\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker10></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Malaise</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Malaise\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Malaise').value == 'yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker11\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker11.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker11.open()\" formControlName=\"CP_3B_Malaise_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker11\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker11></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Myalgia</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Myalgia\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Myalgia').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker12\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker12.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker12.open()\" formControlName=\"CP_3B_Myalgia_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker12\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker12></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Nausea</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Nausea\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Nausea').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker13\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker13.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker13.open()\" formControlName=\"CP_3B_Nausea_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker13\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker13></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Pneumonitis</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Pneumonitis\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Pneumonitis').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker14\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker14.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker14.open()\" formControlName=\"CP_3B_Pneumonitis_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker14\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker14></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>    \n                <!-- <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Arthralgia</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Arthralgia\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker15\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker15.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker15.open()\" formControlName=\"CP_3B_Arthralgia_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker15\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker15></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>     -->\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Rhinorrhea</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Rhinorrhea\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Rhinorrhea').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker16\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker16.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker16.open()\" formControlName=\"CP_3B_Rhinorrhea_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker16\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker16></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Shortness of breath</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Shortness_of_breath\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Shortness_of_breath').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker17\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker17.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker17.open()\" formControlName=\"CP_3B_Shortness_of_breath_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker17\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker17></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Sore throat</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Sore_throat\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Sore_throat').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker18\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker18.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker18.open()\" formControlName=\"CP_3B_Sore_throat_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker18\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker18></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Runny or stuffy nose</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Runny_stuffynose\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Runny_stuffynose').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker19\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker19.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker19.open()\" formControlName=\"CP_3B_Runny_stuffynose_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker19\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker19></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Muscle or body aches</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Muscle_bodyaches\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Muscle_bodyaches').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker20\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker20.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker20.open()\" formControlName=\"CP_3B_Muscle_bodyaches_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker20\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker20></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Sneezing</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Sneezing\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Sneezing').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker22\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker22.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker22.open()\" formControlName=\"CP_3B_Sneezing_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker22\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker22></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Vomiting</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                           \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3B_Vomiting\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3B_Vomiting').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput [matDatepicker]=\"doaPicker21\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker21.open()\"\n                               placeholder=\"Onset of symptoms (dd/mm/yyyy)\" (click)=\"doaPicker21.open()\" formControlName=\"CP_3B_Vomiting_onset_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker21\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker21></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Other symptoms:</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                       <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Other symptoms\" autocomplete=\"off\" formControlName=\"CP_3B_Other_symptoms\" />\n                             \n                    </mat-form-field>\n                    </div>\n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Clinical notes:</label>\n                        </div>\n                     </div>\n                    <div class=\"col-md-4 form-group\">\n                       <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Clinical notes\" autocomplete=\"off\" formControlName=\"CP_3B_Clinical_notes\" />\n                             \n                    </mat-form-field>\n                    </div>\n                </div>             \n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                            <label align=\"start\">\n                             <h5>  Clinical outcome</h5>  \n                            </label>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Was the person hospitalized?</label>\n                    </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3C_person_hospitalized\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n\n                           \n                        </mat-radio-group>\n                        </div>\n                    </div>\n                   \n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3C_person_hospitalized').value == 'yes'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"If yes, name/phone number of hospital:\" autocomplete=\"off\" formControlName=\"CP_3C_person_hospitalized_phone_number_hospital\" />\n                              \n                     </mat-form-field>\n                     </div> \n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Admitted to ICU/HDU?</label>\n                    </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3C_Admitted_ICU_HDU\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                           \n                        </mat-radio-group>\n                        </div>\n                    </div>\n                   \n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3C_Admitted_ICU_HDU').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"If yes, number of days in ICU/HDU:\" autocomplete=\"off\" formControlName=\"CP_3C_Admitted_ICU_HDU_number_of_days\" />\n                      \n             </mat-form-field>\n             </div> \n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Oxygen Therapy is required?</label>\n                    </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3C_Oxygen_Therapy_reqd\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                           \n                        </mat-radio-group>\n                        </div>\n                    </div>\n                   \n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Intubation is required?</label>\n                    </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3C_Intubation_reqd\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                           \n                        </mat-radio-group>\n                        </div>\n                    </div>\n                   \n                     \n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Mechanical incubation is required?</label>\n                    </div>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3C_Mechanical_incubation_reqd\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                           \n                        </mat-radio-group>\n                        </div>\n                    </div>\n                   \n            <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3C_Mechanical_incubation_reqd').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Hospital medical record/chart number:\" autocomplete=\"off\" formControlName=\"CP_3C_Hospital_medical_record_chart_number\" />\n                      \n             </mat-form-field>\n             </div> \n                </div>\n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                            <label align=\"start\">\n                             <h5> Medical care:</h5>  \n                            </label>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                       \n            <div class=\"col-md-4 form-group\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Medication administered1\" autocomplete=\"off\" formControlName=\"CP_3D_1_Medication_administered\" />\n                      \n             </mat-form-field>\n             </div>  \n                   \n            <div class=\"col-md-4 form-group\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_1_Dose\" />\n                      \n             </mat-form-field>\n             </div>  \n             <div class=\"col-md-4 form-group\">\n                 <mat-form-field class=\"mat-form-field-fluid\">\n                  <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_1_Comments\" />\n                       \n              </mat-form-field>\n              </div> \n                </div>\n\n                <div class=\"form-group  row\">\n                       \n                    <div class=\"col-md-4 form-group\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"Medication administered2\" autocomplete=\"off\" formControlName=\"CP_3D_2_Medication_administered\" />\n                              \n                     </mat-form-field>\n                     </div>  \n                           \n                    <div class=\"col-md-4 form-group\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_2_Dose\" />\n                              \n                     </mat-form-field>\n                     </div>  \n                     <div class=\"col-md-4 form-group\">\n                         <mat-form-field class=\"mat-form-field-fluid\">\n                          <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_2_Comments\" />\n                               \n                      </mat-form-field>\n                      </div> \n                        </div>\n            \n                        <div class=\"form-group  row\">\n                       \n                            <div class=\"col-md-4 form-group\" >\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                 <input matInput placeholder=\"Medication administered3\" autocomplete=\"off\" formControlName=\"CP_3D_3_Medication_administered\" />\n                                      \n                             </mat-form-field>\n                             </div>  \n                                   \n                            <div class=\"col-md-4 form-group\" >\n                                <mat-form-field class=\"mat-form-field-fluid\">\n                                 <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_3_Dose\" />\n                                      \n                             </mat-form-field>\n                             </div>  \n                             <div class=\"col-md-4 form-group\">\n                                 <mat-form-field class=\"mat-form-field-fluid\">\n                                  <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_3_Comments\" />\n                                       \n                              </mat-form-field>\n                              </div> \n                                </div>\n            \n                                <div class=\"form-group  row\">\n                       \n                                    <div class=\"col-md-4 form-group\" >\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                         <input matInput placeholder=\"Medication administered4\" autocomplete=\"off\" formControlName=\"CP_3D_4_Medication_administered\" />\n                                              \n                                     </mat-form-field>\n                                     </div>  \n                                           \n                                    <div class=\"col-md-4 form-group\" >\n                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                         <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_4_Dose\" />\n                                              \n                                     </mat-form-field>\n                                     </div>  \n                                     <div class=\"col-md-4 form-group\">\n                                         <mat-form-field class=\"mat-form-field-fluid\">\n                                          <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_4_Comments\" />\n                                               \n                                      </mat-form-field>\n                                      </div> \n                                        </div>\n            \n                                        <div class=\"form-group  row\">\n                       \n                                            <div class=\"col-md-4 form-group\" >\n                                                <mat-form-field class=\"mat-form-field-fluid\">\n                                                 <input matInput placeholder=\"Medication administered5\" autocomplete=\"off\" formControlName=\"CP_3D_5_Medication_administered\" />\n                                                      \n                                             </mat-form-field>\n                                             </div>  \n                                                   \n                                            <div class=\"col-md-4 form-group\" >\n                                                <mat-form-field class=\"mat-form-field-fluid\">\n                                                 <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_5_Dose\" />\n                                                      \n                                             </mat-form-field>\n                                             </div>  \n                                             <div class=\"col-md-4 form-group\">\n                                                 <mat-form-field class=\"mat-form-field-fluid\">\n                                                  <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_5_Comments\" />\n                                                       \n                                              </mat-form-field>\n                                              </div> \n                                                </div>\n            \n                                                <div class=\"form-group  row\">\n                       \n                                                    <div class=\"col-md-4 form-group\" >\n                                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                                         <input matInput placeholder=\"Medication administered6\" autocomplete=\"off\" formControlName=\"CP_3D_6_Medication_administered\" />\n                                                              \n                                                     </mat-form-field>\n                                                     </div>  \n                                                           \n                                                    <div class=\"col-md-4 form-group\" >\n                                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                                         <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_6_Dose\" />\n                                                              \n                                                     </mat-form-field>\n                                                     </div>  \n                                                     <div class=\"col-md-4 form-group\">\n                                                         <mat-form-field class=\"mat-form-field-fluid\">\n                                                          <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_6_Comments\" />\n                                                               \n                                                      </mat-form-field>\n                                                      </div> \n                                                        </div>\n            \n                                                        <div class=\"form-group  row\">\n                       \n                                                            <div class=\"col-md-4 form-group\" >\n                                                                <mat-form-field class=\"mat-form-field-fluid\">\n                                                                 <input matInput placeholder=\"Medication administered7\" autocomplete=\"off\" formControlName=\"CP_3D_7_Medication_administered\" />\n                                                                      \n                                                             </mat-form-field>\n                                                             </div>  \n                                                                   \n                                                            <div class=\"col-md-4 form-group\" >\n                                                                <mat-form-field class=\"mat-form-field-fluid\">\n                                                                 <input matInput placeholder=\"Dose\" autocomplete=\"off\" formControlName=\"CP_3D_7_Dose\" />\n                                                                      \n                                                             </mat-form-field>\n                                                             </div>  \n                                                             <div class=\"col-md-4 form-group\">\n                                                                 <mat-form-field class=\"mat-form-field-fluid\">\n                                                                  <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"CP_3D_7_Comments\" />\n                                                                       \n                                                              </mat-form-field>\n                                                              </div> \n                                                                </div>\n            \n                                                                <div class=\"form-group  row\">\n                                                                    <div class=\"col-md-12\">\n                                                                            <label align=\"start\">\n                                                                             <h5>Outcome of illness:</h5>  \n                                                                            </label>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"form-group  row\">\n                                                                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                                                                        <div class=\"mat-form-field-fluid\">\n                                                                        <label id=\"example-radio-group-label\">What was the outcome of the case?</label>\n                                                                        </div>\n                                                                     </div>\n                                                                    <div class=\"col-md-4 form-group\">\n                                                                           \n                                                    \n                                                                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3E_outcome_of_the_case\">\n                                                                                <mat-radio-button matInput  value=\"alive\">Alive</mat-radio-button>\n                                                                                <mat-radio-button  matInput value=\"dead\">Dead</mat-radio-button>\n                                                                            </mat-radio-group>\n                                                                    </div>\n                                                    \n                                                                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3E_outcome_of_the_case').value == 'dead'\" >\n                                                                        <mat-form-field class=\"mat-form-field-fluid\">\n                                                                            <input matInput [matDatepicker]=\"doaPicker23\"\n                                                                               autocomplete=\"off\"\n                                                                               (click)=\"doaPicker23.open()\"\n                                                                               placeholder=\"If died, date of death: (dd/mm/yyyy)\" (click)=\"doaPicker23.open()\" formControlName=\"CP_3E_outcome_of_the_case_date_of_death\" />\n                                                                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker23\"></mat-datepicker-toggle>\n                                                                        <mat-datepicker #doaPicker23></mat-datepicker>\n                                                                        </mat-form-field>\n                                                                    </div>\n                                                                </div>    \n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Cause of death due to COVID-19 infection?</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3E_death_due_to_COVID_19\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-4 form-group\" *ngIf=\"form.get('CP_3E_death_due_to_COVID_19').value == 'no'\" >\n                        <mat-form-field>\n                        <input matInput placeholder=\"If death due to other cause, please specify:\" autocomplete=\"off\" formControlName=\"CP_3E_death_due_to_other_cause\" />\n                    \n                        </mat-form-field>\n                    </div>\n                </div> \n                \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                            <label align=\"start\">\n                             <h5>Pre-existing conditions and medical history</h5>  \n                            </label>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">No risk medical conditions:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_No_risk_medical_conditions\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Cardiac disease (not simple hypertension):</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Cardiac_disease\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Chronic lung disease:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Chronic_lung_disease\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Haemoglobinopathies:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Haemoglobinopathies\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Diabetes:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Diabetes\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">If yes, are they on dialysis?</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Diabetes_dialysis\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Immunosuppressive condition:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Immunosuppressive_condition\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('CP_3EE_Immunosuppressive_condition').value == 'yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"If yes, please specify:\" autocomplete=\"off\" formControlName=\"CP_3EE_Immunosuppressive_condition_specify\" />\n                              \n                     </mat-form-field>\n                     </div> \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Liver disease;</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Liver_disease\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>   \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Metabolic disease:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Metabolic_disease\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Neurological disorder:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Neurological_disorder\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Obesity:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Obesity\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Renal disease:</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Renal_disease\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                </div>    \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Other risk medical condition?</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3EE_Other_risk_medical_condition\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3EE_Other_risk_medical_condition').value == 'yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"If yes, please specify:\" autocomplete=\"off\" formControlName=\"CP_3EE_Other_risk_medical_condition_specify\" />\n                              \n                     </mat-form-field>\n                     </div> \n                </div>  \n                \n                <div class=\"form-group  row\">\n                       \n                    <div class=\"col-md-12 form-group\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"Notes:\" autocomplete=\"off\" formControlName=\"CP_3EE_Notes\" />\n                              \n                     </mat-form-field>\n                     </div>   \n                </div>   \n\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-12\">\n                            <label align=\"start\">\n                             <h5>Other risk factors:</h5>  \n                            </label>\n                    </div>\n                </div> \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Is the person currently pregnant or pregnant during the illness?</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3F_currently_pregnant\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                                <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3F_currently_pregnant').value=='yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"If yes, number of weeks gestation at symptom onset:\" autocomplete=\"off\" formControlName=\"CP_3F_currently_pregnant_number_of_weeks_gestation\" />\n                              \n                     </mat-form-field>\n                     </div> \n                </div>  \n                \n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Are they a current smoker?</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3F_current_smoker\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"ExSmoker\">Ex Smoker</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                       \n                    <div class=\"col-md-12 form-group\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"How many years has the participant been smoking for?\" autocomplete=\"off\" formControlName=\"CP_3F_current_smoker_year\" />\n                              \n                     </mat-form-field>\n                     </div>   \n                </div>   \n\n                <div class=\"form-group  row\">\n                       \n                    <div class=\"col-md-12 form-group\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"How many packs/week?\" autocomplete=\"off\" formControlName=\"CP_3F_current_smoker_pack_per_Week\" />\n                              \n                     </mat-form-field>\n                     </div>   \n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Do they consume alcohol?</label>\n                        </div>\n                        </div>\n                    <div class=\"col-md-8 form-group\">\n                            \n    \n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"CP_3F_consume_alcohol\">\n                                <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                                <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                                <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n    \n                    <div class=\"col-md-2 form-group\" *ngIf=\"form.get('CP_3F_consume_alcohol').value=='yes'\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                         <input matInput placeholder=\"If yes, average number of standard drinks per week:\" autocomplete=\"off\" formControlName=\"CP_3F_drinks_per_week\" />\n                              \n                     </mat-form-field>\n                     </div> \n                </div>  \n                \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> General clinical information:</h5>  \n                        </label>\n                </div>\n            </div>\n            \n            <div class=\"form-group  row\">\n                       \n                <div class=\"col-md-12 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Participants blood type:\" autocomplete=\"off\" formControlName=\"PCI_4A_Participants_blood_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4\">\n                        <label align=\"start\">\n                        Participants weight (Kg) and height (cm): \n                        </label>\n                </div>\n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Weight: \" autocomplete=\"off\" formControlName=\"PCI_4A_Participants_Weight\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-4 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Height:\" autocomplete=\"off\" formControlName=\"PCI_4A_Participants_Height\" />\n                          \n                 </mat-form-field>\n                 </div>   \n            </div>\n\n            <div class=\"form-group  row\">\n                 <div class=\"col-md-6\">\n                        <label align=\"start\">\n                         <h5>Immunization record:</h5>  \n                        </label>\n                </div>\n                <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4B_Immunization_record\">\n                            <mat-radio-button matInput  value=\"TakenAllVaccinesAsChild\">Taken All Vaccines As Child</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                   \n                        </mat-radio-group>\n                        </div>\n                    </div>\n\n            </div> \n            \n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Hepatitis B(HepB, Hib-HepB, HepA-HepB, DTaP-HepB-IPV)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Hepatitis_B_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                     \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"Date given\" (click)=\"doaPicker.open()\" formControlName=\"PCI_4B_Hepatitis_B_date_given\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Hepatitis_B_administered_by\" />\n                     \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Deptheria, Tetanus, Pertussis (DTaP, DTP, DT, Td, Tdap, DTaP-HepB-IPV, DTaP-IPV/Hib, DTaP-IPV, DTaP/Hib)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Deptheria_Tetanus_Pertussis_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker2\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker2.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker2.open()\" formControlName=\"PCI_4B_Deptheria_Tetanus_Pertussis_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker2></mat-datepicker>        \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Deptheria_Tetanus_Pertussis_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Haemophilus influenza type b(Hib, Hib-HepB, DTaP-IPV/Hib, DTaP/Hib)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Haemophilus_influenza_type_b_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker3\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker3.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker3.open()\" formControlName=\"PCI_4B_Haemophilus_influenza_type_b_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker3></mat-datepicker>        \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Haemophilus_influenza_type_b_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Pneumococcal\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Pneumococcal_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker4\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker4.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker4.open()\" formControlName=\"PCI_4B_Pneumococcal_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker4\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker4></mat-datepicker>       \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Pneumococcal_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Polio(IPV, OPV, DTaP-HepB-IPV, DTaP-IPV/Hib, DTaP-IPV)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Polio_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker5\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker5.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker5.open()\" formControlName=\"PCI_4B_Polio_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker5\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker5></mat-datepicker>        \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Polio_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Rotavirus(RV1, RV5, RV [unknown])\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Rotavirus_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker6\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker6.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker6.open()\" formControlName=\"PCI_4B_Rotavirus_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker6\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker6></mat-datepicker>   \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Rotavirus_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Measles, Mumps, & Rubella (MMR, MMRV)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Measles_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker7\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker7.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker7.open()\" formControlName=\"PCI_4B_Measles_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker7\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker7></mat-datepicker>     \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Measles_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Varicella (chickenpox)(VAR, MMRV)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Varicella_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker8\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker8.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker8.open()\" formControlName=\"PCI_4B_Varicella_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker8\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker8></mat-datepicker>    \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Varicella_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Hepatitis A (HepA, HepA-HepB)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Hepatitis_A_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker9\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker9.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker9.open()\" formControlName=\"PCI_4B_Hepatitis_A_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker9\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker9></mat-datepicker>    \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Hepatitis_A_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Meningococcal(MCV4, MPSV4)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Meningococcal_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput [matDatepicker]=\"doaPicker10\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker10.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker10.open()\" formControlName=\"PCI_4B_Meningococcal_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker10\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker10></mat-datepicker>         \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Meningococcal_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Human papillomavirus(HPV4, HPV2)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Human_papillomavirus_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker11\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker11.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker11.open()\" formControlName=\"PCI_4B_Human_papillomavirus_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker11\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker11></mat-datepicker>         \n                      \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Human_papillomavirus_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Zoster (shingles)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Zoster_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker12\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker12.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker12.open()\" formControlName=\"PCI_4B_Zoster_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker12\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker12></mat-datepicker>  \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Zoster_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Influenza (yearly)(TIV, LAIV)\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Influenza_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker13\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker13.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker13.open()\" formControlName=\"PCI_4B_Influenza_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker13\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker13></mat-datepicker>     \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Influenza_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Bacillus Calmette–Guérin (BCG) vaccine\n                        </label>\n                </div>\n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Type\" autocomplete=\"off\" formControlName=\"PCI_4B_Bacillus_Calmette_type\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker14\"\n                     autocomplete=\"off\"\n                     (click)=\"doaPicker14.open()\"\n                     placeholder=\"Date given\" (click)=\"doaPicker14.open()\" formControlName=\"PCI_4B_Bacillus_Calmette_date_given\" />\n              <mat-datepicker-toggle matSuffix [for]=\"doaPicker14\"></mat-datepicker-toggle>\n              <mat-datepicker #doaPicker14></mat-datepicker>       \n                 </mat-form-field>\n                 </div>   \n                 <div class=\"col-md-3 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Administered by\" autocomplete=\"off\" formControlName=\"PCI_4B_Bacillus_Calmette_administered_by\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-6\">\n                        <label align=\"start\">\n                         <h5>Allergies:</h5>  \n                        </label>\n                </div>\n\n                <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Allergies\">\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                        </div>\n                    </div>\n\n\n            </div> \n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Asthma (wheezing)\n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Asthma_wheezing_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Asthma_wheezing_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Asthma_wheezing_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Asthma_wheezing_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Other breathing problems \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Other_breathing_problems_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Other_breathing_problems_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Other_breathing_problems_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Other_breathing_problems_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Sinus trouble \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Sinus_trouble_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Sinus_trouble_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Sinus_trouble_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Sinus_trouble_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Hay fever (runny, stuffy, itchy nose; sneezing) \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Hay_fever_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Hay_fever_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Hay_fever_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Hay_fever_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Hives or swelling \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Hives_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Hives_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Hives_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Hives_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Eczema or other rashes \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Eczema_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Eczema_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Eczema_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Eczema_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Frequent infections \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Frequent_infections_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Frequent_infections_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Frequent_infections_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Frequent_infections_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Food reactions \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Food_reactions_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Food_reactions_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Food_reactions_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Food_reactions_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Drug reactions \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Drug_reactions_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-3 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Drug_reactions_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Drug_reactions_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Drug_reactions_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                            Others: \n                        </label>\n                </div>\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Name:\" autocomplete=\"off\" formControlName=\"PCI_4C_Others_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4C_Others_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-1 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Age at onset\" autocomplete=\"off\" formControlName=\"PCI_4C_Others_OnsetAge\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4C_Others_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4C_Others_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-3\">\n                        <label align=\"start\">\n                         <h5>Previous viral infections</h5>  \n                        </label>\n                </div>\n\n                <div class=\"col-md-6 form-group\">\n                    <div>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_Previous_viral_infections\">\n                            <mat-radio-button matInput  value=\"TakenAllVaccinesAsChild\">Taken All Vaccines As Child</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                        </div>\n                    </div>\n                  \n            </div> \n\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 1\" autocomplete=\"off\" formControlName=\"PCI_4D_1_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_1_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_1_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_1_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_1_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 2\" autocomplete=\"off\" formControlName=\"PCI_4D_2_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_2_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_2_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_2_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_2_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 3\" autocomplete=\"off\" formControlName=\"PCI_4D_3_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_3_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_3_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_3_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_3_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 4\" autocomplete=\"off\" formControlName=\"PCI_4D_3_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_4_Viral_Infection_Severity\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n                 <div class=\"col-md-2 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_4_Viral_Infection_year\" />\n                           \n                  </mat-form-field>\n                  </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_4_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_4_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 5\" autocomplete=\"off\" formControlName=\"PCI_4D_5_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_5_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_5_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_5_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_5_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 6\" autocomplete=\"off\" formControlName=\"PCI_4D_6_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_6_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_6_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_6_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_6_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 7\" autocomplete=\"off\" formControlName=\"PCI_4D_7_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_7_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_7_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                 <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_7_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                 <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                 </mat-autocomplete>\n\n                </mat-form-field>\n            </div>   \n                 <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_7_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                  </div>  \n            </div>\n            <div class=\"form-group  row\">\n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Viral Infection 8\" autocomplete=\"off\" formControlName=\"PCI_4D_8_Viral_Infection_Name\" />\n                          \n                 </mat-form-field>\n                 </div>   \n                <div class=\"col-md-2 form-group\" >\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PCI_4D_8_Viral_Infection_YesNo\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                 </div>   \n\n                <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"Year of infection\" autocomplete=\"off\" formControlName=\"PCI_4D_8_Viral_Infection_year\" />\n                          \n                 </mat-form-field>\n                 </div>   \n\n                 <div class=\"col-md-2 form-group\" >\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     \n                    <input matInput placeholder=\"Severity\" formControlName=\"PCI_4D_8_Viral_Infection_Severity\" [matAutocomplete]=\"edu\">\n                    <mat-autocomplete #edu=\"matAutocomplete\">\n                     <mat-option  value=\"Mild\">Mild</mat-option>\n                     <mat-option  value=\"Mod\">Mod</mat-option>\n                     <mat-option  value=\"Sev.\">Sev.</mat-option>\n                    </mat-autocomplete>\n\n                    </mat-form-field>\n                </div>   \n\n                <div class=\"col-md-4 form-group\" >\n                     <mat-form-field class=\"mat-form-field-fluid\">\n                      <input matInput placeholder=\"Comments\" autocomplete=\"off\" formControlName=\"PCI_4D_8_Viral_Infection_Comments\" />\n                           \n                  </mat-form-field>\n                </div> \n            \n              \n    \n            </div>\n           \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div autocomplete=\"off\"  class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n\n            <!-- Upload  -->\n            <form id=\"file-upload-form\" class=\"uploader\">\n                <input  accept=\"application/pdf\"  multiple (change)=\"onSelectFile($event)\" id=\"file-upload\" type=\"file\" name=\"fileUpload\" />\n\n                <label for=\"file-upload\" id=\"file-drag\">\n                    <div id=\"start\">\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        <div> </div>\n                        <div id=\"notimage\" *ngIf=\"error\">{{sMsg}}</div>\n                        <span id=\"file-upload-btn\" class=\"btn btn-primary\">Select a file</span>\n                    </div>\n                </label>\n\n                <div id=\"response\" >\n                    <div class=\"col-md-12 \">\n                        <ng-container *ngFor=\"let file of myFiles;let i=index;\">\n                            <div class=\"col-md-12 row file-row form-group\" >\n                                <div class=\"col-md-10\">\n                                    <p [style.fontWeight]=\" file.isUpload ? 'bold' : '400' \"> <a *ngIf=\"file.isUpload;else uploaded\" target=\"_blank\" [href]=\"mediaPath+'/Documents/'+saveFormId+ '_' + file.name\">{{file.name}}</a> <ng-template #uploaded> <p data-attr=\"test\">{{file.name}}</p> </ng-template> </p>\n                                </div>\n                                <div class=\"col-md-2\" style=\"text-align: right;cursor: pointer\">\n                                    <i (click)=\"deleteDocument(file,i)\"  class=\"mat-tab-label-icon fa fa-trash\"></i>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n\n\n            </form>\n\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> Healthcare and hospital presentations</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did the case present to a hospital in the 14 days prior to onset with COVID-19 symptoms?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"Date of presentation to a hospital: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker.open()\" formControlName=\"ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did the case present to a hospital during the 14days prior to onset with other symptoms?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"ES_5A_present_to_hospital_in_14_days_other_symptoms\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_other_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker2\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker2.open()\"\n                       placeholder=\"Date of presentation to a hospital: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker2.open()\" formControlName=\"ES_5A_present_to_hospital_in_14_days_other_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker2></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('ES_5A_present_to_hospital_in_14_days_other_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_hospital_in_14_days_other_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>  \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did the case present to any other healthcare facility in the 14 days prior to onset with COVID-19 symptoms? (e.g. GP practice) </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker3\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker3.open()\"\n                       placeholder=\"Date of presentation to a hospital:  (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker3.open()\" formControlName=\"ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker3></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            <div class=\"col-md-2 form-group\"  *ngIf=\"form.get('ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Give details of the presentation and illness below:\" autocomplete=\"off\" formControlName=\"ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_detail_of_illness\" />\n                      \n             </mat-form-field>\n             </div>  \n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n        <div class=\"row \">\n            <div class=\"col-md-12 form-group\">\n                <h6>\n                    Laboratory Details (Filled by research members)\n                </h6>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4\">\n                <div class=\"kt-section\">\n                    <label align=\"start\">\n                        Sample Type\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"LD_7_blood\">Blood</mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"LD_7_saliva\">Saliva </mat-checkbox>\n                    <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"LD_7_tissue\">Tissue </mat-checkbox>\n                     <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"LD_7_sample_type_other\">Other</mat-checkbox>\n                    <div class=\"col-md-12 row\" [hidden]=\"!form.get('LD_7_sample_type_other').value\">\n                        <mat-form-field   class=\"mat-form-field-fluid\">\n                            <input   type=\"text\" matInput placeholder=\"If other, Please specify\" formControlName=\"LD_7_sample_type_other_txt\" autocomplete=\"off\"    />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"dobPicker\"\n                           (click)=\"dobPicker.open()\"\n                           [max]=\"maxDate\"\n                           autocomplete=\"off\"\n                           placeholder=\"Sample receiving date\" formControlName=\"LD_7_sample_received_date\" />\n                    <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #dobPicker></mat-datepicker>\n                    <!--<mat-hint align=\"start\">Please enter-->\n                    <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                </mat-form-field>\n            </div>\n            \n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Storage\" autocomplete=\"off\" formControlName=\"LD_7_storage\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Sample Volume\" autocomplete=\"off\" formControlName=\"LD_7_sample_volume\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Project Code\" autocomplete=\"off\" formControlName=\"LD_7_project_code\" />\n                </mat-form-field>\n            </div>\n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"Test Code\" autocomplete=\"off\" formControlName=\"LD_7_test_code\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <textarea matInput placeholder=\"Comments\" rows=\"5\" autocomplete=\"off\" formControlName=\"LD_7_comments\" >\n                        </textarea>\n                </mat-form-field>\n            </div>\n        </div>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n            <div class=\"form-group  row\">\n                \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Sample Id\" autocomplete=\"off\" formControlName=\"sample\" />\n                        <mat-error>Sample Id is\n                            <strong>required</strong>\n                        </mat-error>\n                        \n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"COVID-19 ID\" autocomplete=\"off\" formControlName=\"COVID19_ID\" />\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Depository ID\" autocomplete=\"off\" formControlName=\"depository_ID\" />\n                    </mat-form-field>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <h6>Platform</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Panel\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Panel</label>\n                        </div>\n                        <input matInput placeholder=\"\" formControlName=\"GWAS\" />\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"Microarray\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">Microarray</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"EXOME\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-2  form-group \">\n                    <mat-form-field floatPlaceholder=\"WES\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WES</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WES\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n \n                <div class=\"col-md-2 form-group \">\n                    <mat-form-field floatPlaceholder=\"WGS\"  class=\"mat-form-field-fluid\">\n                        <div class=\"kt-section\">\n                            <label align=\"start\">WGS</label>\n                        </div>\n                        <input  matInput  style=\"display: none\">\n                        <mat-radio-group formControlName=\"WGS\" >\n                            <mat-radio-button  value=\"Yes\">Yes</mat-radio-button>\n                            <mat-radio-button  value=\"No\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </mat-form-field>\n                </div>\n           \n                <div class=\"col-md-4 form-group\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <div class=\"kt-section\"><br><br>\n                            <input matInput placeholder=\"If Others, please specify\" formControlName=\"Platform_Others\" />\n                        </div>\n                        </mat-form-field>\n                </div>\n            \n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\"><strong> Severity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>\n\n                       <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"Severity\">\n                            <mat-radio-button matInput  value=\"Severe\">Severe</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Moderate\">Moderate</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Mild\">Mild</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Asymptomatic\">Asymptomatic</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Healthy\">Healthy</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n            \n\n\n                    <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Project Title\"\n                                   autocomplete=\"off\"\n                                   formControlName=\"projecttitle\" />\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Principal Investigator\"\n                                   autocomplete=\"off\"\n                                   formControlName=\"principalinvestigator\" />\n                        </mat-form-field>\n                    </div>\n            </div>\n              \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collection Point\"\n                               autocomplete=\"off\"\n                               formControlName=\"collection_point\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collection Point</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Collected by\" autocomplete=\"off\" formControlName=\"collected_by\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Collected by</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"doaPicker\"\n                               autocomplete=\"off\"\n                               (click)=\"doaPicker.open()\"\n                               placeholder=\"Collection Date\" (click)=\"doaPicker.open()\" formControlName=\"collected_date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #doaPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of assessment</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\"> Individual/Family&nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"indifamily\">\n                            <mat-radio-button matInput  value=\"Individual\">Individual</mat-radio-button>\n                            <mat-radio-button  matInput value=\"Family\">Family</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Family Number\" autocomplete=\"off\" formControlName=\"family_number\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Family Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">If Family &nbsp;&nbsp;&nbsp;</label>\n                </div>\n            </div>\n            <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"family_yes\">\n                        <mat-radio-button matInput  value=\"Father\">Father</mat-radio-button>\n                        <mat-radio-button  matInput value=\"Mother\">Mother</mat-radio-button>\n                        <mat-radio-button matInput  value=\"Adult\">Adult Less than 18 </mat-radio-button>\n                        <mat-radio-button  matInput value=\"Child\">Child</mat-radio-button>\n                    </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n        <div class=\"form-group  row\">\n            \n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <label align=\"start\">\n                        Was an interpreted used?\n                    </label>\n                </div>\n            </div>\n            <div class=\"col-md-4 form-group\" >\n                <mat-radio-group aria-labelledby=\"interpreted_used\"  formControlName=\"interpreted_used\">\n                    <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                </mat-radio-group>\n            </div>\n\n            <div class=\"col-md-4 form-group\" *ngIf=\"form.get('interpreted_used').value == 'yes'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If yes, name of interpreter and language spoken:\"\n                        formControlName=\"interpreted_language\" />\n                </mat-form-field>\n            </div>\n\n       </div>\n\n       <div class=\"form-group  row\">\n                    \n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n            <label id=\"example-radio-group-label\">Reason for interview: (Tick all that applies)</label>\n        </div>\n    </div>\n    <div class=\"col-md-8 form-group\">\n        <div>\n\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_contact_with_known_case\">Contact with known case</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_Overseas_travel\">Overseas travel</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_Symptomatic_of_disease\">Symptomatic of disease</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_Reported_recent_risk_exposure_contact\">Reported recent risk exposure/contact</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_Occupational_exposure\">Occupational exposure</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"interview_reason_other\">Other</mat-checkbox>\n            <div *ngIf=\"form.get('interview_reason_other').value\"  class=\"dis-con\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"other\"\n                               formControlName=\"interview_reason_other_remarks\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n          \n<div class=\"form-group  row\">\n    <div class=\"col-md-12\">\n            <label align=\"start\">\n             <h5>Participant’s Personal Details </h5>  \n            </label>\n    </div>\n</div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"First Name\" autocomplete=\"off\" formControlName=\"per_firstname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>First Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Middle Name\" autocomplete=\"off\" formControlName=\"per_middlename\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Middle Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Last Name\" autocomplete=\"off\" formControlName=\"per_lastname\" />\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Family Name</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\">Gender &nbsp;&nbsp;&nbsp;</label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"gender\">\n                            <mat-radio-button matInput  value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button  matInput value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n\n                    </div>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Emirates ID number\" autocomplete=\"off\" formControlName=\"emiratesid\" />\n                       </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Nationality\" formControlName=\"nationality\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let nationality of filteredNationalities | async\" [value]=\"nationality\">\n                                {{ nationality }}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Nationality is\n                            <strong>required</strong>\n                        </mat-error>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Nationality</strong>-->\n                        <!--</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               (ngModelChange)=\"CalculateAge()\" \n                               placeholder=\"Choose a Date of Birth\" formControlName=\"dob\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Age\"  autocomplete=\"off\"   formControlName=\"Age\" />\n                    </mat-form-field>\n                </div>\n               \n<div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n    <mat-form-field class=\"mat-form-field-fluid\">\n        <input matInput placeholder=\"Place Of Birth\" autocomplete=\"off\"\n               [matAutocomplete]=\"manuf1\"       formControlName=\"PlaceOfBirth\" />\n    \n        <mat-autocomplete #manuf1=\"matAutocomplete\">\n            <mat-option *ngFor=\"let data of filteredPlaces | async\" [value]=\"data\">\n                {{ data }}\n            </mat-option>\n        </mat-autocomplete>\n    \n    </mat-form-field>\n    </div>\n    \n                  \n            \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"City\"\n                                   formControlName=\"city\" />\n                            <!--<mat-hint align=\"start\">Please enter-->\n                            <!--<strong>Number Of Wives</strong>-->\n                            <!--</mat-hint>-->\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Phone\" autocomplete=\"off\" formControlName=\"phone\" />\n                           </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Email\" autocomplete=\"off\" formControlName=\"email\" />\n                           </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Ethnicity &nbsp;&nbsp;&nbsp;</label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                    <div>\n                            <mat-radio-group aria-labelledby=\"Ethnicity\"  formControlName=\"ethnicity\">\n                                <mat-radio-button matInput  value=\"arab\">Arab/Bedouin</mat-radio-button>\n                                <mat-radio-button  matInput value=\"ajam\">Ajam</mat-radio-button>\n                                <mat-radio-button  matInput value=\"bloush\">Bloush</mat-radio-button>\n                                <mat-radio-button  matInput value=\"southasian\">South Asian</mat-radio-button>\n                                <mat-radio-button  matInput value=\"africanamerican\">African American</mat-radio-button>\n                                <mat-radio-button  matInput value=\"mixed\">Mixed</mat-radio-button>\n                                <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                                <mat-radio-button  matInput value=\"eastasian\">East Asian</mat-radio-button>\n                                <mat-radio-button  matInput value=\"african\">African</mat-radio-button>\n                                <mat-radio-button  matInput value=\"nativeamerican\">Native American</mat-radio-button>\n                                <mat-radio-button  matInput value=\"hispanic\">hispanic</mat-radio-button>\n                                <mat-radio-button  matInput value=\"caucasian\">Caucasian</mat-radio-button>\n                            </mat-radio-group>\n    \n                        </div>\n                        <div *ngIf=\"form.get('ethnicity').value == 'mixed'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Mixed, specify\"\n                                    formControlName=\"ethnicity_mixed_specify_text\" />\n                            </mat-form-field>\n                        </div>\n                        <div *ngIf=\"form.get('ethnicity').value == 'other'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Other, specify\"\n                                    formControlName=\"ethnicity_others_text\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                        <label id=\"example-radio-group-label\">Address</label>\n                    </div>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                    <div>\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"Address\"\n                                formControlName=\"Address\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <div class=\"mat-form-field-fluid\">\n                            <label id=\"example-radio-group-label\">Address type  &nbsp;&nbsp;&nbsp;</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\">\n                        <div>\n                            <mat-radio-group aria-labelledby=\"Address_type\"  formControlName=\"Address_type\">\n                                <mat-radio-button matInput  value=\"household\">Household</mat-radio-button>\n                                <mat-radio-button  matInput value=\"aged-carefacility\">Aged-care facility</mat-radio-button>\n                                <mat-radio-button  matInput value=\"educationalinstitution\">Educational Institution</mat-radio-button>\n                                <mat-radio-button  matInput value=\"other\">Other:</mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n\n                        <div *ngIf=\"form.get('Address_type').value == 'other'\" >\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"If Other, specify\"\n                                    formControlName=\"Address_type_other\" />\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <div class=\"mat-form-field-fluid\">\n                            <label id=\"example-radio-group-label\">Marital Status &nbsp;&nbsp;&nbsp;</label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\">\n                        <div>\n                            <mat-radio-group aria-labelledby=\"marital_status\"  formControlName=\"maritalstatus\">\n                                <mat-radio-button matInput  value=\"single\">Single</mat-radio-button>\n                                <mat-radio-button  matInput value=\"married\">Married</mat-radio-button>\n                                 <mat-radio-button  matInput value=\"divorced\">Divorced</mat-radio-button>\n                                <mat-radio-button  matInput value=\"widow\">Widowed</mat-radio-button>\n                                </mat-radio-group>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group  row\">\n                    \n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                Consanguineous Marriage?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 form-group\" >\n                        <mat-radio-group aria-labelledby=\"Consanguineous_Marrage\"  formControlName=\"marriage_con\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n\n                     <!-- <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                What is the highest grade (or year) of regular school you have completed? (check one)\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\" >\n                        <mat-radio-group aria-labelledby=\"highest_grade\"  formControlName=\"highest_grade\">\n                            <mat-radio-button matInput  value=\"males\">Elementary/Middle School:  01    02    03    04    05    06    07   08</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">High School:  09    10    11    12</mat-radio-button>\n                            <mat-radio-button  matInput value=\"notapplicable\">University/College/Junior College:  13     14    15    16</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">Graduate School:  17     18     19    20+</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">Other</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">Prefer not to disclose</mat-radio-button>\n                            </mat-radio-group>\n                    </div>\n                    <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                        <div class=\"mat-form-field-fluid\">\n                            <label align=\"start\">\n                                What is the highest degree you earned?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8 form-group\" >\n                        <mat-radio-group aria-labelledby=\"highest_degree_earned\"  formControlName=\"highest_degree_earned\">\n                            <mat-radio-button matInput  value=\"males\">High school diploma or equivalency (GED)</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">Associate degree (junior college) or vocational degree/license</mat-radio-button>\n                            <mat-radio-button matInput  value=\"males\">Bachelor’s degree</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">Master’s degree</mat-radio-button>\n                            <mat-radio-button matInput  value=\"males\">Doctorate, Professional (MD, JD, DDS)</mat-radio-button>\n                            <mat-radio-button  matInput value=\"females\">None of the above</mat-radio-button>\n                            <mat-radio-button matInput  value=\"males\">Other, please specify: </mat-radio-button>\n                            </mat-radio-group>\n                    </div> -->\n               </div>\n                        \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                    Number of children, and their ages: \n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Males\"\n                       formControlName=\"pers_NumberofChildren\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Ages: \"\n                       formControlName=\"pers_Boys\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If male, number of wives \"\n                       formControlName=\"pers_Numberofwives\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                    \n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Females: \"\n                       formControlName=\"pers_Girls\" />\n                <!--<mat-hint align=\"start\">Please enter-->\n                <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n                <!--</mat-hint>-->\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n           <mat-form-field class=\"mat-form-field-fluid\">\n               <input matInput placeholder=\"Ages:\"\n                      formControlName=\"pers_Girls_ages\" />\n               <!--<mat-hint align=\"start\">Please enter-->\n               <!--<strong>Number Of ChilNumberofchildrendren</strong>-->\n               <!--</mat-hint>-->\n           </mat-form-field>\n       </div>\n\n    </div>\n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\n                    \n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"highestlevelofeducation\" formControlName=\"eduLevel\" [matAutocomplete]=\"edu\">\n                <mat-autocomplete #edu=\"matAutocomplete\">\n                    <mat-option  value=\"didnotattendschool\">Did not attend school</mat-option>\n                    <mat-option  value=\"lessthanhighschool\">Less than high school</mat-option>\n                    <mat-option  value=\"completedhighschool\">Completed High School</mat-option>\n                    <mat-option  value=\"completedbachelorordiploma\">Completed bachelor or diploma</mat-option>\n                    <mat-option  value=\"completedmasterorPhD\">Completed master or PhD</mat-option>\n                    <mat-option  value=\"notsure\">Not sure</mat-option>\n                    <mat-option  value=\"prefernottodisclose\">Prefer not to disclose</mat-option>\n                </mat-autocomplete>\n                <mat-error>\n                    Education level is\n                    <strong>required</strong>\n                </mat-error>\n            </mat-form-field>\n        </div>\n\n                <div class=\"col-md-6 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Employment Status\" formControlName=\"employment_status\" [matAutocomplete]=\"empstatus\">\n                        <mat-autocomplete #empstatus=\"matAutocomplete\">\n                            <mat-option  value=\"employed(including-self-employement)\">Employed (including self-employement)</mat-option>\n                            <mat-option  value=\"unemployment\">Unemployment</mat-option>\n                            <mat-option  value=\"retired\">Retired</mat-option>\n                            <mat-option  value=\"student\">Student</mat-option>\n                            <mat-option  value=\"housewife\">Housewife</mat-option>\n                            <mat-option  value=\"notsure\">Not sure</mat-option>\n                            <mat-option  value=\"prefernottodisclose\">Prefer not to disclose</mat-option>\n                        </mat-autocomplete>\n                        <mat-error>\n                            Education level is\n                            <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n            </div>\n           \n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n               \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> High-risk occupation</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">During the period of interest, did the person work in any of the following high-risk occupations?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6A_work_in_highrisk_occupations\">\n                            <mat-radio-button matInput  value=\"healthcare\">Healthcare</mat-radio-button>\n                            <mat-radio-button  matInput value=\"aged-carefacility\">Aged-care facility</mat-radio-button>\n                            <mat-radio-button  matInput value=\"educationalfacility\">Educational facility</mat-radio-button>\n                            <mat-radio-button  matInput value=\"assistedliving\">Assisted living</mat-radio-button>\n                            <mat-radio-button  matInput value=\"militaryinstitution\">Military institution</mat-radio-button>\n                            <mat-radio-button  matInput value=\"correctionalfacility\">Correctional facility</mat-radio-button>\n                            <mat-radio-button  matInput value=\"nohigh-riskoccupation\">No high-risk occupation</mat-radio-button>\n                            <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-6 form-group\" *ngIf=\"form.get('PC_6A_work_in_highrisk_occupations').value == 'other'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If other, specify:\" autocomplete=\"off\" formControlName=\"PC_6A_work_in_highrisk_occupations_others\" />\n                          \n                 </mat-form-field>\n                 </div>  \n            <div class=\"col-md-6 form-group\" *ngIf=\"form.get('PC_6A_work_in_highrisk_occupations').value == 'other'\" >\n                \n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"Date last attended this work: (dd/mm/yyyy): ______/_______/____________\" (click)=\"doaPicker.open()\" formControlName=\"PC_6A_work_in_highrisk_occupations_Last_date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n                </mat-form-field>\n                \n            </div>\n\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Was the infection likely acquired in the workplace? </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6A_infection_likely_acquired_in_workplace\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n            <div class=\"col-md-4 form-group\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                 <input matInput placeholder=\"Description of occupation:\" autocomplete=\"off\" formControlName=\"PC_6A_Description_of_occupation\" />\n                      \n             </mat-form-field>\n             </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Employer/facility details:\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_details\" />\n                               </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Address:\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_address\" />\n                               </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Emirates\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_emirates\" />\n                               </mat-form-field>\n                        </div>\n            </div>\n            <div class=\"form-group  row\">\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"E-mail:\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_email\" />\n                               </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Phone number:\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_phone\" />\n                               </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Employer contact name:\" autocomplete=\"off\" formControlName=\"PC_6A_Employer_facility_contact_name\" />\n                               </mat-form-field>\n                        </div>\n               \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>High-risk setting</h5>  \n                        </label>\n                </div>\n            </div> \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5> While infectious, did they visit any of the following venues or locations?</h5>  \n                        </label>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Doctor’s room/clinic/emergency department</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_doctor\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Schools/university/TAFE </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_Schools\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Aged-care facility/assisted living </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_Aged_care_facility\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Transport (plane/train/bus/ship) </label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_Transport\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Concert venue/theatre/conference</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_Concert\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Office/workplace</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_Office\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Other public venue/gathering</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-6 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6B_infectious_visited_venues_other\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                            <mat-radio-button  matInput value=\"DataNotAvailable\">Data Not Available</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n\n                        </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\" *ngIf=\"form.get('PC_6B_infectious_visited_venues_other').value == 'yes'\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If yes, give details:\" autocomplete=\"off\" formControlName=\"PC_6B_infectious_visited_venues_other_detail\" />\n                          \n                 </mat-form-field>\n                 </div>  \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>Close contacts</h5>  \n                        </label>\n                </div>\n            </div> \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">While infectious, did they have close contact with any of the following:</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PC_6C_infectious_close_contact\">\n                            <mat-radio-button matInput  value=\"familymembers\">Family members</mat-radio-button>\n                            <mat-radio-button  matInput value=\"housemates\">House mates</mat-radio-button>\n                            <mat-radio-button  matInput value=\"friends\">Friends</mat-radio-button>\n                            <mat-radio-button  matInput value=\"NotSure\">Not Sure</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                     <input matInput placeholder=\"If yes, give details below: (including name, phone number, e-mail address)\" autocomplete=\"off\" formControlName=\"PC_6C_infectious_close_contact_details\" />\n                          \n                 </mat-form-field>\n                 </div>  \n            </div>\n\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <form autocomplete=\"off\" [formGroup]=\"form\" class=\"kt-form kt-form--group-seperator-dashed\">\n\n        <!--<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"-->\n                  <!--(close)=\"onAlertClose($event)\">-->\n            <!--Oh snap! Change a few things up and try submitting again.-->\n        <!--</kt-alert>-->\n        <div class=\"kt-form__section kt-form__section--first\">\n              \n            \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>Travel in the risk period</h5>  \n                        </label>\n                </div>\n            </div>\n            <div class=\"form-group  row\">\n                <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Have you traveled outside the country/emirate/region in the 14 days before the onset?</label>\n                    </div>\n                 </div>\n                <div class=\"col-md-4 form-group\">\n                       \n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TRP_traveled_outside\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n               \n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Country\" formControlName=\"TRP_traveled_outside_country\" [matAutocomplete]=\"manuf\">\n                        <mat-autocomplete #manuf=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let TRP_traveled_outside_country of filteredNationalities | async\" [value]=\"TRP_traveled_outside_country\">\n                                {{ TRP_traveled_outside_country }}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"City-region:\" autocomplete=\"off\" formControlName=\"TRP_traveled_outside_city\" />\n                       </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  row\">\n                \n            <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                <div class=\"mat-form-field-fluid\">\n                    <label align=\"start\">\n                        Flight details (return to the UAE)\n                    </label>\n                </div>\n            </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Flight number:\" autocomplete=\"off\" formControlName=\"TRP_flight_no\" />\n                       </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    \n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"Seat:\" autocomplete=\"off\" formControlName=\"TRP_seat_no\" >\n                        \n                    </mat-form-field>\n                </div>\n            </div>\n           \n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker\"\n                               (click)=\"dobPicker.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Arrival date: (dd/mm/yyyy)\" formControlName=\"TRP_Arrival_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput [matDatepicker]=\"dobPicker1\"\n                               (click)=\"dobPicker1.open()\"\n                               [max]=\"maxDate\"\n                               autocomplete=\"off\"\n                               placeholder=\"Departure date: (dd/mm/yyyy)\" formControlName=\"TRP_Departure_Date\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #dobPicker1></mat-datepicker>\n                        <!--<mat-hint align=\"start\">Please enter-->\n                        <!--<strong>Date of Birth</strong> in 'mm/dd/yyyy' format</mat-hint>-->\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Did you travel with an organized tour?</label>\n                </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TRP_travel_with_organized_tour\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                \n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">Type of accommodation:</label>\n                </div>\n                </div>\n                <div class=\"col-md-8 form-group\">\n                <div>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TRP_Type_of_accommodation\">\n                        <mat-radio-button matInput  value=\"private\">Private</mat-radio-button>\n                        <mat-radio-button  matInput value=\"camping\">Camping</mat-radio-button>\n                        <mat-radio-button matInput  value=\"hotel\">Hotel</mat-radio-button>\n                        <mat-radio-button  matInput value=\"hostel\">Hostel</mat-radio-button>\n                        <mat-radio-button  matInput value=\"other\">Other</mat-radio-button>\n                        <mat-radio-button  matInput value=\"unknown\">Unknown</mat-radio-button>\n                                \n                    </mat-radio-group>\n                    </div>\n\n                    <div *ngIf=\"form.get('TRP_Type_of_accommodation').value == 'other'\" >\n                        <mat-form-field class=\"mat-form-field-fluid\">\n                            <input matInput placeholder=\"If Other, specify\"\n                                formControlName=\"TRP_Type_of_accommodation_other\" />\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group  row\">\n                <div class=\"col-md-12 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n\n                        <label id=\"example-radio-group-label\"> Able to enter travel-specific details? (i.e. mode of transport, flight numbers, etc.)\n                        </label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TRP_Able_to_enter_travel_specific_details\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group  row\">\n                    \n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n            <label id=\"example-radio-group-label\">If yes, check modes of transportation (check all that applies):</label>\n        </div>\n    </div>\n    <div class=\"col-md-8 form-group\">\n        <div>\n\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"TRP_modes_of_transportation_Airplane\">Airplane</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"TRP_modes_of_transportation_Ship\">Ship/boat/ferry</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"TRP_modes_of_transportation_Bus\">Bus</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"TRP_modes_of_transportation_Train\">Train</mat-checkbox>\n            <mat-checkbox class=\"lab-mar-right-15\"   formControlName=\"TRP_modes_of_transportation_Other\">Other</mat-checkbox>\n            <div *ngIf=\"form.get('TRP_modes_of_transportation_Other').value\"  class=\"dis-con\">\n                <div class=\"col-md-4 form-group\">\n                    <mat-form-field class=\"mat-form-field-fluid\">\n                        <input matInput placeholder=\"other\"\n                               formControlName=\"TRP_modes_of_transportation_Other_text\" />\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\n    </div>\n            </div>\n\n\n                <div class=\"form-group  row\">\n                <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                    <div class=\"mat-form-field-fluid\">\n                    <label id=\"example-radio-group-label\">In transit/stop over?</label>\n                </div>\n                 </div>\n                <div class=\"col-md-8 form-group\">\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"TRP_Transit_stopover\">\n                            <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                            <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                </div>\n            \n                <div class=\"form-group  row\">\n                \n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Other travel information:\" formControlName=\"TRP_Other_travel_Information\" />\n                               </mat-form-field>\n                        </div>\n                        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n                            \n                            <mat-form-field class=\"mat-form-field-fluid\">\n                                <input matInput placeholder=\"Notes:\" formControlName=\"TRP_Other_travel_Information_Notes\" >\n                                \n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"form-group  row\">\n                        <div class=\"col-md-12\">\n                                <label align=\"start\">\n                                 <h5> Other travel information:</h5>  \n                                </label>\n                        </div>\n                    </div>                 \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                   Other travel information:1\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput [matDatepicker]=\"doaPicker\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker.open()\"\n                       placeholder=\"Date:\" (click)=\"doaPicker.open()\" formControlName=\"OTI_1_Date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Seat/Cabin: \"\n                       formControlName=\"OTI_1_Seat_Cabin\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Carrier:\"\n                       formControlName=\"OTI_1_Carrier\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Departed from: _\"\n                       formControlName=\"OTI_1_Departed_from\" />\n            </mat-form-field>\n        </div> \n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Flight#:____\"\n                       formControlName=\"OTI_1_Flight\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Arrived in:____\"\n                       formControlName=\"OTI_1_Arrived_in\" />\n            </mat-form-field>\n        </div>\n    </div>\n                                    \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                   Other travel information:2\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput [matDatepicker]=\"doaPicker2\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker2.open()\"\n                       placeholder=\"Date:\" (click)=\"doaPicker2.open()\" formControlName=\"OTI_2_Date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker2\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker2></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Seat/Cabin: \"\n                       formControlName=\"OTI_2_Seat_Cabin\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Carrier:\"\n                       formControlName=\"OTI_2_Carrier\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Departed from: _\"\n                       formControlName=\"OTI_2_Departed_from\" />\n            </mat-form-field>\n        </div> \n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Flight#:____\"\n                       formControlName=\"OTI_2_Flight\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Arrived in:____\"\n                       formControlName=\"OTI_2_Arrived_in\" />\n            </mat-form-field>\n        </div>\n    </div>\n                                        \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                   Other travel information:3\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput [matDatepicker]=\"doaPicker3\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker3.open()\"\n                       placeholder=\"Date:\" (click)=\"doaPicker3.open()\" formControlName=\"OTI_3_Date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker3\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker3></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Seat/Cabin: \"\n                       formControlName=\"OTI_3_Seat_Cabin\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Carrier:\"\n                       formControlName=\"OTI_3_Carrier\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Departed from: _\"\n                       formControlName=\"OTI_3_Departed_from\" />\n            </mat-form-field>\n        </div> \n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Flight#:____\"\n                       formControlName=\"OTI_3_Flight\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Arrived in:____\"\n                       formControlName=\"OTI_3_Arrived_in\" />\n            </mat-form-field>\n        </div>\n    </div>\n                                        \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                   Other travel information:4\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput [matDatepicker]=\"doaPicker4\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker4.open()\"\n                       placeholder=\"Date:\" (click)=\"doaPicker4.open()\" formControlName=\"OTI_4_Date\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker4\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker4></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Seat/Cabin: \"\n                       formControlName=\"OTI_4_Seat_Cabin\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Carrier:\"\n                       formControlName=\"OTI_4_Carrier\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Departed from: _\"\n                       formControlName=\"OTI_4_Departed_from\" />\n            </mat-form-field>\n        </div> \n        <div class=\"col-md-1 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Flight#:____\"\n                       formControlName=\"OTI_4_Flight\" />\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-2 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"Arrived in:____\"\n                       formControlName=\"OTI_4_Arrived_in\" />\n            </mat-form-field>\n        </div>\n    </div>\n              \n            <div class=\"form-group  row\">\n                <div class=\"col-md-12\">\n                        <label align=\"start\">\n                         <h5>Contact with a known possible case (during period of interest):</h5>  \n                        </label>\n                </div>\n            </div> \n    <div class=\"form-group  row\">\n        <div class=\"col-md-8 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n            <label id=\"example-radio-group-label\">Did the case come in contact with a known or possible COVID-19 case?</label>\n            </div>\n         </div>\n        <div class=\"col-md-4 form-group\">\n               \n\n                <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PRH_2D_contact_with_possible_COVID_19\">\n                    <mat-radio-button matInput  value=\"yes\">Yes</mat-radio-button>\n                    <mat-radio-button  matInput value=\"no\">No</mat-radio-button>\n                    <mat-radio-button  matInput value=\"DontRemember\">Don't Remember</mat-radio-button>\n                </mat-radio-group>\n        </div>\n\n\n        <div *ngIf=\"form.get('PRH_2D_contact_with_possible_COVID_19').value == 'yes'\" >\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput placeholder=\"If yes, specify\"\n                    formControlName=\"PRH_2D_contact_with_possible_COVID_19_specify\" />\n            </mat-form-field>\n        </div>\n    </div>\n                                   \n    <div class=\"form-group  row\">\n\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n                <label align=\"start\">\n                    Date of last contact: (dd/mm/yyyy)\n                </label>\n            </div>\n        </div>\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n                <input matInput [matDatepicker]=\"doaPicker1\"\n                       autocomplete=\"off\"\n                       (click)=\"doaPicker1.open()\"\n                       placeholder=\"_____/______/___________\" (click)=\"doaPicker1.open()\" formControlName=\"PRH_2D_Date_of_last_contact\" />\n                <mat-datepicker-toggle matSuffix [for]=\"doaPicker1\"></mat-datepicker-toggle>\n                <mat-datepicker #doaPicker1></mat-datepicker>\n            </mat-form-field>\n        </div>\n    </div>\n\n\n    <div class=\"form-group  row\">\n        <div class=\"col-md-4 kt-margin-bottom-20-mobile\">\n            <div class=\"mat-form-field-fluid\">\n            <label id=\"example-radio-group-label\">Likely source of infection:</label>\n        </div>\n        </div>\n        <div class=\"col-md-8 form-group\">\n        <div>\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\"  formControlName=\"PRH_2D_Likely_source_of_infection\">\n                <mat-radio-button matInput  value=\"acquiredoversees\">Acquired oversees</mat-radio-button>\n                <mat-radio-button  matInput value=\"acquiredinterstate\">Acquired interstate</mat-radio-button>\n                <mat-radio-button matInput  value=\"locallyacquiredhealthcareassociatedexposure\">Locally acquired – Healthcare associated exposure</mat-radio-button>\n                <mat-radio-button  matInput value=\"locallyacquiredContactwithaknowncaseother\">Locally acquired – Contact with a known case-Other</mat-radio-button>\n                <mat-radio-button  matInput value=\"LocallyacquiredcontactwithaknowncaseHouseHold\">Locally acquired – Contact with a known case – HouseHold</mat-radio-button>\n                <mat-radio-button  matInput value=\"locallyacquiredSourcenotidentified\">Locally acquired – Source not identified</mat-radio-button>\n                <mat-radio-button  matInput value=\"underinvestigation\">Under investigation</mat-radio-button>\n                <mat-radio-button  matInput value=\"locallyacquiredpartofaknownclusterdetails\">Locally acquired – Part of a known cluster – Details:</mat-radio-button>\n                <mat-radio-button  matInput value=\"Others\">Others</mat-radio-button>        \n            </mat-radio-group>\n            </div>\n\n            <div class=\"col-md-2 form-group\" *ngIf=\"form.get('PRH_2D_Likely_source_of_infection').value == 'locallyacquiredpartofaknownclusterdetails'\" >\n                <mat-form-field class=\"mat-form-field-fluid\">\n                    <input matInput placeholder=\"If Other, specify\"\n                        formControlName=\"PRH_2D_Likely_source_of_infection_Locally_Acquired_Details\" />\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<kt-portlet-header [title]=\"'Covid 19'\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a  [routerLink]=\"[ formId ? '../../' : '../']\"   class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\tmatTooltip=\"Back to the forms list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSubmit()\"\n\t\t\t\tmat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<i class=\"la la-save\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n       \n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tPersonal Details\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-covid19-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appCovid19PersonalDetails></kt-covid19-personal-details>\n            </mat-tab>\n            \n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tRisk History\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19-risk-history  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appCovid19RiskHistory></kt-covid19-risk-history>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user-md\"></i>\n\t\t\t\t\tClinical Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ClinicalDetails></kt-covid19-clinical-details>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Clinical Information\n                </ng-template>\n                    <kt-covid19-clinical-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ClinicalInformation></kt-covid19-clinical-information>\n            </mat-tab>\n            <mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-pills\"></i>\n\t\t\t\t\tExposure Sites \n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19-exposure-sites [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ExposureSites></kt-covid19-exposure-sites>\n\t\t\t</mat-tab>\n            <mat-tab  >\n                <ng-template mat-tab-label>\n                    <i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n                    Possible Contacts\n                </ng-template>\n                    <kt-covid19-possible-contacts [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19PossibleContacts></kt-covid19-possible-contacts>\n            </mat-tab>\n           \n            <mat-tab  >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\n\t\t\t\t\tLaboratory Details\n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19-laboratory-details  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appCovid19LaboratoryDetails></kt-covid19-laboratory-details>\n\t\t\t</mat-tab>\n\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-pills\"></i>\n\t\t\t\t\tMicrobiome Questionnaire \n\t\t\t\t</ng-template>\n\t\t\t\t\t<kt-covid19-Microbiome [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19Microbiome></kt-covid19-Microbiome>\n\t\t\t</mat-tab> \n\n\t\t\t<mat-tab >\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-file\"></i>\n\t\t\t\t\tDocument Upload\n\t\t\t\t</ng-template>\n\t\t\t\t<kt-doc-upload  #appDocUpload></kt-doc-upload>\n\t\t\t</mat-tab> \n\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<kt-portlet id=\"print_form\">\n\n\t<kt-portlet-body style=\"padding:15px 0px 15px 0px !important; \">\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Personal Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t<kt-covid19-personal-details [disableInput]=\"isPrint\"   [formData]=\"formId\"  #appCovid19PersonalDetails></kt-covid19-personal-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n            \n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Risk History'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\n\t\t\t\t\t<kt-covid19-risk-history  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appCovid19RiskHistory></kt-covid19-risk-history>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n\t\t\t<div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t<kt-covid19-clinical-details [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ClinicalDetails></kt-covid19-clinical-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t</div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Clinical Information'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-covid19-clinical-information [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ClinicalInformation></kt-covid19-clinical-information>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Exposure Sites'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t<kt-covid19-exposure-sites [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19ExposureSites></kt-covid19-exposure-sites>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n            <div class=\"\">\n                \n\t\t\t\t<kt-portlet-header [title]=\"'Possible Contacts'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n                    <kt-covid19-possible-contacts [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19PossibleContacts></kt-covid19-possible-contacts>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n           \n            <div class=\"\">\n\t\t\t\t<kt-portlet-header [title]=\"'Laboratory Details'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t</kt-portlet-header>\n\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\n\t\t\t\t\t<kt-covid19-laboratory-details  [disableInput]=\"isPrint\"   [formData]=\"formId\"   #appCovid19LaboratoryDetails></kt-covid19-laboratory-details>\n\t\t\t\t</kt-portlet-body>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<kt-portlet-header [title]=\"'Microbiome Questionnaire'\" [class]=\"'kt-portlet__head--lg'\" >\n\t\t\t\t\t</kt-portlet-header>\n\t\t\t\t\t<kt-portlet-body  class=\"kt-portlet__body\">\n\t\t\t\t\t\t<kt-covid19-Microbiome [disableInput]=\"isPrint\"   [formData]=\"formId\" #appCovid19Microbiome></kt-covid19-Microbiome>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t\t</div> \n\t\t\t\t\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19/covid19.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19/covid19.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<kt-portlet>\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\n\t<kt-portlet-header [title]=\"'Manage Covid-19'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../add']\" mat-raised-button color=\"primary\" matTooltip=\"Create Covid-19\">Add New</button>\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search form\" #searchInput placeholder=\"Search\">\n\t\t\t\t\t\t\t<!--<mat-hint align=\"start\">-->\n\t\t\t\t\t\t\t\t<!--<strong>Search</strong> in all fields-->\n\t\t\t\t\t\t\t<!--</mat-hint>-->\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t<div #MainBody class=\"mat-table__wrapper col-md-12\">\n\t\t\t<mat-table id=\"matTable\" class=\"lmat-elevation-z8\"\n\t\t\t[dataSource]=\"dataSource\"\n\t\t\tmatSort\n\t\t\t#sort1=\"matSort\"\n\t\t\tmatSortActive=\"savedFormID\"\n\t\t\tmatSortDirection=\"asc\"\n\t\t\t>\n\t\t\t\t<div matColumnDef=\"id\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef >ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form; let i = index\">{{(lastQuery.pageNumber*lastQuery.pageSize)+i+1}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"1\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Id Form</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">{{form.SavedFormID}}</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"2\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Saved Form ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.sample}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"3\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">COVID-19 ID</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\" class=\"email-cell\">\n\t\t\t\t\t\t<a routerLink=\"../edit/{{form.SavedFormID}}\" class=\"kt-link\">{{form.COVID19_ID}}</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\t\t\t\t<div matColumnDef=\"actions\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let form\">\n\t\t\t\t\t\t<button routerLink=\"../edit/{{form.SavedFormID}}\" mat-icon-button color=\"primary\" matTooltip=\"Edit form\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<button color=\"warn\"   (click)=\"deleteForm(form.SavedFormID)\" mat-icon-button matTooltip=\"Delete form\">\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<a mat-icon-button color=\"warn\" matTooltip=\"Print form\" routerLink=\"../print/{{form.SavedFormID}}\">\n\t\t\t\t\t\t\t<mat-icon>print</mat-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</div>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\t\t\t</mat-table>\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"dataSource.length == 0 && loading$ == false\">No records found</div><!-- Message for empty data  -->\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"loading$\">Please wait....</div>\n\t\t</div>\n\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\n\t\t\t<!--<mat-spinner [diameter]=\"20\" *ngIf=\"dataSource.loading$ | async\"></mat-spinner>-->\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\n\t\t\t<mat-paginator [length]=\"lastQuery.totalRecords\"\n\t\t\t\t\t\t   [pageSize]=\"10\"\n\t\t\t\t\t\t   (page)=\"getPaginatorData($event)\"\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"\n\t\t\t\t\t\t   [pageSizeOptions]=\"[5, 10, 25, 50]\">\n\n\t\t\t</mat-paginator>\n\n\t\t\t<!--<mat-paginator *ngIf=\"dataSource.length > 1\" [pageSize]=\"10\" [pageSizeOptions]=\"[10,25,50,100]\" [length]=\"400 || dataSource?.length\"></mat-paginator>-->\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n</kt-portlet>");

/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: Covid19MicrobiomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19MicrobiomeComponent", function() { return Covid19MicrobiomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");








var Covid19MicrobiomeComponent = /** @class */ (function () {
    function Covid19MicrobiomeComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Microbiome Questionnaire";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19MicrobiomeComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19MicrobiomeComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "MQ_Antibiotics": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_Probiotics": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_FibreIntake_Fruit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_FibreIntake_Vegetables": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_FibreIntake_WholemealBreads": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_FibreIntake_NutsSeeds": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_FibreIntake_LegumesBeansPeasLentils": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_Exercise": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_Specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_Hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_CVD": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_COPD": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_Asthma": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "MQ_LongStandingSuffering_None": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19MicrobiomeComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 8).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19MicrobiomeComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19MicrobiomeComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19MicrobiomeComponent.prototype.onSubmit = function () {
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
    Covid19MicrobiomeComponent.ctorParameters = function () { return [
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
    ], Covid19MicrobiomeComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19MicrobiomeComponent.prototype, "disableInput", void 0);
    Covid19MicrobiomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-Microbiome',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Microbiome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], Covid19MicrobiomeComponent);
    return Covid19MicrobiomeComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19ClinicalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ClinicalDetailsComponent", function() { return Covid19ClinicalDetailsComponent; });
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
var Covid19ClinicalDetailsComponent = /** @class */ (function () {
    function Covid19ClinicalDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Clinical Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19ClinicalDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19ClinicalDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "CP_3A_person_have_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3A_person_have_symptoms_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3A_duration_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_ARDS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_ARDS_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_ARDS_XRay": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Diarrhea": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Diarrhea_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_loss_of_Taste_Smell": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_loss_of_Taste_Smell_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Fever": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Fever_high_temperature": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_feverish_selfreport": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_feverish_selfreport_where_when": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Pneumonia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Pneumonia_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Pneumonia_XRay": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Arthralgia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Arthralgia_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Cough": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Cough_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Conjunctivitis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Conjunctivitis_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Fatigue": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Fatigue_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Chills_rigors": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Chills_rigors_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Headache": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Headache_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Malaise": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Malaise_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Myalgia": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Myalgia_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Nausea": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Nausea_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Pneumonitis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Pneumonitis_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Rhinorrhea": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Rhinorrhea_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Shortness_of_breath": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Shortness_of_breath_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Sore_throat": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Sore_throat_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Runny_stuffynose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Runny_stuffynose_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Muscle_bodyaches": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Muscle_bodyaches_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Vomiting": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Vomiting_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Sneezing": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Sneezing_onset_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Other_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3B_Clinical_notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_person_hospitalized": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_person_hospitalized_phone_number_hospital": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Admitted_ICU_HDU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Admitted_ICU_HDU_number_of_days": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Oxygen_Therapy_reqd": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Intubation_reqd": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Mechanical_incubation_reqd": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3C_Hospital_medical_record_chart_number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_1_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_1_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_1_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_2_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_2_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_2_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_3_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_3_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_3_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_4_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_4_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_4_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_5_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_5_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_5_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_6_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_6_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_6_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_7_Medication_administered": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_7_Dose": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3D_7_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3E_outcome_of_the_case": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3E_outcome_of_the_case_date_of_death": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3E_death_due_to_COVID_19": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3E_death_due_to_other_cause": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_No_risk_medical_conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Cardiac_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Chronic_lung_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Haemoglobinopathies": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Diabetes_dialysis": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Immunosuppressive_condition": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Immunosuppressive_condition_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Liver_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Metabolic_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Neurological_disorder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Obesity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Renal_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Other_risk_medical_condition": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Other_risk_medical_condition_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3EE_Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_currently_pregnant": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_currently_pregnant_number_of_weeks_gestation": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_current_smoker": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_current_smoker_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_current_smoker_pack_per_Week": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_consume_alcohol": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "CP_3F_drinks_per_week": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19ClinicalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 3).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19ClinicalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19ClinicalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19ClinicalDetailsComponent.prototype.onSubmit = function () {
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
    Covid19ClinicalDetailsComponent.ctorParameters = function () { return [
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
    ], Covid19ClinicalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19ClinicalDetailsComponent.prototype, "disableInput", void 0);
    Covid19ClinicalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-clinical-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.html")).default,
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
    ], Covid19ClinicalDetailsComponent);
    return Covid19ClinicalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19ClinicalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ClinicalInformationComponent", function() { return Covid19ClinicalInformationComponent; });
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
var Covid19ClinicalInformationComponent = /** @class */ (function () {
    function Covid19ClinicalInformationComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
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
    Covid19ClinicalInformationComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19ClinicalInformationComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "PCI_4A_Participants_blood_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4A_Participants_Weight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4A_Participants_Height": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_B_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_B_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_B_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Deptheria_Tetanus_Pertussis_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Deptheria_Tetanus_Pertussis_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Deptheria_Tetanus_Pertussis_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Haemophilus_influenza_type_b_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Haemophilus_influenza_type_b_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Haemophilus_influenza_type_b_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Pneumococcal_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Pneumococcal_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Pneumococcal_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Polio_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Polio_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Polio_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Rotavirus_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Rotavirus_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Rotavirus_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Measles_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Measles_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Measles_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Varicella_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Varicella_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Varicella_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_A_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_A_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Hepatitis_A_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Meningococcal_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Meningococcal_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Meningococcal_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Human_papillomavirus_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Human_papillomavirus_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Human_papillomavirus_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Zoster_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Zoster_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Zoster_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Influenza_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Influenza_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Influenza_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Bacillus_Calmette_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Bacillus_Calmette_date_given": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Bacillus_Calmette_administered_by": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Asthma_wheezing_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Asthma_wheezing_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Asthma_wheezing_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Asthma_wheezing_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Other_breathing_problems_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Other_breathing_problems_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Other_breathing_problems_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Other_breathing_problems_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Sinus_trouble_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Sinus_trouble_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Sinus_trouble_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Sinus_trouble_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hay_fever_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hay_fever_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hay_fever_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hay_fever_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hives_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hives_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hives_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Hives_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Eczema_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Eczema_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Eczema_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Eczema_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Frequent_infections_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Frequent_infections_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Frequent_infections_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Frequent_infections_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Food_reactions_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Food_reactions_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Food_reactions_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Food_reactions_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Drug_reactions_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Drug_reactions_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Drug_reactions_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Drug_reactions_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Others_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Others_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Others_OnsetAge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Others_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Others_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_1_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_1_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_1_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_1_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_1_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_2_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_2_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_2_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_2_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_2_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_3_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_3_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_3_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_3_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_3_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_4_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_4_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_4_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_4_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_4_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_5_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_5_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_5_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_5_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_5_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_6_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_6_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_6_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_6_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_6_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_7_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_7_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_7_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_7_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_7_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_8_Viral_Infection_YesNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_8_Viral_Infection_Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_8_Viral_Infection_year": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_8_Viral_Infection_Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_8_Viral_Infection_Comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4B_Immunization_record": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4C_Allergies": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PCI_4D_Previous_viral_infections": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19ClinicalInformationComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 4).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19ClinicalInformationComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19ClinicalInformationComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19ClinicalInformationComponent.prototype.onSubmit = function () {
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
    Covid19ClinicalInformationComponent.ctorParameters = function () { return [
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
    ], Covid19ClinicalInformationComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19ClinicalInformationComponent.prototype, "disableInput", void 0);
    Covid19ClinicalInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-clinical-information',
            template: __importDefault(__webpack_require__(/*! raw-loader!./clinical-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.html")).default,
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
    ], Covid19ClinicalInformationComponent);
    return Covid19ClinicalInformationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm0tbWFuYWdlbWVudC9jb3ZpZDE5L19zdWJzL2RvYy11cGxvYWQvZG9jLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.ts ***!
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./doc-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./doc-upload.component.scss */ "./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.scss")).default]
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

/***/ "./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19ExposureSitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ExposureSitesComponent", function() { return Covid19ExposureSitesComponent; });
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
var Covid19ExposureSitesComponent = /** @class */ (function () {
    function Covid19ExposureSitesComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Exposure Sites";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19ExposureSitesComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19ExposureSitesComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_COVID_19_symptoms_detail_of_illness": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_other_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_other_symptoms_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_hospital_in_14_days_other_symptoms_detail_of_illness": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ES_5A_present_to_other_healthcare_facility_in_14_days_COVID_19_symptoms_detail_of_illness": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19ExposureSitesComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 5).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19ExposureSitesComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19ExposureSitesComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19ExposureSitesComponent.prototype.onSubmit = function () {
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
    Covid19ExposureSitesComponent.ctorParameters = function () { return [
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
    ], Covid19ExposureSitesComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19ExposureSitesComponent.prototype, "disableInput", void 0);
    Covid19ExposureSitesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-exposure-sites',
            template: __importDefault(__webpack_require__(/*! raw-loader!./exposure-sites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.html")).default,
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
    ], Covid19ExposureSitesComponent);
    return Covid19ExposureSitesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19LaboratoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19LaboratoryDetailsComponent", function() { return Covid19LaboratoryDetailsComponent; });
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
var Covid19LaboratoryDetailsComponent = /** @class */ (function () {
    function Covid19LaboratoryDetailsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Laboratory Details";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19LaboratoryDetailsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19LaboratoryDetailsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "LD_7_sample_type_other_txt": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_blood": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_saliva": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_tissue": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_sample_type_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_sample_received_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_storage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_sample_volume": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_project_code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_test_code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "LD_7_comments": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19LaboratoryDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 7).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19LaboratoryDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19LaboratoryDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19LaboratoryDetailsComponent.prototype.onSubmit = function () {
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
    Covid19LaboratoryDetailsComponent.ctorParameters = function () { return [
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
    ], Covid19LaboratoryDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19LaboratoryDetailsComponent.prototype, "disableInput", void 0);
    Covid19LaboratoryDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-laboratory-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./laboratory-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.html")).default,
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
    ], Covid19LaboratoryDetailsComponent);
    return Covid19LaboratoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19PersonalDetailsComponent", function() { return Covid19PersonalDetailsComponent; });
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
var Covid19PersonalDetailsComponent = /** @class */ (function () {
    function Covid19PersonalDetailsComponent(_service, eformFB, _interactionService, _snackBar, cd, splashService, finalFormValues) {
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
    Covid19PersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        if (!this.formId)
            this._interactionService._Refid$.subscribe(function (id) {
                _this.form.patchValue({ "savedFormID": id });
            });
        else {
            this.splashService.splashScreen({ isLoading: true, message: "LOADING" });
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19PersonalDetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "sample": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "depository_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "COVID19_ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "GWAS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WES": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "WGS": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "EXOME": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Platform_Others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "projecttitle": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "principalinvestigator": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
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
            "highest_grade": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "highest_degree_earned": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eduGradel": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "eduLevel": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "household": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "household_minor": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "ownresidence": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "employment_status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interpreted_used": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interpreted_language": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_contact_with_known_case": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_Overseas_travel": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_Symptomatic_of_disease": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_Reported_recent_risk_exposure_contact": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_Occupational_exposure": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "interview_reason_other_remarks": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Address_type_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Boys": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Boys_ages": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Girls": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Girls_ages": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "pers_Numberofwives": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Severity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "Age": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["nationality"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.filteredPlaces = this.form.controls["PlaceOfBirth"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    Covid19PersonalDetailsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 1).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19PersonalDetailsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    // createSampleId() {
    //     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //     this._service.createSampleId(11, this.form.value["sample"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
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
    //         if (this.formId) {
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
    Covid19PersonalDetailsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, this.form.value["sample"]).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(_this.saveFormId);
            _this.onSubmit();
        });
    };
    Covid19PersonalDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var savedFormID = 0;
        if (this.formId === undefined) {
            savedFormID = 0;
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
    Covid19PersonalDetailsComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    //public CalculateAge(): void {
    //if (this.dob) {
    // var timeDiff = Math.abs(Date.now() - new Date(this.dob).getTime());
    ///this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    // }
    //}
    Covid19PersonalDetailsComponent.prototype.CalculateAge = function () {
        if (this.form.controls["dob"].value) {
            var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["dob"].value).getTime());
            this.form.patchValue({ "Age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) });
        }
    };
    Covid19PersonalDetailsComponent.prototype.onSelectFile = function (event) {
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
    Covid19PersonalDetailsComponent.ctorParameters = function () { return [
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
    ], Covid19PersonalDetailsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19PersonalDetailsComponent.prototype, "disableInput", void 0);
    Covid19PersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-personal-details',
            template: __importDefault(__webpack_require__(/*! raw-loader!./personal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.html")).default,
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
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_9__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], Covid19PersonalDetailsComponent);
    return Covid19PersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19PossibleContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19PossibleContactsComponent", function() { return Covid19PossibleContactsComponent; });
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
var Covid19PossibleContactsComponent = /** @class */ (function () {
    function Covid19PossibleContactsComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Possible Contacts";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19PossibleContactsComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19PossibleContactsComponent.prototype.createForm = function () {
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "PC_6A_work_in_highrisk_occupations": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_work_in_highrisk_occupations_others": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_work_in_highrisk_occupations_Last_date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_infection_likely_acquired_in_workplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Description_of_occupation": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_details": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_emirates": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_email": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6A_Employer_facility_contact_name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_doctor": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_Schools": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_Aged_care_facility": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_Transport": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_Concert": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_Office": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6B_infectious_visited_venues_other_detail": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6C_infectious_close_contact": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PC_6C_infectious_close_contact_details": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.getFormAttributeValues();
    };
    Covid19PossibleContactsComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 6).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19PossibleContactsComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19PossibleContactsComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19PossibleContactsComponent.prototype.onSubmit = function () {
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
    Covid19PossibleContactsComponent.ctorParameters = function () { return [
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
    ], Covid19PossibleContactsComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19PossibleContactsComponent.prototype, "disableInput", void 0);
    Covid19PossibleContactsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-possible-contacts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./possible-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.html")).default,
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
    ], Covid19PossibleContactsComponent);
    return Covid19PossibleContactsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MY_FORMATS, Covid19RiskHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19RiskHistoryComponent", function() { return Covid19RiskHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/component-interaction.service */ "./src/app/core/services/component-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/_utils/prepareFinalForm */ "./src/app/core/_utils/prepareFinalForm.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/vitamind.form.service */ "./src/app/core/services/vitamind.form.service.ts");
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/splash-screen-service */ "./src/app/core/services/splash-screen-service.ts");
/* harmony import */ var _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/_utils/countries */ "./src/app/core/_utils/countries.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);












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
var AVAILABLE_NATIONALITIES = _core_utils_countries__WEBPACK_IMPORTED_MODULE_8__["Countries"];
var Covid19RiskHistoryComponent = /** @class */ (function () {
    function Covid19RiskHistoryComponent(_service, eformFB, _interactionService, _snackBar, splashService, finalFormValues) {
        this._service = _service;
        this.eformFB = eformFB;
        this._interactionService = _interactionService;
        this._snackBar = _snackBar;
        this.splashService = splashService;
        this.finalFormValues = finalFormValues;
        this.title = "Risk History";
        this.saveFormId = 0;
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.isFormSubmit = false;
    }
    Covid19RiskHistoryComponent.prototype.ngOnInit = function () {
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
            this._service.getQuestionnaire(this.formId, 11).subscribe(function (res) {
                _this.formData = res;
                _this.saveFormId = _this.formId;
                _this.splashService.splashScreen({ isLoading: false, message: "" });
                if (res.length)
                    _this.prepareForm();
            });
        }
    };
    Covid19RiskHistoryComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.eformFB.group({
            "savedFormID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: 0, disabled: this.disableInput }),
            "TRP_traveled_outside": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_traveled_outside_country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_traveled_outside_city": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_flight_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_seat_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Arrival_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Departure_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_travel_with_organized_tour": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Type_of_accommodation": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Type_of_accommodation_other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Able_to_enter_travel_specific_details": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Airplane": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Ship": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Bus": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Train": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Other": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_modes_of_transportation_Other_text": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Transit_stopover": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Other_travel_Information": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "TRP_Other_travel_Information_Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Seat_Cabin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Carrier": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Departed_from": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Flight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_1_Arrived_in": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Seat_Cabin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Carrier": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Departed_from": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Flight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_2_Arrived_in": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Seat_Cabin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Carrier": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Departed_from": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Flight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_3_Arrived_in": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Seat_Cabin": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Carrier": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Departed_from": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Flight": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "OTI_4_Arrived_in": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PRH_2D_contact_with_possible_COVID_19": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PRH_2D_contact_with_possible_COVID_19_specify": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PRH_2D_Date_of_last_contact": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PRH_2D_Likely_source_of_infection": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
            "PRH_2D_Likely_source_of_infection_Locally_Acquired_Details": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: this.disableInput }),
        });
        this.filteredNationalities = this.form.controls["TRP_traveled_outside_country"].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (val) { return _this.filterNationalities(val != null && val != "" ? val.toString() : ''); }));
        this.getFormAttributeValues();
    };
    Covid19RiskHistoryComponent.prototype.filterNationalities = function (val) {
        return AVAILABLE_NATIONALITIES.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    Covid19RiskHistoryComponent.prototype.getFormAttributeValues = function () {
        var _this = this;
        this._service.getFormAttribute(11, 2).subscribe(function (res) {
            _this.formAttributes = res;
        });
    };
    Covid19RiskHistoryComponent.prototype.prepareForm = function () {
        var _this = this;
        Object.keys(this.formData[0]).forEach(function (name) {
            if (_this.form.controls[name]) {
                _this.form.controls[name].patchValue(_this.formData[0][name], { onlySelf: true });
            }
        });
    };
    Covid19RiskHistoryComponent.prototype.createSampleId = function () {
        var _this = this;
        this.splashService.splashScreen({ isLoading: true, message: "SAVING" });
        this._service.createSampleId(11, 0).subscribe(function (res) {
            _this.saveFormId = res;
            _this.splashService.splashScreen({ isLoading: false, message: "" });
            _this._interactionService.sendRefId(parseInt(_this.saveFormId));
            _this.onSubmit();
        });
    };
    Covid19RiskHistoryComponent.prototype.onSubmit = function () {
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
    Covid19RiskHistoryComponent.ctorParameters = function () { return [
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
    ], Covid19RiskHistoryComponent.prototype, "formId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disableInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], Covid19RiskHistoryComponent.prototype, "disableInput", void 0);
    Covid19RiskHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-risk-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./risk-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.html")).default,
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
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_6__["VitamindService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_component_interaction_service__WEBPACK_IMPORTED_MODULE_2__["ComponentInteractionService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["SplashScreenService"],
            _core_utils_prepareFinalForm__WEBPACK_IMPORTED_MODULE_4__["PrepareFinalForm"]])
    ], Covid19RiskHistoryComponent);
    return Covid19RiskHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: Covid19EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19EditComponent", function() { return Covid19EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _components_covid19_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/covid19/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.ts");
/* harmony import */ var _components_covid19_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/covid19/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_covid19_subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/covid19/_subs/exposure-sites/exposure-sites.component */ "./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.ts");
/* harmony import */ var _components_covid19_subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/covid19/_subs/Microbiome/Microbiome.component */ "./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.ts");
/* harmony import */ var _components_covid19_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/covid19/_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _components_covid19_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/covid19/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_covid19_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/covid19/_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _components_covid19_subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/covid19/_subs/possible-contacts/possible-contacts.component */ "./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.ts");
/* harmony import */ var _components_covid19_subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/covid19/_subs/risk-history/risk-history.component */ "./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.ts");

// Angular




// import { HsaLifestyleDetailsComponent } from '@components/hsa/_subs/lifestyle-details/lifestyle-details.component';
// import { HsaPersonalDetailsComponent } from '@components/hsa/_subs/personal-details/personal-details.component';
//  import { HsaMedicalDetailsComponent } from '@components/hsa/_subs/medical-details/medical-details.component';
// import { HsaFamilyHistoryComponent } from '@components/hsa/_subs/family-history/family-history.component';
// import { HsaClinicalDetailsComponent } from '@components/hsa/_subs/clinical-details/clinical-details.component';
// import { HsaDiabetesSelfManagementComponent } from '@components/hsa/_subs/diabetes-self-management/diabetes-self-management.component';
// import { HsaBiochemicalComponent } from '@components/hsa/_subs/biochemical/biochemical.component';
// import { HsaCognitiveTestResultComponent } from '@components/hsa/_subs/cognitive-test-result/cognitive-test-result.component';
// import { HsaLaboratoryDetailsComponent } from '@components/hsa/_subs/laboratory-details/laboratory-details.component';









var Covid19EditComponent = /** @class */ (function () {
    function Covid19EditComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    Covid19EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.isLoading = true;
                _this.formId = id;
            }
        });
        this.subheaderService.setTitle('Covid-19');
    };
    Covid19EditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    Covid19EditComponent.prototype.reset = function () {
    };
    Covid19EditComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appCovid19PersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appCovid19RiskHistory.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appCovid19ClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appCovid19ClinicalInformation.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appCovid19ExposureSites.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appCovid19PossibleContacts.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appCovid19LaboratoryDetails.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appCovid19Microbiome.onSubmit();
        }
        else if (this.selectedTab == 8) {
            this.appDocUpload.onSubmit();
        }
    };
    Covid19EditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19PersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_6__["Covid19PersonalDetailsComponent"])
    ], Covid19EditComponent.prototype, "appCovid19PersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19RiskHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_13__["Covid19RiskHistoryComponent"])
    ], Covid19EditComponent.prototype, "appCovid19RiskHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_10__["Covid19ClinicalDetailsComponent"])
    ], Covid19EditComponent.prototype, "appCovid19ClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ClinicalInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_9__["Covid19ClinicalInformationComponent"])
    ], Covid19EditComponent.prototype, "appCovid19ClinicalInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ExposureSites'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_7__["Covid19ExposureSitesComponent"])
    ], Covid19EditComponent.prototype, "appCovid19ExposureSites", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19PossibleContacts'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_12__["Covid19PossibleContactsComponent"])
    ], Covid19EditComponent.prototype, "appCovid19PossibleContacts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19LaboratoryDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_11__["Covid19LaboratoryDetailsComponent"])
    ], Covid19EditComponent.prototype, "appCovid19LaboratoryDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19Microbiome'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_8__["Covid19MicrobiomeComponent"])
    ], Covid19EditComponent.prototype, "appCovid19Microbiome", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDocUpload'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _components_covid19_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocUploadComponent"])
    ], Covid19EditComponent.prototype, "appDocUpload", void 0);
    Covid19EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], Covid19EditComponent);
    return Covid19EditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: Covid19PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19PrintComponent", function() { return Covid19PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_subs/exposure-sites/exposure-sites.component */ "./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.ts");
/* harmony import */ var _subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_subs/Microbiome/Microbiome.component */ "./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.ts");
/* harmony import */ var _subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_subs/possible-contacts/possible-contacts.component */ "./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.ts");
/* harmony import */ var _subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_subs/risk-history/risk-history.component */ "./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.ts");













var Covid19PrintComponent = /** @class */ (function () {
    function Covid19PrintComponent(activatedRoute, router, subheaderService, layoutUtilsService, layoutConfigService) {
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
    Covid19PrintComponent.prototype.ngOnInit = function () {
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
    Covid19PrintComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    Covid19PrintComponent.prototype.initTitle = function () {
        this.subheaderService.setTitle('Covid-19');
        this.subheaderService.showPrintButton(true);
    };
    Covid19PrintComponent.prototype.reset = function () {
    };
    Covid19PrintComponent.prototype.onSubmit = function () {
        if (this.selectedTab == 0) {
            this.appCovid19PersonalDetails.onSubmit();
        }
        else if (this.selectedTab == 1) {
            this.appCovid19RiskHistory.onSubmit();
        }
        else if (this.selectedTab == 2) {
            this.appCovid19ClinicalDetails.onSubmit();
        }
        else if (this.selectedTab == 3) {
            this.appCovid19ClinicalInformation.onSubmit();
        }
        else if (this.selectedTab == 4) {
            this.appCovid19ExposureSites.onSubmit();
        }
        else if (this.selectedTab == 5) {
            this.appCovid19PossibleContacts.onSubmit();
        }
        else if (this.selectedTab == 6) {
            this.appCovid19LaboratoryDetails.onSubmit();
        }
        else if (this.selectedTab == 7) {
            this.appCovid19Microbiome.onSubmit();
        }
    };
    Covid19PrintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19PersonalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_5__["Covid19PersonalDetailsComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19PersonalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19RiskHistory'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_12__["Covid19RiskHistoryComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19RiskHistory", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ClinicalDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_9__["Covid19ClinicalDetailsComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19ClinicalDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ClinicalInformation'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_8__["Covid19ClinicalInformationComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19ClinicalInformation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19ExposureSites'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_6__["Covid19ExposureSitesComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19ExposureSites", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19PossibleContacts'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_11__["Covid19PossibleContactsComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19PossibleContacts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19LaboratoryDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_10__["Covid19LaboratoryDetailsComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19LaboratoryDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appCovid19Microbiome'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_7__["Covid19MicrobiomeComponent"])
    ], Covid19PrintComponent.prototype, "appCovid19Microbiome", void 0);
    Covid19PrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19-print',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], Covid19PrintComponent);
    return Covid19PrintComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/covid19.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/covid19.module.ts ***!
  \***********************************************************************/
/*! exports provided: Covid19Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19Module", function() { return Covid19Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_covid19_covid19_covid19_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/covid19/covid19/covid19.component */ "./src/app/views/pages/form-management/covid19/covid19/covid19.component.ts");
/* harmony import */ var _components_covid19_covid19_edit_covid19_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/covid19/covid19-edit/covid19-edit.component */ "./src/app/views/pages/form-management/covid19/covid19-edit/covid19-edit.component.ts");
/* harmony import */ var _components_covid19_covid19_print_covid19_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/covid19/covid19-print/covid19-print.component */ "./src/app/views/pages/form-management/covid19/covid19-print/covid19-print.component.ts");
/* harmony import */ var _components_covid19_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/covid19/_subs/personal-details/personal-details.component */ "./src/app/views/pages/form-management/covid19/_subs/personal-details/personal-details.component.ts");
/* harmony import */ var _components_covid19_subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/covid19/_subs/exposure-sites/exposure-sites.component */ "./src/app/views/pages/form-management/covid19/_subs/exposure-sites/exposure-sites.component.ts");
/* harmony import */ var _components_covid19_subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/covid19/_subs/Microbiome/Microbiome.component */ "./src/app/views/pages/form-management/covid19/_subs/Microbiome/Microbiome.component.ts");
/* harmony import */ var _components_covid19_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/covid19/_subs/clinical-information/clinical-information.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-information/clinical-information.component.ts");
/* harmony import */ var _components_covid19_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/covid19/_subs/clinical-details/clinical-details.component */ "./src/app/views/pages/form-management/covid19/_subs/clinical-details/clinical-details.component.ts");
/* harmony import */ var _components_covid19_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/covid19/_subs/laboratory-details/laboratory-details.component */ "./src/app/views/pages/form-management/covid19/_subs/laboratory-details/laboratory-details.component.ts");
/* harmony import */ var _components_covid19_subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/covid19/_subs/possible-contacts/possible-contacts.component */ "./src/app/views/pages/form-management/covid19/_subs/possible-contacts/possible-contacts.component.ts");
/* harmony import */ var _components_covid19_subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/covid19/_subs/risk-history/risk-history.component */ "./src/app/views/pages/form-management/covid19/_subs/risk-history/risk-history.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _components_covid19_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/covid19/_subs/doc-upload/doc-upload.component */ "./src/app/views/pages/form-management/covid19/_subs/doc-upload/doc-upload.component.ts");




















//import { HsaEditComponent } from './hsa-edit/hsa-edit.component';
var routes = [
    {
        path: '',
        component: _components_covid19_covid19_covid19_component__WEBPACK_IMPORTED_MODULE_7__["Covid19Component"],
    },
    {
        path: 'add',
        component: _components_covid19_covid19_edit_covid19_edit_component__WEBPACK_IMPORTED_MODULE_8__["Covid19EditComponent"],
    },
    {
        path: 'edit/:id',
        component: _components_covid19_covid19_edit_covid19_edit_component__WEBPACK_IMPORTED_MODULE_8__["Covid19EditComponent"],
    },
    {
        path: 'print/:id',
        component: _components_covid19_covid19_print_covid19_print_component__WEBPACK_IMPORTED_MODULE_9__["Covid19PrintComponent"],
    }
];
var Covid19Module = /** @class */ (function () {
    function Covid19Module() {
    }
    Covid19Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_covid19_covid19_covid19_component__WEBPACK_IMPORTED_MODULE_7__["Covid19Component"],
                _components_covid19_covid19_edit_covid19_edit_component__WEBPACK_IMPORTED_MODULE_8__["Covid19EditComponent"],
                _components_covid19_covid19_print_covid19_print_component__WEBPACK_IMPORTED_MODULE_9__["Covid19PrintComponent"],
                _components_covid19_subs_clinical_details_clinical_details_component__WEBPACK_IMPORTED_MODULE_14__["Covid19ClinicalDetailsComponent"],
                _components_covid19_subs_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_10__["Covid19PersonalDetailsComponent"],
                _components_covid19_subs_clinical_information_clinical_information_component__WEBPACK_IMPORTED_MODULE_13__["Covid19ClinicalInformationComponent"],
                _components_covid19_subs_exposure_sites_exposure_sites_component__WEBPACK_IMPORTED_MODULE_11__["Covid19ExposureSitesComponent"],
                _components_covid19_subs_laboratory_details_laboratory_details_component__WEBPACK_IMPORTED_MODULE_15__["Covid19LaboratoryDetailsComponent"],
                _components_covid19_subs_risk_history_risk_history_component__WEBPACK_IMPORTED_MODULE_17__["Covid19RiskHistoryComponent"],
                _components_covid19_subs_possible_contacts_possible_contacts_component__WEBPACK_IMPORTED_MODULE_16__["Covid19PossibleContactsComponent"],
                _components_covid19_subs_Microbiome_Microbiome_component__WEBPACK_IMPORTED_MODULE_12__["Covid19MicrobiomeComponent"],
                _components_covid19_subs_doc_upload_doc_upload_component__WEBPACK_IMPORTED_MODULE_19__["DocUploadComponent"],
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
    ], Covid19Module);
    return Covid19Module;
}());



/***/ }),

/***/ "./src/app/views/pages/form-management/covid19/covid19/covid19.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/form-management/covid19/covid19/covid19.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Covid19Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19Component", function() { return Covid19Component; });
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






var Covid19Component = /** @class */ (function () {
    function Covid19Component(activatedRoute, _vService, router, _snackBar, dialog, subheaderService, splashService, cdr) {
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
            templateId: 11,
            totalRecords: 0
        };
        this.subscriptions = [];
    }
    Covid19Component.prototype.fetchList = function () {
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
    Covid19Component.prototype.getTotalCount = function () {
        var _this = this;
        this._vService.getTotalRecordsCount(11, this.lastQuery.filter).subscribe(function (res) {
            if (res.length > 0)
                _this.lastQuery.totalRecords = res[0]["totalrecords"];
        });
    };
    /**
     * On Destroy
     */
    Covid19Component.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load forms list
     */
    /**
     * On init
     */
    Covid19Component.prototype.ngOnInit = function () {
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
        this.subheaderService.setTitle('Covid-19');
        this.subheaderService.showPrintButton(false);
    };
    Covid19Component.prototype.getPaginatorData = function (event) {
        this.lastQuery.pageSize = event.pageSize;
        this.lastQuery.pageNumber = event.pageIndex;
        this.fetchList();
    };
    Covid19Component.prototype.openDialog = function (id) {
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
    Covid19Component.prototype.editForm = function (id) {
        this.router.navigate(['/form-management/covid19/edit', id], { relativeTo: this.activatedRoute });
    };
    Covid19Component.prototype.deleteForm = function (id) {
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
    Covid19Component.ctorParameters = function () { return [
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
    ], Covid19Component.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], Covid19Component.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Covid19Component.prototype, "searchInput", void 0);
    Covid19Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-covid19',
            template: __importDefault(__webpack_require__(/*! raw-loader!./covid19.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/form-management/covid19/covid19/covid19.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_vitamind_form_service__WEBPACK_IMPORTED_MODULE_7__["VitamindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["SplashScreenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], Covid19Component);
    return Covid19Component;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-form-management-covid19-covid19-module.js.map