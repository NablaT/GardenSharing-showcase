export class HomeModel{

    public pathImage:string;
    public title:string;
    public description:string;
    public linkName:string;

    constructor(pathImage:string,title:string,description:string, linkName:string){
        this.pathImage=pathImage;
        this.title=title;
        this.description=description;
        this.linkName=linkName;
    }
}