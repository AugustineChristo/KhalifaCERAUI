
import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentInteractionService } from "@services/component-interaction.service";
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { PrepareFinalForm } from "../../../../../../core/_utils/prepareFinalForm";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first, reduce } from 'rxjs/operators';
import { Countries, FatherPlace, MotherPlace } from '../../../../../../core/_utils/countries';
import { mediaPath } from '../../../../../../core/_utils/api.url';
import { VitamindService } from "@services/vitamind.form.service";
const AVAILABLE_NATIONALITIES: any[] = Countries;
const AVAILABLE_FATHER: any[] = MotherPlace;
const AVAILABLE_MOTHER: any[] = FatherPlace;
import { SplashScreenService } from "@services/splash-screen-service";
import { AuthService } from '../../../../../../core/services/auth.service'
import {ConfirmationDialog} from '../../../confirmation-dialog/confirmation-dialog.component';
import { ErrorStateMatcher } from '@angular/material/core';
// import { Subscription } from 'rxjs';

import { SubheaderService } from '../../../../../../core/_base/layout';
import { DateAdapter,MatDialog } from '@angular/material';

function validateIsEmailPhone(group: FormGroup) {
  // let emailStatus = group.get('email').value;
  // let phoneStatus = group.get('phone').value;
  // if(emailStatus === "" && phoneStatus === ""){
  //   return { isRequired: true };
  // }
  
  let familyStatus = group.get('indifamily').value;
  let familynoStatus = group.get('family_number').value;
  
    if(familyStatus !== "Individual" && (familynoStatus === "" || familynoStatus === null))
    return { isRequired: true };
 
  return null;
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'kt-health-personal-details',
  templateUrl: './personal-details.component.html'
})
export class HealthPersonalDetailsComponent implements OnInit {
  username: string;
  form: FormGroup;
  confirmSave: boolean=false;
  confirmalert: boolean=false;
  
  title: string = "Personal Details";
  @Input('formData') formId: any;
  formData: any;yearOfbirth: any;
  formAttributes: any;
	isLoggedIn$: Observable<boolean>;
	loading : boolean = false;
  filteredNationalities: Observable<string[]>;
  filteredMotherPlace: Observable<string[]>;
  filteredFatherPlace: Observable<string[]>;
	private subscriptions: Subscription[] = [];
	userRights: string;
	showSave : boolean = true;
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
  filteredPlaces: Observable<string[]>;
  @Input('disableInput') disableInput: boolean;
  @Input('disableInputs') disableInputs: boolean=true;
  @Input('disableInputAge') disableInputAge: boolean=true;
  saveFormId: any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  url: string | ArrayBuffer = '';
  fileToUpload: File = null;
  fileUploadSuccess: boolean = false;
  isSampleSubmit: boolean = false;
  isFormSubmit: boolean = false;
  mediaPath: string = mediaPath;
  matcher = new MyErrorStateMatcher();
  submitted = false;
  constructor(private _service: VitamindService,public subheaderService: SubheaderService,
    private eformFB: FormBuilder,
    private deformFB: FormBuilder,
    private _interactionService: ComponentInteractionService,
		private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,private auth : AuthService,
    private splashService: SplashScreenService,
    private finalFormValues: PrepareFinalForm,private dateAdapter: DateAdapter<Date>) { 
      // this.dateAdapter.setLocale('en-GB');
    }

  ngOnInit() {
			this.username = localStorage.getItem('username');
      const url = window.location.href;
      if (url.includes('edit') || url.includes('add')) {
        this.showSave = true;
      }
      else
      this.showSave = false;
      this.userRights =JSON.parse(localStorage.getItem('userRights'));
      if(this.showSave)
      this.createForm();  
      else
      this.disablecreateForm();
          this.yearOfbirth = this.getBirthYear();
      this.getLocationmaster();
      this.getColletionTypemaster();
    if (!this.formId)
      this._interactionService._Refid$.subscribe((id) => {
        this.form.patchValue({ "savedFormID": id })

      })
    else {
      this.splashService.splashScreen({ isLoading: true, message: "LOADING" })
      this._service.getQuestionnaire(this.formId, 14).subscribe((res: any[]) => {
        this.formData = res;
        this.saveFormId = this.formId;
        this.splashService.splashScreen({ isLoading: false, message: "" })
        if (res.length)
          this.prepareForm();
      })
    }
  }

  get f() { return this.form.controls; }

		
  dateSplitter(date) {
    //console.log(date);
    if (date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('/');
    } else {
      return null;
    }
  }
 
