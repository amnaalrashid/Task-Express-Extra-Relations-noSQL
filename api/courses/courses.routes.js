const express = require("express");
const router = express.Router();
const { createCourse, getAllCourses } = require("./courses.controllers");

router.post("/", createCourse);
router.get("/", getAllCourses);

module.exports = router;
