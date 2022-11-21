/**
 * Created by TCITSS on 1/9/2020.
 */
import { Component, OnInit,Input,OnDestroy,AfterContentInit ,ElementRef , ViewChild } from '@angular/core';
import {ComponentInteractionService} from "@services/component-interaction.service";
import {VitamindService} from "@services/vitamind.form.service";
import {SplashScreenService} from "@services/splash-screen-service";
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import { Countries  } from '../../../../../../core/_utils/countries';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, startWith, delay, first , reduce } from 'rxjs/operators';
import {PrepareFinalForm} from "../../../../../../core/_utils/prepareFinalForm";
import {MatSnackBar} from '@angular/material/snack-bar';
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
    selector: 'kt-vitamin-d-participation-details',
    templateUrl: './vitamin-d-participation-details.html',
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


export class VitaminDParticipationComponent implements OnInit {
    VForm1: FormGroup;
    AVAILABLE_NATIONALITIES: any[] = Countries;
    title : string =  'Participation Details';
    filteredNationalities: Observable<string[]>;
    filteredPlaces: Observable<string[]>;
    _coutries = Countries;
    formAttributes : any;
    saveFormId : any = 0;
    @Input('formData') formId: any;
    formData : any;
    @Input('disableInput') disableInput: boolean;
    startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    isSampleSubmit: boolean = false;
    isFormSubmit : boolean = false;
    constructor(
        private _vService : VitamindService,
        private eformFB: FormBuilder,
        private _interactionService : ComponentInteractionService,
        private _snackBar: MatSnackBar,
        private finalFormValues : PrepareFinalForm,
        private splashService : SplashScreenService
    ){}

    ngOnInit(){
        this.createForm();
        if(!this.formId)
        this._interactionService._Refid$.subscribe((id)=>{  this.VForm1.patchValue({"savedFormID" : id})  })
        else{
            this.splashService.splashScreen({ isLoading : true, message : "LOADING" })
            this._vService.getQuestionnaire3(this.formId).subscribe((res:any[])=> {
                this.formData  = res;
                this.splashService.splashScreen({isLoading : false, message : "" })
                this.saveFormId = this.formId;
                if(res.length)
                this.prepareForm();
            })
        }
        this.getFormAttributeValues();
    }



    createForm(){
        this.VForm1 = this.eformFB.group({
            "savedFormID": new FormControl({value : 0, disabled : this.disableInput}),
            "Sample": new FormControl({value : '', disabled : this.disableInput}),
            "Depository_ID": new FormControl({value : '', disabled : this.disableInput}),
            "collected_date": new FormControl({value : '', disabled : this.disableInput}),
            "Collected_Center": new FormControl({value : '', disabled : this.disableInput}),
            "GWAS": new FormControl({value: '', disabled: this.disableInput}),
            "WES": new FormControl({value: '', disabled: this.disableInput}),
            "WGS": new FormControl({value: '', disabled: this.disableInput}),
            "EXOME": new FormControl({value: '', disabled: this.disableInput}),
            "Platform_Others": new FormControl({value: '', disabled: this.disableInput}),
            "staff_name": new FormControl({value : '', disabled : this.disableInput}),
            "staff_id": new FormControl({value : '', disabled : this.disableInput}),
            "birth_date": new FormControl({value : '', disabled : this.disableInput}),
            "birth_place": new FormControl({value : '', disabled : this.disableInput}),
            "country": new FormControl({value : '', disabled : this.disableInput}),
            "Mobile_no": new FormControl({value : '', disabled : this.disableInput ,  validator : [Validators.required  ] }),
            "Gender": new FormControl({value : '', disabled : this.disableInput}),
            "MaritalStatus": new FormControl({value : '', disabled : this.disableInput}),
            "Consanguineous_Marriage": new FormControl({value : '', disabled : this.disableInput}),
            "NoOfWives": new FormControl({value : '', disabled : this.disableInput}),
            "NoOfChildren": new FormControl({value : '', disabled : this.disableInput}),
            "Address": new FormControl({value : '', disabled : this.disableInput}),
        })

        this.filteredNationalities = this.VForm1.controls["country"].valueChanges
            .pipe(
                startWith(''),
                map(val => {return this.filterNationalities(val != null && val != "" ? val.toString() : '') } )
            );
        this.filteredPlaces = this.VForm1.controls["birth_place"].valueChanges
            .pipe(
                startWith(''),
                map(val => {return this.filterNationalities(val != null && val != "" ? val.toString() : '') } )
            );
    }

    prepareForm(){
        Object.keys(this.formData[0]).forEach(name => {
            if (this.VForm1.controls[name]) {
                this.VForm1.controls[name].patchValue(this.formData[0][name]);
            }
        });
    }

   getFormAttributeValues(){
       this._vService.getFormAttribute(4,1).subscribe((res)=>{
           this.formAttributes = res;
       })
   }

