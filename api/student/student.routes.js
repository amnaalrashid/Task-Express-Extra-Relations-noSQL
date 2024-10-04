const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents } = require("./student.controllers");

router.post("/", createStudent);
router.get("/", getAllStudents);

module.exports = router;
