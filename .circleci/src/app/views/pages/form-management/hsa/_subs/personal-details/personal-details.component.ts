
import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentInteractionService } from "@services/component-interaction.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PrepareFinalForm } from "../../../../../../core/_utils/prepareFinalForm";
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first, reduce } from 'rxjs/operators';
import { Countries } from '../../../../../../core/_utils/countries';
import { Nationalities } from '../../../../../../core/_utils/countries';
import { mediaPath } from '../../../../../../core/_utils/api.url';
import {VitamindService} from "@services/vitamind.form.service";
const AVAILABLE_NATIONALITIES: any[] = Countries;
const AVAILABLE_COUNTRIES: any[] = Nationalities;
import {SplashScreenService} from "@services/splash-screen-service";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'M YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'M YYYY',
  },
};
@Component({
  selector: 'kt-hsa-personal-details',
  templateUrl: './personal-details.component.html',
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class HsaPersonalDetailsComponent implements OnInit {
  form: FormGroup;
  title: string = "Personal Details";
  @Input('formData') formId: any;
  formData: any;
  formAttributes: any;
  filteredNationalities: Observable<string[]>;

  filteredcountry: Observable<string[]>;
  filteredPlaces: Observable<string[]>;
  @Input('disableInput') disableInput: boolean;
  saveFormId: any = 0;
  startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  url: string | ArrayBuffer = '';
  fileToUpload: File = null;
  fileUploadSuccess: boolean = false;
  isSampleSubmit: boolean = false;
  isFormSubmit : boolean = false;
  mediaPath: string = mediaPath;
  constructor(private _service: VitamindService,
              private eformFB: FormBuilder,
              private _interactionService: ComponentInteractionService,
              private _snackBar: MatSnackBar,
              private cd: ChangeDetectorRef,
              private splashService : SplashScreenService,
              private finalFormValues: PrepareFinalForm) { }

  ngOnInit() {
    this.createForm();
    if (!this.formId)
      this._interactionService._Refid$.subscribe((id) => {
        this.form.patchValue({ "savedFormID": id })

      })
    else {
        this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
        this._service.getQuestionnaire(this.formId,10).subscribe((res: any[]) => {
        this.formData = res;
        this.saveFormId = this.formId;
            this.splashService.splashScreen({isLoading : false, message : "" })
            if(res.length)
        this.prepareForm();
      }) 
      // this._service.getQuestionnaire9(this.formId).subscribe((res: any[]) => {
      //   this.formData = res;
      //   this.saveFormId = this.formId;
      //       this.splashService.splashScreen({isLoading : false, message : "" })
      //       if(res.length)
      //   this.prepareForm();
      // })
    }
  }

  createForm() {
    this.form = this.eformFB.group({
      "savedFormID": new FormControl({value: 0, disabled: this.disableInput}),
      "sample": new FormControl({value: '', disabled: this.disableInput}),
      "Depository_ID": new FormControl({value : '', disabled : this.disableInput}),
      "projecttitle": new FormControl({value: '', disabled: this.disableInput}),
      "principalinvestigator": new FormControl({value: '', disabled: this.disableInput}),
      "GWAS": new FormControl({value: '', disabled: this.disableInput}),
      "WES": new FormControl({value: '', disabled: this.disableInput}),
      "WGS": new FormControl({value: '', disabled: this.disableInput}),
      "EXOME": new FormControl({value: '', disabled: this.disableInput}),
      "Platform_Others": new FormControl({value: '', disabled: this.disableInput}),
      "collection_point": new FormControl({value: '', disabled: this.disableInput}),
      "collected_by": new FormControl({value: '', disabled: this.disableInput}),
      "collected_date": new FormControl({value: '', disabled: this.disableInput}),
     // "indifamily": new FormControl({value: '', disabled: this.disableInput}),
     // "family_number": new FormControl({value: '', disabled: this.disableInput}),
     // "family_yes": new FormControl({value: '', disabled: this.disableInput}),
     // "per_firstname": new FormControl({value: '', disabled: this.disableInput}),
     // "per_middlename": new FormControl({value: '', disabled: this.disableInput}),
     // "per_lastname": new FormControl({value: '', disabled: this.disableInput}),
      "gender": new FormControl({value: '', disabled: this.disableInput}),
      "country": new FormControl({value: '', disabled: this.disableInput}),
      "nationality": new FormControl({value: '', disabled: this.disableInput}),
      "dob": new FormControl({value: '', disabled: this.disableInput}),
      "PlaceOfBirth": new FormControl({value: '', disabled: this.disableInput}),
      "city": new FormControl({value: '', disabled: this.disableInput}),
      "age": new FormControl({value: '', disabled: this.disableInput}),
     "pers_Numberofwives": new FormControl({value: '', disabled: this.disableInput}),
    "pers_BoysGirls": new FormControl({value: '', disabled: this.disableInput}),
     "pers_Girls": new FormControl({value: '', disabled: this.disableInput}),
     "pers_Boys": new FormControl({value: '', disabled: this.disableInput}),
      "ethnicity": new FormControl({value: '', disabled: this.disableInput}),
      "ethnicity_mixed_specify_text": new FormControl({value: '', disabled: this.disableInput}),
      "ethnicity_others_text": new FormControl({value: '', disabled: this.disableInput}),
      "maritalstatus": new FormControl({value: '', disabled: this.disableInput}),
      "marriage_con": new FormControl({value: '', disabled: this.disableInput}),
      "pers_NumberofChildren": new FormControl({value: '', disabled: this.disableInput}),
       "highest_grade": new FormControl({value: '', disabled: this.disableInput}),
       "highest_degree_earned": new FormControl({value: '', disabled: this.disableInput}),
      "eduGradel": new FormControl({value: '', disabled: this.disableInput}),
      "eduLevel": new FormControl({value: '', disabled: this.disableInput}),
      "household": new FormControl({value: '', disabled: this.disableInput}),
      "household_minor": new FormControl({value: '', disabled: this.disableInput}),
      "ownresidence": new FormControl({value: '', disabled: this.disableInput}),
      "employment_status": new FormControl({value: '', disabled: this.disableInput}),
      "employment_work": new FormControl({value: '', disabled: this.disableInput}),
      "employment_nightshift": new FormControl({value: '', disabled: this.disableInput}),
      "employment_nightshift_others": new FormControl({value: '', disabled: this.disableInput}),
       "eduGrade_other": new FormControl({value: '', disabled: this.disableInput}),
       "PPA_work_txt": new FormControl({value: '', disabled: this.disableInput}),
       "eduLevel_other": new FormControl({value: '', disabled: this.disableInput}),
       "employment_nightshift_often": new FormControl({value: '', disabled: this.disableInput}),
       "elementary_school": new FormControl({value: '', disabled: this.disableInput}),
       "high_school": new FormControl({value: '', disabled: this.disableInput}),
       "elementary_school_value": new FormControl({value: '', disabled: this.disableInput}),
       "high_school_value": new FormControl({value: '', disabled: this.disableInput}),
       "college": new FormControl({value: '', disabled: this.disableInput}),
       "college_value": new FormControl({value: '', disabled: this.disableInput}),
       "graduate": new FormControl({value: '', disabled: this.disableInput}),
       "graduate_value": new FormControl({value: '', disabled: this.disableInput}),
       "other_grade": new FormControl({value: '', disabled: this.disableInput}),
       "prefernottodisclose_grade": new FormControl({value: '', disabled: this.disableInput}),
    });

  
    this.filteredNationalities = this.form.controls["nationality"].valueChanges
        .pipe(
            startWith(''),
            map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
        );

    this.filteredcountry = this.form.controls["country"].valueChanges
    .pipe(
        startWith(''),
        map(val => { return this.filterCountries(val != null && val != "" ? val.toString() : '') })
    );
    this.filteredPlaces = this.form.controls["PlaceOfBirth"].valueChanges
        .pipe(
            startWith(''),
            map(val => { return this.filterNationalities(val != null && val != "" ? val.toString() : '') })
        );

this.getFormAttributeValues();
}
getFormAttributeValues() {
this._service.getFormAttribute(10, 1).subscribe((res) => {
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
// createSampleId() {
//     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
//     this._service.createSampleId(10, this.form.value["sample"], !!this.form.controls["savedFormID"].value, this.form.controls["savedFormID"].value).subscribe((res) => {
// if (!this.formId) {
//   this.saveFormId = res;
//   this._interactionService.sendRefId(parseInt(this.saveFormId));
// }
//     this.splashService.splashScreen({isLoading : false, message : "" })
//     this.isSampleSubmit = true;
// this.onSubmit();
// });
// }
// onSubmit(){

//     if(!this.isSampleSubmit){
//       this.createSampleId();
//     }else {
//         this.form.patchValue({"savedFormID": this.form.value["savedFormID"] || this.saveFormId})
//         this.isSampleSubmit = false;
//         let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
//         if (this.formId) {
//             this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
//             this._service.getFormAttributeValues(this.formId || this.form.controls["savedFormID"].value ).subscribe((res:any) => {

//                 if(res){
//                     for(var i=0;i<data.length;i++) {
//                         for (var j = 0; j < res.length; j++) {
//                             if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
//                                 data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
//                             }
//                         }
//                     }

//                     this._service.createSample8(data, true).subscribe((res)=> {
//                         if (res) {
//                             this.splashService.splashScreen({isLoading : false, message : "" })
//                             this._snackBar.open("Data has been updated successfully!", 'Ok', {
//                                 duration: 5000,
//                                 verticalPosition: 'bottom',
//                                 horizontalPosition: 'center'
//                             });
//                         }
//                     })

//                 }
//             })
//         } else {
//             this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
//             this._service.createSample8(data, false).subscribe((res)=> {
//                 if (res) {
//                     this.isFormSubmit = true;
//                     this.splashService.splashScreen({isLoading : false, message : "" })
//                     this._snackBar.open("Data has been inserted successfully!", 'Ok', {
//                         duration: 5000,
//                         verticalPosition: 'bottom',
//                         horizontalPosition: 'center'
//                     });
//                 }
//             })
//         }
//     }
// }

createSampleId(){
  this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
  this._service.createSampleId(10,this.form.value["sample"]).subscribe((res)=> {
      this.saveFormId = res;
      this.splashService.splashScreen({isLoading : false, message : "" })
      this._interactionService.sendRefId( this.saveFormId);
     this.onSubmit();
  });
  }


  onSubmit(){

    var savedFormID=0;
    if (this.formId===undefined)
    {
      savedFormID=0;
     /*  //console.log("Saved Form ID"+savedFormID);
      //console.log("Form ID"+this.formId); */
    }
   
    else
    savedFormID=this.formId

 
    

     /*  if(!this.form.value["savedFormID"] && !this.saveFormId ){  */
        if(!this.saveFormId ){ 
      /*   if(!this.form.value["savedFormID"]  ){ */
        this.createSampleId();
    /*     //console.log("Saved Form ID"+savedFormID); */
      }else {
          this.form.patchValue({"savedFormID": this.form.value["savedFormID"] || this.saveFormId})
          let data = this.finalFormValues.prepareAttibuteForm(this.form.value, this.formAttributes, "savedFormID",this.formId)
          if (this.formId) {
              this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
              this._service.getFormAttributeValues(this.formId).subscribe((res:any) => {
                this._service.addeditSample(data, 1).subscribe((res)=> {
                  if (res) {
                      this.splashService.splashScreen({isLoading : false, message : "" })
                      this._snackBar.open("Data has been updated successfully!", 'Ok', {
                          duration: 5000,
                          verticalPosition: 'bottom',
                          horizontalPosition: 'center'
                      });
                  }
              })
                  // if(res){
                  //     for(var i=0;i<data.length;i++) {
                  //         for (var j = 0; j < res.length; j++) {
                  //             if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
                  //                 data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
                  //             }
                  //         }
                  //     }

                  //     this._service.createSample3(data, true).subscribe((res)=> {
                  //         if (res) {
                  //             this.splashService.splashScreen({isLoading : false, message : "" })
                  //             this._snackBar.open("Data has been updated successfully!", 'Ok', {
                  //                 duration: 5000,
                  //                 verticalPosition: 'bottom',
                  //                 horizontalPosition: 'center'
                  //             });
                  //         }
                  //     })

                  // }
              })
          } else {
              this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
              this._service.addeditSample(data, 0).subscribe((res)=> {
                if (res) {
                    this.splashService.splashScreen({isLoading : false, message : "" })
                    this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'center'
                    });
                }
            })
              // this._service.createSample3(data, true).subscribe((res)=> {
              //     if (res) {
              //         this.splashService.splashScreen({isLoading : false, message : "" })
              //         this._snackBar.open("Data has been inserted successfully!", 'Ok', {
              //             duration: 5000,
              //             verticalPosition: 'bottom',
              //             horizontalPosition: 'center'
              //         });
              //     }
              // })
              this.saveFormId=0;
              this.form.value["savedFormID"]=0;
             /*  //console.log("after Insert saveformid"+this.saveFormId);
              //console.log("after Insert savedFormID"+this.form.value["savedFormID"]); */
          }
      }
  }
filterNationalities(val: string): string[] {
return AVAILABLE_NATIONALITIES.filter(option =>
  option.toLowerCase().includes(val.toLowerCase()));
}

filterCountries(val: string): string[] {
  return AVAILABLE_COUNTRIES.filter(option =>
    option.toLowerCase().includes(val.toLowerCase()));
  }
onSelectFile(event) {
if (event.target.files && event.target.files[0]) {
this.fileToUpload = event.target.files[0];
var reader = new FileReader();
reader.readAsDataURL(event.target.files[0]); // read file as data url
reader.onload = (event) => { // called once readAsDataURL is completed
  if (event.target) {
    this.url = reader.result;
    this.cd.detectChanges();
    this.fileUploadSuccess = false;
  }
}
}
}
}
