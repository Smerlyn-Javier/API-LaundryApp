const express = require("express");
const app = express();
const mongoose = require("mongoose");

//importing routes
const { UserRoutes } = require("./routes");

//importing setting
const { PORT, MONGO_URI } = require("./config");

//middleware
app.use(express.json());

//routes
app.use("/api/user", UserRoutes);

//starting the server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      return console.log(`Application running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
