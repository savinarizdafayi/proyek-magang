import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/SearchResults.css"

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil parameter query dari URL (misal, ?q=produk)
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("q");
    if (queryParam) {
      setQuery(queryParam);
      fetchSearchResults(queryParam);
    }
  }, [location]);

  const fetchSearchResults = async (searchQuery) => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);
    try {
      
      const response = await fetch(`http://localhost:3001/api/search?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError("Terjadi kesalahan saat memuat data. Silakan coba lagi.");
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (id, type) => {
    // Mengarahkan ke halaman detail berdasarkan ID dan tipe (layanan atau berita)
    if (type === "newsposts") {
      navigate(`/news/${id}`);
    } else {
      navigate(`/services`);
    }
  };

  return (
    <div className="page-container-result">
      <div className="main-content-result">
        <h2>Hasil yang cocok dengan: "{query}"</h2>
        {loading && <p>Memuat hasil pencarian...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && results.length === 0 && <p>Tidak ada hasil yang ditemukan.</p>}
        {!loading && !error && results.length > 0 && (
          <>
            <p style={{marginBottom:"20px"}}>{results.length} hasil ditemukan</p>
            <div className="results-container">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="result-card"
                  onClick={() => handleCardClick(item.id, item.type)}
                >
                  <div className="card-header">
                    <span className={`badge badge-${item.type}`}>
                      {item.type === "newsposts" ? "Berita" : "Layanan"}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content.slice(0, 60)}...</p> {/* Menampilkan sebagian konten */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
