import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import {VitamindService} from "@services/vitamind.form.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first , reduce } from 'rxjs/operators';
import {SplashScreenService} from "@services/splash-screen-service";

@Component({
  selector: 'kt-obesity-family-history',
  templateUrl: './family-history.component.html',
})
export class ObesityFamilyHistoryComponent implements OnInit {
  form:FormGroup;
  title:string = "Family History";
  @Input('formData') formId:any;
  formData:any;
  formAttributes:any;
  filteredNationalities: Observable<string[]>;
  @Input('disableInput') disableInput:boolean;
  saveFormId : any = 0;
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
    if(!this.formId)
      this._interactionService._Refid$.subscribe((id)=>{
        if(id) {
          this.form.patchValue({"savedFormID": id})
          this.saveFormId = id;
       }
        })

    else{
      this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
      this._service.getQuestionnaire(this.formId,6).subscribe((res: any[]) => {
        this.formData  = res;
        this.splashService.splashScreen({isLoading : false, message : "" })
        if(res.length)
        this.prepareForm();
        this.saveFormId = this.formId;
      })
    }
    this.createForm();
  }
  createForm(){
   this.form = this.eformFB.group({
     "savedFormID": new FormControl({value: 0, disabled: this.disableInput}),
     "FAMI_Obesity": new FormControl({value: '', disabled: this.disableInput}),
      "FAMI_ObesityComplication": new FormControl({value: '', disabled: this.disableInput}),
      "FAMI_ObesityComplication_Remarks": new FormControl({value: '', disabled: this.disableInput}),
      "FAMI_Diabetes": new FormControl({value: '', disabled: this.disableInput}),
      "FAMI_Hypertension": new FormControl({value: '', disabled: this.disableInput}),
      "FAMI_Dyslipidemia": new FormControl({value: '', disabled: this.disableInput}),
   });
    this.getFormAttributeValues();
  }
  getFormAttributeValues() {
    this._service.getFormAttribute(6,6).subscribe((res)=> {
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
    this._service.createSampleId(6,0).subscribe((res)=> {
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
          //   this._service.createSample(data, true).subscribe((res)=> {
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
        // this._service.createSample(data, this.formId ? true : false).subscribe((res)=> {
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
