const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/iNotebook";

const connectToMongo = () => {
  mongoose.connect(uri);
};

module.exports = connectToMongo;
