import { Key } from 'react'
import '../styles/lesProjets.scss'
import UnProjet from './unProjet'

// Importer les données du fichier JSON
const projetsData = require('../../../data/projets.json')

interface LesProjetsProps {
  nombreDeProjets?: number;
}

export default function LesProjets({ nombreDeProjets }: LesProjetsProps) {
  const projetsAAfficher = nombreDeProjets ? projetsData.slice(0, nombreDeProjets) : projetsData;

  return (
    <div className='lesProjets'>
      {projetsAAfficher.length > 0 ? (
        projetsAAfficher.map((projet: any, index: Key | null | undefined) => (
          <UnProjet key={index} projet={projet} />
        ))
      ) : (
        <p>Il n'y a pas de projets à afficher.</p>
      )}
    </div>
  )
}