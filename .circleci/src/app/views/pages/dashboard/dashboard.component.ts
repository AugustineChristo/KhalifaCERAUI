import { Component, OnInit ,OnDestroy,ChangeDetectorRef} from '@angular/core';
import { LayoutConfigService, SparklineChartOptions } from '../../../core/_base/layout';
import { SubheaderService } from '../../../core/_base/layout';
import {VitamindService} from "@services/vitamind.form.service";
import { Subscription,Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {SplashScreenService} from "../../../core/services/splash-screen-service";

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit,OnDestroy {
	loading : boolean = false;
	userRights: any = [];
	loading$: boolean = true;
	username: string;

	lastQuery = {
		filter :  '',
		sortOrder : 2,
		sortField : 1,
		pageNumber : 0,
		pageSize : 10,
		templateId : 1,
		totalRecords : 0
	};
   currentIndex = 0;
	 data = [];
	 private subscriptions: Subscription[] = [];
	 private unsubscribe: Subject<any>;

     tempName = [
		//  {name : "Metabolic Disorder" , tempId : 1, link : 'metabolic-disorder'},
		//  {name : "Substance Dependence" , tempId : 2, link : 'substance-dependence'},
		//  {name : "Vitamin-D" , tempId : 4, link : 'vitamin-d'},
		//  {name : "1000 Arab Genome" , tempId : 5, link : '1000-arab-genome'},
		//  {name : "Obesity" , tempId : 6, link : 'obesity'},
		//  {name : "Osteoporosis" , tempId : 7, link : 'osteoporosis'},
		//  {name : "T1D" , tempId : 8, link : 't1d'},
		//  {name : "Emirates Family Registry" , tempId : 9, link : 'new-form'},
		//  {name : "Precision Medicine" , tempId : 10, link : 'hsa'},
		//  {name : "COVID-19" , tempId : 11, link : 'covid19'}
	 ]
	displayedColumns = [ 'id', '1', '2', 'actions'];
	constructor(private subheaderService: SubheaderService,private _vService : VitamindService,private cdr: ChangeDetectorRef,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private splashService : SplashScreenService) {
		// this.unsubscribe = new Subject();
	}

	ngOnInit(): void {
		this.subheaderService.setTitle('Dashboard');
		this.subheaderService.showPrintButton(false);
		this.triggerList();
		this.getTabRights();
	}
	getTabRights(){
		this.userRights=[];
    localStorage.removeItem('userRights');
	//console.log('test',this.userRights)
		this.loading$ =true;
	this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
	this.username = localStorage.getItem('username');
	this._vService.getTabRights(this.username,14,1).subscribe((res : any[])=>{
		
		const propertyValues = Object.values(res);
		var userRights = JSON.stringify(propertyValues);
		// //console.log('menus',menus);
		this.loading$ =false;
		this.splashService.splashScreen({isLoading : false, message : "" })
		this.cdr.detectChanges();
		// this.userRights = res[0].sectionid;
				localStorage.setItem("userRights",userRights);
				//console.log('userRights',userRights)
		//this.searchInput.nativeElement.focus();
	});
	}
	triggerList(){
		this.loading = true;

		let data = [];
		data["username"] = localStorage.getItem('username');
		this.subscriptions.push(this._vService.getTemplatesName(data).subscribe(
            results => {
			Promise.resolve(null).then(() => {

                this.tempName = results;
				//console.log('listitime',this.tempName);
				if(this.currentIndex < this.tempName.length) {
					this.lastQuery.templateId = this.tempName[this.currentIndex].Templateid;
					this.getList();
					this.cdr.detectChanges();

				}else{
				this.loading= false;
				this.cdr.detectChanges();
				}
                // this.filteredNationality.next(this.listtemplates.slice());
                // this.cdr.detectChanges();
			})
		}
			))
	}


	ngOnDestroy(): void {
		// this.unsubscribe.next();
		// this.unsubscribe.complete();
		this.loading = false;
		this.subscriptions.forEach(sb => sb.unsubscribe());

	}
	getList(){
		this.subscriptions.push(this._vService.getList(this.lastQuery).subscribe((res : any[])=>{
			Promise.resolve(null).then(() => {
				console.log(res);
			if(res[0].result=== "")
			this.data = [];
				else
				this.data.push({data : res ,toggle : false ,link : this.tempName[this.currentIndex].Link,name : this.tempName[this.currentIndex].title});
          	 this.currentIndex+=1;
              this.triggerList();
			})

		}));
	}
}
