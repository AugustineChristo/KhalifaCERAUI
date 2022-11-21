
import { Component, OnInit, OnDestroy , Input} from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import { FormBuilder, FormGroup,FormControl , Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first , reduce } from 'rxjs/operators';
import {VitamindService} from "@services/vitamind.form.service";
import * as XLSX from 'xlsx';
import {SplashScreenService} from "@services/splash-screen-service";
import { SubheaderService } from '../../../../../../core/_base/layout';
import { Countries } from '../../../../../../core/_utils/countries';
import { DateAdapter } from '@angular/material';
const AVAILABLE_NATIONALITIES: any[] = Countries;
// import { ErrorStateMatcher } from '@angular/material/core';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'kt-health-physicianbiochemical',
  templateUrl: './physiciansbiochemical.component.html'
})
export class HealthPhysicianBioChemicalComponent implements OnInit {
  username: string;
  form:FormGroup;
  title:string = "Health Physicians";
  @Input('formData') formId:any;
  file:File;
		arrayBuffer:any;
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
	public dataList : any[];
  formData:any;
  formAttributes:any;
  filteredNationalities: Observable<string[]>;
  @Input('disableInput') disableInput:boolean;
	userRights: string;
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  @Input('disable') disable:boolean=false;
  @Input('disableInputs') disableInputs:boolean=true;
  
  filteredPlaces: Observable<string[]>;
  // filteredNationalities: Observable<string[]>;
  submitted = false;
	showSave : boolean = true;
  saveFormId : any = 0;
  isFormSubmit : boolean = false;
  // matcher = new MyErrorStateMatcher();
  constructor(
      private _service:VitamindService,public subheaderService: SubheaderService,
  
    private eformFB:FormBuilder,
      private _interactionService:ComponentInteractionService,
      private _snackBar: MatSnackBar,
      private splashService : SplashScreenService,
      private finalFormValues:PrepareFinalForm
      ,private dateAdapter: DateAdapter<Date>) { 
        this.dateAdapter.setLocale('en-GB');}