  // ngAfterViewInit(): void {
  //   this.subheaderService.showSaveButton(true);
      
  
  //   this.subheaderService.save$.subscribe(res => {
  //     console.log('res',res)
  //     this.showSave = res;
  //     // this.cd.detectChanges();
  //   })


  // }
  getBirthYear() {
    //console.log(this.form.controls["dob"].value);

    let _dob = this.dateSplitter(this.form.controls["dob"].value) ? this.dateSplitter(this.form.controls["dob"].value)  : '';
    //console.log(_dob);

    // //console.log(this.form.controls["PCD_BodyWeight"].value );
    if (_dob) {
      let dob_data = _dob.toString().split("/");
      //console.log(dob_data);
      //console.log(dob_data[1]);
      //console.log(dob_data[2]);
      return dob_data[0];
      // let d = new Date(_dob);
      // let dob_data = d.getFullYear();
      // //console.log(dob_data)
    }
    return '[0-9]{4}';
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
   
  createForm() {
    const now = new Date();
    this.form = this.eformFB.group({
      "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
      // "sample": new FormControl({ value: '', disabled: this.disableInput }),
      // "sample" : [null, Validators.required],
      "sample": new FormControl({value: '', disabled: this.disableInputs},[Validators.required,Validators.maxLength(200)]),
      "projecttitle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "principalinvestigator": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collection_point": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_by": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "collected_by_last_name": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_date": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "indifamily": new FormControl({ value: '', disabled: this.disableInput },[Validators.required,Validators.maxLength(200)]),
      "family_number": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "family_yes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "per_firstname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_middlename": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_lastname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "gender": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs }),
      "nationality": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "dob": new FormControl({ value: now, disabled: this.disableInputs },[Validators.maxLength(200)]),
      "placeofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "city": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "phone": new FormControl({ value: '', disabled: this.disableInput}),
      "medical_reference_number": new FormControl({ value: '', disabled: this.disableInput}),
      // "phone": new FormControl({ value: '', disabled: this.disableInput},[Validators.pattern[/^[(\\+971-?)?(?:50|54|52|55|56|53|58|40|45|65|66|2)?[0-9]{6,7}]+$/)]),

      "email": new FormControl({value: '', disabled: this.disableInput},[ Validators.email]),

      // "email": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "ethnicity": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "ethnicity_mixed_specify_text": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "ethnicity_others_text": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "age": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "maritalstatus": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "marriage_con": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_numberofchildren": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "highest_grade": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "highest_degree_earned": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "edugradel": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "edulevel": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "household": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "household_minor": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "ownresidence": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "employment_status": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_boys": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_boys_ages": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_girls": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_girls_ages": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "pers_numberofwives": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      
      "med_healthadvcontact": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_healthadvcontact_othtxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_annualcheck": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_gpvisit": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_gpvisit_yestxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_glucosemon40": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_glucosemon40_othtxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hospitaladm": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hospitaladm_yestxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "allergies": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "allergies_yestxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "intolerance": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "intolerance_yestxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hypertension": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_covid19": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_covid19_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "kidneytransplant_surgery": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "medication_kidneypatient": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_coronaryartery": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_strokemedications": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_ischemicattack": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_anti_epilepticagents": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_contraceptivepills": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_steroids": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_antibiotics": new FormControl( {value:'', disabled: this.disableInput}),
      "med_gestational": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_gestational_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_surgery_dateofsurgerytxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hematological_diseases": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hematological_diseases_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_activeorrecenturinarytractinfection": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_activeorrecenturinarytractinfection_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_kidneydisease": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_kidneydisease_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_prediabetes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_prediabetes_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hypertension_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_type2diabetes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_type2diabetes_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_type1diabetes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_type1diabetes_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_highcholesterol": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_highcholesterol_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_obesity": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_obesity_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_heartdis": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_heartdis_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_cancer": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_cancer_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_cancer_type": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_depression": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_depression_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_osteoporosis": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_osteoporosis_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_asthma": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_asthma_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_inheriteddis": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_inheriteddis_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_thyroid": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_thyroid_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_liver": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_liver_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_arthritis": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_arthritis_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hepatitis": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_hepatitis_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_sickle": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_sickle_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_neurological": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_neurological_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_faint": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_faint_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_migraine": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_migraine_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_epilepsy": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_epilepsy_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_other_specify": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_surgery": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_surgery_yestxt": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "medication_hypertension": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_type1": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_type2": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_choles": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_obe": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_heart": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_cancer": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_dep": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_osteo": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_asth": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_inhdis": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_vit": new FormControl( {value:'', disabled: this.disableInput}),
      "medication_none": new FormControl( {value:'', disabled: this.disableInput}),
      "med_vaccine": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "dyslipidemia": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "diabetic_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "diabetes_com": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "diabetes_com_specify": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "spec_app_retinopathy": new FormControl( {value:'', disabled: this.disableInput}),
      "spec_app_neuropathy": new FormControl( {value:'', disabled: this.disableInput}),
      "neuropathy_other": new FormControl( {value:'', disabled: this.disableInput}),
      "spec_app_cva": new FormControl( {value:'', disabled: this.disableInput}),
      "spec_app_nephropathy": new FormControl( {value:'', disabled: this.disableInput}),
      "nephropathy_albuminuria_others":new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "spec_app_cad": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_comp_other_check": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_comp_others_text": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "diabetes_man_none": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_tabletsonly": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_diettablets": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_diettabletsinsulin": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_dietonly": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_insulinonly": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_dietinsulin": new FormControl( {value:'', disabled: this.disableInput}),
      "diabetes_man_unknown": new FormControl( {value:'', disabled: this.disableInput}),
      "current_diabetes_man_other": new FormControl( {value:'', disabled: this.disableInput}),
      "current_diabetes_man_other_text": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "life_smokingstatus": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "walk": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "walk_ifyes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "walk_others_specify": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "walking_intensity": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "healthy_diet": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "diet_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "weight_change": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "spl_diet": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fastfood_intake": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fruits_veg": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "softdrinks": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "eat_after_midnight": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "satisfied_body": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "happy_life": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "healthy_individual": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_fatethnicity": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_fatethnicity_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_fatplaceofbirth": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_motethnicity": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_motethnicity_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_motplaceofbirth": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_parents_related": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_parents_related_yes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_hypertension": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_heart": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_dep": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_osteo": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_type1": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_type2": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_gesdia": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_cancer": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_condition_cancer_type": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_condition_other": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_epilepsy": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_bipolar": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_schizophrenia": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_traumatic_stress": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_asthma": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_thyroid": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_rheumatoid_arthritis": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_liver": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_high_cholesterol": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_obesity": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_alzheimer": new FormControl( {value:'', disabled: this.disableInput}),
      "fam_parkinsons": new FormControl( {value:'', disabled: this.disableInput}),
      "med_gestational_diabetes": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "average_time_spent": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "average_time_spent14": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "average_time_spent18": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "household_residence": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "noofchildren": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "noofadults": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "noofbedrooms": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "household_income": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "reclining_posture": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_polycystic_ovary_syndrome": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "medication_polycystic_ovary_syndrome": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_covid_vaccine": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "spec_app_bariatric_surgery": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "med_polycystic_ovary_syndrome_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_grandfatmat_related": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      "fam_grandfatmat_related_year": new FormControl({ value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
      //  });
},{ validator: validateIsEmailPhone });
  // let ctrl = this.form.controls["diabetes_man_tabletsonly"].value;
  // console.log('ctrl',ctrl);
  // this.form.patchValue({"diabetes_man_tabletsonly":ctrl.value === null ? "true" : "true"});
  
  // console.log('ctrl', this.form.controls["diabetes_man_tabletsonly"].value);

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
this.filteredMotherPlace= this.form.controls["fam_motplaceofbirth"].valueChanges
.pipe(
  startWith(''),
  map(val => { return this.filterMother(val != null && val != "" ? val.toString() : '') })
);
this.filteredFatherPlace= this.form.controls["fam_fatplaceofbirth"].valueChanges
      .pipe(
        startWith(''),
        map(val => { return this.filterFather(val != null && val != "" ? val.toString() : '') })
      );
    this.getFormAttributeValues();
    this.yearOfbirth= this.getBirthYear();
    //console.log('yob',this.yearOfbirth)
  }
  disablecreateForm() {
    const now = new Date();
    this.form = this.deformFB.group({
      "savedFormID": new FormControl({ value: 0, disabled: this.disableInputs }),
      // "sample": new FormControl({ value: '', disabled: this.disableInputs }),
      // "sample" : [null, Validators.required],
      "sample": new FormControl({value: '', disabled: this.disableInputs},[Validators.required,Validators.maxLength(200)]),
      "projecttitle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "principalinvestigator": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collection_point": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_by": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "collected_by_last_name": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_date": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "indifamily": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required,Validators.maxLength(200)]),
      "family_number": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "family_yes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_firstname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_middlename": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_lastname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "gender": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs }),
      "nationality": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "dob": new FormControl({ value: now, disabled: this.disableInputs },[Validators.maxLength(200)]),
      "placeofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "city": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      // "phone": new FormControl({ value: '', disabled: this.disableInputs},[Validators.pattern("^(?:971)?(?:50|54|52|55|56|53|58|40|45|65|66|20)$")]),
      "phone": new FormControl({ value: '', disabled: this.disableInputs}),
      "email": new FormControl({value: '', disabled: this.disableInputs},[ Validators.email]),
      "medical_reference_number": new FormControl({ value: '', disabled: this.disableInputs}),

      // "email": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "ethnicity": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "ethnicity_mixed_specify_text": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "ethnicity_others_text": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "age": new FormControl({ value: '', disabled: this.disableInputAge },[Validators.maxLength(200)]),
      "maritalstatus": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "marriage_con": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_numberofchildren": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "highest_grade": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "highest_degree_earned": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "edugradel": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "edulevel": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "household": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "household_minor": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "ownresidence": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "employment_status": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_boys": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_boys_ages": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_girls": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_girls_ages": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pers_numberofwives": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "pcd_bodyweight": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_neckcircumference": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_waist": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bodymass": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_height": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_hip": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_neck": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bodyfatper": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bmi": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_whr": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bloodpressure": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bloodpressuresystolic": new FormControl({value: '', disabled: this.disableInputs}),
      "pcd_bloodpressurediastolic": new FormControl({value: '', disabled: this.disableInputs}),
      "skincolor": new FormControl({value: '', disabled: this.disableInputs}),
      "skincolor_other_text": new FormControl({value: '', disabled: this.disableInputs}),
      "med_healthadvcontact": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_healthadvcontact_othtxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_annualcheck": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_gpvisit": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_gpvisit_yestxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_glucosemon40": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_glucosemon40_othtxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hospitaladm": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hospitaladm_yestxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "allergies": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "allergies_yestxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "intolerance": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "intolerance_yestxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hypertension": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_covid19": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_covid19_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "kidneytransplant_surgery": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "medication_kidneypatient": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_coronaryartery": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_strokemedications": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_ischemicattack": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_anti_epilepticagents": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_contraceptivepills": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_steroids": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_antibiotics": new FormControl( {value:'', disabled: this.disableInputs}),
      "med_gestational": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_gestational_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_surgery_dateofsurgerytxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hematological_diseases": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hematological_diseases_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_activeorrecenturinarytractinfection": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_activeorrecenturinarytractinfection_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_kidneydisease": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_kidneydisease_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_prediabetes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_prediabetes_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hypertension_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_type2diabetes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_type2diabetes_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_type1diabetes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_type1diabetes_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_highcholesterol": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_highcholesterol_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_obesity": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_obesity_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_heartdis": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_heartdis_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_cancer": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_cancer_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_cancer_type": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_depression": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_depression_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_osteoporosis": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_osteoporosis_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_asthma": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_asthma_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_inheriteddis": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_inheriteddis_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_thyroid": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_thyroid_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_liver": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_liver_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_arthritis": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_arthritis_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hepatitis": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_hepatitis_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_sickle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_sickle_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_neurological": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_neurological_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_faint": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_faint_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_migraine": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_migraine_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_epilepsy": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_epilepsy_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_other_specify": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_surgery": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_surgery_yestxt": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "medication_hypertension": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_type1": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_type2": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_choles": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_obe": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_heart": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_cancer": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_dep": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_osteo": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_asth": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_inhdis": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_vit": new FormControl( {value:'', disabled: this.disableInputs}),
      "medication_none": new FormControl( {value:'', disabled: this.disableInputs}),
      "med_vaccine": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "dyslipidemia": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "diabetic_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "diabetes_com": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "diabetes_com_specify": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "spec_app_retinopathy": new FormControl( {value:'', disabled: this.disableInputs}),
      "spec_app_neuropathy": new FormControl( {value:'', disabled: this.disableInputs}),
      "neuropathy_other": new FormControl( {value:'', disabled: this.disableInputs}),
      "spec_app_cva": new FormControl( {value:'', disabled: this.disableInputs}),
      "spec_app_nephropathy": new FormControl( {value:'', disabled: this.disableInputs}),
      "nephropathy_albuminuria_others":new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "spec_app_cad": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_comp_other_check": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_comp_others_text": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "diabetes_man_none": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_tabletsonly": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_diettablets": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_diettabletsinsulin": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_dietonly": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_insulinonly": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_dietinsulin": new FormControl( {value:'', disabled: this.disableInputs}),
      "diabetes_man_unknown": new FormControl( {value:'', disabled: this.disableInputs}),
      "current_diabetes_man_other": new FormControl( {value:'', disabled: this.disableInputs}),
      "current_diabetes_man_other_text": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "life_smokingstatus": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "walk": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "walk_ifyes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "walk_others_specify": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "walking_intensity": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "healthy_diet": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "diet_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "weight_change": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "spl_diet": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fastfood_intake": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fruits_veg": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "softdrinks": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "eat_after_midnight": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "satisfied_body": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "happy_life": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "healthy_individual": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_fatethnicity": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_fatethnicity_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_fatplaceofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_motethnicity": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_motethnicity_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_motplaceofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_parents_related": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_parents_related_yes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_hypertension": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_heart": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_dep": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_osteo": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_type1": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_type2": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_gesdia": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_cancer": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_condition_cancer_type": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_condition_other": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_epilepsy": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_bipolar": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_schizophrenia": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_traumatic_stress": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_asthma": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_thyroid": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_rheumatoid_arthritis": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_liver": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_high_cholesterol": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_obesity": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_alzheimer": new FormControl( {value:'', disabled: this.disableInputs}),
      "fam_parkinsons": new FormControl( {value:'', disabled: this.disableInputs}),
      "med_gestational_diabetes": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "average_time_spent": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "average_time_spent14": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "average_time_spent18": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "household_residence": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "noofchildren": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "noofadults": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "noofbedrooms": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "household_income": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "reclining_posture": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_polycystic_ovary_syndrome": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "medication_polycystic_ovary_syndrome": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_covid_vaccine": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "med_polycystic_ovary_syndrome_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "spec_app_bariatric_surgery": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_grandfatmat_related": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "fam_grandfatmat_related_year": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
        //  });
  });
  // let ctrl = this.form.controls["diabetes_man_tabletsonly"].value;
  // console.log('ctrl',ctrl);
  // this.form.patchValue({"diabetes_man_tabletsonly":ctrl.value === null ? "true" : "true"});
  
