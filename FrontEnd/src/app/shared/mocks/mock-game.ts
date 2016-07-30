import {QuestionModel} from "../models/QuestionModel";

export var GAMEFRENCH:Array<QuestionModel> = [
    new QuestionModel("Combien de ?", ["13", "144", "155"],
        "144",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        ["Valider","Question suivante"]),
    new QuestionModel("Combien coute ?", ["3", "004", "55"],
        "144", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        ["Valider","Question suivante"])
];

export var GAMEENGLISH:Array<QuestionModel> = [
    new QuestionModel("How many ?", ["13", "144", "155"], "144",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        ["Validate","Next question"]),
    new QuestionModel("How much?", ["1", "12", "65"], "144",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        ["Validate","Next question"])
];