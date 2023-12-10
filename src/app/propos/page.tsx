import '../styles/propos.scss'
import Image from 'next/image'

export default function Projet() {
  return (
    <main className='mainPropos'>
      <div className='titre'>
        <h1>À Propos</h1>
      </div>

      <div className='bloc-propos'>
        <div className='img-propos'>
          <img src='/images/propos3.jpg' alt='image' />
        </div>
        <div className='texte-propos'>
          <p>
            Bienvenue sur mon site ! Passionnée par la programmation et le design,
            je suis une étudiante en technique d'intégration multimédia au Collège Maisonneuve.
            Mon parcours académique nourrit ma curiosité et alimente ma soif de connaissances dans
            le vaste monde du développement web.
          </p>
          <p>
            J'ai découvert ma passion pour la concrétisation d'idées à travers des projets innovants.
            Mon approche créative et mon désir constant d'apprendre me motivent à progresser et à devenir
            une développeuse compétente. Actuellement à la recherche d'un stage, je suis impatiente de mettre en pratique
            les compétences que j'ai acquises au cours de mes études.
          </p>
          <p>
            Explorez mon portfolio pour découvrir les projets sur lesquels j'ai travaillé et pour avoir un aperçu de mon parcours.
            Je suis ouverte aux opportunités de collaboration et toujours prête à relever de nouveaux défis.
            N'hésitez pas à me contacter pour discuter de projets passionnants ou de possibilités de stage.
          </p>
        </div>
      </div>

      <section className='section-competence'>
        <h1 className='titre-competence'>Mes compétences</h1>
        <div className='bloc-competence'>
          <div className='bloc-prog'>
            <h2>Programmation</h2>
            <ul>
              <li className='logo-competence html'><img src="icones/html.png" alt="html" /></li>
              <li className='logo-competence css'><img src="icones/css.png" alt="css" /></li>
              <li className='logo-competence js'><img src="icones/javascript.png" alt="javascript" /></li>
              <li className='logo-competence react'><img src="icones/react.png" alt="react" /></li>
              <li className='logo-competence nextjs'><img src="icones/nextjs.png" alt="nextJs" /></li>
              <li className='logo-competence firebase'><img src="icones/firebase.png" alt="firebase" /></li>
              <li className='logo-competence php'><img src="icones/php.png" alt="php" /></li>
              <li className='logo-competence mysql'><img src="icones/mysql.png" alt="mySQL" /></li>
              <li className='logo-competence wordpress'><img src="icones/wordpress.png" alt="wordpress" /></li>
            </ul>
          </div>
          <div className='bloc-creation'>
            <h2>Création</h2>
            <ul>
              <li className='logo-competence photoshop'><img src="icones/ps.png" alt="photoshop" /></li>
              <li className='logo-competence illustrator'><img src="icones/ai.png" alt="illustrator" /></li>
              <li className='logo-competence after-effects'><img src="icones/ae.png" alt="after effects" /></li>
              <li className='logo-competence xd'><img src="icones/xd.png" alt="adobe xd" /></li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}