import '../styles/projets.scss'
import LesProjets from '../composants/lesProjets'

export default function Projet() {
  return (
    <main className='mainProjets'>
      <div className='titre'>
        <h1>Mes Projets</h1>
      </div>
      <LesProjets />
    </main>
  )
}