'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import '../styles/entete.scss'

export default function Entete() {
  const pathname = usePathname()
  const [estOuvert, setEstOuvert] = useState(false);
  const [classeNav, setClasseNav] = useState('nav-ordi');

  useEffect(() => {
    const gererRedimensionnement = () => {
      if (window.innerWidth > 768) {
        setClasseNav('nav-ordi');
        setEstOuvert(true); // Ouvre le menu lorsque la fenêtre est redimensionnée à une taille supérieure à 768px
      } else {
        setClasseNav('nav-mobile');
        setEstOuvert(false); // Ferme le menu lorsque la fenêtre est redimensionnée à une taille inférieure à 768px
      }
    };

    if (typeof window !== 'undefined') {
      gererRedimensionnement(); // Appelle la fonction une fois au chargement de la page
      window.addEventListener('resize', gererRedimensionnement);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', gererRedimensionnement);
      }
    };
  }, []);

  useEffect(() => {
    const gererRedimensionnement = () => {
      if (window.innerWidth > 768) {
        document.body.classList.remove('no-scroll');
      } else {
        estOuvert ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
      }
    };

    window.addEventListener('resize', gererRedimensionnement);
    gererRedimensionnement();

    return () => {
      window.removeEventListener('resize', gererRedimensionnement);
    };
  }, [estOuvert]);
  
  return (
    <header className='entete'>
      <button className={`bouton-burger ${estOuvert ? 'ouvert' : ''}`} onClick={() => setEstOuvert(!estOuvert)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {(estOuvert || classeNav === 'nav-ordi') && (
        <nav className={classeNav}>
          <ul>
            <li>
              <Link className={`link ${pathname === '/' ? 'active' : 'non-active'}`} href="/" onClick={() => setEstOuvert(false)}>Accueil</Link>
            </li>
            <li>
              <Link className={`link ${pathname === '/propos' ? 'active' : 'non-active'}`} href="/propos" onClick={() => setEstOuvert(false)}>À propos</Link>
            </li>
            <li>
              <Link className={`link ${pathname === '/projets' ? 'active' : 'non-active'}`} href="/projets" onClick={() => setEstOuvert(false)}>Projets</Link>
            </li>
            <li>
              <a href="/Ndiaye_Moumy_CV.pdf" className='non-active' download onClick={() => setEstOuvert(false)}>Télécharger CV</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
     