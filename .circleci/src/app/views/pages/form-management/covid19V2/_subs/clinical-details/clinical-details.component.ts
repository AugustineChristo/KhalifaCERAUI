

import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
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


@Component({
  selector: 'kt-covid19V2-clinical-details',
  templateUrl: './clinical-details.component.html',
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  //  { provide: MAT_DATE_LOCALE, useValue: 'en-AR' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class covid19V2ClinicalDetailsComponent implements OnInit {
  form:FormGroup;
  title:string = "Biomechanics Details";
  @Input('formData') formId:any;
  formData:any;
  formAttributes:any;
  @Input('disableInput') disableInput:boolean;
  saveFormId : any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  DiagnosticDate = new FormControl(moment.utc());

  isFormSubmit : boolean = false;
  constructor(
      private _service:VitamindService,
      private eformFB:FormBuilder,
      private _interactionService:ComponentInteractionService,
      private _snackBar: MatSnackBar,
      private splashService : SplashScreenService,
      private finalFormValues:PrepareFinalForm
  ) {  }

  ngOnInit() {
    this.createForm();
    if (!this.formId)
      this._interactionService._Refid$.subscribe((id)=> {
        if(id) {
          this.form.patchValue({"savedFormID": id})
          this.saveFormId = id;
        }
        })
    else {
      this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
      this._service.getQuestionnaire(this.formId,13).subscribe((res:any[])=> {
        this.formData = res;
        this.saveFormId = this.formId;
        this.splashService.splashScreen({isLoading : false, message : "" })
        if(res.length)
        this.prepareForm();
      })
    }
  }

  createForm() {
    this.form = this.eformFB.group({
      "savedFormID": new FormControl({value: 0, disabled: this.disableInput}),
      "DiagnosticDate": new FormControl({value: '', disabled: this.disableInput}),
      "PersonHaveSymptoms": new FormControl({value: '', disabled: this.disableInput}),
      "PersonHaveSymptomsDate": new FormControl({value: '', disabled: this.disableInput}),
      "PersonHaveSymptomsDuration": new FormControl({value: '', disabled: this.disableInput}),
      "PersonTravel": new FormControl({value: '', disabled: this.disableInput}),
      "PersonTravelDate": new FormControl({value: '', disabled: this.disableInput}),
      "PersonTravelDestination": new FormControl({value: '', disabled: this.disableInput}),
      "ARDS": new FormControl({value: '', disabled: this.disableInput}),
      "ARDSDate": new FormControl({value: '', disabled: this.disableInput}),
      "ARDS_Xray": new FormControl({value: '', disabled: this.disableInput}),
      "Pneumonia": new FormControl({value: '', disabled: this.disableInput}),
      "Pneumonia_date": new FormControl({value: '', disabled: this.disableInput}),
      "Pneumonia_Xray": new FormControl({value: '', disabled: this.disableInput}),
      "Fever": new FormControl({value: '', disabled: this.disableInput}),
      "FeverDate": new FormControl({value: '', disabled: this.disableInput}),
      "Cough": new FormControl({value: '', disabled: this.disableInput}),
      "Cough_date": new FormControl({value: '', disabled: this.disableInput}),
      "NewLossOfTasteOrSmell": new FormControl({value: '', disabled: this.disableInput}),
      "NewLossOfTasteOrSmellDate": new FormControl({value: '', disabled: this.disableInput}),
      "Fatigue": new FormControl({value: '', disabled: this.disableInput}),
      "FatigueDate": new FormControl({value: '', disabled: this.disableInput}),
      "ChillsOrRigors": new FormControl({value: '', disabled: this.disableInput}),
      "ChillsOrRigorsDate": new FormControl({value: '', disabled: this.disableInput}),
      "Headache": new FormControl({value: '', disabled: this.disableInput}),
      "HeadacheDate": new FormControl({value: '', disabled: this.disableInput}),
      "Diarrhea": new FormControl({value: '', disabled: this.disableInput}),
      "DiarrheaDate": new FormControl({value: '', disabled: this.disableInput}),
      "Nausea": new FormControl({value: '', disabled: this.disableInput}),
      "NauseaDate": new FormControl({value: '', disabled: this.disableInput}),
      "ShortnessOfBreath": new FormControl({value: '', disabled: this.disableInput}),
      "ShortnessOfBreathDate": new FormControl({value: '', disabled: this.disableInput}),
      "SoreThroat": new FormControl({value: '', disabled: this.disableInput}),
      "SoreThroatDate": new FormControl({value: '', disabled: this.disableInput}),
      "RunnyOrStuffyNose": new FormControl({value: '', disabled: this.disableInput}),
      "RunnyOrStuffyNoseDate": new FormControl({value: '', disabled: this.disableInput}),
      "MuscleOrBodyAches": new FormControl({value: '', disabled: this.disableInput}),
      "MuscleOrBodyAchesDate": new FormControl({value: '', disabled: this.disableInput}),
      "Vomiting": new FormControl({value: '', disabled: this.disableInput}),
      "VomitingDate": new FormControl({value: '', disabled: this.disableInput}),
      "Sneezing": new FormControl({value: '', disabled: this.disableInput}),
      "SneezingDate": new FormControl({value: '', disabled: this.disableInput}),
      "ClinicalNotes": new FormControl({value: '', disabled: this.disableInput}),
    })
    this.getFormAttributeValues();
  }

  getFormAttributeValues() {
    this._service.getFormAttribute(13,2).subscribe((res)=> {
      this.formAttributes = res;
    })
  }

  prepareForm() {
    Object.keys(this.formData[0]).forEach(name => {
      if (this.form.controls[name]) {
        this.form.controls[name].patchValue(this.formData[0][name], {onlySelf: true});
      }
    });
  }

  createSampleId() {
    this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    this._service.createSampleId(13,0).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }

  onSubmit() {
    if (!this.form.value["savedFormID"] && !this.saveFormId) {
      this.createSampleId();
    } else {
      this.form.patchValue({"savedFormID" : this.form.value["savedFormID"] || this.saveFormId })
      let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
      if (this.formId || this.isFormSubmit) {
        this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
        this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe((res:any) => {
          this._service.addeditSample(data, 1).subscribe((res)=> {
            if (res) {
                this.splashService.splashScreen({isLoading : false, message : "" })
                this._snackBar.open("Data has been updated successfully!", 'Ok', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                });
            }
        })
       
          // if(res){
          //   for(var i=0;i<data.length;i++) {
          //     for (var j = 0; j < res.length; j++) {
          //       if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
          //         data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
          //       }
          //     }
          //   }
          //   this._service.createSample8(data, true).subscribe((res)=> {
          //     if (res) {
          //       this.splashService.splashScreen({isLoading : false, message : "" })
          //       this._snackBar.open("Data has been updated successfully!", 'Ok', {
          //         duration: 5000,
          //         verticalPosition: 'bottom',
          //         horizontalPosition: 'center'
          //       });
          //     }
          //   })

          // }
        })
      } else {
        this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
        // this._service.createSample8(data, this.formId ? true : false).subscribe((res)=> {
        //   if (res) {
        //     this.isFormSubmit = true;
        //     this.splashService.splashScreen({isLoading : false, message : "" })
        //     this._snackBar.open("Data has been inserted successfully!", 'Ok', {
        //       duration: 5000,
        //       verticalPosition: 'bottom',
        //       horizontalPosition: 'center'
        //     });
        //   }
        // })

        this._service.addeditSample(data, 0).subscribe((res)=> {
          if (res) {
              this.splashService.splashScreen({isLoading : false, message : "" })
              this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                  duration: 5000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center'
              });
          }
      })
      
      }
    }
  }

}
