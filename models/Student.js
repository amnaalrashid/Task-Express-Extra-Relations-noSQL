const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = mongoose.model("Student", studentSchema);
