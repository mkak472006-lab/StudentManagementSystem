function Navbar({ page, setPage, onLogout, onHome }) {
  return (
    <nav className="navbar">

      <button
        className="brand brand-button"
        onClick={onHome}
      >

        <div className="brand-icon">
          S
        </div>

        <div>
          <h2>StudentMS</h2>
          <span>Management System</span>
        </div>

      </button>

      <div className="nav-links">

        <button
          className={
            page === "dashboard"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          className={
            page === "students"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("students")}
        >
          👨‍🎓 Students
        </button>

        <button
          className={
            page === "courses"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("courses")}
        >
          📚 Courses
        </button>

        <button
          className={
            page === "teachers"
              ? "nav-btn active"
              : "nav-btn"
          }
          onClick={() => setPage("teachers")}
        >
          👨‍🏫 Teachers
        </button>

      </div>

      <button
        className="logout-btn"
        onClick={onLogout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;