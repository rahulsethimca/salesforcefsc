import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { subscribe } from 'lightning/empApi';

export default class ShowToastEventLWC extends LightningElement {

    channelName = '/event/Execute_STE__e';

    connectedCallback() {
        this.handleSubscribe();
    }

    handleSubscribe(){
        subscribe(this.channelName,-1, 
            response => {
                console.log(JSON.stringify(response.data.payload));
                this.showToast();
            });
    }

    showToast(){
        const evt = new ShowToastEvent({
            title : 'Record Created',
            message : 'Access the record...',
            variant : 'success',
            mode : 'sticky'
        });

        this.dispatchEvent(evt);
    }
}