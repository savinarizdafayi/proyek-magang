import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import layanan1 from "../photos/layanan-2.jpg";
import layanan2 from "../photos/layanan-3.jpg";
import layanan3 from "../photos/layanan-4.jpg";
import layanan4 from "../photos/layanan-5.jpg";
import "../CSS/Services.css";

const Services = () => {
  
  const location = useLocation();
  const positionY = location.state?.positionY;
  
  const [visibleSections, setVisibleSections] = useState([]); // Menyimpan index layanan yang terlihat
  const serviceRefs = useRef([]); // Referensi untuk setiap layanan

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            // Tambahkan index ke visibleSections jika belum ada
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 } // Animasi dipicu ketika 30% elemen terlihat
    );

    // Observe setiap elemen layanan
    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      // Bersihkan observer saat komponen di-unmount
      // eslint-disable-next-line react-hooks/exhaustive-deps
      serviceRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  useEffect(() => {
    // Tunggu hingga DOM siap sebelum menggulir
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: positionY
      });
    }, 100); // Penundaan kecil untuk memastikan halaman selesai dimuat

    return () => clearTimeout(timeout); // Membersihkan timeout saat komponen di-unmount
  }, [positionY]);

  const services = [
    {
      title: "A. Analisis Bisnis",
      content: `Kami memahami bahwa setiap keputusan bisnis memerlukan dasar yang kuat dan data yang akurat. Oleh karena itu, layanan analisis bisnis kami dirancang untuk membantu perusahaan Anda menggali peluang dan mengidentifikasi tantangan yang mungkin tidak terlihat. Melalui pendekatan berbasis data, kami memberikan gambaran komprehensif tentang kondisi bisnis Anda saat ini.`,
      image: layanan1,
    },
    {
      title: "B. Pengembangan Strategi Bisnis",
      content: `Tim kami berdedikasi untuk membantu Anda merumuskan strategi bisnis yang tidak hanya relevan, tetapi juga dapat diimplementasikan dengan mudah. Kami memulai dengan memahami visi dan misi perusahaan Anda, serta tantangan dan peluang yang Anda hadapi. Dari sini, kami menyusun pendekatan yang paling efektif untuk mencapai tujuan Anda. Fokus kami adalah menciptakan strategi yang inovatif dan berkelanjutan. Kami mempertimbangkan perkembangan pasar, kebutuhan konsumen, serta tren teknologi terbaru untuk merancang strategi yang unggul. Pendekatan kami menggabungkan kreativitas dengan analisis kritis untuk memberikan solusi yang relevan di tengah perubahan pasar yang cepat. Kami juga memastikan setiap strategi yang kami rancang dapat disesuaikan dan diadaptasi dengan mudah. Melalui kolaborasi intensif, kami memberikan dukungan yang Anda butuhkan untuk mengimplementasikan strategi dengan sukses dan mencapai hasil yang signifikan.`,
      image: layanan2,
    },
    {
      title: "C. Optimalisasi Operasional",
      content: `Kami memahami bahwa setiap keputusan bisnis memerlukan dasar yang kuat dan data yang akurat. Oleh karena itu, layanan analisis bisnis kami dirancang untuk membantu perusahaan Anda menggali peluang dan mengidentifikasi tantangan yang mungkin tidak terlihat. Melalui pendekatan berbasis data, kami memberikan gambaran komprehensif tentang kondisi bisnis Anda saat ini. Dengan analisis mendalam ini, perusahaan Anda akan lebih siap dalam merencanakan langkah-langkah strategis ke depan. Kami meninjau berbagai aspek mulai dari performa operasional hingga tren pasar yang relevan. Dengan begitu, Anda dapat lebih fokus pada area yang memiliki potensi besar untuk dikembangkan. Kami menyediakan wawasan yang dapat diandalkan untuk mendukung pertumbuhan jangka panjang. Layanan kami memastikan Anda membuat keputusan bisnis yang lebih baik dan tepat sasaran, memberikan perusahaan Anda keunggulan dalam persaingan yang dinamis.`,
      image: layanan4,
    },
    {
      title: "D. Manajemen Risiko",
      content: `Dalam lingkungan bisnis yang penuh ketidakpastian, penting bagi perusahaan Anda untuk memiliki sistem manajemen risiko yang tangguh. Layanan kami dirancang untuk membantu Anda meminimalkan potensi ancaman dan memastikan kelancaran operasional. Kami menganalisis berbagai jenis risiko, baik dari aspek internal maupun eksternal, yang dapat mempengaruhi bisnis Anda. Kami bekerja sama dengan Anda untuk mengidentifikasi area kritis yang memerlukan perhatian khusus. Dengan pendekatan yang proaktif, kami membantu Anda merancang rencana mitigasi risiko yang efisien dan terstruktur. Tujuannya adalah agar Anda dapat lebih fokus pada pengembangan bisnis tanpa khawatir akan ancaman yang tidak diinginkan. Selain itu, layanan kami mencakup pemantauan risiko secara berkelanjutan untuk menjaga perusahaan Anda tetap siap menghadapi perubahan. Dengan manajemen risiko yang terintegrasi, perusahaan Anda akan lebih kuat, fleksibel, dan siap menghadapi berbagai tantangan di masa depan.`,
      image: layanan3,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Layanan Kami</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="services-section">
        {services.map((service, index) => (
          <div
            className={`service-item ${
              visibleSections.includes(index) ? "visible" : ""
            }`}
            key={index}
            data-index={index}
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <h2 className="service-title">{service.title}</h2>
            <div className="content-wrapper">
              <p>{service.content}</p>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
