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

import { SubheaderService } from './../../../../core/_base/layout';
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";
import {ConfirmationDialog} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'kt-t1d',
  templateUrl: './t1d.component.html'
})
export class T1DComponent implements OnInit {
  // Table fields
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
    templateId : 8, // 4,
    totalRecords : 0
  };

  selection;

  private subscriptions: Subscription[] = [];

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private _snackBar: MatSnackBar,
      private dialog: MatDialog,
      private subheaderService: SubheaderService,
      private cdr: ChangeDetectorRef,
      private splashService : SplashScreenService,
      private _vService : VitamindService
  ) { }


  fetchList(){
    this.dataSource = [];
    this.loading$ =true;
    this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
    this._vService.getList(this.lastQuery).subscribe((res : any[])=>{
      if(res[0].result=== "")
      this.dataSource = [];
        else
        this.dataSource = res;
      this.loading$ =false;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this.cdr.detectChanges();
    });
  }
  getTotalCount(){
    this._vService.getTotalRecordsCount(8,this.lastQuery.filter).subscribe((res : any[])=>{
      if(res)
      this.lastQuery.totalRecords = res[0]["totalrecords"];
    })
  }
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
    this.subheaderService.setTitle('T1D');
    this.subheaderService.showPrintButton(false);
  }

    getPaginatorData(event)
    {
      this.lastQuery.pageSize = event.pageSize;
      this.lastQuery.pageNumber = event.pageIndex;
      this.fetchList();
    }
    editForm(id) {
    this.router.navigate(['/form-management/t1d-form', id], { relativeTo: this.activatedRoute });
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
