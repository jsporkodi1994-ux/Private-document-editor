import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/app");
  };

  return (
    <div className="login-page">
      <h2>Login Required</h2>
      <button className="login-btn" onClick={handleLogin}>
        Login to Continue
      </button>
    </div>
  );
}
