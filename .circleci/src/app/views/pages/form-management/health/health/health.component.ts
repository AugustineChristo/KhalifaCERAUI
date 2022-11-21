
import { AfterViewInit, AfterViewChecked, Input } from '@angular/core';
// Angular
import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Material
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog,MatSnackBar } from '@angular/material';
// RXJS
import { debounceTime, distinctUntilChanged, tap, skip, take, delay } from 'rxjs/operators';
import { fromEvent, merge, Observable, of, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

import * as XLSX from 'xlsx';

import { SubheaderService } from '../../../../../core/_base/layout';
import {VitamindService} from "../../../../../core/services/vitamind.form.service";
import {SplashScreenService} from "../../../../../core/services/splash-screen-service";

import {ConfirmationDialog} from '../../confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'kt-health',
  templateUrl: './health.component.html'
})
export class HealthComponent implements OnInit {
  file:File;
  username: string;
  @Input() Columns : any = [];
  visible : boolean = false;
  loading$: boolean = true;
	dataSource: any = [];
  @Input('disableInput') disableInput:boolean;
  public dataList : any[];
  formAttributes:any;
  form:FormGroup;
  arrayBuffer:any;
  userRights: string;
  	displayedColumns = [ 'id', '1', '2','3','4', 'actions'];
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('sort1', { static: true }) sort: MatSort;
	//@ViewChild('MainBody') MainBody: ElementRef<HTMLElement>;
	// Filter fields
	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;
	lastQuery = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 14,
		totalRecords : 0
	};
	
	selection;
	private subscriptions: Subscription[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private _vService : VitamindService,
    private eformFB:FormBuilder,
	private router: Router,
		private _snackBar: MatSnackBar,
		private dialog: MatDialog,
		private subheaderService: SubheaderService,
		private splashService : SplashScreenService,
		private cdr: ChangeDetectorRef) { }
		// getTabRights(){
		// 	this.userRights=[];
		// 	//console.log('test',this.userRights)
		// 	this.loading$ =true;
		// this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
		// this.username = localStorage.getItem('username');
		// this._vService.getTabRights(this.username,14,0).subscribe((res : any[])=>{
		// 	this.loading$ =false;
		// 	this.splashService.splashScreen({isLoading : false, message : "" })
		// 	this.cdr.detectChanges();
		// 	this.userRights = res;
		// 	//console.log('test',this.userRights)
		// 	//this.searchInput.nativeElement.focus();
		// });
		// }
		fetchdataList(){
			this.dataSource = [];
			this.loading$ =true;
			this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
			this._vService.getFormAttributeExcel(14,4).subscribe((res : any[])=>{
				
				for (var j = 0; j < res.length; j++) {
				this.Columns.push(res[j].AttributeDisplayName);
			}
				console.log(this.dataList,this.Columns)
				this.loading$ =false;
				this.splashService.splashScreen({isLoading : false, message : "" })
				this.cdr.detectChanges();
				//this.searchInput.nativeElement.focus();
			});
		}
	fetchList(){
		this.dataSource = [];
		this.loading$ =true;
		this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
		this._vService.getList(this.lastQuery).subscribe((res : any[])=>{
			//console.log('result',res)
			if(res[0].result=== "")
		this.dataSource = [];
			else
			this.dataSource = res;
			this.loading$ =false;
			this.splashService.splashScreen({isLoading : false, message : "" })
			this.cdr.detectChanges();
			//this.searchInput.nativeElement.focus();
		});
	}
	getTotalCount(){
		this._vService.getTotalRecordsCount(14,this.lastQuery.filter).subscribe((res : any[])=>{
			if(res.length > 0)
			this.lastQuery.totalRecords = res[0]["totalrecords"];
		})
	}
	/**
	 * On Destroy
	 */
	ngOnDestroy() {
		this.subscriptions.forEach(el => el.unsubscribe());
	}

	/**
	 * Load forms list
	 */
	/**
	 * On init
	 */
	ngOnInit() {
		// this.getTabRights();
		// this.userRights=localStorage.getItem('userRights');
		//console.log('userRights',JSON.parse(localStorage.getItem('userRights')))
		this.userRights =JSON.parse(localStorage.getItem('userRights'));
		//console.log('userRights',this.userRights)
			this.fetchList();this.fetchdataList();
			this.sort.sortChange.subscribe((data) => {
			this.lastQuery.sortField = data.active == "1"? 1 : 0;
			this.lastQuery.sortOrder = data.direction == "asc" ? 0 : 1 ;
			
		})
		const searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
				debounceTime(150), // The form can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
				distinctUntilChanged(), // This operator will eliminate duplicate values
				tap(() => {
					//this.lastQuery.filter
					this.lastQuery.filter = this.searchInput.nativeElement.value;
					this.lastQuery.pageNumber = 0;
					this.getTotalCount();
					this.fetchList();
				})
				)
				.subscribe();

		this.getTotalCount();
		this.fetchList();
		this.createForm();
		this.subheaderService.setTitle('CIRA');
		this.subheaderService.showPrintButton(false);
		this.subheaderService.showSaveButton(true);
	}

	getPaginatorData(event)
	{

		this.lastQuery.pageSize = event.pageSize;
		this.lastQuery.pageNumber = event.pageIndex;
		this.fetchList();
	}
	incomingfileexcel(event) 
	{
    
		//   this.dataList = [];
		  this.file= event.target.files[0]; 

      if(!this.file.name.includes('.xlsx'))
      alert('Please Select Excel File')
      console.log(this.file)
	}
	createForm(){
		this.form = this.eformFB.group({
		 "savedFormID": new FormControl({ value: 0, disabled: this.disableInput }),
		 "file": new FormControl({value: '', disabled: this.disableInput}),
		 "removableexcelfile": new FormControl({value: '', disabled: this.disableInput}),
		});
 
		 this.getFormAttributeValues();
	 }
	 getFormAttributeValues() {
	   this._vService.getFormAttribute(14,4).subscribe((res)=> {
		 this.formAttributes = res;
	   })
	 }
  
	 Upload(){

		

		this.splashService.splashScreen({isLoading : true, message : "Uploading" })

		let _result = [];           
		 for (let i = 0; i < this.dataList.length; i++) {
// 			const dateString = this.dataList[i].SAMPLINGDATE;
// 			if(this.dataList[i].STARTDATECOLLECTION !== undefined || this.dataList[i].STARTDATECOLLECTION!=="")
// {
// 	const startdateString = this.dataList[i].STARTDATECOLLECTION?this.dataList[i].STARTDATECOLLECTION:'';
// 	const SD = new Date(startdateString); 
// 	 Smonth=SD.getMonth() + 1 ; 
// 	 Sdate=SD.getDate(); 
// 	 Startdate = Sdate + '/'+Smonth +'/'+ SD.getFullYear();
// }
// 			if(this.dataList[i].ENDDATECOLLECTION !== undefined || this.dataList[i].ENDDATECOLLECTION==="")
// {
// 	const enddateString = this.dataList[i].ENDDATECOLLECTION?this.dataList[i].ENDDATECOLLECTION:'';
// 	const ED = new Date(enddateString); 
// 	 Emonth=ED.getMonth() + 1 ; 
// 	 Edate=ED.getDate(); 
// 	 Enddate = Edate + '/'+Emonth+'/' + ED.getFullYear();
// }
// 	//	console.log(dateString)
// 			if(this.dataList[i].STARTDATECOLLECTION !== undefined || this.dataList[i].STARTDATECOLLECTION!=="")
// {
// 			const D = new Date(dateString); 
// 			month=D.getMonth() + 1 ; 
// 			 date=D.getDate(); 
// 			Sampledate = date +'/'+month + '/'+D.getFullYear();
// 		}
               _result.push(
				   {
"sample":this.dataList[i]["Sample ID"] ? this.dataList[i]["Sample ID"] : '',
"anti_hypertensive_ace_inhibitors":this.dataList[i]["ACE-inhibitors"] === ''? false : this.dataList[i]["ACE-inhibitors"] === 'Yes'? true:false,
"anti_hypertensive_ace_inhibitors_perindopril":this.dataList[i]["Perindopril Dose"] ? this.dataList[i]["Perindopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_captopril":this.dataList[i]["Captopril Dose"] ? this.dataList[i]["Captopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_enalapril":this.dataList[i]["Enalapril Dose"] ? this.dataList[i]["Enalapril Dose"] : '',
"anti_hypertensive_ace_inhibitors_lisinopril":this.dataList[i]["Lisinopril Dose"] ? this.dataList[i]["Lisinopril Dose"] : '',
"anti_hypertensive_ace_inhibitors_other":this.dataList[i]["ACE Others Dose"] ? this.dataList[i]["ACE Others Dose"] : '',
"anti_hypertensive_arbs":this.dataList[i]["ARBs"] === ''? false :  this.dataList[i]["ARBs"] === 'Yes'? true : false,
"anti_hypertensive_arbs_losartan":this.dataList[i]["Losartan Dose"] ? this.dataList[i]["Losartan Dose"] : '',
"anti_hypertensive_arbs_valsartan":this.dataList[i]["Valsartan  Dose"] ? this.dataList[i]["Valsartan  Dose"] : '',
"anti_hypertensive_arbs_other":this.dataList[i]["ARBS Others Dose"] ? this.dataList[i]["ARBS Others Dose"] : '',
"anti_hypertensive_beta_blockers":this.dataList[i]["Beta-blockers"] === ''? false : this.dataList[i]["Beta-blockers"] === 'Yes'? true:false,
"anti_hypertensive_beta_blockers_atenolol":this.dataList[i]["Atenolol Dose"] ? this.dataList[i]["Atenolol Dose"] : '',
"anti_hypertensive_beta_blockers_bisoprolol":this.dataList[i]["Bisoprolol Dose"] ? this.dataList[i]["Bisoprolol Dose"] : '',
"anti_hypertensive_beta_blockers_other":this.dataList[i]["Beta Others Dose"] ? this.dataList[i]["Beta Others Dose"] : '',
"anti_hypertensive_diuretics":this.dataList[i]["Diuretics"] === ''? false :  this.dataList[i]["Diuretics"] === 'Yes'? true:false,
"anti_hypertensive_diuretics_indapamide":this.dataList[i]["Indapamide Dose"] ? this.dataList[i]["Indapamide Dose"] : '',
"anti_hypertensive_diuretics_hydrochlorothiazide":this.dataList[i]["Hydrochlorothiazide Dose"] ? this.dataList[i]["Hydrochlorothiazide Dose"] : '',
"anti_hypertensive_diuretics_frusemide":this.dataList[i]["Frusemide  Dose"] ? this.dataList[i]["Frusemide  Dose"] : '',
"anti_hypertensive_diuretics_other":this.dataList[i]["Diuretics Others Dose"] ? this.dataList[i]["Diuretics Others Dose"] : '',
"anti_hypertensive_cachannel_blockers":this.dataList[i]["CA Channel Blockers"] === ''? false :  this.dataList[i]["CA Channel Blockers"] === 'Yes'? true:false,
"anti_hypertensive_cachannel_blockers_amlodipine":this.dataList[i]["Amlodipine Dose"] ? this.dataList[i]["Amlodipine Dose"] : '',
"anti_hypertensive_cachannel_blockers_nifedipine":this.dataList[i]["Nifedipine Dose"] ? this.dataList[i]["Nifedipine Dose"] : '',
"anti_hypertensive_cachannel_blockers_verapamil":this.dataList[i]["Verapamil Dose"] ? this.dataList[i]["Verapamil Dose"] : '',
"anti_hypertensive_cachannel_blockers_other":this.dataList[i]["Cachannel  Other Dose"] ? this.dataList[i]["Cachannel  Other Dose"] : '',
"anti_hypertensive_other":this.dataList[i]["Others"] === ''? false :   this.dataList[i]["Others"] === 'Yes'? true : false ,
"anti_hypertensive_methyldopa":this.dataList[i]["Methyldopa Dose"] ? this.dataList[i]["Methyldopa Dose"]:'',
"anti_hypertensive_other_other":this.dataList[i]["Hypertensive Others"] ? this.dataList[i]["Hypertensive Others"]:'',
"anti_dyslipidemia_statins":this.dataList[i]["Statins"]  === ''? false : this.dataList[i]["Statins"]  === 'Yes'? true :false ,
"anti_dyslipidemia_statins_simvastatin":this.dataList[i]["Simvastatin Dose"] ? this.dataList[i]["Simvastatin Dose"] : '',
"anti_dyslipidemia_statins_atorvastatin":this.dataList[i]["Atorvastatin Dose"] ? this.dataList[i]["Atorvastatin Dose"] : '',
"anti_dyslipidemia_statins_rosuvastatin":this.dataList[i]["Rosuvastatin Dose"] ? this.dataList[i]["Rosuvastatin Dose"] : '',
"anti_dyslipidemia_statins_other":this.dataList[i]["Dyslipidemia  Statins Others Dose"] ? this.dataList[i]["Dyslipidemia  Statins Others Dose"] : '',
"anti_dyslipidemia_fibrates":this.dataList[i]["Fibrates"] === ''? false :  this.dataList[i]["Fibrates"]=== 'Yes'? true : false,
"anti_dyslipidemia_fibrates_other":this.dataList[i]["Anti Dyslipidemia Other"] ? this.dataList[i]["Anti Dyslipidemia Other"] : '',
"anti_dyslipidemia_fibrates_gemfibrozil":this.dataList[i]["Gemfibrozil Dose"] ? this.dataList[i]["Gemfibrozil Dose"] : '',
"anti_dyslipidemia_fibrates_fenofibrate":this.dataList[i]["Fenofibrate Dose"] ? this.dataList[i]["Fenofibrate Dose"] : '',
"anti_dyslipidemia_other":this.dataList[i]["Dyslipidemia Others"] === ''? false : this.dataList[i]["Dyslipidemia Others"]  === 'Yes'? true:false,
"anti_dyslipidemia_other_other":this.dataList[i]["Others  Dose"] ? this.dataList[i]["Others  Dose"] : '',
"oral_agents_biguanides":this.dataList[i]["Biguanides"] === ''? false : this.dataList[i]["Biguanides"] === 'Yes'? true : false,
"oral_agents_biguanides_metformin":this.dataList[i]["Metformin Dose"] ? this.dataList[i]["Metformin Dose"] : '',
"oral_agents_sulphonyureas":this.dataList[i]["SUs"] === ''? false : this.dataList[i]["SUs"] === 'Yes'? true : false,
"oral_agents_sulphonyureas_glibenclamide":this.dataList[i]["Glibenclamide Dose"] ? this.dataList[i]["Glibenclamide Dose"] : '',
"oral_agents_sulphonyureas_glimepiride":this.dataList[i]["Glimepiride Dose"] ? this.dataList[i]["Glimepiride Dose"] : '',
"oral_agents_sulphonyureas_glipizide":this.dataList[i]["Glipizide Dose"] ? this.dataList[i]["Glipizide Dose"] : '',
"oral_agents_sulphonyureas_gliclazidemr":this.dataList[i]["Gliclazide MR Dose"] ? this.dataList[i]["Gliclazide MR Dose"] : '',
"oral_agents_sulphonyureas_glipizide1":this.dataList[i]["Glipizide Dose1"] ? this.dataList[i]["Glipizide Dose1"] : '',
"oral_agents_sulphonyureas_glimepride":this.dataList[i]["Glimepride Dose"] ? this.dataList[i]["Glimepride Dose"] : '',
"oral_agents_sulphonyuras_other":this.dataList[i]["SUs Others"] ? this.dataList[i]["SUs Others"] : '',
"oral_agents_thiazolidinediones":this.dataList[i]["Thiazolidinediones"] === ''? false :  this.dataList[i]["Thiazolidinediones"]=== 'Yes'? true : false,
"oral_agents_thiazolidinediones_pioglitazone":this.dataList[i]["Pioglitazone Dose"] ? this.dataList[i]["Pioglitazone Dose"] : '',
"oral_agents_thiazolidinediones_other":this.dataList[i]["Thiazolidinediones Others Dose"] ? this.dataList[i]["Thiazolidinediones Others Dose"] : '',
"oral_agents_meglitinides":this.dataList[i]["Meglitinides"] === ''? false :  this.dataList[i]["Meglitinides"] === 'Yes'? true : false,
"oral_agents_meglitinides_nateglinide":this.dataList[i]["Nateglinide Dose"] ? this.dataList[i]["Nateglinide Dose"] : '',
"oral_agents_meglitinides_repaglinide":this.dataList[i]["Repaglinide Dose"] ? this.dataList[i]["Repaglinide Dose"] : '',
"oral_agents_dipeptidyl":this.dataList[i]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === ''? false :  this.dataList[i]["Dipeptidyl peptidase -IV inhibitors (DPP-IV)"] === 'Yes'? true : false ,
"oral_agents_dipeptidyl_sitagliptin":this.dataList[i]["Sitagliptin Dose"] ? this.dataList[i]["Sitagliptin Dose"] : '',
"oral_agents_dipeptidyl_vildagliptin":this.dataList[i]["Vildagliptin Dose"] ? this.dataList[i]["Vildagliptin Dose"] : '',
"oral_agents_dipeptidyl_saxagliptin":this.dataList[i]["Saxagliptin Dose"] ? this.dataList[i]["Saxagliptin Dose"] : '',
"oral_agents_dipeptidyl_linagliptin":this.dataList[i]["Linagliptin Dose"] ? this.dataList[i]["Linagliptin Dose"] : '',
"oral_agents_incretin":this.dataList[i]["Incretin mimetics (GLP-1 agonist)"] === ''? false :  this.dataList[i]["Incretin mimetics (GLP-1 agonist)"] === 'Yes'? true :false ,
"oral_agents_incretin_exenatide":this.dataList[i]["Exenatide Dose"] ? this.dataList[i]["Exenatide Dose"] : '',
"oral_agents_incretin_liraglutide":this.dataList[i]["Liraglutide Dose"] ? this.dataList[i]["Liraglutide Dose"] : '',
"oral_agents_incretin_exenatide_weekly":this.dataList[i]["Exenatide (weekly) Dose"] ? this.dataList[i]["Exenatide (weekly) Dose"] : '',
"oral_agents_alpha_glucosidase_inhibitors":this.dataList[i]["Alpha-glucosidase inhibitors"] === ''? false : this.dataList[i]["Alpha-glucosidase inhibitors"] === 'Yes'? true : false,
"oral_agents_alpha_glucosidase_inhibitors_acarbose":this.dataList[i]["Acarbose Dose"] ? this.dataList[i]["Acarbose Dose"] : '',
"injections_insulin":this.dataList[i]["Insulin"] === ''? false :  this.dataList[i]["Insulin"] === 'Yes'? false : false,
"injections_insulin_lispro":this.dataList[i]["Lispro Dose"] !== ''? '': '',
"injections_insulin_aspart":this.dataList[i]["Aspart Dose"] !== ''? '': '',
"injections_insulin_glulisine":this.dataList[i]["Glulisine Dose"] !== ''? '' : '',
"injections_insulin_regular":this.dataList[i]["Regular Dose"] !== ''? '' : '',
"injections_insulin_nph":this.dataList[i]["NPH Dose"] !== ''? '' : '',
"injections_insulin_detemir":this.dataList[i]["Detemir Dose"] !== ''? '': '',
"injections_insulin_glargine":this.dataList[i]["Glargine Dose"] !== ''? '': '',
"injections_insulin_combination":this.dataList[i]["Combination Dose"] !== ''? '' : '',
"injections_insulin_other":this.dataList[i]["Insulin Injections"] === ''? false :  this.dataList[i]["Insulin Injections"] === 'Yes'? true : false,
"supplements_vitamind3":this.dataList[i]["Vitamin D3"] === ''? false :  this.dataList[i]["Vitamin D3"] === 'Yes'? true : false ,
"supplements_others":this.dataList[i]["Others (including erythropoietin injections)"] ? this.dataList[i]["Others (including erythropoietin injections)"] : '',
"antidepressants_prozac":this.dataList[i]["Prozac"] === ''? false :  this.dataList[i]["Prozac"] === 'Yes'? true : false,
"antidepressants_other":this.dataList[i]["Anti-Depressants Others"] ? this.dataList[i]["Anti-Depressants Others"] : '',
"antianxiety_diazepam":this.dataList[i]["Diazepam Dose"] ? this.dataList[i]["Diazepam Dose"] : '',
"antianxiety_other":this.dataList[i]["Antianxiety Other"] ? this.dataList[i]["Antianxiety Other"] : '',
"othermedication_other":this.dataList[i]["Other Medication"] ? this.dataList[i]["Other Medication"] : '',
"traditional_chinese_specify":this.dataList[i]["Traditional Chinese Medicine"] ? this.dataList[i]["Traditional Chinese Medicine"] : '',
"bio_fastingglucose_result_normal":this.dataList[i]["Fasting Glucose Result"] ? this.dataList[i]["Fasting Glucose Result"] : '',
"bio_fastingglucose_date_of_recent_test":this.dataList[i]["FGL Date of Recent Test"] ? this.dataList[i]["FGL Date of Recent Test"] : '',
"bio_fastingglucose_result_of_recent_test":this.dataList[i]["FGL Result of Recent Test"] ? this.dataList[i]["FGL Result of Recent Test"] : '',
"bio_fastingglucose_date_of_last_test":this.dataList[i]["FGL Date of Last Test"] ? this.dataList[i]["FGL Date of Last Test"] : '',
"bio_fastingglucose_result_of_last_test":this.dataList[i]["FGL Results of the last test"] ? this.dataList[i]["FGL Results of the last test"] : '',
"bio_randomglucose_result_normal":this.dataList[i]["Is RGL Result Normal?"] ? this.dataList[i]["Is RGL Result Normal?"] : '',
"bio_randomglucose_date_of_recent_test":this.dataList[i]["RGL Date of Recent Test"] ? this.dataList[i]["RGL Date of Recent Test"] : '',
"bio_randomglucose_result_of_recent_test":this.dataList[i]["RGL Result of Recent Test"] ? this.dataList[i]["RGL Result of Recent Test"] : '',
"bio_randomglucose_date_of_last_test":this.dataList[i]["RGL Date of Last Test"] ? this.dataList[i]["RGL Date of Last Test"] : '',
"bio_randomglucose_result_of_last_test":this.dataList[i]["RGL Results of the last test"] ? this.dataList[i]["RGL Results of the last test"] : '',
"bio_ogtt_result_normal":this.dataList[i]["Is OGTT Result Normal?"] ? this.dataList[i]["Is OGTT Result Normal?"] : '',
"bio_ogtt_date_of_recent_test":this.dataList[i]["OGTT Date of Recent Test"] ? this.dataList[i]["OGTT Date of Recent Test"] : '',
"bio_ogtt_result_of_recent_test":this.dataList[i]["OGTT Result of Recent Test"] ? this.dataList[i]["OGTT Result of Recent Test"] : '',
"bio_ogtt_date_of_last_test":this.dataList[i]["OGTT Date of Last Test"] ? this.dataList[i]["OGTT Date of Last Test"] : '',
"bio_ogtt_result_of_last_test":this.dataList[i]["OGTT Results of the last test"] ? this.dataList[i]["OGTT Results of the last test"] : '',
"bio_fg2_result_normal":this.dataList[i]["Is FG2 Result Normal?"] ? this.dataList[i]["Is FG2 Result Normal?"] : '',
"bio_fg2_date_of_recent_test":this.dataList[i]["FG2 Date of Recent Test"] ? this.dataList[i]["FG2 Date of Recent Test"] : '',
"bio_fg2_result_of_recent_test":this.dataList[i]["FG2 Result of Recent Test"] ? this.dataList[i]["FG2 Result of Recent Test"] : '',
"bio_fg2_date_of_last_test":this.dataList[i]["FG2 Date of Last Test"] ? this.dataList[i]["FG2 Date of Last Test"] : '',
"bio_fg2_result_of_last_test":this.dataList[i]["FG2 Results of the last test"] ? this.dataList[i]["FG2 Results of the last test"] : '',
"bio_hba1c_result_normal":this.dataList[i]["Is HBA1C Result Normal?"] ? this.dataList[i]["Is HBA1C Result Normal?"] : '',
"bio_hba1c_date_of_recent_test":this.dataList[i]["HAB1C Date of Recent Test"] ? this.dataList[i]["HAB1C Date of Recent Test"] : '',
"bio_hba1c_result_of_recent_test":this.dataList[i]["HAB1C Result of Recent Test"] ? this.dataList[i]["HAB1C Result of Recent Test"] : '',
"bio_hba1c_date_of_last_test":this.dataList[i]["HAB1C Date of Last Test"] ? this.dataList[i]["HAB1C Date of Last Test"] : '',
"bio_hba1c_result_of_last_test":this.dataList[i]["HAB1C Results of the last test"] ? this.dataList[i]["HAB1C Results of the last test"] : '',
"bio_totalcholesterol_result_normal":this.dataList[i]["Total Cholesterol Result Normal?"] ? this.dataList[i]["Total Cholesterol Result Normal?"] : '',
"bio_totalcholesterol_date_of_recent_test":this.dataList[i]["Total Cholesterol Date of Recent Test"] ? this.dataList[i]["Total Cholesterol Date of Recent Test"] : '',
"bio_totalcholesterol_result_of_recent_test":this.dataList[i]["Total Cholesterol Result of Recent Test"] ? this.dataList[i]["Total Cholesterol Result of Recent Test"] : '',
"bio_totalcholesterol_date_of_last_test":this.dataList[i]["Total Cholesterol Date of Last Test"] ? this.dataList[i]["Total Cholesterol Date of Last Test"] : '',
"bio_totalcholesterol_result_of_last_test":this.dataList[i]["Total Cholesterol Results of the last test"] ? this.dataList[i]["Total Cholesterol Results of the last test"] : '',
"bio_triglyceride_result_normal":this.dataList[i]["Triglyceride Result Normal?"] ? this.dataList[i]["Triglyceride Result Normal?"] : '',
"bio_triglyceride_date_of_recent_test":this.dataList[i]["Triglyceride Date of Recent Test"] ? this.dataList[i]["Triglyceride Date of Recent Test"] : '',
"bio_triglyceride_result_of_recent_test":this.dataList[i]["Triglyceride Result of Recent Test"] ? this.dataList[i]["Triglyceride Result of Recent Test"] : '',
"bio_triglyceride_date_of_last_test":this.dataList[i]["Triglyceride Date of Last Test"] ? this.dataList[i]["Triglyceride Date of Last Test"] : '',
"bio_triglyceride_result_of_last_test":this.dataList[i]["Triglyceride Results of the last test"] ? this.dataList[i]["Triglyceride Results of the last test"] : '',
"bio_hdl_result_normal":this.dataList[i]["HDL Result Normal?"] ? this.dataList[i]["HDL Result Normal?"] : '',
"bio_hdl_date_of_recent_test":this.dataList[i]["HDL Date of Recent Test"] ? this.dataList[i]["HDL Date of Recent Test"] : '',
"bio_hdl_result_of_recent_test":this.dataList[i]["HDL Result of Recent Test"] ? this.dataList[i]["HDL Result of Recent Test"] : '',
"bio_hdl_date_of_last_test":this.dataList[i]["HDL Date of Last Test"] ? this.dataList[i]["HDL Date of Last Test"] : '',
"bio_hdl_result_of_last_test":this.dataList[i]["HDL Results of the last test"] ? this.dataList[i]["HDL Results of the last test"] : '',
"bio_ldl_result_normal":this.dataList[i]["LDL Result Normal?"] ? this.dataList[i]["LDL Result Normal?"] : '',
"bio_ldl_date_of_recent_test":this.dataList[i]["LDL Date of Recent Test"] ? this.dataList[i]["LDL Date of Recent Test"] : '',
"bio_ldl_result_of_recent_test":this.dataList[i]["LDL Result of Recent Test"] ? this.dataList[i]["LDL Result of Recent Test"] : '',
"bio_ldl_date_of_last_test":this.dataList[i]["LDL Date of Last Test"] ? this.dataList[i]["LDL Date of Last Test"] : '',
"bio_ldl_result_of_last_test":this.dataList[i]["LDL Results of the last test"] ? this.dataList[i]["LDL Results of the last test"] : '',
"bio_vitamindlevel_result_normal":this.dataList[i]["Vitamin-D-Level Result Normal?"] ? this.dataList[i]["Vitamin-D-Level Result Normal?"] : '',
"bio_vitamindlevel_date_of_recent_test":this.dataList[i]["Vitamin-D-Level Date of Recent Test"] ? this.dataList[i]["Vitamin-D-Level Date of Recent Test"] : '',
"bio_vitamindlevel_result_of_recent_test":this.dataList[i]["Vitamin-D-Level Result of Recent Test"] ? this.dataList[i]["Vitamin-D-Level Result of Recent Test"] : '',
"bio_vitamindlevel_date_of_last_test":this.dataList[i]["Vitamin-D-Level Date of Last Test"] ? this.dataList[i]["Vitamin-D-Level Date of Last Test"] : '',
"bio_vitamindlevel_result_of_last_test":this.dataList[i]["Vitamin-D-Level Results of the last test"] ? this.dataList[i]["Vitamin-D-Level Results of the last test"] : '',
"bio_microalbumin_result_normal":this.dataList[i]["Microalbumin Result Normal?"] ? this.dataList[i]["Microalbumin Result Normal?"] : '',
"bio_microalbumin_date_of_recent_test":this.dataList[i]["Microalbumin Date of Recent Test"] ? this.dataList[i]["Microalbumin Date of Recent Test"] : '',
"bio_microalbumin_result_of_recent_test":this.dataList[i]["Microalbumin Result of Recent Test"] ? this.dataList[i]["Microalbumin Result of Recent Test"] : '',
"bio_microalbumin_date_of_last_test":this.dataList[i]["Microalbumin Date of Last Test"] ? this.dataList[i]["Microalbumin Date of Last Test"] : '',
"bio_microalbumin_result_of_last_test":this.dataList[i]["Microalbumin Results of the last test"] ? this.dataList[i]["Microalbumin Results of the last test"] : '',
"bio_albuminuria_result_normal":this.dataList[i]["Albuminuria Result Normal?"] ? this.dataList[i]["Albuminuria Result Normal?"] : '',
"bio_albuminuria_date_of_recent_test":this.dataList[i]["Albuminuria Date of Recent Test"] ? this.dataList[i]["Albuminuria Date of Recent Test"] : '',
"bio_albuminuria_result_of_recent_test":this.dataList[i]["Albuminuria Result of Recent Test"] ? this.dataList[i]["Albuminuria Result of Recent Test"] : '',
"bio_albuminuria_date_of_last_test":this.dataList[i]["Albuminuria Date of Last Test"] ? this.dataList[i]["Albuminuria Date of Last Test"] : '',
"bio_albuminuria_result_of_last_test":this.dataList[i]["Albuminuria Results of the last test"] ? this.dataList[i]["Albuminuria Results of the last test"] : '',
"bio_albumincreatinine_result_normal":this.dataList[i]["Albumin/Creatinine Result Normal?"] ? this.dataList[i]["Albumin/Creatinine Result Normal?"] : '',
"bio_albumincreatinine_date_of_recent_test":this.dataList[i]["Albumin/Creatinine Date of Recent Test"] ? this.dataList[i]["Albumin/Creatinine Date of Recent Test"] : '',
"bio_albumincreatinine_result_of_recent_test":this.dataList[i]["Albumin/Creatinine Result of Recent Test"] ? this.dataList[i]["Albumin/Creatinine Result of Recent Test"] : '',
"bio_albumincreatinine_date_of_last_test":this.dataList[i]["Albumin/Creatinine Date of Last Test"] ? this.dataList[i]["Albumin/Creatinine Date of Last Test"] : '',
"bio_albumincreatinine_result_of_last_test":this.dataList[i]["Albumin/Creatinine Results of the last test"] ? this.dataList[i]["Albumin/Creatinine Results of the last test"] : '',
"bio_creatinine_result_normal":this.dataList[i]["Creatinine Result Normal?"] ? this.dataList[i]["Creatinine Result Normal?"] : '',
"bio_creatinine_date_of_recent_test":this.dataList[i]["Creatinine Date of Recent Test"] ? this.dataList[i]["Creatinine Date of Recent Test"] : '',
"bio_creatinine_result_of_recent_test":this.dataList[i]["Creatinine Result of Recent Test"] ? this.dataList[i]["Creatinine Result of Recent Test"] : '',
"bio_creatinine_date_of_last_test":this.dataList[i]["Creatinine Date of Last Test"] ? this.dataList[i]["Creatinine Date of Last Test"] : '',
"bio_creatinine_result_of_last_test":this.dataList[i]["Creatinine Results of the last test"] ? this.dataList[i]["Creatinine Results of the last test"] : '',
"bio_egfr_result_normal":this.dataList[i]["eGFR Result Normal?"] ? this.dataList[i]["eGFR Result Normal?"] : '',
"bio_egfr_date_of_recent_test":this.dataList[i]["eGFR Date of Recent Test"] ? this.dataList[i]["eGFR Date of Recent Test"] : '',
"bio_egfr_result_of_recent_test":this.dataList[i]["eGFR Result of Recent Test"] ? this.dataList[i]["eGFR Result of Recent Test"] : '',
"bio_egfr_date_of_last_test":this.dataList[i]["eGFR Date of Last Test"] ? this.dataList[i]["eGFR Date of Last Test"] : '',
"bio_egfr_result_of_last_test":this.dataList[i]["eGFR Results of the last test"] ? this.dataList[i]["eGFR Results of the last test"] : '',
"bio_sodium_result_normal":this.dataList[i]["Serum Sodium Result Normal?"] ? this.dataList[i]["Serum Sodium Result Normal?"] : '',
"bio_sodium_date_of_recent_test":this.dataList[i]["Serum Sodium Date of Recent Test"] ? this.dataList[i]["Serum Sodium Date of Recent Test"] : '',
"bio_sodium_result_of_recent_test":this.dataList[i]["Serum Sodium Result of Recent Test"] ? this.dataList[i]["Serum Sodium Result of Recent Test"] : '',
"bio_sodium_date_of_last_test":this.dataList[i]["Serum Sodium Date of Last Test"] ? this.dataList[i]["Serum Sodium Date of Last Test"] : '',
"bio_sodium_result_of_last_test":this.dataList[i]["Serum Sodium Results of the last test"] ? this.dataList[i]["Serum Sodium Results of the last test"] : '',
"bio_potassium_result_normal":this.dataList[i]["Serum Potassium Result Normal?"] ? this.dataList[i]["Serum Potassium Result Normal?"] : '',
"bio_potassium_date_of_recent_test":this.dataList[i]["Serum Potassium Date of Recent Test"] ? this.dataList[i]["Serum Potassium Date of Recent Test"] : '',
"bio_potassium_result_of_recent_test":this.dataList[i]["Serum Potassium Result of Recent Test"] ? this.dataList[i]["Serum Potassium Result of Recent Test"] : '',
"bio_potassium_date_of_last_test":this.dataList[i]["Serum Potassium Date of Last Test"] ? this.dataList[i]["Serum Potassium Date of Last Test"] : '',
"bio_potassium_result_of_last_test":this.dataList[i]["Serum Potassium Results of the last test"] ? this.dataList[i]["Serum Potassium Results of the last test"] : '',
"bio_calcium_result_normal":this.dataList[i]["Serum Calcium Result Normal?"] ? this.dataList[i]["Serum Calcium Result Normal?"] : '',
"bio_calcium_date_of_recent_test":this.dataList[i]["Serum Calcium Date of Recent Test"] ? this.dataList[i]["Serum Calcium Date of Recent Test"] : '',
"bio_calcium_result_of_recent_test":this.dataList[i]["Serum Calcium Result of Recent Test"] ? this.dataList[i]["Serum Calcium Result of Recent Test"] : '',
"bio_calcium_date_of_last_test":this.dataList[i]["Serum Calcium Date of Last Test"] ? this.dataList[i]["Serum Calcium Date of Last Test"] : '',
"bio_calcium_result_of_last_test":this.dataList[i]["Serum Calcium Results of the last test"] ? this.dataList[i]["Serum Calcium Results of the last test"] : '',
"bio_magnesium_result_normal":this.dataList[i]["Serum Magnesium Result Normal?"] ? this.dataList[i]["Serum Magnesium Result Normal?"] : '',
"bio_magnesium_date_of_recent_test":this.dataList[i]["Serum Magnesium Date of Recent Test"] ? this.dataList[i]["Serum Magnesium Date of Recent Test"] : '',
"bio_magnesium_result_of_recent_test":this.dataList[i]["Serum Magnesium Result of Recent Test"] ? this.dataList[i]["Serum Magnesium Result of Recent Test"] : '',
"bio_magnesium_date_of_last_test":this.dataList[i]["Serum Magnesium Date of Last Test"] ? this.dataList[i]["Serum Magnesium Date of Last Test"] : '',
"bio_magnesium_result_of_last_test":this.dataList[i]["Serum Magnesium Results of the last test"] ? this.dataList[i]["Serum Magnesium Results of the last test"] : '',
"bio_phosphorus_result_normal":this.dataList[i]["Phosphorus Result Normal?"] ? this.dataList[i]["Phosphorus Result Normal?"] : '',
"bio_phosphorus_date_of_recent_test":this.dataList[i]["Phosphorus Date of Recent Test"] ? this.dataList[i]["Phosphorus Date of Recent Test"] : '',
"bio_phosphorus_result_of_recent_test":this.dataList[i]["Phosphorus Result of Recent Test"] ? this.dataList[i]["Phosphorus Result of Recent Test"] : '',
"bio_phosphorus_date_of_last_test":this.dataList[i]["Phosphorus Date of Last Test"] ? this.dataList[i]["Phosphorus Date of Last Test"] : '',
"bio_phosphorus_result_of_last_test":this.dataList[i]["Phosphorus Results of the last test"] ? this.dataList[i]["Phosphorus Results of the last test"] : '',
"bio_urea_result_normal":this.dataList[i]["Urea Result Normal?"] ? this.dataList[i]["Urea Result Normal?"] : '',
"bio_urea_date_of_recent_test":this.dataList[i]["Urea Date of Recent Test"] ? this.dataList[i]["Urea Date of Recent Test"] : '',
"bio_urea_result_of_recent_test":this.dataList[i]["Urea Result of Recent Test"] ? this.dataList[i]["Urea Result of Recent Test"] : '',
"bio_urea_date_of_last_test":this.dataList[i]["Urea Date of Last Test"] ? this.dataList[i]["Urea Date of Last Test"] : '',
"bio_urea_result_of_last_test":this.dataList[i]["Urea Results of the last test"] ? this.dataList[i]["Urea Results of the last test"] : '',
"bio_bicarbonate_result_normal":this.dataList[i]["Bicarbonate Result Normal?"] ? this.dataList[i]["Bicarbonate Result Normal?"] : '',
"bio_bicarbonate_date_of_recent_test":this.dataList[i]["Bicarbonate Date of Recent Test"] ? this.dataList[i]["Bicarbonate Date of Recent Test"] : '',
"bio_bicarbonate_result_of_recent_test":this.dataList[i]["Bicarbonate Result of Recent Test"] ? this.dataList[i]["Bicarbonate Result of Recent Test"] : '',
"bio_bicarbonate_date_of_last_test":this.dataList[i]["Bicarbonate Date of Last Test"] ? this.dataList[i]["Bicarbonate Date of Last Test"] : '',
"bio_bicarbonate_result_of_last_test":this.dataList[i]["Bicarbonate Results of the last test"] ? this.dataList[i]["Bicarbonate Results of the last test"] : '',
"bio_alt_result_normal":this.dataList[i]["ALT Result Normal?"] ? this.dataList[i]["ALT Result Normal?"] : '',
"bio_alt_date_of_recent_test":this.dataList[i]["ALT Date of Recent Test"] ? this.dataList[i]["ALT Date of Recent Test"] : '',
"bio_alt_result_of_recent_test":this.dataList[i]["ALT Result of Recent Test"] ? this.dataList[i]["ALT Result of Recent Test"] : '',
"bio_alt_date_of_last_test":this.dataList[i]["ALT Date of Last Test"] ? this.dataList[i]["ALT Date of Last Test"] : '',
"bio_alt_result_of_last_test":this.dataList[i]["ALT Results of the last test"] ? this.dataList[i]["ALT Results of the last test"] : '',
"bio_alp_result_normal":this.dataList[i]["ALP Result Normal?"] ? this.dataList[i]["ALP Result Normal?"] : '',
"bio_alp_date_of_recent_test":this.dataList[i]["ALP Date of Recent Test"] ? this.dataList[i]["ALP Date of Recent Test"] : '',
"bio_alp_result_of_recent_test":this.dataList[i]["ALP Result of Recent Test"] ? this.dataList[i]["ALP Result of Recent Test"] : '',
"bio_alp_date_of_last_test":this.dataList[i]["ALP Date of Last Test"] ? this.dataList[i]["ALP Date of Last Test"] : '',
"bio_alp_result_of_last_test":this.dataList[i]["ALP Results of the last test"] ? this.dataList[i]["ALP Results of the last test"] : '',
"bio_ast_result_normal":this.dataList[i]["AST Result Normal?"] ? this.dataList[i]["AST Result Normal?"] : '',
"bio_ast_date_of_recent_test":this.dataList[i]["AST Date of Recent Test"] ? this.dataList[i]["AST Date of Recent Test"] : '',
"bio_ast_result_of_recent_test":this.dataList[i]["AST Result of Recent Test"] ? this.dataList[i]["AST Result of Recent Test"] : '',
"bio_ast_date_of_last_test":this.dataList[i]["AST Date of Last Test"] ? this.dataList[i]["AST Date of Last Test"] : '',
"bio_ast_result_of_last_test":this.dataList[i]["AST Results of the last test"] ? this.dataList[i]["AST Results of the last test"] : '',
"bio_bilirubin_result_normal":this.dataList[i]["Bilirubin Result Normal?"] ? this.dataList[i]["Bilirubin Result Normal?"] : '',
"bio_bilirubin_date_of_recent_test":this.dataList[i]["Bilirubin Date of Recent Test"] ? this.dataList[i]["Bilirubin Date of Recent Test"] : '',
"bio_bilirubin_result_of_recent_test":this.dataList[i]["Bilirubin Result of Recent Test"] ? this.dataList[i]["Bilirubin Result of Recent Test"] : '',
"bio_bilirubin_date_of_last_test":this.dataList[i]["Bilirubin Date of Last Test"] ? this.dataList[i]["Bilirubin Date of Last Test"] : '',
"bio_bilirubin_result_of_last_test":this.dataList[i]["Bilirubin Results of the last test"] ? this.dataList[i]["Bilirubin Results of the last test"] : '',
"bio_protein_result_normal":this.dataList[i]["Total Protein Result Normal?"] ? this.dataList[i]["Total Protein Result Normal?"] : '',
"bio_protein_date_of_recent_test":this.dataList[i]["Total Protein Date of Recent Test"] ? this.dataList[i]["Total Protein Date of Recent Test"] : '',
"bio_protein_result_of_recent_test":this.dataList[i]["Total Protein Result of Recent Test"] ? this.dataList[i]["Total Protein Result of Recent Test"] : '',
"bio_protein_date_of_last_test":this.dataList[i]["Total Protein Date of Last Test"] ? this.dataList[i]["Total Protein Date of Last Test"] : '',
"bio_protein_result_of_last_test":this.dataList[i]["Total Protein Results of the last test"] ? this.dataList[i]["Total Protein Results of the last test"] : '',
"bio_serum_albumin_result_normal":this.dataList[i]["Serum Albumin Result Normal?"] ? this.dataList[i]["Serum Albumin Result Normal?"] : '',
"bio_serum_albumin_date_of_recent_test":this.dataList[i]["Serum Albumin Date of Recent Test"] ? this.dataList[i]["Serum Albumin Date of Recent Test"] : '',
"bio_serum_albumin_result_of_recent_test":this.dataList[i]["Serum Albumin Result of Recent Test"] ? this.dataList[i]["Serum Albumin Result of Recent Test"] : '',
"bio_serum_albumin_date_of_last_test":this.dataList[i]["Serum Albumin Date of Last Test"] ? this.dataList[i]["Serum Albumin Date of Last Test"] : '',
"bio_serum_albumin_result_of_last_test":this.dataList[i]["Serum Albumin Results of the last test"] ? this.dataList[i]["Serum Albumin Results of the last test"] : '',
"bio_cprotein_result_normal":this.dataList[i]["C-reactive Protein Result Normal?"] ? this.dataList[i]["C-reactive Protein Result Normal?"] : '',
"bio_cprotein_date_of_recent_test":this.dataList[i]["C-reactive Protein Date of Recent Test"] ? this.dataList[i]["C-reactive Protein Date of Recent Test"] : '',
"bio_cprotein_result_of_recent_test":this.dataList[i]["C-reactive Protein Result of Recent Test"] ? this.dataList[i]["C-reactive Protein Result of Recent Test"] : '',
"bio_cprotein_date_of_last_test":this.dataList[i]["C-reactive Protein Date of Last Test"] ? this.dataList[i]["C-reactive Protein Date of Last Test"] : '',
"bio_cprotein_result_of_last_test":this.dataList[i]["C-reactive Protein Results of the last test"] ? this.dataList[i]["C-reactive Protein Results of the last test"] : '',
"bio_t3_result_normal":this.dataList[i]["T3 Result Normal?"] ? this.dataList[i]["T3 Result Normal?"] : '',
"bio_t3_date_of_recent_test":this.dataList[i]["T3 Date of Recent Test"] ? this.dataList[i]["T3 Date of Recent Test"] : '',
"bio_t3_result_of_recent_test":this.dataList[i]["T3 Result of Recent Test"] ? this.dataList[i]["T3 Result of Recent Test"] : '',
"bio_t3_date_of_last_test":this.dataList[i]["T3 Date of Last Test"] ? this.dataList[i]["T3 Date of Last Test"] : '',
"bio_t3_result_of_last_test":this.dataList[i]["T3 Results of the last test"] ? this.dataList[i]["T3 Results of the last test"] : '',
"bio_t4_result_normal":this.dataList[i]["T4 Result Normal?"] ? this.dataList[i]["T4 Result Normal?"] : '',
"bio_t4_date_of_recent_test":this.dataList[i]["T4 Date of Recent Test"] ? this.dataList[i]["T4 Date of Recent Test"] : '',
"bio_t4_result_of_recent_test":this.dataList[i]["T4 Result of Recent Test"] ? this.dataList[i]["T4 Result of Recent Test"] : '',
"bio_t4_date_of_last_test":this.dataList[i]["T4 Date of Last Test"] ? this.dataList[i]["T4 Date of Last Test"] : '',
"bio_t4_result_of_last_test":this.dataList[i]["T4 Results of the last test"] ? this.dataList[i]["T4 Results of the last test"] : '',
"bio_freet4_result_normal":this.dataList[i]["Free T4 Result Normal?"] ? this.dataList[i]["Free T4 Result Normal?"] : '',
"bio_freet4_date_of_recent_test":this.dataList[i]["Free T4 Date of Recent Test"] ? this.dataList[i]["Free T4 Date of Recent Test"] : '',
"bio_freet4_result_of_recent_test":this.dataList[i]["Free T4 Result of Recent Test"] ? this.dataList[i]["Free T4 Result of Recent Test"] : '',
"bio_freet4_date_of_last_test":this.dataList[i]["Free T4 Date of Last Test"] ? this.dataList[i]["Free T4 Date of Last Test"] : '',
"bio_freet4_result_of_last_test":this.dataList[i]["Free T4 Results of the last test"] ? this.dataList[i]["Free T4 Results of the last test"] : '',
"bio_tsh_result_normal":this.dataList[i]["TSH Result Normal?"] ? this.dataList[i]["TSH Result Normal?"] : '',
"bio_tsh_date_of_recent_test":this.dataList[i]["TSH Date of Recent Test"] ? this.dataList[i]["TSH Date of Recent Test"] : '',
"bio_tsh_result_of_recent_test":this.dataList[i]["TSH Result of Recent Test"] ? this.dataList[i]["TSH Result of Recent Test"] : '',
"bio_tsh_date_of_last_test":this.dataList[i]["TSH Date of Last Test"] ? this.dataList[i]["TSH Date of Last Test"] : '',
"bio_tsh_result_of_last_test":this.dataList[i]["TSH Results of the last test"] ? this.dataList[i]["TSH Results of the last test"] : '',
"bio_parathyroid_result_normal":this.dataList[i]["Parathyroid Hormone Result Normal?"] ? this.dataList[i]["Parathyroid Hormone Result Normal?"] : '',
"bio_parathyroid_date_of_recent_test":this.dataList[i]["Parathyroid Hormone Date of Recent Test"] ? this.dataList[i]["Parathyroid Hormone Date of Recent Test"] : '',
"bio_parathyroid_result_of_recent_test":this.dataList[i]["Parathyroid Hormone Result of Recent Test"] ? this.dataList[i]["Parathyroid Hormone Result of Recent Test"] : '',
"bio_parathyroid_date_of_last_test":this.dataList[i]["Parathyroid Hormone Date of Last Test"] ? this.dataList[i]["Parathyroid Hormone Date of Last Test"] : '',
"bio_parathyroid_result_of_last_test":this.dataList[i]["Parathyroid Hormone Results of the last test"] ? this.dataList[i]["Parathyroid Hormone Results of the last test"] : '',
"bio_wbc_count_result_normal":this.dataList[i]["WBC Count Result Normal?"] ? this.dataList[i]["WBC Count Result Normal?"] : '',
"bio_wbc_count_date_of_recent_test":this.dataList[i]["WBC Count Date of Recent Test"] ? this.dataList[i]["WBC Count Date of Recent Test"] : '',
"bio_wbc_count_result_of_recent_test":this.dataList[i]["WBC Count Result of Recent Test"] ? this.dataList[i]["WBC Count Result of Recent Test"] : '',
"bio_wbc_count_date_of_last_test":this.dataList[i]["WBC Count Date of Last Test"] ? this.dataList[i]["WBC Count Date of Last Test"] : '',
"bio_wbc_count_result_of_last_test":this.dataList[i]["WBC Count Results of the last test"] ? this.dataList[i]["WBC Count Results of the last test"] : '',
"bio_wbc_diffcount_result_normal":this.dataList[i]["WBC Differential Result Normal?"] ? this.dataList[i]["WBC Differential Result Normal?"] : '',
"bio_wbc_diffcount_date_of_recent_test":this.dataList[i]["WBC Differential Date of Recent Test"] ? this.dataList[i]["WBC Differential Date of Recent Test"] : '',
"bio_wbc_diffcount_result_of_recent_test":this.dataList[i]["WBC Differential Result of Recent Test"] ? this.dataList[i]["WBC Differential Result of Recent Test"] : '',
"bio_wbc_diffcount_date_of_last_test":this.dataList[i]["WBC Differential Date of Last Test"] ? this.dataList[i]["WBC Differential Date of Last Test"] : '',
"bio_wbc_diffcount_result_of_last_test":this.dataList[i]["WBC Differential Results of the last test"] ? this.dataList[i]["WBC Differential Results of the last test"] : '',
"bio_rbc_count_result_normal":this.dataList[i]["RBC Count Result Normal?"] ? this.dataList[i]["RBC Count Result Normal?"] : '',
"bio_rbc_count_date_of_recent_test":this.dataList[i]["RBC Count Date of Recent Test"] ? this.dataList[i]["RBC Count Date of Recent Test"] : '',
"bio_rbc_count_result_of_recent_test":this.dataList[i]["RBC Count Result of Recent Test"] ? this.dataList[i]["RBC Count Result of Recent Test"] : '',
"bio_rbc_count_date_of_last_test":this.dataList[i]["RBC Count Date of Last Test"] ? this.dataList[i]["RBC Count Date of Last Test"] : '',
"bio_rbc_count_result_of_last_test":this.dataList[i]["RBC Count Results of the last test"] ? this.dataList[i]["RBC Count Results of the last test"] : '',
"bio_haemoglobin_count_result_normal":this.dataList[i]["Haemoglobin Result Normal?"] ? this.dataList[i]["Haemoglobin Result Normal?"] : '',
"bio_haemoglobin_count_date_of_recent_test":this.dataList[i]["Haemoglobin Date of Recent Test"] ? this.dataList[i]["Haemoglobin Date of Recent Test"] : '',
"bio_haemoglobin_count_result_of_recent_test":this.dataList[i]["Haemoglobin Result of Recent Test"] ? this.dataList[i]["Haemoglobin Result of Recent Test"] : '',
"bio_haemoglobin_count_date_of_last_test":this.dataList[i]["Haemoglobin Date of Last Test"] ? this.dataList[i]["Haemoglobin Date of Last Test"] : '',
"bio_haemoglobin_count_result_of_last_test":this.dataList[i]["Haemoglobin Results of the last test"] ? this.dataList[i]["Haemoglobin Results of the last test"] : '',
"bio_haematocrit_count_result_normal":this.dataList[i]["Haematocrit Result Normal?"] ? this.dataList[i]["Haematocrit Result Normal?"] : '',
"bio_haematocrit_count_date_of_recent_test":this.dataList[i]["Haematocrit Date of Recent Test"] ? this.dataList[i]["Haematocrit Date of Recent Test"] : '',
"bio_haematocrit_count_result_of_recent_test":this.dataList[i]["Haematocrit Result of Recent Test"] ? this.dataList[i]["Haematocrit Result of Recent Test"] : '',
"bio_haematocrit_count_date_of_last_test":this.dataList[i]["Haematocrit Date of Last Test"] ? this.dataList[i]["Haematocrit Date of Last Test"] : '',
"bio_haematocrit_count_result_of_last_test":this.dataList[i]["Haematocrit Results of the last test"] ? this.dataList[i]["Haematocrit Results of the last test"] : '',
"bio_ferritin_count_result_normal":this.dataList[i]["Ferritin Result Normal?"] ? this.dataList[i]["Ferritin Result Normal?"] : '',
"bio_ferritin_count_date_of_recent_test":this.dataList[i]["Ferritin Date of Recent Test"] ? this.dataList[i]["Ferritin Date of Recent Test"] : '',
"bio_ferritin_count_result_of_recent_test":this.dataList[i]["Ferritin Result of Recent Test"] ? this.dataList[i]["Ferritin Result of Recent Test"] : '',
"bio_ferritin_count_date_of_last_test":this.dataList[i]["Ferritin Date of Last Test"] ? this.dataList[i]["Ferritin Date of Last Test"] : '',
"bio_ferritin_count_result_of_last_test":this.dataList[i]["Ferritin Results of the last test"] ? this.dataList[i]["Ferritin Results of the last test"] : '',
"bio_rdw_count_result_normal":this.dataList[i]["RDW Count Result Normal?"] ? this.dataList[i]["RDW Count Result Normal?"] : '',
"bio_rdw_count_date_of_recent_test":this.dataList[i]["RDW Count Date of Recent Test"] ? this.dataList[i]["RDW Count Date of Recent Test"] : '',
"bio_rdw_count_result_of_recent_test":this.dataList[i]["RDW Count Result of Recent Test"] ? this.dataList[i]["RDW Count Result of Recent Test"] : '',
"bio_rdw_count_date_of_last_test":this.dataList[i]["RDW Count Date of Last Test"] ? this.dataList[i]["RDW Count Date of Last Test"] : '',
"bio_rdw_count_result_of_last_test":this.dataList[i]["RDW Count Results of the last test"] ? this.dataList[i]["RDW Count Results of the last test"] : '',
"bio_mcv_result_normal":this.dataList[i]["MCV Result Normal?"] ? this.dataList[i]["MCV Result Normal?"] : '',
"bio_mcv_date_of_recent_test":this.dataList[i]["MCV Date of Recent Test"] ? this.dataList[i]["MCV Date of Recent Test"] : '',
"bio_mcv_result_of_recent_test":this.dataList[i]["MCV Result of Recent Test"] ? this.dataList[i]["MCV Result of Recent Test"] : '',
"bio_mcv_date_of_last_test":this.dataList[i]["MCV Date of Last Test"] ? this.dataList[i]["MCV Date of Last Test"] : '',
"bio_mcv_result_of_last_test":this.dataList[i]["MCV Results of the last test"] ? this.dataList[i]["MCV Results of the last test"] : '',
"bio_mch_result_normal":this.dataList[i]["MCH Result Normal?"] ? this.dataList[i]["MCH Result Normal?"] : '',
"bio_mch_date_of_recent_test":this.dataList[i]["MCH Date of Recent Test"] ? this.dataList[i]["MCH Date of Recent Test"] : '',
"bio_mch_result_of_recent_test":this.dataList[i]["MCH Result of Recent Test"] ? this.dataList[i]["MCH Result of Recent Test"] : '',
"bio_mch_date_of_last_test":this.dataList[i]["MCH Date of Last Test"] ? this.dataList[i]["MCH Date of Last Test"] : '',
"bio_mch_result_of_last_test":this.dataList[i]["MCH Results of the last test"] ? this.dataList[i]["MCH Results of the last test"] : '',
"bio_mchc_result_normal":this.dataList[i]["MCHC Result Normal?"] ? this.dataList[i]["MCHC Result Normal?"] : '',
"bio_mchc_date_of_recent_test":this.dataList[i]["MCHC Date of Recent Test"] ? this.dataList[i]["MCHC Date of Recent Test"] : '',
"bio_mchc_result_of_recent_test":this.dataList[i]["MCHC Result of Recent Test"] ? this.dataList[i]["MCHC Result of Recent Test"] : '',
"bio_mchc_date_of_last_test":this.dataList[i]["MCHC Date of Last Test"] ? this.dataList[i]["MCHC Date of Last Test"] : '',
"bio_mchc_result_of_last_test":this.dataList[i]["MCHC Results of the last test"] ? this.dataList[i]["MCHC Results of the last test"] : '',
"bio_reticulocyte_result_normal":this.dataList[i]["Reticulocyte Result Normal?"] ? this.dataList[i]["Reticulocyte Result Normal?"] : '',
"bio_reticulocyte_date_of_recent_test":this.dataList[i]["Date of Recent Test"] ? this.dataList[i]["Date of Recent Test"] : '',
"bio_reticulocyte_result_of_recent_test":this.dataList[i]["Reticulocyte Result of Recent Test"] ? this.dataList[i]["Reticulocyte Result of Recent Test"] : '',
"bio_reticulocyte_date_of_last_test":this.dataList[i]["Reticulocyte Date of Last Test"] ? this.dataList[i]["Reticulocyte Date of Last Test"] : '',
"bio_reticulocyte_result_of_last_test":this.dataList[i]["Reticulocyte Results of the last test"] ? this.dataList[i]["Reticulocyte Results of the last test"] : '',
"bio_platelet_result_normal":this.dataList[i]["Platelet Result Normal?"] ? this.dataList[i]["Platelet Result Normal?"] : '',
"bio_platelet_date_of_recent_test":this.dataList[i]["Platelet Date of Recent Test"] ? this.dataList[i]["Platelet Date of Recent Test"] : '',
"bio_platelet_result_of_recent_test":this.dataList[i]["Platelet Result of Recent Test"] ? this.dataList[i]["Platelet Result of Recent Test"] : '',
"bio_platelet_date_of_last_test":this.dataList[i]["Platelet Date of Last Test"] ? this.dataList[i]["Platelet Date of Last Test"] : '',
"bio_platelet_result_of_last_test":this.dataList[i]["Platelet Results of the last test"] ? this.dataList[i]["Platelet Results of the last test"] : '',
"bio_mpvplatelet_result_normal":this.dataList[i]["MPV Result Normal?"] ? this.dataList[i]["MPV Result Normal?"] : '',
"bio_mpvplatelet_date_of_recent_test":this.dataList[i]["MPV Date of Recent Test"] ? this.dataList[i]["MPV Date of Recent Test"] : '',
"bio_mpvplatelet_result_of_recent_test":this.dataList[i]["MPV Result of Recent Test"] ? this.dataList[i]["MPV Result of Recent Test"] : '',
"bio_mpvplatelet_date_of_last_test":this.dataList[i]["MPV Date of Last Test"] ? this.dataList[i]["MPV Date of Last Test"] : '',
"bio_mpvplatelet_result_of_last_test":this.dataList[i]["MPV Results of the last test"] ? this.dataList[i]["MPV Results of the last test"] : '',
"bio_utsmacroscopic_result_normal":this.dataList[i]["UTS Macroscopic Result"] ? this.dataList[i]["UTS Macroscopic Result"] : '',
"bio_utsmacroscopic_date_of_recent_test":this.dataList[i]["UTS Macroscopic Recent Date"] ? this.dataList[i]["UTS Macroscopic Recent Date"] : '',
"bio_utsmacroscopic_result_of_recent_test":this.dataList[i]["UTS Macroscopic Recent Result"] ? this.dataList[i]["UTS Macroscopic Recent Result"] : '',
"bio_utsmacroscopic_date_of_last_test":this.dataList[i]["UTS Macroscopic Last Date"] ? this.dataList[i]["UTS Macroscopic Last Date"] : '',
"bio_utsmacroscopic_result_of_last_test":this.dataList[i]["UTS Macroscopic Last Result"] ? this.dataList[i]["UTS Macroscopic Last Result"] : '',
"bio_utsph_result_normal":this.dataList[i]["Urine Test Summary pH Result Normal?"] ? this.dataList[i]["Urine Test Summary pH Result Normal?"] : '',
"bio_utsph_date_of_recent_test":this.dataList[i]["Urine Test Summary pH Date of Recent Test"] ? this.dataList[i]["Urine Test Summary pH Date of Recent Test"] : '',
"bio_utsph_result_of_recent_test":this.dataList[i]["Urine Test Summary Result of Recent Test"] ? this.dataList[i]["Urine Test Summary Result of Recent Test"] : '',
"bio_utsph_date_of_last_test":this.dataList[i]["Date of Last Test"] ? this.dataList[i]["Date of Last Test"] : '',
"bio_utsph_result_of_last_test":this.dataList[i]["Urine Test Summary pH Results of the Last Test"] ? this.dataList[i]["Urine Test Summary pH Results of the Last Test"] : '',
"bio_utsglucose_result_normal":this.dataList[i]["UTS Glucose Result Normal?"] ? this.dataList[i]["UTS Glucose Result Normal?"] : '',
"bio_utsglucose_date_of_recent_test":this.dataList[i]["UTS Glucose Date of Recent Test"] ? this.dataList[i]["UTS Glucose Date of Recent Test"] : '',
"bio_utsglucose_result_of_recent_test":this.dataList[i]["UTS Glucose Result of Recent Test"] ? this.dataList[i]["UTS Glucose Result of Recent Test"] : '',
"bio_utsglucose_date_of_last_test":this.dataList[i]["UTS Glucose Date of Last Test"] ? this.dataList[i]["UTS Glucose Date of Last Test"] : '',
"bio_utsglucose_result_of_last_test":this.dataList[i]["UTS Glucose Results of the last test"] ? this.dataList[i]["UTS Glucose Results of the last test"] : '',
"bio_utsgravity_result_normal":this.dataList[i]["UTS Gravity Result Normal?"] ? this.dataList[i]["UTS Gravity Result Normal?"] : '',
"bio_utsgravity_date_of_recent_test":this.dataList[i]["UTS Gravity Date of Recent Test"] ? this.dataList[i]["UTS Gravity Date of Recent Test"] : '',
"bio_utsgravity_result_of_recent_test":this.dataList[i]["UTS Gravity Result of Recent Test"] ? this.dataList[i]["UTS Gravity Result of Recent Test"] : '',
"bio_utsgravity_date_of_last_test":this.dataList[i]["UTS Gravity Date of Last Test"] ? this.dataList[i]["UTS Gravity Date of Last Test"] : '',
"bio_utsgravity_result_of_last_test":this.dataList[i]["UTS Gravity Results of the last test"] ? this.dataList[i]["UTS Gravity Results of the last test"] : '',
"bio_utsnitrite_result_normal":this.dataList[i]["UTS Nitrate Result Normal?"] ? this.dataList[i]["UTS Nitrate Result Normal?"] : '',
"bio_utsnitrite_date_of_recent_test":this.dataList[i]["UTS Nitrate Date of Recent Test"] ? this.dataList[i]["UTS Nitrate Date of Recent Test"] : '',
"bio_utsnitrite_result_of_recent_test":this.dataList[i]["UTS Nitrate Result of Recent Test"] ? this.dataList[i]["UTS Nitrate Result of Recent Test"] : '',
"bio_utsnitrite_date_of_last_test":this.dataList[i]["UTS Nitrate Date of Last Test"] ? this.dataList[i]["UTS Nitrate Date of Last Test"] : '',
"bio_utsnitrite_result_of_last_test":this.dataList[i]["UTS Nitrate Results of the last test"] ? this.dataList[i]["UTS Nitrate Results of the last test"] : '',
"bio_utsleukocyte_result_normal":this.dataList[i]["UTS Leukocyte Result Normal?"] ? this.dataList[i]["UTS Leukocyte Result Normal?"] : '',
"bio_utsleukocyte_date_of_recent_test":this.dataList[i]["UTS Leukocyte Date of Recent Test"] ? this.dataList[i]["UTS Leukocyte Date of Recent Test"] : '',
"bio_utsleukocyte_result_of_recent_test":this.dataList[i]["UTS Leukocyte Result of Recent Test"] ? this.dataList[i]["UTS Leukocyte Result of Recent Test"] : '',
"bio_utsleukocyte_date_of_last_test":this.dataList[i]["UTS Leukocyte Date of Last Test"] ? this.dataList[i]["UTS Leukocyte Date of Last Test"] : '',
"bio_utsleukocyte_result_of_last_test":this.dataList[i]["UTS Leukocyte Results of the last test"] ? this.dataList[i]["UTS Leukocyte Results of the last test"] : '',
"bio_utsmicroscopy_cells_result_normal":this.dataList[i]["UTS Microscopy Cell Result Normal?"] ? this.dataList[i]["UTS Microscopy Cell Result Normal?"] : '',
"bio_utsmicroscopy_cells_date_of_recent_test":this.dataList[i]["UTS Microscopy Cell Date of Recent Test"] ? this.dataList[i]["UTS Microscopy Cell Date of Recent Test"] : '',
"bio_utsmicroscopy_cells_result_of_recent_test":this.dataList[i]["UTS Microscopy Cell Result of Recent Test"] ? this.dataList[i]["UTS Microscopy Cell Result of Recent Test"] : '',
"bio_utsmicroscopy_cells_date_of_last_test":this.dataList[i]["UTS Microscopy Cell Date of Last Test"] ? this.dataList[i]["UTS Microscopy Cell Date of Last Test"] : '',
"bio_utsmicroscopy_cells_result_of_last_test":this.dataList[i]["UTS Microscopy Cell Results of the last test"] ? this.dataList[i]["UTS Microscopy Cell Results of the last test"] : '',
"bio_utsmicroscopy_casts_result_normal":this.dataList[i]["UTS Microscopy CASTS Result Normal?"] ? this.dataList[i]["UTS Microscopy CASTS Result Normal?"] : '',
"bio_utsmicroscopy_casts_date_of_recent_test":this.dataList[i]["UTS Microscopy CASTS Date of Recent Test"] ? this.dataList[i]["UTS Microscopy CASTS Date of Recent Test"] : '',
"bio_utsmicroscopy_casts_result_of_recent_test":this.dataList[i]["UTS Microscopy CASTS Result of Recent Test"] ? this.dataList[i]["UTS Microscopy CASTS Result of Recent Test"] : '',
"bio_utsmicroscopy_casts_date_of_last_test":this.dataList[i]["UTS Microscopy CASTS Date of Last Test"] ? this.dataList[i]["UTS Microscopy CASTS Date of Last Test"] : '',
"bio_utsmicroscopy_casts_result_of_last_test":this.dataList[i]["UTS Microscopy CASTS Results of the last test"] ? this.dataList[i]["UTS Microscopy CASTS Results of the last test"] : '',
"bio_utsmicroscopy_crystals_result_normal":this.dataList[i]["UTS Microscopy Crystals Result Normal?"] ? this.dataList[i]["UTS Microscopy Crystals Result Normal?"] : '',
"bio_utsmicroscopy_crystals_date_of_recent_test":this.dataList[i]["UTS Microscopy Crystals Date of Recent Test"] ? this.dataList[i]["UTS Microscopy Crystals Date of Recent Test"] : '',
"bio_utsmicroscopy_crystals_result_of_recent_test":this.dataList[i]["UTS Microscopy Crystals Result of Recent Test"] ? this.dataList[i]["UTS Microscopy Crystals Result of Recent Test"] : '',
"bio_utsmicroscopy_crystals_date_of_last_test":this.dataList[i]["UTS Microscopy Crystals Date of Last Test"] ? this.dataList[i]["UTS Microscopy Crystals Date of Last Test"] : '',
"bio_utsmicroscopy_crystals_result_of_last_test":this.dataList[i]["UTS Microscopy Crystals Results of the last test"] ? this.dataList[i]["UTS Microscopy Crystals Results of the last test"] : '',
"oral_agents_other_other":this.dataList[i]["OA Other"] ? this.dataList[i]["OA Other"] : '',
"oral_agents_other_pramlintide":this.dataList[i]["Other Pramlintide"] ? this.dataList[i]["Other Pramlintide"] : '',
"oral_agents_other":this.dataList[i]["OA Other Dose"]  === ''? false : this.dataList[i]["OA Other Dose"] === 'Yes'? true : false,
"anti_dyslipidemia_statins_dose":this.dataList[i]["Anti Dyslipidemia Statins Dose"] ? this.dataList[i]["Anti Dyslipidemia Statins Dose"] : '',
"anti_dyslipidemia_other_dose":this.dataList[i]["Anti Dyslipidemia Other Dose"] ? this.dataList[i]["Anti Dyslipidemia Other Dose"] : '',
"oral_agents_thiazolidinediones_dose":this.dataList[i]["Agents Thiazolidinediones Dose"] ? this.dataList[i]["Agents Thiazolidinediones Dose"] : '',
"oral_agents_sulphonyureas_dose":this.dataList[i]["SUs Dose"] ? this.dataList[i]["SUs Dose"] : '',
"bio_fbg_date_of_recent_test":this.dataList[i]["FBG Date of Recent Test"] ? this.dataList[i]["FBG Date of Recent Test"] : '',
"bio_fbg_result_of_recent_test":this.dataList[i]["FBG Result of Recent Test"] ? this.dataList[i]["FBG Result of Recent Test"] : '',
"bio_fbg_date_of_last_test":this.dataList[i]["FBG Date of Last Test"] ? this.dataList[i]["FBG Date of Last Test"] : '',
"bio_fbg_result_of_last_test":this.dataList[i]["FBG Results of the last test"] ? this.dataList[i]["FBG Results of the last test"] : '',
"bio_fbg_result_normal":this.dataList[i]["Is FBG Result Normal?"] ? this.dataList[i]["Is FBG Result Normal?"] : '',
"anti_hypertensive_ace_inhibitors_dose":this.dataList[i]["Ace Inhibitors Dose"] ? this.dataList[i]["Ace Inhibitors Dose"] : '',
"oral_agents_other_dose":this.dataList[i]["Others Agents Dose"] ? this.dataList[i]["Others Agents Dose"] : '',
"anti_hypertensive_other_dose":this.dataList[i]["Hypertensive Others Dose"] ? this.dataList[i]["Hypertensive Others Dose"] : '',
"anti_hypertensive_cachannel_blockers_dose":this.dataList[i]["Cachannel Blocker Dose"] ? this.dataList[i]["Cachannel Blocker Dose"] : '',
"anti_hypertensive_diuretics_dose":this.dataList[i]["Diuretics Dose"] ? this.dataList[i]["Diuretics Dose"] : '',
"anti_hypertensive_beta_blockers_dose":this.dataList[i]["Beta Blocker Dose"] ? this.dataList[i]["Beta Blocker Dose"] : '',
"anti_hypertensive_arbs_dose":this.dataList[i]["ARBS Dose"] ? this.dataList[i]["ARBS Dose"] : '',
"anti_dyslipidemia_fibrates_dose":this.dataList[i]["Fibrates Dose"] ? this.dataList[i]["Fibrates Dose"] : ''})
		
			}
console.log(this.dataList.length,_result)
if (this.dataList.length) {
 
      this._vService.updateSample(_result).subscribe((res)=> {
        if (res) {
          this.splashService.splashScreen({isLoading : false, message : "" })
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
			  console.log(this.dataList)
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
	  excelcreateForm(){
		this.form = this.eformFB.group({
		  "savedFormID": new FormControl({ value: this.dataList[0].savedFormID, disabled: this.disableInput }),
		  "file": new FormControl({value: '', disabled: this.disableInput}),
		   "removableexcelfile": new FormControl({value: '', disabled: this.disableInput}),
		  //common
		
		"anti_hypertensive_ace_inhibitors"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_perindopril"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_perindopril,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_captopril"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_captopril,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_enalapril"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_enalapril,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_lisinopril"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_lisinopril,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_arbs"   : new FormControl({value: this.dataList[0].anti_hypertensive_arbs,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_arbs_losartan"   : new FormControl({value: this.dataList[0].anti_hypertensive_arbs_losartan,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_arbs_valsartan"   : new FormControl({value: this.dataList[0].anti_hypertensive_arbs_valsartan,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_arbs_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_arbs_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_beta_blockers"   : new FormControl({value: this.dataList[0].anti_hypertensive_beta_blockers,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_beta_blockers_atenolol"   : new FormControl({value: this.dataList[0].anti_hypertensive_beta_blockers_atenolol,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_beta_blockers_bisoprolol"   : new FormControl({value: this.dataList[0].anti_hypertensive_beta_blockers_bisoprolol,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_beta_blockers_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_beta_blockers_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics_indapamide"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics_indapamide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics_hydrochlorothiazide"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics_hydrochlorothiazide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics_frusemide"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics_frusemide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers_amlodipine"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers_amlodipine,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers_nifedipine"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers_nifedipine,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers_verapamil"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers_verapamil,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_other,disabled: this.disableInput },[Validators.maxLength(200)]),       
		  "anti_hypertensive_methyldopa"   : new FormControl({value: this.dataList[0].anti_hypertensive_methyldopa,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_other_other"   : new FormControl({value: this.dataList[0].anti_hypertensive_other_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins_simvastatin"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins_simvastatin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins_atorvastatin"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins_atorvastatin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins_rosuvastatin"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins_rosuvastatin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins_other"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_fibrates"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_fibrates,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_fibrates_other"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_fibrates_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_fibrates_gemfibrozil"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_fibrates_gemfibrozil,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_fibrates_fenofibrate"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_fibrates_fenofibrate,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_other"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_other_other"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_other_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_biguanides"   : new FormControl({value: this.dataList[0].oral_agents_biguanides,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_biguanides_metformin"   : new FormControl({value: this.dataList[0].oral_agents_biguanides_metformin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_glibenclamide"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_glibenclamide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_glimepiride"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_glimepiride,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_glipizide"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_glipizide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_gliclazidemr"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_gliclazidemr,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_glipizide1"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_glipizide1,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_glimepride"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_glimepride,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyuras_other"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyuras_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_thiazolidinediones"   : new FormControl({value: this.dataList[0].oral_agents_thiazolidinediones,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_thiazolidinediones_pioglitazone"   : new FormControl({value: this.dataList[0].oral_agents_thiazolidinediones_pioglitazone,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_thiazolidinediones_other"   : new FormControl({value: this.dataList[0].oral_agents_thiazolidinediones_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_meglitinides"   : new FormControl({value: this.dataList[0].oral_agents_meglitinides,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_meglitinides_nateglinide"   : new FormControl({value: this.dataList[0].oral_agents_meglitinides_nateglinide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_meglitinides_repaglinide"   : new FormControl({value: this.dataList[0].oral_agents_meglitinides_repaglinide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_meglitinides_other"   : new FormControl({value: this.dataList[0].oral_agents_meglitinides_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl_sitagliptin"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl_sitagliptin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl_vildagliptin"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl_vildagliptin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl_saxagliptin"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl_saxagliptin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl_linagliptin"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl_linagliptin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_dipeptidyl_other"   : new FormControl({value: this.dataList[0].oral_agents_dipeptidyl_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_incretin"   : new FormControl({value: this.dataList[0].oral_agents_incretin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_incretin_exenatide"   : new FormControl({value: this.dataList[0].oral_agents_incretin_exenatide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_incretin_liraglutide"   : new FormControl({value: this.dataList[0].oral_agents_incretin_liraglutide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_incretin_exenatide_weekly"   : new FormControl({value: this.dataList[0].oral_agents_incretin_exenatide_weekly,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_incretin_other"   : new FormControl({value: this.dataList[0].oral_agents_incretin_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_alpha_glucosidase_inhibitors"   : new FormControl({value: this.dataList[0].oral_agents_alpha_glucosidase_inhibitors,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_alpha_glucosidase_inhibitors_acarbose"   : new FormControl({value: this.dataList[0].oral_agents_alpha_glucosidase_inhibitors_acarbose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_alpha_glucosidase_inhibitors_other"   : new FormControl({value: this.dataList[0].oral_agents_alpha_glucosidase_inhibitors_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sglt2"   : new FormControl({value: this.dataList[0].oral_agents_sglt2,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sglt2_canagliflozin"   : new FormControl({value: this.dataList[0].oral_agents_sglt2_canagliflozin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sglt2_dapagliflozin"   : new FormControl({value: this.dataList[0].oral_agents_sglt2_dapagliflozin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sglt2_empagliflozin"   : new FormControl({value: this.dataList[0].oral_agents_sglt2_empagliflozin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sglt2_other"   : new FormControl({value: this.dataList[0].oral_agents_sglt2_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_amylin"   : new FormControl({value: this.dataList[0].oral_agents_amylin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_amylin_pramlintide"   : new FormControl({value: this.dataList[0].oral_agents_amylin_pramlintide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_amylin_other"   : new FormControl({value: this.dataList[0].oral_agents_amylin_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin"   : new FormControl({value: this.dataList[0].injections_insulin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_lispro"   : new FormControl({value: this.dataList[0].injections_insulin_lispro,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_aspart"   : new FormControl({value: this.dataList[0].injections_insulin_aspart,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_glulisine"   : new FormControl({value: this.dataList[0].injections_insulin_glulisine,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_regular"   : new FormControl({value: this.dataList[0].injections_insulin_regular,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_nph"   : new FormControl({value: this.dataList[0].injections_insulin_nph,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_detemir"   : new FormControl({value: this.dataList[0].injections_insulin_detemir,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_glargine"   : new FormControl({value: this.dataList[0].injections_insulin_glargine,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_combination"   : new FormControl({value: this.dataList[0].injections_insulin_combination,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "injections_insulin_other"   : new FormControl({value: this.dataList[0].injections_insulin_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "supplements_vitamind3"   : new FormControl({value: this.dataList[0].supplements_vitamind3,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "supplements_others"   : new FormControl({value: this.dataList[0].supplements_others,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "supplements_others_doze"   : new FormControl({value: this.dataList[0].supplements_others_doze,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "supplements_erythropoietin"   : new FormControl({value: this.dataList[0].supplements_erythropoietin,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "supplements_erythropoietin_others"   : new FormControl({value: this.dataList[0].supplements_erythropoietin_others,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antidepressants_prozac"   : new FormControl({value: this.dataList[0].antidepressants_prozac,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antidepressants_other"   : new FormControl({value: this.dataList[0].antidepressants_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antianxiety_diazepam"   : new FormControl({value: this.dataList[0].antianxiety_diazepam,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antianxiety_alprazolam"   : new FormControl({value: this.dataList[0].antianxiety_alprazolam,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antianxiety_other"   : new FormControl({value: this.dataList[0].antianxiety_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "othermedication_other"   : new FormControl({value: this.dataList[0].othermedication_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "traditional_chinese"   : new FormControl({value: this.dataList[0].traditional_chinese,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "traditional_chinese_specify"   : new FormControl({value: this.dataList[0].traditional_chinese_specify,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "antidiabetic_medications_other"   : new FormControl({value: this.dataList[0].antidiabetic_medications_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fastingglucose_result_normal"   : new FormControl({value: this.dataList[0].bio_fastingglucose_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fastingglucose_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fastingglucose_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fastingglucose_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fastingglucose_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fastingglucose_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_fastingglucose_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fastingglucose_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_fastingglucose_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_randomglucose_result_normal"   : new FormControl({value: this.dataList[0].bio_randomglucose_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_randomglucose_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_randomglucose_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_randomglucose_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_randomglucose_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_randomglucose_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_randomglucose_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_randomglucose_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_randomglucose_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ogtt_result_normal"   : new FormControl({value: this.dataList[0].bio_ogtt_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ogtt_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ogtt_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ogtt_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ogtt_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ogtt_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_ogtt_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ogtt_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_ogtt_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fg2_result_normal"   : new FormControl({value: this.dataList[0].bio_fg2_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fg2_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fg2_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fg2_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fg2_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fg2_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_fg2_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fg2_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_fg2_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hba1c_result_normal"   : new FormControl({value: this.dataList[0].bio_hba1c_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hba1c_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_hba1c_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hba1c_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_hba1c_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hba1c_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_hba1c_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hba1c_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_hba1c_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fasting_insulin_result_normal"   : new FormControl({value: this.dataList[0].bio_fasting_insulin_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fasting_insulin_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fasting_insulin_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fasting_insulin_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fasting_insulin_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fasting_insulin_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_fasting_insulin_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fasting_insulin_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_fasting_insulin_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_totalcholesterol_result_normal"   : new FormControl({value: this.dataList[0].bio_totalcholesterol_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_totalcholesterol_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_totalcholesterol_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_totalcholesterol_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_totalcholesterol_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_totalcholesterol_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_totalcholesterol_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_totalcholesterol_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_totalcholesterol_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_triglyceride_result_normal"   : new FormControl({value: this.dataList[0].bio_triglyceride_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_triglyceride_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_triglyceride_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_triglyceride_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_triglyceride_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_triglyceride_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_triglyceride_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_triglyceride_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_triglyceride_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hdl_result_normal"   : new FormControl({value: this.dataList[0].bio_hdl_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hdl_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_hdl_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hdl_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_hdl_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hdl_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_hdl_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_hdl_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_hdl_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ldl_result_normal"   : new FormControl({value: this.dataList[0].bio_ldl_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ldl_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ldl_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ldl_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ldl_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ldl_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_ldl_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ldl_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_ldl_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_vitamindlevel_result_normal"   : new FormControl({value: this.dataList[0].bio_vitamindlevel_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_vitamindlevel_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_vitamindlevel_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_vitamindlevel_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_vitamindlevel_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_vitamindlevel_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_vitamindlevel_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_vitamindlevel_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_vitamindlevel_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_microalbumin_result_normal"   : new FormControl({value: this.dataList[0].bio_microalbumin_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_microalbumin_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_microalbumin_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_microalbumin_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_microalbumin_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_microalbumin_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_microalbumin_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_microalbumin_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_microalbumin_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albuminuria_result_normal"   : new FormControl({value: this.dataList[0].bio_albuminuria_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albuminuria_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_albuminuria_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albuminuria_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_albuminuria_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albuminuria_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_albuminuria_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albuminuria_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_albuminuria_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albumincreatinine_result_normal"   : new FormControl({value: this.dataList[0].bio_albumincreatinine_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albumincreatinine_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_albumincreatinine_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albumincreatinine_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_albumincreatinine_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albumincreatinine_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_albumincreatinine_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_albumincreatinine_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_albumincreatinine_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_creatinine_result_normal"   : new FormControl({value: this.dataList[0].bio_creatinine_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_creatinine_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_creatinine_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_creatinine_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_creatinine_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_creatinine_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_creatinine_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_creatinine_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_creatinine_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_egfr_result_normal"   : new FormControl({value: this.dataList[0].bio_egfr_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_egfr_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_egfr_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_egfr_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_egfr_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_egfr_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_egfr_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_egfr_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_egfr_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_sodium_result_normal"   : new FormControl({value: this.dataList[0].bio_sodium_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_sodium_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_sodium_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_sodium_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_sodium_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_sodium_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_sodium_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_sodium_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_sodium_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_potassium_result_normal"   : new FormControl({value: this.dataList[0].bio_potassium_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_potassium_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_potassium_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_potassium_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_potassium_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_potassium_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_potassium_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_potassium_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_potassium_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_calcium_result_normal"   : new FormControl({value: this.dataList[0].bio_calcium_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_calcium_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_calcium_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_calcium_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_calcium_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_calcium_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_calcium_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_calcium_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_calcium_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_magnesium_result_normal"   : new FormControl({value: this.dataList[0].bio_magnesium_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_magnesium_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_magnesium_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_magnesium_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_magnesium_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_magnesium_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_magnesium_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_magnesium_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_magnesium_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_phosphorus_result_normal"   : new FormControl({value: this.dataList[0].bio_phosphorus_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_phosphorus_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_phosphorus_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_phosphorus_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_phosphorus_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_phosphorus_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_phosphorus_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_phosphorus_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_phosphorus_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_urea_result_normal"   : new FormControl({value: this.dataList[0].bio_urea_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_urea_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_urea_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_urea_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_urea_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_urea_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_urea_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_urea_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_urea_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bicarbonate_result_normal"   : new FormControl({value: this.dataList[0].bio_bicarbonate_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bicarbonate_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_bicarbonate_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bicarbonate_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_bicarbonate_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bicarbonate_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_bicarbonate_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bicarbonate_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_bicarbonate_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alt_result_normal"   : new FormControl({value: this.dataList[0].bio_alt_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alt_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_alt_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alt_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_alt_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alt_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_alt_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alt_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_alt_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alp_result_normal"   : new FormControl({value: this.dataList[0].bio_alp_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alp_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_alp_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alp_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_alp_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alp_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_alp_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_alp_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_alp_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ast_result_normal"   : new FormControl({value: this.dataList[0].bio_ast_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ast_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ast_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ast_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ast_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ast_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_ast_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ast_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_ast_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bilirubin_result_normal"   : new FormControl({value: this.dataList[0].bio_bilirubin_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bilirubin_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_bilirubin_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bilirubin_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_bilirubin_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bilirubin_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_bilirubin_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_bilirubin_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_bilirubin_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_protein_result_normal"   : new FormControl({value: this.dataList[0].bio_protein_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_protein_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_protein_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_protein_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_protein_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_protein_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_protein_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_protein_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_protein_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_serum_albumin_result_normal"   : new FormControl({value: this.dataList[0].bio_serum_albumin_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_serum_albumin_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_serum_albumin_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_serum_albumin_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_serum_albumin_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_serum_albumin_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_serum_albumin_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_serum_albumin_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_serum_albumin_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_cprotein_result_normal"   : new FormControl({value: this.dataList[0].bio_cprotein_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_cprotein_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_cprotein_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_cprotein_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_cprotein_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_cprotein_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_cprotein_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_cprotein_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_cprotein_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t3_result_normal"   : new FormControl({value: this.dataList[0].bio_t3_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t3_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_t3_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t3_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_t3_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t3_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_t3_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t3_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_t3_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t4_result_normal"   : new FormControl({value: this.dataList[0].bio_t4_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t4_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_t4_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t4_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_t4_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t4_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_t4_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_t4_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_t4_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_freet4_result_normal"   : new FormControl({value: this.dataList[0].bio_freet4_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_freet4_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_freet4_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_freet4_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_freet4_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_freet4_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_freet4_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_freet4_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_freet4_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_tsh_result_normal"   : new FormControl({value: this.dataList[0].bio_tsh_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_tsh_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_tsh_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_tsh_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_tsh_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_tsh_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_tsh_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_tsh_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_tsh_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_parathyroid_result_normal"   : new FormControl({value: this.dataList[0].bio_parathyroid_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_parathyroid_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_parathyroid_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_parathyroid_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_parathyroid_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_parathyroid_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_parathyroid_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_parathyroid_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_parathyroid_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_count_result_normal"   : new FormControl({value: this.dataList[0].bio_wbc_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_wbc_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_wbc_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_wbc_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_wbc_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_diffcount_result_normal"   : new FormControl({value: this.dataList[0].bio_wbc_diffcount_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_diffcount_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_wbc_diffcount_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_diffcount_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_wbc_diffcount_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_diffcount_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_wbc_diffcount_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_wbc_diffcount_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_wbc_diffcount_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rbc_count_result_normal"   : new FormControl({value: this.dataList[0].bio_rbc_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rbc_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_rbc_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rbc_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_rbc_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rbc_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_rbc_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rbc_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_rbc_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haemoglobin_count_result_normal"   : new FormControl({value: this.dataList[0].bio_haemoglobin_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haemoglobin_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_haemoglobin_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haemoglobin_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_haemoglobin_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haemoglobin_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_haemoglobin_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haemoglobin_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_haemoglobin_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haematocrit_count_result_normal"   : new FormControl({value: this.dataList[0].bio_haematocrit_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haematocrit_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_haematocrit_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haematocrit_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_haematocrit_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haematocrit_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_haematocrit_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_haematocrit_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_haematocrit_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ferritin_count_result_normal"   : new FormControl({value: this.dataList[0].bio_ferritin_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ferritin_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ferritin_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ferritin_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_ferritin_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ferritin_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_ferritin_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_ferritin_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_ferritin_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rdw_count_result_normal"   : new FormControl({value: this.dataList[0].bio_rdw_count_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rdw_count_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_rdw_count_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rdw_count_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_rdw_count_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rdw_count_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_rdw_count_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_rdw_count_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_rdw_count_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_redbloodcellindice_result_normal"   : new FormControl({value: this.dataList[0].bio_redbloodcellindice_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_redbloodcellindice_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_redbloodcellindice_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_redbloodcellindice_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_redbloodcellindice_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_redbloodcellindice_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_redbloodcellindice_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_redbloodcellindice_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_redbloodcellindice_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mcv_result_normal"   : new FormControl({value: this.dataList[0].bio_mcv_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mcv_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mcv_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mcv_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mcv_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mcv_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_mcv_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mcv_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_mcv_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mch_result_normal"   : new FormControl({value: this.dataList[0].bio_mch_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mch_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mch_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mch_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mch_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mch_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_mch_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mch_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_mch_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mchc_result_normal"   : new FormControl({value: this.dataList[0].bio_mchc_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mchc_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mchc_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mchc_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mchc_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mchc_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_mchc_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mchc_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_mchc_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_reticulocyte_result_normal"   : new FormControl({value: this.dataList[0].bio_reticulocyte_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_reticulocyte_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_reticulocyte_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_reticulocyte_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_reticulocyte_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_reticulocyte_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_reticulocyte_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_reticulocyte_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_reticulocyte_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_platelet_result_normal"   : new FormControl({value: this.dataList[0].bio_platelet_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_platelet_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_platelet_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_platelet_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_platelet_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_platelet_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_platelet_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_platelet_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_platelet_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mpvplatelet_result_normal"   : new FormControl({value: this.dataList[0].bio_mpvplatelet_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mpvplatelet_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mpvplatelet_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mpvplatelet_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_mpvplatelet_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mpvplatelet_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_mpvplatelet_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_mpvplatelet_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_mpvplatelet_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_betaamyloid_result_normal"   : new FormControl({value: this.dataList[0].bio_betaamyloid_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_betaamyloid_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_betaamyloid_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_betaamyloid_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_betaamyloid_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_betaamyloid_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_betaamyloid_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_betaamyloid_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_betaamyloid_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmacroscopic_result_normal"   : new FormControl({value: this.dataList[0].bio_utsmacroscopic_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmacroscopic_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmacroscopic_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmacroscopic_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmacroscopic_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmacroscopic_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmacroscopic_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmacroscopic_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmacroscopic_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsph_result_normal"   : new FormControl({value: this.dataList[0].bio_utsph_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsph_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsph_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsph_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsph_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsph_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsph_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsph_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsph_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsglucose_result_normal"   : new FormControl({value: this.dataList[0].bio_utsglucose_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsglucose_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsglucose_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsglucose_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsglucose_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsglucose_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsglucose_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsglucose_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsglucose_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsgravity_result_normal"   : new FormControl({value: this.dataList[0].bio_utsgravity_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsgravity_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsgravity_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsgravity_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsgravity_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsgravity_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsgravity_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsgravity_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsgravity_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsnitrite_result_normal"   : new FormControl({value: this.dataList[0].bio_utsnitrite_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsnitrite_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsnitrite_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsnitrite_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsnitrite_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsnitrite_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsnitrite_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsnitrite_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsnitrite_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsleukocyte_result_normal"   : new FormControl({value: this.dataList[0].bio_utsleukocyte_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsleukocyte_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsleukocyte_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsleukocyte_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsleukocyte_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsleukocyte_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsleukocyte_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsleukocyte_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsleukocyte_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_cells_result_normal"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_cells_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_cells_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_cells_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_cells_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_cells_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_cells_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_cells_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_cells_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_cells_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_casts_result_normal"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_casts_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_casts_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_casts_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_casts_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_casts_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_casts_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_casts_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_casts_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_casts_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_crystals_result_normal"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_crystals_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_crystals_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_crystals_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_crystals_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_crystals_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_crystals_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_crystals_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_utsmicroscopy_crystals_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_utsmicroscopy_crystals_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_other_other"   : new FormControl({value: this.dataList[0].oral_agents_other_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_other_pramlintide"   : new FormControl({value: this.dataList[0].oral_agents_other_pramlintide,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_other"   : new FormControl({value: this.dataList[0].oral_agents_other,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_statins_dose"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_statins_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_other_dose"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_other_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_thiazolidinediones_dose"   : new FormControl({value: this.dataList[0].oral_agents_thiazolidinediones_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_sulphonyureas_dose"   : new FormControl({value: this.dataList[0].oral_agents_sulphonyureas_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fbg_date_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fbg_date_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fbg_result_of_recent_test"   : new FormControl({value: this.dataList[0].bio_fbg_result_of_recent_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fbg_date_of_last_test"   : new FormControl({value: this.dataList[0].bio_fbg_date_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fbg_result_of_last_test"   : new FormControl({value: this.dataList[0].bio_fbg_result_of_last_test,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "bio_fbg_result_normal"   : new FormControl({value: this.dataList[0].bio_fbg_result_normal,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_ace_inhibitors_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_ace_inhibitors_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "oral_agents_other_dose"   : new FormControl({value: this.dataList[0].oral_agents_other_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_other_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_other_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_cachannel_blockers_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_cachannel_blockers_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_diuretics_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_diuretics_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_beta_blockers_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_beta_blockers_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_hypertensive_arbs_dose"   : new FormControl({value: this.dataList[0].anti_hypertensive_arbs_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
		  "anti_dyslipidemia_fibrates_dose"   : new FormControl({value: this.dataList[0].anti_dyslipidemia_fibrates_dose,disabled: this.disableInput },[Validators.maxLength(200)]),
	});
	 
		  this.getFormAttributeValues();
	  }
	openDialog(id) {
		const dialogRef = this.dialog.open(ConfirmationDialog,{
		  data:{
			message: 'Are you sure want to delete?',
			buttonText: { 
			  ok: 'Yes',
			  cancel: 'No'
			}
		  }
		});
	
		dialogRef.afterClosed().subscribe((confirmed: boolean) => {
		  if (confirmed) {
			this.deleteForm(id);
			const a = document.createElement('a');
			a.click();
			a.remove();
		  }
		});
	  }
	
	editForm(id) {
		this.subheaderService.showSaveButton(true);
		this.router.navigate(['/form-management/health/edit', id], { relativeTo: this.activatedRoute });
	}
	deleteForm(id){
	if(this.dataSource.length){
	const dialogRef = this.dialog.open(ConfirmationDialog,{
		data:{
		  message: 'Are you sure want to delete?',
		  buttonText: { 
			ok: 'Yes',
			cancel: 'No'
		  }
		}
	  });
	//   const snack = this._snackBar.open('Snack bar open before dialog');
  
	  dialogRef.afterClosed().subscribe((confirmed: boolean) => {
		if (confirmed) {
				this.splashService.splashScreen({isLoading : true, message : "Deleting" })
		
				this._vService.deleteForm(id).subscribe((res)=> {
				if (res) {
				// this.isSelected = !this.isSelected;
				// this.fetchList();
					// this.createForm();
				this.getTotalCount();
				this.fetchList();
					this.splashService.splashScreen({isLoading : false, message : "" })
				  this._snackBar.open("Data has been deleted successfully!", 'Ok', {
					duration: 5000,
					verticalPosition: 'bottom',
					horizontalPosition: 'center'
				  });
				}
			  })
			
		  const a = document.createElement('a');
		  a.click();
		  a.remove();
		}
	  });
	}
}
}
