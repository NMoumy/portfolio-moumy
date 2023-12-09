'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import '../styles/entete.scss'

export default function Entete() {
  const pathname = usePathname()

  return (
    <header className='entete'>
      <nav>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : 'non-active'}`} href="/">Accueil</Link>
          </li>
          <li>
            <Link className={`link ${pathname === '/propos' ? 'active' : 'non-active'}`} href="/propos">À propos</Link>
          </li>
          <li>
            <Link className={`link ${pathname === '/projets' ? 'active' : 'non-active'}`} href="/projets">Projets</Link>
          </li>
          <li>
            <a href="/Ndiaye_Moumy_CV.pdf" className='non-active' download>Télécharger CV</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

/*
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
} */