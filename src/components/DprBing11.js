import React from 'react';
import './Team.css';
import tm1 from '../images/tm1.jpg';
import tm2 from '../images/tm2.jpg';
import tm3 from '../images/tm3.jpg';
import tm4 from '../images/tm4.jpg';
import tm5 from '../images/tm5.jpg';
import tm6 from '../images/tm6.jpg';
import tm7 from '../images/tm7.jpg';
import tm8 from '../images/tm8.jpg';
import tm9 from '../images/tm9.jpg';
import tm10 from '../images/tm10.jpg';
import tm11 from '../images/tm11.jpg';
import tm12 from '../images/tm12.jpg';
import tm13 from '../images/tm13.jpg';
import tm14 from '../images/tm14.jpg';
import tm15 from '../images/tm15.jpg';
import tm16 from '../images/tm16.jpg';

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
