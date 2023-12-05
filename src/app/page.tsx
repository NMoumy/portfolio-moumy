import './styles/accueil.scss'
import LesProjets from './composants/lesProjets';
import React from 'react';
import Link from 'next/link';
import TemoignagesCarousel from './composants/temoignagesCarousel';

export default function Accueil() {
  return (
    <main className="accueil">

      <section className='section-presentation'>
        <div className='texte-presentation'>
          <h1>Bonjour! Mon nom est</h1>
          <h1>Moumy Ndiaye</h1>
        </div>
      </section>

      <section className='section-propos'>

        <div className='bloc-propos'>
          <div className='image-propos'>
            <img src="/images/image9.jpg" alt="" />
          </div>

          <div className='texte-propos'>
            <h1 className='titre-propos'>À propos</h1>

            <p className='extrait-propos'> 
              Bienvenue sur mon site ! Passionnée par la programmation et le design,
              je suis une étudiante en technique d'intégration multimédia au Collège Maisonneuve.
              Mon parcours académique nourrit ma curiosité et alimente ma soif de connaissances dans
              le vaste monde du développement web...
            </p>

            <Link href="/propos">En savoir plus</Link>
          </div>
        </div>

      </section>

      <section className='section-projet'>
        <div className='texte-section'>
          <h1>Mes projets</h1>
          <Link href="/projets">Voir tout mes projets</Link>
        </div>
        <div className='les-projets'>
          <LesProjets nombreDeProjets={3} />
        </div>
        
      </section>

      <section className='section-teimoignage'>
        <h1>Témoignages sur mes competences</h1>
        <TemoignagesCarousel />
      </section>

    </main>
  )
}
