
import { Component, OnInit, OnDestroy , Input,ChangeDetectorRef} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first , reduce } from 'rxjs/operators';
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";
import { SubheaderService } from '../../../../../../core/_base/layout';
import { Countries } from '../../../../../../core/_utils/countries';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material';
import { HttpParams } from '@angular/common/http';
const AVAILABLE_NATIONALITIES: any[] = Countries;

function validateIsEmailPhone(group: FormGroup) {
  let emailStatus = group.get('email').value;
  let phoneStatus = group.get('phone').value;
  if(emailStatus === "" && phoneStatus === ""){
    return { isRequired: true };
  }
  
  // let familyStatus = group.get('indifamily').value;
  // let familynoStatus = group.get('family_number').value;
  
  //   if(familyStatus !== "Individual" && (familynoStatus === "" || familynoStatus === null))
  //   return { isRequired: true };
 
  return null;
}

@Component({
  selector: 'kt-health-register-nurse',
  templateUrl: './register-nurse.component.html'
})
export class HealthRegisterNurseComponent implements OnInit {
  username: string;
  form:FormGroup;
  title:string = "Health Register Nurse";
  @Input('formData') formId:any;
  formData:any;
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	userRights: string;
  formAttributes:any;
  filteredPlaces: Observable<string[]>;
  filteredNationalities: Observable<string[]>;
  @Input('disableInput') disableInput:boolean;
  @Input('disableInputs') disableInputs:boolean=true;
  saveFormId : any = 0;
	filteredColletionType:  any[];
	filteredCollectedby:  any[];
  lastQuery2 = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 16,
		totalRecords : 0
	};
  lastQuery3 = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 21,
		totalRecords : 0
	};
	filteredLocation:  any[];
  lastQuery = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 15,
		totalRecords : 0
	};
  submitted = false;
	showSave : boolean = true;
	showSavebtn : boolean = false;
  isFormSubmit : boolean = false;
  constructor(
      private _service:VitamindService,public subheaderService: SubheaderService,
      private eformFB:FormBuilder,private route: ActivatedRoute,
    private disableeformFB: FormBuilder,
    private cd: ChangeDetectorRef,
      private _interactionService:ComponentInteractionService,
      private _snackBar: MatSnackBar,
      private splashService : SplashScreenService,
      private finalFormValues:PrepareFinalForm,private dateAdapter: DateAdapter<Date>
  ) { this.dateAdapter.setLocale('en-GB');}

  ngOnInit() {
    const url = window.location.href;
    if (url.includes('edit') || url.includes('add')) {
      this.showSave = true;
    }
    else
    this.showSave = false;

    // console.log('res',this.showSave,this.showSavebtn,first);

      this.userRights =JSON.parse(localStorage.getItem('userRights'));
			this.username = localStorage.getItem('username');
      if(!this.formId){
       
      this._interactionService._Refid$.subscribe((id)=>{
        if(id) {
          // this.form.patchValue({"savedFormID": id})
          this.saveFormId = id;
       }
        })
}
    else{
      // if(this.showSave)
      // this.showSave=this.showSave;
      // console.log('thisshow',this.showSave)
      this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
      this._service.getQuestionnaire(this.formId,14).subscribe((res:any[])=> {
        this.formData  = res;
        if(res.length)
        this.prepareForm();
        this.splashService.splashScreen({isLoading : false, message : "" })
        this.saveFormId = this.formId;
      })
    }
    if(this.showSave)
      this.createForm();  
      else
      this.disablecreateForm();
  }
 edit(){
  if(!this.formId){
       
    this._interactionService._Refid$.subscribe((id)=>{
      if(id) {
        this.form.patchValue({"savedFormID": id})
        this.saveFormId = id;
     }
      })
}
else{
  // console.log(this.formId)
  this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
  this._service.getQuestionnaire(this.form.controls["savedFormID"].value || this.formId,14).subscribe((res:any[])=> {
    this.formData  = res;
    if(res.length)
    this.prepareForm();
    this.splashService.splashScreen({isLoading : false, message : "" })
    this.saveFormId = this.formId;
})}
this.createForm();  

 }
  get f() { return this.form.controls; }
  createForm(){
    this.form = this.eformFB.group({
       "savedFormID": new FormControl({value: 0,disabled: this.disableInput }),
       //common
       "sample": new FormControl({value: '',disabled: this.disableInput },[Validators.required,Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "projecttitle": new FormControl({ value: 'Early onset prediction of diabetes within UAE population',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "principalinvestigator": new FormControl({ value: 'Dr Selena E Richards',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "collection_point": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       //"collected_by": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
       "collected_by": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
       "collected_by_last_name": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
       "collected_date": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
       
       "medical_reference_number": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
       "per_firstname": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
       "per_middlename": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
       "per_lastname": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
       "gender": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "emiratesid": new FormControl({ value: '', disabled: this.disableInput },[Validators.required]),
       "nationality": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "dob": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
       "placeofbirth": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
       "age": new FormControl({ value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]), 
       "indifamily": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required,Validators.maxLength(200)]),
      "family_number": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "family_yes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "phone": new FormControl({ value: '', disabled: this.disableInput}),
      "email": new FormControl({value: '', disabled: this.disableInput},[ Validators.email,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      // "email": new FormControl({value: '', disabled: this.disableInput},[ Validators.email]),
      "city": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
  //
       "pcd_bodyweight": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_neckcircumference": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_waist": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bodymass": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_height": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_hip": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_neck": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bodyfatper": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bmi": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_whr": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bloodpressure": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bloodpressuresystolic": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
       "pcd_bloodpressurediastolic": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
     //   "skincolor": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
      //  "skincolor_other_text": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
 
    },{ validator: validateIsEmailPhone });
    
    this.getLocationmaster();
    this.getColletionTypemaster();
   this.getColletedbymaster();

    this.filteredNationalities = this.form.controls["nationality"].valueChanges
    .pipe(
      startWith(''),
      map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
    );
    this.filteredPlaces = this.form.controls["placeofbirth"].valueChanges
    .pipe(
      startWith(''),
      map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
    );
     this.getFormAttributeValues();
   }
  disablecreateForm(){
   this.form = this.disableeformFB.group({
      "savedFormID": new FormControl({value: 0,disabled: this.disableInput }),
      //common
      "sample": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "projecttitle": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "principalinvestigator": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "collected_by": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_by_last_name": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
      "collected_date": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "medical_reference_number": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "indifamily": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required,Validators.maxLength(200)]),
      "family_number": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "family_yes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "per_firstname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
      "per_middlename": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
      "per_lastname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[a-zA-Z _\\\/.’'-]+$/)]),
      "gender": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required]),
      "nationality": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "dob": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "placeofbirth": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "age": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]), 
      "city": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s]+$/)]),
      "phone": new FormControl({ value: '', disabled: this.disableInputs}),
      "email": new FormControl({value: '', disabled: this.disableInputs},[ Validators.email]),
 //
      "pcd_bodyweight": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_neckcircumference": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_waist": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bodymass": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_height": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_hip": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_neck": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bodyfatper": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bmi": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_whr": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bloodpressure": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bloodpressuresystolic": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "pcd_bloodpressurediastolic": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "skincolor": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),
      "skincolor_other_text": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200), Validators.pattern(/^[\w\s.]+$/)]),

   });
   
   this.getLocationmaster();
   this.getColletionTypemaster();
   this.getColletedbymaster();
   this.filteredNationalities = this.form.controls["nationality"].valueChanges
   .pipe(
     startWith(''),
     map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
   );
   this.filteredPlaces = this.form.controls["placeofbirth"].valueChanges
   .pipe(
     startWith(''),
     map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
   );
    this.getFormAttributeValues();
  }
  getFormAttributeValues() {
    this._service.getFormAttribute(14,1).subscribe((res)=> {
      this.formAttributes = res;
    })
  }

  getColletionTypemaster() {
		this._service.getList(this.lastQuery2).subscribe((res: any[]) => {
		  this.filteredColletionType = res;
		 });
	 }
   getColletedbymaster() {
     this._service.getList(this.lastQuery3).subscribe((res: any[]) => {
       this.filteredCollectedby = res;
      });
    }
   
	 getLocationmaster() {
		this._service.getList(this.lastQuery).subscribe((res: any[]) => {
		  this.filteredLocation = res;
		 });
	 }
  filterNationalities(val: string): string[] {
    return AVAILABLE_NATIONALITIES.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  prepareForm() {
    Object.keys(this.formData[0]).forEach(name => {
      if (this.form.controls[name]) {
        this.form.controls[name].patchValue(this.formData[0][name], {onlySelf: true});
      }
    });
  }

  createSampleId() {
    this._service.createSampleId(14,this.form.value["sample"]).subscribe((res)=> {
      this.saveFormId = res;
      this.form.patchValue({"savedFormID" : res })

      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }

  onSubmit() {
    console.log('saveFormId1',this.saveFormId,this.formId,this.form.value["savedFormID"])
   
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
    if(this.form.valid){
      console.log('saveFormId2',this.saveFormId,this.form.value["savedFormID"])

      this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    //if (!this.form.value["savedFormID"] && !this.saveFormId) {
      if (!this.form.value["savedFormID"] && !this.formId) {
      console.log('formid',this.saveFormId,this.formId,this.form.value["savedFormID"])
      this.createSampleId();
    } else {
      console.log('formid2',this.saveFormId,this.formId,this.form.value["savedFormID"])
      
      // this._service.updateUser(14,this.saveFormId,this.form.controls["sample"].value).subscribe((res: any) => {

        // if (res) {
        // }})
        let EmiratesID,EmiratesId,phone,Phone;
        EmiratesId = this.form.controls["emiratesid"].value;
        EmiratesId= EmiratesId.replace('-','');
        EmiratesId= EmiratesId.replace('-','');
        EmiratesId= EmiratesId.replace('-','');
        EmiratesID = EmiratesId.substring(0,3)+ '-'+EmiratesId.substring(3,7)+ '-'+EmiratesId.substring(7,14)+'-'+EmiratesId.substring(14,15);
        phone = this.form.controls["phone"].value;
        phone = phone.replace('+','');
        phone = phone.replace(' ','');

       if(phone.length === 12)
        Phone = '+'+phone.substring(0,3)+ ' '+phone.substring(3,12);
        if(phone.length === 11)
         Phone = '+'+phone.substring(0,3)+ ' '+phone.substring(3,11);
      this.form.patchValue({"savedFormID" : this.form.value["savedFormID"] || this.saveFormId })
      this.form.patchValue({"phone" : Phone|| Phone })
        this.form.patchValue({"emiratesid" : EmiratesID|| EmiratesID })
      let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
      if (this.formId) {
        this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
        this._service.getFormAttributeValues( this.form.controls["savedFormID"].value || this.formId).subscribe((res:any) => {
          if(res){
            for(var i=0;i<data.length;i++) {
              for (var j = 0; j < res.length; j++) {
                if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
                  data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
                }
              }
            }
            this._service.createSample8(data, true).subscribe((res)=> {
              if (res) {
                this.splashService.splashScreen({isLoading : false, message : "" })
                this._snackBar.open("Data has been updated successfully!", 'Ok', {
                  duration: 5000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center'
                });
  this.edit();
}
            })

          }
        })
      } 
      else {
        
        this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
        this._service.createSample8(data, this.formId ? true : false).subscribe((res)=> {
          if (res) {
            this.isFormSubmit = true;
            this.splashService.splashScreen({isLoading : false, message : "" })
            this._snackBar.open("Data has been inserted successfully!", 'Ok', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            }
            );
}
        })
      //   if(this.formId){
      //   this.saveFormId = 0;
      // this.form.patchValue({"savedFormID" : 0 })

      //   console.log('saveFormId',this.saveFormId,this.form.value["savedFormID"])
      //   this.form.value["savedFormID"]=0;
      //   }
        this.formId = true;
      }
    }
  }
  }

  CalculateAge() {
    if (this.form.controls["dob"].value) {
      var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["dob"].value).getTime());
      this.form.patchValue({ "age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) })
    }
  }
  calculateBodyMass(){
    if(this.form.controls["pcd_bodyweight"].value && this.form.controls["pcd_height"].value){
      this.form.patchValue({"pcd_bmi" : (this.form.controls["pcd_bodyweight"].value/(this.form.controls["pcd_height"].value*this.form.controls["pcd_height"].value)).toFixed(2) })
    }
  }

}