import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import DocumentList from "./components/DocumentList";
import DocumentEditor from "./components/DocumentEditor";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Parent Route */}
        <Route
          path="/app"
          element={
            <DashboardLayout
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        >
          {/* Nested Routes */}
          <Route index element={<DocumentList />} />
          <Route path="edit" element={<DocumentEditor />} />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}
