import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

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
                backgroundColor: 'rgba(11,22,44,0.90)',
                transform: 'scale(1)',
                color: '#FFE692'
            })),
            state('active', style({
                backgroundColor: '#FFE692',
                transform: 'scale(1.1)',
                color: '#0B162C'
            })),
            state('hover', style({
                backgroundColor: '#FFE692',
                transform: 'scale(1.1)',
                color: 'rgb(11,22,44)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]

})
export class HeaderComponent {

    private state:string;

    constructor() {
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
}