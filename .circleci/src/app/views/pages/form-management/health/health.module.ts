import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartialsModule } from '../../../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { HealthComponent } from '@components/health/health/health.component';
import { HealthEditComponent } from '@components/health/health-edit/health-edit.component';
import { HealthPrintComponent } from '@components/health/health-print/health-print.component';

import { 
  OwlDateTimeModule, OWL_DATE_TIME_FORMATS,
  OwlNativeDateTimeModule, 
  OWL_DATE_TIME_LOCALE,
  DateTimeAdapter
} from 'ng-pick-datetime';
import { HealthPersonalDetailsComponent } from '@components/health/_subs/personal-details/personal-details.component';
import { HealthPhysicianComponent } from '@components/health/_subs/physician/physician.component';
import { HealthRegisterNurseComponent } from '@components/health/_subs/register-nurse/register-nurse.component';
import { HealthResearchTeamMemberComponent } from '@components/health/_subs/research-teammember/research-teammember.component';
import { HealthPhysiciansComponent } from '@components/health/_subs/physicians/physicians.component';
import {DocUploadComponent} from "@components/health/_subs/doc-upload/doc-upload.component";
// import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

// import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MAT_DATETIME_FORMATS } from "@mat-datetimepicker/core";
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
MAT_DATE_LOCALE,
MAT_DATE_FORMATS,
DateAdapter,
} from '@angular/material';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HealthPhysicianBioChemicalComponent } from './_subs/physiciansbiochemical/physiciansbiochemical.component';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, NgxMatDateFormats, NgxMatDateAdapter, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { CustomNgxDatetimeAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@components/health/CustomNgxDatetimeAdapter';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from './MomentUtcDateAdapter';
// import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
export const MY_MOMENT_FORMATS = {
  // parse: {
	//   dateInput:  'DD/MM/YYYY'
	// },
	// display: {
	//   dateInput: 'DD/MM/YYYY',
	//   monthYearLabel: 'MMM YYYY',
	//   dateA11yLabel: 'L',
	//   monthYearA11yLabel: 'MMMM YYYY',
	// }
  fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
  parseInput: 'DD/MM/YYYY HH:mm:ss',
  datePickerInput: 'DD/MM/YYYY HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
  // parseInput: 'l LT',
  // fullPickerInput: 'l LT',
  // datePickerInput: 'l',
  // timePickerInput: 'LT',
  // monthYearLabel: 'MMM YYYY',
  // dateA11yLabel: 'LL',
  // monthYearA11yLabel: 'MMMM YYYY',
};
const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
	parse: {
	  dateInput:  'L, LTS'
	},
	display: {
	  dateInput: 'DD/MM/YYYY, HH:mm',
	  monthYearLabel: 'MMM YYYY',
	  dateA11yLabel: 'L',
	  monthYearA11yLabel: 'MMMM YYYY',
	}
  };
  export const MY_DATE_FORMAT = { parse : { dateInput: 'DD/MM/YYYY HH:mm', }, display: { dateInput: 'DD/MM/YYYY HH:mm', monthYearLabel: 'MM/YYYY', } };

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


const routes: Routes = [
      {
        path: '',
        component: HealthComponent,
	  },
      {
        path: 'add',
        component: HealthEditComponent,
      },
      {
        path: 'edit/:id',
        component: HealthEditComponent,
      },
      {
        path: 'print/:id',
        component: HealthPrintComponent,
      }
    ]


@NgModule({
  
  declarations: [
    HealthComponent,
    HealthEditComponent,
    HealthPrintComponent,
    HealthPhysicianComponent,
    HealthPhysicianBioChemicalComponent,
    HealthPhysiciansComponent,
    HealthPersonalDetailsComponent,
    HealthRegisterNurseComponent,DocUploadComponent,
    HealthResearchTeamMemberComponent,

  ],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDatepickerModule,MatDatetimepickerModule,MatNativeDatetimeModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,MaterialFileInputModule,
    MatDatepickerModule,
    // use this if you want to use native javascript dates and INTL API if available
    // MatNativeDatetimeModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
		NgxMatTimepickerModule,
		NgxMatMomentModule,NgxMaterialTimepickerModule,
          NgxMatDatetimePickerModule,OwlDateTimeModule, 
          OwlNativeDateTimeModule,
  ],
	providers: [
    // {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
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
      },
    // {
    //   provide: MAT_DATETIME_FORMATS,
     
    //   useValue: {
    //     // parse: {
    //     //   dateInput:  'L, LTS'
    //     // },
    //     // display: {
    //     //   dateInput: 'DD/MM/YYYY, HH:mm',
    //     //   monthYearLabel: 'MMM YYYY',
    //     //   dateA11yLabel: 'L',
    //     //   monthYearA11yLabel: 'MMMM YYYY',
    //     // }
    //     parse: {
    //       dateInput: 'DD/MM/YYYY, HH:mm',
    //       monthInput: "MMMM",
    //       timeInput: "LTS",
    //       datetimeInput: "L LT"
    //     },
    //     display: {
    //       dateInput: 'DD/MM/YYYY, HH:mm',
    //       monthInput: "MMMM",
    //       datetimeInput: "L LT",
    //       timeInput: "LT",
    //       monthYearLabel: "MMM YYYY",
    //       dateA11yLabel: "L",
    //       monthYearA11yLabel: "MMMM YYYY",
    //       popupHeaderDateLabel: "ddd, DD MMM"
    //     }
    //   }
    // },
    {
    provide: NgxMatDateAdapter,
    useClass: CustomNgxDatetimeAdapter,
    deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },
  { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
]
})
export class HealthModule { }
