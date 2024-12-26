import React from "react";
import "../css/Referensi.css";

const references = [
  { id: 1, title: "Matematika kelas 10", link: "https://www.ruangguru.com/blog/c/matematika/matematika-sma-kelas-10" },
  { id: 1, title: "Matematika kelas 10", link: "https://kuadran.co/blog/materi/materi-pelajaran-matematika-kelas-10-kurikulum-merdeka-semester-1-dan-2" },
  { id: 1, title: "Matematika kelas 10", link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-X.pdf" },
  { id: 1, title: "Matematika kelas 10", link: "https://id.scribd.com/document/407881934/Berikut-ini-materi-pelajaran-Matematika-SMA-kelas-10-docx" },
  { id: 2, title: "Matematika kelas 11", link: "https://developer.mozilla.org/" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.brainacademy.id/blog/teori-peluang-matematika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/materi-kaidah-pencacahan" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/kekongruenan-dan-kesebangunan" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/materi-statistika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.zenius.net/blog/dimensi-tiga-matematika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.ruangguru.com/blog/konsep-limit-fungsi-aljabar-dan-sifat-sifatnya" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.ruangguru.com/blog/turunan-fungsi-aljabar" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.quipper.com/id/blog/mapel/matematika/distribusi-binomial/" },
  { id: 4, title: "Kimia kelas 10", link: "https://css-tricks.com/" },
  { id: 4, title: "Kimia kelas 11", link: "https://css-tricks.com/" },
  { id: 4, title: "Kimia kelas 12", link: "https://css-tricks.com/" },
  { id: 5, title: "Fisika kelas 10", link: "https://www.pijarbelajar.id/blog/suhu-dan-kalor-perbedaan-rumus-dan-contoh-soal" },
  { id: 5, title: "Fisika kelas 10", link: "https://www.sampoernaacademy.sch.id/id/hukum-hooke/" },
  { id: 5, title: "Fisika kelas 10", link: "https://www.gramedia.com/literasi/hukum-hooke/" },
  { id: 5, title: "Fisika kelas 10", link: "https://www.zenius.net/blog/materi-fisika-sma-usaha-dan-energi#Contoh_Soal_Usaha_dan_Energi " },
  { id: 5, title: "Fisika kelas 11", link: "https://akupintar.id/belajar/-/online/materi/11-mia/fisika/56771" },
  { id: 5, title: "Fisika kelas 11", link: "https://belajar.kemdikbud.go.id/" },
  { id: 5, title: "Fisika kelas 11", link: "https://blog.smaisakalibrary.my.id/koleksi-digital/e-modul/e-modul-fisika/" },
  { id: 5, title: "Fisika kelas 12", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Biologi kelas 10", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Biologi kelas 11", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Biologi kelas 12", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Bahasa Inggris kelas 10", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Bahasa Inggris kelas 11", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Bahasa Inggris kelas 12", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Ekonomi kelas 10", link: "https://www.freecodecamp.org/" },
  { id: 5, title: "Ekonomi kelas 11", link: "https://www.freecodecamp.org/" },
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
