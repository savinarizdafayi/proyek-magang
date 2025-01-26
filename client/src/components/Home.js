import  React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NewsinHome from "./NewsinHome";
import layanan1 from "../photos/layanan-2.jpg";
import layanan2 from "../photos/layanan-3.jpg";
import layanan3 from "../photos/layanan-4.jpg";
import layanan4 from "../photos/layanan-5.jpg";

const Home = () => {
  window.scrollTo(0, 0);

  //Navigasi ke halaman Layanan
  const navigate = useNavigate();
    // Fungsi untuk mengarahkan ke halaman layanan dan menggulir
    const handleScrollToService = (positionY) => {
      navigate("/services", { state: { positionY } });
    };


  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Solusi Bisnis Terintegrasi",
      description:
        "Kami berfokus pada pengembangan strategi bisnis yang memberikan solusi yang disesuaikan untuk membantu perusahaan Anda berkembang dalam ekonomi yang dinamis dan berkelanjutan.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Layanan Profesional",
      description:
        "Tim kami yang berpengalaman mendukung berbagai sektor industri untuk menyediakan solusi bisnis yang efektif dan efisien.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Komitmen pada Keberlanjutan",
      description:
        "Kami fokus pada hasil berkualitas tinggi dengan pendekatan yang berkelanjutan.",
    },
  ];


  return (
    <div className="page-container">
    {/* Tambahkan gaya CSS untuk tombol navigasi Swiper */}
    <style>
      {`
        .swiper-button-next,
        .swiper-button-prev {
          color: #FFFFFF !important; /* Ganti warna biru menjadi putih */
        }
      `}
    </style>
    
    <div
      className="main-content"
      style={{ width: "80%", alignSelf: "center", marginTop: "30px", marginBottom: "100px" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true}}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                position:"relative",
                width: "100%",
                height: "400px",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "30px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "50px",
                  color: "#ffff",
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  maxWidth: "500px",
                }}
              >
                <h2 style={{ margin: 0, fontFamily:"crimson text", fontWeight:"bold" }}>{slide.title}</h2>
                <p style={{fontFamily:"alice", fontSize:"18px"}}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


      {/* Tentang DBS GI Section */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#133e87", // Warna latar biru
          color: "white",
          padding: "0px",
          clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)", // Membuat setengah trapesium
          marginTop:"100px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", maxWidth: "1200px", gap: "0px", margin: "auto" }}>
          {/* Gambar */}
          <div style={{ flex: 1 }}>
            <img
              src="/image/about-section.jpg" // Ganti dengan URL gambar Anda
              alt="Worker"
              style={{ width: "80%", borderRadius: "0px", objectFit: "cover", }}
            />
          </div>
          {/* Teks */}
          <div
          style={{
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "10px",
    padding: "10px", 
    color: "white",
    marginTop: "30px", 
    marginRight: "100px", 
    maxWidth: "3000px", 
  }}
          >
            <h2 style={{ margin: "10px 10px 15px 10px", fontFamily:"crimson text" }}>Tentang DBS GNI</h2>
            <p style={{ margin: "10px 10px 20px 10px", fontFamily:"alice"}}>
              DBS GNI, bagian dari PT Surveyor Indonesia, adalah partner strategis
              yang siap membantu perusahaan Anda berkembang lebih cepat dan
              efektif. Kami memahami kompleksitas dunia bisnis saat ini dan hadir
              dengan solusi berbasis riset dan inovasi. Melalui layanan kami,
              kami berkomitmen untuk mendukung Anda dalam meraih tujuan bisnis
              dengan cara yang berkelanjutan dan terarah.
            </p>
          </div>
        </div>
      </section>


