"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import UnTemoignage from './unTemoignage';
import temoignagesData from '../../../data/temoignages.json';
import '../styles/carousselTeimoignages.scss';

export default function TemoignagesCarousel() {
  const [indexActif, setIndexActif] = useState(0);

  const allerSuivant = () => setIndexActif((indexActif + 1) % temoignagesData.length);
  const allerPrecedent = () => setIndexActif((indexActif - 1 + temoignagesData.length) % temoignagesData.length);

  const indexPrecedent = (indexActif - 1 + temoignagesData.length) % temoignagesData.length;
  const indexSuivant = (indexActif + 1) % temoignagesData.length;

  const temoignagesAffiches = [
    temoignagesData[indexPrecedent],
    temoignagesData[indexActif],
    temoignagesData[indexSuivant]
  ];

  return (
    <div className='CarousselTeimoignages'>
      <div className='les-temoignages'>
        {temoignagesAffiches.map((temoignage, index) => {
          let className = '';
          if (index === 1) {
            className = 'actif';
          } else {
            className = 'sur-le-cote';
          }
          return <UnTemoignage key={temoignage.nom} temoignage={temoignage} className={className} />;
        })}
      </div>
      <div className='controles'>
        <button onClick={allerPrecedent}>Précédent</button>
        <button onClick={allerSuivant}>Suivant</button>
      </div>
    </div>
  );
}