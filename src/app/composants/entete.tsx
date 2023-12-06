import React from 'react';
import Link from 'next/link';
import '../styles/entete.scss'

export default function Entete() {
  return (
    <header className='entete'>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/propos">À propos</Link>
          </li>
          <li>
            <Link href="/projets">Projets</Link>
          </li>
          <li>
            <a href="/Ndiaye_Moumy_CV.pdf" download>Telecharger CV</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
