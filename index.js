const express = require("express");
const app = express();
const mongoose = require("mongoose");

//importing routes
const {
  UserRoutes,
  EmployeeRoutes,
  StatusRoutes,
  AuthRoutes,
  OrderRoutes,
  SizeRoutes,
  ColorRoutes,
  ServiceRoutes,
  ServiceStepsRoutes,
  StepsRoutes,
  TypeClothingRoutes,
  PositionRoutes,
  StatusOrderRoutes
} = require("./routes");

//importing setting
const { PORT, MONGO_URI } = require("./config");

//middleware
app.use(express.json());

//routes
app.use("/api/user", UserRoutes);
app.use("/api/employee", EmployeeRoutes);
app.use("/api/statusOrder", StatusOrderRoutes);
app.use("/api/status", StatusRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/size", SizeRoutes);
app.use("/api/color", ColorRoutes);
app.use("/api/service", ServiceRoutes);
app.use("/api/serviceSteps", ServiceStepsRoutes);
app.use("/api/steps", StepsRoutes);
app.use("/api/typeClothing", TypeClothingRoutes);
app.use("/api/position", PositionRoutes);

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
