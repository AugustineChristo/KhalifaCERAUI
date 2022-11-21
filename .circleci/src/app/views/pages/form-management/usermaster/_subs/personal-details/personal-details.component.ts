
import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentInteractionService } from "@services/component-interaction.service";
import { FormBuilder, FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { PrepareFinalForm } from "../../../../../../core/_utils/prepareFinalForm";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first, reduce } from 'rxjs/operators';
import { Countries } from '../../../../../../core/_utils/countries';
import { mediaPath } from '../../../../../../core/_utils/api.url';
import {VitamindService} from "@services/vitamind.form.service";
const AVAILABLE_NATIONALITIES: any[] = Countries;
import {SplashScreenService} from "@services/splash-screen-service";

// import custom validator to validate that password and confirm password fields match
import { ConfirmedValidator } from '../../confirmed.validator';

@Component({
  selector: 'kt-usermaster-personal-details',
  templateUrl: './personal-details.component.html'
})
export class usermasterPersonalDetailsComponent implements OnInit {
 form: FormGroup;
  title: string = "User Master";
  @Input('formData') formId: any;
  formData: any;
  formAttributes: any;
  filteredNationalities: Observable<string[]>;
  filteredRole:  any[];
  filteredReportingTo: any[];
  UserEmail:  any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  MandatoryFields :any;

  filteredPlaces: Observable<string[]>;
  @Input('disableInput') disableInput: boolean;
  saveFormId: any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  url: string | ArrayBuffer = '';
  fileToUpload: File = null;
  fileUploadSuccess: boolean = false;
  isSampleSubmit: boolean = false;
  isFormSubmit : boolean = false;
  mediaPath: string = mediaPath;
  constructor(private _service: VitamindService,
              private eformFB: FormBuilder,
              private _interactionService: ComponentInteractionService,
              private _snackBar: MatSnackBar,
              private cd: ChangeDetectorRef,
              private splashService : SplashScreenService,
              private finalFormValues: PrepareFinalForm) { }

  ngOnInit() {
    this.createForm();
    this.getRole();
    this.getReportingTo();

    if (!this.formId)
      this._interactionService._Refid$.subscribe((id) => {
        this.form.patchValue({ "savedformID": id })

      })
    else {
        this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
        this._service.getQuestionnaire(this.formId,19).subscribe((res: any[]) => {
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
      "savedformID": new FormControl({value: 0, disabled: this.disableInput}),
      //"UserName": new FormControl({value: '', disabled: this.disableInput}),
      "UserName": new FormControl('',[ Validators.required, Validators.minLength(4)]),
      "FullName": new FormControl({value: '', disabled: this.disableInput}),
     "Occupation": new FormControl({value: '', disabled: this.disableInput}),
   
      //"Password": new FormControl({value: '',  disabled: this.disableInput }),
      "Password": new FormControl('',[ Validators.required, Validators.minLength(4) ]),
      "ConfirmPassword": new FormControl('',[ Validators.required, Validators.minLength(4)]),
      
    //  "Email": new FormControl({value: '', disabled: this.disableInput} ),
    "Email": new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailPattern)]),
      "CompanyName": new FormControl({value: '', disabled: this.disableInput}),
      "PhoneNumber": new FormControl({value: '', disabled: this.disableInput}),
      "Address": new FormControl({value: '', disabled: this.disableInput}),
      "City": new FormControl({value: '', disabled: this.disableInput}),
      "State": new FormControl({value: '', disabled: this.disableInput}),
      "PostalCode": new FormControl({value: '', disabled: this.disableInput}),
      "linkedin": new FormControl({value: '', disabled: this.disableInput}),
      "facebook": new FormControl({value: '', disabled: this.disableInput}),
      "twitter": new FormControl({value: '', disabled: this.disableInput}),
      "Instagram": new FormControl({value: '', disabled: this.disableInput}),
      "IsActive": new FormControl({value: '', disabled: this.disableInput}),
      "ReportingTo": new FormControl({value: '', disabled: this.disableInput}),
    } 
    , { 
      validator: ConfirmedValidator('Password', 'ConfirmPassword')
    }
    );


  


this.getFormAttributeValues();
}
getFormAttributeValues() {
this._service.getFormAttribute(19, 1).subscribe((res) => {
this.formAttributes = res;
})

}
prepareForm() {
Object.keys(this.formData[0]).forEach(name => {
if (this.form.controls[name]) {
  this.form.controls[name].patchValue(this.formData[0][name], { onlySelf: true });
}
});

}


createSampleId(){
  this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
  this._service.createSampleId(19,this.form.value["UserName"]).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId( this.saveFormId);
     this.onSubmit();
  });
  }


  onSubmit(){

/*     console.log("Email:"+ this.form.value["Email"]);
    console.log("UserName:"+ this.form.value["UserName"]);
    console.log("Password:"+ this.form.value["Password"]);
    console.log("ConfirmPassword:"+ this.form.value["ConfirmPassword"]); */

    this.MandatoryFields =" ";
if (!this.form.value["UserName"]){   this.MandatoryFields= this.MandatoryFields+"UserName "; }
if (!this.form.value["Email"]){   this.MandatoryFields= this.MandatoryFields+"Email ID "; }
if (!this.form.value["Password"]){   this.MandatoryFields= this.MandatoryFields+"Password "; }
if (!this.form.value["ConfirmPassword"]){   this.MandatoryFields= this.MandatoryFields+"Confirm Password "; }
    
    if (this.form.invalid) {

      this._snackBar.open(this.MandatoryFields +"  Not Entered  or Invalid", 'Ok', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
       
    });
      
      return;
   } 
  
/*    var savedFormID = 0;
   if (this.form.invalid) {
     return;
 } */



    var savedformID=0;
    if (this.formId===undefined)
    {
      savedformID=0;
     /*  console.log("Saved Form ID"+savedformID);
      console.log("Form ID"+this.formId); */
    }
   
    else
    savedformID=this.formId
     /*  if(!this.form.value["savedformID"] && !this.saveFormId ){  */
        if(!this.saveFormId ){ 
      /*   if(!this.form.value["savedformID"]  ){ */
        this.createSampleId();
    /*     console.log("Saved Form ID"+savedformID); */

      }else {
          this.form.patchValue({"savedformID": this.form.value["savedformID"] || this.saveFormId})
          let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedformID",this.formId)

 
          if (this.formId) {
              this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
              this._service.getFormAttributeValues(this.formId).subscribe((res:any) => {

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
              this._service.createSample3(data, true).subscribe((res)=> {
                  if (res) {
                      this.splashService.splashScreen({isLoading : false, message : "" })
                     /*  this.formId=0 */
                      this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                          duration: 5000,
                          verticalPosition: 'bottom',
                          horizontalPosition: 'center'
                         
                      });
                  }
              })
              this.saveFormId=0;
              this.form.value["savedformID"]=0;
             /*  console.log("after Insert saveformid"+this.saveFormId);
              console.log("after Insert savedformID"+this.form.value["savedformID"]); */
        
          }
      }
  }


   getRole() 
   {
		this._service.getQuestionnaire(0,17).subscribe((res: any[]) => {
		  this.filteredRole = res;
		 });
	 } 

   getReportingTo() 
   {
		this._service.getQuestionnaire(0,19).subscribe((res: any[]) => {
		  this.filteredReportingTo = res;
		 });
	 } 

 get Email() {
    return this.form.get('Email');
} 
 get UserName() {
  return this.form.get('UserName');
} 


get f(){
  return this.form.controls;
}
 


}
