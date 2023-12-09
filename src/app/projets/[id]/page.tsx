// "use client"
import '../../styles/pageUnProjet.scss'
import projetData from '../../../../data/projets.json';

export default function PageUnProjet({params}:{
  params: { id: string }
}) {
  return (
    <div className='pageUnProjet'>
      <div className='bloc-image'>
        {/* <img src={projet.image} alt={projet.titre} />
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
        </div> */}
        {params.id}
      </div>
    </div>
  );
};