  // console.log('ctrl', this.form.controls["diabetes_man_tabletsonly"].value);

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
    this.yearOfbirth= this.getBirthYear();
    //console.log('yob',this.yearOfbirth)
  }
  getFormAttributeValues() {
    this._service.getFormAttribute(14, 2).subscribe((res) => {
      this.formAttributes = res;
    })

  }

  calculateBodyMass() {
    if (this.form.controls["pcd_bodyweight"].value && this.form.controls["pcd_height"].value) {
      this.form.patchValue({ "pcd_bmi": (this.form.controls["pcd_bodyweight"].value / (this.form.controls["pcd_height"].value * this.form.controls["pcd_height"].value)).toFixed(2) })
    }
  }
  prepareForm() {
    Object.keys(this.formData[0]).forEach(name => {
      if (this.form.controls[name]) {
        this.form.controls[name].patchValue(this.formData[0][name], { onlySelf: true });
      }
    });

  }

  createSampleId() {
    this.splashService.splashScreen({ isLoading: true, message: "SAVING" })
    this._service.createSampleId(14, this.form.value["sample"]).subscribe((res) => {
      this.saveFormId = res;
      this.splashService.splashScreen({ isLoading: false, message: "" })
      this._interactionService.sendRefId(this.saveFormId);
      this.onSubmit();
    });
  }


	mailsubmit() {

		let data = [];
		data["Name"] = localStorage.getItem('username');
		data["Subject"] = "CIRA Questionnaire Form ID "+this.form.controls['savedFormID'].value;
		data["Message"] = "Dear Research Team,\n "+"<br>"
    +"<br>"
   +" The participant has answered yes to one of the following pre-diabetes management plans\n" +"<br>"
   +"<br>"
  +" ☐ Tablets only\n" +"<br>"
  +" ☐ Insulin only\n" +"<br>"
  +" ☐ Diet & tablets\n"  +"<br>"
  +" ☐ Diet & insulin\n" +"<br>"
  +" ☐ Diet, tablets & insulin\n" +"<br>"                    
    +"<br>"
  +"Kindly confirm whether this participant meets the study inclusion criteria.  If participants meets the study"
  +" inclusion criteria change or update response.  If not kindly exclude participant from study," +"<br>"
  +"<br>"
  +" Yours Sincerely,\n" +"<br>"
  +"<br>"
  +"  Dr Selena Richards";
 
		//data["subject"] = 'Reset Password';
		//data["message"] = '\change-password';
		//return this.httpClient.get(this.baseUrl+`Mail?Name=${data.username}&Email=${data.email}&Subject=${data.subject}&Message=${data.message}`);

		this.loading = true;


		this.loading = true;
		if (data["Name"] == ''){
			this._snackBar.open("Please Enter the User Name", 'Ok', {
				duration: 5000,
				verticalPosition: 'bottom',
				horizontalPosition: 'center'
			});
			this.loading= false;
			// this.userName.nativeElement.click();

		}
  //  console.log(data)

    this.subscriptions.push(this._service.notifyEmail(data).subscribe((res)=>{
		// this.subscriptions.push(data["username"].subscribe((res)=>{
			//console.log(res);
			Promise.resolve(null).then(() => {


this._snackBar.open("Mail Sent to Admin Mail ID!", 'Ok', {
	duration: 5000,
	verticalPosition: 'bottom',
	horizontalPosition: 'center'
});
this.loading= false;
// this.userName.nativeElement.click();

	

		})}));

	}

	alertSurveyForm(){
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to send a mail? Because you have selected Pre-diabetes Management Method.',
        buttonText: { 
        ok: 'Yes',
        cancel: 'No'
        }
      }
      });
    //   const snack = this._snackBar.open('Snack bar open before dialog');
    
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      //  this.splashService.splashScreen({ isLoading: true, message: "SAVING" })
       this.confirmSave = false;
      //  this.confirmAlert();
            this.mailsubmit();
          // this.onSubmit();
        
        const a = document.createElement('a');
        a.click();
        a.remove();
      }
      else{
        this.confirmalert = false;
      }
      });
    
  }
