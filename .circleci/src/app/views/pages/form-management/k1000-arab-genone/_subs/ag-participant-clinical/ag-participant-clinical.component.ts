import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import {VitamindService} from "@services/vitamind.form.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
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
    monthYearLabel: 'M YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'M YYYY',
  },
};
@Component({
  selector: 'kt-ag-participant-clinical',
  templateUrl: './ag-participant-clinical.component.html',
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
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class AgParticipantClinicalComponent implements OnInit {


  form: FormGroup;
  title: string = "Food Intake";
  @Input('formData') formId: any;
  formData: any;
  formAttributes: any;
  @Input('disableInput') disableInput:boolean;
  saveFormId : any = 0;
  isFormSubmit : boolean = false;
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  constructor(
      private _service:VitamindService,
      private eformFB:FormBuilder,
      private _interactionService:ComponentInteractionService,
      private _snackBar: MatSnackBar,
      private splashService : SplashScreenService,
      private finalFormValues:PrepareFinalForm
  ) { }

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
      this._service.getQuestionnaire(this.formId,5).subscribe((res:any[])=> {
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
      "CLIN_BodyWeight_KG": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_WaistCircumference_CM": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_Height_CM": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_Hipcircumference_CM": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_BMI_KGM2": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_BloodPressure_mmHg": new FormControl({value: '', disabled: this.disableInput}), // Need to Check
      "BIOC_FastingGlucose_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_FastingGlucose_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_FastingGlucose_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_RandomGlucose_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_RandomGlucose_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_RandomGlucose_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HbA1c_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HbA1c_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HbA1c_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalCholesterol_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalCholesterol_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalCholesterol_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Triglyceride_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Triglyceride_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Triglyceride_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HDL_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HDL_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_HDL_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LDL_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LDL_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LDL_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Calcium_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Calcium_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Calcium_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Urea_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Urea_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Urea_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Creatinine_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Creatinine_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Creatinine_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalProtein_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalProtein_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_TotalProtein_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Albumin_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Albumin_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Albumin_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_VitaminDLevel_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_VitaminDLevel_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_VitaminDLevel_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Lepatin_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Lepatin_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Lepatin_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LepatinReceptor_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LepatinReceptor_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_LepatinReceptor_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Alkaline_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Alkaline_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Alkaline_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_ALT_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_ALT_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_ALT_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_GammaGlutamyl_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_GammaGlutamyl_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_GammaGlutamyl_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_PlateletCount_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_PlateletCount_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_PlateletCount_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Bilirubin_RecentTest_Date_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Bilirubin_RecentTest_Result_PO": new FormControl({value: '', disabled: this.disableInput}),
      "BIOC_Bilirubin_IsNormalResult_PO": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_BloodPressure_SYS_mmHg": new FormControl({value: '', disabled: this.disableInput}),
      "CLIN_BloodPressure_DIA_mmHg": new FormControl({value: '', disabled: this.disableInput}),
    })
    this.getFormAttributeValues();
  }



  getFormAttributeValues() {
    this._service.getFormAttribute(5,7).subscribe((res)=> {
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
    this._service.createSampleId(5,0).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }

  
//added by afreen on 18-11-2022
onSubmit(){
  
  if(!this.form.value["savedFormID"] && !this.saveFormId ){
    this.createSampleId();
  }else {
      this.form.patchValue({"savedFormID": this.form.value["savedFormID"] || this.saveFormId})
      let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
     
      if (this.formId) {
          this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
        // this._vService.getFormAttributeValues(this.formId).subscribe((res:any) => {
         // this._vService.getFormAttribute(4,0).subscribe((res:any) => {
         //     if(res){
         //         for(var i=0;i<data.length;i++) {
          //            for (var j = 0; j < res.length; j++) {
          //                if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
         //                     data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
         //                 }
         //             }
         //         }

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

            
      } else {
          this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
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

/*commented by afreen on 18-11-2022

  onSubmit() {
    if (!this.form.value["savedFormID"] && !this.saveFormId) {
      this.createSampleId();
    } else {
      this.form.patchValue({"savedFormID" : this.form.value["savedFormID"] || this.saveFormId })

      let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
      if (this.formId || this.isFormSubmit) {
        this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
        this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe((res:any) => {
          if(res){
            for(var i=0;i<data.length;i++) {
              for (var j = 0; j < res.length; j++) {
                if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
                  data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
                }
              }
            }
            this._service.createSample3(data, true).subscribe((res)=> {
              if (res) {
                this.splashService.splashScreen({isLoading : false, message : "" })
                this._snackBar.open("Data has been updated successfully!", 'Ok', {
                  duration: 5000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center'
                });
              }
            })

          }
        })
      } else {
        this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
        this._service.createSample1 (data, this.formId ? true : false).subscribe((res)=> {
          if (res) {
            this.isFormSubmit = true;
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
*/


}
