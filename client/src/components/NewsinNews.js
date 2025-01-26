import React, { useState, useEffect } from "react";
import NewsCard from "./newsCard";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/News.css";

const NewsinNews = () => {
  const [news, setNews] = useState([]); 
  const navigate = useNavigate();

  // Ambil 3 berita terbaru dari state
  const validLatestNews = Array.isArray(news) ? news.slice(0, 3) : [];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/handleNews");
        const data = await response.json();

        // Validasi data sebelum diatur ke state
        if (Array.isArray(data)) {
          const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setNews(sortedData); // Simpan semua berita ke state
        } else {
          console.error("Error: Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Handle card click
  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/news/${id}`); 
  };

  return (
    <section className="latest-news" style={{ margin: "80px 0", gap: "10px" }}>
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
            fontSize: "40px",
            fontFamily: "crimson text",
            color: "#000000",
            margin: "auto",
          }}
        >
          Berita Lainnya
        </h2>
        <div
          className="card-container"
          style={{ margin: "0", maxWidth: "1500px", gap: "15px" }}
        >
          {validLatestNews.map((item) => (
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
              gap: "8px",
              fontFamily: "crimson text",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Semua Berita <span style={{ fontSize: "25px" }}> &gt; </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewsinNews;
