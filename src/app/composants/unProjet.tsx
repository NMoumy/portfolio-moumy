import '../styles/unProjet.scss'
import React from 'react'
import Link from 'next/link';

interface UnProjetProps {
  projet: {
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

        <Link href="/projets" className='bouton'>En savoir plus</Link>

      </div>
    </div>
  )
}

export default UnProjet
// import '../styles/unProjet.scss'
// import React from 'react'

// interface UnProjetProps {
//   projet: {
//     image: string
//     titre: string
//     description: string
//     githubUrl: string
//     projetUrl: string
//   }
// }

// const UnProjet: React.FC<UnProjetProps> = ({ projet }) => {
//   if (!projet) {
//     return <p>Projet non trouvé</p>
//   }

//   return (
//     <div className='unProjet'>
//       <div className='bloc-image'>
//         <img src={projet.image} alt={projet.titre} />
//       </div>
//       <div className='bloc-info'>
//         <h2>{projet.titre}</h2>
//         <p>{projet.description.split(' ').slice(0, 15).join(' ')}...</p>
//         <div className='les-boutons'>
//           <a href={projet.githubUrl} className='bouton'>gitHub</a>
//           <a href={projet.projetUrl} className='bouton'>projet</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UnProjet
