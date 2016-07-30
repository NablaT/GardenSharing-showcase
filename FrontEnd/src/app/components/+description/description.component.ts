/**
 * Component DescriptionDescriptionComponent
 */

import {Component} from '@angular/core';
import {ShowGoodContentService} from "../../shared/services/src/show-good-content.service";
import {DescriptionModel} from "../../shared/models/DescriptionModel";

@Component({
    selector: 'description',
    moduleId: module.id,
    templateUrl: './description.component.html',
    styleUrls : ['./description.component.css'],
    providers: [ShowGoodContentService]
})
export class DescriptionComponent {

    private description: DescriptionModel;
    private partToShow:number;

    constructor(private manageContent:ShowGoodContentService){
        this.partToShow=-1;
        //TODO: To remove when the changing language functionalities have been developed
        this.description=manageContent.getDescriptionContent("French");
    }

    /**
     * Function showDescription.
     * This function changes the value of partToShow according to user click.
     * When a user clicks on of the link, we call the fucntion showDescription
     * and add in parameter the name of the clicked link.
     * @param partToShow
     */
    showDescription(partToShow:string){
        this.partToShow= this.description.choices.indexOf(partToShow);

    }
}