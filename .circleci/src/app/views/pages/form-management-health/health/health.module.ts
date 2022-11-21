import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartialsModule } from '../../../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HealthComponent } from '@components/health/health/health.component';
import { HealthEditComponent } from '@components/health/health-edit/health-edit.component';
import { HealthPrintComponent } from '@components/health/health-print/health-print.component';

import { HealthPersonalDetailsComponent } from '@components/health/_subs/personal-details/personal-details.component';
import { HealthPhysicianComponent } from '@components/health/_subs/physician/physician.component';
import { HealthRegisterNurseComponent } from '@components/health/_subs/register-nurse/register-nurse.component';
import { HealthResearchTeamMemberComponent } from '@components/health/_subs/research-teammember/research-teammember.component';


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
MatFormFieldControl
} from '@angular/material';



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
    HealthPersonalDetailsComponent,
    HealthRegisterNurseComponent,
    HealthResearchTeamMemberComponent
  ],
  imports: [
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
    MatDialogModule,
  ]
})
export class HealthModule { }
