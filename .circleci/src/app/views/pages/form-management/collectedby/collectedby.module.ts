import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartialsModule } from '../../../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { collectedbyComponent } from '@components/collectedby/collectedby/collectedby.component';
import { collectedbyEditComponent } from '@components/collectedby/collectedby-edit/collectedby-edit.component';
import { collectedbyPrintComponent } from '@components/collectedby/collectedby-print/collectedby-print.component';
import { collectedbyPersonalDetailsComponent } from '@components/collectedby/_subs/personal-details/personal-details.component';


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
        component: collectedbyComponent,
      }
      ,
      {
        path: 'add',
        component: collectedbyEditComponent,
      },
      {
        path: 'edit/:id',
        component: collectedbyEditComponent,
      },
      {
        path: 'print/:id',
        component: collectedbyPrintComponent,
      }
    ]


@NgModule({
  declarations: [
    collectedbyComponent,
    collectedbyEditComponent,
    collectedbyPrintComponent,

    collectedbyPersonalDetailsComponent,
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
export class collectedbyModule { }
