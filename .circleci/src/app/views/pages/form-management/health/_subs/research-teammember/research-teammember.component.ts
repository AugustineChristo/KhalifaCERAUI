
import { Component, OnInit, OnDestroy ,ChangeDetectorRef, Input} from '@angular/core';
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
import { DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';

const AVAILABLE_NATIONALITIES: any[] = Countries;
@Component({
  selector: 'kt-health-research-teammember',
  providers: [ DatePipe ],
  templateUrl: './research-teammember.component.html'
})
export class HealthResearchTeamMemberComponent implements OnInit {
  username: string;
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),new Date().getHours()+1);
  form:FormGroup;
  title:string = "Health research team member";inputReadonly = true;
  @Input('disableInputs') disableInputs:boolean=true;
	userRights: string;
  @Input('formData') formId:any;
  formData:any;
  submitted = false;
  formAttributes:any;
	filteredColletionType:  any[];
  lastQuery = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 15,
		totalRecords : 0
	};
  lastQuery2 = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 16,
		totalRecords : 0
	};
	filteredLocation:  any[];
	showSave : boolean = true;
  filteredPlaces: Observable<string[]>;
  filteredNationalities: Observable<string[]>;
  @Input('disableInput') disableInput:boolean;
  saveFormId : any = 0;
  isFormSubmit : boolean = false;
  constructor(
      private _service:VitamindService,public subheaderService: SubheaderService,
    private disableeformFB: FormBuilder,
    private eformFB:FormBuilder,
      private _interactionService:ComponentInteractionService,
      private _snackBar: MatSnackBar,private cdr: ChangeDetectorRef,
      private splashService : SplashScreenService,private datePipe: DatePipe,
      private finalFormValues:PrepareFinalForm,private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB');
   }

  ngAfterViewInit(): void {
      
  
    this.subheaderService.save$.subscribe(res => {
      this.showSave = res;
      // this.cd.detectChanges();
    })


  }
  ngOnInit() {
    const url = window.location.href;
    if (url.includes('edit') || url.includes('add')) {
      this.showSave = true; 
    }
    else
    this.showSave = false;
      this.userRights =JSON.parse(localStorage.getItem('userRights'));
			this.username = localStorage.getItem('username');
      if(!this.formId)
      this._interactionService._Refid$.subscribe((id)=>{
        if(id) {
          this.form.patchValue({"savedFormID": id})
          this.saveFormId = id;
       }
        })

    else{
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
    {
    this.createForm(); }
 // console.log(this.showSave) }
    else
    this.disablecreateForm();
  }
  getColletionTypemaster() {
		this._service.getList(this.lastQuery2).subscribe((res: any[]) => {
		  this.filteredColletionType = res;
		 });
	 }
	 getLocationmaster() {
		this._service.getList(this.lastQuery).subscribe((res: any[]) => {
		  this.filteredLocation = res;
		 });
	 }
  get f() { return this.form.controls; }
  createForm(){
    const now = new Date();
    // const
    // const datePipe = this.datePipe.transform(this.form.controls['lab_sample_date'].value, 'dd-MM-yyyy, hh:mm')
    this.form = this.eformFB.group({
     "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
 
        "sample": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "projecttitle": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "principalinvestigator": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "collected_by": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "collected_by_last_name": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
        "collected_date": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
        "indifamily": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
        "family_number": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
        "family_yes": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
         "per_firstname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "per_middlename": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "per_lastname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "gender": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "emiratesid": new FormControl({ value: '', disabled: this.disableInputs }),
         "nationality": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "dob": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "placeofbirth": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "age": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ), 
       "medical_reference_number": new FormControl({ value: '', disabled: this.disableInputs}),
       //  this.datePipe.transform(this.opportunityForm.get('createDate').value, 'dd-MM-yyyy')
      //  "lab_sample_date": new FormControl({value: [this.datePipe.transform('', 'medium')],disabled: this.disableInput},[Validators.maxLength(200)] ), 
      //  "lab_sample_date": new FormControl({value: [this.datePipe.transform('', 'medium')],disabled: this.disableInput},[Validators.maxLength(200)] ), 
      // lab_sample_date_saliva: [this.datePipe.transform(new Date(), 'dd/MM/yyyy hh:MM')],
      //  lab_sample_date_hospital: [this.datePipe.transform(new Date(), 'medium')],
      //  lab_sample_date: [this.datePipe.transform(new Date(), 'medium')],
       "lab_sample_type_blood": new FormControl( {value:'', disabled: this.disableInput}), 
      "lab_sample_type_saliva": new FormControl( {value: '', disabled: this.disableInput}), 
      "lab_sample_type_serum": new FormControl( {value: '', disabled: this.disableInput}), 
      "lab_sample_type_other": new FormControl( {value: '', disabled: this.disableInput}), 
      "lab_sample_type_other_text": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
      "lab_sample_date": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
      "lab_sample_date_hospital": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
      "lab_storage": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
      "lab_sample_volume": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
      "lab_sample_date_saliva": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)]), 
      "lab_sample_date_saliva_hospital": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)]), 
      "lab_sample_type_urine": new FormControl( {value: '', disabled: this.disableInput}), 
