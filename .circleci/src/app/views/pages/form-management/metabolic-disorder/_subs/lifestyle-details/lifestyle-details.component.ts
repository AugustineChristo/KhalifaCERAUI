import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'kt-lifestyle-details',
  templateUrl: './lifestyle-details.component.html'
})
export class LifestyleDetailsComponent implements OnInit {

  Mform:FormGroup;
  title:string = "Biomechanics Details";
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
      private finalFormValues:PrepareFinalForm,
      private splashService : SplashScreenService
  ) { }

  ngOnInit() {
    this.createForm();
    if (!this.formId)
      this._interactionService._Refid$.subscribe((id)=> {
        if(id) {
          this.Mform.patchValue({"savedFormID": id})
          this.saveFormId = id;
        }
      })
    else {
      this.splashService.splashScreen({
        isLoading : true,
        message : "LOADING"
      })
      this._service.getQuestionnaire1(this.formId).subscribe((res:any[])=> {
        this.formData = res;
        this.saveFormId = this.formId;
        this.splashService.splashScreen({
          isLoading : false,
          message : ""
        })
        if(res.length)
        this.prepareForm();
      })
    }
  }

  createForm() {
    this.Mform = this.eformFB.group({
      "savedFormID": new FormControl({value: 0, disabled: this.disableInput}),
      "lifestyle_walk": new FormControl({value: '', disabled: this.disableInput}),
      "lifestyle_walk_specify": new FormControl({value: '', disabled: this.disableInput}),
      "lifestyle_exercise": new FormControl({value: '', disabled: this.disableInput}),
      "intensity": new FormControl({value: '', disabled: this.disableInput}),
      "healthy": new FormControl({value: '', disabled: this.disableInput}),
      "SpecifyHealthy": new FormControl({value: '', disabled: this.disableInput}),
      "currentSmoke": new FormControl({value: '', disabled: this.disableInput}),


    })
    this.getFormAttributeValues();
  }

  getFormAttributeValues() {
    this._service.getFormAttribute(1,4).subscribe((res)=> {
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
    this.splashService.splashScreen({
      isLoading : true,
      message : "SAVING"
    })
    this._service.createSampleId(1,0).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({
        isLoading : false,
        message : ""
      })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }

  
//added by afreen on 18-11-2022
onSubmit(){
  
  if(!this.Mform.value["savedFormID"] && !this.saveFormId ){
    this.createSampleId();
  }else {
      this.Mform.patchValue({"savedFormID": this.Mform.value["savedFormID"] || this.saveFormId})
      let data = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID",this.formId)
     
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
    if (!this.Mform.value["savedFormID"] && !this.saveFormId) {
      this.createSampleId();
    } else {
      this.Mform.patchValue({"savedFormID" : this.Mform.value["savedFormID"] || this.saveFormId })

      let data = this.finalFormValues.prepareAttibuteForm(this.Mform.value, this.formAttributes, "savedFormID",this.formId)
      if (this.formId || this.isFormSubmit) {
        this.splashService.splashScreen({
          isLoading : true,
          message : "UPDATING"
        })
        this._service.getFormAttributeValues(this.formId || this.Mform.controls["savedFormID"].value).subscribe((res:any) => {
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
                this.splashService.splashScreen({
                  isLoading : false,
                  message : ""
                })
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
        this.splashService.splashScreen({
          isLoading : true,
          message : "INSERTING"
        })
        this._service.createSample1 (data, this.formId ? true : false).subscribe((res)=> {
          if (res) {
            this.splashService.splashScreen({
              isLoading : false,
              message : ""
            })
            this.isFormSubmit = true;
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
