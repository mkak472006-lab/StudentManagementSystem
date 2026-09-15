import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    teacher: ""
  });

  const loadCourses = async () => {
    const response = await fetch("https://studentmanagementsystem-1-wsib.onrender.com/api/courses");
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = async (e) => {
    e.preventDefault();

    await fetch("https://studentmanagementsystem-1-wsib.onrender.com/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      code: "",
      teacher: ""
    });

    loadCourses();
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    await fetch(`https://studentmanagementsystem-1-wsib.onrender.com/api/courses/${id}`, {
      method: "DELETE"
    });

    loadCourses();
  };

  return (
    <div className="content">

      <div className="page-header">
        <div>
          <h1>Courses</h1>
          <p>Manage university courses.</p>
        </div>
      </div>

      <div className="form-panel">

        <h2>Add Course</h2>

        <form className="student-form" onSubmit={addCourse}>

          <input
            placeholder="Course Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            placeholder="Course Code"
            value={form.code}
            onChange={(e) =>
              setForm({ ...form, code: e.target.value })
            }
            required
          />

          <input
            placeholder="Teacher Name"
            value={form.teacher}
            onChange={(e) =>
              setForm({ ...form, teacher: e.target.value })
            }
            required
          />

          <button className="primary-btn">
            Add Course
          </button>

        </form>
      </div>

      <div className="course-grid">

        {courses.map(course => (

          <div className="course-card" key={course.id}>

            <div className="course-icon">
              📚
            </div>

            <h2>{course.name}</h2>

            <p>Code: {course.code}</p>

            <p>Teacher: {course.teacher}</p>

            <button
              className="delete-btn"
              onClick={() => deleteCourse(course.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;