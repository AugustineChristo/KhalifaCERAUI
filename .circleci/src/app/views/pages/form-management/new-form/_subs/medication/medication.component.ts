import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import {SplashScreenService} from "@services/splash-screen-service";
import {VitamindService} from "@services/vitamind.form.service";
@Component({
  selector: 'kt-new-medication',
  templateUrl: './medication.component.html'
})
export class NewMedicationComponent implements OnInit {
  Mform:FormGroup;
  title:string = "Medication";
  @Input('formData') formId:any;
  formData:any;
  formAttributes:any;
  @Input('disableInput') disableInput:boolean;
  saveFormId : any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  isFormSubmit : boolean = false;
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
          this.Mform.patchValue({"savedFormID": id})

        }
      })
    else {
      this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
      this._service.getQuestionnaire(this.formId,9).subscribe((res:any[])=> {
        this.formData = res;
        this.saveFormId = this.formId;
        this.splashService.splashScreen({isLoading : false, message : "" })
        if(res.length)
        this.prepareForm();
      })
    }
  }

  createForm() {
    this.Mform = this.eformFB.group({
      "savedFormID": new FormControl({value: 0, disabled: this.disableInput}),
      "inhibit_ace": new FormControl({value: '', disabled: this.disableInput}),
      "perindop": new FormControl({value: '', disabled: this.disableInput}),
      "captopril": new FormControl({value: '', disabled: this.disableInput}),
      "enalapril": new FormControl({value: '', disabled: this.disableInput}),
      "lisinop": new FormControl({value: '', disabled: this.disableInput}),
      "medications_others": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_arbs": new FormControl({value: '', disabled: this.disableInput}),
      "losartan": new FormControl({value: '', disabled: this.disableInput}),
      "Valsartan": new FormControl({value: '', disabled: this.disableInput}),
      "anti_dose": new FormControl({value: '', disabled: this.disableInput}),
      "beta_blockers": new FormControl({value: '', disabled: this.disableInput}),
      "atenolol": new FormControl({value: '', disabled: this.disableInput}),
      "bisopr": new FormControl({value: '', disabled: this.disableInput}),
      "beta_other_dose": new FormControl({value: '', disabled: this.disableInput}),
      "diurectics": new FormControl({value: '', disabled: this.disableInput}),
      "indapam": new FormControl({value: '', disabled: this.disableInput}),
      "hydroch": new FormControl({value: '', disabled: this.disableInput}),
      "fruse": new FormControl({value: '', disabled: this.disableInput}),
      "diur_others_dose": new FormControl({value: '', disabled: this.disableInput}),
      "CA_channel_blockers": new FormControl({value: '', disabled: this.disableInput}),
      "amlodip": new FormControl({value: '', disabled: this.disableInput}),
      "nifedip": new FormControl({value: '', disabled: this.disableInput}),
      "verapamil": new FormControl({value: '', disabled: this.disableInput}),
      "ca_channer_others": new FormControl({value: '', disabled: this.disableInput}),
      "others_oh": new FormControl({value: '', disabled: this.disableInput}),
      "methyldop": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_others_dose": new FormControl({value: '', disabled: this.disableInput}),
      "Anti_Dyslipidemia_statins": new FormControl({value: '', disabled: this.disableInput}),
      "simvast": new FormControl({value: '', disabled: this.disableInput}),
      "atorvast": new FormControl({value: '', disabled: this.disableInput}),
      "rosuvas": new FormControl({value: '', disabled: this.disableInput}),
      "Anti_Dyslipidemia_OtherD": new FormControl({value: '', disabled: this.disableInput}),
      "Anti_Dyslipidemia_fibrates": new FormControl({value: '', disabled: this.disableInput}),
      "gemfib": new FormControl({value: '', disabled: this.disableInput}),
      "fenofib": new FormControl({value: '', disabled: this.disableInput}),
      "fibrat1": new FormControl({value: '', disabled: this.disableInput}),
      "fibrat2": new FormControl({value: '', disabled: this.disableInput}),
      "Anti_Dyslipidemia_others": new FormControl({value: '', disabled: this.disableInput}),
      "AntiOthers": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_Biguanides": new FormControl({value: '', disabled: this.disableInput}),
      "Metformin": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_sus": new FormControl({value: '', disabled: this.disableInput}),
      "glibenclamide": new FormControl({value: '', disabled: this.disableInput}),
      "glimepir": new FormControl({value: '', disabled: this.disableInput}),
      "glipizide": new FormControl({value: '', disabled: this.disableInput}),
      "gliclazide_mr": new FormControl({value: '', disabled: this.disableInput}),
      "glipizide_dose": new FormControl({value: '', disabled: this.disableInput}),
      "pride_dose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_other_su": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_thiazolid": new FormControl({value: '', disabled: this.disableInput}),
      "pioglit": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_thiazolid_Other": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_meglitin": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_Nateglinide": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_repaglin": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_glucosid": new FormControl({value: '', disabled: this.disableInput}),
      "acarbose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_dipeptidyl": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_sitaglip": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_vildaglip": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_saxaglip": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_linaglip": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_peptid_others": new FormControl({value: '', disabled: this.disableInput}),
      "pramlintide": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_other_peptid": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_incretinm": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_exenatide": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_liraglut": new FormControl({value: '', disabled: this.disableInput}),
      "exenatide_dose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_insulin_lin": new FormControl({value: '', disabled: this.disableInput}),
      "lispro_dose": new FormControl({value: '', disabled: this.disableInput}),
      "aspart_dose": new FormControl({value: '', disabled: this.disableInput}),
      "glulisine_dose": new FormControl({value: '', disabled: this.disableInput}),
      "regular_dose": new FormControl({value: '', disabled: this.disableInput}),
      "nph_dose": new FormControl({value: '', disabled: this.disableInput}),
      "Detemir_Dose": new FormControl({value: '', disabled: this.disableInput}),
      "glargine": new FormControl({value: '', disabled: this.disableInput}),
      "anti_hyper_insulin_lin_combination": new FormControl({value: '', disabled: this.disableInput}),
      "suplements_vitamind3": new FormControl({value: '', disabled: this.disableInput}),
      "suplements_OtherVit": new FormControl({value: '', disabled: this.disableInput}),
      "anti_depre_prozac_dose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_depre_other_dose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_anx_diazepam_dose": new FormControl({value: '', disabled: this.disableInput}),
      "anti_anx_other_dose": new FormControl({value: '', disabled: this.disableInput}),
      "medication_other_dose": new FormControl({value: '', disabled: this.disableInput}),
      "traditional_chinese": new FormControl({value: '', disabled: this.disableInput}),
    })
    this.getFormAttributeValues();
  }

  getFormAttributeValues() {
    this._service.getFormAttribute(9,6).subscribe((res)=> {
      this.formAttributes = res;
    })
  }

  prepareForm() {
    Object.keys(this.formData[0]).forEach(name => {
      if (this.Mform.controls[name]) {
        this.Mform.controls[name].patchValue(this.formData[0][name], {onlySelf: true});
      }
    });
  }

  createSampleId() {
    this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    this._service.createSampleId(9,0).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }

  onSubmit() {
    if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
      this.createSampleId();
    } else {
      this.Mform.patchValue({"savedFormID" : this.Mform.value["savedFormID"] || this.saveFormId })

      let data = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID",this.formId)
      if (this.formId || this.isFormSubmit) {
        this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
        this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe((res:any) => {
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
      }
    }
  }

}
