import React from "react";
import "../css/Referensi.css";

const references = [
  { id: 1, title: "", link: "https://reactjs.org/docs/getting-started.html" },
  { id: 2, title: "MDN Web Docs", link: "https://developer.mozilla.org/" },
  { id: 3, title: "W3Schools", link: "https://www.w3schools.com/" },
  { id: 4, title: "CSS-Tricks", link: "https://css-tricks.com/" },
  { id: 5, title: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
];

const Referensi = () => {
  return (
    <div className="referensi-container">
      <h1 className="referensi-title">Referensi Belajar</h1>
      <p className="referensi-description">
        Berikut adalah beberapa referensi belajar yang kami gunakan dan dapat membantu Anda untuk mengembangkan pengetahuan anda
      </p>
      <div className="referensi-list">
        {references.map((ref) => (
          <div key={ref.id} className="referensi-item">
            <a href={ref.link} target="_blank" rel="noopener noreferrer" className="referensi-link">
              {ref.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referensi;
