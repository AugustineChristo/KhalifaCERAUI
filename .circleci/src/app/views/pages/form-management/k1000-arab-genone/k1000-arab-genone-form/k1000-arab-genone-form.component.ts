// Angular
import { Component, OnInit, OnDestroy , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

import { SubheaderService, LayoutConfigService } from '../../../../../core/_base/layout';
import { LayoutUtilsService, MessageType } from '../../../../../core/_base/crud';
import {AgParticipantPersonalComponent} from "../_subs/ag-participant-personal/ag-participant-personal.component";
import {AgParticipantLifestyleComponent} from "../_subs/ag-participant-lifestyle/ag-participant-lifestyle.component";
import {AgElectrocardiographyComponent} from "../_subs/ag-electrocardiography/ag-electrocardiography.component";
import {AgParticipantClinicalComponent} from "../_subs/ag-participant-clinical/ag-participant-clinical.component";
import {AgFamilyPedigreeComponent} from "../_subs/ag-family-pedigree/ag-family-pedigree.component";
import {AgFamilyHistoryComponent} from "../_subs/ag-family-history/ag-family-history.component";
import {AgParticipantMedicalHistoryComponent} from "../_subs/ag-participant-medical-history/ag-participant-medical-history.component";
import {AgParticipantFoodIntakeComponent} from "../_subs/ag-participant-food-intake/ag-participant-food-intake.component";
import {DocUploadComponent} from "../_subs/doc-upload/doc-upload.component";
@Component({
  selector: 'kt-k1000-arab-genone-form',
  templateUrl: './k1000-arab-genone-form.component.html',
})
export class K1000ArabGenoneFormComponent implements OnInit {

  selectedTab: number = 0;
  loading$: Observable<boolean>;
  hasFormErrors: boolean = false;
  formId : number;
  isLoading : boolean;
  isPrint : boolean = false;
  private subscriptions: Subscription[] = [];

  @ViewChild('appParticipation')appParticipation: AgParticipantPersonalComponent;
  @ViewChild('appLifestyle')appLifestyle: AgParticipantLifestyleComponent;
  @ViewChild('appFoodIntake')appFoodIntake: AgParticipantFoodIntakeComponent;
  @ViewChild('appMedicalHistory')appMedicalHistory: AgParticipantMedicalHistoryComponent;
  @ViewChild('appFamilyHistory')appFamilyHistory: AgFamilyHistoryComponent;
  @ViewChild('appFamilyPedigree')appFamilyPedigree: AgFamilyPedigreeComponent;
  @ViewChild('appClinical')appClinical: AgParticipantClinicalComponent;
  @ViewChild('appElectrocardiography')appElectrocardiography: AgElectrocardiographyComponent;
  @ViewChild('appDocUpload')appDocUpload: DocUploadComponent;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private subheaderService: SubheaderService
  ) { this.selectedTab = 0; }


  ngOnInit() {
    const routeSubscription =  this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(id) {
        this.isLoading = true;
        this.formId = id;

      }
    });
    this.subheaderService.setTitle('1000 Arab Genome');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }


  reset(){

  }

  onSubmit() {
    if (this.selectedTab == 0) {
      this.appParticipation.onSubmit();
    }else if(this.selectedTab == 1){
      this.appLifestyle.onSubmit();
    }else if(this.selectedTab == 2){
      this.appFoodIntake.onSubmit();
    }else if(this.selectedTab == 3){
      this.appMedicalHistory.onSubmit();
    }else if(this.selectedTab == 4){
      this.appFamilyHistory.onSubmit();
    }else if(this.selectedTab == 5){
      this.appFamilyPedigree.onSubmit();
    }else if(this.selectedTab == 6){
      this.appClinical.onSubmit();
    }else if(this.selectedTab == 7){
      this.appElectrocardiography.onSubmit();
    }else if(this.selectedTab == 8){
      this.appDocUpload.onSubmit();
    }
  }


}
