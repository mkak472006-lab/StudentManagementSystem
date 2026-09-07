const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

const files = {
  students: path.join(dataFolder, "students.json"),
  courses: path.join(dataFolder, "courses.json"),
  teachers: path.join(dataFolder, "teachers.json"),
  users: path.join(dataFolder, "users.json")
};

function createFile(file, defaultData = []) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(defaultData, null, 2));
  }
}

createFile(files.students, [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@example.com",
    program: "BS AI",
    semester: "2",
    status: "Active"
  },
  {
    id: 2,
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    program: "BS CS",
    semester: "4",
    status: "Active"
  },
  {
    id: 3,
    name: "Sara Ali",
    email: "sara@example.com",
    program: "BS SE",
    semester: "3",
    status: "Active"
  }
]);

createFile(files.courses, [
  {
    id: 1,
    name: "Object Oriented Programming",
    code: "OOP101",
    teacher: "Dr. Ahmed"
  },
  {
    id: 2,
    name: "Web Development",
    code: "WEB201",
    teacher: "Dr. Sara"
  },
  {
    id: 3,
    name: "Artificial Intelligence",
    code: "AI301",
    teacher: "Dr. Hamza"
  }
]);

createFile(files.teachers, [
  {
    id: 1,
    name: "Dr. Ahmed",
    email: "ahmed@university.edu",
    department: "Computer Science"
  },
  {
    id: 2,
    name: "Dr. Sara",
    email: "sara@university.edu",
    department: "Software Engineering"
  }
]);

createFile(files.users, []);

function readData(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeData(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

/* =========================
   STUDENTS
========================= */

app.get("/api/students", (req, res) => {
  res.json(readData(files.students));
});

app.post("/api/students", (req, res) => {
  const students = readData(files.students);

  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    program: req.body.program,
    semester: req.body.semester,
    status: "Active"
  };

  students.push(newStudent);
  writeData(files.students, students);

  res.status(201).json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
  const students = readData(files.students);
  const id = Number(req.params.id);

  const index = students.findIndex(student => student.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = {
    ...students[index],
    ...req.body
  };

  writeData(files.students, students);

  res.json(students[index]);
});

app.delete("/api/students/:id", (req, res) => {
  const students = readData(files.students);
  const id = Number(req.params.id);

  const updatedStudents = students.filter(student => student.id !== id);

  writeData(files.students, updatedStudents);

  res.json({ message: "Student deleted successfully" });
});

/* =========================
   COURSES
========================= */

app.get("/api/courses", (req, res) => {
  res.json(readData(files.courses));
});

app.post("/api/courses", (req, res) => {
  const courses = readData(files.courses);

  const newCourse = {
    id: Date.now(),
    name: req.body.name,
    code: req.body.code,
    teacher: req.body.teacher
  };

  courses.push(newCourse);
  writeData(files.courses, courses);

  res.status(201).json(newCourse);
});

app.delete("/api/courses/:id", (req, res) => {
  const courses = readData(files.courses);
  const id = Number(req.params.id);

  const updatedCourses = courses.filter(course => course.id !== id);

  writeData(files.courses, updatedCourses);

  res.json({ message: "Course deleted successfully" });
});

/* =========================
   TEACHERS
========================= */

app.get("/api/teachers", (req, res) => {
  res.json(readData(files.teachers));
});

app.post("/api/teachers", (req, res) => {
  const teachers = readData(files.teachers);

  const newTeacher = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    department: req.body.department
  };

  teachers.push(newTeacher);
  writeData(files.teachers, teachers);

  res.status(201).json(newTeacher);
});

app.delete("/api/teachers/:id", (req, res) => {
  const teachers = readData(files.teachers);
  const id = Number(req.params.id);

  const updatedTeachers = teachers.filter(teacher => teacher.id !== id);

  writeData(files.teachers, updatedTeachers);

  res.json({ message: "Teacher deleted successfully" });
});

/* =========================
   AUTHENTICATION
========================= */

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const users = readData(files.users);

  const existingUser = users.find(
    user => user.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    return res.status(400).json({
      message: "Email already registered"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  writeData(files.users, users);

  res.status(201).json({
    message: "Account created successfully"
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = readData(files.users);

  const user = users.find(
    user => user.email.toLowerCase() === email.toLowerCase()
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

/* =========================
   SERVER
========================= */

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});