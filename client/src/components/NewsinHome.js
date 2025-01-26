import React, { useState, useEffect } from "react";
import NewsCard from "./newsCard";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/News.css";

const NewsinHome = () => {
  const [latestNews, setLatestNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/handleNews");
        const data = await response.json();
  
        // Urutkan berita berdasarkan tanggal dan ambil 3 berita terbaru
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLatestNews(sortedData.slice(0, 3)); // Simpan berita untuk ditampilkan
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
  
    fetchNews();
  }, []);
  


    // Handle card click
    const handleCardClick = (id) => {
      navigate(`/news/${id}`); 
    };
  

  return (
    <section className="latest-news" style={{margin:"100px 0", gap:"20px"}}>
    <section
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    margin: "0", 

  }}
>
  <h2
    style={{
      fontSize: "50px", 
      fontFamily: "crimson text", 
      color: "#000000", 
      margin: "auto",
    }}
  >Berita
  </h2>
  <div className="card-container" style={{margin:"0"}}>
    {latestNews.map((item) => (
      <NewsCard
        key={item.id}
        image={item.image}
        title={item.title}
        date={item.createdAt}
        content={item.content}
        onClick={() => handleCardClick(item.id)} 
      />
    ))}
  </div>
</section>

  <div
  style={{
    margin: "30px",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
  }}
>
  <Link to="/news" style={{ textDecoration: "none" }}>
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#133e87",
        color: "white",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px", // Jarak antara teks dan ikon
        fontFamily:"crimson text",
        fontWeight:"bold",
        fontSize:"25px"
      }}
    >
      Semua Berita <span style={{ fontSize: "25px" }}> &gt; </span>
    </button>
  </Link>
</div>


    </section>
  );
};

export default NewsinHome;
