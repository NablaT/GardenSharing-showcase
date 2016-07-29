/**
 * Component ContactContactComponent
 */

import {Component} from '@angular/core';
import {ContactModel} from "../../shared/models/ContactModel";
import {ShowGoodContentService} from "../../shared/services/src/show-good-content.service";

@Component({
    selector: 'contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css'],
    providers: [ShowGoodContentService]
})
export class ContactComponent {

    public contact:ContactModel;

    constructor(private contentService:ShowGoodContentService){
        //Todo: To remove while the language changes process has been developed.
        this.contact=this.contentService.getContactContent("French");
    }
}