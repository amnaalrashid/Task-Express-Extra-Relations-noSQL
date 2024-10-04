const express = require("express");
const connectDb = require("./database");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const studentRouter = require("./api/student/student.routes");
const courseRouter = require("./api/courses/courses.routes");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
dotenv.config();
//init
connectDb();
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes

app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);

//middleares
app.use(errorHandler);
app.use(notFoundHandler);

//server start
app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
