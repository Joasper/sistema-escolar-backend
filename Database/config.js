const mongoose = require("mongoose");

const ConectionDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/sistemaescolar");
    console.log(
      "Connected to Mongo DB with Mongoose connection pool available"
    );
  } catch (error) {
    console.log("Error connecting to Mongoose database");
  }
};
module.exports = { ConectionDB };
