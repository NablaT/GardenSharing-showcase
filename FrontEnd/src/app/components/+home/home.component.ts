import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {ShowGoodContentService} from "../../shared/services/src/show-good-content.service";
import {HomeModel} from "../../shared/models/HomeModel";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ShowGoodContentService]
})
export class HomeComponent {
    public pathImage:string;
    public home:HomeModel;

    constructor(private router:Router,
        private contentService:ShowGoodContentService){
        this.pathImage="../../../../assets/home/picture.png";

        //Todo: To remove while the language changes process has been developed.
        this.home=this.contentService.getHomeContent("French");
    }

    openQuiz(){
        this.router.navigate(['Quiz']);
    }
}