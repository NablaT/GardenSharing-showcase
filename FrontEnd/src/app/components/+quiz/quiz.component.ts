/**
 * Component QuizQuizComponent
 */

import {Component} from '@angular/core';
import {ShowGoodContentService} from "../../shared/services/src/show-good-content.service";
import {QuestionModel} from "../../shared/models/QuestionModel";

@Component({
    selector: 'quiz',
    moduleId: module.id,
    templateUrl: './quiz.component.html',
    styleUrls : ['./quiz.component.css'],
    providers: [ShowGoodContentService]
})
export class QuizComponent {

    private questions:Array<QuestionModel>;

    constructor(private manageContent:ShowGoodContentService){
        //TODO: To remove when the changing language features have been developed
        this.questions=this.manageContent.getGameContent("French");
    }
}