"lab_storage_saliva": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)] ), 
 "lab_sample_volume_saliva": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_date_serum": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_date_serum_hospital": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_storage_serum": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_volume_serum": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_date_urine": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_date_urine_hospital": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_storage_urine": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_volume_urine": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_type_tissue": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_date_tissue": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_storage_tissue": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_sample_volume_tissue": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_project_code": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
 "lab_test_code": new FormControl({value: '',disabled: this.disableInput}), 
 "lab_comments": new FormControl({value: '',disabled: this.disableInput},[Validators.maxLength(200)] ), 
  });
  const datePipe =  this.form.controls["lab_sample_date_saliva"].value;
  //this.datePipe.transform(this.form.get('lab_sample_date').value, 'dd-MM-yyyy')
    //console.log(datePipe)
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
        this.getFormAttributeValues(); this.getLocationmaster();
        this.getColletionTypemaster();
   }
  disablecreateForm(){
   this.form = this.disableeformFB.group({
    "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),

       "sample": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "projecttitle": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "principalinvestigator": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "collected_by": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "collected_by_last_name": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
       "collected_date": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
       "indifamily": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
       "family_number": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
       "family_yes": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200),Validators.maxLength(200)]),
        "per_firstname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "per_middlename": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "per_lastname": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "gender": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs }),
        "nationality": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "dob": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "placeofbirth": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "age": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ), 
      "medical_reference_number": new FormControl({ value: '', disabled: this.disableInput}),
      "lab_sample_type_blood": new FormControl( {value:'', disabled: this.disableInputs}), 
      "lab_sample_type_saliva": new FormControl( {value:0, disabled: this.disableInputs}), 
      "lab_sample_type_serum": new FormControl( {value:0, disabled: this.disableInputs}), 
     
      "lab_sample_type_other_text": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
      "lab_sample_date": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
      "lab_sample_date_hospital": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
      "lab_storage": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
      "lab_sample_volume": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
      "lab_sample_date_saliva": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)]), 
      "lab_sample_date_saliva_hospital": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)]), 
      "lab_sample_type_urine": new FormControl( {value:0, disabled: this.disableInputs}), 
"lab_storage_saliva": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ), 
"lab_sample_volume_saliva": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_date_serum": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_date_serum_hospital": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_storage_serum": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_volume_serum": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_date_urine": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_date_urine_hospital": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_storage_urine": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_volume_urine": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_type_tissue": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_date_tissue": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_storage_tissue": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
"lab_sample_volume_tissue": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
 "lab_test_code": new FormControl({value: '',disabled: this.disableInput}), 
 "lab_comments": new FormControl({value: '',disabled: this.disableInputs},[Validators.maxLength(200)] ), 
 });
   
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
       this.getFormAttributeValues(); this.getLocationmaster();
       this.getColletionTypemaster();
  }
  getFormAttributeValues() {
    this._service.getFormAttribute(14,3).subscribe((res)=> {
      this.formAttributes = res;
    })
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
    this._service.createSampleId(14,0).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId(parseInt(this.saveFormId));
      this.onSubmit();
    });
  }
  CalculateAge() {
    if (this.form.controls["dob"].value) {
      var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["dob"].value).getTime());
      this.form.patchValue({ "age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) })
    }
  }

  onSubmit() {
    
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
    if(this.form.valid){
      
    if(!this.form.controls["lab_sample_type_blood"].value)
    {
      this.form.patchValue({"lab_sample_date" : "" || ""});
      this.form.patchValue({"lab_sample_date_hospital" : "" || ""});
      this.form.patchValue({"lab_storage" : "" || ""});
      this.form.patchValue({"lab_sample_volume" : "" || ""});
    }

    if(!this.form.controls["lab_sample_type_saliva"].value)
    {
      this.form.patchValue({"lab_sample_date_saliva" : "" || ""});
      this.form.patchValue({"lab_sample_date_saliva_hospital" : "" || ""});
      this.form.patchValue({"lab_storage_saliva" : "" || ""});
      this.form.patchValue({"lab_sample_volume_saliva" : "" || ""});
    }
    if(!this.form.controls["lab_sample_type_tissue"].value)
    {
      this.form.patchValue({"lab_sample_date_tissue" : "" || ""});
      this.form.patchValue({"lab_sample_date_serum_hospital" : "" || ""});
      this.form.patchValue({"lab_sample_volume_tissue" : "" || ""});
      this.form.patchValue({"lab_storage_tissue" : "" || ""});
    }
    if(!this.form.controls["lab_sample_type_urine"].value)
    {
      this.form.patchValue({"lab_sample_date_urine" : "" || ""});
      this.form.patchValue({"lab_sample_date_urine_hospital" : "" || ""});
      this.form.patchValue({"lab_storage_urine" : "" || ""});
      this.form.patchValue({"lab_sample_volume_urine" : "" || ""});
    }
      this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    if (!this.form.value["savedFormID"] && !this.saveFormId) {
      this.createSampleId();
    } else {
      this._service.updateUser(14,this.formId || this.form.controls["savedFormID"].value,this.form.controls["sample"].value).subscribe((res: any) => {

        if (res) {
        }})
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
            this._service.createSample8(data, true).subscribe((res)=> {
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
        this._service.createSample8(data, this.formId ? true : false).subscribe((res)=> {
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

  }

}
