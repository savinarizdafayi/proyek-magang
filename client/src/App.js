import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Footer from './components/Footer';
import "./CSS/Footer.css";
import SearchResults from './components/SearchResults';
import NewsDetail from './components/NewsDetail';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="page-container"> 
      <Router>
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ConditionalLayout>
      </Router>
    </div>
  );
}

function ConditionalLayout({ children }) {
  const location = useLocation();

  // Tentukan halaman di mana Navbar dan Footer harus disembunyikan
  const hideLayout = location.pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Navigation />}
      <div className="main-content">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
