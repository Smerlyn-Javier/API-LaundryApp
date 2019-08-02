//importing express
const express = require("express");
const app = express();

//importing routes

//importing setting
const { PORT } = require("./config");

//middleware

//routes

//starting the server
app.listen(PORT, () => {
  return console.log(`Application running on port ${PORT}`);
});
