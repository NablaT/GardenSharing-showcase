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

    showDescription(partToShow:string){
        this.partToShow= this.description.choices.indexOf(partToShow);

    }
}