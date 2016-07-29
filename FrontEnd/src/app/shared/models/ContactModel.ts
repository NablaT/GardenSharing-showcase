export class ContactModel{

    public pathImage:string;
    public title:string;
    public description:string;
    public socialLinks:Array<string>;

    constructor(pathImage:string,title:string,description:string, socialLinks:Array<string>){
        this.pathImage=pathImage;
        this.title=title;
        this.description=description;
        this.socialLinks=socialLinks;
    }
}