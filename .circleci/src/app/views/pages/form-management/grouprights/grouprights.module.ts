import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartialsModule } from '../../../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { grouprightsComponent } from '@components/grouprights/grouprights/grouprights.component';
import { grouprightsEditComponent } from '@components/grouprights/grouprights-edit/grouprights-edit.component';
import { grouprightsPrintComponent } from '@components/grouprights/grouprights-print/grouprights-print.component';
import { grouprightsPersonalDetailsComponent } from '@components/grouprights/_subs/personal-details/personal-details.component';


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

//import { HsaEditComponent } from './hsa-edit/hsa-edit.component';



const routes: Routes = [
      {
        path: '',
        component: grouprightsComponent,
      }
      ,
      {
        path: 'add',
        component: grouprightsEditComponent,
      },
      {
        path: 'edit/:id',
        component: grouprightsEditComponent,
      },
      {
        path: 'print/:id',
        component: grouprightsPrintComponent,
      }
    ]


@NgModule({
  declarations: [
    grouprightsComponent,
    grouprightsEditComponent,
    grouprightsPrintComponent,

    grouprightsPersonalDetailsComponent,
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
export class grouprightsModule { }
