
import { Component, OnInit, OnDestroy ,ChangeDetectorRef, Input} from '@angular/core';
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
import {ConfirmationDialog} from '../../../confirmation-dialog/confirmation-dialog.component';
import { DateAdapter,MatDialog } from '@angular/material';
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
  selector: 'kt-health-physician',
  templateUrl: './physician.component.html'
})
export class HealthPhysicianComponent implements OnInit {
  username: string;
  form:FormGroup;
  // dataList: [];
  visible : boolean = false;
  title:string = "Health Physician";
  @Input('formData') formId:any;
  file:File;
  @Input() Columns : any = [];
	loading : boolean = false;
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
	private subscriptions: Subscription[] = [];
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
    private disableeformFB: FormBuilder,
      private cdr: ChangeDetectorRef,
      private eformFB:FormBuilder,
    private exceleformFB:FormBuilder,
      private _interactionService:ComponentInteractionService,
		private dialog: MatDialog,
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
        this.formData  = res;this.fetchdataList();
        if(res.length)
        this.prepareForm();
        this.splashService.splashScreen({isLoading : false, message : "" })
        this.saveFormId = this.formId; this.getLocationmaster();
        this.getColletionTypemaster();
      })
    }
    if(this.showSave)
    this.createForm();  
    else
    this.disablecreateForm();
  }
  get f() { return this.form.controls; }

  // fetchList(){
  //   this.dataList = [];
  //   this.loading$ =true;
  //   this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
  //   this._service.getList(this.lastQuery).subscribe((res : any[])=>{
  //     if(res[0].result=== "")
  //     this.dataSource = [];
  //       else
  //       this.dataSource = res;
  //     this.loading$ =false;
  //     this.cdr.detectChanges();
  //     this.splashService.splashScreen({isLoading : false, message : "" })
  //   });
  // }
	incomingfileexcel(event) 
	{
    
		  this.dataList = [];
		  this.file= event.target.files[0]; 

      if(!this.file.name.includes('.xlsx'))
      alert('Please Select Excel File')
      console.log(this.file)
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
   
	 Upload(){

		

		this.splashService.splashScreen({isLoading : true, message : "Uploading" })

		let _result = [];           
		 for (let i = 0; i < this.dataList.length; i++) {
// 			const dateString = this.dataList[0].SAMPLINGDATE;
// 			if(this.dataList[0].STARTDATECOLLECTION !== undefined || this.dataList[0].STARTDATECOLLECTION!=="")
// {
// 	const startdateString = this.dataList[0].STARTDATECOLLECTION?this.dataList[0].STARTDATECOLLECTION:'';
// 	const SD = new Date(startdateString); 
// 	 Smonth=SD.getMonth() + 1 ; 
// 	 Sdate=SD.getDate(); 
// 	 Startdate = Sdate + '/'+Smonth +'/'+ SD.getFullYear();
// }
// 			if(this.dataList[0].ENDDATECOLLECTION !== undefined || this.dataList[0].ENDDATECOLLECTION==="")
// {
// 	const enddateString = this.dataList[0].ENDDATECOLLECTION?this.dataList[0].ENDDATECOLLECTION:'';
// 	const ED = new Date(enddateString); 
// 	 Emonth=ED.getMonth() + 1 ; 
// 	 Edate=ED.getDate(); 
// 	 Enddate = Edate + '/'+Emonth+'/' + ED.getFullYear();
// }
// 	//	console.log(dateString)
// 			if(this.dataList[0].STARTDATECOLLECTION !== undefined || this.dataList[0].STARTDATECOLLECTION!=="")
// {
// 			const D = new Date(dateString); 
// 			month=D.getMonth() + 1 ; 
// 			 date=D.getDate(); 
// 			Sampledate = date +'/'+month + '/'+D.getFullYear();
// 		}
               _result.push(
				   {
"sample":this.dataList[0]["Sample ID"] ? this.dataList[0]["Sample ID"] : '',
"anti_hypertensive_ace_inhibitors":this.dataList[0]["ACE-inhibitors"] === ''? false : this.dataList[0]["ACE-inhibitors"] === 'Yes'? true:false,
"anti_hypertensive_ace_inhibitors_perindopril":this.dataList[0]["Perindopril Dose"] ? this.dataList[0]["Perindopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_captopril":this.dataList[0]["Captopril Dose"] ? this.dataList[0]["Captopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_enalapril":this.dataList[0]["Enalapril Dose"] ? this.dataList[0]["Enalapril Dose"] : '',
"anti_hypertensive_ace_inhibitors_lisinopril":this.dataList[0]["Lisinopril Dose"] ? this.dataList[0]["Lisinopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_other":this.dataList[0]["ACE Others Dose"] ? this.dataList[0]["ACE Others Dose"] : '',
"anti_hypertensive_arbs":this.dataList[0]["ARBs"] === ''? false :  this.dataList[0]["ARBs"] === 'Yes'? true : false,
"anti_hypertensive_arbs_losartan":this.dataList[0]["Losartan Dose"] ? this.dataList[0]["Losartan Dose"] : '',
"anti_hypertensive_arbs_valsartan":this.dataList[0]["Valsartan  Dose"] ? this.dataList[0]["Valsartan  Dose"] : '',
"anti_hypertensive_arbs_other":this.dataList[0]["ARBS Others Dose"] ? this.dataList[0]["ARBS Others Dose"] : '',
"anti_hypertensive_beta_blockers":this.dataList[0]["Beta-blockers"] === ''? false : this.dataList[0]["Beta-blockers"] === 'Yes'? true:false,
"anti_hypertensive_beta_blockers_atenolol":this.dataList[0]["Atenolol Dose"] ? this.dataList[0]["Atenolol Dose"] : '',
"anti_hypertensive_beta_blockers_bisoprolol":this.dataList[0]["Bisoprolol Dose"] ? this.dataList[0]["Bisoprolol Dose"] : '',
"anti_hypertensive_beta_blockers_other":this.dataList[0]["Beta Others Dose"] ? this.dataList[0]["Beta Others Dose"] : '',
"anti_hypertensive_diuretics":this.dataList[0]["Diuretics"] === ''? false :  this.dataList[0]["Diuretics"] === 'Yes'? true:false,
"anti_hypertensive_diuretics_indapamide":this.dataList[0]["Indapamide Dose"] ? this.dataList[0]["Indapamide Dose"] : '',
"anti_hypertensive_diuretics_hydrochlorothiazide":this.dataList[0]["Hydrochlorothiazide Dose"] ? this.dataList[0]["Hydrochlorothiazide Dose"] : '',
"anti_hypertensive_diuretics_frusemide":this.dataList[0]["Frusemide  Dose"] ? this.dataList[0]["Frusemide  Dose"] : '',
"anti_hypertensive_diuretics_other":this.dataList[0]["Diuretics Others Dose"] ? this.dataList[0]["Diuretics Others Dose"] : '',
"anti_hypertensive_cachannel_blockers":this.dataList[0]["CA Channel Blockers"] === ''? false :  this.dataList[0]["CA Channel Blockers"] === 'Yes'? true:false,
"anti_hypertensive_cachannel_blockers_amlodipine":this.dataList[0]["Amlodipine Dose"] ? this.dataList[0]["Amlodipine Dose"] : '',
"anti_hypertensive_cachannel_blockers_nifedipine":this.dataList[0]["Nifedipine Dose"] ? this.dataList[0]["Nifedipine Dose"] : '',
"anti_hypertensive_cachannel_blockers_verapamil":this.dataList[0]["Verapamil Dose"] ? this.dataList[0]["Verapamil Dose"] : '',
"anti_hypertensive_cachannel_blockers_other":this.dataList[0]["Cachannel  Other Dose"] ? this.dataList[0]["Cachannel  Other Dose"] : '',
"anti_hypertensive_other":this.dataList[0]["Others"] === ''? false :   this.dataList[0]["Others"] === 'Yes'? true : false ,
"anti_hypertensive_methyldopa":this.dataList[0]["Methyldopa Dose"] ? this.dataList[0]["Methyldopa Dose"]:'',
"anti_hypertensive_other_other":this.dataList[0]["Hypertensive Others"] ? this.dataList[0]["Hypertensive Others"]:'',
"anti_dyslipidemia_statins":this.dataList[0]["Statins"]  === ''? false : this.dataList[0]["Statins"]  === 'Yes'? true :false ,
"anti_dyslipidemia_statins_simvastatin":this.dataList[0]["Simvastatin Dose"] ? this.dataList[0]["Simvastatin Dose"] : '',
"anti_dyslipidemia_statins_atorvastatin":this.dataList[0]["Atorvastatin Dose"] ? this.dataList[0]["Atorvastatin Dose"] : '',
"anti_dyslipidemia_statins_rosuvastatin":this.dataList[0]["Rosuvastatin Dose"] ? this.dataList[0]["Rosuvastatin Dose"] : '',
"anti_dyslipidemia_statins_other":this.dataList[0]["Dyslipidemia  Statins Others Dose"] ? this.dataList[0]["Dyslipidemia  Statins Others Dose"] : '',
"anti_dyslipidemia_fibrates":this.dataList[0]["Fibrates"] === ''? false :  this.dataList[0]["Fibrates"]=== 'Yes'? true : false,
"anti_dyslipidemia_fibrates_other":this.dataList[0]["Anti Dyslipidemia Other"] ? this.dataList[0]["Anti Dyslipidemia Other"] : '',
"anti_dyslipidemia_fibrates_gemfibrozil":this.dataList[0]["Gemfibrozil Dose"] ? this.dataList[0]["Gemfibrozil Dose"] : '',
"anti_dyslipidemia_fibrates_fenofibrate":this.dataList[0]["Fenofibrate Dose"] ? this.dataList[0]["Fenofibrate Dose"] : '',
"anti_dyslipidemia_other":this.dataList[0]["Dyslipidemia Others"] === ''? false : this.dataList[0]["Dyslipidemia Others"]  === 'Yes'? true:false,
"anti_dyslipidemia_other_other":this.dataList[0]["Others  Dose"] ? this.dataList[0]["Others  Dose"] : '',
"oral_agents_biguanides":this.dataList[0]["Biguanides"] === ''? false : this.dataList[0]["Biguanides"] === 'Yes'? true : false,
"oral_agents_biguanides_metformin":this.dataList[0]["Metformin Dose"] ? this.dataList[0]["Metformin Dose"] : '',
"oral_agents_sulphonyureas":this.dataList[0]["SUs"] === ''? false : this.dataList[0]["SUs"] === 'Yes'? true : false,
"oral_agents_sulphonyureas_glibenclamide":this.dataList[0]["Glibenclamide Dose"] ? this.dataList[0]["Glibenclamide Dose"] : '',
"oral_agents_sulphonyureas_glimepiride":this.dataList[0]["Glimepiride Dose"] ? this.dataList[0]["Glimepiride Dose"] : '',
"oral_agents_sulphonyureas_glipizide":this.dataList[0]["Glipizide Dose"] ? this.dataList[0]["Glipizide Dose"] : '',
"oral_agents_sulphonyureas_gliclazidemr":this.dataList[0]["Gliclazide MR Dose"] ? this.dataList[0]["Gliclazide MR Dose"] : '',
"oral_agents_sulphonyureas_glipizide1":this.dataList[0]["Glipizide Dose1"] ? this.dataList[0]["Glipizide Dose1"] : '',
"oral_agents_sulphonyureas_glimepride":this.dataList[0]["Glimepride Dose"] ? this.dataList[0]["Glimepride Dose"] : '',
"oral_agents_sulphonyuras_other":this.dataList[0]["SUs Others"] ? this.dataList[0]["SUs Others"] : '',
"oral_agents_thiazolidinediones":this.dataList[0]["Thiazolidinediones"] === ''? false :  this.dataList[0]["Thiazolidinediones"]=== 'Yes'? true : false,
"oral_agents_thiazolidinediones_pioglitazone":this.dataList[0]["Pioglitazone Dose"] ? this.dataList[0]["Pioglitazone Dose"] : '',
"oral_agents_thiazolidinediones_other":this.dataList[0]["Thiazolidinediones Others Dose"] ? this.dataList[0]["Thiazolidinediones Others Dose"] : '',
"oral_agents_meglitinides":this.dataList[0]["Meglitinides"] === ''? false :  this.dataList[0]["Meglitinides"] === 'Yes'? true : false,
"oral_agents_meglitinides_nateglinide":this.dataList[0]["Nateglinide Dose"] ? this.dataList[0]["Nateglinide Dose"] : '',
"oral_agents_meglitinides_repaglinide":this.dataList[0]["Repaglinide Dose"] ? this.dataList[0]["Repaglinide Dose"] : '',
"oral_agents_dipeptidyl":this.dataList[0]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === ''? false :  this.dataList[0]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === 'Yes'? true : false ,
"oral_agents_dipeptidyl_sitagliptin":this.dataList[0]["Sitagliptin Dose"] ? this.dataList[0]["Sitagliptin Dose"] : '',
"oral_agents_dipeptidyl_vildagliptin":this.dataList[0]["Vildagliptin Dose"] ? this.dataList[0]["Vildagliptin Dose"] : '',
"oral_agents_dipeptidyl_saxagliptin":this.dataList[0]["Saxagliptin Dose"] ? this.dataList[0]["Saxagliptin Dose"] : '',
"oral_agents_dipeptidyl_linagliptin":this.dataList[0]["Linagliptin Dose"] ? this.dataList[0]["Linagliptin Dose"] : '',
"oral_agents_incretin":this.dataList[0]["Incretin mimetics (GLP-1 agonist)"] === ''? false :  this.dataList[0]["Incretin mimetics (GLP-1 agonist)"] === 'Yes'? true :false ,
"oral_agents_incretin_exenatide":this.dataList[0]["Exenatide Dose"] ? this.dataList[0]["Exenatide Dose"] : '',
"oral_agents_incretin_liraglutide":this.dataList[0]["Liraglutide Dose"] ? this.dataList[0]["Liraglutide Dose"] : '',
"oral_agents_incretin_exenatide_weekly":this.dataList[0]["Exenatide (weekly) Dose"] ? this.dataList[0]["Exenatide (weekly) Dose"] : '',
"oral_agents_alpha_glucosidase_inhibitors":this.dataList[0]["Alpha-glucosidase inhibitors"] === ''? false : this.dataList[0]["Alpha-glucosidase inhibitors"] === 'Yes'? true : false,
"oral_agents_alpha_glucosidase_inhibitors_acarbose":this.dataList[0]["Acarbose Dose"] ? this.dataList[0]["Acarbose Dose"] : '',
"injections_insulin":this.dataList[0]["Insulin"] === ''? false :  this.dataList[0]["Insulin"] === 'Yes'? false : false,
"injections_insulin_lispro":this.dataList[0]["Lispro Dose"] !== ''? '': '',
"injections_insulin_aspart":this.dataList[0]["Aspart Dose"] !== ''? '': '',
"injections_insulin_glulisine":this.dataList[0]["Glulisine Dose"] !== ''? '' : '',
"injections_insulin_regular":this.dataList[0]["Regular Dose"] !== ''? '' : '',
"injections_insulin_nph":this.dataList[0]["NPH Dose"] !== ''? '' : '',
"injections_insulin_detemir":this.dataList[0]["Detemir Dose"] !== ''? '': '',
"injections_insulin_glargine":this.dataList[0]["Glargine Dose"] !== ''? '': '',
"injections_insulin_combination":this.dataList[0]["Combination Dose"] !== ''? '' : '',
"injections_insulin_other":this.dataList[0]["Insulin Injections"] === ''? false :  this.dataList[0]["Insulin Injections"] === 'Yes'? true : false,
"supplements_vitamind3":this.dataList[0]["Vitamin D3"] === ''? false :  this.dataList[0]["Vitamin D3"] === 'Yes'? true : false ,
"supplements_others":this.dataList[0]["Others (including erythropoietin injections)"] ? this.dataList[0]["Others (including erythropoietin injections)"] : '',
"antidepressants_prozac":this.dataList[0]["Prozac"] === ''? false :  this.dataList[0]["Prozac"] === 'Yes'? true : false,
"antidepressants_other":this.dataList[0]["Anti-Depressants Others"] ? this.dataList[0]["Anti-Depressants Others"] : '',
"antianxiety_diazepam":this.dataList[0]["Diazepam Dose"] ? this.dataList[0]["Diazepam Dose"] : '',
"antianxiety_other":this.dataList[0]["Antianxiety Other"] ? this.dataList[0]["Antianxiety Other"] : '',
"othermedication_other":this.dataList[0]["Other Medication"] ? this.dataList[0]["Other Medication"] : '',
"traditional_chinese_specify":this.dataList[0]["Traditional Chinese Medicine"] ? this.dataList[0]["Traditional Chinese Medicine"] : '',
"bio_fastingglucose_result_normal":this.dataList[0]["Fasting Glucose Result"] ? this.dataList[0]["Fasting Glucose Result"] : '',
"bio_fastingglucose_date_of_recent_test":this.dataList[0]["FGL Date of Recent Test"] ? this.dataList[0]["FGL Date of Recent Test"] : '',
"bio_fastingglucose_result_of_recent_test":this.dataList[0]["FGL Result of Recent Test"] ? this.dataList[0]["FGL Result of Recent Test"] : '',
"bio_fastingglucose_date_of_last_test":this.dataList[0]["FGL Date of Last Test"] ? this.dataList[0]["FGL Date of Last Test"] : '',
"bio_fastingglucose_result_of_last_test":this.dataList[0]["FGL Results of the last test"] ? this.dataList[0]["FGL Results of the last test"] : '',
"bio_randomglucose_result_normal":this.dataList[0]["Is RGL Result Normal?"] ? this.dataList[0]["Is RGL Result Normal?"] : '',
"bio_randomglucose_date_of_recent_test":this.dataList[0]["RGL Date of Recent Test"] ? this.dataList[0]["RGL Date of Recent Test"] : '',
"bio_randomglucose_result_of_recent_test":this.dataList[0]["RGL Result of Recent Test"] ? this.dataList[0]["RGL Result of Recent Test"] : '',
"bio_randomglucose_date_of_last_test":this.dataList[0]["RGL Date of Last Test"] ? this.dataList[0]["RGL Date of Last Test"] : '',
"bio_randomglucose_result_of_last_test":this.dataList[0]["RGL Results of the last test"] ? this.dataList[0]["RGL Results of the last test"] : '',
"bio_ogtt_result_normal":this.dataList[0]["Is OGTT Result Normal?"] ? this.dataList[0]["Is OGTT Result Normal?"] : '',
"bio_ogtt_date_of_recent_test":this.dataList[0]["OGTT Date of Recent Test"] ? this.dataList[0]["OGTT Date of Recent Test"] : '',
"bio_ogtt_result_of_recent_test":this.dataList[0]["OGTT Result of Recent Test"] ? this.dataList[0]["OGTT Result of Recent Test"] : '',
"bio_ogtt_date_of_last_test":this.dataList[0]["OGTT Date of Last Test"] ? this.dataList[0]["OGTT Date of Last Test"] : '',
"bio_ogtt_result_of_last_test":this.dataList[0]["OGTT Results of the last test"] ? this.dataList[0]["OGTT Results of the last test"] : '',
"bio_fg2_result_normal":this.dataList[0]["Is FG2 Result Normal?"] ? this.dataList[0]["Is FG2 Result Normal?"] : '',
"bio_fg2_date_of_recent_test":this.dataList[0]["FG2 Date of Recent Test"] ? this.dataList[0]["FG2 Date of Recent Test"] : '',
"bio_fg2_result_of_recent_test":this.dataList[0]["FG2 Result of Recent Test"] ? this.dataList[0]["FG2 Result of Recent Test"] : '',
"bio_fg2_date_of_last_test":this.dataList[0]["FG2 Date of Last Test"] ? this.dataList[0]["FG2 Date of Last Test"] : '',
"bio_fg2_result_of_last_test":this.dataList[0]["FG2 Results of the last test"] ? this.dataList[0]["FG2 Results of the last test"] : '',
"bio_hba1c_result_normal":this.dataList[0]["Is HBA1C Result Normal?"] ? this.dataList[0]["Is HBA1C Result Normal?"] : '',
"bio_hba1c_date_of_recent_test":this.dataList[0]["HAB1C Date of Recent Test"] ? this.dataList[0]["HAB1C Date of Recent Test"] : '',
"bio_hba1c_result_of_recent_test":this.dataList[0]["HAB1C Result of Recent Test"] ? this.dataList[0]["HAB1C Result of Recent Test"] : '',
"bio_hba1c_date_of_last_test":this.dataList[0]["HAB1C Date of Last Test"] ? this.dataList[0]["HAB1C Date of Last Test"] : '',
"bio_hba1c_result_of_last_test":this.dataList[0]["HAB1C Results of the last test"] ? this.dataList[0]["HAB1C Results of the last test"] : '',
"bio_totalcholesterol_result_normal":this.dataList[0]["Total Cholesterol Result Normal?"] ? this.dataList[0]["Total Cholesterol Result Normal?"] : '',
"bio_totalcholesterol_date_of_recent_test":this.dataList[0]["Total Cholesterol Date of Recent Test"] ? this.dataList[0]["Total Cholesterol Date of Recent Test"] : '',
"bio_totalcholesterol_result_of_recent_test":this.dataList[0]["Total Cholesterol Result of Recent Test"] ? this.dataList[0]["Total Cholesterol Result of Recent Test"] : '',
"bio_totalcholesterol_date_of_last_test":this.dataList[0]["Total Cholesterol Date of Last Test"] ? this.dataList[0]["Total Cholesterol Date of Last Test"] : '',
"bio_totalcholesterol_result_of_last_test":this.dataList[0]["Total Cholesterol Results of the last test"] ? this.dataList[0]["Total Cholesterol Results of the last test"] : '',
"bio_triglyceride_result_normal":this.dataList[0]["Triglyceride Result Normal?"] ? this.dataList[0]["Triglyceride Result Normal?"] : '',
"bio_triglyceride_date_of_recent_test":this.dataList[0]["Triglyceride Date of Recent Test"] ? this.dataList[0]["Triglyceride Date of Recent Test"] : '',
"bio_triglyceride_result_of_recent_test":this.dataList[0]["Triglyceride Result of Recent Test"] ? this.dataList[0]["Triglyceride Result of Recent Test"] : '',
"bio_triglyceride_date_of_last_test":this.dataList[0]["Triglyceride Date of Last Test"] ? this.dataList[0]["Triglyceride Date of Last Test"] : '',
"bio_triglyceride_result_of_last_test":this.dataList[0]["Triglyceride Results of the last test"] ? this.dataList[0]["Triglyceride Results of the last test"] : '',
"bio_hdl_result_normal":this.dataList[0]["HDL Result Normal?"] ? this.dataList[0]["HDL Result Normal?"] : '',
"bio_hdl_date_of_recent_test":this.dataList[0]["HDL Date of Recent Test"] ? this.dataList[0]["HDL Date of Recent Test"] : '',
"bio_hdl_result_of_recent_test":this.dataList[0]["HDL Result of Recent Test"] ? this.dataList[0]["HDL Result of Recent Test"] : '',
"bio_hdl_date_of_last_test":this.dataList[0]["HDL Date of Last Test"] ? this.dataList[0]["HDL Date of Last Test"] : '',
"bio_hdl_result_of_last_test":this.dataList[0]["HDL Results of the last test"] ? this.dataList[0]["HDL Results of the last test"] : '',
"bio_ldl_result_normal":this.dataList[0]["LDL Result Normal?"] ? this.dataList[0]["LDL Result Normal?"] : '',
"bio_ldl_date_of_recent_test":this.dataList[0]["LDL Date of Recent Test"] ? this.dataList[0]["LDL Date of Recent Test"] : '',
"bio_ldl_result_of_recent_test":this.dataList[0]["LDL Result of Recent Test"] ? this.dataList[0]["LDL Result of Recent Test"] : '',
"bio_ldl_date_of_last_test":this.dataList[0]["LDL Date of Last Test"] ? this.dataList[0]["LDL Date of Last Test"] : '',
"bio_ldl_result_of_last_test":this.dataList[0]["LDL Results of the last test"] ? this.dataList[0]["LDL Results of the last test"] : '',
"bio_vitamindlevel_result_normal":this.dataList[0]["Vitamin-D-Level Result Normal?"] ? this.dataList[0]["Vitamin-D-Level Result Normal?"] : '',
"bio_vitamindlevel_date_of_recent_test":this.dataList[0]["Vitamin-D-Level Date of Recent Test"] ? this.dataList[0]["Vitamin-D-Level Date of Recent Test"] : '',
"bio_vitamindlevel_result_of_recent_test":this.dataList[0]["Vitamin-D-Level Result of Recent Test"] ? this.dataList[0]["Vitamin-D-Level Result of Recent Test"] : '',
"bio_vitamindlevel_date_of_last_test":this.dataList[0]["Vitamin-D-Level Date of Last Test"] ? this.dataList[0]["Vitamin-D-Level Date of Last Test"] : '',
"bio_vitamindlevel_result_of_last_test":this.dataList[0]["Vitamin-D-Level Results of the last test"] ? this.dataList[0]["Vitamin-D-Level Results of the last test"] : '',
"bio_microalbumin_result_normal":this.dataList[0]["Microalbumin Result Normal?"] ? this.dataList[0]["Microalbumin Result Normal?"] : '',
"bio_microalbumin_date_of_recent_test":this.dataList[0]["Microalbumin Date of Recent Test"] ? this.dataList[0]["Microalbumin Date of Recent Test"] : '',
"bio_microalbumin_result_of_recent_test":this.dataList[0]["Microalbumin Result of Recent Test"] ? this.dataList[0]["Microalbumin Result of Recent Test"] : '',
"bio_microalbumin_date_of_last_test":this.dataList[0]["Microalbumin Date of Last Test"] ? this.dataList[0]["Microalbumin Date of Last Test"] : '',
"bio_microalbumin_result_of_last_test":this.dataList[0]["Microalbumin Results of the last test"] ? this.dataList[0]["Microalbumin Results of the last test"] : '',
"bio_albuminuria_result_normal":this.dataList[0]["Albuminuria Result Normal?"] ? this.dataList[0]["Albuminuria Result Normal?"] : '',
"bio_albuminuria_date_of_recent_test":this.dataList[0]["Albuminuria Date of Recent Test"] ? this.dataList[0]["Albuminuria Date of Recent Test"] : '',
"bio_albuminuria_result_of_recent_test":this.dataList[0]["Albuminuria Result of Recent Test"] ? this.dataList[0]["Albuminuria Result of Recent Test"] : '',
"bio_albuminuria_date_of_last_test":this.dataList[0]["Albuminuria Date of Last Test"] ? this.dataList[0]["Albuminuria Date of Last Test"] : '',
"bio_albuminuria_result_of_last_test":this.dataList[0]["Albuminuria Results of the last test"] ? this.dataList[0]["Albuminuria Results of the last test"] : '',
"bio_albumincreatinine_result_normal":this.dataList[0]["Albumin/Creatinine Result Normal?"] ? this.dataList[0]["Albumin/Creatinine Result Normal?"] : '',
"bio_albumincreatinine_date_of_recent_test":this.dataList[0]["Albumin/Creatinine Date of Recent Test"] ? this.dataList[0]["Albumin/Creatinine Date of Recent Test"] : '',
"bio_albumincreatinine_result_of_recent_test":this.dataList[0]["Albumin/Creatinine Result of Recent Test"] ? this.dataList[0]["Albumin/Creatinine Result of Recent Test"] : '',
"bio_albumincreatinine_date_of_last_test":this.dataList[0]["Albumin/Creatinine Date of Last Test"] ? this.dataList[0]["Albumin/Creatinine Date of Last Test"] : '',
"bio_albumincreatinine_result_of_last_test":this.dataList[0]["Albumin/Creatinine Results of the last test"] ? this.dataList[0]["Albumin/Creatinine Results of the last test"] : '',
"bio_creatinine_result_normal":this.dataList[0]["Creatinine Result Normal?"] ? this.dataList[0]["Creatinine Result Normal?"] : '',
"bio_creatinine_date_of_recent_test":this.dataList[0]["Creatinine Date of Recent Test"] ? this.dataList[0]["Creatinine Date of Recent Test"] : '',
"bio_creatinine_result_of_recent_test":this.dataList[0]["Creatinine Result of Recent Test"] ? this.dataList[0]["Creatinine Result of Recent Test"] : '',
"bio_creatinine_date_of_last_test":this.dataList[0]["Creatinine Date of Last Test"] ? this.dataList[0]["Creatinine Date of Last Test"] : '',
"bio_creatinine_result_of_last_test":this.dataList[0]["Creatinine Results of the last test"] ? this.dataList[0]["Creatinine Results of the last test"] : '',
"bio_egfr_result_normal":this.dataList[0]["eGFR Result Normal?"] ? this.dataList[0]["eGFR Result Normal?"] : '',
"bio_egfr_date_of_recent_test":this.dataList[0]["eGFR Date of Recent Test"] ? this.dataList[0]["eGFR Date of Recent Test"] : '',
"bio_egfr_result_of_recent_test":this.dataList[0]["eGFR Result of Recent Test"] ? this.dataList[0]["eGFR Result of Recent Test"] : '',
"bio_egfr_date_of_last_test":this.dataList[0]["eGFR Date of Last Test"] ? this.dataList[0]["eGFR Date of Last Test"] : '',
"bio_egfr_result_of_last_test":this.dataList[0]["eGFR Results of the last test"] ? this.dataList[0]["eGFR Results of the last test"] : '',
"bio_sodium_result_normal":this.dataList[0]["Serum Sodium Result Normal?"] ? this.dataList[0]["Serum Sodium Result Normal?"] : '',
"bio_sodium_date_of_recent_test":this.dataList[0]["Serum Sodium Date of Recent Test"] ? this.dataList[0]["Serum Sodium Date of Recent Test"] : '',
"bio_sodium_result_of_recent_test":this.dataList[0]["Serum Sodium Result of Recent Test"] ? this.dataList[0]["Serum Sodium Result of Recent Test"] : '',
"bio_sodium_date_of_last_test":this.dataList[0]["Serum Sodium Date of Last Test"] ? this.dataList[0]["Serum Sodium Date of Last Test"] : '',
"bio_sodium_result_of_last_test":this.dataList[0]["Serum Sodium Results of the last test"] ? this.dataList[0]["Serum Sodium Results of the last test"] : '',
"bio_potassium_result_normal":this.dataList[0]["Serum Potassium Result Normal?"] ? this.dataList[0]["Serum Potassium Result Normal?"] : '',
"bio_potassium_date_of_recent_test":this.dataList[0]["Serum Potassium Date of Recent Test"] ? this.dataList[0]["Serum Potassium Date of Recent Test"] : '',
"bio_potassium_result_of_recent_test":this.dataList[0]["Serum Potassium Result of Recent Test"] ? this.dataList[0]["Serum Potassium Result of Recent Test"] : '',
"bio_potassium_date_of_last_test":this.dataList[0]["Serum Potassium Date of Last Test"] ? this.dataList[0]["Serum Potassium Date of Last Test"] : '',
"bio_potassium_result_of_last_test":this.dataList[0]["Serum Potassium Results of the last test"] ? this.dataList[0]["Serum Potassium Results of the last test"] : '',
"bio_calcium_result_normal":this.dataList[0]["Serum Calcium Result Normal?"] ? this.dataList[0]["Serum Calcium Result Normal?"] : '',
"bio_calcium_date_of_recent_test":this.dataList[0]["Serum Calcium Date of Recent Test"] ? this.dataList[0]["Serum Calcium Date of Recent Test"] : '',
"bio_calcium_result_of_recent_test":this.dataList[0]["Serum Calcium Result of Recent Test"] ? this.dataList[0]["Serum Calcium Result of Recent Test"] : '',
"bio_calcium_date_of_last_test":this.dataList[0]["Serum Calcium Date of Last Test"] ? this.dataList[0]["Serum Calcium Date of Last Test"] : '',
"bio_calcium_result_of_last_test":this.dataList[0]["Serum Calcium Results of the last test"] ? this.dataList[0]["Serum Calcium Results of the last test"] : '',
"bio_magnesium_result_normal":this.dataList[0]["Serum Magnesium Result Normal?"] ? this.dataList[0]["Serum Magnesium Result Normal?"] : '',
"bio_magnesium_date_of_recent_test":this.dataList[0]["Serum Magnesium Date of Recent Test"] ? this.dataList[0]["Serum Magnesium Date of Recent Test"] : '',
"bio_magnesium_result_of_recent_test":this.dataList[0]["Serum Magnesium Result of Recent Test"] ? this.dataList[0]["Serum Magnesium Result of Recent Test"] : '',
"bio_magnesium_date_of_last_test":this.dataList[0]["Serum Magnesium Date of Last Test"] ? this.dataList[0]["Serum Magnesium Date of Last Test"] : '',
"bio_magnesium_result_of_last_test":this.dataList[0]["Serum Magnesium Results of the last test"] ? this.dataList[0]["Serum Magnesium Results of the last test"] : '',
"bio_phosphorus_result_normal":this.dataList[0]["Phosphorus Result Normal?"] ? this.dataList[0]["Phosphorus Result Normal?"] : '',
"bio_phosphorus_date_of_recent_test":this.dataList[0]["Phosphorus Date of Recent Test"] ? this.dataList[0]["Phosphorus Date of Recent Test"] : '',
"bio_phosphorus_result_of_recent_test":this.dataList[0]["Phosphorus Result of Recent Test"] ? this.dataList[0]["Phosphorus Result of Recent Test"] : '',
"bio_phosphorus_date_of_last_test":this.dataList[0]["Phosphorus Date of Last Test"] ? this.dataList[0]["Phosphorus Date of Last Test"] : '',
"bio_phosphorus_result_of_last_test":this.dataList[0]["Phosphorus Results of the last test"] ? this.dataList[0]["Phosphorus Results of the last test"] : '',
"bio_urea_result_normal":this.dataList[0]["Urea Result Normal?"] ? this.dataList[0]["Urea Result Normal?"] : '',
"bio_urea_date_of_recent_test":this.dataList[0]["Urea Date of Recent Test"] ? this.dataList[0]["Urea Date of Recent Test"] : '',
"bio_urea_result_of_recent_test":this.dataList[0]["Urea Result of Recent Test"] ? this.dataList[0]["Urea Result of Recent Test"] : '',
"bio_urea_date_of_last_test":this.dataList[0]["Urea Date of Last Test"] ? this.dataList[0]["Urea Date of Last Test"] : '',
"bio_urea_result_of_last_test":this.dataList[0]["Urea Results of the last test"] ? this.dataList[0]["Urea Results of the last test"] : '',
"bio_bicarbonate_result_normal":this.dataList[0]["Bicarbonate Result Normal?"] ? this.dataList[0]["Bicarbonate Result Normal?"] : '',
"bio_bicarbonate_date_of_recent_test":this.dataList[0]["Bicarbonate Date of Recent Test"] ? this.dataList[0]["Bicarbonate Date of Recent Test"] : '',
"bio_bicarbonate_result_of_recent_test":this.dataList[0]["Bicarbonate Result of Recent Test"] ? this.dataList[0]["Bicarbonate Result of Recent Test"] : '',
"bio_bicarbonate_date_of_last_test":this.dataList[0]["Bicarbonate Date of Last Test"] ? this.dataList[0]["Bicarbonate Date of Last Test"] : '',
"bio_bicarbonate_result_of_last_test":this.dataList[0]["Bicarbonate Results of the last test"] ? this.dataList[0]["Bicarbonate Results of the last test"] : '',
"bio_alt_result_normal":this.dataList[0]["ALT Result Normal?"] ? this.dataList[0]["ALT Result Normal?"] : '',
"bio_alt_date_of_recent_test":this.dataList[0]["ALT Date of Recent Test"] ? this.dataList[0]["ALT Date of Recent Test"] : '',
"bio_alt_result_of_recent_test":this.dataList[0]["ALT Result of Recent Test"] ? this.dataList[0]["ALT Result of Recent Test"] : '',
"bio_alt_date_of_last_test":this.dataList[0]["ALT Date of Last Test"] ? this.dataList[0]["ALT Date of Last Test"] : '',
"bio_alt_result_of_last_test":this.dataList[0]["ALT Results of the last test"] ? this.dataList[0]["ALT Results of the last test"] : '',
"bio_alp_result_normal":this.dataList[0]["ALP Result Normal?"] ? this.dataList[0]["ALP Result Normal?"] : '',
"bio_alp_date_of_recent_test":this.dataList[0]["ALP Date of Recent Test"] ? this.dataList[0]["ALP Date of Recent Test"] : '',
"bio_alp_result_of_recent_test":this.dataList[0]["ALP Result of Recent Test"] ? this.dataList[0]["ALP Result of Recent Test"] : '',
"bio_alp_date_of_last_test":this.dataList[0]["ALP Date of Last Test"] ? this.dataList[0]["ALP Date of Last Test"] : '',
"bio_alp_result_of_last_test":this.dataList[0]["ALP Results of the last test"] ? this.dataList[0]["ALP Results of the last test"] : '',
"bio_ast_result_normal":this.dataList[0]["AST Result Normal?"] ? this.dataList[0]["AST Result Normal?"] : '',
"bio_ast_date_of_recent_test":this.dataList[0]["AST Date of Recent Test"] ? this.dataList[0]["AST Date of Recent Test"] : '',
"bio_ast_result_of_recent_test":this.dataList[0]["AST Result of Recent Test"] ? this.dataList[0]["AST Result of Recent Test"] : '',
"bio_ast_date_of_last_test":this.dataList[0]["AST Date of Last Test"] ? this.dataList[0]["AST Date of Last Test"] : '',
"bio_ast_result_of_last_test":this.dataList[0]["AST Results of the last test"] ? this.dataList[0]["AST Results of the last test"] : '',
"bio_bilirubin_result_normal":this.dataList[0]["Bilirubin Result Normal?"] ? this.dataList[0]["Bilirubin Result Normal?"] : '',
"bio_bilirubin_date_of_recent_test":this.dataList[0]["Bilirubin Date of Recent Test"] ? this.dataList[0]["Bilirubin Date of Recent Test"] : '',
"bio_bilirubin_result_of_recent_test":this.dataList[0]["Bilirubin Result of Recent Test"] ? this.dataList[0]["Bilirubin Result of Recent Test"] : '',
"bio_bilirubin_date_of_last_test":this.dataList[0]["Bilirubin Date of Last Test"] ? this.dataList[0]["Bilirubin Date of Last Test"] : '',
"bio_bilirubin_result_of_last_test":this.dataList[0]["Bilirubin Results of the last test"] ? this.dataList[0]["Bilirubin Results of the last test"] : '',
"bio_protein_result_normal":this.dataList[0]["Total Protein Result Normal?"] ? this.dataList[0]["Total Protein Result Normal?"] : '',
"bio_protein_date_of_recent_test":this.dataList[0]["Total Protein Date of Recent Test"] ? this.dataList[0]["Total Protein Date of Recent Test"] : '',
"bio_protein_result_of_recent_test":this.dataList[0]["Total Protein Result of Recent Test"] ? this.dataList[0]["Total Protein Result of Recent Test"] : '',
"bio_protein_date_of_last_test":this.dataList[0]["Total Protein Date of Last Test"] ? this.dataList[0]["Total Protein Date of Last Test"] : '',
"bio_protein_result_of_last_test":this.dataList[0]["Total Protein Results of the last test"] ? this.dataList[0]["Total Protein Results of the last test"] : '',
"bio_serum_albumin_result_normal":this.dataList[0]["Serum Albumin Result Normal?"] ? this.dataList[0]["Serum Albumin Result Normal?"] : '',
"bio_serum_albumin_date_of_recent_test":this.dataList[0]["Serum Albumin Date of Recent Test"] ? this.dataList[0]["Serum Albumin Date of Recent Test"] : '',
"bio_serum_albumin_result_of_recent_test":this.dataList[0]["Serum Albumin Result of Recent Test"] ? this.dataList[0]["Serum Albumin Result of Recent Test"] : '',
"bio_serum_albumin_date_of_last_test":this.dataList[0]["Serum Albumin Date of Last Test"] ? this.dataList[0]["Serum Albumin Date of Last Test"] : '',
"bio_serum_albumin_result_of_last_test":this.dataList[0]["Serum Albumin Results of the last test"] ? this.dataList[0]["Serum Albumin Results of the last test"] : '',
"bio_cprotein_result_normal":this.dataList[0]["C-reactive Protein Result Normal?"] ? this.dataList[0]["C-reactive Protein Result Normal?"] : '',
"bio_cprotein_date_of_recent_test":this.dataList[0]["C-reactive Protein Date of Recent Test"] ? this.dataList[0]["C-reactive Protein Date of Recent Test"] : '',
"bio_cprotein_result_of_recent_test":this.dataList[0]["C-reactive Protein Result of Recent Test"] ? this.dataList[0]["C-reactive Protein Result of Recent Test"] : '',
"bio_cprotein_date_of_last_test":this.dataList[0]["C-reactive Protein Date of Last Test"] ? this.dataList[0]["C-reactive Protein Date of Last Test"] : '',
"bio_cprotein_result_of_last_test":this.dataList[0]["C-reactive Protein Results of the last test"] ? this.dataList[0]["C-reactive Protein Results of the last test"] : '',
"bio_t3_result_normal":this.dataList[0]["T3 Result Normal?"] ? this.dataList[0]["T3 Result Normal?"] : '',
"bio_t3_date_of_recent_test":this.dataList[0]["T3 Date of Recent Test"] ? this.dataList[0]["T3 Date of Recent Test"] : '',
"bio_t3_result_of_recent_test":this.dataList[0]["T3 Result of Recent Test"] ? this.dataList[0]["T3 Result of Recent Test"] : '',
"bio_t3_date_of_last_test":this.dataList[0]["T3 Date of Last Test"] ? this.dataList[0]["T3 Date of Last Test"] : '',
"bio_t3_result_of_last_test":this.dataList[0]["T3 Results of the last test"] ? this.dataList[0]["T3 Results of the last test"] : '',
"bio_t4_result_normal":this.dataList[0]["T4 Result Normal?"] ? this.dataList[0]["T4 Result Normal?"] : '',
"bio_t4_date_of_recent_test":this.dataList[0]["T4 Date of Recent Test"] ? this.dataList[0]["T4 Date of Recent Test"] : '',
"bio_t4_result_of_recent_test":this.dataList[0]["T4 Result of Recent Test"] ? this.dataList[0]["T4 Result of Recent Test"] : '',
"bio_t4_date_of_last_test":this.dataList[0]["T4 Date of Last Test"] ? this.dataList[0]["T4 Date of Last Test"] : '',
"bio_t4_result_of_last_test":this.dataList[0]["T4 Results of the last test"] ? this.dataList[0]["T4 Results of the last test"] : '',
"bio_freet4_result_normal":this.dataList[0]["Free T4 Result Normal?"] ? this.dataList[0]["Free T4 Result Normal?"] : '',
"bio_freet4_date_of_recent_test":this.dataList[0]["Free T4 Date of Recent Test"] ? this.dataList[0]["Free T4 Date of Recent Test"] : '',
"bio_freet4_result_of_recent_test":this.dataList[0]["Free T4 Result of Recent Test"] ? this.dataList[0]["Free T4 Result of Recent Test"] : '',
"bio_freet4_date_of_last_test":this.dataList[0]["Free T4 Date of Last Test"] ? this.dataList[0]["Free T4 Date of Last Test"] : '',
"bio_freet4_result_of_last_test":this.dataList[0]["Free T4 Results of the last test"] ? this.dataList[0]["Free T4 Results of the last test"] : '',
"bio_tsh_result_normal":this.dataList[0]["TSH Result Normal?"] ? this.dataList[0]["TSH Result Normal?"] : '',
"bio_tsh_date_of_recent_test":this.dataList[0]["TSH Date of Recent Test"] ? this.dataList[0]["TSH Date of Recent Test"] : '',
"bio_tsh_result_of_recent_test":this.dataList[0]["TSH Result of Recent Test"] ? this.dataList[0]["TSH Result of Recent Test"] : '',
"bio_tsh_date_of_last_test":this.dataList[0]["TSH Date of Last Test"] ? this.dataList[0]["TSH Date of Last Test"] : '',
"bio_tsh_result_of_last_test":this.dataList[0]["TSH Results of the last test"] ? this.dataList[0]["TSH Results of the last test"] : '',
"bio_parathyroid_result_normal":this.dataList[0]["Parathyroid Hormone Result Normal?"] ? this.dataList[0]["Parathyroid Hormone Result Normal?"] : '',
"bio_parathyroid_date_of_recent_test":this.dataList[0]["Parathyroid Hormone Date of Recent Test"] ? this.dataList[0]["Parathyroid Hormone Date of Recent Test"] : '',
"bio_parathyroid_result_of_recent_test":this.dataList[0]["Parathyroid Hormone Result of Recent Test"] ? this.dataList[0]["Parathyroid Hormone Result of Recent Test"] : '',
"bio_parathyroid_date_of_last_test":this.dataList[0]["Parathyroid Hormone Date of Last Test"] ? this.dataList[0]["Parathyroid Hormone Date of Last Test"] : '',
"bio_parathyroid_result_of_last_test":this.dataList[0]["Parathyroid Hormone Results of the last test"] ? this.dataList[0]["Parathyroid Hormone Results of the last test"] : '',
"bio_wbc_count_result_normal":this.dataList[0]["WBC Count Result Normal?"] ? this.dataList[0]["WBC Count Result Normal?"] : '',
"bio_wbc_count_date_of_recent_test":this.dataList[0]["WBC Count Date of Recent Test"] ? this.dataList[0]["WBC Count Date of Recent Test"] : '',
"bio_wbc_count_result_of_recent_test":this.dataList[0]["WBC Count Result of Recent Test"] ? this.dataList[0]["WBC Count Result of Recent Test"] : '',
"bio_wbc_count_date_of_last_test":this.dataList[0]["WBC Count Date of Last Test"] ? this.dataList[0]["WBC Count Date of Last Test"] : '',
"bio_wbc_count_result_of_last_test":this.dataList[0]["WBC Count Results of the last test"] ? this.dataList[0]["WBC Count Results of the last test"] : '',
"bio_wbc_diffcount_result_normal":this.dataList[0]["WBC Differential Result Normal?"] ? this.dataList[0]["WBC Differential Result Normal?"] : '',
"bio_wbc_diffcount_date_of_recent_test":this.dataList[0]["WBC Differential Date of Recent Test"] ? this.dataList[0]["WBC Differential Date of Recent Test"] : '',
"bio_wbc_diffcount_result_of_recent_test":this.dataList[0]["WBC Differential Result of Recent Test"] ? this.dataList[0]["WBC Differential Result of Recent Test"] : '',
"bio_wbc_diffcount_date_of_last_test":this.dataList[0]["WBC Differential Date of Last Test"] ? this.dataList[0]["WBC Differential Date of Last Test"] : '',
"bio_wbc_diffcount_result_of_last_test":this.dataList[0]["WBC Differential Results of the last test"] ? this.dataList[0]["WBC Differential Results of the last test"] : '',
"bio_rbc_count_result_normal":this.dataList[0]["RBC Count Result Normal?"] ? this.dataList[0]["RBC Count Result Normal?"] : '',
"bio_rbc_count_date_of_recent_test":this.dataList[0]["RBC Count Date of Recent Test"] ? this.dataList[0]["RBC Count Date of Recent Test"] : '',
"bio_rbc_count_result_of_recent_test":this.dataList[0]["RBC Count Result of Recent Test"] ? this.dataList[0]["RBC Count Result of Recent Test"] : '',
"bio_rbc_count_date_of_last_test":this.dataList[0]["RBC Count Date of Last Test"] ? this.dataList[0]["RBC Count Date of Last Test"] : '',
"bio_rbc_count_result_of_last_test":this.dataList[0]["RBC Count Results of the last test"] ? this.dataList[0]["RBC Count Results of the last test"] : '',
"bio_haemoglobin_count_result_normal":this.dataList[0]["Haemoglobin Result Normal?"] ? this.dataList[0]["Haemoglobin Result Normal?"] : '',
"bio_haemoglobin_count_date_of_recent_test":this.dataList[0]["Haemoglobin Date of Recent Test"] ? this.dataList[0]["Haemoglobin Date of Recent Test"] : '',
"bio_haemoglobin_count_result_of_recent_test":this.dataList[0]["Haemoglobin Result of Recent Test"] ? this.dataList[0]["Haemoglobin Result of Recent Test"] : '',
"bio_haemoglobin_count_date_of_last_test":this.dataList[0]["Haemoglobin Date of Last Test"] ? this.dataList[0]["Haemoglobin Date of Last Test"] : '',
"bio_haemoglobin_count_result_of_last_test":this.dataList[0]["Haemoglobin Results of the last test"] ? this.dataList[0]["Haemoglobin Results of the last test"] : '',
"bio_haematocrit_count_result_normal":this.dataList[0]["Haematocrit Result Normal?"] ? this.dataList[0]["Haematocrit Result Normal?"] : '',
"bio_haematocrit_count_date_of_recent_test":this.dataList[0]["Haematocrit Date of Recent Test"] ? this.dataList[0]["Haematocrit Date of Recent Test"] : '',
"bio_haematocrit_count_result_of_recent_test":this.dataList[0]["Haematocrit Result of Recent Test"] ? this.dataList[0]["Haematocrit Result of Recent Test"] : '',
"bio_haematocrit_count_date_of_last_test":this.dataList[0]["Haematocrit Date of Last Test"] ? this.dataList[0]["Haematocrit Date of Last Test"] : '',
"bio_haematocrit_count_result_of_last_test":this.dataList[0]["Haematocrit Results of the last test"] ? this.dataList[0]["Haematocrit Results of the last test"] : '',
"bio_ferritin_count_result_normal":this.dataList[0]["Ferritin Result Normal?"] ? this.dataList[0]["Ferritin Result Normal?"] : '',
"bio_ferritin_count_date_of_recent_test":this.dataList[0]["Ferritin Date of Recent Test"] ? this.dataList[0]["Ferritin Date of Recent Test"] : '',
"bio_ferritin_count_result_of_recent_test":this.dataList[0]["Ferritin Result of Recent Test"] ? this.dataList[0]["Ferritin Result of Recent Test"] : '',
"bio_ferritin_count_date_of_last_test":this.dataList[0]["Ferritin Date of Last Test"] ? this.dataList[0]["Ferritin Date of Last Test"] : '',
"bio_ferritin_count_result_of_last_test":this.dataList[0]["Ferritin Results of the last test"] ? this.dataList[0]["Ferritin Results of the last test"] : '',
"bio_rdw_count_result_normal":this.dataList[0]["RDW Count Result Normal?"] ? this.dataList[0]["RDW Count Result Normal?"] : '',
"bio_rdw_count_date_of_recent_test":this.dataList[0]["RDW Count Date of Recent Test"] ? this.dataList[0]["RDW Count Date of Recent Test"] : '',
"bio_rdw_count_result_of_recent_test":this.dataList[0]["RDW Count Result of Recent Test"] ? this.dataList[0]["RDW Count Result of Recent Test"] : '',
"bio_rdw_count_date_of_last_test":this.dataList[0]["RDW Count Date of Last Test"] ? this.dataList[0]["RDW Count Date of Last Test"] : '',
"bio_rdw_count_result_of_last_test":this.dataList[0]["RDW Count Results of the last test"] ? this.dataList[0]["RDW Count Results of the last test"] : '',
"bio_mcv_result_normal":this.dataList[0]["MCV Result Normal?"] ? this.dataList[0]["MCV Result Normal?"] : '',
"bio_mcv_date_of_recent_test":this.dataList[0]["MCV Date of Recent Test"] ? this.dataList[0]["MCV Date of Recent Test"] : '',
"bio_mcv_result_of_recent_test":this.dataList[0]["MCV Result of Recent Test"] ? this.dataList[0]["MCV Result of Recent Test"] : '',
"bio_mcv_date_of_last_test":this.dataList[0]["MCV Date of Last Test"] ? this.dataList[0]["MCV Date of Last Test"] : '',
"bio_mcv_result_of_last_test":this.dataList[0]["MCV Results of the last test"] ? this.dataList[0]["MCV Results of the last test"] : '',
"bio_mch_result_normal":this.dataList[0]["MCH Result Normal?"] ? this.dataList[0]["MCH Result Normal?"] : '',
"bio_mch_date_of_recent_test":this.dataList[0]["MCH Date of Recent Test"] ? this.dataList[0]["MCH Date of Recent Test"] : '',
"bio_mch_result_of_recent_test":this.dataList[0]["MCH Result of Recent Test"] ? this.dataList[0]["MCH Result of Recent Test"] : '',
"bio_mch_date_of_last_test":this.dataList[0]["MCH Date of Last Test"] ? this.dataList[0]["MCH Date of Last Test"] : '',
"bio_mch_result_of_last_test":this.dataList[0]["MCH Results of the last test"] ? this.dataList[0]["MCH Results of the last test"] : '',
"bio_mchc_result_normal":this.dataList[0]["MCHC Result Normal?"] ? this.dataList[0]["MCHC Result Normal?"] : '',
"bio_mchc_date_of_recent_test":this.dataList[0]["MCHC Date of Recent Test"] ? this.dataList[0]["MCHC Date of Recent Test"] : '',
"bio_mchc_result_of_recent_test":this.dataList[0]["MCHC Result of Recent Test"] ? this.dataList[0]["MCHC Result of Recent Test"] : '',
"bio_mchc_date_of_last_test":this.dataList[0]["MCHC Date of Last Test"] ? this.dataList[0]["MCHC Date of Last Test"] : '',
"bio_mchc_result_of_last_test":this.dataList[0]["MCHC Results of the last test"] ? this.dataList[0]["MCHC Results of the last test"] : '',
"bio_reticulocyte_result_normal":this.dataList[0]["Reticulocyte Result Normal?"] ? this.dataList[0]["Reticulocyte Result Normal?"] : '',
"bio_reticulocyte_date_of_recent_test":this.dataList[0]["Date of Recent Test"] ? this.dataList[0]["Date of Recent Test"] : '',
"bio_reticulocyte_result_of_recent_test":this.dataList[0]["Reticulocyte Result of Recent Test"] ? this.dataList[0]["Reticulocyte Result of Recent Test"] : '',
"bio_reticulocyte_date_of_last_test":this.dataList[0]["Reticulocyte Date of Last Test"] ? this.dataList[0]["Reticulocyte Date of Last Test"] : '',
"bio_reticulocyte_result_of_last_test":this.dataList[0]["Reticulocyte Results of the last test"] ? this.dataList[0]["Reticulocyte Results of the last test"] : '',
"bio_platelet_result_normal":this.dataList[0]["Platelet Result Normal?"] ? this.dataList[0]["Platelet Result Normal?"] : '',
"bio_platelet_date_of_recent_test":this.dataList[0]["Platelet Date of Recent Test"] ? this.dataList[0]["Platelet Date of Recent Test"] : '',
"bio_platelet_result_of_recent_test":this.dataList[0]["Platelet Result of Recent Test"] ? this.dataList[0]["Platelet Result of Recent Test"] : '',
"bio_platelet_date_of_last_test":this.dataList[0]["Platelet Date of Last Test"] ? this.dataList[0]["Platelet Date of Last Test"] : '',
"bio_platelet_result_of_last_test":this.dataList[0]["Platelet Results of the last test"] ? this.dataList[0]["Platelet Results of the last test"] : '',
"bio_mpvplatelet_result_normal":this.dataList[0]["MPV Result Normal?"] ? this.dataList[0]["MPV Result Normal?"] : '',
"bio_mpvplatelet_date_of_recent_test":this.dataList[0]["MPV Date of Recent Test"] ? this.dataList[0]["MPV Date of Recent Test"] : '',
"bio_mpvplatelet_result_of_recent_test":this.dataList[0]["MPV Result of Recent Test"] ? this.dataList[0]["MPV Result of Recent Test"] : '',
"bio_mpvplatelet_date_of_last_test":this.dataList[0]["MPV Date of Last Test"] ? this.dataList[0]["MPV Date of Last Test"] : '',
"bio_mpvplatelet_result_of_last_test":this.dataList[0]["MPV Results of the last test"] ? this.dataList[0]["MPV Results of the last test"] : '',
"bio_utsmacroscopic_result_normal":this.dataList[0]["UTS Macroscopic Result"] ? this.dataList[0]["UTS Macroscopic Result"] : '',
"bio_utsmacroscopic_date_of_recent_test":this.dataList[0]["UTS Macroscopic Recent Date"] ? this.dataList[0]["UTS Macroscopic Recent Date"] : '',
"bio_utsmacroscopic_result_of_recent_test":this.dataList[0]["UTS Macroscopic Recent Result"] ? this.dataList[0]["UTS Macroscopic Recent Result"] : '',
"bio_utsmacroscopic_date_of_last_test":this.dataList[0]["UTS Macroscopic Last Date"] ? this.dataList[0]["UTS Macroscopic Last Date"] : '',
"bio_utsmacroscopic_result_of_last_test":this.dataList[0]["UTS Macroscopic Last Result"] ? this.dataList[0]["UTS Macroscopic Last Result"] : '',
"bio_utsph_result_normal":this.dataList[0]["Urine Test Summary pH Result Normal?"] ? this.dataList[0]["Urine Test Summary pH Result Normal?"] : '',
"bio_utsph_date_of_recent_test":this.dataList[0]["Urine Test Summary pH Date of Recent Test"] ? this.dataList[0]["Urine Test Summary pH Date of Recent Test"] : '',
"bio_utsph_result_of_recent_test":this.dataList[0]["Urine Test Summary Result of Recent Test"] ? this.dataList[0]["Urine Test Summary Result of Recent Test"] : '',
"bio_utsph_date_of_last_test":this.dataList[0]["Date of Last Test"] ? this.dataList[0]["Date of Last Test"] : '',
"bio_utsph_result_of_last_test":this.dataList[0]["Urine Test Summary pH Results of the Last Test"] ? this.dataList[0]["Urine Test Summary pH Results of the Last Test"] : '',
"bio_utsglucose_result_normal":this.dataList[0]["UTS Glucose Result Normal?"] ? this.dataList[0]["UTS Glucose Result Normal?"] : '',
"bio_utsglucose_date_of_recent_test":this.dataList[0]["UTS Glucose Date of Recent Test"] ? this.dataList[0]["UTS Glucose Date of Recent Test"] : '',
"bio_utsglucose_result_of_recent_test":this.dataList[0]["UTS Glucose Result of Recent Test"] ? this.dataList[0]["UTS Glucose Result of Recent Test"] : '',
"bio_utsglucose_date_of_last_test":this.dataList[0]["UTS Glucose Date of Last Test"] ? this.dataList[0]["UTS Glucose Date of Last Test"] : '',
"bio_utsglucose_result_of_last_test":this.dataList[0]["UTS Glucose Results of the last test"] ? this.dataList[0]["UTS Glucose Results of the last test"] : '',
"bio_utsgravity_result_normal":this.dataList[0]["UTS Gravity Result Normal?"] ? this.dataList[0]["UTS Gravity Result Normal?"] : '',
"bio_utsgravity_date_of_recent_test":this.dataList[0]["UTS Gravity Date of Recent Test"] ? this.dataList[0]["UTS Gravity Date of Recent Test"] : '',
"bio_utsgravity_result_of_recent_test":this.dataList[0]["UTS Gravity Result of Recent Test"] ? this.dataList[0]["UTS Gravity Result of Recent Test"] : '',
"bio_utsgravity_date_of_last_test":this.dataList[0]["UTS Gravity Date of Last Test"] ? this.dataList[0]["UTS Gravity Date of Last Test"] : '',
"bio_utsgravity_result_of_last_test":this.dataList[0]["UTS Gravity Results of the last test"] ? this.dataList[0]["UTS Gravity Results of the last test"] : '',
"bio_utsnitrite_result_normal":this.dataList[0]["UTS Nitrate Result Normal?"] ? this.dataList[0]["UTS Nitrate Result Normal?"] : '',
"bio_utsnitrite_date_of_recent_test":this.dataList[0]["UTS Nitrate Date of Recent Test"] ? this.dataList[0]["UTS Nitrate Date of Recent Test"] : '',
"bio_utsnitrite_result_of_recent_test":this.dataList[0]["UTS Nitrate Result of Recent Test"] ? this.dataList[0]["UTS Nitrate Result of Recent Test"] : '',
"bio_utsnitrite_date_of_last_test":this.dataList[0]["UTS Nitrate Date of Last Test"] ? this.dataList[0]["UTS Nitrate Date of Last Test"] : '',
"bio_utsnitrite_result_of_last_test":this.dataList[0]["UTS Nitrate Results of the last test"] ? this.dataList[0]["UTS Nitrate Results of the last test"] : '',
"bio_utsleukocyte_result_normal":this.dataList[0]["UTS Leukocyte Result Normal?"] ? this.dataList[0]["UTS Leukocyte Result Normal?"] : '',
"bio_utsleukocyte_date_of_recent_test":this.dataList[0]["UTS Leukocyte Date of Recent Test"] ? this.dataList[0]["UTS Leukocyte Date of Recent Test"] : '',
"bio_utsleukocyte_result_of_recent_test":this.dataList[0]["UTS Leukocyte Result of Recent Test"] ? this.dataList[0]["UTS Leukocyte Result of Recent Test"] : '',
"bio_utsleukocyte_date_of_last_test":this.dataList[0]["UTS Leukocyte Date of Last Test"] ? this.dataList[0]["UTS Leukocyte Date of Last Test"] : '',
"bio_utsleukocyte_result_of_last_test":this.dataList[0]["UTS Leukocyte Results of the last test"] ? this.dataList[0]["UTS Leukocyte Results of the last test"] : '',
"bio_utsmicroscopy_cells_result_normal":this.dataList[0]["UTS Microscopy Cell Result Normal?"] ? this.dataList[0]["UTS Microscopy Cell Result Normal?"] : '',
"bio_utsmicroscopy_cells_date_of_recent_test":this.dataList[0]["UTS Microscopy Cell Date of Recent Test"] ? this.dataList[0]["UTS Microscopy Cell Date of Recent Test"] : '',
"bio_utsmicroscopy_cells_result_of_recent_test":this.dataList[0]["UTS Microscopy Cell Result of Recent Test"] ? this.dataList[0]["UTS Microscopy Cell Result of Recent Test"] : '',
"bio_utsmicroscopy_cells_date_of_last_test":this.dataList[0]["UTS Microscopy Cell Date of Last Test"] ? this.dataList[0]["UTS Microscopy Cell Date of Last Test"] : '',
"bio_utsmicroscopy_cells_result_of_last_test":this.dataList[0]["UTS Microscopy Cell Results of the last test"] ? this.dataList[0]["UTS Microscopy Cell Results of the last test"] : '',
"bio_utsmicroscopy_casts_result_normal":this.dataList[0]["UTS Microscopy CASTS Result Normal?"] ? this.dataList[0]["UTS Microscopy CASTS Result Normal?"] : '',
"bio_utsmicroscopy_casts_date_of_recent_test":this.dataList[0]["UTS Microscopy CASTS Date of Recent Test"] ? this.dataList[0]["UTS Microscopy CASTS Date of Recent Test"] : '',
"bio_utsmicroscopy_casts_result_of_recent_test":this.dataList[0]["UTS Microscopy CASTS Result of Recent Test"] ? this.dataList[0]["UTS Microscopy CASTS Result of Recent Test"] : '',
"bio_utsmicroscopy_casts_date_of_last_test":this.dataList[0]["UTS Microscopy CASTS Date of Last Test"] ? this.dataList[0]["UTS Microscopy CASTS Date of Last Test"] : '',
"bio_utsmicroscopy_casts_result_of_last_test":this.dataList[0]["UTS Microscopy CASTS Results of the last test"] ? this.dataList[0]["UTS Microscopy CASTS Results of the last test"] : '',
"bio_utsmicroscopy_crystals_result_normal":this.dataList[0]["UTS Microscopy Crystals Result Normal?"] ? this.dataList[0]["UTS Microscopy Crystals Result Normal?"] : '',
"bio_utsmicroscopy_crystals_date_of_recent_test":this.dataList[0]["UTS Microscopy Crystals Date of Recent Test"] ? this.dataList[0]["UTS Microscopy Crystals Date of Recent Test"] : '',
"bio_utsmicroscopy_crystals_result_of_recent_test":this.dataList[0]["UTS Microscopy Crystals Result of Recent Test"] ? this.dataList[0]["UTS Microscopy Crystals Result of Recent Test"] : '',
"bio_utsmicroscopy_crystals_date_of_last_test":this.dataList[0]["UTS Microscopy Crystals Date of Last Test"] ? this.dataList[0]["UTS Microscopy Crystals Date of Last Test"] : '',
"bio_utsmicroscopy_crystals_result_of_last_test":this.dataList[0]["UTS Microscopy Crystals Results of the last test"] ? this.dataList[0]["UTS Microscopy Crystals Results of the last test"] : '',
"oral_agents_other_other":this.dataList[0]["OA Other"] ? this.dataList[0]["OA Other"] : '',
"oral_agents_other_pramlintide":this.dataList[0]["Other Pramlintide"] ? this.dataList[0]["Other Pramlintide"] : '',
"oral_agents_other":this.dataList[0]["OA Other Dose"]  === ''? false : this.dataList[0]["OA Other Dose"] === 'Yes'? true : false,
"anti_dyslipidemia_statins_dose":this.dataList[0]["Anti Dyslipidemia Statins Dose"] ? this.dataList[0]["Anti Dyslipidemia Statins Dose"] : '',
"anti_dyslipidemia_other_dose":this.dataList[0]["Anti Dyslipidemia Other Dose"] ? this.dataList[0]["Anti Dyslipidemia Other Dose"] : '',
"oral_agents_thiazolidinediones_dose":this.dataList[0]["Agents Thiazolidinediones Dose"] ? this.dataList[0]["Agents Thiazolidinediones Dose"] : '',
"oral_agents_sulphonyureas_dose":this.dataList[0]["SUs Dose"] ? this.dataList[0]["SUs Dose"] : '',
"bio_fbg_date_of_recent_test":this.dataList[0]["FBG Date of Recent Test"] ? this.dataList[0]["FBG Date of Recent Test"] : '',
"bio_fbg_result_of_recent_test":this.dataList[0]["FBG Result of Recent Test"] ? this.dataList[0]["FBG Result of Recent Test"] : '',
"bio_fbg_date_of_last_test":this.dataList[0]["FBG Date of Last Test"] ? this.dataList[0]["FBG Date of Last Test"] : '',
"bio_fbg_result_of_last_test":this.dataList[0]["FBG Results of the last test"] ? this.dataList[0]["FBG Results of the last test"] : '',
"bio_fbg_result_normal":this.dataList[0]["Is FBG Result Normal?"] ? this.dataList[0]["Is FBG Result Normal?"] : '',
"anti_hypertensive_ace_inhibitors_dose":this.dataList[0]["Ace Inhibitors Dose"] ? this.dataList[0]["Ace Inhibitors Dose"] : '',
"oral_agents_other_dose":this.dataList[0]["Others Agents Dose"] ? this.dataList[0]["Others Agents Dose"] : '',
"anti_hypertensive_other_dose":this.dataList[0]["Hypertensive Others Dose"] ? this.dataList[0]["Hypertensive Others Dose"] : '',
"anti_hypertensive_cachannel_blockers_dose":this.dataList[0]["Cachannel Blocker Dose"] ? this.dataList[0]["Cachannel Blocker Dose"] : '',
"anti_hypertensive_diuretics_dose":this.dataList[0]["Diuretics Dose"] ? this.dataList[0]["Diuretics Dose"] : '',
"anti_hypertensive_beta_blockers_dose":this.dataList[0]["Beta Blocker Dose"] ? this.dataList[0]["Beta Blocker Dose"] : '',
"anti_hypertensive_arbs_dose":this.dataList[0]["ARBS Dose"] ? this.dataList[0]["ARBS Dose"] : '',
"anti_dyslipidemia_fibrates_dose":this.dataList[0]["Fibrates Dose"] ? this.dataList[0]["Fibrates Dose"] : ''})
		
			}
console.log(this.dataList.length,_result)
if (this.dataList.length) {
 
      this._service.updateSample(_result).subscribe((res)=> {
        if (res) {
          this.splashService.splashScreen({isLoading : false, message : "" })
          this.excelcreateForm();
		  this.dataList =[];
          this._snackBar.open("Data has been updated successfully!", 'Ok', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
        }
      })

    }
 
}
// 	Upload(){

		

// 		// this.splashService.splashScreen({isLoading : true, message : "Uploading" })

// 		let _result = [];           
// // 		 for (let i = 0; i < this.dataList.length; i++) {
// // 			const dateString = this.dataList[0].SAMPLINGDATE;
// // 			if(this.dataList[0].STARTDATECOLLECTION !== undefined || this.dataList[0].STARTDATECOLLECTION!=="")
// // {
// // 	const startdateString = this.dataList[0].STARTDATECOLLECTION?this.dataList[0].STARTDATECOLLECTION:'';
// // 	const SD = new Date(startdateString); 
// // 	 Smonth=SD.getMonth() + 1 ; 
// // 	 Sdate=SD.getDate(); 
// // 	 Startdate = Sdate + '/'+Smonth +'/'+ SD.getFullYear();
// // }
// // 			if(this.dataList[0].ENDDATECOLLECTION !== undefined || this.dataList[0].ENDDATECOLLECTION==="")
// // {
// // 	const enddateString = this.dataList[0].ENDDATECOLLECTION?this.dataList[0].ENDDATECOLLECTION:'';
// // 	const ED = new Date(enddateString); 
// // 	 Emonth=ED.getMonth() + 1 ; 
// // 	 Edate=ED.getDate(); 
// // 	 Enddate = Edate + '/'+Emonth+'/' + ED.getFullYear();
// // }
// // 	//	console.log(dateString)
// // 			if(this.dataList[0].STARTDATECOLLECTION !== undefined || this.dataList[0].STARTDATECOLLECTION!=="")
// // {
// // 			const D = new Date(dateString); 
// // 			month=D.getMonth() + 1 ; 
// // 			 date=D.getDate(); 
// // 			Sampledate = date +'/'+month + '/'+D.getFullYear();
// // 		}
// //                _result.push({
// //                         "LOCATION": this.dataList[0].LOCATION,
// //                         "SAMPLINGDATE": this.dataList[0].SAMPLINGDATE?Sampledate:'',
// //                         "KUREFERENCE": this.dataList[0].KUREFERENCE,
// //                         "STATIONCODE": this.dataList[0].STATIONCODE?this.dataList[0].STATIONCODE.replace("'",""):'',
// // 						"INFLUENTFLOWRATE": this.dataList[0].INFLUENTFLOWRATE?this.dataList[0].INFLUENTFLOWRATE:'',
// // 						"USERNAME": localStorage.getItem('username'),
// // 						"ACTIVE": 1,
// // 						"COMPANYNAME":this.form.value["CompanyName"], 
// // 						"SAMPLETYPE":this.dataList[0].SAMPLETYPE?this.dataList[0].SAMPLETYPE:'',
// // 						"SAMPLEVOLUME":this.dataList[0].SAMPLEVOLUME?this.dataList[0].SAMPLEVOLUME:'',
// // 						"SAMPLESUBTYPE":this.dataList[0].SAMPLESUBTYPE?this.dataList[0].SAMPLESUBTYPE:'',
// // 						"SAMPLECOLLECTIONTYPE":this.dataList[0].SAMPLECOLLECTIONTYPE?this.dataList[0].SAMPLECOLLECTIONTYPE:'',
// // 						"STARTDATECOLLECTION":this.dataList[0].STARTDATECOLLECTION?Startdate:'',
// // 						"STARTTIMECOLLECTION":this.dataList[0].STARTTIMECOLLECTION?this.dataList[0].STARTTIMECOLLECTION:'',
// // 						"ENDDATECOLLECTION":this.dataList[0].ENDDATECOLLECTION?Enddate:'',
// // 						"ENDTIMECOLLECTION":this.dataList[0].ENDTIMECOLLECTION?this.dataList[0].ENDTIMECOLLECTION:'',
// // 						"COLLECTEDBY":this.dataList[0].COLLECTEDBY?this.dataList[0].COLLECTEDBY:'',
// // 						"EMIRATE":this.dataList[0].EMIRATE?this.dataList[0].EMIRATE:'',
// // 						"TEMPERATURE":this.dataList[0].TEMPERATURE?this.dataList[0].TEMPERATURE:'',
// // 						"CONDUCTIVITY":this.dataList[0].CONDUCTIVITY?this.dataList[0].CONDUCTIVITY:'',
// // 						"DISSOLVEDOXYGEN":this.dataList[0].DISSOLVEDOXYGEN?this.dataList[0].DISSOLVEDOXYGEN:'',
// // 						"PH":this.dataList[0].PH?this.dataList[0].PH:'',
// // 						"POPULATIONESTIMATESERVEDBYSTATION":this.dataList[0].POPULATIONESTIMATESERVEDBYSTATION?this.dataList[0].POPULATIONESTIMATESERVEDBYSTATION:'',
// // 						"NUMBEROFINFECTEDPEOPLE":this.dataList[0].NUMBEROFINFECTEDPEOPLE?this.dataList[0].NUMBEROFINFECTEDPEOPLE:'',
// // 						"RNAVIRALCOUNTS":this.dataList[0].RNAVIRALCOUNTS?this.dataList[0].RNAVIRALCOUNTS:'',
// // 						"STANDARDDEVIATION":this.dataList[0].STANDARDDEVIATION?this.dataList[0].STANDARDDEVIATION:''
// // 					})
// // 		}
// console.log(this.dataList.length)
// if (this.dataList.length) {
//  this.excelcreateForm();
// this.form.patchValue({ "savedFormID": this.form.value["savedFormID"] || this.saveFormId })
// let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
// if (this.formId || this.isFormSubmit) {
//   this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
//   this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value).subscribe((res:any) => {
//     if(res){
//       for(var i=0;i<data.length;i++) {
//         for (var j = 0; j < res.length; j++) {
//           if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
//             data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
//           }
//         }
//       }
//       this._service.createSample8(data, true).subscribe((res)=> {
//         if (res) {
//           this.splashService.splashScreen({isLoading : false, message : "" })
//           this._snackBar.open("Data has been updated successfully!", 'Ok', {
//             duration: 5000,
//             verticalPosition: 'bottom',
//             horizontalPosition: 'center'
//           });
//         }
//       })

//     }
//   })
// }
// }

// }

   UploadExcel() {

    if(!this.file.name.includes('.xlsx'))
    alert('Please Select Excel File')
    else {
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
      // this.Upload();
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
  fetchdataList(){
    this._service.getFormAttributeExcel(14,4).subscribe((res : any[])=>{
      
      for (var j = 0; j < res.length; j++) {
      this.Columns.push(res[j].AttributeDisplayName);
    }
      console.log(this.dataList,this.Columns)
      this.cdr.detectChanges();
      //this.searchInput.nativeElement.focus();
    });
  }

  excelcreateForm(){
    this.form = this.exceleformFB.group({
      "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
      "file": new FormControl({value: '', disabled: this.disableInputs}),
       "removableexcelfile": new FormControl({value: '', disabled: this.disableInputs}),
      //common
        //  "sample": new FormControl({value: '', disabled: this.disableInputs}, [Validators.required]),
      "projecttitle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "principalinvestigator": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
        "collected_by": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_by_last_name": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
          "collected_date": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
         "per_firstname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_middlename": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_lastname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "gender": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required]),
       "nationality": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "dob": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "placeofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "age": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]), 
      "medical_reference_number": new FormControl({ value: '', disabled: this.disableInputs}),
  
      "sample": new FormControl({value:this.dataList[0]["Sample ID"] ? this.dataList[0]["Sample ID"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors": new FormControl({value:this.dataList[0]["ACE-inhibitors"] === ''? false : this.dataList[0]["ACE-inhibitors"] === 'Yes'? true:false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_perindopril": new FormControl({value:this.dataList[0]["Perindopril Dose"] ? this.dataList[0]["Perindopril Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_captopril": new FormControl({value:this.dataList[0]["Captopril Dose"] ? this.dataList[0]["Captopril Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_enalapril": new FormControl({value:this.dataList[0]["Enalapril Dose"] ? this.dataList[0]["Enalapril Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_lisinopril": new FormControl({value:this.dataList[0]["Lisinopril Dose"] ? this.dataList[0]["Lisinopril Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_other": new FormControl({value:this.dataList[0]["ACE Others Dose"] ? this.dataList[0]["ACE Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_arbs": new FormControl({value:this.dataList[0]["ARBs"] === ''? false :  this.dataList[0]["ARBs"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_arbs_losartan": new FormControl({value:this.dataList[0]["Losartan Dose"] ? this.dataList[0]["Losartan Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_arbs_valsartan": new FormControl({value:this.dataList[0]["Valsartan  Dose"] ? this.dataList[0]["Valsartan  Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_arbs_other": new FormControl({value:this.dataList[0]["ARBS Others Dose"] ? this.dataList[0]["ARBS Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_beta_blockers": new FormControl({value:this.dataList[0]["Beta-blockers"] === ''? false : this.dataList[0]["Beta-blockers"] === 'Yes'? true:false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_beta_blockers_atenolol": new FormControl({value:this.dataList[0]["Atenolol Dose"] ? this.dataList[0]["Atenolol Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_beta_blockers_bisoprolol": new FormControl({value:this.dataList[0]["Bisoprolol Dose"] ? this.dataList[0]["Bisoprolol Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_beta_blockers_other": new FormControl({value:this.dataList[0]["Beta Others Dose"] ? this.dataList[0]["Beta Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics": new FormControl({value:this.dataList[0]["Diuretics"] === ''? false :  this.dataList[0]["Diuretics"] === 'Yes'? true:false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics_indapamide": new FormControl({value:this.dataList[0]["Indapamide Dose"] ? this.dataList[0]["Indapamide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics_hydrochlorothiazide": new FormControl({value:this.dataList[0]["Hydrochlorothiazide Dose"] ? this.dataList[0]["Hydrochlorothiazide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics_frusemide": new FormControl({value:this.dataList[0]["Frusemide  Dose"] ? this.dataList[0]["Frusemide  Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics_other": new FormControl({value:this.dataList[0]["Diuretics Others Dose"] ? this.dataList[0]["Diuretics Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers": new FormControl({value:this.dataList[0]["CA Channel Blockers"] === ''? false :  this.dataList[0]["CA Channel Blockers"] === 'Yes'? true:false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers_amlodipine": new FormControl({value:this.dataList[0]["Amlodipine Dose"] ? this.dataList[0]["Amlodipine Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers_nifedipine": new FormControl({value:this.dataList[0]["Nifedipine Dose"] ? this.dataList[0]["Nifedipine Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers_verapamil": new FormControl({value:this.dataList[0]["Verapamil Dose"] ? this.dataList[0]["Verapamil Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers_other": new FormControl({value:this.dataList[0]["Cachannel  Other Dose"] ? this.dataList[0]["Cachannel  Other Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_other": new FormControl({value:this.dataList[0]["Others"] === ''? false :   this.dataList[0]["Others"] === 'Yes'? true : false ,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_methyldopa": new FormControl({value:this.dataList[0]["Methyldopa Dose"] ? this.dataList[0]["Methyldopa Dose"]:'',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_other_other": new FormControl({value:this.dataList[0]["Hypertensive Others"] ? this.dataList[0]["Hypertensive Others"]:'',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins": new FormControl({value:this.dataList[0]["Statins"]  === ''? false : this.dataList[0]["Statins"]  === 'Yes'? true :false ,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins_simvastatin": new FormControl({value:this.dataList[0]["Simvastatin Dose"] ? this.dataList[0]["Simvastatin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins_atorvastatin": new FormControl({value:this.dataList[0]["Atorvastatin Dose"] ? this.dataList[0]["Atorvastatin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins_rosuvastatin": new FormControl({value:this.dataList[0]["Rosuvastatin Dose"] ? this.dataList[0]["Rosuvastatin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins_other": new FormControl({value:this.dataList[0]["Dyslipidemia  Statins Others Dose"] ? this.dataList[0]["Dyslipidemia  Statins Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_fibrates": new FormControl({value:this.dataList[0]["Fibrates"] === ''? false :  this.dataList[0]["Fibrates"]=== 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_fibrates_other": new FormControl({value:this.dataList[0]["Anti Dyslipidemia Other"] ? this.dataList[0]["Anti Dyslipidemia Other"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_fibrates_gemfibrozil": new FormControl({value:this.dataList[0]["Gemfibrozil Dose"] ? this.dataList[0]["Gemfibrozil Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_fibrates_fenofibrate": new FormControl({value:this.dataList[0]["Fenofibrate Dose"] ? this.dataList[0]["Fenofibrate Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_other": new FormControl({value:this.dataList[0]["Dyslipidemia Others"] === ''? false : this.dataList[0]["Dyslipidemia Others"]  === 'Yes'? true:false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_other_other": new FormControl({value:this.dataList[0]["Others  Dose"] ? this.dataList[0]["Others  Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_biguanides": new FormControl({value:this.dataList[0]["Biguanides"] === ''? false : this.dataList[0]["Biguanides"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_biguanides_metformin": new FormControl({value:this.dataList[0]["Metformin Dose"] ? this.dataList[0]["Metformin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas": new FormControl({value:this.dataList[0]["SUs"] === ''? false : this.dataList[0]["SUs"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_glibenclamide": new FormControl({value:this.dataList[0]["Glibenclamide Dose"] ? this.dataList[0]["Glibenclamide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_glimepiride": new FormControl({value:this.dataList[0]["Glimepiride Dose"] ? this.dataList[0]["Glimepiride Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_glipizide": new FormControl({value:this.dataList[0]["Glipizide Dose"] ? this.dataList[0]["Glipizide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_gliclazidemr": new FormControl({value:this.dataList[0]["Gliclazide MR Dose"] ? this.dataList[0]["Gliclazide MR Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_glipizide1": new FormControl({value:this.dataList[0]["Glipizide Dose1"] ? this.dataList[0]["Glipizide Dose1"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_glimepride": new FormControl({value:this.dataList[0]["Glimepride Dose"] ? this.dataList[0]["Glimepride Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_thiazolidinediones": new FormControl({value:this.dataList[0]["Thiazolidinediones"] === ''? false :  this.dataList[0]["Thiazolidinediones"]=== 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_thiazolidinediones_pioglitazone": new FormControl({value:this.dataList[0]["Pioglitazone Dose"] ? this.dataList[0]["Pioglitazone Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_thiazolidinediones_other": new FormControl({value:this.dataList[0]["Thiazolidinediones Others Dose"] ? this.dataList[0]["Thiazolidinediones Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_meglitinides": new FormControl({value:this.dataList[0]["Meglitinides"] === ''? false :  this.dataList[0]["Meglitinides"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_meglitinides_nateglinide": new FormControl({value:this.dataList[0]["Nateglinide Dose"] ? this.dataList[0]["Nateglinide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_meglitinides_repaglinide": new FormControl({value:this.dataList[0]["Repaglinide Dose"] ? this.dataList[0]["Repaglinide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_dipeptidyl": new FormControl({value:this.dataList[0]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === ''? false :  this.dataList[0]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === 'Yes'? true : false ,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_dipeptidyl_sitagliptin": new FormControl({value:this.dataList[0]["Sitagliptin Dose"] ? this.dataList[0]["Sitagliptin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_dipeptidyl_vildagliptin": new FormControl({value:this.dataList[0]["Vildagliptin Dose"] ? this.dataList[0]["Vildagliptin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_dipeptidyl_saxagliptin": new FormControl({value:this.dataList[0]["Saxagliptin Dose"] ? this.dataList[0]["Saxagliptin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_dipeptidyl_linagliptin": new FormControl({value:this.dataList[0]["Linagliptin Dose"] ? this.dataList[0]["Linagliptin Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_incretin": new FormControl({value:this.dataList[0]["Incretin mimetics (GLP-1 agonist)"] === ''? false :  this.dataList[0]["Incretin mimetics (GLP-1 agonist)"] === 'Yes'? true :false ,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_incretin_exenatide": new FormControl({value:this.dataList[0]["Exenatide Dose"] ? this.dataList[0]["Exenatide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_incretin_liraglutide": new FormControl({value:this.dataList[0]["Liraglutide Dose"] ? this.dataList[0]["Liraglutide Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_incretin_exenatide_weekly": new FormControl({value:this.dataList[0]["Exenatide (weekly) Dose"] ? this.dataList[0]["Exenatide (weekly) Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_alpha_glucosidase_inhibitors": new FormControl({value:this.dataList[0]["Alpha-glucosidase inhibitors"] === ''? false : this.dataList[0]["Alpha-glucosidase inhibitors"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_alpha_glucosidase_inhibitors_acarbose": new FormControl({value:this.dataList[0]["Acarbose Dose"] ? this.dataList[0]["Acarbose Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin": new FormControl({value:this.dataList[0]["Insulin"] === ''? false :  this.dataList[0]["Insulin"] === 'Yes'? false : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_lispro": new FormControl({value:this.dataList[0]["Lispro Dose"] !== ''? '': '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_aspart": new FormControl({value:this.dataList[0]["Aspart Dose"] !== ''? '': '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_glulisine": new FormControl({value:this.dataList[0]["Glulisine Dose"] !== ''? '' : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_regular": new FormControl({value:this.dataList[0]["Regular Dose"] !== ''? '' : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_nph": new FormControl({value:this.dataList[0]["NPH Dose"] !== ''? '' : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_detemir": new FormControl({value:this.dataList[0]["Detemir Dose"] !== ''? '': '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_glargine": new FormControl({value:this.dataList[0]["Glargine Dose"] !== ''? '': '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_combination": new FormControl({value:this.dataList[0]["Combination Dose"] !== ''? '' : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "injections_insulin_other": new FormControl({value:this.dataList[0]["Insulin Injections"] === ''? false :  this.dataList[0]["Insulin Injections"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "supplements_vitamind3": new FormControl({value:this.dataList[0]["Vitamin D3"] === ''? false :  this.dataList[0]["Vitamin D3"] === 'Yes'? true : false ,disabled: this.disableInput },[Validators.maxLength(200)]),
      "supplements_others": new FormControl({value:this.dataList[0]["Others (including erythropoietin injections)"] ? this.dataList[0]["Others (including erythropoietin injections)"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "antidepressants_prozac": new FormControl({value:this.dataList[0]["Prozac"] === ''? false :  this.dataList[0]["Prozac"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "antidepressants_other": new FormControl({value:this.dataList[0]["Anti-Depressants Others"] ? this.dataList[0]["Anti-Depressants Others"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "antianxiety_diazepam": new FormControl({value:this.dataList[0]["Diazepam Dose"] ? this.dataList[0]["Diazepam Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "antianxiety_other": new FormControl({value:this.dataList[0]["Antianxiety Other"] ? this.dataList[0]["Antianxiety Other"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "othermedication_other": new FormControl({value:this.dataList[0]["Other Medication"] ? this.dataList[0]["Other Medication"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "traditional_chinese_specify": new FormControl({value:this.dataList[0]["Traditional Chinese Medicine"] ? this.dataList[0]["Traditional Chinese Medicine"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fastingglucose_result_normal": new FormControl({value:this.dataList[0]["Fasting Glucose Result"] ? this.dataList[0]["Fasting Glucose Result"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fastingglucose_date_of_recent_test": new FormControl({value:this.dataList[0]["FGL Date of Recent Test"] ? this.dataList[0]["FGL Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fastingglucose_result_of_recent_test": new FormControl({value:this.dataList[0]["FGL Result of Recent Test"] ? this.dataList[0]["FGL Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fastingglucose_date_of_last_test": new FormControl({value:this.dataList[0]["FGL Date of Last Test"] ? this.dataList[0]["FGL Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fastingglucose_result_of_last_test": new FormControl({value:this.dataList[0]["FGL Results of the last test"] ? this.dataList[0]["FGL Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_randomglucose_result_normal": new FormControl({value:this.dataList[0]["Is RGL Result Normal?"] ? this.dataList[0]["Is RGL Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_randomglucose_date_of_recent_test": new FormControl({value:this.dataList[0]["RGL Date of Recent Test"] ? this.dataList[0]["RGL Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_randomglucose_result_of_recent_test": new FormControl({value:this.dataList[0]["RGL Result of Recent Test"] ? this.dataList[0]["RGL Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_randomglucose_date_of_last_test": new FormControl({value:this.dataList[0]["RGL Date of Last Test"] ? this.dataList[0]["RGL Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_randomglucose_result_of_last_test": new FormControl({value:this.dataList[0]["RGL Results of the last test"] ? this.dataList[0]["RGL Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ogtt_result_normal": new FormControl({value:this.dataList[0]["Is OGTT Result Normal?"] ? this.dataList[0]["Is OGTT Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ogtt_date_of_recent_test": new FormControl({value:this.dataList[0]["OGTT Date of Recent Test"] ? this.dataList[0]["OGTT Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ogtt_result_of_recent_test": new FormControl({value:this.dataList[0]["OGTT Result of Recent Test"] ? this.dataList[0]["OGTT Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ogtt_date_of_last_test": new FormControl({value:this.dataList[0]["OGTT Date of Last Test"] ? this.dataList[0]["OGTT Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ogtt_result_of_last_test": new FormControl({value:this.dataList[0]["OGTT Results of the last test"] ? this.dataList[0]["OGTT Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fg2_result_normal": new FormControl({value:this.dataList[0]["Is FG2 Result Normal?"] ? this.dataList[0]["Is FG2 Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fg2_date_of_recent_test": new FormControl({value:this.dataList[0]["FG2 Date of Recent Test"] ? this.dataList[0]["FG2 Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fg2_result_of_recent_test": new FormControl({value:this.dataList[0]["FG2 Result of Recent Test"] ? this.dataList[0]["FG2 Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fg2_date_of_last_test": new FormControl({value:this.dataList[0]["FG2 Date of Last Test"] ? this.dataList[0]["FG2 Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fg2_result_of_last_test": new FormControl({value:this.dataList[0]["FG2 Results of the last test"] ? this.dataList[0]["FG2 Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hba1c_result_normal": new FormControl({value:this.dataList[0]["Is HBA1C Result Normal?"] ? this.dataList[0]["Is HBA1C Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hba1c_date_of_recent_test": new FormControl({value:this.dataList[0]["HAB1C Date of Recent Test"] ? this.dataList[0]["HAB1C Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hba1c_result_of_recent_test": new FormControl({value:this.dataList[0]["HAB1C Result of Recent Test"] ? this.dataList[0]["HAB1C Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hba1c_date_of_last_test": new FormControl({value:this.dataList[0]["HAB1C Date of Last Test"] ? this.dataList[0]["HAB1C Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hba1c_result_of_last_test": new FormControl({value:this.dataList[0]["HAB1C Results of the last test"] ? this.dataList[0]["HAB1C Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_totalcholesterol_result_normal": new FormControl({value:this.dataList[0]["Total Cholesterol Result Normal?"] ? this.dataList[0]["Total Cholesterol Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_totalcholesterol_date_of_recent_test": new FormControl({value:this.dataList[0]["Total Cholesterol Date of Recent Test"] ? this.dataList[0]["Total Cholesterol Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_totalcholesterol_result_of_recent_test": new FormControl({value:this.dataList[0]["Total Cholesterol Result of Recent Test"] ? this.dataList[0]["Total Cholesterol Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_totalcholesterol_date_of_last_test": new FormControl({value:this.dataList[0]["Total Cholesterol Date of Last Test"] ? this.dataList[0]["Total Cholesterol Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_totalcholesterol_result_of_last_test": new FormControl({value:this.dataList[0]["Total Cholesterol Results of the last test"] ? this.dataList[0]["Total Cholesterol Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_triglyceride_result_normal": new FormControl({value:this.dataList[0]["Triglyceride Result Normal?"] ? this.dataList[0]["Triglyceride Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_triglyceride_date_of_recent_test": new FormControl({value:this.dataList[0]["Triglyceride Date of Recent Test"] ? this.dataList[0]["Triglyceride Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_triglyceride_result_of_recent_test": new FormControl({value:this.dataList[0]["Triglyceride Result of Recent Test"] ? this.dataList[0]["Triglyceride Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_triglyceride_date_of_last_test": new FormControl({value:this.dataList[0]["Triglyceride Date of Last Test"] ? this.dataList[0]["Triglyceride Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_triglyceride_result_of_last_test": new FormControl({value:this.dataList[0]["Triglyceride Results of the last test"] ? this.dataList[0]["Triglyceride Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hdl_result_normal": new FormControl({value:this.dataList[0]["HDL Result Normal?"] ? this.dataList[0]["HDL Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hdl_date_of_recent_test": new FormControl({value:this.dataList[0]["HDL Date of Recent Test"] ? this.dataList[0]["HDL Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hdl_result_of_recent_test": new FormControl({value:this.dataList[0]["HDL Result of Recent Test"] ? this.dataList[0]["HDL Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hdl_date_of_last_test": new FormControl({value:this.dataList[0]["HDL Date of Last Test"] ? this.dataList[0]["HDL Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_hdl_result_of_last_test": new FormControl({value:this.dataList[0]["HDL Results of the last test"] ? this.dataList[0]["HDL Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ldl_result_normal": new FormControl({value:this.dataList[0]["LDL Result Normal?"] ? this.dataList[0]["LDL Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ldl_date_of_recent_test": new FormControl({value:this.dataList[0]["LDL Date of Recent Test"] ? this.dataList[0]["LDL Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ldl_result_of_recent_test": new FormControl({value:this.dataList[0]["LDL Result of Recent Test"] ? this.dataList[0]["LDL Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ldl_date_of_last_test": new FormControl({value:this.dataList[0]["LDL Date of Last Test"] ? this.dataList[0]["LDL Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ldl_result_of_last_test": new FormControl({value:this.dataList[0]["LDL Results of the last test"] ? this.dataList[0]["LDL Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_vitamindlevel_result_normal": new FormControl({value:this.dataList[0]["Vitamin-D-Level Result Normal?"] ? this.dataList[0]["Vitamin-D-Level Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_vitamindlevel_date_of_recent_test": new FormControl({value:this.dataList[0]["Vitamin-D-Level Date of Recent Test"] ? this.dataList[0]["Vitamin-D-Level Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_vitamindlevel_result_of_recent_test": new FormControl({value:this.dataList[0]["Vitamin-D-Level Result of Recent Test"] ? this.dataList[0]["Vitamin-D-Level Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_vitamindlevel_date_of_last_test": new FormControl({value:this.dataList[0]["Vitamin-D-Level Date of Last Test"] ? this.dataList[0]["Vitamin-D-Level Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_vitamindlevel_result_of_last_test": new FormControl({value:this.dataList[0]["Vitamin-D-Level Results of the last test"] ? this.dataList[0]["Vitamin-D-Level Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_microalbumin_result_normal": new FormControl({value:this.dataList[0]["Microalbumin Result Normal?"] ? this.dataList[0]["Microalbumin Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_microalbumin_date_of_recent_test": new FormControl({value:this.dataList[0]["Microalbumin Date of Recent Test"] ? this.dataList[0]["Microalbumin Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_microalbumin_result_of_recent_test": new FormControl({value:this.dataList[0]["Microalbumin Result of Recent Test"] ? this.dataList[0]["Microalbumin Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_microalbumin_date_of_last_test": new FormControl({value:this.dataList[0]["Microalbumin Date of Last Test"] ? this.dataList[0]["Microalbumin Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_microalbumin_result_of_last_test": new FormControl({value:this.dataList[0]["Microalbumin Results of the last test"] ? this.dataList[0]["Microalbumin Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albuminuria_result_normal": new FormControl({value:this.dataList[0]["Albuminuria Result Normal?"] ? this.dataList[0]["Albuminuria Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albuminuria_date_of_recent_test": new FormControl({value:this.dataList[0]["Albuminuria Date of Recent Test"] ? this.dataList[0]["Albuminuria Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albuminuria_result_of_recent_test": new FormControl({value:this.dataList[0]["Albuminuria Result of Recent Test"] ? this.dataList[0]["Albuminuria Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albuminuria_date_of_last_test": new FormControl({value:this.dataList[0]["Albuminuria Date of Last Test"] ? this.dataList[0]["Albuminuria Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albuminuria_result_of_last_test": new FormControl({value:this.dataList[0]["Albuminuria Results of the last test"] ? this.dataList[0]["Albuminuria Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albumincreatinine_result_normal": new FormControl({value:this.dataList[0]["Albumin/Creatinine Result Normal?"] ? this.dataList[0]["Albumin/Creatinine Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albumincreatinine_date_of_recent_test": new FormControl({value:this.dataList[0]["Albumin/Creatinine Date of Recent Test"] ? this.dataList[0]["Albumin/Creatinine Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albumincreatinine_result_of_recent_test": new FormControl({value:this.dataList[0]["Albumin/Creatinine Result of Recent Test"] ? this.dataList[0]["Albumin/Creatinine Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albumincreatinine_date_of_last_test": new FormControl({value:this.dataList[0]["Albumin/Creatinine Date of Last Test"] ? this.dataList[0]["Albumin/Creatinine Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_albumincreatinine_result_of_last_test": new FormControl({value:this.dataList[0]["Albumin/Creatinine Results of the last test"] ? this.dataList[0]["Albumin/Creatinine Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_creatinine_result_normal": new FormControl({value:this.dataList[0]["Creatinine Result Normal?"] ? this.dataList[0]["Creatinine Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_creatinine_date_of_recent_test": new FormControl({value:this.dataList[0]["Creatinine Date of Recent Test"] ? this.dataList[0]["Creatinine Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_creatinine_result_of_recent_test": new FormControl({value:this.dataList[0]["Creatinine Result of Recent Test"] ? this.dataList[0]["Creatinine Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_creatinine_date_of_last_test": new FormControl({value:this.dataList[0]["Creatinine Date of Last Test"] ? this.dataList[0]["Creatinine Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_creatinine_result_of_last_test": new FormControl({value:this.dataList[0]["Creatinine Results of the last test"] ? this.dataList[0]["Creatinine Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_egfr_result_normal": new FormControl({value:this.dataList[0]["eGFR Result Normal?"] ? this.dataList[0]["eGFR Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_egfr_date_of_recent_test": new FormControl({value:this.dataList[0]["eGFR Date of Recent Test"] ? this.dataList[0]["eGFR Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_egfr_result_of_recent_test": new FormControl({value:this.dataList[0]["eGFR Result of Recent Test"] ? this.dataList[0]["eGFR Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_egfr_date_of_last_test": new FormControl({value:this.dataList[0]["eGFR Date of Last Test"] ? this.dataList[0]["eGFR Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_egfr_result_of_last_test": new FormControl({value:this.dataList[0]["eGFR Results of the last test"] ? this.dataList[0]["eGFR Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_sodium_result_normal": new FormControl({value:this.dataList[0]["Serum Sodium Result Normal?"] ? this.dataList[0]["Serum Sodium Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_sodium_date_of_recent_test": new FormControl({value:this.dataList[0]["Serum Sodium Date of Recent Test"] ? this.dataList[0]["Serum Sodium Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_sodium_result_of_recent_test": new FormControl({value:this.dataList[0]["Serum Sodium Result of Recent Test"] ? this.dataList[0]["Serum Sodium Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_sodium_date_of_last_test": new FormControl({value:this.dataList[0]["Serum Sodium Date of Last Test"] ? this.dataList[0]["Serum Sodium Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_sodium_result_of_last_test": new FormControl({value:this.dataList[0]["Serum Sodium Results of the last test"] ? this.dataList[0]["Serum Sodium Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_potassium_result_normal": new FormControl({value:this.dataList[0]["Serum Potassium Result Normal?"] ? this.dataList[0]["Serum Potassium Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_potassium_date_of_recent_test": new FormControl({value:this.dataList[0]["Serum Potassium Date of Recent Test"] ? this.dataList[0]["Serum Potassium Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_potassium_result_of_recent_test": new FormControl({value:this.dataList[0]["Serum Potassium Result of Recent Test"] ? this.dataList[0]["Serum Potassium Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_potassium_date_of_last_test": new FormControl({value:this.dataList[0]["Serum Potassium Date of Last Test"] ? this.dataList[0]["Serum Potassium Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_potassium_result_of_last_test": new FormControl({value:this.dataList[0]["Serum Potassium Results of the last test"] ? this.dataList[0]["Serum Potassium Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_calcium_result_normal": new FormControl({value:this.dataList[0]["Serum Calcium Result Normal?"] ? this.dataList[0]["Serum Calcium Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_calcium_date_of_recent_test": new FormControl({value:this.dataList[0]["Serum Calcium Date of Recent Test"] ? this.dataList[0]["Serum Calcium Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_calcium_result_of_recent_test": new FormControl({value:this.dataList[0]["Serum Calcium Result of Recent Test"] ? this.dataList[0]["Serum Calcium Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_calcium_date_of_last_test": new FormControl({value:this.dataList[0]["Serum Calcium Date of Last Test"] ? this.dataList[0]["Serum Calcium Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_calcium_result_of_last_test": new FormControl({value:this.dataList[0]["Serum Calcium Results of the last test"] ? this.dataList[0]["Serum Calcium Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_magnesium_result_normal": new FormControl({value:this.dataList[0]["Serum Magnesium Result Normal?"] ? this.dataList[0]["Serum Magnesium Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_magnesium_date_of_recent_test": new FormControl({value:this.dataList[0]["Serum Magnesium Date of Recent Test"] ? this.dataList[0]["Serum Magnesium Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_magnesium_result_of_recent_test": new FormControl({value:this.dataList[0]["Serum Magnesium Result of Recent Test"] ? this.dataList[0]["Serum Magnesium Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_magnesium_date_of_last_test": new FormControl({value:this.dataList[0]["Serum Magnesium Date of Last Test"] ? this.dataList[0]["Serum Magnesium Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_magnesium_result_of_last_test": new FormControl({value:this.dataList[0]["Serum Magnesium Results of the last test"] ? this.dataList[0]["Serum Magnesium Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_phosphorus_result_normal": new FormControl({value:this.dataList[0]["Phosphorus Result Normal?"] ? this.dataList[0]["Phosphorus Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_phosphorus_date_of_recent_test": new FormControl({value:this.dataList[0]["Phosphorus Date of Recent Test"] ? this.dataList[0]["Phosphorus Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_phosphorus_result_of_recent_test": new FormControl({value:this.dataList[0]["Phosphorus Result of Recent Test"] ? this.dataList[0]["Phosphorus Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_phosphorus_date_of_last_test": new FormControl({value:this.dataList[0]["Phosphorus Date of Last Test"] ? this.dataList[0]["Phosphorus Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_phosphorus_result_of_last_test": new FormControl({value:this.dataList[0]["Phosphorus Results of the last test"] ? this.dataList[0]["Phosphorus Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_urea_result_normal": new FormControl({value:this.dataList[0]["Urea Result Normal?"] ? this.dataList[0]["Urea Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_urea_date_of_recent_test": new FormControl({value:this.dataList[0]["Urea Date of Recent Test"] ? this.dataList[0]["Urea Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_urea_result_of_recent_test": new FormControl({value:this.dataList[0]["Urea Result of Recent Test"] ? this.dataList[0]["Urea Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_urea_date_of_last_test": new FormControl({value:this.dataList[0]["Urea Date of Last Test"] ? this.dataList[0]["Urea Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_urea_result_of_last_test": new FormControl({value:this.dataList[0]["Urea Results of the last test"] ? this.dataList[0]["Urea Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bicarbonate_result_normal": new FormControl({value:this.dataList[0]["Bicarbonate Result Normal?"] ? this.dataList[0]["Bicarbonate Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bicarbonate_date_of_recent_test": new FormControl({value:this.dataList[0]["Bicarbonate Date of Recent Test"] ? this.dataList[0]["Bicarbonate Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bicarbonate_result_of_recent_test": new FormControl({value:this.dataList[0]["Bicarbonate Result of Recent Test"] ? this.dataList[0]["Bicarbonate Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bicarbonate_date_of_last_test": new FormControl({value:this.dataList[0]["Bicarbonate Date of Last Test"] ? this.dataList[0]["Bicarbonate Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bicarbonate_result_of_last_test": new FormControl({value:this.dataList[0]["Bicarbonate Results of the last test"] ? this.dataList[0]["Bicarbonate Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alt_result_normal": new FormControl({value:this.dataList[0]["ALT Result Normal?"] ? this.dataList[0]["ALT Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alt_date_of_recent_test": new FormControl({value:this.dataList[0]["ALT Date of Recent Test"] ? this.dataList[0]["ALT Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alt_result_of_recent_test": new FormControl({value:this.dataList[0]["ALT Result of Recent Test"] ? this.dataList[0]["ALT Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alt_date_of_last_test": new FormControl({value:this.dataList[0]["ALT Date of Last Test"] ? this.dataList[0]["ALT Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alt_result_of_last_test": new FormControl({value:this.dataList[0]["ALT Results of the last test"] ? this.dataList[0]["ALT Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alp_result_normal": new FormControl({value:this.dataList[0]["ALP Result Normal?"] ? this.dataList[0]["ALP Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alp_date_of_recent_test": new FormControl({value:this.dataList[0]["ALP Date of Recent Test"] ? this.dataList[0]["ALP Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alp_result_of_recent_test": new FormControl({value:this.dataList[0]["ALP Result of Recent Test"] ? this.dataList[0]["ALP Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alp_date_of_last_test": new FormControl({value:this.dataList[0]["ALP Date of Last Test"] ? this.dataList[0]["ALP Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_alp_result_of_last_test": new FormControl({value:this.dataList[0]["ALP Results of the last test"] ? this.dataList[0]["ALP Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ast_result_normal": new FormControl({value:this.dataList[0]["AST Result Normal?"] ? this.dataList[0]["AST Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ast_date_of_recent_test": new FormControl({value:this.dataList[0]["AST Date of Recent Test"] ? this.dataList[0]["AST Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ast_result_of_recent_test": new FormControl({value:this.dataList[0]["AST Result of Recent Test"] ? this.dataList[0]["AST Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ast_date_of_last_test": new FormControl({value:this.dataList[0]["AST Date of Last Test"] ? this.dataList[0]["AST Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ast_result_of_last_test": new FormControl({value:this.dataList[0]["AST Results of the last test"] ? this.dataList[0]["AST Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bilirubin_result_normal": new FormControl({value:this.dataList[0]["Bilirubin Result Normal?"] ? this.dataList[0]["Bilirubin Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bilirubin_date_of_recent_test": new FormControl({value:this.dataList[0]["Bilirubin Date of Recent Test"] ? this.dataList[0]["Bilirubin Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bilirubin_result_of_recent_test": new FormControl({value:this.dataList[0]["Bilirubin Result of Recent Test"] ? this.dataList[0]["Bilirubin Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bilirubin_date_of_last_test": new FormControl({value:this.dataList[0]["Bilirubin Date of Last Test"] ? this.dataList[0]["Bilirubin Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_bilirubin_result_of_last_test": new FormControl({value:this.dataList[0]["Bilirubin Results of the last test"] ? this.dataList[0]["Bilirubin Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_protein_result_normal": new FormControl({value:this.dataList[0]["Total Protein Result Normal?"] ? this.dataList[0]["Total Protein Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_protein_date_of_recent_test": new FormControl({value:this.dataList[0]["Total Protein Date of Recent Test"] ? this.dataList[0]["Total Protein Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_protein_result_of_recent_test": new FormControl({value:this.dataList[0]["Total Protein Result of Recent Test"] ? this.dataList[0]["Total Protein Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_protein_date_of_last_test": new FormControl({value:this.dataList[0]["Total Protein Date of Last Test"] ? this.dataList[0]["Total Protein Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_protein_result_of_last_test": new FormControl({value:this.dataList[0]["Total Protein Results of the last test"] ? this.dataList[0]["Total Protein Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_serum_albumin_result_normal": new FormControl({value:this.dataList[0]["Serum Albumin Result Normal?"] ? this.dataList[0]["Serum Albumin Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_serum_albumin_date_of_recent_test": new FormControl({value:this.dataList[0]["Serum Albumin Date of Recent Test"] ? this.dataList[0]["Serum Albumin Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_serum_albumin_result_of_recent_test": new FormControl({value:this.dataList[0]["Serum Albumin Result of Recent Test"] ? this.dataList[0]["Serum Albumin Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_serum_albumin_date_of_last_test": new FormControl({value:this.dataList[0]["Serum Albumin Date of Last Test"] ? this.dataList[0]["Serum Albumin Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_serum_albumin_result_of_last_test": new FormControl({value:this.dataList[0]["Serum Albumin Results of the last test"] ? this.dataList[0]["Serum Albumin Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_cprotein_result_normal": new FormControl({value:this.dataList[0]["C-reactive Protein Result Normal?"] ? this.dataList[0]["C-reactive Protein Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_cprotein_date_of_recent_test": new FormControl({value:this.dataList[0]["C-reactive Protein Date of Recent Test"] ? this.dataList[0]["C-reactive Protein Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_cprotein_result_of_recent_test": new FormControl({value:this.dataList[0]["C-reactive Protein Result of Recent Test"] ? this.dataList[0]["C-reactive Protein Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_cprotein_date_of_last_test": new FormControl({value:this.dataList[0]["C-reactive Protein Date of Last Test"] ? this.dataList[0]["C-reactive Protein Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_cprotein_result_of_last_test": new FormControl({value:this.dataList[0]["C-reactive Protein Results of the last test"] ? this.dataList[0]["C-reactive Protein Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t3_result_normal": new FormControl({value:this.dataList[0]["T3 Result Normal?"] ? this.dataList[0]["T3 Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t3_date_of_recent_test": new FormControl({value:this.dataList[0]["T3 Date of Recent Test"] ? this.dataList[0]["T3 Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t3_result_of_recent_test": new FormControl({value:this.dataList[0]["T3 Result of Recent Test"] ? this.dataList[0]["T3 Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t3_date_of_last_test": new FormControl({value:this.dataList[0]["T3 Date of Last Test"] ? this.dataList[0]["T3 Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t3_result_of_last_test": new FormControl({value:this.dataList[0]["T3 Results of the last test"] ? this.dataList[0]["T3 Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t4_result_normal": new FormControl({value:this.dataList[0]["T4 Result Normal?"] ? this.dataList[0]["T4 Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t4_date_of_recent_test": new FormControl({value:this.dataList[0]["T4 Date of Recent Test"] ? this.dataList[0]["T4 Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t4_result_of_recent_test": new FormControl({value:this.dataList[0]["T4 Result of Recent Test"] ? this.dataList[0]["T4 Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t4_date_of_last_test": new FormControl({value:this.dataList[0]["T4 Date of Last Test"] ? this.dataList[0]["T4 Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_t4_result_of_last_test": new FormControl({value:this.dataList[0]["T4 Results of the last test"] ? this.dataList[0]["T4 Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_freet4_result_normal": new FormControl({value:this.dataList[0]["Free T4 Result Normal?"] ? this.dataList[0]["Free T4 Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_freet4_date_of_recent_test": new FormControl({value:this.dataList[0]["Free T4 Date of Recent Test"] ? this.dataList[0]["Free T4 Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_freet4_result_of_recent_test": new FormControl({value:this.dataList[0]["Free T4 Result of Recent Test"] ? this.dataList[0]["Free T4 Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_freet4_date_of_last_test": new FormControl({value:this.dataList[0]["Free T4 Date of Last Test"] ? this.dataList[0]["Free T4 Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_freet4_result_of_last_test": new FormControl({value:this.dataList[0]["Free T4 Results of the last test"] ? this.dataList[0]["Free T4 Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_tsh_result_normal": new FormControl({value:this.dataList[0]["TSH Result Normal?"] ? this.dataList[0]["TSH Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_tsh_date_of_recent_test": new FormControl({value:this.dataList[0]["TSH Date of Recent Test"] ? this.dataList[0]["TSH Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_tsh_result_of_recent_test": new FormControl({value:this.dataList[0]["TSH Result of Recent Test"] ? this.dataList[0]["TSH Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_tsh_date_of_last_test": new FormControl({value:this.dataList[0]["TSH Date of Last Test"] ? this.dataList[0]["TSH Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_tsh_result_of_last_test": new FormControl({value:this.dataList[0]["TSH Results of the last test"] ? this.dataList[0]["TSH Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_parathyroid_result_normal": new FormControl({value:this.dataList[0]["Parathyroid Hormone Result Normal?"] ? this.dataList[0]["Parathyroid Hormone Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_parathyroid_date_of_recent_test": new FormControl({value:this.dataList[0]["Parathyroid Hormone Date of Recent Test"] ? this.dataList[0]["Parathyroid Hormone Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_parathyroid_result_of_recent_test": new FormControl({value:this.dataList[0]["Parathyroid Hormone Result of Recent Test"] ? this.dataList[0]["Parathyroid Hormone Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_parathyroid_date_of_last_test": new FormControl({value:this.dataList[0]["Parathyroid Hormone Date of Last Test"] ? this.dataList[0]["Parathyroid Hormone Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_parathyroid_result_of_last_test": new FormControl({value:this.dataList[0]["Parathyroid Hormone Results of the last test"] ? this.dataList[0]["Parathyroid Hormone Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_count_result_normal": new FormControl({value:this.dataList[0]["WBC Count Result Normal?"] ? this.dataList[0]["WBC Count Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_count_date_of_recent_test": new FormControl({value:this.dataList[0]["WBC Count Date of Recent Test"] ? this.dataList[0]["WBC Count Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_count_result_of_recent_test": new FormControl({value:this.dataList[0]["WBC Count Result of Recent Test"] ? this.dataList[0]["WBC Count Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_count_date_of_last_test": new FormControl({value:this.dataList[0]["WBC Count Date of Last Test"] ? this.dataList[0]["WBC Count Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_count_result_of_last_test": new FormControl({value:this.dataList[0]["WBC Count Results of the last test"] ? this.dataList[0]["WBC Count Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_diffcount_result_normal": new FormControl({value:this.dataList[0]["WBC Differential Result Normal?"] ? this.dataList[0]["WBC Differential Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_diffcount_date_of_recent_test": new FormControl({value:this.dataList[0]["WBC Differential Date of Recent Test"] ? this.dataList[0]["WBC Differential Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_diffcount_result_of_recent_test": new FormControl({value:this.dataList[0]["WBC Differential Result of Recent Test"] ? this.dataList[0]["WBC Differential Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_diffcount_date_of_last_test": new FormControl({value:this.dataList[0]["WBC Differential Date of Last Test"] ? this.dataList[0]["WBC Differential Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_wbc_diffcount_result_of_last_test": new FormControl({value:this.dataList[0]["WBC Differential Results of the last test"] ? this.dataList[0]["WBC Differential Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rbc_count_result_normal": new FormControl({value:this.dataList[0]["RBC Count Result Normal?"] ? this.dataList[0]["RBC Count Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rbc_count_date_of_recent_test": new FormControl({value:this.dataList[0]["RBC Count Date of Recent Test"] ? this.dataList[0]["RBC Count Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rbc_count_result_of_recent_test": new FormControl({value:this.dataList[0]["RBC Count Result of Recent Test"] ? this.dataList[0]["RBC Count Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rbc_count_date_of_last_test": new FormControl({value:this.dataList[0]["RBC Count Date of Last Test"] ? this.dataList[0]["RBC Count Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rbc_count_result_of_last_test": new FormControl({value:this.dataList[0]["RBC Count Results of the last test"] ? this.dataList[0]["RBC Count Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haemoglobin_count_result_normal": new FormControl({value:this.dataList[0]["Haemoglobin Result Normal?"] ? this.dataList[0]["Haemoglobin Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haemoglobin_count_date_of_recent_test": new FormControl({value:this.dataList[0]["Haemoglobin Date of Recent Test"] ? this.dataList[0]["Haemoglobin Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haemoglobin_count_result_of_recent_test": new FormControl({value:this.dataList[0]["Haemoglobin Result of Recent Test"] ? this.dataList[0]["Haemoglobin Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haemoglobin_count_date_of_last_test": new FormControl({value:this.dataList[0]["Haemoglobin Date of Last Test"] ? this.dataList[0]["Haemoglobin Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haemoglobin_count_result_of_last_test": new FormControl({value:this.dataList[0]["Haemoglobin Results of the last test"] ? this.dataList[0]["Haemoglobin Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haematocrit_count_result_normal": new FormControl({value:this.dataList[0]["Haematocrit Result Normal?"] ? this.dataList[0]["Haematocrit Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haematocrit_count_date_of_recent_test": new FormControl({value:this.dataList[0]["Haematocrit Date of Recent Test"] ? this.dataList[0]["Haematocrit Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haematocrit_count_result_of_recent_test": new FormControl({value:this.dataList[0]["Haematocrit Result of Recent Test"] ? this.dataList[0]["Haematocrit Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haematocrit_count_date_of_last_test": new FormControl({value:this.dataList[0]["Haematocrit Date of Last Test"] ? this.dataList[0]["Haematocrit Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_haematocrit_count_result_of_last_test": new FormControl({value:this.dataList[0]["Haematocrit Results of the last test"] ? this.dataList[0]["Haematocrit Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ferritin_count_result_normal": new FormControl({value:this.dataList[0]["Ferritin Result Normal?"] ? this.dataList[0]["Ferritin Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ferritin_count_date_of_recent_test": new FormControl({value:this.dataList[0]["Ferritin Date of Recent Test"] ? this.dataList[0]["Ferritin Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ferritin_count_result_of_recent_test": new FormControl({value:this.dataList[0]["Ferritin Result of Recent Test"] ? this.dataList[0]["Ferritin Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ferritin_count_date_of_last_test": new FormControl({value:this.dataList[0]["Ferritin Date of Last Test"] ? this.dataList[0]["Ferritin Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_ferritin_count_result_of_last_test": new FormControl({value:this.dataList[0]["Ferritin Results of the last test"] ? this.dataList[0]["Ferritin Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rdw_count_result_normal": new FormControl({value:this.dataList[0]["RDW Count Result Normal?"] ? this.dataList[0]["RDW Count Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rdw_count_date_of_recent_test": new FormControl({value:this.dataList[0]["RDW Count Date of Recent Test"] ? this.dataList[0]["RDW Count Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rdw_count_result_of_recent_test": new FormControl({value:this.dataList[0]["RDW Count Result of Recent Test"] ? this.dataList[0]["RDW Count Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rdw_count_date_of_last_test": new FormControl({value:this.dataList[0]["RDW Count Date of Last Test"] ? this.dataList[0]["RDW Count Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_rdw_count_result_of_last_test": new FormControl({value:this.dataList[0]["RDW Count Results of the last test"] ? this.dataList[0]["RDW Count Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mcv_result_normal": new FormControl({value:this.dataList[0]["MCV Result Normal?"] ? this.dataList[0]["MCV Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mcv_date_of_recent_test": new FormControl({value:this.dataList[0]["MCV Date of Recent Test"] ? this.dataList[0]["MCV Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mcv_result_of_recent_test": new FormControl({value:this.dataList[0]["MCV Result of Recent Test"] ? this.dataList[0]["MCV Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mcv_date_of_last_test": new FormControl({value:this.dataList[0]["MCV Date of Last Test"] ? this.dataList[0]["MCV Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mcv_result_of_last_test": new FormControl({value:this.dataList[0]["MCV Results of the last test"] ? this.dataList[0]["MCV Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mch_result_normal": new FormControl({value:this.dataList[0]["MCH Result Normal?"] ? this.dataList[0]["MCH Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mch_date_of_recent_test": new FormControl({value:this.dataList[0]["MCH Date of Recent Test"] ? this.dataList[0]["MCH Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mch_result_of_recent_test": new FormControl({value:this.dataList[0]["MCH Result of Recent Test"] ? this.dataList[0]["MCH Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mch_date_of_last_test": new FormControl({value:this.dataList[0]["MCH Date of Last Test"] ? this.dataList[0]["MCH Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mch_result_of_last_test": new FormControl({value:this.dataList[0]["MCH Results of the last test"] ? this.dataList[0]["MCH Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mchc_result_normal": new FormControl({value:this.dataList[0]["MCHC Result Normal?"] ? this.dataList[0]["MCHC Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mchc_date_of_recent_test": new FormControl({value:this.dataList[0]["MCHC Date of Recent Test"] ? this.dataList[0]["MCHC Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mchc_result_of_recent_test": new FormControl({value:this.dataList[0]["MCHC Result of Recent Test"] ? this.dataList[0]["MCHC Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mchc_date_of_last_test": new FormControl({value:this.dataList[0]["MCHC Date of Last Test"] ? this.dataList[0]["MCHC Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mchc_result_of_last_test": new FormControl({value:this.dataList[0]["MCHC Results of the last test"] ? this.dataList[0]["MCHC Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_reticulocyte_result_normal": new FormControl({value:this.dataList[0]["Reticulocyte Result Normal?"] ? this.dataList[0]["Reticulocyte Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_reticulocyte_date_of_recent_test": new FormControl({value:this.dataList[0]["Date of Recent Test"] ? this.dataList[0]["Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_reticulocyte_result_of_recent_test": new FormControl({value:this.dataList[0]["Reticulocyte Result of Recent Test"] ? this.dataList[0]["Reticulocyte Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_reticulocyte_date_of_last_test": new FormControl({value:this.dataList[0]["Reticulocyte Date of Last Test"] ? this.dataList[0]["Reticulocyte Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_reticulocyte_result_of_last_test": new FormControl({value:this.dataList[0]["Reticulocyte Results of the last test"] ? this.dataList[0]["Reticulocyte Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_platelet_result_normal": new FormControl({value:this.dataList[0]["Platelet Result Normal?"] ? this.dataList[0]["Platelet Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_platelet_date_of_recent_test": new FormControl({value:this.dataList[0]["Platelet Date of Recent Test"] ? this.dataList[0]["Platelet Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_platelet_result_of_recent_test": new FormControl({value:this.dataList[0]["Platelet Result of Recent Test"] ? this.dataList[0]["Platelet Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_platelet_date_of_last_test": new FormControl({value:this.dataList[0]["Platelet Date of Last Test"] ? this.dataList[0]["Platelet Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_platelet_result_of_last_test": new FormControl({value:this.dataList[0]["Platelet Results of the last test"] ? this.dataList[0]["Platelet Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mpvplatelet_result_normal": new FormControl({value:this.dataList[0]["MPV Result Normal?"] ? this.dataList[0]["MPV Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mpvplatelet_date_of_recent_test": new FormControl({value:this.dataList[0]["MPV Date of Recent Test"] ? this.dataList[0]["MPV Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mpvplatelet_result_of_recent_test": new FormControl({value:this.dataList[0]["MPV Result of Recent Test"] ? this.dataList[0]["MPV Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mpvplatelet_date_of_last_test": new FormControl({value:this.dataList[0]["MPV Date of Last Test"] ? this.dataList[0]["MPV Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_mpvplatelet_result_of_last_test": new FormControl({value:this.dataList[0]["MPV Results of the last test"] ? this.dataList[0]["MPV Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmacroscopic_result_normal": new FormControl({value:this.dataList[0]["UTS Macroscopic Result"] ? this.dataList[0]["UTS Macroscopic Result"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmacroscopic_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Macroscopic Recent Date"] ? this.dataList[0]["UTS Macroscopic Recent Date"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmacroscopic_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Macroscopic Recent Result"] ? this.dataList[0]["UTS Macroscopic Recent Result"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmacroscopic_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Macroscopic Last Date"] ? this.dataList[0]["UTS Macroscopic Last Date"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmacroscopic_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Macroscopic Last Result"] ? this.dataList[0]["UTS Macroscopic Last Result"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsph_result_normal": new FormControl({value:this.dataList[0]["UTSpH Result Normal?"] ? this.dataList[0]["UTSpH Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsph_date_of_recent_test": new FormControl({value:this.dataList[0]["UTSpH Date of Recent Test"] ? this.dataList[0]["UTSpH Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsph_result_of_recent_test": new FormControl({value:this.dataList[0]["UTSpH Result of Recent Test"] ? this.dataList[0]["UTSpH Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsph_date_of_last_test": new FormControl({value:this.dataList[0]["Date of Last Test"] ? this.dataList[0]["Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsph_result_of_last_test": new FormControl({value:this.dataList[0]["UTSpH Results of the last test"] ? this.dataList[0]["UTSpH Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsglucose_result_normal": new FormControl({value:this.dataList[0]["UTS Glucose Result Normal?"] ? this.dataList[0]["UTS Glucose Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsglucose_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Glucose Date of Recent Test"] ? this.dataList[0]["UTS Glucose Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsglucose_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Glucose Result of Recent Test"] ? this.dataList[0]["UTS Glucose Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsglucose_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Glucose Date of Last Test"] ? this.dataList[0]["UTS Glucose Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsglucose_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Glucose Results of the last test"] ? this.dataList[0]["UTS Glucose Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsgravity_result_normal": new FormControl({value:this.dataList[0]["UTS Gravity Result Normal?"] ? this.dataList[0]["UTS Gravity Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsgravity_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Gravity Date of Recent Test"] ? this.dataList[0]["UTS Gravity Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsgravity_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Gravity Result of Recent Test"] ? this.dataList[0]["UTS Gravity Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsgravity_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Gravity Date of Last Test"] ? this.dataList[0]["UTS Gravity Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsgravity_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Gravity Results of the last test"] ? this.dataList[0]["UTS Gravity Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsnitrite_result_normal": new FormControl({value:this.dataList[0]["UTS Nitrate Result Normal?"] ? this.dataList[0]["UTS Nitrate Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsnitrite_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Nitrate Date of Recent Test"] ? this.dataList[0]["UTS Nitrate Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsnitrite_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Nitrate Result of Recent Test"] ? this.dataList[0]["UTS Nitrate Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsnitrite_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Nitrate Date of Last Test"] ? this.dataList[0]["UTS Nitrate Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsnitrite_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Nitrate Results of the last test"] ? this.dataList[0]["UTS Nitrate Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsleukocyte_result_normal": new FormControl({value:this.dataList[0]["UTS Leukocyte Result Normal?"] ? this.dataList[0]["UTS Leukocyte Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsleukocyte_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Leukocyte Date of Recent Test"] ? this.dataList[0]["UTS Leukocyte Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsleukocyte_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Leukocyte Result of Recent Test"] ? this.dataList[0]["UTS Leukocyte Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsleukocyte_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Leukocyte Date of Last Test"] ? this.dataList[0]["UTS Leukocyte Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsleukocyte_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Leukocyte Results of the last test"] ? this.dataList[0]["UTS Leukocyte Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_cells_result_normal": new FormControl({value:this.dataList[0]["UTS Microscopy Cell Result Normal?"] ? this.dataList[0]["UTS Microscopy Cell Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_cells_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy Cell Date of Recent Test"] ? this.dataList[0]["UTS Microscopy Cell Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_cells_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy Cell Result of Recent Test"] ? this.dataList[0]["UTS Microscopy Cell Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_cells_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy Cell Date of Last Test"] ? this.dataList[0]["UTS Microscopy Cell Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_cells_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy Cell Results of the last test"] ? this.dataList[0]["UTS Microscopy Cell Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_casts_result_normal": new FormControl({value:this.dataList[0]["UTS Microscopy CASTS Result Normal?"] ? this.dataList[0]["UTS Microscopy CASTS Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_casts_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy CASTS Date of Recent Test"] ? this.dataList[0]["UTS Microscopy CASTS Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_casts_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy CASTS Result of Recent Test"] ? this.dataList[0]["UTS Microscopy CASTS Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_casts_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy CASTS Date of Last Test"] ? this.dataList[0]["UTS Microscopy CASTS Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_casts_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy CASTS Results of the last test"] ? this.dataList[0]["UTS Microscopy CASTS Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_crystals_result_normal": new FormControl({value:this.dataList[0]["UTS Microscopy Crystals Result Normal?"] ? this.dataList[0]["UTS Microscopy Crystals Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_crystals_date_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy Crystals Date of Recent Test"] ? this.dataList[0]["UTS Microscopy Crystals Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_crystals_result_of_recent_test": new FormControl({value:this.dataList[0]["UTS Microscopy Crystals Result of Recent Test"] ? this.dataList[0]["UTS Microscopy Crystals Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_crystals_date_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy Crystals Date of Last Test"] ? this.dataList[0]["UTS Microscopy Crystals Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_utsmicroscopy_crystals_result_of_last_test": new FormControl({value:this.dataList[0]["UTS Microscopy Crystals Results of the last test"] ? this.dataList[0]["UTS Microscopy Crystals Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_other_other": new FormControl({value:this.dataList[0]["OA Other"] ? this.dataList[0]["OA Other"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_other_pramlintide": new FormControl({value:this.dataList[0]["Other Pramlintide"] ? this.dataList[0]["Other Pramlintide"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_other": new FormControl({value:this.dataList[0]["OA Other Dose"]  === ''? false : this.dataList[0]["OA Other Dose"] === 'Yes'? true : false,disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_statins_dose": new FormControl({value:this.dataList[0]["Anti Dyslipidemia Statins Dose"] ? this.dataList[0]["Anti Dyslipidemia Statins Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_other_dose": new FormControl({value:this.dataList[0]["Anti Dyslipidemia Other Dose"] ? this.dataList[0]["Anti Dyslipidemia Other Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_thiazolidinediones_dose": new FormControl({value:this.dataList[0]["Agents Thiazolidinediones Dose"] ? this.dataList[0]["Agents Thiazolidinediones Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_sulphonyureas_dose": new FormControl({value:this.dataList[0]["SUs Dose"] ? this.dataList[0]["SUs Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fbg_date_of_recent_test": new FormControl({value:this.dataList[0]["FBG Date of Recent Test"] ? this.dataList[0]["FBG Date of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fbg_result_of_recent_test": new FormControl({value:this.dataList[0]["FBG Result of Recent Test"] ? this.dataList[0]["FBG Result of Recent Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fbg_date_of_last_test": new FormControl({value:this.dataList[0]["FBG Date of Last Test"] ? this.dataList[0]["FBG Date of Last Test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fbg_result_of_last_test": new FormControl({value:this.dataList[0]["FBG Results of the last test"] ? this.dataList[0]["FBG Results of the last test"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "bio_fbg_result_normal": new FormControl({value:this.dataList[0]["Is FBG Result Normal?"] ? this.dataList[0]["Is FBG Result Normal?"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_ace_inhibitors_dose": new FormControl({value:this.dataList[0]["Ace Inhibitors Dose"] ? this.dataList[0]["Ace Inhibitors Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "oral_agents_other_dose": new FormControl({value:this.dataList[0]["Others Agents Dose"] ? this.dataList[0]["Others Agents Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_other_dose": new FormControl({value:this.dataList[0]["Hypertensive Others Dose"] ? this.dataList[0]["Hypertensive Others Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_cachannel_blockers_dose": new FormControl({value:this.dataList[0]["Cachannel Blocker Dose"] ? this.dataList[0]["Cachannel Blocker Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_diuretics_dose": new FormControl({value:this.dataList[0]["Diuretics Dose"] ? this.dataList[0]["Diuretics Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_beta_blockers_dose": new FormControl({value:this.dataList[0]["Beta Blocker Dose"] ? this.dataList[0]["Beta Blocker Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_hypertensive_arbs_dose": new FormControl({value:this.dataList[0]["ARBS Dose"] ? this.dataList[0]["ARBS Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
      "anti_dyslipidemia_fibrates_dose": new FormControl({value:this.dataList[0]["Fibrates Dose"] ? this.dataList[0]["Fibrates Dose"] : '',disabled: this.disableInput },[Validators.maxLength(200)]),
        
});
 
      this.getFormAttributeValues();
  }
  
  createForm(){
    this.form = this.eformFB.group({
     "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
     "file": new FormControl({value: '', disabled: this.disableInput}),
     "removableexcelfile": new FormControl({value: '', disabled: this.disableInput}),
    //common
       "sample": new FormControl({value: '', disabled: this.disableInputs}, [Validators.required]),
    "projecttitle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
   "principalinvestigator": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
   "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
      "collected_by": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "collected_by_last_name": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
        "collected_date": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
       "per_firstname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "per_middlename": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "per_lastname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "gender": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "emiratesid": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required]),
     "nationality": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "dob": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "placeofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
    "age": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]), 
    "medical_reference_number": new FormControl({ value: '', disabled: this.disableInputs}),
    "anti_hypertensive_ace_inhibitors": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_hypertensive_arbs": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_hypertensive_beta_blockers": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_hypertensive_diuretics": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_hypertensive_cachannel_blockers": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_hypertensive_other": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_dyslipidemia_statins": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_dyslipidemia_fibrates": new  FormControl( {value:'', disabled: this.disableInput}),
"anti_dyslipidemia_other": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_biguanides": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_sulphonyureas": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_thiazolidinediones": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_meglitinides": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_alpha_glucosidase_inhibitors": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_dipeptidyl": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_other": new  FormControl( {value:'', disabled: this.disableInput}),
"oral_agents_incretin": new  FormControl( {value:'', disabled: this.disableInput}),
"injections_insulin": new  FormControl( {value:'', disabled: this.disableInput}),
"supplements_vitamind3": new  FormControl( {value:'', disabled: this.disableInput}),
"antidepressants_prozac": new  FormControl( {value:'', disabled: this.disableInput}),
  "anti_hypertensive_ace_inhibitors_perindopril": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_ace_inhibitors_captopril": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_ace_inhibitors_enalapril": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_ace_inhibitors_lisinopril": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_arbs_losartan": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_arbs_valsartan": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_arbs_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_beta_blockers_atenolol": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_beta_blockers_bisoprolol": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_beta_blockers_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_diuretics_indapamide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_diuretics_hydrochlorothiazide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_diuretics_frusemide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_diuretics_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_cachannel_blockers_amlodipine": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_cachannel_blockers_nifedipine": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_cachannel_blockers_verapamil": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_cachannel_blockers_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_methyldopa": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_other_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_statins_simvastatin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_statins_atorvastatin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_statins_rosuvastatin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_statins_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_statins_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_other_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_fibrates_gemfibrozil": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_fibrates_fenofibrate": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_fibrates_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_other_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_biguanides_metformin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_glibenclamide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_glimepiride": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_glipizide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_gliclazidemr": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_glipizide1": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_glimepride": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyuras_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sulphonyureas_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_thiazolidinediones_pioglitazone": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_thiazolidinediones_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
    "oral_agents_thiazolidinediones_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_meglitinides_nateglinide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_meglitinides_repaglinide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_meglitinides_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_dipeptidyl_sitagliptin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_dipeptidyl_vildagliptin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_dipeptidyl_saxagliptin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_dipeptidyl_linagliptin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_dipeptidyl_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_incretin_exenatide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_incretin_liraglutide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_incretin_exenatide_weekly": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_incretin_Other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_alpha_glucosidase_inhibitors_acarbose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_alpha_glucosidase_inhibitors_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sglt2": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sglt2_canagliflozin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sglt2_dapagliflozin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sglt2_empagliflozin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_sglt2_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_amylin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_amylin_pramlintide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_pramlintide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_other_pramlintide": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_other_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_amylin_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_lispro": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_aspart": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_glulisine": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_regular": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_nph": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_detemir": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_glargine": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "injections_insulin_combination": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "supplements_others": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "supplements_others_doze": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "supplements_erythropoietin": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "supplements_erythropoietin_others": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "antidepressants_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "antianxiety_diazepam": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "antianxiety_alprazolam": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "antianxiety_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "othermedication_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "traditional_chinese": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "traditional_chinese_specify": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "antidiabetic_medications_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_ace_inhibitors_other": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_ace_inhibitors_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "oral_agents_other_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_other_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_cachannel_blockers_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_diuretics_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_beta_blockers_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_hypertensive_arbs_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
     "anti_dyslipidemia_fibrates_dose": new FormControl({value: '',disabled: this.disableInput },[Validators.maxLength(200)]),
        
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
     this.getFormAttributeValues();
   }

  disablecreateForm(){
      this.form = this.disableeformFB.group({
       "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
       "file": new FormControl({value: '', disabled: this.disableInputs}),
       "removableexcelfile": new FormControl({value: '', disabled: this.disableInputs}),
      //common
         "sample": new FormControl({value: '', disabled: this.disableInputs}, [Validators.required]),
      "projecttitle": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "principalinvestigator": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
     "collection_point": new FormControl({ value: '',disabled: this.disableInputs },[Validators.maxLength(200)] ),
        "collected_by": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "collected_by_last_name": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
          "collected_date": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
         "per_firstname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_middlename": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "per_lastname": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "gender": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "emiratesid": new FormControl({ value: '', disabled: this.disableInputs },[Validators.required]),
       "nationality": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "dob": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "placeofbirth": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]),
      "age": new FormControl({ value: '', disabled: this.disableInputs },[Validators.maxLength(200)]), 
      "medical_reference_number": new FormControl({ value: '', disabled: this.disableInputs}),
      "anti_hypertensive_ace_inhibitors": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_hypertensive_arbs": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_hypertensive_beta_blockers": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_hypertensive_diuretics": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_hypertensive_cachannel_blockers": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_hypertensive_other": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_dyslipidemia_statins": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_dyslipidemia_fibrates": new  FormControl( {value:'', disabled: this.disableInputs}),
"anti_dyslipidemia_other": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_biguanides": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_sulphonyureas": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_thiazolidinediones": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_meglitinides": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_alpha_glucosidase_inhibitors": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_dipeptidyl": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_other": new  FormControl( {value:'', disabled: this.disableInputs}),
"oral_agents_incretin": new  FormControl( {value:'', disabled: this.disableInputs}),
"injections_insulin": new  FormControl( {value:'', disabled: this.disableInputs}),
"supplements_vitamind3": new  FormControl( {value:'', disabled: this.disableInputs}),
"antidepressants_prozac": new  FormControl( {value:'', disabled: this.disableInputs}),
    "anti_hypertensive_ace_inhibitors_perindopril": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_ace_inhibitors_captopril": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_ace_inhibitors_enalapril": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_ace_inhibitors_lisinopril": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_ace_inhibitors_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_arbs_losartan": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_arbs_valsartan": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_arbs_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_beta_blockers_atenolol": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_beta_blockers_bisoprolol": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_beta_blockers_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_diuretics_indapamide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_diuretics_hydrochlorothiazide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_diuretics_frusemide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_diuretics_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_cachannel_blockers_amlodipine": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_cachannel_blockers_nifedipine": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_cachannel_blockers_verapamil": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_cachannel_blockers_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_methyldopa": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_hypertensive_other_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_statins_simvastatin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_statins_atorvastatin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_statins_rosuvastatin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_statins_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_statins_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_other_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_fibrates_gemfibrozil": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_fibrates_fenofibrate": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_fibrates_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "anti_dyslipidemia_other_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_biguanides_metformin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_glibenclamide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_glimepiride": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_glipizide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_gliclazidemr": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_glipizide1": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_glimepride": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyuras_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sulphonyureas_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_thiazolidinediones_pioglitazone": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_thiazolidinediones_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
      "oral_agents_thiazolidinediones_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_meglitinides_nateglinide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_meglitinides_repaglinide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_meglitinides_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_dipeptidyl_sitagliptin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_dipeptidyl_vildagliptin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_dipeptidyl_saxagliptin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_dipeptidyl_linagliptin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_dipeptidyl_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_incretin_exenatide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_incretin_liraglutide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_incretin_exenatide_weekly": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_incretin_Other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_alpha_glucosidase_inhibitors_acarbose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_alpha_glucosidase_inhibitors_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sglt2": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sglt2_canagliflozin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sglt2_dapagliflozin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sglt2_empagliflozin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_sglt2_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_amylin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_amylin_pramlintide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_pramlintide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_other_pramlintide": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_other_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "oral_agents_amylin_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_lispro": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_aspart": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_glulisine": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_regular": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_nph": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_detemir": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_glargine": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "injections_insulin_combination": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "supplements_others": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "supplements_others_doze": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "supplements_erythropoietin": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "supplements_erythropoietin_others": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "antidepressants_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "antianxiety_diazepam": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "antianxiety_alprazolam": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "antianxiety_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "othermedication_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "traditional_chinese": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "traditional_chinese_specify": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
       "antidiabetic_medications_other": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_ace_inhibitors_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"oral_agents_other_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_other_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_cachannel_blockers_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_diuretics_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_beta_blockers_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_hypertensive_arbs_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
"anti_dyslipidemia_fibrates_dose": new FormControl({value: '',disabled: this.disableInputs },[Validators.maxLength(200)]),
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
       this.getFormAttributeValues();
     }

  
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


	mailsubmit() {

		let data = [];
		data["Name"] = localStorage.getItem('username');
		data["Subject"] = "CIRA Questionnaire Form ID "+this.form.controls['savedFormID'].value;
		data["Message"] = "Dear Physician Team,\n "+"<br>"
    +"<br>"
   +" The participant has answered yes to one of the following Injection Insulin plans\n" +"<br>"
   +"<br>"
  +" ☐ Lispro Dose\n" +"<br>"
  +" ☐ Aspart Dose\n" +"<br>"
  +" ☐ Glulisine Dose\n"  +"<br>"
  +" ☐ Regular Dose\n" +"<br>"
  +" ☐ NPH Dose\n" +"<br>"                    
  +" ☐ Detemir Dose\n" +"<br>"                    
  +" ☐ Glargine Dose\n" +"<br>"                    
  +" ☐ Combination Dose\n" +"<br>"                    
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
   // console.log(data)

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
        message: 'Are you sure want to send a mail? Because you have selected Insulin.',
        buttonText: { 
        ok: 'Yes',
        cancel: 'No'
        }
      }
      });
    //   const snack = this._snackBar.open('Snack bar open before dialog');
    
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
            this.mailsubmit();
        const a = document.createElement('a');
        a.click();
        a.remove();
      }
      });
    
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  if(this.form.controls["injections_insulin"].value ){
    this.alertSurveyForm();
  }
  else{
    if(this.form.valid){
    if(!this.form.controls["anti_hypertensive_ace_inhibitors"].value)
    {
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_perindopril" : "" || ""});
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_captopril" : "" || ""});
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_enalapril" : "" || ""});
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_lisinopril" : "" || ""});
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_other" : "" || ""});
      this.form.patchValue({"anti_hypertensive_ace_inhibitors_dose" : "" || ""});        
    }
    if(!this.form.controls["anti_hypertensive_arbs"].value)
    {
      this.form.patchValue({"anti_hypertensive_arbs_losartan" : "" || ""});
      this.form.patchValue({"anti_hypertensive_arbs_valsartan" : "" || ""});
      this.form.patchValue({"anti_hypertensive_arbs_other" : "" || ""});
      this.form.patchValue({"anti_hypertensive_other_dose" : "" || ""});
      this.form.patchValue({"anti_hypertensive_arbs_dose" : "" || ""});
    }
    if(!this.form.controls["anti_hypertensive_beta_blockers"].value)
    {
      this.form.patchValue({"anti_hypertensive_beta_blockers_atenolol" : "" || ""});
      this.form.patchValue({"anti_hypertensive_beta_blockers_bisoprolol" : "" || ""});
      this.form.patchValue({"anti_hypertensive_beta_blockers_other" : "" || ""});
      this.form.patchValue({"anti_hypertensive_beta_blockers_dose" : "" || ""});
    }
    if(!this.form.controls["anti_hypertensive_diuretics"].value)
    {
      this.form.patchValue({"anti_hypertensive_diuretics_indapamide" : "" || ""});
      this.form.patchValue({"anti_hypertensive_diuretics_hydrochlorothiazide" : "" || ""});
      this.form.patchValue({"anti_hypertensive_diuretics_frusemide" : "" || ""});
      this.form.patchValue({"anti_hypertensive_diuretics_other" : "" || ""});
      this.form.patchValue({"anti_hypertensive_diuretics_dose" : "" || ""});
    }
    if(!this.form.controls["anti_hypertensive_cachannel_blockers"].value)
    {
      this.form.patchValue({"anti_hypertensive_cachannel_blockers_amlodipine" : "" || ""});
      this.form.patchValue({"anti_hypertensive_cachannel_blockers_nifedipine" : "" || ""});
      this.form.patchValue({"anti_hypertensive_cachannel_blockers_verapamil" : "" || ""});
      this.form.patchValue({"anti_hypertensive_cachannel_blockers_other" : "" || ""});
      this.form.patchValue({"anti_hypertensive_cachannel_blockers_dose" : "" || ""});
    }
    if(!this.form.controls["anti_hypertensive_other"].value)
    {
      this.form.patchValue({"anti_hypertensive_methyldopa" : "" || ""});
      this.form.patchValue({"anti_hypertensive_other_other" : "" || ""});
    }
    if(!this.form.controls["anti_dyslipidemia_statins"].value)
    {
      this.form.patchValue({"anti_dyslipidemia_statins_simvastatin" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_statins_atorvastatin" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_statins_rosuvastatin" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_statins_other" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_statins_dose" : "" || ""});
    }
    if(!this.form.controls["anti_dyslipidemia_fibrates"].value)
    {
      this.form.patchValue({"anti_dyslipidemia_fibrates_gemfibrozil" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_fibrates_fenofibrate" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_fibrates_other" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_fibrates_dose" : "" || ""});
    }
    if(!this.form.controls["anti_dyslipidemia_other"].value)
    {
      this.form.patchValue({"anti_dyslipidemia_other_other" : "" || ""});
      this.form.patchValue({"anti_dyslipidemia_other_dose" : "" || ""});
    }
    if(!this.form.controls["oral_agents_biguanides"].value)
    {
      this.form.patchValue({"oral_agents_biguanides_metformin" : "" || ""});
    }
    if(!this.form.controls["oral_agents_sulphonyureas"].value)
    {
      this.form.patchValue({"oral_agents_sulphonyureas_glibenclamide" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_glimepiride" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_glipizide" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_gliclazidemr" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_glipizide1" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_glimepride" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyuras_other" : "" || ""});
      this.form.patchValue({"oral_agents_sulphonyureas_dose" : "" || ""});
    }
    if(!this.form.controls["oral_agents_thiazolidinediones"].value)
    {
      this.form.patchValue({"oral_agents_thiazolidinediones_pioglitazone" : "" || ""});
      this.form.patchValue({"oral_agents_thiazolidinediones_other" : "" || ""});
      this.form.patchValue({"oral_agents_thiazolidinediones_dose" : "" || ""});
    }
    if(!this.form.controls["oral_agents_meglitinides"].value)
    {
      this.form.patchValue({"oral_agents_meglitinides_nateglinide" : "" || ""});
      this.form.patchValue({"oral_agents_meglitinides_repaglinide" : "" || ""});
    }
    if(!this.form.controls["oral_agents_alpha_glucosidase_inhibitors"].value)
    {
      this.form.patchValue({"oral_agents_alpha_glucosidase_inhibitors_acarbose" : "" || ""});
    }
    if(!this.form.controls["oral_agents_dipeptidyl"].value)
    {
      this.form.patchValue({"oral_agents_dipeptidyl_sitagliptin" : "" || ""});
      this.form.patchValue({"oral_agents_dipeptidyl_vildagliptin" : "" || ""});
      this.form.patchValue({"oral_agents_dipeptidyl_saxagliptin" : "" || ""});
      this.form.patchValue({"oral_agents_dipeptidyl_linagliptin" : "" || ""});
    }
    if(!this.form.controls["oral_agents_other"].value)
    {
      this.form.patchValue({"oral_agents_other_pramlintide" : "" || ""});
      this.form.patchValue({"oral_agents_other_other" : "" || ""});
      this.form.patchValue({"oral_agents_other_dose" : "" || ""});
    }
    if(!this.form.controls["oral_agents_incretin"].value)
    {
      this.form.patchValue({"oral_agents_incretin_exenatide" : "" || ""});
      this.form.patchValue({"oral_agents_incretin_liraglutide" : "" || ""});
      this.form.patchValue({"oral_agents_incretin_exenatide_weekly" : "" || ""});
    }
    if(!this.form.controls["injections_insulin"].value)
    {
      this.form.patchValue({"injections_insulin_lispro" : "" || ""});
      this.form.patchValue({"injections_insulin_aspart" : "" || ""});
      this.form.patchValue({"injections_insulin_glulisine" : "" || ""});
      this.form.patchValue({"injections_insulin_regular" : "" || ""});
      this.form.patchValue({"injections_insulin_nph" : "" || ""});
      this.form.patchValue({"injections_insulin_detemir" : "" || ""});
      this.form.patchValue({"injections_insulin_glargine" : "" || ""});
      this.form.patchValue({"injections_insulin_combination" : "" || ""});
    }
    if(!this.form.controls["supplements_vitamind3"].value)
    {
      this.form.patchValue({"supplements_others" : "" || ""});
    }
    if(!this.form.controls["antidepressants_prozac"].value)
    {
      this.form.patchValue({"antidepressants_other" : "" || ""});
    }
    if(!this.form.controls["antianxiety_diazepam"].value)
    {
      this.form.patchValue({"antianxiety_other" : "" || ""});
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
