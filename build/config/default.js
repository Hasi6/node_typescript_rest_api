"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var databaseData;
if (process.env.NODE_ENV === "production") {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:fEOCl1YUUCod408Z@cluster0-qhpzc.azure.mongodb.net/test?retryWrites=true&w=majority",
    };
}
else {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:fEOCl1YUUCod408Z@cluster0-qhpzc.azure.mongodb.net/test?retryWrites=true&w=majority",
    };
}
exports.default = databaseData;
