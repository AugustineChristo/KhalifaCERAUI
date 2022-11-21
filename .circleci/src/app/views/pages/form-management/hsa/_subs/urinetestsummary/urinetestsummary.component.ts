
import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";

@Component({
  selector: 'kt-hsa-urinetestsummary',
  templateUrl: './urinetestsummary.component.html'
})
export class HsaUrinetestsummaryComponent implements OnInit {
  Mform:FormGroup;
  title:string = "Urine Test Summary Details";
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
      // this._service.getQuestionnaire(this.formId,10).subscribe((res:any[])=> {
      //   this.formData = res;
      //   this.saveFormId = this.formId;
      //   this.splashService.splashScreen({isLoading : false, message : "" })
      //   if(res.length)
      //   this.prepareForm();
      // })

      this._service.getQuestionnaire(this.formId,10).subscribe((res: any[]) => {
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
    
"BIO_UTSmacroscopic_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSmacroscopic_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSmacroscopic_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSmacroscopic_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSmacroscopic_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSpH_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSpH_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSpH_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSpH_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSpH_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGlucose_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGlucose_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGlucose_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGlucose_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGlucose_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGravity_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGravity_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGravity_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGravity_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSGravity_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSNitrite_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSNitrite_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSNitrite_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSNitrite_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSNitrite_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSWBC_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSWBC_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSWBC_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSWBC_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSWBC_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSProtein_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSProtein_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSProtein_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSProtein_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSProtein_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBilirubin_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBilirubin_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBilirubin_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBilirubin_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBilirubin_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBlood_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBlood_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBlood_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBlood_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSBlood_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSLeukocyte_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSLeukocyte_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSLeukocyte_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSLeukocyte_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSLeukocyte_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_cells_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_cells_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_cells_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_cells_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_cells_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_casts_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_casts_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_casts_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_casts_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_casts_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_crystals_before": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_crystals_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_crystals_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_crystals_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_UTSMicroscopy_crystals_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Ketones_before_medication": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Ketones_result_after3": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Ketones_result_after6": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Ketones_result_after9": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Ketones_result_after12": new FormControl({value: '', disabled: this.disableInput}),
"BIO_Comments": new FormControl({value: '', disabled: this.disableInput}),

// Additional Fields 26/10/2020



    })
    this.getFormAttributeValues();
  }

  getFormAttributeValues() {
    this._service.getFormAttribute(10,10).subscribe((res)=> {
      this.formAttributes = res;
    })
  }

  prepareForm() {
    // this.splashService.splashScreen({ isLoading : true, message : "LOADING" })

    Object.keys(this.formData[0]).forEach(name => {
      if (this.Mform.controls[name]) {
        this.Mform.controls[name].patchValue(this.formData[0][name], {onlySelf: true});
      }
    });
  }

  createSampleId() {
    this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    this._service.createSampleId(10,0).subscribe((res)=> {
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
