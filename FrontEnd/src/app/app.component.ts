import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeaderComponent} from './components/header/index';
import {AboutComponent} from './components/+about/index';
import {HomeComponent} from './components/+home/index';
import {QuizComponent} from "./components/+quiz/quiz.component";
import {ContactComponent} from "./components/+contact/contact.component";
import {DescriptionComponent} from "./components/+description/description.component";

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/quiz', name: 'Quiz', component: QuizComponent},
    {path: '/contacts', name: 'Contact', component: ContactComponent},
    {path: '/description', name: 'Description', component: DescriptionComponent}
])
export class AppComponent {
}