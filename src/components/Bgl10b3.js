import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Bgl10b3.css';

const FungiCard = ({ image, title, description, link }) => {
    return (
        <div 
            className="fungi-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={link} className="card-link">
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="card-link-text">Pelajari Lebih Lanjut</span>
                </div>
            </Link>
        </div>
    );
};

const Fungi = () => {
    const [activeSection, setActiveSection] = useState('definisi');

    const fungiTypes = [
        {
            image: zygomta1,
            title: 'Zygomycota',
            link: 'https://ars.els-cdn.com/content/image/3-s2.0-B0122268652001346-gr3.jpg',
            description: 'Jamur dengan reproduksi zigospora unik.'
        },
        {
            image: ascomycota,
            title: 'Ascomycota',
            link: 'https://srv1.portal.p-cd.net/850p/2022/09/24/178207-1663993695-785818.jpg',
            description: 'Jamur kantung dengan karakteristik istimewa.'
        },
        {
            image: basidiomycota,
            title: 'Basidiomycota',
            link: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/11/13/1259118258.jpg',
            description: 'Jamur payung dengan struktur menarik.'
        },
        {
            image: deuteromycota,
            title: 'Deuteromycota',
            link: 'https://www.kerajaanbiologi.com/wp-content/uploads/2018/11/ciri-ciri-jamur-karateristik-fungi.jpg',
            description: 'Jamur tidak sempurna dengan misteri reproduksi.'
        }
    ];

    const sectionContent = {
        definisi: (
            <div className="section-content">
                <h2>Definisi Fungi</h2>
                <p>
                    Fungi adalah organisme eukariotik unik yang tidak berklorofil, 
                    berperan penting dalam ekosistem sebagai pengurai dan simbiosis. 
                    Mereka memiliki struktur sel khusus dan cara reproduksi yang kompleks.
                </p>
                <h4>Fakta Menarik:</h4>
                <ul>
                    <li>Fungi dapat ditemukan di hampir semua lingkungan, dari tanah hingga air.</li>
                    <li>Beberapa fungi dapat memiliki efek psikoaktif.</li>
                    <li>Fungi memiliki kemampuan untuk memecah bahan organik yang sulit, seperti kayu.</li>
                </ul>
            </div>
        ),
        ciri: (
            <div className="section-content">
                <h2>Ciri-ciri Khusus Fungi</h2>
                <ul className="feature-list">
                    <li>Sel eukariotik tanpa klorofil</li>
                    <li>Dinding sel tersusun dari kitin</li>
                    <li>Reproduksi melalui spora</li>
                    <li>Hidup sebagai saprofit atau parasit</li>
                    <li>Memiliki struktur hifa kompleks</li>
                </ul>
            </div>
        ),
        struktur: (
            <div className="section-content">
                <h2>Struktur Tubuh Fungi</h2>
                <div className="struktur-container">
                    <img src={StrukturFungi} alt="Struktur Fungi" />
                    <div className="struktur-description">
                        <p>
                            Struktur fungi terdiri dari hifa, struktur benang halus 
                            yang membentuk miselium. Hifa dapat bersekat atau tidak bersekat, 
                            dengan kemampuan menyerap nutrisi dari lingkungan.
                        </p>
                    </div>
                </div>
            </div>
        ),
        fungsi: (
            <div className="section-content">
                <h2>Fungsi Fungi dalam Ekosistem</h2>
                <p>
                    Fungi memiliki peranan yang sangat penting dalam ekosistem, termasuk:
                </p>
                <ul>
                    <li>Pengurai: Membantu dalam penguraian bahan organik.</li>
                    <li>Simbiosis: Berkontribusi dalam hubungan simbiosis dengan tanaman.</li>
                    <li>Produksi: Beberapa fungi digunakan dalam produksi makanan dan obat-obatan.</li>
                </ul>
            </div>
        )
    };

    return (
        <div 
            className="fungi-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="fungi-header">
                <h1>Dunia  Fungi</h1>
                <p>Menjelajahi Keunikan Dunia Jamur</p>
            </div>

            <div className="section-navigator">
                <button 
                    className={activeSection === 'definisi' ? 'active' : ''}
                    onClick={() => setActiveSection('definisi')}
                >
                    Definisi
                </button>
                <button 
                    className={activeSection === 'ciri' ? 'active' : ''}
                    onClick={() => setActiveSection('ciri')}
                >
                    Ciri-ciri
                </button>
                <button 
                    className={activeSection === 'struktur' ? 'active' : ''}
                    onClick={() => setActiveSection('struktur')}
                >
                    Struktur
                </button>
                <button 
                    className={activeSection === 'fungsi' ? 'active' : ''}
                    onClick={() => setActiveSection('fungsi')}
                >
                    Fungsi
                </button>
            </div>

            <div className="main-content">
                {sectionContent[activeSection]}
            </div>

            <div className="fungi-classification">
                <h2>Klasifikasi Fungi</h2>
                <div className="fungi-grid">
                    {fungiTypes.map((fungi, index) => (
                        <FungiCard key={index} {...fungi} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fungi;
