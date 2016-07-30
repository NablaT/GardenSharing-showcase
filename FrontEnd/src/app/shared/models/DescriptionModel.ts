export class DescriptionModel{

    private title:string;
    private generalDescription:string;
    private secondTitle:string;
    private choices:Array<string>;
    private descriptionForEachChoice:Array<string>;

    constructor(title:string,generalDescription:string,
                secondTitle:string,
                choices:Array<string>,descriptionForEachChoice:Array<string>){
        this.title=title;
        this.generalDescription=generalDescription;
        this.secondTitle=secondTitle;
        this.choices=choices;
        this.descriptionForEachChoice=descriptionForEachChoice;
    }
}