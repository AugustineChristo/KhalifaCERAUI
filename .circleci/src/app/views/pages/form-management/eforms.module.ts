// Angular
import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

// import { MaterialFileInputModule } from 'ngx-material-file-input';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartialsModule } from '../../partials/partials.module';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService } from '../../../core/_base/crud';
// Shared
import { ActionNotificationComponent } from '../../partials/content/crud';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MAT_DATETIME_FORMATS } from "@mat-datetimepicker/core";
import { EFormsComponent } from './eforms.component'
// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule,
MatFormFieldControl,
MatFormFieldModule,
MAT_CHECKBOX_CLICK_ACTION,
MAT_DATE_LOCALE,
DateAdapter
} from '@angular/material';
import {
	formsReducer,
	FormEffects
} from '../../../core/forms';
import { SubstanceDependenceComponent } from './substance-dependence/substance-dependence.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

import { 
	OwlDateTimeModule, OWL_DATE_TIME_FORMATS,
	OwlNativeDateTimeModule 
  } from 'ng-pick-datetime';
import { ReportingToolComponent } from './reporting-tool/reporting-tool.component';
import {AuthGuard} from "../../../core/auth/_guards/auth.guard";
import {ReportingToolChildComponent} from "./reporting-tool-child/reporting-tool-child.component";
import {ConfirmationDialog} from './confirmation-dialog/confirmation-dialog.component';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MAT_DATE_FORMATS } from '@angular/material';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, NgxMatDateFormats, NgxMatDateAdapter, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { CustomNgxDatetimeAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from './health/CustomNgxDatetimeAdapter';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from './health/MomentUtcDateAdapter';
// OWLCustomDatetimeAdapter
export const MY_MOMENT_FORMATS = {
	// parse: {
	// 	dateInput:  'L, LT'
	//   },
	//   display: {
	// 	dateInput: 'L, LT',
	// 	monthYearLabel: 'MMM YYYY',
	// 	dateA11yLabel: 'L',
	// 	monthYearA11yLabel: 'MMMM YYYY',
	//   }
	parseInput: 'l LT',
    fullPickerInput: 'l LT',
    datePickerInput: 'l',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
	};
const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
	parse: {
	  dateInput:  'L, LT'
	},
	display: {
	  dateInput: 'L, LT',
	  monthYearLabel: 'MMM YYYY',
	  dateA11yLabel: 'L',
	  monthYearA11yLabel: 'MMMM YYYY',
	}
  };
  export const MY_DATE_FORMAT = { parse : { dateInput: 'DD/MM/YYYY HH:mm', }, display: { dateInput: 'DD/MM/YYYY HH:mm', monthYearLabel: 'MM/YYYY', } };