{/* Layanan Kami Section */}
<section style={{ textAlign: "center", margin: "150px 0 100px" }}>
  <h2 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "40px", fontFamily: "Crimson Text" }}>
    Layanan Kami
  </h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", // Responsif, lebih besar
      gap: "30px", // Jarak antar kotak
      maxWidth: "900px", // Lebih besar
      margin: "auto",
    }}
  >
    {[
      {
        title: "Analisis Bisnis",
        desc: "Memberikan analisis mendalam untuk membantu pengambilan keputusan yang lebih efektif.",
        image: layanan1,
        positionY:"300"
      },
      {
        title: "Pengembangan Strategi",
        desc: "Merancang strategi inovatif yang mendukung pertumbuhan perusahaan.",
        image: layanan2,
        positionY:"830"
      },
      {
        title: "Optimalisasi Operasional",
        desc: "Meningkatkan efisiensi operasional untuk hasil yang lebih maksimal.",
        image: layanan3,
        positionY:"1500"
      },
      {
        title: "Manajemen Risiko",
        desc: "Mengelola risiko secara proaktif untuk menjaga keberlanjutan bisnis.",
        image: layanan4,
        positionY:"2180"
      },
    ].map((item, index) => (
      <a
        key={index}
        href="/services"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontFamily:"crimson text"
        }}
      >
        <div
          style={{
            backgroundColor: "#133e87",
            borderRadius: "15px", // Sudut lebih bulat
            overflow: "hidden",
            display: "flex",
            flexDirection: "row", // Mengatur foto di samping kanan
            height: "300px", // Tinggi kotak lebih besar
            alignItems: "center", // Menjaga teks dan gambar di tengah secara vertikal
            justifyContent: "space-between", // Menjaga jarak antara teks dan gambar
            padding: "0", // Menghapus padding pada kontainer utama
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transisi untuk efek hover
          }}
          onClick={() => handleScrollToService(item.positionY)}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Zoom-in saat hover
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} // Zoom-out saat mouse keluar
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "left", padding: "20px" }}>
            <h3
              style={{
                fontSize: "24px", // Font lebih besar
                color: "#fff",
                margin: "0 0 10px",
                textAlign: "left",
                fontWeight:"bold"
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "18px", // Font deskripsi lebih besar
                color: "#fff",
                margin: 0,
                textAlign: "left"
              }}
            >
              {item.desc}
            </p>
          </div>
          <img
            src={item.image} // Gambar placeholder
            alt={item.title}
            style={{
              width: "50%", // Foto memenuhi setengah kotak
              height: "100%",
              objectFit: "cover", // Memastikan gambar memenuhi area tanpa distorsi
              background: "#ccc", // Placeholder untuk gambar kosong
            }}
          />
        </div>
      </a>
    ))}
  </div>
</section>


{/* Why Us section */}
<section style={{ textAlign: "center", margin: "100px 0" }}>
  <h2 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "40px", fontFamily: "Crimson Text" }}>
    Mengapa Harus Kami?
  </h2>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px", // Jarak antara teks dan gambar
      flexDirection: "row", // Menyusun teks dan gambar dalam satu baris
      margin: "0",
    }}
  >
    {/* Bagian Teks */}
    <div style={{ flex: 1, textAlign: "right"}}>
      <div
        style={{
          backgroundColor: "#133e87", // Warna latar belakang biru
          borderRadius: "0px", // Sudut lebih bulat
          padding: "20px",
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "10px", fontFamily: "Crimson Text", fontWeight:"bold" }}>
          Solusi Bisnis yang Disesuaikan
        </h3>
        <p style={{ fontSize: "18px", margin: 0, fontFamily: "Crimson Text" }}>
          Memberikan solusi yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#133e87",
          borderRadius: "0px",
          padding: "20px",
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "10px", fontFamily: "Crimson Text", fontWeight:"bold" }}>
          Dukungan Profesional Berpengalaman
        </h3>
        <p style={{ fontSize: "18px", margin: 0, fontFamily: "Crimson Text" }}>
        Didukung oleh tim ahli yang berpengalaman luas dan terpercaya dalam berbagai sektor industri.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#133e87",
          borderRadius: "0px",
          padding: "20px",
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "10px", fontFamily: "Crimson Text", fontWeight:"bold" }}>
          Komitmen pada Kualitas dan Keberlanjutan
        </h3>
        <p style={{ fontSize: "18px", margin: 0, fontFamily: "Crimson Text" }}>
        Fokus pada menghasilkan hasil berkualitas tinggi melalui pendekatan yang berkelanjutan, inovatif, dan ramah lingkungan.
        </p>
      </div>
    </div>

    {/* Bagian Gambar */}
    <div style={{ flex: 1 }}>
      <img
        src="/image/worker.jpg" // Ganti dengan path gambar yang sesuai
        alt="Professional Worker"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "0px", // Sudut lebih bulat untuk gambar
        }}
      />
    </div>
  </div>
</section>


<NewsinHome />

    </div>
  );
};

export default Home;
