import React from 'react';
import '../CSS/Markets.css'; 
import { useNavigate } from 'react-router-dom'; 

const Markets = () => {
  const videoId = 'OAHHA27td-A';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/deck');
  };

  return (
    <div className="markets-container">
      <h1>Markets Latest</h1>

      <iframe
        title="YouTube video"
        src={embedUrl}
        style={{ width: '100%', height: 'calc(100% - 8rem)', border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <button onClick={handleBackClick}>Deck</button>  
    </div>
  );
};

export default Markets;
