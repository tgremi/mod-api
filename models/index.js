let MongoClient = require("mongodb").MongoClient;
let models = {};
const mongo = require("../config/database");

models.createNumbers = (number, callbackFunction) => {
    try {
        let db = mongo.getDB();
        db.collection("randomNumbers", (error, collection) => {
            if (!error) {
                collection.insert(number, (error, success) => {
                    if (error) {
                        console.warn(`Error on colletion randomNumbers insert method ${error}`);
                        if (typeof callbackFunction === "function")
                            callbackFunction({ statusCode: 503, error: "Couldn't create document on database.", reason: "", details: error }, undefined);
                    }
                    else {
                        if (typeof callbackFunction === "function")
                            callbackFunction(undefined, success.ops[0]._id);
                    }
                });
            } else callbackFunction({ statusCode: 503, error: "Couldn't find randomNumbers collection.", reason: "", details: error }, undefined);
        });
    } catch (error) {
        console.warn(`Error on insert numbers [${error}}]`);
        if (typeof callbackFunction === "function")
            callbackFunction("Error on insert numbers", undefined);
    }
}


models.getNumber = (callbackFunction) => {
    try {
        let db = mongo.getDB();
        db.collection("randomNumbers", (error, collection) => {
            if (!error) {
                collection.find().toArray((error, success) => {
                    if (error) {
                        console.warn(`Error on colletion randomNumbers insert method ${error}`);
                        if (typeof callbackFunction === "function")
                            callbackFunction({ statusCode: 503, error: "Couldn't find document on database.", reason: "", details: error }, undefined);
                    }
                    else {
                        if (typeof callbackFunction === "function")
                            callbackFunction(undefined, success);
                    }
                });
            } else callbackFunction({ statusCode: 503, error: "Couldn't find randomNumbers collection.", reason: "", details: error }, undefined);
        });
    } catch (error) {
        console.warn(`Error on find number [${error}}]`);
        if (typeof callbackFunction === "function")
            callbackFunction("Error on find number", undefined);
    }
}

module.exports = models;
