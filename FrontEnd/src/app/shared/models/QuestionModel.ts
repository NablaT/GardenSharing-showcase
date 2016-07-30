export class QuestionModel{

    public question:string;
    public answerList:Array<string>;
    public correctAnswer:string;
    public explanation:string;

    constructor(question:string, answerList:Array<string>,
                correctAnswer:string, explanation:string){
        this.question=question;
        this.answerList=answerList;
        this.correctAnswer=correctAnswer;
        this.explanation=explanation;
    }
}