const mongoose = require("mongoose");

const ConnectToDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to DB 😁");
    })
    .catch((err) => console.error(err.message));
};

module.exports = ConnectToDB;
