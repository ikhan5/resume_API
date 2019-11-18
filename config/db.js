const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGOHQ_URL ||db , {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      socketTimeoutMS: 300000 
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch(err => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
