import React, { useState } from "react";
import axios from "axios";
import "../CSS/Login.css";
import workerImage from "../photos/worker.jpg";
import { useNavigate } from 'react-router-dom'; // Impor useNavigate untuk redireksi

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // State untuk menyimpan pesan error

  const navigate = useNavigate(); // Inisialisasi navigate untuk redireksi

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      
      if (response.data.success) {
        // Menyimpan token jika login berhasil
        localStorage.setItem('authToken', response.data.token);
        // Redirect ke halaman dashboard setelah login
        navigate('/dashboard');  // Ganti '/dashboard' sesuai dengan halaman tujuan
      } else {
        // Menampilkan pesan error jika login gagal
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Type your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Menampilkan pesan error jika login gagal */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>

      <div className="login-image">
        <img src={workerImage} alt="Login visual" />
      </div>
    </div>
  );
};

export default Login;
