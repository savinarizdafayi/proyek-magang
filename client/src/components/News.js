import React, { useState, useEffect, useCallback } from "react";
import "../CSS/News.css";
import NewsCard from "./newsCard";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [filter, setFilter] = useState({
    startDate: "",
    endDate: "",
    keyword: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false); // State untuk tombol
  const itemsPerPage = 6;
  const navigate = useNavigate();

  // Fetch news data
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/handleNews");
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNews(sortedData);
        setFilteredNews(sortedData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  // Handle search and toggle
  const handleSearchToggle = useCallback(() => {
    if (isSearching) {
      // Jika sedang mencari, batalkan pencarian
      setFilteredNews(news);
      setFilter({ startDate: "", endDate: "", keyword: "" });
      setIsSearching(false);
    } else {
      // Jika tidak sedang mencari, lakukan pencarian
      const { startDate, endDate, keyword } = filter;

      // Validasi input filter
      if (!startDate && !endDate && !keyword) {
        alert("Harap isi setidaknya satu filter untuk mencari berita.");
        return;
      }

      const filtered = news.filter((item) => {
        const itemDate = new Date(item.createdAt);
        const start = startDate ? new Date(startDate + "-01") : null;
        let end = endDate ? new Date(endDate + "-01") : null;

        if (end) {
          end.setMonth(end.getMonth() + 1);
          end.setDate(0);
        }

        return (
          (!start || itemDate >= start) &&
          (!end || itemDate <= end) &&
          (item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.content.toLowerCase().includes(keyword.toLowerCase()))
        );
      });

      setFilteredNews(filtered);
      setCurrentPage(1);
      setIsSearching(true);
    }
  }, [isSearching, filter, news]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Handle page change with scroll
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Scroll to position
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  // Handle card click
  const handleCardClick = (id) => {
    navigate(`/news/${id}`);
  };

  // Get latest news
  const latestNews = news.slice(0, 3);

  return (
    <div className="news-page">
      {/* Banner */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Berita</h1>
        </div>
      </header>

      {/* Berita Terbaru */}
      <section className="latest-news">
        <h2 style={{ textAlign: "center", fontSize: "35px", paddingBottom: "5px", fontWeight: "bold" }}>
          Berita Terbaru
        </h2>
        <div className="card-container">
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

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-box">
          <h3>Pencarian Berita</h3>
          <div className="filter-controls">
            <div className="filter-group">
              <label>Rentang Waktu</label>
              <div className="date-range">
                <input
                  type="month"
                  name="startDate"
                  value={filter.startDate}
                  onChange={handleFilterChange}
                />
                <span>-</span>
                <input
                  type="month"
                  name="endDate"
                  value={filter.endDate}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            <div className="filter-group">
              <label>Kata Kunci</label>
              <input
                type="text"
                name="keyword"
                placeholder="Cari berita..."
                value={filter.keyword}
                onChange={handleFilterChange}
              />
            </div>
            <button className="news-search-button" onClick={handleSearchToggle}>
              {isSearching ? "Batal Search" : "Search"}
            </button>
          </div>
        </div>
      </section>

      {/* Semua Berita */}
      <section className="all-news">
        <h2 style={{ textAlign: "center", fontSize: "35px", paddingBottom: "5px", fontWeight: "bold" }}>
          Semua Berita
        </h2>
        {filteredNews.length === 0 ? (
    <div className="no-results">
      <p style={{ textAlign: "center", fontSize: "20px", color: "gray" }}>
        Tidak ada hasil yang ditemukan.
      </p>
    </div>
  ) : (
    <div className="card-container">
      {currentItems.map((item) => (
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
  )}
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
