function Landing({ setPage }) {
  return (
    <div className="landing-page">

      <nav className="landing-navbar">

        <div className="landing-brand">
          <div className="landing-logo">S</div>

          <div>
            <h2>StudentMS</h2>
            <span>Management System</span>
          </div>
        </div>

        <div className="landing-nav-buttons">
          <button
            onClick={() => setPage("login")}
            className="landing-login"
          >
            Login
          </button>

          <button
            onClick={() => setPage("signup")}
            className="landing-signup"
          >
            Sign Up
          </button>
        </div>

      </nav>

      <section className="landing-hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ Modern Student Management
          </div>

          <h1>
            Manage Your Students
            <br />
            <span>Smarter & Faster.</span>
          </h1>

          <p>
            A complete student management system designed to
            manage students, courses and teachers in one simple
            and powerful platform.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary"
              onClick={() => setPage("signup")}
            >
              Get Started →
            </button>

            <button
              className="hero-secondary"
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </div>

        </div>

        <div className="hero-dashboard">

          <div className="mini-header">
            <div className="mini-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <strong>StudentMS</strong>
          </div>

          <div className="mini-content">

            <div className="mini-card">
              <span>👨‍🎓</span>
              <div>
                <small>Students</small>
                <strong>120</strong>
              </div>
            </div>

            <div className="mini-card">
              <span>📚</span>
              <div>
                <small>Courses</small>
                <strong>8</strong>
              </div>
            </div>

            <div className="mini-card">
              <span>👨‍🏫</span>
              <div>
                <small>Teachers</small>
                <strong>15</strong>
              </div>
            </div>

          </div>

          <div className="mini-table">

            <div>
              <strong>Recent Students</strong>
            </div>

            <div className="mini-student">
              <span>AK</span>
              Ali Khan
              <b>Active</b>
            </div>

            <div className="mini-student">
              <span>AR</span>
              Ahmed Raza
              <b>Active</b>
            </div>

            <div className="mini-student">
              <span>SA</span>
              Sara Ali
              <b>Active</b>
            </div>

          </div>

        </div>

      </section>

      <section className="landing-features">

        <div className="feature-card">
          <div>👨‍🎓</div>
          <h3>Student Management</h3>
          <p>
            Add, edit, search and manage student records easily.
          </p>
        </div>

        <div className="feature-card">
          <div>📚</div>
          <h3>Course Management</h3>
          <p>
            Keep track of courses and assigned teachers.
          </p>
        </div>

        <div className="feature-card">
          <div>👨‍🏫</div>
          <h3>Teacher Management</h3>
          <p>
            Manage faculty information from one place.
          </p>
        </div>

      </section>

      <footer className="landing-footer">
        © 2026 StudentMS — Student Management System
      </footer>

    </div>
  );
}

export default Landing;