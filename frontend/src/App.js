import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "./App.css";

function App() {

  const [page, setPage] = useState(
    window.location.pathname === "/demo"
      ? "dashboard"
      : "login"
  );

  const [user, setUser] = useState(
    window.location.pathname === "/demo"
      ? { name: "Demo User" }
      : null
  );

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setPage("login");
    window.history.pushState({}, "", "/");
  };

  if (!user) {

    if (page === "signup") {
      return <Signup setPage={setPage} />;
    }

    return (
      <Login
        setPage={setPage}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="app">

      <Navbar
        page={page}
        setPage={setPage}
        onLogout={handleLogout}
        onHome={() => {
          setUser(null);
          setPage("landing");
        }}
      />

      <main>

        {page === "dashboard" && (
          <Dashboard setPage={setPage} />
        )}

        {page === "students" && (
          <Students />
        )}

        {page === "courses" && (
          <Courses />
        )}

        {page === "teachers" && (
          <Teachers />
        )}

      </main>

    </div>
  );
}

export default App;