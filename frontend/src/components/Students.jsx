import React, { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      program: "BS AI",
      semester: "2",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      program: "BS CS",
      semester: "4",
    },
    {
      id: 3,
      name: "Sara Ali",
      email: "sara@gmail.com",
      program: "BS SE",
      semester: "3",
    },
    {
      id: 4,
      name: "Usman Malik",
      email: "usman@gmail.com",
      program: "BS AI",
      semester: "2",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    program: "",
    semester: "",
  });

  // NEW: View/Edit states
  const [viewStudent, setViewStudent] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (
      !newStudent.name ||
      !newStudent.email ||
      !newStudent.program ||
      !newStudent.semester
    ) {
      alert("Please fill all fields.");
      return;
    }

    const student = {
      id: students.length + 1,
      name: newStudent.name,
      email: newStudent.email,
      program: newStudent.program,
      semester: newStudent.semester,
    };

    setStudents([...students, student]);

    setNewStudent({
      name: "",
      email: "",
      program: "",
      semester: "",
    });

    setShowForm(false);
  };

  // NEW: Edit
  const handleEditChange = (e) => {
    setEditStudent({
      ...editStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    setStudents(
      students.map((student) =>
        student.id === editStudent.id ? editStudent : student
      )
    );

    setEditStudent(null);
  };

  return (
    <div className="students-page">
      <style>{`
        .students-page {
          min-height: 100vh;
          padding: 40px;
          background: #f5f7fb;
          font-family: Arial, sans-serif;
        }

        .students-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .students-header h1 {
          margin: 0;
          font-size: 32px;
          color: #1f2937;
        }

        .students-header p {
          margin-top: 8px;
          color: #6b7280;
        }

        .add-btn {
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          background: #4f46e5;
          color: white;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .add-btn:hover {
          background: #3730a3;
          transform: translateY(-2px);
        }

        .form-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 25px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .form-card h2 {
          margin-top: 0;
          color: #1f2937;
        }

        .student-form {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .student-form input {
          padding: 13px;
          border: 1px solid #d1d5db;
          border-radius: 9px;
          font-size: 14px;
          outline: none;
        }

        .student-form input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-buttons {
          grid-column: span 2;
          display: flex;
          gap: 10px;
        }

        .save-btn {
          padding: 11px 20px;
          border: none;
          border-radius: 9px;
          background: #4f46e5;
          color: white;
          cursor: pointer;
        }

        .cancel-btn {
          padding: 11px 20px;
          border: none;
          border-radius: 9px;
          background: #e5e7eb;
          color: #374151;
          cursor: pointer;
        }

        .save-btn:hover {
          background: #3730a3;
        }

        .cancel-btn:hover {
          background: #d1d5db;
        }

        .students-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 15px;
          background: #f8fafc;
          color: #475569;
          font-size: 14px;
        }

        td {
          padding: 16px 15px;
          border-bottom: 1px solid #e5e7eb;
          color: #374151;
        }

        tr {
          transition: 0.2s;
        }

        tbody tr:hover {
          background: #f8fafc;
        }

        .student-name {
          font-weight: bold;
          color: #111827;
        }

        .program {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 13px;
          font-weight: bold;
        }

        .semester {
          color: #64748b;
        }

        .action-btn {
          border: none;
          background: #eef2ff;
          color: #4f46e5;
          padding: 7px 12px;
          border-radius: 7px;
          cursor: pointer;
          margin-right: 6px;
          transition: 0.2s;
        }

        .action-btn:hover {
          background: #4f46e5;
          color: white;
        }

        @media (max-width: 700px) {
          .students-page {
            padding: 20px;
          }

          .students-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .student-form {
            grid-template-columns: 1fr;
          }

          .form-buttons {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage and view all registered students.</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Student
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>Add New Student</h2>

          <form className="student-form" onSubmit={handleAddStudent}>
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={newStudent.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={newStudent.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="program"
              placeholder="Program e.g. BS AI"
              value={newStudent.program}
              onChange={handleChange}
            />

            <input
              type="text"
              name="semester"
              placeholder="Semester"
              value={newStudent.semester}
              onChange={handleChange}
            />

            <div className="form-buttons">
              <button type="submit" className="save-btn">
                Add Student
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="students-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Program</th>
              <th>Semester</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>

                <td className="student-name">
                  {student.name}
                </td>

                <td>{student.email}</td>

                <td>
                  <span className="program">
                    {student.program}
                  </span>
                </td>

                <td className="semester">
                  Semester {student.semester}
                </td>

                <td>
                  <button
                    className="action-btn"
                    onClick={() => setViewStudent(student)}
                  >
                    View
                  </button>

                  <button
                    className="action-btn"
                    onClick={() => setEditStudent({ ...student })}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW */}
      {viewStudent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              width: "400px",
              maxWidth: "90%",
            }}
          >
            <h2>Student Details</h2>

            <p><strong>Name:</strong> {viewStudent.name}</p>
            <p><strong>Email:</strong> {viewStudent.email}</p>
            <p><strong>Program:</strong> {viewStudent.program}</p>
            <p><strong>Semester:</strong> {viewStudent.semester}</p>

            <button
              className="cancel-btn"
              onClick={() => setViewStudent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* EDIT */}
      {editStudent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              width: "450px",
              maxWidth: "90%",
            }}
          >
            <h2>Edit Student</h2>

            <form
              className="student-form"
              onSubmit={handleSaveEdit}
            >
              <input
                type="text"
                name="name"
                value={editStudent.name}
                onChange={handleEditChange}
              />

              <input
                type="email"
                name="email"
                value={editStudent.email}
                onChange={handleEditChange}
              />

              <input
                type="text"
                name="program"
                value={editStudent.program}
                onChange={handleEditChange}
              />

              <input
                type="text"
                name="semester"
                value={editStudent.semester}
                onChange={handleEditChange}
              />

              <div className="form-buttons">
                <button type="submit" className="save-btn">
                  Save Changes
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditStudent(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;