
// Angular
import { Component, OnInit, OnDestroy , ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first } from 'rxjs/operators';

import { SubheaderService, LayoutConfigService } from '../../../../../core/_base/layout';
import { LayoutUtilsService, MessageType } from '../../../../../core/_base/crud';
// Services and Models
import {
	EForm,
	FormUpdated,
	// Address,
	// SocialNetworks,
	selectHasFormsInStore,
	selectFormById,
	FormOnServerCreated,
	selectLastCreatedFormId,
	selectFormsActionLoading
} from '../../../../../core/forms';

// import {DocUploadComponent} from "../_subs/doc-upload/doc-upload.component";
import {  HealthPersonalDetailsComponent } from '../_subs/personal-details/personal-details.component';
import { HealthPhysicianComponent } from '../_subs/physician/physician.component';
import{ HealthRegisterNurseComponent} from "../_subs/register-nurse/register-nurse.component";
import{ HealthResearchTeamMemberComponent} from "../_subs/research-teammember/research-teammember.component";

@Component({
  selector: 'kt-health-edit',
  templateUrl: './health-edit.component.html'
})
export class HealthEditComponent implements OnInit, OnDestroy {

	selectedTab: number = 0;
	loading$: Observable<boolean>;
	eformForm: FormGroup;
	hasFormErrors: boolean = false;
	filteredNationalities: Observable<string[]>;
	// Private properties
	formId : number;
	isLoading : boolean;
	isPrint : boolean = false;
	private subscriptions: Subscription[] = [];

    @ViewChild('appHealthPersonalDetails')appHealthPersonalDetails: HealthPersonalDetailsComponent;
	@ViewChild('appHealthPhysicianDetails')appHealthPhysicianDetails: HealthPhysicianComponent;
	@ViewChild('appHealthRegisterNurse')appHealthRegisterNurse: HealthRegisterNurseComponent;
	@ViewChild('appHealthResearchTeamMember')appHealthResearchTeamMember: HealthResearchTeamMemberComponent;
	
	constructor(private activatedRoute: ActivatedRoute,
		private router: Router,
		private subheaderService: SubheaderService,
		private layoutUtilsService: LayoutUtilsService,
		private layoutConfigService: LayoutConfigService) { this.selectedTab = 0; }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		const routeSubscription =  this.activatedRoute.params.subscribe(params => {
			const id = params['id'];
			if(id) {
				this.isLoading = true;
				this.formId = id;

			}
		});
		this.subheaderService.setTitle('Health');
	}

	ngOnDestroy() {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}


	reset(){

	}

	onSubmit() {
		if(this.selectedTab == 0){
      this.appHealthPersonalDetails.onSubmit();
    }
    else if(this.selectedTab == 1){
			this.appHealthPhysicianDetails.onSubmit();
    }
    else if(this.selectedTab == 2){
			this.appHealthRegisterNurse.onSubmit();
    }
	else if(this.selectedTab == 3){
		this.appHealthResearchTeamMember.onSubmit();
	}

	}


    //
	//	const editedForm = this.prepareForm();
    //
	//	if (editedForm.id > 0) {
	//		this.updateForm(editedForm, withBack);
	//		return;
	//	}
    //
	//	this.addForm(editedForm, withBack);
	//}

	/**
	 * Returns prepared data for save
	 */

	/**
	 * Returns component title
	 */
	//getComponentTitle() {
	//	let result = 'Create form';
	//	if (!this.eform || !this.eform.id) {
	//		return result;
	//	}
    //
	//	result = `Edit form - ${this.eform.sampleId}`;
	//	return result;
	//}

	/**
	 * Close Alert
	 *
	 * @param $event: Event
	 */
	//onAlertClose($event) {
	//	this.hasFormErrors = false;
	//}

		/**
	 * Filter nationality
	 *
	 * @param val: string
	 */

}