confirmAlert(){
  console.log('thisalert',this.confirmalert)
  if(this.confirmalert){
    this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
    let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId)
    this._service.getFormAttributeValues(this.formId).subscribe((res: any) => {

       if (res) {
         for (var i = 0; i < data.length; i++) {
           for (var j = 0; j < res.length; j++) {
             if (data[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
               data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
             }
           }
         }

         this._service.createSample3(data, true).subscribe((res) => {
           if (res) {
             this.splashService.splashScreen({ isLoading: false, message: "UPDATING" })
             this._snackBar.open("Data has been updated successfully!", 'Ok', {
               duration: 5000,
               verticalPosition: 'bottom',
               horizontalPosition: 'center'
             });
           }
         })

       }
     })}
}
confirmAlertSave(){
  if(this.confirmalert){
    this.splashService.splashScreen({isLoading : true, message : "INSERTING" })
    let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID", this.formId)
  this._service.createSample3(data, true).subscribe((res) => {
    if (res) {
      this.splashService.splashScreen({ isLoading: false, message: "INSERTING" })
      this._snackBar.open("Data has been inserted successfully!", 'Ok', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }
  })
  this.saveFormId = 0;
  this.form.value["savedFormID"] = 0;
}
}
  onSubmit() {
    this.submitted = true;
    var savedFormID = 0;
    if (this.form.invalid) {
      return;
  }
    if (this.formId === undefined) {
      savedFormID = 0;
    }

    else
      savedFormID = this.formId;
    if(this.form.valid){

    if(this.form.controls["med_healthadvcontact"].value !== 'Other')
    {
      this.form.patchValue({"med_healthadvcontact_othtxt" : "" || ""});
    }
    if(this.form.controls["med_gpvisit"].value !== 'Yes')
    {
      this.form.patchValue({"med_gpvisit_yestxt" : "" || ""});
    }
    if(this.form.controls["med_glucosemon40"].value !== 'Other')
    {
      this.form.patchValue({"med_glucosemon40_othtxt" : "" || ""});
    }
    if(this.form.controls["med_hospitaladm"].value !== 'Yes')
    {
      this.form.patchValue({"med_hospitaladm_yestxt" : "" || ""});
    }
    if(this.form.controls["allergies"].value !== 'Yes')
    {
      this.form.patchValue({"allergies_yestxt" : "" || ""});
    }
    if(this.form.controls["intolerance"].value !== 'Yes')
    {
      this.form.patchValue({"intolerance_yestxt" : "" || ""});
    }
    if(this.form.controls["med_covid19"].value !== 'Yes')
    {
      this.form.patchValue({"med_covid19_year" : "" || ""});
    }
    if(this.form.controls["med_hypertension"].value !== 'Yes')
    {
      this.form.patchValue({"med_hypertension_year" : "" || ""});
    }
    if(this.form.controls["med_type2diabetes"].value !== 'Yes')
    {
      this.form.patchValue({"med_type2diabetes_year" : "" || ""});
    }
    if(this.form.controls["med_gestational"].value !== 'Yes')
    {
      this.form.patchValue({"med_gestational_year" : "" || ""});
    }
    if(this.form.controls["med_prediabetes"].value !== 'Yes')
    {
      this.form.patchValue({"med_prediabetes_year" : "" || ""});
    }
    if(this.form.controls["diabetes_com"].value !== 'Yes')
    {
      this.form.patchValue({"diabetes_com_specify" : "" || ""});
      this.form.patchValue({"spec_app_retinopathy" : "" || ""});
      this.form.patchValue({"spec_app_neuropathy" : "" || ""});
      this.form.patchValue({"neuropathy_other" : "" || ""});
      this.form.patchValue({"spec_app_cva" : "" || ""});
      this.form.patchValue({"spec_app_nephropathy" : "" || ""});
      this.form.patchValue({"nephropathy_albuminuria_others" : "" || ""});
      this.form.patchValue({"spec_app_cad" : "" || ""});
      this.form.patchValue({"diabetes_comp_other_check" : "" || ""});
      this.form.patchValue({"diabetes_comp_others_text" : "" || ""});
      this.form.patchValue({"spec_app_bariatric_surgery" : "" || ""});
      this.form.patchValue({"diabetes_man_none" : "" || ""});
      this.form.patchValue({"diabetes_man_dietonly" : "" || ""});
      this.form.patchValue({"current_diabetes_man_other" : "" || ""});
      this.form.patchValue({"current_diabetes_man_other_text" : "" || ""});
    }
    if(this.form.controls["med_type1diabetes"].value !== 'Yes')
    {
      this.form.patchValue({"med_type1diabetes_year" : "" || ""});
    }
    if(this.form.controls["med_highcholesterol"].value !== 'Yes')
    {
      this.form.patchValue({"med_highcholesterol_year" : "" || ""});
    }
    if(this.form.controls["med_obesity"].value !== 'Yes')
    {
      this.form.patchValue({"med_obesity_year" : "" || ""});
    }
    if(this.form.controls["med_kidneydisease"].value !== 'Yes')
    {
      this.form.patchValue({"med_kidneydisease_year" : "" || ""});
    }
    if(this.form.controls["med_activeorrecenturinarytractinfection"].value !== 'Yes')
    {
      this.form.patchValue({"med_activeorrecenturinarytractinfection_year" : "" || ""});
    }
    if(this.form.controls["med_hematological_diseases"].value !== 'Yes')
    {
      this.form.patchValue({"med_hematological_diseases_year" : "" || ""});
    }
    if(this.form.controls["med_heartdis"].value !== 'Yes')
    {
      this.form.patchValue({"med_heartdis_year" : "" || ""});
    }
    if(this.form.controls["med_cancer"].value !== 'Yes')
    {
      this.form.patchValue({"med_cancer_type" : "" || ""});
      this.form.patchValue({"med_cancer_year" : "" || ""});
    }
    if(this.form.controls["med_depression"].value !== 'Yes')
    {
      this.form.patchValue({"med_depression_year" : "" || ""});
    }
    if(this.form.controls["med_osteoporosis"].value !== 'Yes')
    {
      this.form.patchValue({"med_osteoporosis_year" : "" || ""});
    }
    if(this.form.controls["med_asthma"].value !== 'Yes')
    {
      this.form.patchValue({"med_asthma_year" : "" || ""});
    }
    if(this.form.controls["med_inheriteddis"].value !== 'Yes')
    {
      this.form.patchValue({"med_inheriteddis_year" : "" || ""});
    }
    if(this.form.controls["med_thyroid"].value !== 'Yes')
    {
      this.form.patchValue({"med_thyroid_year" : "" || ""});
    }
    if(this.form.controls["med_liver"].value !== 'Yes')
    {
      this.form.patchValue({"med_liver_year" : "" || ""});
    }
    if(this.form.controls["med_arthritis"].value !== 'Yes')
    {
      this.form.patchValue({"med_arthritis_year" : "" || ""});
    }
    if(this.form.controls["med_hepatitis"].value !== 'Yes')
    {
      this.form.patchValue({"med_hepatitis_year" : "" || ""});
    }
    if(this.form.controls["med_sickle"].value !== 'Yes')
    {
      this.form.patchValue({"med_sickle_year" : "" || ""});
    }
    if(this.form.controls["med_neurological"].value !== 'Yes')
    {
      this.form.patchValue({"med_neurological_year" : "" || ""});
    }
    if(this.form.controls["med_faint"].value !== 'Yes')
    {
      this.form.patchValue({"med_faint_year" : "" || ""});
    }
    if(this.form.controls["med_migraine"].value !== 'Yes')
    {
      this.form.patchValue({"med_migraine_year" : "" || ""});
    }
    if(this.form.controls["med_epilepsy"].value !== 'Yes')
    {
      this.form.patchValue({"med_epilepsy_year" : "" || ""});
    }
    if(this.form.controls["med_surgery"].value !== 'Yes')
    {
      this.form.patchValue({"med_surgery_dateofsurgerytxt" : "" || ""});
      this.form.patchValue({"med_surgery_yestxt" : "" || ""});
    }
    if(this.form.controls["diabetes_com"].value !== 'Yes')
    {
      this.form.patchValue({"diabetes_com_specify" : "" || ""});
    }
    if(!this.form.controls["diabetes_comp_other_check"].value)
    {
      this.form.patchValue({"diabetes_comp_others_text" : "" || ""});
    }
    if(!this.form.controls["current_diabetes_man_other"].value)
    {
      this.form.patchValue({"current_diabetes_man_other_text" : "" || ""});
    }
    if(this.form.controls["walk"].value !== 'Yes')
    {
      this.form.patchValue({"walk_ifyes" : "" || ""});
    }
    if(this.form.controls["walk"].value !== 'Other')
    {
      this.form.patchValue({"walk_others_specify" : "" || ""});
    }
    if(this.form.controls["healthy_diet"].value !== 'Others')
    {
      this.form.patchValue({"diet_other" : "" || ""});
    }
    if(this.form.controls["fam_fatethnicity"].value !== 'Other')
    {
      this.form.patchValue({"fam_fatethnicity_other" : "" || ""});
    }
    if(this.form.controls["fam_motethnicity"].value !== 'Other')
    {
      this.form.patchValue({"fam_motethnicity_other" : "" || ""});
    }
    if(this.form.controls["fam_parents_related"].value !== 'Yes')
    {
      this.form.patchValue({"fam_parents_related_yes" : "" || ""});
    }
    if(this.form.controls["med_polycystic_ovary_syndrome"].value !== 'Yes')
    {
      this.form.patchValue({"med_polycystic_ovary_syndrome_year" : "" || ""});
    }
    if(this.form.controls["fam_grandfatmat_related"].value !== 'Yes')
    {
      this.form.patchValue({"fam_grandfatmat_related_year" : "" || ""});
    }
    if(!this.form.controls["fam_cancer"].value)
    {
      this.form.patchValue({"fam_condition_cancer_type" : "" || ""});
    }
    if(!this.form.controls["fam_other"].value)
    {
      this.form.patchValue({"fam_condition_other" : "" || ""});
    }
    if(this.form.controls["indifamily"].value === 'Individual')
    {
      this.form.patchValue({"family_number" : "" || ""});
      this.form.patchValue({"family_yes" : "" || ""});
    }
    if (!this.saveFormId) {
      this.createSampleId();
    } else {
      
      this._service.updateUser(14,this.formId || this.form.controls["savedFormID"].value,this.form.controls["sample"].value).subscribe((res: any) => {

        if (res) {
        }})
      this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId })
      if (this.formId) {
        if(
        (this.form.controls["diabetes_man_tabletsonly"].value ||
        this.form.controls["diabetes_man_diettablets"].value ||
        this.form.controls["diabetes_man_diettabletsinsulin"].value ||
        this.form.controls["diabetes_man_insulinonly"].value ||
        this.form.controls["diabetes_man_dietinsulin"].value) && !this.confirmSave)
        this.alertSurveyForm();
        else{
      //  this.splashService.splashScreen({ isLoading: true, message: "UPDATING" })
       this.confirmalert = true;
          this.confirmAlert();
        }

       
      } else {
        if(
          (this.form.controls["diabetes_man_tabletsonly"].value ||
          this.form.controls["diabetes_man_diettablets"].value ||
          this.form.controls["diabetes_man_diettabletsinsulin"].value ||
          this.form.controls["diabetes_man_insulinonly"].value ||
          this.form.controls["diabetes_man_dietinsulin"].value) && !this.confirmSave)
          this.alertSurveyForm();
          else{
      //  this.splashService.splashScreen({ isLoading: true, message: "INSERTING" })
       this.confirmalert = true;
            this.confirmAlertSave();
          }
        // this.splashService.splashScreen({ isLoading: true, message: "INSERTING" })
      
      }
    }
  }
}
  filterNationalities(val: string): string[] {
    return AVAILABLE_NATIONALITIES.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterMother(val: string): string[] {
    return AVAILABLE_MOTHER.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  filterFather(val: string): string[] {
    return AVAILABLE_FATHER.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  CalculateAge() {
    if (this.form.controls["dob"].value) {
      this.yearOfbirth = this.getBirthYear();
      var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["dob"].value).getTime());
      this.form.patchValue({ "age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) })
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event.target) {
          this.url = reader.result;
          this.cd.detectChanges();
          this.fileUploadSuccess = false;
        }
      }
    }
  }
}
