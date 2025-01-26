import React, { useState } from 'react';
import '../CSS/Dashboard.css'; // Import CSS untuk styling

function Dashboard() {
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsCreating(false);
    setIsEditing(true);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-logo">Divisi DBS GI PT Surveyor Indonesia</div>
        <div className="header-user">Nama Admin</div>
      </header>

      <div className="edit-content">
      <div className="dashboard-sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Berita</li>
          <li>Histori</li>
        </ul>
        <button className="logout-button">Logout</button>
      </div>

      <main className="dashboard-main">
        <h1>Dashboard</h1>
        <p>Welcome, Admin!</p>

        <div className="action-buttons">
          <button className="create-button" onClick={handleCreate}>Buat Berita Baru</button>
          <button className="edit-button" onClick={handleEdit}>Edit Berita</button>
        </div>

        {isCreating && <CreateNewsForm />}
        {isEditing && <EditNewsForm />}
      </main>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2024 | DBS GI PT Surveyor Indonesia</p>
        <p>Graha Surveyor Indonesia</p>
        <p>Jl. Jend. Gatot Subroto Kav.56 Jakarta 12950 - Indonesia</p>
      </footer>
    </div>
  );
}

function CreateNewsForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/apiadmin/news/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTitle('');
        setContent('');
      } else {
        setMessage(data.message || 'Gagal menambahkan berita.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Terjadi kesalahan.');
    }
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2>Buat Berita Baru</h2>
      {message && <p>{message}</p>}
      <label>
        Judul Berita:
        <input
          type="text"
          placeholder="Masukkan judul berita"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Konten:
        <textarea
          placeholder="Masukkan konten berita"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function EditNewsForm() {
  return (
    <form className="news-form">
      <h2>Edit Berita</h2>
      <label>
        Pilih Berita:
        <select>
          <option value="1">Berita 1</option>
          <option value="2">Berita 2</option>
        </select>
      </label>
      <label>
        Judul Baru:
        <input type="text" placeholder="Masukkan judul baru" />
      </label>
      <label>
        Konten Baru:
        <textarea placeholder="Masukkan konten baru"></textarea>
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default Dashboard;
