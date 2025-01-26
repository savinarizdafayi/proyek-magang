import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react"; // Tambahkan useEffect dan useRef
import "../CSS/Navbar.css";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false); // State untuk mengatur visibilitas form pencarian
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null); // Referensi untuk elemen search box
  const navigate = useNavigate(); // Navigasi ke halaman SearchResults

// Searchbox animation
useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

// Searchbox search
const handleSearchSubmit = (e) => {
  e.preventDefault();

  if (searchQuery.trim()) {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`); // Navigasi ke hasil pencarian
    setSearchQuery(""); // Hapus input di kotak pencarian
    setShowSearch(false); // Tutup search box
  }
};


  const closeMenu = () => setMenuOpen(false); // Fungsi untuk menutup menu

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="logo192.png" alt="Logo" style={{ width: "70px", marginRight: "5px" }} />
        <img src="logo-bumn.png" alt="Logo" style={{ width: "70px", marginRight: "15px" }} />
        <div className="navbar-text text-dbs" style={{ alignItems: "left" }}>
          <span><b>DBS GNI</b></span>
          <br />
          <span><b>PT Surveyor Indonesia</b></span>
        </div>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <CustomLink to="/" onClick={closeMenu}>
          <div className="nav-item menu-box">
            <span className="nav-menu">⠀⠀Home⠀⠀</span>
          </div>
        </CustomLink>

        <CustomLink to="/Services" onClick={closeMenu}>
          <div className="nav-item nav-menu">
            <span>⠀⠀Layanan⠀⠀</span>
            <ul className="dropdown-menu" onClick={closeMenu}>
              <li onClick={closeMenu}><span>Layanan Kami</span></li>
              <li className="nav-item sub-dropdown">
                <span>Layanan Online</span>
                <ul className="sub-dropdown-menu">
  <li>
    <span
      onClick={() => window.open("https://slo.ptsi.co.id/auth/home", "_blank")}
      style={{ cursor: "pointer", color: "inherit" }}
    >
      Sertifikasi Laik Operasi (SLO)
    </span>
    <div className="description-menu" style={{ color: "black", fontSize: "16px" }}>
      Pelayanan inspeksi dan sertifikasi SLO
    </div>
  </li>
  <li>
    <span
      onClick={() => window.open("https://sic.ptsi.co.id/", "_blank")}
      style={{ cursor: "pointer", color: "inherit" }}
    >
      Sertifikasi Terpadu
    </span>
    <div className="description-menu" style={{ color: "black", fontSize: "16px" }}>
      Pelayanan sertifikasi produk.
    </div>
  </li>
  <li>
    <span
      onClick={() => window.open("https://e-tkdn.ptsi.co.id/", "_blank")}
      style={{ cursor: "pointer", color: "inherit" }}
    >
      TKDN
    </span>
    <div className="description-menu" style={{ color: "black", fontSize: "16px" }}>
      Pelayanan verifikasi kegiatan.
    </div>
  </li>
</ul>

              </li>
            </ul>
          </div>
        </CustomLink>

        <CustomLink to="/News" onClick={closeMenu}>
          <div className="nav-item menu-box">
            <span className="nav-menu">⠀⠀Berita⠀⠀</span>
          </div>
        </CustomLink>

        <CustomLink to="/About" onClick={closeMenu}>
          <div className="nav-item menu-box">
            <span className="nav-menu">⠀⠀Tentang Kami⠀⠀</span>
          </div>
        </CustomLink>

        <i className="bi bi-search c-search" onClick={() => setShowSearch((prev) => !prev)}></i>
        {showSearch && (
          <div className="search-box" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Cari di Website DBS GI..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                onClick={closeMenu}
                className="search-button"
                style={{
                  backgroundColor: '#133E87',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                Cari
              </button>
            </form>
          </div>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, onClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick} {...props}>{children}</Link>
    </li>
  );
}
