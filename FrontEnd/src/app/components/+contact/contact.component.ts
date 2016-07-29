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
    public star1:string;
    public star2:string;
    public star3:string;
    public star4:string;
    public star5:string;

    constructor(private contentService:ShowGoodContentService){
        //Todo: To remove while the language changes process has been developed.
        this.contact=this.contentService.getContactContent("French");
        this.star1="inactive";
        this.star2="inactive";
        this.star3="inactive";
        this.star4="inactive";
        this.star5="inactive";
    }

    changeActive(rank:number){
        this.star1="inactive";
        this.star2="inactive";
        this.star3="inactive";
        this.star4="inactive";
        this.star5="inactive";
        switch(rank){
            case 1:
                this.star1="active";
                break;
            case 2:
                this.star2="active";
                break;
            case 3:
                this.star3="active";
                break;
            case 4:
                this.star4="active";
                break;
            case 5:
                this.star5="active";
                break;
        }
    }
}