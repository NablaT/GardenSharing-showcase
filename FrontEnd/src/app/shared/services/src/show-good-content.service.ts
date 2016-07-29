/**
 * Service ShowGoodContentService
 */
import {Injectable} from '@angular/core';
import {HOMEFRENCH, HOMEENGLISH} from "../../mocks/index";
import {HomeModel} from "../../models/HomeModel";

@Injectable()
export class ShowGoodContentService {


    /**
     * Function to get home model according to language.
     * @param language
     * @returns {HomeModel}
     */
    public getHomeContent(language:string) {
        if(language==="French"){
            return HOMEFRENCH;
        }
        else if(language==="English"){
            return HOMEENGLISH;
        }
        return new HomeModel("","","","");
    }

}