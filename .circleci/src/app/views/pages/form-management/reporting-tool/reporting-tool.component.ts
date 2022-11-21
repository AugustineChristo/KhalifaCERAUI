
import { Component, OnInit,ViewChild ,Input ,ChangeDetectorRef} from '@angular/core';

import { ReportingToolChildComponent } from '../reporting-tool-child/reporting-tool-child.component';
// import { ReportModel } from 'src/app/core/e-commerce/_models/report.model';
import { ReportModel, ReportsColumns } from '../../../../core/e-commerce/_models/report.model';
// import { ReportModel } from '../_models/customer.model';
import * as XLSX from 'xlsx';
import { DateAdapter } from '@angular/material';
import { NgModel } from '@angular/forms';
import {Subject}    from 'rxjs';
import {VitamindService} from "../../../../core/services/vitamind.form.service";
import {ExcelService} from '../../../../views/pages/form-management/excel.service';

interface attributes {
    code: string;
    title: string;
}
export interface Modler {ng
    title: string;
    AttributeName: string;
    code: any;
}
interface Nationality {
    CountryID: string;
    CountryName: string;
}
@Component({

    selector: 'kt-reporting-tool',
   styles : [
      ` @media (min-width: 1024px)
{
.
    container,
.
    container - sm,
.
    container - md,
.
    container - lg
    {
        max - width
    :
        100 %;
    }
}`
   ],
    templateUrl: './reporting-tool.component.html'
})


export class ReportingToolComponent {
    public listitems = [];
    public listtemplates = [];
    @Input() model: NgModel;
    @Input() values = [];
    @Input() text = 'Select All';
    checkAll: boolean;
    showMilletus: boolean=false;
    tempID: number = 0;
    report: ReportModel;
    reportColumns: ReportsColumns;
    attributes: Modler[] = [];
    attributeNames: Modler[] = [];
    attributeName = [];  isValidDate:any;
    sectionID:number=0;
    excelReportName: string="";
    maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    minDate = new Date(1900, 0, 1);
    public filteredNationality: Subject<Nationality[]> = new Subject<Nationality[]>();

    constructor(private _vService : VitamindService,private excelService:ExcelService, private cdr: ChangeDetectorRef,private dateAdapter: DateAdapter<Date>){
        this.report = new ReportModel;
        this.reportColumns = new ReportsColumns;this.dateAdapter.setLocale('en-GB');
        
    }
    parameterList: any = { "AttributeName": "", "FormAttributeID": 0, "PageNo": 1, "PageSize": 10, "SortColumn": "AttributeName", "SortOrder": "ASC" }
    //Columns to display, enable / disalble sort
    //Basically any column base configuration needed, can be added here
    //Such as Display name, column Icon ....
    Columns2Display: any = [
        { colName: "FormAttributeID", sortable: false },
        // { colName: "PropertyTypeId", sortable: false },
        { colName: "TemplateID", sortable: true },
        { colName: "SectionID", sortable: true },
        { colName: "AttributeName", sortable: false },
        { colName: "AttributeDisplayName", sortable: true },
        { colName: "selected", sortable: true }];

    //Through this we can access the child component through _AutoGrid
    @ViewChild("reportingToolChildComponent",{static : true}) reportingToolChildComponent: ReportingToolChildComponent;
    ngAfterViewInit() {
        this.FillTemplate();

        this.initGrid();

    }
    ExportTOExcel():void {
        if(this.reportColumns.AttributeDisplayName == undefined || this.reportColumns.AttributeDisplayName.length ==0|| this.reportColumns.Reports == undefined)
        alert('Report & Display Name Should be Selected');
       else
        this.getExcel();
    }

