import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="custom-footer text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Kolom Kiri */}
          <div className="col-md-4">
            <p className="mb-0">&copy; 2024 | DBS GI PT Surveyor Indonesia</p>
            <p className="mb-0">Graha Surveyor Indonesia</p>
            <p className="mb-0">Jl. Jend. Gatot Subroto Kav.56</p>
            <p className="mb-0">Jakarta 12950 - Indonesia</p>
          </div>

          {/* Kolom Tengah */}
          <div className="col-md-4 my-5 my-md-3 text-center">
            <p className="mb-2">Ikuti Kami</p>
            <a href="https://www.linkedin.com/company/suveryor-id/" className="text-white me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/surveyor.id/" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/surveyor.id/" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
          </div>

          {/* Kolom Kanan */}
          <div className="col-md-4 text-center my-3 text-md-end">
            <p className="mb-2">
              <i className="bi bi-telephone-fill"></i> 0215266526
            </p>
            <p className="mb-0">
              <i className="bi bi-printer-fill"></i> 0215266525
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
