import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
    selector: 'header',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    animations: [
        trigger('itemState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                transform: 'scale(1.1)',
                border:  '2px solid #FFE692'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]

})
export class HeaderComponent {

    private state:string;

    constructor(private router:Router) {
        this.state = "inactive";
    }

    changeState() {
        if (this.state === "inactive") {
            this.state = "active";
        }
        else{

            this.state = "inactive";
        }
    }

    /**
     * Function navigateTo changes the router-outlet content according to user
     * clicks in the header.
     * @param page
     */
    navigateTo(page:string){
        this.router.navigate([page]);
    }
}