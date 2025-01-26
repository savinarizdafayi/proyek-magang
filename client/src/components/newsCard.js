import React, { memo } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import "../CSS/News.css";

const NewsCard = memo(({ image, title, date, content, onClick }) => {
  const formattedDate = format(new Date(date), "dd MMMM yyyy", { locale: id });

  // Memotong konten jika ada, dengan fallback ke string kosong
  const shortContent = content ? content.split(" ").slice(0, 10).join(" ") : ""; 
  const finalContent = content && shortContent.length < content.length
    ? `${shortContent}...`
    : shortContent;

  // Memotong judul jika ada, dengan fallback ke string kosong
  const shortTitle = title ? title.split(" ").slice(0, 5).join(" ") : ""; 
  const finalTitle = title && shortTitle.length < title.length
    ? `${shortTitle}...`
    : shortTitle;

  return (
    <div className="news-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="news-card-image">
        <img src={image} alt={title} />
      </div>
      <span className="news-card-date">{formattedDate}</span>
      <div className="news-card-content">
        <h3>{finalTitle}</h3>
        <p>{finalContent}</p> {/* Menampilkan konten yang sudah dipotong */}
      </div>
    </div>
  );
});

export default memo(NewsCard);
