// "use client"
import '../../styles/pageUnProjet.scss'
import projetData from '../../../../data/projets.json';

export default function PageUnProjet({params}:{
  params: { id: string}
}) {
  // Trouver le projet correspondant à l'id
  const projet = projetData.find(p => p.id === params.id);

  // Si le projet n'existe pas, retourner un message d'erreur ou une autre page
  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className='pageUnProjet'>
      <div className='bloc-un-projet'>
        <div className='bloc-image'>
          <img src={projet.image} alt={projet.titre} />
        </div>
        <div className='bloc-info'>
          <h2>{projet.titre}</h2>
          <p>{projet.description}</p>
          <div className='les-boutons'>
            <a href={projet.githubUrl} className='bouton'>
              GitHub
            </a>
            <a href={projet.projetUrl} className='bouton'>
              Projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};