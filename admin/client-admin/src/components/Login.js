import React, { useState } from 'react';
import '../CSS/Login.css';
import loginImage from '../photos/background.jpg';  // Pastikan path gambar benar

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (username.trim() === '' || password.trim() === '') {
      setError('Username dan password harus diisi.');
      return;
    }
  
    setError('');
  
    try {
      const response = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
  
        // Redirect ke dashboard
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Login gagal. Periksa kembali username dan password.');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat login. Coba lagi nanti.');
      console.error('Login error:', error);
    }
  };  

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login Illustration" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
