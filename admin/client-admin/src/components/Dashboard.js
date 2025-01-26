import React, { useState, useEffect } from 'react';
import '../CSS/Dashboard.css';
import axios from 'axios';

function CreateNewsForm({ news, onSubmit, onCancel, onDelete }) {
  const [title, setTitle] = useState(news?.title || '');
  const [content, setContent] = useState(news?.content || '');
  const [imageUrl, setImageUrl] = useState(news?.image || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  useEffect(() => {
    if (!news) {
      setTitle('');
      setContent('');
      setImageUrl('');
    } else {
      setTitle(news.title || '');
      setContent(news.content || '');
      setImageUrl(news.image || '');
    }
  }, [news]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!title || !content || !imageUrl) {
      setError('Judul, Konten, dan Gambar harus diisi!');
      setLoading(false);
      return;
    }

    try {
      if (news) {
        await axios.put(`http://localhost:5001/apiadmin/news/${news.id}`, {
          title,
          content,
          image_url: imageUrl,
        });
        alert('Berita berhasil diperbarui!');
      } else {
        await axios.post('http://localhost:5001/apiadmin/news/add', {
          title,
          content,
          image_url: imageUrl,
        });
        alert('Berita berhasil diposting!');
      }
      onSubmit();
    } catch (err) {
      setError('Gagal mengirim berita. Coba lagi!');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/apiadmin/news/${news.id}`);
      alert('Berita berhasil dihapus!');
      onDelete();
    } catch (err) {
      alert('Gagal menghapus berita. Coba lagi!');
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2>{news ? 'Edit Berita' : 'Buat Berita Baru'}</h2>
      <label>
        Judul Berita:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul berita"
        />
      </label>
      <label>
        Konten:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Masukkan konten berita"
        />
      </label>
      <label>
        URL Gambar:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Masukkan URL gambar"
        />
      </label>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Mengirim...' : 'Submit'}
      </button>
      <button type="button" onClick={onCancel}>
        Batal
      </button>

      {news && (
        <button
          type="button"
          className="delete-button"
          onClick={() => setDeleteConfirmOpen(true)}
        >
          Hapus Berita
        </button>
      )}

      {isDeleteConfirmOpen && (
        <div className="delete-confirmation-popup">
          <p>Apakah Anda yakin ingin menghapus berita ini?</p>
          <button onClick={handleDelete}>Ya, Hapus</button>
          <button onClick={handleCancelDelete}>Batal</button>
        </div>
      )}
    </form>
  );
}

function Dashboard() {
  const [newsList, setNewsList] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isViewing, setIsViewing] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/handleNews')
      .then(response => {
        const sortedNews = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNewsList(sortedNews);
      })
      .catch(() => setNewsList([]));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleCreate = () => {
    setIsCreating(true);
    setIsViewing(false);
    setSelectedNews(null);
  };

  const handleView = () => {
    setIsCreating(false);
    setIsViewing(true);
    setSelectedNews(null);
  };

  const handleEdit = (news) => {
    setSelectedNews(news);
    setIsCreating(true);
    setIsViewing(false);
  };

  const handleSubmit = () => {
    setIsCreating(false);
    setIsViewing(true);
    setSelectedNews(null);

    axios.get('http://localhost:5001/api/handleNews')
      .then(response => {
        const sortedNews = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNewsList(sortedNews);
      })
      .catch(() => setNewsList([]));
  };

  const handleDelete = () => {
    setIsCreating(false);
    setIsViewing(true);
    setSelectedNews(null);

    axios.get('http://localhost:5001/api/handleNews')
      .then(response => {
        const sortedNews = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNewsList(sortedNews);
      })
      .catch(() => setNewsList([]));
  };

  const handleCancel = () => {
    setIsCreating(false);
    setIsViewing(true);
    setSelectedNews(null);
  };

  return (
    <div className="main-content">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <div className="dashboard-content-wrapper">
          <main className="dashboard-main">
            <h1>Dashboard</h1>
            <p>Welcome, Admin!</p>
            <div className="action-buttons">
              <button className="create-button" onClick={handleCreate}>
                Buat Berita Baru
              </button>
              <button className="edit-button" onClick={handleView}>
                Edit Berita
              </button>
            </div>
            {isCreating && (
              <CreateNewsForm
                news={selectedNews}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onDelete={handleDelete}
              />
            )}
            {isViewing && (
              <div className="news-list">
                {newsList.length > 0 ? (
                  newsList.map((news) => (
                    <div
                      className="news-card"
                      key={news.id}
                      onClick={() => handleEdit(news)}
                    >
                      <img src={news.image || '/image/default.png'} alt={news.title} />
                      <div className="news-content">
                        <h3>{news.title}</h3>
                        <p>{news.content.substring(0, 100)}...</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada berita untuk ditampilkan.</p>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