const routes: Routes = [
	{
		path: '',
		component: EFormsComponent,
		children: [

			{
				path: 'reporting-tool',
				component: ReportingToolComponent
			},
			{
				path: 'confirm',
				component:ConfirmationDialog
			},
			{
				path: 'covid19V2',
				loadChildren: () => import('app/views/pages/form-management/covid19V2/covid19V2.module').then(m => m.covid19V2Module)
			 },
			{
			   path: 'covid19',
			   loadChildren: () => import('app/views/pages/form-management/covid19/covid19.module').then(m => m.Covid19Module)
			},
             {
				path: 'new-form',
				loadChildren: () => import('app/views/pages/form-management/new-form/newform.module').then(m => m.NewFormModule)
			 },
			 {
				path: 'hsa',
				loadChildren: () => import('app/views/pages/form-management/hsa/hsa.module').then(m => m.HsaModule)
             },{
				path: '1000-arab-genome',
				loadChildren: () => import('app/views/pages/form-management/k1000-arab-genone/k1000-arab-genone.module').then(m => m.K100ArabGenone)
             },{
				path: 'metabolic-disorder',
				loadChildren: () => import('app/views/pages/form-management/metabolic-disorder/metabolic-disorder.module').then(m => m.MetabolicDisorderModule)
             },{
				path: 'osteoporosis',
				loadChildren: () => import('app/views/pages/form-management/osteoporosis/osteoporosis.module').then(m => m.OsteoporosisModule)
              },{
				path: 'obesity',
				loadChildren: () => import('app/views/pages/form-management/obesity/obesity.module').then(m => m.ObisityModule)
              },{
	            path: 'vitamin-d',
			    loadChildren: () => import('app/views/pages/form-management/vitamin-d/vitamin-d.module').then(m => m.VitaminDModule)
               },{
	            path: 't1d',
			    loadChildren: () => import('app/views/pages/form-management/t1d/t1d.module').then(m => m.T1dModule)
               },{
	            path: 'substance-dependence',
			    loadChildren: () => import('app/views/pages/form-management/substance-dependence/substance.module').then(m => m.SubstanceModule)
               },{
	            path: 'diabetes',
			    loadChildren: () => import('app/views/pages/form-management/diabetes/diabetes.module').then(m => m.DiabetesModule)
			   },
			   {
	            path: 'health',
			    loadChildren: () => import('app/views/pages/form-management/health/health.module').then(m => m.HealthModule)
			   },           
			{
				path: 'usermaster',
				loadChildren: () => import('app/views/pages/form-management/usermaster/usermaster.module').then(m => m.usermasterModule)
			},
			{
				path: 'usergroup',
				loadChildren: () => import('app/views/pages/form-management/usergroup/usergroup.module').then(m => m.usergroupModule)
			},
			{
				path: 'collectionpoint',
				loadChildren: () => import('app/views/pages/form-management/collectionpoint/collectionpoint.module').then(m => m.collectionpointModule)
			}, {
                path: 'grouprights',
                loadChildren: () => import('app/views/pages/form-management/grouprights/grouprights.module').then(m => m.grouprightsModule)
             },

			{
				path: 'locations',
				loadChildren: () => import('app/views/pages/form-management/locations/locations.module').then(m => m.locationsModule)
			},

			{
				path: 'collectedby',
				loadChildren: () => import('app/views/pages/form-management/collectedby/collectedby.module').then(m => m.collectedbyModule)
			}


		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,MatFormFieldModule,
		MaterialFileInputModule,MatDatetimepickerModule,MatNativeDatetimeModule,
		NgxMatDatetimePickerModule,
		NgxMatTimepickerModule,NgxMatNativeDateModule, MatDatepickerModule,
		// use this if you want to use native javascript dates and INTL API if available
		// MatNativeDatetimeModule,
		MatNativeDatetimeModule,NgxMaterialTimepickerModule,
		MatDatetimepickerModule,OwlDateTimeModule, 
		OwlNativeDateTimeModule,
	],
	providers: [
		//InterceptService,
		//{
		//	provide: HTTP_INTERCEPTORS,
		//	useClass: InterceptService,
		//	multi: true
		//},
		// { provide : DateAdapter, useClass: MomentDateAdapter, deps : [MAT_DATE_LOCALE] },
		//  { provide : MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
		{provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
		{
			provide: MAT_DATETIME_FORMATS,
			useValue: {
			  parse: { dateInput:  'L, LT'},
			  display: {
				dateInput: {
				  year: "numeric",
				  month: "2-digit",
				  day: "2-digit"
				},
				monthInput: {
				  month: "long"
				},
				datetimeInput: {
				  year: "numeric",
				  month: "2-digit",
				  day: "2-digit",
				  hour: "2-digit",
				  minute: "2-digit"
				},
				timeInput: {
				  hour: "2-digit",
				  minute: "2-digit"
				},
				monthYearLabel: {
				  year: "numeric",
				  month: "short"
				},
				dateA11yLabel: {
				  year: "numeric",
				  month: "long",
				  day: "numeric"
				},
				monthYearA11yLabel: {
				  year: "numeric",
				  month: "long"
				},
			  },
			}
		  },	{
			  provide: NgxMatDateAdapter,
			  useClass: CustomNgxDatetimeAdapter,
			  deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
			},
			{ provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
		  
			{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: { clickAction: 'noop' }},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '400px'
			}
		},
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService
	],
	entryComponents: [
		ActionNotificationComponent,
	],
	declarations: [
		EFormsComponent,


		ConfirmationDialog,

		// Reporting Tool
		ReportingToolComponent,
		ReportingToolChildComponent




]
})
export class EFormsModule { }
