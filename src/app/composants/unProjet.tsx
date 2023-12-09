'use client'
import '../styles/unProjet.scss'

import React from 'react'
import Link from 'next/link';


interface UnProjetProps {
  projet: {
    id: string
    image: string
    titre: string
    description: string
    githubUrl: string
    projetUrl: string
  }
}

const UnProjet: React.FC<UnProjetProps> = ({ projet }) => {
  if (!projet) {
    return <p>Projet non trouvé</p>
  }

  return (
    <div className='unProjet'>
      <div className='bloc-image'>
        <img src={projet.image} alt={projet.titre} />
      </div>
      <div className='bloc-info'>
        <h2>{projet.titre}</h2>
        <p>{projet.description.split(' ').slice(0, 15).join(' ')}...</p>

        <Link href={`/projets/${projet.id}`} className='bouton'>En savoir plus</Link>
      </div>
    </div>
  )
}

export default UnProjet

