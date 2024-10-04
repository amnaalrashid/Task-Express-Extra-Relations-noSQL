const Student = require("../../models/Student");
const Course = require("../../models/Course");

exports.createStudent = async (req, res, next) => {
  try {
    const { name, email, courses } = req.body;
    const student = new Student({ name, email });
    await student.save();

    // Update courses to include the new student
    await Course.updateMany(
      { _id: { $in: courses } },
      { $push: { students: student._id } }
    );

    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().populate("courses", "name code");
    res.json(students);
  } catch (error) {
    next(error);
  }
};
