import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Matematika Kelas 10', category: 'Bab 1', link: '/QzBing10b1' },
      { id: 2, name: 'Matematika Kelas 11', category: 'Bab 2', link: '/QzBing10b2' },
      { id: 3, name: 'Matematika Kelas 12', description: 'Medan Magnetik', category: '/QzBab 3', link: 'Bing10b3' },
      { id: 4, name: 'Fisika kelas 10', category: 'Bab 4', link: '/QzBing10b4' },
      { id: 5, name: 'Fisika kelas 11', category: 'Bab 5', link: '/QzBing10b5' },
      { id: 6, name: 'Fisika kelas 12', category: 'Bab 6', link: '/QzBing10b6' },
      { id: 7, name: 'Kimia kelas 10', category: 'Bab 7', link: '/QzBing10b7' },
      { id: 8, name: 'Kimia kelas 11', category: 'Bab 8', link: '/QzBing10b8' },
      { id: 9, name: 'Kimia kelas 12', category: 'Bab 5', link: '/QzBing10b5' },
      { id: 10, name: 'Biologi kelas 10', category: 'Bab 6', link: '/QzBing10b6' },
      { id: 11, name: 'Biologi kelas 11', category: 'Bab 7', link: '/QzBing10b7' },
      { id: 12, name: 'Biologi kelas 12', category: 'Bab 8', link: '/QzBing10b8' },
      { id: 13, name: 'Bahasa Inggris kelas 10', category: 'Bab 8', link: '/QzBing10b8' },
      { id: 14, name: 'Bahasa Inggris kelas 11', category: 'Bab 5', link: '/QzBing10b5' },
      { id: 15, name: 'Bahasa Inggris kelas 12', category: 'Bab 6', link: '/QzBing10b6' },
      { id: 16, name: 'Ekonomi kelas 10', category: 'Bab 7', link: '/QzBing10b7' },
      { id: 17, name: 'Ekonomi kelas 11', category: 'Bab 8', link: '/QzBing10b8' },
    ];

    setBiologies(mockBiologies);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.biologi-biology-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-biology-section">
        <div className="container">
          <div className="section-header">
            <h2>Kuis Bahasa Inggris 10</h2>
          </div>
          <div className="biology-grid">
            {biologies.map((biology) => (
              <div key={biology.id} className="biologi-biology-card">
                <div className="card-image">
                  <img src={biology.image} alt={biology.name} />
                  <div className="card-category">{biology.category}</div>
                </div>
                <div className="card-content">
                  <h3>{biology.name}</h3>
                  <p>{biology.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(biology.link)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materi;