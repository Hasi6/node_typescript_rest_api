
export interface Config {
  mongoURI: string;
}


var databaseData: Config;
if (process.env.NODE_ENV === "production") {
  databaseData = {
    mongoURI:
      "mongodb+srv://Hasitha:fEOCl1YUUCod408Z@cluster0-qhpzc.azure.mongodb.net/test?retryWrites=true&w=majority",
  };
} else {
  databaseData = {
    mongoURI: "mongodb+srv://Hasitha:fEOCl1YUUCod408Z@cluster0-qhpzc.azure.mongodb.net/test?retryWrites=true&w=majority",
  };
}

export default databaseData;
