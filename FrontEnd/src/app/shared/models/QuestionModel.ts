export class QuestionModel{

    public question:string;
    public answerList:Array<string>;
    public answerCSSClass:Array<string>;
    public correctAnswer:string;
    public explanation:string;

    //possible values: ["Validate", "Next questions"] according to language
    public buttonTitles:Array<string>;

    constructor(question:string, answerList:Array<string>,
                correctAnswer:string, explanation:string,
                buttonTitles:Array<string>){
        this.question=question;
        this.answerList=answerList;
        this.answerCSSClass=[];
        this.correctAnswer=correctAnswer;
        this.explanation=explanation;
        this.buttonTitles=buttonTitles;
        for(let i=0;i<this.answerList.length;i++){
            this.answerCSSClass.push("fa-square-o");
        }
    }
}