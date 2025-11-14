import React, { useEffect } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  // Guard logic
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>DocsApp</h2>
        <NavLink to="/app">Documents</NavLink>
        <NavLink to="/app/edit">Edit Document</NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="main-panel">
        <header className="header">Private Document Manager</header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
