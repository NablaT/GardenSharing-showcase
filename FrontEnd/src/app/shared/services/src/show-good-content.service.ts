/**
 * Service ShowGoodContentService
 */
import {Injectable} from '@angular/core';
import {HOMEFRENCH, HOMEENGLISH, CONTACTFRENCH, CONTACTENGLISH} from "../../mocks/index";
import {HomeModel} from "../../models/HomeModel";
import {ContactModel} from "../../models/ContactModel";

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


    /**
     * Function to get contact model according to language.
     * @param language
     * @returns {ContactModel}
     */
    public getContactContent(language:string) {
        if(language==="French"){
            return CONTACTFRENCH;
        }
        else if(language==="English"){
            return CONTACTENGLISH;
        }
        return new ContactModel("","","",["","",""]);
    }



}