import { useEffect, useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: ""
  });

  const loadTeachers = async () => {
    const response = await fetch("http://localhost:5000/api/teachers");
    const data = await response.json();
    setTeachers(data);
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const addTeacher = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      email: "",
      department: ""
    });

    loadTeachers();
  };

  const deleteTeacher = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    await fetch(`http://localhost:5000/api/teachers/${id}`, {
      method: "DELETE"
    });

    loadTeachers();
  };

  return (
    <div className="content">

      <div className="page-header">
        <div>
          <h1>Teachers</h1>
          <p>Manage faculty members.</p>
        </div>
      </div>

      <div className="form-panel">

        <h2>Add Teacher</h2>

        <form className="student-form" onSubmit={addTeacher}>

          <input
            placeholder="Teacher Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
            required
          />

          <button className="primary-btn">
            Add Teacher
          </button>

        </form>
      </div>

      <div className="teacher-grid">

        {teachers.map(teacher => (

          <div className="teacher-card" key={teacher.id}>

            <div className="teacher-avatar">
              {teacher.name
                .split(" ")
                .map(word => word[0])
                .join("")
                .slice(0, 2)}
            </div>

            <h2>{teacher.name}</h2>

            <p>{teacher.email}</p>

            <p>{teacher.department}</p>

            <button
              className="delete-btn"
              onClick={() => deleteTeacher(teacher.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Teachers;