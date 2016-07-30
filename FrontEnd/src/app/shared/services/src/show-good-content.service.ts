/**
 * Service ShowGoodContentService
 */
import {Injectable} from '@angular/core';
import {HOMEFRENCH, HOMEENGLISH,
    CONTACTFRENCH, CONTACTENGLISH,
    DESCRIPTIONFRENCH, DESCRIPTIONENGLISH,
    GAMEFRENCH, GAMEENGLISH} from "../../mocks/index";
import {HomeModel} from "../../models/HomeModel";
import {ContactModel} from "../../models/ContactModel";
import {DescriptionModel} from "../../models/DescriptionModel";
import {QuestionModel} from "../../models/QuestionModel";

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


    /**
     * Function to get description model according to language.
     * @param language
     * @returns {DescriptionModel}
     */
    public getDescriptionContent(language:string) {
        if(language==="French"){
            return DESCRIPTIONFRENCH;
        }
        else if(language==="English"){
            return DESCRIPTIONENGLISH;
        }
        return new DescriptionModel("","","",["","",""],["","",""]);
    }

    /**
     * Function to get game model according to language. The game
     * model is a list of QuestionModel
     * @param language
     * @returns {Array<QuestionModel>}
     */
    public getGameContent(language:string) {
        if(language==="French"){
            return GAMEFRENCH;
        }
        else if(language==="English"){
            return GAMEENGLISH;
        }
        return [new QuestionModel("",["","",""],"","")];
    }


}