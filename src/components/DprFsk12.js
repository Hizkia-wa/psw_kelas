import React from 'react';
import './Team.css';
import tm1 from '../images/Fsk12p1.jpg';
import tm2 from '../images/Fsk12p2.jpg';
import tm3 from '../images/Fsk12p3.jpg';
import tm4 from '../images/Fsk12p4.jpg';
import tm5 from '../images/Fsk12p5.jpg';
import tm6 from '../images/Fsk12p6.jpg';
import tm7 from '../images/Fsk12p7.jpg';
import tm8 from '../images/Fsk12p8.jpg';
import tm9 from '../images/Fsk12p9.jpg';
import tm10 from '../images/Fsk12p10.jpg';
import tm11 from '../images/Fsk12p11.jpg';
import tm12 from '../images/Fsk12p12.jpg';
import tm13 from '../images/Fsk12p13.jpg';
import tm14 from '../images/Fsk12p14.jpg';
import tm15 from '../images/Fsk12p15.jpg';
import tm16 from '../images/Fsk12p16.jpg';

const teamData = [
  { id: 1, name: "HIZKIA CRISTIAN SIAHAAN", img: tm1, about: "..." },
  { id: 2, name: "JONATAN RAJA BASA SIMAMORA", img: tm5, about: "..." },
  { id: 3, name: "JESICA ROULI TUA NAPITUPULU", img: tm9, about: "..." },
  { id: 4, name: "JOHANNA", img: tm13, about: "..." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const Team = () => {
  return (
    <div className="container">
      {teamData.map((teamMember, index) => (
        <div key={teamMember.id} className="team-section">
          <main className="main-section">
            <div className="left-section">
              <h3>{teamMember.name}</h3>
              <img
                src={teamMember.img}
                alt={`Profile of ${teamMember.name}`}
                className="profile-image"
              />
            </div>
            <div className="right-section">
              <h2 className="section-title">About Me</h2>
              <p className="description">{teamMember.about}</p>
            </div>
          </main>
          <section className="my-team">
            <div className="team-gallery">
              {myTeamImages[index] &&
                myTeamImages[index].map((image, i) => (
                  <img key={i} src={image} alt={`Team Member ${i + 1}`} className="team-image" />
                ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Team;
