import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public pathImage:string;

    constructor(private router:Router){
        this.pathImage="../../../../assets/home/picture.png";
    }

    openQuizz(){
        this.router.navigate(['Quiz']);
    }
}