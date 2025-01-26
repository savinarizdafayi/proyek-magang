import React from "react";
import workerImage from "../photos/worker.jpg"
import "../CSS/About.css"; // Pastikan file CSS-nya sesuai

const About = () => {
  window.scrollTo(0,0);
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Tentang Kami</h1>
        </div>
      </header>

      {/* About Section */}
      <div className="about-container">
      <section className="about-section">
        <div className="content">
          <div className="text">
            <h2>Tentang Kami</h2>
            <p style={{paddingRight: "50px"}}>
            Selamat datang di DBS GI PT Surveyor Indonesia! Kami adalah tim profesional yang berfokus pada pengembangan strategi bisnis dan inovasi, mendukung perusahaan dalam mencapai tujuan dengan layanan yang berbasis data dan wawasan mendalam. Sebagai bagian dari PT Surveyor Indonesia, DBS GI memiliki komitmen untuk membantu perusahaan mengambil langkah maju yang strategis.
            </p>
          </div>
          <div className="image">
            <img
              src={workerImage}
              alt="Worker"
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="content">
          <div className="text" style={{maxWidth:"1000px"}}>
            <h2 style={{paddingLeft:"50px", textAlign:"right"}}>Visi Kami</h2>
            <p style={{paddingLeft:"50px", textAlign:"right"}}>
              Menjadi mitra terpercaya dalam pengembangan strategi bisnis yang unggul di Indonesia, mendukung berbagai sektor industri dengan solusi yang dapat diandalkan, relevan, dan berdampak jangka panjang.
            </p>
          </div>
          <div className="image">
            <img
              src={workerImage}
              alt="Worker"
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="content">
          <div className="text">
            <h2>Misi Kami</h2>
            <p style={{marginRight:"50px"}}>
            Misi kami adalah menyediakan layanan strategi bisnis dan analisis yang memberdayakan perusahaan untuk menghadapi tantangan, meningkatkan efisiensi, dan meraih keunggulan kompetitif. Kami percaya bahwa dengan pendekatan yang kolaboratif dan berbasis data, kami dapat membantu perusahaan berkembang dengan cara yang berkelanjutan dan inovatif.
            </p>
          </div>
          <div className="image">
            <img
              src={workerImage}
              alt="Worker"
              className="about-image"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;

