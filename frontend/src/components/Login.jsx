import { useState } from "react";

function Login({ setPage, onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (response.ok) {
      onLogin(data.user);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">S</div>

        <h1>Welcome Back</h1>

        <p>Login to Student Management System</p>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        {message && (
          <div className="error-message">
            {message}
          </div>
        )}

        <p className="switch-auth">
          Don't have an account?{" "}
          <span onClick={() => setPage("signup")}>
            Create Account
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;