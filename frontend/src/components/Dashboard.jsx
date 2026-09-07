function Dashboard({ setPage }) {
  return (
    <div className="content">

      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">👨‍🎓</div>
          <div>
            <p>Total Students</p>
            <h2>120</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div>
            <p>Total Courses</p>
            <h2>8</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👨‍🏫</div>
          <div>
            <p>Total Teachers</p>
            <h2>15</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div>
            <p>Departments</p>
            <h2>5</h2>
          </div>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-panel">
          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <button onClick={() => setPage("students")}>
              <span>👨‍🎓</span>
              Manage Students
            </button>

            <button onClick={() => setPage("courses")}>
              <span>📚</span>
              Manage Courses
            </button>

            <button onClick={() => setPage("teachers")}>
              <span>👨‍🏫</span>
              Manage Teachers
            </button>

          </div>
        </div>

        <div className="dashboard-panel">
          <h2>System Information</h2>

          <div className="info-row">
            <span>System Status</span>
            <strong className="status">● Online</strong>
          </div>

          <div className="info-row">
            <span>Backend</span>
            <strong>Express.js</strong>
          </div>

          <div className="info-row">
            <span>Frontend</span>
            <strong>React</strong>
          </div>

          <div className="info-row">
            <span>Database</span>
            <strong>JSON Storage</strong>
          </div>
        </div>

      </div>

      <div className="dashboard-panel recent-panel">
        <h2>Recent Students</h2>

        <div className="recent-student">
          <div className="avatar">AK</div>
          <div>
            <strong>Ali Khan</strong>
            <p>BS Artificial Intelligence</p>
          </div>
          <span className="badge">Active</span>
        </div>

        <div className="recent-student">
          <div className="avatar">AR</div>
          <div>
            <strong>Ahmed Raza</strong>
            <p>BS Computer Science</p>
          </div>
          <span className="badge">Active</span>
        </div>

        <div className="recent-student">
          <div className="avatar">SA</div>
          <div>
            <strong>Sara Ali</strong>
            <p>BS Software Engineering</p>
          </div>
          <span className="badge">Active</span>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;