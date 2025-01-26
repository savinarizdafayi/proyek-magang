import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import News from "./components/News";
import "./CSS/Footer.css";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="page-container"> 
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/dashboard" 
            element={
              <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            } />
          </Routes>
      </Router>
    </div>
  );
}


export default App;
