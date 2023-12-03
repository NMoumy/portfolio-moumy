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
            <Link href="/projet">Projet</Link>
          </li>
          <li>
            <Link href="/">competence</Link>
          </li>
          <li>
            <Link href="/">A propos</Link>
          </li>
          <li>
            <a href="">Mon CV</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
