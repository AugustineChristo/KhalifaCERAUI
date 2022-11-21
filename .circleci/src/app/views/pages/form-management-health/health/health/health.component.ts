
import { AfterViewInit, AfterViewChecked, Input } from '@angular/core';
// Angular
import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Material
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
// RXJS
import { debounceTime, distinctUntilChanged, tap, skip, take, delay } from 'rxjs/operators';
import { fromEvent, merge, Observable, of, Subscription } from 'rxjs';


import { SubheaderService } from '../../../../../core/_base/layout';
import {VitamindService} from "../../../../../core/services/vitamind.form.service";
import {SplashScreenService} from "../../../../../core/services/splash-screen-service";


@Component({
  selector: 'kt-health',
  templateUrl: './health.component.html'
})
export class HealthComponent implements OnInit {
	loading$: boolean = true;
	dataSource: any = [];
	displayedColumns = [ 'id', '1', '2', 'actions'];
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
		templateId : 11,
		totalRecords : 0
	};
	selection;
	private subscriptions: Subscription[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private _vService : VitamindService,
		private router: Router,
		private subheaderService: SubheaderService,
		private splashService : SplashScreenService,
		private cdr: ChangeDetectorRef) { }

	fetchList(){
		this.dataSource = [];
		this.loading$ =true;
		this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
		this._vService.getList(this.lastQuery).subscribe((res : any[])=>{
			this.dataSource = res;
			this.loading$ =false;
			this.splashService.splashScreen({isLoading : false, message : "" })
			this.cdr.detectChanges();
			//this.searchInput.nativeElement.focus();
		});
	}
	getTotalCount(){
		this._vService.getTotalRecordsCount(11,this.lastQuery.filter).subscribe((res : any[])=>{
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
		this.sort.sortChange.subscribe((data) => {
			this.lastQuery.sortField = data.active == "1"? 1 : 0;
			this.lastQuery.sortOrder = data.direction == "asc" ? 0 : 1 ;
			this.fetchList();
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
		this.subheaderService.setTitle('Health');
		this.subheaderService.showPrintButton(false);
	}

	getPaginatorData(event)
	{

		this.lastQuery.pageSize = event.pageSize;
		this.lastQuery.pageNumber = event.pageIndex;
		this.fetchList();
	}

	editForm(id) {
		this.router.navigate(['/form-management/health/edit', id], { relativeTo: this.activatedRoute });
	}

}