     initGrid(){
       // this.reportingToolChildComponent.FillGrid(this.parameterList, this.report.AttributeName);

        this.FillCountries();
        if(localStorage.getItem('ReportColumns') != null)
        localStorage.removeItem('ReportColumns');
    }
    FillTemplate(){

		let data = [];
		data["username"] = localStorage.getItem('username');
        this._vService.getReportTemplate(data).subscribe(
            results => {
                this.listtemplates = results;
                //console.log('listitime',this.listtemplates);
                // this.filteredNationality.next(this.listtemplates.slice());
                this.cdr.detectChanges();
            }
        )}
    FillCountries(){
        this._vService.getCountries().subscribe(
            results => {
                this.listitems = results.result;
                //console.log('listitime',this.listitems);
                this.filteredNationality.next(this.listitems.slice());
                this.cdr.detectChanges();
            }
        )}
    filterNationality(event) {
        let search =  event.target.value;
        if (!search) {
            this.filteredNationality.next(this.listitems.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredNationality.next(
            this.listitems.filter(data => data.CountryName.toLowerCase().indexOf(search) > -1)
        );
    }

    dateSplitter(date) {
        //console.log(date);
        if (date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        } else {
            return null;
        }
    }
    showBranch(_val) {
        this.reportingToolChildComponent.PageIndex = 0;
        //console.log('pageindex',this.reportingToolChildComponent.PageIndex);
        this.checkAll = false;
        this.reportColumns.AttributeDisplayName = [];

        if(this.reportColumns.Reports == 100){
            this.sectionID=9;
            _val=10;
        }
        else
        this.sectionID=0;
       // this.attributeName = [];

       // //console.log('attributes111',this.attributeName);
       // this.reportColumns.AttributeDisplayName = [];

        this._vService.getFormAttributeReports(_val,this.sectionID).subscribe((res)=>{
            //console.log('attributes',res.result);
            this.attributeNames = res.result;
            //  this.attributeName = res.result;

        });

    }

    filterReports(){
        this._vService.getFormAttribute(this.report.Reports,0).subscribe((res:any)=>{
    console.log('report',res.result)
    this.report = res.result;
            this.attributeNames = res.result;
        });
        this.reportingToolChildComponent.FillGrid(this.parameterList, this.reportColumns.AttributeDisplayName);
    }
    getExcel(){
        this.attributeName =[];
        this.sectionID = 0;
        //console.log('Attri',this.reportColumns.AttributeDisplayName);
        if(this.reportColumns.AttributeDisplayName != undefined){
            this.attributeNames.forEach((key : any, val: any) => {
                key['index'] = val + 1;
                this.reportColumns.AttributeDisplayName.forEach((keys : any, vals :any) => {
                    if (key.AttributeDisplayName == keys.AttributeDisplayName) {
                        this.attributeName.push(keys.AttributeDisplayName);
                       //this.attributeName.push(keys.AttributeName);
                    }
                })
            })
        }
        if(this.reportColumns.Reports == 0 || this.reportColumns.Reports == undefined)
        {this.excelReportName ="All_Reports";}
        if(this.reportColumns.Reports == 1 || this.reportColumns.Reports == undefined)
        {this.excelReportName ="Metabolic_Disorder";}
        if(this.reportColumns.Reports == 2){this.excelReportName ="Substance_Dependence";}
        if(this.reportColumns.Reports == 4){this.excelReportName ="Vitamin-D";}
        if(this.reportColumns.Reports == 5){this.excelReportName ="1000_Arab_Genome";}
        if(this.reportColumns.Reports == 6){this.excelReportName ="Obesity";}
        if(this.reportColumns.Reports == 7){this.excelReportName ="Osteoporosis";}
        if(this.reportColumns.Reports == 8){this.excelReportName ="T1D";}
        if(this.reportColumns.Reports == 9){this.excelReportName ="Emirates_Family_Registry";}
        if(this.reportColumns.Reports == 10){this.excelReportName ="Precision_Medicine_1";}
        if(this.reportColumns.Reports == 11){this.excelReportName ="Covid-19";}
        if(this.reportColumns.Reports == 12){this.excelReportName ="Covid-19V2";}
        if(this.reportColumns.Reports == 14){this.excelReportName ="CIRA";}
        if(this.reportColumns.Reports == 15){this.excelReportName ="Location";}
        if(this.reportColumns.Reports == 16){this.excelReportName ="CollectionPoint";}
        if(this.reportColumns.Reports == 21){this.excelReportName ="Collectedby";}

        if(this.reportColumns.Reports == 100){this.excelReportName ="Precision_Medicine_2";
        this.reportColumns.Reports = 10;this.sectionID=9;}
        console.log(this.reportColumns.Reports,this.excelReportName)
        this.reportingToolChildComponent.FillExcel(this.parameterList,this.reportColumns.Reports,this.attributeName,this.sectionID,this.reportColumns.Collected_by,this.reportColumns.Collected_point,this.reportColumns.BeginPeriod,this.reportColumns.EndPeriod,this.reportColumns.Nationality,this.reportColumns.Diabetes,this.reportColumns.Gender,this.reportColumns.Sample_id,this.reportColumns.Filter,this.excelReportName);
    }
    validateDates(sDate: string, eDate: string){
        this.isValidDate = true;
        if((sDate == null || eDate ==null)){
        //   this.error={isError:true,errorMessage:'Start date and end date are required.'};
        alert('Start date and end date are required.');
          this.isValidDate = false;
        }
    
        if((sDate != null && eDate !=null) && (eDate) < (sDate)){
        //   this.error={isError:true,errorMessage:'End date should be grater then start date.'};
        alert('End date should be grater then start date.');

          this.isValidDate = false;
        }
        return this.isValidDate;
      }
    getFormAttributeValues(){
        //console.log('attributes1',this.attributeName,this.attributeName.length);
        if(this.reportColumns.AttributeDisplayName == undefined || this.reportColumns.AttributeDisplayName.length ==0|| this.reportColumns.Reports == undefined)
        alert('Report & Display Name Should be Selected');
        else
       {
        this.attributeName = [];
        //console.log('Attri',this.reportColumns.Nationality);
        this.reportColumns.BeginPeriod= this.dateSplitter(this.reportColumns.BeginPeriod);
        this.reportColumns.EndPeriod= this.dateSplitter(this.reportColumns.EndPeriod);
        //console.log('Date',this.reportColumns.BeginPeriod,this.reportColumns.EndPeriod);
        this.attributeNames.forEach((key : any, val: any) => {
            key['index'] = val + 1;
            this.reportColumns.AttributeDisplayName.forEach((keys : any, vals :any) => {
                if (key.AttributeDisplayName == keys.AttributeDisplayName) {
                    this.attributeName.push(keys.AttributeDisplayName);
                //  this.attributeName.push(keys.AttributeName);
                }
            })
        })
        if(this.reportColumns.Reports == 100){
        this.sectionID=9;
        this.reportColumns.Reports = 10;
        //console.log('Reports',this.reportColumns.Reports);
        this.reportingToolChildComponent.FillGridByParms(this.parameterList,this.reportColumns.Reports,this.attributeName,this.sectionID,this.reportColumns.Collected_by,this.reportColumns.Collected_point,this.reportColumns.BeginPeriod,this.reportColumns.EndPeriod,this.reportColumns.Nationality,this.reportColumns.Diabetes,this.reportColumns.Gender,this.reportColumns.Sample_id,this.reportColumns.Filter);
        } else
        this.reportingToolChildComponent.FillGridByParms(this.parameterList,this.reportColumns.Reports,this.attributeName,0,this.reportColumns.Collected_by,this.reportColumns.Collected_point,this.reportColumns.BeginPeriod,this.reportColumns.EndPeriod,this.reportColumns.Nationality,this.reportColumns.Diabetes,this.reportColumns.Gender,this.reportColumns.Sample_id,this.reportColumns.Filter);

        //console.log('attributes11',this.reportColumns.AttributeDisplayName);
        localStorage.setItem('ReportColumns', JSON.stringify(this.reportColumns));
        this.checkAll = false;
    }
    }

    selectAll(checkAll, select: NgModel, values) {
    //console.log(checkAll)
        if(checkAll == true){
            select.update.emit(values);
        }
        else{
            select.update.emit([]);
        }
    }

    roleChanged(value){
    }
}


