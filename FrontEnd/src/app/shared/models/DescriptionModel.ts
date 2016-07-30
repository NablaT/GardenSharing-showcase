export class DescriptionModel{

    public title:string;
    public generalDescription:string;
    public secondTitle:string;
    public choices:Array<string>;
    public descriptionForEachChoice:Array<string>;

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