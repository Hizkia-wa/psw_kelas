import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';

// Import komponen kelas dari berbagai mata pelajaran
import MatematikaKelas10 from './pages/MateriMTK10';
import MatematikaKelas11 from './pages/MateriMTK11';
import MatematikaKelas12 from './pages/MateriMTK12';
import BiologiKelas10 from './pages/MateriBiologi10';
import BiologiKelas11 from './pages/MateriBiologi11';
import BiologiKelas12 from './pages/MateriBiologi12';
import FisikaKelas10 from './pages/MateriFisika10';
import FisikaKelas11 from './pages/MateriFisika11';
import FisikaKelas12 from './pages/MateriFisika12';
import KimiaKelas10 from './pages/MateriKimia10';
import KimiaKelas11 from './pages/MateriKimia11';
import KimiaKelas12 from './pages/MateriKimia12';
import BahasaInggrisKelas10 from './pages/MateriBing10';
import BahasaInggrisKelas11 from './pages/MateriBing11';
import BahasaInggrisKelas12 from './pages/MateriBing12';
import EkonomiKelas10 from './pages/MateriEkonomi10';
import EkonomiKelas11 from './pages/MateriEkonomi11';
import EkonomiKelas12 from './pages/MateriEkonomi12';

// Import komponen tambahan
import Fisika12b1 from './components/Fsk12b1';
import Fisika12b2 from './components/Fsk12b2';
import Fisika12b3 from './components/Fsk12b3';
import Fisika12b4 from './components/Fsk12b4';
import Fisika12b5 from './components/Fsk12b5';
import Fisika12b6 from './components/Fsk12b6';
import Fisika12b7 from './components/Fsk12b7';
import Fisika12b8 from './components/Fsk12b8';
import Bgl11b1 from './components/Bgl11b1';
import Bgl11b2 from './components/Bgl11b2';
import Bgl11b3 from './components/Bgl11b3';
import Bgl11b4 from './components/Bgl11b4';
import Bgl11b5 from './components/Bgl11b5';
import Bgl11b6 from './components/Bgl11b6';
import Bgl11b7 from './components/Bgl11b7';
import Bgl11b8 from './components/Bgl11b8';
import Eko10b1 from './components/Eko10b1';
import Eko10b2 from './components/Eko10b2';
import Eko10b3 from './components/Eko10b3';
import Eko10b4 from './components/Eko10b4';
import Eko10b5 from './components/Eko10b5';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rute untuk Matematika */}
        <Route path="/matematika/kelas-10" element={<MatematikaKelas10 />} />
        <Route path="/matematika/kelas-11" element={<MatematikaKelas11 />} />
        <Route path="/matematika/kelas-12" element={<MatematikaKelas12 />} />
        {/* Rute untuk Biologi */}
        <Route path="/biologi/kelas-10" element={<BiologiKelas10 />} />
        <Route path="/biologi/kelas-11" element={<BiologiKelas11 />} />
        <Route path="/biologi/kelas-12" element={<BiologiKelas12 />} />
        {/* Rute untuk Fisika */}
        <Route path="/fisika/kelas-10" element={<FisikaKelas10 />} />
        <Route path="/fisika/kelas-11" element={<FisikaKelas11 />} />
        <Route path="/fisika/kelas-12" element={<FisikaKelas12 />} />
        {/* Rute untuk Kimia */}
        <Route path="/kimia/kelas-10" element={<KimiaKelas10 />} />
        <Route path="/kimia/kelas-11" element={<KimiaKelas11 />} />
        <Route path="/kimia/kelas-12" element={<KimiaKelas12 />} />
        {/* Rute untuk Bahasa Inggris */}
        <Route path="/bahasa-inggris/kelas-10" element={<BahasaInggrisKelas10 />} />
        <Route path="/bahasa-inggris/kelas-11" element={<BahasaInggrisKelas11 />} />
        <Route path="/bahasa-inggris/kelas-12" element={<BahasaInggrisKelas12 />} />
        {/* Rute untuk Ekonomi */}
        <Route path="/ekonomi/kelas-10" element={<EkonomiKelas10 />} />
        <Route path="/ekonomi/kelas-11" element={<EkonomiKelas11 />} />
        <Route path="/ekonomi/kelas-12" element={<EkonomiKelas12 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/fisika/kelas-12/bab-1" element={<Fisika12b1 />} />
        <Route path="/fisika/kelas-12/bab-2" element={<Fisika12b2 />} />
        <Route path="/fisika/kelas-12/bab-3" element={<Fisika12b3 />} />
        <Route path="/fisika/kelas-12/bab-4" element={<Fisika12b4 />} />
        <Route path="/fisika/kelas-12/bab-5" element={<Fisika12b5 />} />
        <Route path="/fisika/kelas-12/bab-6" element={<Fisika12b6 />} />
        <Route path="/fisika/kelas-12/bab-7" element={<Fisika12b7 />} />
        <Route path="/fisika/kelas-12/bab-8" element={<Fisika12b8 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/biologi/kelas-11/bab-1" element={<Bgl11b1 />} />
        <Route path="/biologi/kelas-11/bab-2" element={<Bgl11b2 />} />
        <Route path="/biologi/kelas-11/bab-3" element={<Bgl11b3 />} />
        <Route path="/biologi/kelas-11/bab-4" element={<Bgl11b4 />} />
        <Route path="/biologi/kelas-11/bab-5" element={<Bgl11b5 />} />
        <Route path="/biologi/kelas-11/bab-6" element={<Bgl11b6 />} />
        <Route path="/biologi/kelas-11/bab-7" element={<Bgl11b7 />} />
        <Route path="/biologi/kelas-11/bab-8" element={<Bgl11b8 />} />
        {/* Rute untuk Materi Ekonomi 10 */}
        <Route path="/ekonomi/kelas-10/bab-1" element={<Eko10b1 />} />
        <Route path="/ekonomi/kelas-10/bab-2" element={<Eko10b2 />} />
        <Route path="/ekonomi/kelas-10/bab-3" element={<Eko10b3 />} />
        <Route path="/ekonomi/kelas-10/bab-4" element={<Eko10b4 />} />
        <Route path="/ekonomi/kelas-10/bab-5" element={<Eko10b5 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