  ngAfterViewInit(): void {
      
  
    this.subheaderService.save$.subscribe(res => {
      this.showSave = res;
      // this.cd.detectChanges();
    })


  }
  ngOnInit() {
      this.userRights =JSON.parse(localStorage.getItem('userRights'));
      const url = window.location.href;
      if (url.includes('edit') || url.includes('add')) {
        this.showSave = true;
      }
      else
      this.showSave = false;
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
        this.saveFormId = this.formId; this.getLocationmaster();
        this.getColletionTypemaster();
      })
    }
    
    if(this.showSave)
    this.createForm(); 
  }
  get f() { return this.form.controls; }

	incomingfileexcel(event) 
	{
		  this.dataList = [];
		  this.file= event.target.files[0]; 
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
   UploadExcel() {
		let fileReader = new FileReader();
		  fileReader.onload = (e) => {
			  this.arrayBuffer = fileReader.result;
			  var data = new Uint8Array(this.arrayBuffer);
			  var arr = new Array();
			  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
			  var bstr = arr.join("");
			  var workbook = XLSX.read(bstr, {type:"binary",cellDates: true,
			  cellNF: false,
			  cellText: false});
			  var first_sheet_name = workbook.SheetNames[0];
			  var worksheet = workbook.Sheets[first_sheet_name];
			  var pojo= XLSX.utils.sheet_to_json(worksheet,{raw:true});
			  var list =this.hotfixXLSXdateCells(pojo);
			  this.dataList =XLSX.utils.sheet_to_json(worksheet,{raw:true});
		  }
		  fileReader.readAsArrayBuffer(this.file);
  }
   hotfixXLSXdateCells(rowsList) {
	var key, dateKeys = [];
	for (key in rowsList[0]) {
		if (rowsList[0][key] && rowsList[0][key].constructor && rowsList[0][key].constructor === Date) {
			dateKeys.push(key);
		}
	}
	var i = -1, j, row;
	while (row = rowsList[++i]) {
		j = -1
		while (key = dateKeys[++j]) {
			this.hotfixDateCell(row, key);
		}
	}
}
	/**
	 * @param {Object} row 
	 * @param {string} key 
	 */
	 hotfixDateCell(row, key) {
		/**
		 * @type {Date}
		 */
		var d = row[key];
		if (!d || !row[key].constructor || row[key].constructor !== Date) {
			return;
		}
		if (d.getHours() != 0) {
			if (d.getTimezoneOffset() < 0) {
				d.setHours(24, 0, 0, 0);
			} else {
				d.setHours(-24, 0, 0, 0);
			}
		}
	}
  
  createForm(){
   this.form = this.eformFB.group({
    "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
    "bio_fastingglucose_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fastingglucose_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_fastingglucose_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fastingglucose_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fastingglucose_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_randomglucose_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_randomglucose_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_randomglucose_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_randomglucose_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_randomglucose_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ogtt_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ogtt_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_ogtt_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ogtt_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ogtt_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fg2_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fbg_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_fbg_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fbg_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fbg_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fbg_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fg2_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_fg2_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fg2_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fg2_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hba1c_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hba1c_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_hba1c_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hba1c_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hba1c_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fasting_insulin_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fasting_insulin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_fasting_insulin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fasting_insulin_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_fasting_insulin_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_totalcholesterol_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_totalcholesterol_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_totalcholesterol_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_totalcholesterol_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_totalcholesterol_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_triglyceride_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_triglyceride_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_triglyceride_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_triglyceride_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_triglyceride_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hdl_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hdl_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_hdl_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hdl_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_hdl_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ldl_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ldl_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_ldl_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ldl_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ldl_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_vitamindlevel_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_vitamindlevel_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_vitamindlevel_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_vitamindlevel_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_vitamindlevel_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_microalbumin_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_microalbumin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_microalbumin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_microalbumin_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_microalbumin_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albuminuria_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albuminuria_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_albuminuria_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albuminuria_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albuminuria_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albumincreatinine_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albumincreatinine_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_albumincreatinine_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albumincreatinine_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_albumincreatinine_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_creatinine_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_creatinine_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_creatinine_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_creatinine_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_creatinine_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_egfr_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_egfr_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_egfr_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_egfr_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_egfr_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_sodium_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_sodium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_sodium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_sodium_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_sodium_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_potassium_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_potassium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_potassium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_potassium_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_potassium_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_calcium_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_calcium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_calcium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_calcium_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_calcium_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_magnesium_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_magnesium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_magnesium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_magnesium_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_magnesium_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_phosphorus_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_phosphorus_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_phosphorus_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_phosphorus_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_phosphorus_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_urea_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_urea_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_urea_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_urea_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_urea_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bicarbonate_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bicarbonate_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_bicarbonate_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bicarbonate_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bicarbonate_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alt_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alt_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_alt_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alt_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alt_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alp_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alp_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_alp_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alp_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_alp_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ast_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ast_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_ast_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ast_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ast_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bilirubin_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bilirubin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_bilirubin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bilirubin_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_bilirubin_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_protein_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_protein_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_protein_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_protein_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_protein_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_serum_albumin_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_serum_albumin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_serum_albumin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_serum_albumin_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_serum_albumin_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_cprotein_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_cprotein_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_cprotein_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_cprotein_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_cprotein_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t3_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t3_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_t3_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t3_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t3_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t4_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t4_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_t4_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t4_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_t4_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_freet4_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_freet4_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_freet4_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_freet4_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_freet4_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_tsh_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_tsh_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_tsh_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_tsh_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_tsh_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_parathyroid_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_parathyroid_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_parathyroid_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_parathyroid_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_parathyroid_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_wbc_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_diffcount_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_diffcount_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_wbc_diffcount_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_diffcount_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_wbc_diffcount_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rbc_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rbc_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_rbc_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rbc_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rbc_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haemoglobin_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haemoglobin_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_haemoglobin_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haemoglobin_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haemoglobin_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haematocrit_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haematocrit_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_haematocrit_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haematocrit_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_haematocrit_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ferritin_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ferritin_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_ferritin_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ferritin_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_ferritin_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rdw_count_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rdw_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_rdw_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rdw_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_rdw_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_redbloodcellindice_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_redbloodcellindice_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_redbloodcellindice_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_redbloodcellindice_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_redbloodcellindice_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mcv_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mcv_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_mcv_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mcv_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mcv_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mch_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mch_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_mch_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mch_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mch_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mchc_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mchc_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_mchc_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mchc_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mchc_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_reticulocyte_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_reticulocyte_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_reticulocyte_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_reticulocyte_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_reticulocyte_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_platelet_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_platelet_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_platelet_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_platelet_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_platelet_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mpvplatelet_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mpvplatelet_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_mpvplatelet_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mpvplatelet_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_mpvplatelet_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_betaamyloid_result_normal": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_betaamyloid_date_of_recent_test": new FormControl({value: '', disabled: this.disableInput }),
"bio_betaamyloid_result_of_recent_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_betaamyloid_date_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
"bio_betaamyloid_result_of_last_test": new FormControl({value: '', disabled: this.disableInput },[Validators.maxLength(200)]),
    });
    this.getFormAttributeValues();
  }

  //   disablecreateForm(){
  //     this.form = this.disableeformFB.group({
  //      "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
  //      "bio_fastingglucose_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fastingglucose_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_fastingglucose_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fastingglucose_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fastingglucose_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_randomglucose_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_randomglucose_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_randomglucose_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_randomglucose_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_randomglucose_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ogtt_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ogtt_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_ogtt_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ogtt_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ogtt_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fg2_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fbg_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_fbg_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fbg_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fbg_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fbg_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fg2_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_fg2_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fg2_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fg2_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hba1c_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hba1c_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_hba1c_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hba1c_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hba1c_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fasting_insulin_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fasting_insulin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_fasting_insulin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fasting_insulin_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_fasting_insulin_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_totalcholesterol_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_totalcholesterol_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_totalcholesterol_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_totalcholesterol_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_totalcholesterol_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_triglyceride_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_triglyceride_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_triglyceride_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_triglyceride_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_triglyceride_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hdl_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hdl_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_hdl_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hdl_date_of_last_test": new FormContSaverol({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_hdl_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ldl_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ldl_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_ldl_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ldl_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ldl_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_vitamindlevel_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_vitamindlevel_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_vitamindlevel_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_vitamindlevel_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_vitamindlevel_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_microalbumin_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_microalbumin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_microalbumin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_microalbumin_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_microalbumin_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albuminuria_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albuminuria_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_albuminuria_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albuminuria_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albuminuria_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albumincreatinine_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albumincreatinine_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_albumincreatinine_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albumincreatinine_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_albumincreatinine_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_creatinine_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_creatinine_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_creatinine_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_creatinine_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_creatinine_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_egfr_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_egfr_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_egfr_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_egfr_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_egfr_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_sodium_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_sodium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_sodium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_sodium_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_sodium_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_potassium_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_potassium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_potassium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_potassium_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_potassium_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_calcium_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_calcium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_calcium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_calcium_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_calcium_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_magnesium_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_magnesium_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_magnesium_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_magnesium_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_magnesium_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_phosphorus_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_phosphorus_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_phosphorus_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_phosphorus_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_phosphorus_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_urea_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_urea_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_urea_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_urea_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_urea_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bicarbonate_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bicarbonate_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_bicarbonate_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bicarbonate_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bicarbonate_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alt_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alt_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_alt_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alt_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alt_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alp_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alp_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_alp_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alp_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_alp_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ast_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ast_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_ast_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ast_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ast_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bilirubin_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bilirubin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_bilirubin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bilirubin_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_bilirubin_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_protein_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_protein_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_protein_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_protein_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_protein_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_serum_albumin_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_serum_albumin_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_serum_albumin_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_serum_albumin_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_serum_albumin_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_cprotein_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_cprotein_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_cprotein_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_cprotein_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_cprotein_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t3_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t3_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_t3_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t3_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t3_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t4_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t4_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_t4_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t4_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_t4_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_freet4_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_freet4_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_freet4_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_freet4_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_freet4_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_tsh_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_tsh_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_tsh_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_tsh_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_tsh_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_parathyroid_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_parathyroid_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_parathyroid_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_parathyroid_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_parathyroid_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_wbc_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_diffcount_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_diffcount_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_wbc_diffcount_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_diffcount_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_wbc_diffcount_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rbc_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rbc_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_rbc_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rbc_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rbc_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haemoglobin_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haemoglobin_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_haemoglobin_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haemoglobin_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haemoglobin_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haematocrit_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haematocrit_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_haematocrit_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haematocrit_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_haematocrit_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ferritin_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ferritin_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_ferritin_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ferritin_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_ferritin_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rdw_count_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rdw_count_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_rdw_count_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rdw_count_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_rdw_count_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_redbloodcellindice_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_redbloodcellindice_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_redbloodcellindice_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_redbloodcellindice_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_redbloodcellindice_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mcv_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mcv_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_mcv_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mcv_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mcv_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mch_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mch_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_mch_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mch_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mch_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mchc_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mchc_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_mchc_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mchc_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mchc_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_reticulocyte_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_reticulocyte_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_reticulocyte_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_reticulocyte_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_reticulocyte_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_platelet_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_platelet_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_platelet_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_platelet_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_platelet_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mpvplatelet_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mpvplatelet_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_mpvplatelet_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mpvplatelet_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_mpvplatelet_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_betaamyloid_result_normal": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_betaamyloid_date_of_recent_test": new FormControl({value: '', disabled: this.disableInputs }),
  //  "bio_betaamyloid_result_of_recent_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_betaamyloid_date_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //  "bio_betaamyloid_result_of_last_test": new FormControl({value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
  //      });
    
  //      this.getFormAttributeValues();
  // }
  getFormAttributeValues() {
    this._service.getFormAttribute(14,4).subscribe((res)=> {
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

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
     return;
  }
    if(this.form.valid){
    this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
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

CalculateAge() {
  if (this.form.controls["dob"].value) {
    var timeDiff = Math.abs(Date.now() - new Date(this.form.controls["dob"].value).getTime());
    this.form.patchValue({ "age": (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toFixed(0) })
  }
}
  calculateBodyMass(){
    if(this.form.controls["PCD_BodyWeight"].value && this.form.controls["PCD_Height"].value){
      this.form.patchValue({"PCD_bmi" : (this.form.controls["PCD_BodyWeight"].value/(this.form.controls["PCD_Height"].value*this.form.controls["PCD_Height"].value)).toFixed(2) })
    }
  }

}
