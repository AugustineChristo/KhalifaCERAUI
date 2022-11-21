
import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentInteractionService } from "@services/component-interaction.service";
import { FormBuilder, FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { PrepareFinalForm } from "../../../../../../core/_utils/prepareFinalForm";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first, reduce } from 'rxjs/operators';
import { mediaPath } from '../../../../../../core/_utils/api.url';
import { VitamindService } from "@services/vitamind.form.service";
import { SplashScreenService } from "@services/splash-screen-service";

import { Sections } from '../../../../../../core/_utils/countries';
const AVAILABLE_SECTIONS: any[] = Sections;

import { Menus } from '../../../../../../core/_utils/countries';
const AVAILABLE_MENUS: any[] = Menus;

import { Injectable } from '@angular/core';


@Component({
  selector: 'kt-grouprights-personal-details',
  templateUrl: './personal-details.component.html'
})
export class grouprightsPersonalDetailsComponent implements OnInit {
  form: FormGroup;
  title: string = "Group Rights";
  @Input('formData') formId: any;
  formData: any;
  formAttributes: any;

  loading$: boolean = true;

  filteredSections: Observable<string[]>;

  filteredMenus: Observable<string[]>;

  filteredMenu: any[];
  filteredUserGroup: any[];

  UserEmail: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  username: string;

  @Input('disableInput') disableInput: boolean;
  saveFormId: any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  url: string | ArrayBuffer = '';
  fileToUpload: File = null;
  fileUploadSuccess: boolean = false;
  isSampleSubmit: boolean = false;
  isFormSubmit: boolean = false;
  mediaPath: string = mediaPath;
  userRights: [];
  GroupName: any = '';
  TemplateID: any = 0;
  SectionID: any = 0;
  MandatoryFields :any;
  constructor(private _service: VitamindService,
    private eformFB: FormBuilder,
    private _interactionService: ComponentInteractionService,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    private splashService: SplashScreenService,
    private finalFormValues: PrepareFinalForm) { }

  ngOnInit() {

    this.createForm();
    this.getMenu();
    this.getUserGroup();

    if (!this.formId)
      this._interactionService._Refid$.subscribe((id) => {
        this.form.patchValue({ "savedformID": id })

      })
    else {
      this.splashService.splashScreen({ isLoading: true, message: "LOADING" })
      this._service.getQuestionnaire(this.formId, 18).subscribe((res: any[]) => {
        this.formData = res;
        this.saveFormId = this.formId;
        this.splashService.splashScreen({ isLoading: false, message: "" })
        if (res.length)
          this.prepareForm();
        this.GroupName = res[0]["name"];
        this.TemplateID = res[0]["templateid"];
        this.SectionID = res[0]["sectionid"];
        /*      console.log(" Group Name :"+this.GroupName); 
             console.log(res); */
      })
    }
  }

  createForm() {
    this.form = this.eformFB.group({
      "savedformID": new FormControl({ value: 0, disabled: this.disableInput }),
      //"name": new FormControl({ value: '', disabled: this.disableInput }),
      "name": new FormControl('',[ Validators.required]),
      "templateid": new FormControl( '', [ Validators.required]),
      "sectionid": new FormControl('', [ Validators.required]),
      "AddForm": new FormControl({ value: '', disabled: this.disableInput }),
      "EditForm": new FormControl({ value: '', disabled: this.disableInput }),
      "DeleteForm": new FormControl({ value: '', disabled: this.disableInput }),
      "ViewForm": new FormControl({ value: '', disabled: this.disableInput }),
      "ReportForm": new FormControl({ value: '', disabled: this.disableInput }),
    }
    );

    this.filteredSections = this.form.controls["sectionid"].valueChanges
      .pipe(
        startWith(''),
        map(val => { return this.filterSections(val != null && val != "" ? val.toString() : '') })
      );

    this.filteredMenus = this.form.controls["templateid"].valueChanges
      .pipe(
        startWith(''),
        map(val => { return this.filterMenus(val != null && val != "" ? val.toString() : '') })
      );

    this.getFormAttributeValues();

  }

  getFormAttributeValues() {
    this._service.getFormAttribute(18, 1).subscribe((res) => {
      this.formAttributes = res;
    })
  }

  prepareForm() {
    Object.keys(this.formData[0]).forEach(name => {
      if (this.form.controls[name]) {
        this.form.controls[name].patchValue(this.formData[0][name], { onlySelf: true });
      }
    });
  }

  createSampleId() {
    this.splashService.splashScreen({ isLoading: true, message: "SAVING" })
    this._service.createSampleId(18, this.form.value["name"]).subscribe((res) => {
      this.saveFormId = res;
      this.splashService.splashScreen({ isLoading: false, message: "" })
      this._interactionService.sendRefId(this.saveFormId);

      this.onSubmit();
    });
  }

