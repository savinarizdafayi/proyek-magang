import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/NewsDetail.css'; 
import NewsinNews from './NewsinNews';

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/news/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching news detail:', error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!news) return <div style={{justifyContent:"center"}}>Loading...</div>;

  // URL halaman saat ini
  const currentURL = window.location.href;
  const encodedURL = encodeURIComponent(currentURL);
  const encodedTitle = encodeURIComponent(news.title);

  return (
    <div className="news-detail-container">
      <div className="news-detail-content">
        <p className="news-date">{new Date(news.createdAt).toLocaleDateString()}</p>
        <h1 className="news-title">{news.title}</h1>
        <div className="news-image">
          <img src={news.image} alt={news.title} />
        </div>
        <div className="news-content">
          <p>{news.content}</p>
        </div>
        <div className="news-social">
        <p>Bagikan</p>
        <div className="social-icons">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x" style={{ color: '#4267B2' }}></i>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?text=${encodedTitle} - ${encodedURL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp fa-2x" style={{ color: '#25D366' }}></i>
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" style={{ color: '#1DA1F2' }}></i>
          </a>

          {/* Salin Link */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(currentURL);
              alert('Link berhasil disalin ke clipboard!');
            }}
          >
            <i className="fas fa-link fa-2x" style={{ color: '#555' }}></i>
          </a>
        </div>
        </div>
      </div>
      <NewsinNews />
    </div>
  );
};

export default NewsDetail;
