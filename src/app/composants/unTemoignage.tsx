import '../styles/unTemoignage.scss'

interface Temoignage {
  nom: string;
  poste: string;
  texte: string;
}

interface UnTemoignageProps {
  temoignage: Temoignage;
}

const UnTemoignage: React.FC<UnTemoignageProps> = ({ temoignage }) => {
  return (
    <div className='unTemoignage'>
      <h2 className='nom-temoignant'>{temoignage.nom}</h2>
      <h4 className='role-temoignant'>{temoignage.poste}</h4>
      <p className='texte-temoignant'>{temoignage.texte}</p>
    </div>
  )
}

export default UnTemoignage;
