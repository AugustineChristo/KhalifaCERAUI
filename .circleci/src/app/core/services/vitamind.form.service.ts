import { Injectable } from '@angular/core';
import { api } from '../_utils/api.url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class VitamindService {

  baseUrl: string = api;

  constructor(private httpClient: HttpClient) { }

  getList(data: any) {
    return this.httpClient.get(this.baseUrl + `form/listforms?templateID=${data.templateId}&pagenumber=${data.pageNumber}&pagesize=${data.pageSize}&filter=${data.filter}&orderby=1&sortorder=${data.sortOrder}`);
  }
  createSampleId(id: number, sampleId: number, isEdit: boolean = false, savedFormID: any = 0) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    let datainsert = {
      "savedFormID": savedFormID,
      "templateID": id,
      "savedFormName": sampleId,
      "createdBy": localStorage.getItem('username'),
      "createdDate": new Date()
    }
    let dataupdate = {
      "savedFormID": savedFormID,
      "templateID": id,
      "savedFormName": sampleId,
      "updatedBy": localStorage.getItem('username'),
      "updateDate": new Date()
    }
  /*   //console.log(data); */
    // isEdit && (delete data.createdDate , delete data.createdBy);
    if (!isEdit)
      return this.httpClient.post(this.baseUrl + 'form/AddForms', datainsert, options);
    else
      return this.httpClient.post(this.baseUrl + 'form/UpdateForms', dataupdate, options);
  }
  updateUser(id: number, savedFormID: number,sampleId: number ){
    
    let dataupdate = {
      "savedFormID": savedFormID,
      "templateID": id,
      "savedFormName": sampleId,
      "updatedBy": localStorage.getItem('username'),
      "updateDate": new Date()
    }
      return this.httpClient.post(this.baseUrl + 'form/UpdateForms', dataupdate);
  }
  
  createSample3(data, isEdit: boolean) {
   /*  //console.log(data); */
    if (!isEdit)
      return this.httpClient.post(this.baseUrl + 'form/Addformattributevalue', data);
    else{
      return this.httpClient.post(this.baseUrl + 'form/Updateformattributevalue', data);
    }
  }
  addeditSample(modeldata, addedit: number) {
    /*  //console.log(data); */
    
       return this.httpClient.post(this.baseUrl + `form/InsertUpdateForms?InsertUpdate=${addedit}`, modeldata
      );
    
   }

  createSample1(data, isEdit: boolean) {
    if (!isEdit)
      return this.httpClient.post(this.baseUrl + 'form/Addformattributevalue', data);
    else
      return this.httpClient.post(this.baseUrl + 'form/Updateformattributevalue', data);
  }
  CheckDuplicateGroupRights(Name: any, TemplateID: number, SectionID: number, SavedFormID: number ) 
  {
    return this.httpClient.get(this.baseUrl + `form/CheckDuplicateGroupRights?Name=${Name}&TemplateID=${TemplateID}&SectionID=${SectionID}&SavedformID=${SavedFormID}`);
  }

  resetPassword(Email: any = 0) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    let data = {
      "Name": Email.name,
     "Email": Email.subject,
     "Subject": Email.subject,
     "Message": Email.message

    }
    //console.log(data); 
    //console.log(this.baseUrl + 'Mail');

       return this.httpClient.post(this.baseUrl + 'Mail/SendMail', data, options);
     // return this.httpClient.post(this.baseUrl + 'Mail?Name='+Email+'&Email='+Email+'&Subject=ResetPassword&Message='+this.baseUrl+'\change-password', data, options);

  }
  notifyEmail(Email: any = 0) 
  {
    let data = {
      "Name": Email.Name,
     "Subject": Email.Subject,
     "Message": Email.Message

    }
    console.log(data)
    return this.httpClient.post(this.baseUrl + `Mail/NotifyMail`,data);
  }
  getFormTemplates() {
    return this.httpClient.get(this.baseUrl + 'form/templates');
  }
  getFormAttributeValues(SavedFormID: number) {
    return this.httpClient.get(this.baseUrl + 'form/formattributevalues?SavedFormID=' + SavedFormID);
  }
  getQuestionnaire3(id: number) {
    return this.httpClient.get(this.baseUrl + `form/Questionnaire?SavedformID=${id}`);
  }
  getQuestionnaire1(id: number) {
    return this.httpClient.get(this.baseUrl + `form/Questionnaire?SavedformID=${id}`);
  }
  getTabRights(userName: string, templateID: number, type: number) {
    return this.httpClient.get(this.baseUrl + `Users/GetUserRights?UserName=${userName}&TemplateID=${templateID}&Type=${type}`);
  }
  getFormAttribute(formId: number,sectionId : number) {
    let username=localStorage.getItem('username');
    return this.httpClient.get(this.baseUrl + `form/formattribute?templateID=${formId}&SectionID=${sectionId}&UserName=${username}`);
  }
  getFormAttributeExcel(formId: number,sectionId : number) {
    let username=localStorage.getItem('username');
    return this.httpClient.get(this.baseUrl + `form/formattribute?templateID=${formId}&SectionID=${sectionId}&UploadExcel=1`);
  }
  getTotalRecordsCount(templateID: number, searchStr?: any) {
    return this.httpClient.get(this.baseUrl + `form/totalrecords?templateID=${templateID}&SearchStr=${searchStr}`);
  }
  postSingleFormAttr(data: any, isEdit: boolean) {
    if (isEdit)
      return this.httpClient.post(this.baseUrl + `form/UpdateformattributevalueSingle?FormAttributeID=${data.FormAttributeID}`, data);
    else
      return this.httpClient.post(this.baseUrl + `form/Addformattributevaluesingle?FormAttributeID=${data.FormAttributeID}`, data);
  }
  postUploadImages(data, savedFormID) {
    const formData: FormData = new FormData();
    formData.append('file', data, data.name);
    return this.httpClient.post(this.baseUrl + `Image?foldername=tempimages&SavedFormID=${savedFormID}`, formData);
  }
  createSample8(data, isEdit: boolean) {
    if (!isEdit)
      return this.httpClient.post(this.baseUrl + 'form/Addformattributevalue', data);
    else
      return this.httpClient.post(this.baseUrl + 'form/Updateformattributevalue', data);
  }
  deleteForm(id){
    
    let data = {
      "SavedFormID": id
    }
    return this.httpClient.post(this.baseUrl + 'Form/DeleteForms', data);
  }
  checkExistsInForm(name,id){
    return this.httpClient.get(this.baseUrl + `form/CheckExists?Name=${name}&TemplateID=${id}`);
  }
  getQuestionnaire(id: number, templateID: number) {
    return this.httpClient.get(this.baseUrl + `form/Questionnaire?SavedformID=${id}&TemplateID=${templateID}`);
  }
  getQuestionnaire9(id: number, templateID: number,sectionId : number) {
    return this.httpClient.get(this.baseUrl + `form/Questionnaire?SavedformID=${id}&TemplateID=${templateID}&SectionID=${sectionId}`);
  }
  createSample(data, isEdit: boolean) {
    if (!isEdit)
      return this.httpClient.post(this.baseUrl + 'form/Addformattributevalue', data);
    else
      return this.httpClient.post(this.baseUrl + 'form/Updateformattributevalue', data);
  }

  updateSample(data:any) {
      return this.httpClient.post(this.baseUrl + 'Form/BulkUpdateCIRA', data);
  }
  postDocumentUpload(data, savedFormID) {
    return this.httpClient.post(this.baseUrl + `Image?foldername=Documents&SavedFormID=${savedFormID}`, data);
  }

  AddDocuments(data) {
    return this.httpClient.post(this.baseUrl + `form/AddDocuments`, data);
  }
  DeleteDocuments(data) {
    return this.httpClient.post(this.baseUrl + `form/DeleteDocuments`, data);
  }
  GetDocuments(savedFormID) {
    return this.httpClient.get(this.baseUrl + `form/GetDocuments?SavedFormID=${savedFormID}`);
  }

  getFormAttributeReports(formId : number,sectionId : number){
    let username=localStorage.getItem('username');
    return this.httpClient.get<any>(this.baseUrl+`form/formattributeReports?templateID=${formId}&SectionID=${sectionId}&UserName=${username}`).pipe(map(res => {
      // let api_response = JSON.parse(res.response);
      // //console.log("getSOWRecords API Duration", { "Result": "success" });
      return res;
    }), catchError((e: any) => {
      //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
      return Observable.throw('Oops! Something went wrong. Please try again.');
    }));
  }
  getReportsTotal(templateID : number, sectionId : number){
    let username=localStorage.getItem('username');
    return this.httpClient.get<any>(this.baseUrl+`Report/Reports?TemplateID=${templateID}&SectionID=${sectionId}&UserName=${username}`).pipe(map(res => {
      // let api_response = JSON.parse(res.response);
      // //console.log("getSOWRecords API Duration", { "Result": "success" });
      return res;
    }), catchError((e: any) => {
      //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
      return Observable.throw('Oops! Something went wrong. Please try again.');
    }));}
  getReports(templateID : number, sectionId : number, pageNumber : number, pageSize : number){

    //console.log("getExceptions API Duration",pageNumber,pageSize);
    //  //console.log("getRecords Request", payload);
    //  + branchId
    let username=localStorage.getItem('username');

    return this.httpClient.get<any>(this.baseUrl+`Report/Reports?TemplateID=${templateID}&SectionID=${sectionId}&pagesize=${pageSize}&pagenumber=${pageNumber}&UserName=${username}`)
        .pipe(map((res:any) => {
          // let api_response = JSON.parse(res.response);
          // //console.log("getSOWRecords API Duration", { "Result": "success" });
          return res;
        }), catchError((e: any) => {
          //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
          return Observable.throw('Oops! Something went wrong. Please try again.');
        }));
  }
  getReports9(templateID : number, sectionId : number, pageNumber : number, pageSize : number){

    //console.log("getExceptions API Duration",pageNumber,pageSize);
    //  //console.log("getRecords Request", payload);
    //  + branchId
    let username=localStorage.getItem('username');

    return this.httpClient.get<any>(this.baseUrl+`Report/Reports?TemplateID=${templateID}&SectionID=9&pagesize=${pageSize}&pagenumber=${pageNumber}&UserName=${username}`)
        .pipe(map((res:any) => {
          // let api_response = JSON.parse(res.response);
          // //console.log("getSOWRecords API Duration", { "Result": "success" });
          return res;
        }), catchError((e: any) => {
          //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
          return Observable.throw('Oops! Something went wrong. Please try again.');
        }));
  }
  getReportsByParms(_templateID : number, sectionId : number,collectedBy: string,collectedPoint:string,BeginPeriod : string,EndPeriod : string,nationality: string,diabetes:string,gender:string,sampleId: string, pageNumber : number, pageSize : number,filter: string){
    let username=localStorage.getItem('username');
    //console.log('templateID1',_templateID);
    if(_templateID == undefined){
      //console.log('templateID',_templateID);

      _templateID = 1;
    }
    if (sectionId != 0){
      sectionId=0;
    }
    if(collectedBy ==undefined)collectedBy='';
    if(collectedPoint == undefined)
    {
      collectedPoint='';
    }
    if(filter ==undefined)filter='';
    if(BeginPeriod == undefined )BeginPeriod='';
    if(EndPeriod ==  undefined )EndPeriod='';
    if(gender == undefined   || gender == '-1')gender='';
    if(diabetes ==  undefined )diabetes='';
    if(sampleId ==  undefined )sampleId='';
    if(nationality ==  undefined  || nationality == '-1')nationality='';
    //console.log('vitamin',_templateID,pageNumber,pageSize);

    return this.httpClient.get<any>(this.baseUrl+`Report/Reports?TemplateID=${_templateID}&SectionID=${sectionId}&collectedBy=${collectedBy}&collectedPoint=${collectedPoint}&BeginPeriod=${BeginPeriod}&EndPeriod=${EndPeriod}&nationality=${nationality}&diabetes=${diabetes}&gender=${gender}&sampleId=${sampleId}&pagesize=${pageSize}&pagenumber=${pageNumber}&filter=${filter}&UserName=${username}`).pipe(map(res => {

      //console.log('templateID1',_templateID);
      console.log('vitamin',res.result);
      return res;
    }), catchError((e: any) => {
      //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
      return Observable.throw('Oops! Something went wrong. Please try again.');
    }));
  }
  getReportsTotalRecordsByParms(_templateID : number, sectionId : number,collectedBy: string,collectedPoint:string,BeginPeriod : string,EndPeriod : string,nationality: string,diabetes:string,gender:string,sampleId: string, pageNumber : number, pageSize : number,filter : string){
    if(_templateID == undefined){
      //console.log('templateID',_templateID);

      _templateID = 1;
    }
    if (sectionId != 0){
      sectionId=0;
    }
    if(collectedBy ==undefined )collectedBy='';
    if(collectedPoint == undefined)
    {
      collectedPoint='';
    }
    if(filter ==undefined)filter='';
    if(BeginPeriod ==undefined)BeginPeriod='';
    if(EndPeriod == undefined )EndPeriod='';
    if(gender == undefined   || gender == '-1')gender='';
    if(diabetes == undefined )diabetes='';
    if(sampleId ==  undefined )sampleId='';
    if(nationality ==  undefined || nationality == '-1')nationality='';
    //console.log('vitamin',_templateID,pageNumber,pageSize);

    return this.httpClient.get<any>(this.baseUrl+`Report/ReportTotal?TemplateID=${_templateID}&SectionID=${sectionId}&collectedBy=${collectedBy}&collectedPoint=${collectedPoint}&BeginPeriod=${BeginPeriod}&EndPeriod=${EndPeriod}&nationality=${nationality}&diabetes=${diabetes}&gender=${gender}&sampleId=${sampleId}&pagesize=${pageSize}&pagenumber=${pageNumber}&filter=${filter}`).pipe(map(res => {
      //console.log('vitamin',res);
      return res;
    }), catchError((e: any) => {
      //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
      return Observable.throw('Oops! Something went wrong. Please try again.');
    }));
  }
  getReportsTotalRecords(_templateID : number, sectionId : number, pageNumber : number, pageSize : number){
    if(_templateID == undefined){
      //console.log('templateID',_templateID);

      _templateID = 1;
    }
    if (sectionId != 0){
      sectionId=0;
    }

    //console.log('vitamin',_templateID,pageNumber,pageSize);

    return this.httpClient.get<any>(this.baseUrl+`Report/ReportTotal?TemplateID=${_templateID}&SectionID=${sectionId}&pagesize=${pageSize}&pagenumber=${pageNumber}`).pipe(map(res => {
      //console.log('vitamin',res);
      return res;
    }), catchError((e: any) => {
      //console.log("getRecords API Duration", { "Result": "failed", "Error": e });
      return Observable.throw('Oops! Something went wrong. Please try again.');
    }));
  }

  getCountries(){
    return this.httpClient.get<any>(this.baseUrl+`form/Countries`);
  }

  getTemplates(){
    return this.httpClient.get<any>(this.baseUrl+`form/templates`);
  }

  getTemplatesName(data){
    return this.httpClient.get<any>(this.baseUrl+`Users/getTemplate?UserName=${data.username}`);
  }
  getReportTemplate(data){
    return this.httpClient.get<any>(this.baseUrl+`Users/GetReportTemplate?UserName=${data.username}`);
  }
  // getMenus(){
  //   return this.httpClient.get(this.baseUrl+`Users/GetMenu?UserName=kustar`);
  // }

  getMenus(data){
    return this.httpClient.get<any>(this.baseUrl+`Users/GetMenu?UserName=${data.username}`);
  }
  // getMenus(): Observable<any> {
  //   return this.httpClient.get(`${this.baseUrl}Users/GetMenu?UserName=kustar`)
  //           .pipe(
  //             map(res => res)
  //         );
  //     }
}
