import './styles/accueil.scss'
import UnProjet from './composants/unProjet';
import React from 'react';
import Link from 'next/link';
import UnTemoignage from './composants/unTemoignage';

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
          <UnProjet />
          <UnProjet />
          <UnProjet />
        </div>
        
      </section>

      <section className='section-teimoignage'>
        <h1>Témoignages sur mes competences</h1>
        <UnTemoignage />
      </section>

    </main>
  )
}
// import './styles/accueil.scss'

// export default function Accueil() {
//   return (
//     <main className="accueil">

//       <section className='section-presentation'>
//         <div className='texte-presentation'>
//           <h1>Bonjour! Mon nom est</h1>
//           <h1>Moumy Ndiaye</h1>
//         </div>
//       </section>

//       <section className='section-propos'>

//         <h1 className='titre-propos'>À propos</h1>

//         <div className='bloc-propos'>
//           <div className='texte-propos'>
//             <p>
//               Bienvenue sur mon site ! Passionnée par la programmation et le design,
//               je suis une étudiante en technique d'intégration multimédia au Collège Maisonneuve.
//               Mon parcours académique nourrit ma curiosité et alimente ma soif de connaissances dans
//               le vaste monde du développement web.
//             </p>
//             <p>
//               J'ai découvert ma passion pour la concrétisation d'idées à travers des projets innovants.
//               Mon approche créative et mon désir constant d'apprendre me motivent à progresser et à devenir
//               une développeuse compétente. Actuellement à la recherche d'un stage, je suis impatiente de mettre en pratique
//               les compétences que j'ai acquises au cours de mes études.
//             </p>
//             <p>
//             Explorez mon portfolio pour découvrir les projets sur lesquels j'ai travaillé et pour avoir un aperçu de mon parcours.
//             Je suis ouverte aux opportunités de collaboration et toujours prête à relever de nouveaux défis.
//             N'hésitez pas à me contacter pour discuter de projets passionnants ou de possibilités de stage.
//             </p>
//           </div>

//           <div className='bloc-anim'></div>

//         </div>

//       </section>

//       <section className='section-competence section-image'>
//         <h1>Mes Competences</h1>
//       </section>

//       <section className='section-projet'>

//       </section>

//       <section className='section-teimoignage section-image'>

//       </section>

//     </main>
//   )
// }
