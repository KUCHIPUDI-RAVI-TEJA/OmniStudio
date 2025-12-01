import { LightningElement } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';

export default class Pagination extends LightningElement {

    accounts = [];
    

    connectedCallback(){
        this.getAccounts(2,2);
    }

    async getAccounts(limitValue, offsetValue){
        try{
            this.accounts = await getAccountRecords({l:limitValue, o:offsetValue});
            console.log(this.accounts);
        }catch(e){
            console.log(e);
        }
    }

}