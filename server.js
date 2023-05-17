// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/school-DB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Course schema and model
const courseSchema = new mongoose.Schema({
  name: String,
  teacher: String,
  credits: Number,
});
const Course = mongoose.model('Course', courseSchema);

// Staff schema and model
const staffSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
});
const Staff = mongoose.model('Staff', staffSchema);

// Student schema and model
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  age: Number,
  email: String,
  phoneNumber: Number,


});
const Student = mongoose.model('Student', studentSchema);

app.post('/api/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send('Course created successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/api/courses/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/api/courses/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).send('Course deleted successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/staff', async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).send('Staff created successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/staff', async (req, res) => {
  try {
    const staff = await Staff.find({});
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/api/staff/:id', async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedStaff);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/api/staff/:id', async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(200).send('Staff deleted successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send('Student created successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/api/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).send('Student deleted successfully.');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