  onSubmit() {
 //   localStorage.removeItem('userRights');

    this.MandatoryFields =" ";
    if (!this.form.value["name"]){   this.MandatoryFields= this.MandatoryFields+"Name ,"; }
    if (!this.form.value["templateid"]){   this.MandatoryFields= this.MandatoryFields+" Template ID ,"; }
    if (!this.form.value["sectionis"]){   this.MandatoryFields= this.MandatoryFields+" Section ID ,"; }
        
 
    
    if (this.form.invalid) {
      this._snackBar.open(this.MandatoryFields.slice(0,-1) +" Not Entered or Invalid", 'Ok', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      return;
    }
    else {
      var savedformID = 0;

      if (this.formId === undefined) {
        savedformID = 0;
      }
      else {
        savedformID = this.formId

        /* check duplicate begin */
        if (this.GroupName !== "") {
          this._service.CheckDuplicateGroupRights(this.GroupName, this.TemplateID, this.SectionID, savedformID).subscribe((res) => {
            console.log("CheckDuplicateGroupRights" + this.GroupName);
            if (res[0]["name"] != "") {

              const result = res[0]["name"];

              if (result.includes(this.GroupName)) {
                this.splashService.splashScreen({ isLoading: false, message: "" })
                this._snackBar.open("Group Rights for " + this.GroupName + "  in Template ID " + this.TemplateID + " and Section ID " + this.SectionID + "Already Exists", 'Ok',
                  {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center'
                  });
              }
            }
            return;
          })
        }
      }
      /* check duplciate end */

      if (!this.saveFormId) {
        this.createSampleId();
      }
      else {
        this.form.patchValue({ "savedformID": this.form.value["savedformID"] || this.saveFormId })
        let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedformID", this.formId)

        if (this.formId) {
          this.splashService.splashScreen({ isLoading: true, message: "UPDATING" })
          this._service.getFormAttributeValues(this.formId).subscribe((res: any) => {
            if (res) {
              for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < res.length; j++) {
                  if (data[i]["formAttributeID"] == res[j]["FormAttributeID"]) {
                    data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
                  }
                }
              }

              this._service.createSample3(data, true).subscribe((res) => {
                if (res) {
                  this.splashService.splashScreen({ isLoading: false, message: "" })
                  this._snackBar.open("Data has been updated successfully!", 'Ok',
                    {
                      duration: 5000,
                      verticalPosition: 'bottom',
                      horizontalPosition: 'center'
                    });
                }
              })

            }
          })
        }
        else  /* Create start */ {
          this.splashService.splashScreen({ isLoading: true, message: "INSERTING" })
          this._service.createSample3(data, true).subscribe((res) => {
            if (res) {
              this.splashService.splashScreen({ isLoading: false, message: "" })
              this._snackBar.open("Data has been inserted successfully!", 'Ok',
                {
                  duration: 5000,
                  verticalPosition: 'bottom',
                  horizontalPosition: 'center'
                });
            }
          })

          this.saveFormId = 0;
          this.form.value["savedformID"] = 0;
        } /* Create end */
      } /* update&create end */
      /*  }  checkduplciate  end */
    }
    this.getTabRights();


  }

  getTabRights() {
    this.userRights = [];
    //console.log('test',this.userRights)
    this.loading$ = true;
    this.splashService.splashScreen({ isLoading: true, message: "LOADING" })
    this.username = localStorage.getItem('username');
    this._service.getTabRights(this.username, 14, 1).subscribe((res: any[]) => {

      const propertyValues = Object.values(res);
      var userRights = JSON.stringify(propertyValues);
      // //console.log('menus',menus);
      this.loading$ = false;
      this.splashService.splashScreen({ isLoading: false, message: "" })
      // this.cdr.detectChanges();
      // this.userRights = res[0].sectionid;
      localStorage.setItem("userRights", userRights);
      console.log('rights', localStorage.getItem('userRights'))
      //console.log('userRights',userRights)
      //this.searchInput.nativeElement.focus();
    });
  }
  filterSections(val: string): string[] {
    return AVAILABLE_SECTIONS.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  filterMenus(val: string): string[] {
    return AVAILABLE_MENUS.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }


  getMenu() {
    this._service.getTemplates().subscribe((res: any[]) => {
      this.filteredMenu = res;
    });
  }

  getUserGroup() {
    this._service.getQuestionnaire(0, 17).subscribe((res: any[]) => {
      this.filteredUserGroup = res;
    });
  }

  get f() {
    return this.form.controls;
  }



}
