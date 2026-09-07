import { useState } from "react";

function Signup({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    setMessage(data.message);

    if (response.ok) {
      setForm({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => {
        setPage("login");
      }, 1000);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">S</div>

        <h1>Create Account</h1>

        <p>Join Student Management System</p>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button className="auth-button">
            Create Account
          </button>

        </form>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        <p className="switch-auth">
          Already have an account?{" "}
          <span onClick={() => setPage("login")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;