import '../styles/unProjet.scss'

export default function UnProjet() {
  return (
    <div className='unProjet'>
      <div className='bloc-image'>
        <img src="/images/image8.jpg" alt="" />
      </div>
      <div className='bloc-info'>
        <h2>Titre</h2>
        <p>
          Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer 
          une mise en page, le texte définitif venant remplacer
          le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux
        </p>
        <div className='les-boutons'>
          <a href="bouton" className='bouton'>gitHub</a>
          <a href="" className='bouton'>projet</a>
        </div>
      </div>
    </div>
  )
}
