const Course = require("../../models/Course");

exports.createCourse = async (req, res, next) => {
  try {
    const { name, code } = req.body;
    const course = new Course({ name, code });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate("students", "name email");
    res.json(courses);
  } catch (error) {
    next(error);
  }
};
