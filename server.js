import express from "express";
import dotenv from "dotenv";
import connectDB from "./dbconnect.js";
import adminRouter from "./routes/adminRoute.js";

// configure dotenv -- important
dotenv.config();

//DATABASE CONNECT
connectDB();

//REST OBJECT
const app = express();

// MIDDLEWARE
app.use(express.json());

//USE ROUTES
app.use(adminRouter);

//PORT
const PORT = process.env.PORT || 9090;

//GET
app.get("/", (req, res) => {
  res.status(200).send("<h2>Football Tournament</h2>");
});

//LISTEN
app.listen(PORT, (req, res) => {
  console.log(
    `SERVER IS RUNNING ON ${process.env.DEV_MODE} MODE ON PORT ${PORT}.`
  );
});
