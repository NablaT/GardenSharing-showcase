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
    styleUrls: ['./quiz.component.css'],
    providers: [ShowGoodContentService]
})
export class QuizComponent {

    private questions:Array<QuestionModel>;
    // private ngClassForAnswer:Array<string>;
    private currentIndex:number;
    private pageState:string;

    constructor(private manageContent:ShowGoodContentService) {
        this.currentIndex = 1;
        //TODO: To remove when the changing language features have been developed
        this.questions = this.manageContent.getGameContent("French");
        // this.initializeClasses();
    }


    initializeClasses() {
        /*this.ngClassForAnswer=[];
         for(let i=0;i<this.questions.length;i++){
         this.ngClassForAnswer.push("fa-square-o");
         }*/
    }

    /**
     * This function changes the css class of the answer in order
     * to select user choice. In parameter we have the index of
     * the answer he selected, then we change the class from
     * fa-square-o to fa-check-square or the contrary
     * @param index
     */
    checkAnswer(index:number) {
        let currentCSSClassAnswer = this.questions[this.currentIndex - 1].answerCSSClass[index];

        if (currentCSSClassAnswer === "fa-square-o") this.questions[this.currentIndex - 1].answerCSSClass[index] = "fa-check-square";
        else {
            this.questions[this.currentIndex - 1].answerCSSClass[index] = "fa-square-o";
        }
    }

    /**
     * Function verifyAnswer verifies selected answers. We get back
     * all the answer with the css class fa-check-sqare (which means user
     * has clicked on answer) and verifies if it corresponds to the good answer
     */
    verifyAnswer() {
        let allSelectedAnswer = this.getAllIndexes();

        //TODO: To remove when a question has several answer
        if(allSelectedAnswer.length==1){
            
        }
    }

    getAllIndexes() {
        let indexes = [], i = -1;
        while ((i = this.questions[this.currentIndex - 1].answerCSSClass.indexOf("fa-check-square", i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }

    nextQuestion() {

    }

}