    prepareAttibuteForm(){
        let res = this.VForm1.value;
        let _result = [];
        for (let prop in res) {
            for(let i=0;i<this.formAttributes.length;i++){
               if(prop == this.formAttributes[i].attributeName && res[prop] != ""){
                   _result.push({
                       "savedFormID": res["savedFormID"],
                     //  "formAttributeID": this.formAttributes[i].formAttributeID,
                     "formAttributeID": this.formAttributes[i].attributeName,
                       "attributeValue": res[prop]
                   })
               }
            }
        }
 
        return _result;
    }
// createSampleId(){
//     this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
//     this._vService.createSampleId(4,this.VForm1.value["Sample"],!!this.VForm1.controls["savedFormID"].value,this.VForm1.controls["savedFormID"].value).subscribe((res)=> {
//         if (!this.formId) {
//         this.saveFormId = res;
//         this._interactionService.sendRefId( this.saveFormId);
//         }
//         this.splashService.splashScreen({isLoading : false, message : "" })
//         this.isSampleSubmit = true;
//        this.onSubmit();
//     });
//     }


//     onSubmit(){

//         if(!this.isSampleSubmit){
//           this.createSampleId();
//         }else {
//             this.VForm1.patchValue({"savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId})
//             this.isSampleSubmit = false;
//             let data = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID",this.formId)
//             if (this.formId ||  this.isFormSubmit) {
//                 this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
//                 this._vService.getFormAttributeValues(this.formId || this.VForm1.controls["savedFormID"].value ).subscribe((res:any) => {

//                     if(res){
//                         for(var i=0;i<data.length;i++) {
//                             for (var j = 0; j < res.length; j++) {
//                                 if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
//                                     data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
//                                 }
//                             }
//                         }

//                         this._vService.createSample3(data, true).subscribe((res)=> {
//                             if (res) {
//                                 this.splashService.splashScreen({isLoading : false, message : "" })
//                                 this._snackBar.open("Data has been updated successfully!", 'Ok', {
//                                     duration: 5000,
//                                     verticalPosition: 'bottom',
//                                     horizontalPosition: 'center'
//                                 });
//                             }
//                         })

//                     }
//                 })
//             } else {
//                 this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
//                 this._vService.createSample3(data, false).subscribe((res)=> {
//                     if (res) {
//                         this.isFormSubmit = true;
//                         this.splashService.splashScreen({isLoading : false, message : "" })
//                         this._snackBar.open("Data has been inserted successfully!", 'Ok', {
//                             duration: 5000,
//                             verticalPosition: 'bottom',
//                             horizontalPosition: 'center'
//                         });
//                     }
//                 })
//             }
//         }
//     }

createSampleId(){
    this.splashService.splashScreen({ isLoading : true, message : "SAVING" })
    this._vService.createSampleId(4,this.VForm1.value["Sample"]).subscribe((res)=> {
        this.saveFormId = res;
        this.splashService.splashScreen({isLoading : false, message : "" })
        this._interactionService.sendRefId( this.saveFormId);
       this.onSubmit();
    });
    }
  
  
    onSubmit(){
  
        if(!this.VForm1.value["savedFormID"] && !this.saveFormId ){
          this.createSampleId();
        }else {
            this.VForm1.patchValue({"savedFormID": this.VForm1.value["savedFormID"] || this.saveFormId})
            let data = this.finalFormValues.prepareAttibuteForm(this.VForm1.value, this.formAttributes, "savedFormID",this.formId)
           console.log ("jane",data)
            if (this.formId) {
                this.splashService.splashScreen({isLoading : true, message : "UPDATING" })
              // this._vService.getFormAttributeValues(this.formId).subscribe((res:any) => {
               // this._vService.getFormAttribute(4,0).subscribe((res:any) => {
               //     if(res){
               //         for(var i=0;i<data.length;i++) {
                //            for (var j = 0; j < res.length; j++) {
                //                if(data[i]["formAttributeID"] == res[j]["FormAttributeID"]){
               //                     data[i]["FormAttributeValueID"] = res[j]["FormAttributeValueID"]
               //                 }
               //             }
               //         }
  
                        this._vService.addeditSample(data, 1).subscribe((res)=> {
                            if (res) {
                                this.splashService.splashScreen({isLoading : false, message : "" })
                                this._snackBar.open("Data has been updated successfully!", 'Ok', {
                                    duration: 5000,
                                    verticalPosition: 'bottom',
                                    horizontalPosition: 'center'
                                });
                            }
                        })
  
                  
            } else {
                this.splashService.splashScreen({ isLoading : true, message : "INSERTING" })
                this._vService.addeditSample(data, 0).subscribe((res)=> {
                    if (res) {
                        this.splashService.splashScreen({isLoading : false, message : "" })
                        this._snackBar.open("Data has been inserted successfully!", 'Ok', {
                            duration: 5000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'center'
                        });
                    }
                })
                
            }
        }
    }
    filterNationalities(val: string): string[] {
        return this.AVAILABLE_NATIONALITIES.filter(option =>
            option.toLowerCase().includes(val.toLowerCase()));
    }

}