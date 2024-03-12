import { LightningElement } from 'lwc';
import searchPatientRecord from '@salesforce/apex/newPatient.searchPatientRecord';

export default class FollowUpListComnpo extends LightningElement {
    toDate;
    totalCount=0;
    receivedFollowupList;
    showFollowUpTable=false;
    draftValues=[];
    columns=[
        { label: 'Patient Id' , fieldName: 'Name', editable: true},
        { label: 'Patient Name' , fieldName: 'Name__c', editable: true},
        { label: 'Sex' , fieldName: 'Sex__c', editable: true},
        { label: 'Email ID' , fieldName: 'Email_ID__c', editable: true},
        { label: 'Consultant' , fieldName: 'Consultant__c', editable: true},
        { label: 'Mobile No' , fieldName: 'Mobile_No__c', editable: true},
        { label: 'Created Date' , fieldName: 'CreatedDate', editable: true}];

    searchFollowUpHandler(){
        this.toDate = this.template.querySelector('lightning-input[data-formfield="toDate"]').value;
       console.log(JSON.stringify(this.toDate));

       searchPatientRecord({toDate : this.toDate})
        .then((result) =>{
            console.log(JSON.stringify(result));
            this.receivedFollowupList= result;
            this.totalCount= result.length;

            if(result.length>0){
                this.showFollowUpTable= true;

            }
            else{
                this.showFollowUpTable= false;

            }
        })
        .catch((error) =>{
            console.log(JSON.stringify(error));
            
        });
    }
    
}