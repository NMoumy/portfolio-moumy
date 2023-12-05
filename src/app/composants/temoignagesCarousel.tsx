import React from 'react';
import UnTemoignage from './unTemoignage';
import temoignagesData from '../../../data/temoignages.json';

export default function TemoignagesCarousel() {
  return (
    <div className='les-temoignages'>
      {temoignagesData.map((temoignage) => (
        <div key={temoignage.nom}>
          <UnTemoignage temoignage={temoignage} />
        </div>
      ))}
    </div>
  );
}